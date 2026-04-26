#!/usr/bin/env node

// ============================================================
// GLOW DESIGN SYSTEM — MCP Server
//
// Exposes the Glow DS to any AI agent via Model Context Protocol.
// Reads from src/manifest.ts, tokens/, and usage rules at runtime
// so it's always in sync with the latest DS state.
//
// Transport: stdio (for Claude Code, Cursor, Windsurf, etc.)
// IMPORTANT: Never use console.log() — only console.error() for logging.
// ============================================================

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

// ── DS Root Path ────────────────────────────────────────────
// Resolve relative to this server's location: packages/mcp-server/build/ → ../../..
const DS_ROOT = resolve(import.meta.dirname, "..", "..", "..");

// ── Manifest Loader ─────────────────────────────────────────
// Reads manifest.ts as text and extracts component data via regex/parsing.
// This avoids needing tsx or ts-node as a runtime dependency.

interface ManifestComponent {
  name: string;
  import: string;
  category: string;
  description: string;
  figmaNodeId: string | null;
  variants: string[];
  sizes: string[];
  props: Record<string, { type: string; default?: string; required: boolean; description: string }>;
  whenToUse: string[];
  avoidWhen: string[];
  relatedComponents: string[];
  examples: { label: string; code: string }[];
}

let _manifestCache: ManifestComponent[] | null = null;
let _manifestMtime: number = 0;

function loadManifest(): ManifestComponent[] {
  // src/manifest.json is auto-generated from src/manifest.ts by
  // scripts/generate-manifest-json.cjs (wired into `npm run prebuild`).
  // Loading the JSON directly avoids regex-parsing TypeScript at runtime.
  const manifestPath = join(DS_ROOT, "src", "manifest.json");
  if (!existsSync(manifestPath)) {
    console.error(
      `Manifest not found at ${manifestPath}. ` +
      `Run: node scripts/generate-manifest-json.cjs (or npm run prebuild).`
    );
    return [];
  }

  const currentMtime = statSync(manifestPath).mtimeMs;

  if (_manifestCache && _manifestMtime === currentMtime) {
    return _manifestCache;
  }

  let parsed: { components?: ManifestComponent[] };
  try {
    parsed = JSON.parse(readFileSync(manifestPath, "utf-8"));
  } catch (err) {
    console.error(`Failed to parse ${manifestPath}:`, err);
    return [];
  }

  const components = Array.isArray(parsed.components) ? parsed.components : [];

  _manifestCache = components;
  _manifestMtime = currentMtime;
  return components;
}

// ── Create Server ───────────────────────────────────────────
const server = new McpServer({
  name: "glow-ds",
  version: "1.0.0",
  description: "Glow Design System — components, tokens, icons, and usage rules for building Healthee UI",
});

// ═══════════════════════════════════════════════════════════
// TOOL 1: Get Component
// Agent asks about a specific component by name
// ═══════════════════════════════════════════════════════════
server.registerTool(
  "get_component",
  {
    title: "Get Component Details",
    description:
      "Returns full details about a Glow DS component: description, variants, sizes, props, usage guidelines, and code examples. Use this when you need to know how to use a specific component.",
    inputSchema: z.object({
      name: z.string().describe("Component name in PascalCase (e.g. 'Button', 'ProviderCard', 'ZoeInput')"),
    }),
  },
  async ({ name }) => {
    const components = loadManifest();
    const component = components.find(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );

    if (!component) {
      const available = components.map((c) => c.name).join(", ");
      return {
        content: [{ type: "text", text: `Component "${name}" not found. Available: ${available}` }],
        isError: true,
      };
    }

    // Also read the types file for full prop definitions
    const typesPath = join(DS_ROOT, "src", "components", component.name, `${component.name}.types.ts`);
    let propsSource = "";
    if (existsSync(typesPath)) {
      propsSource = readFileSync(typesPath, "utf-8");
    }

    const result = [
      `# ${component.name}`,
      ``,
      `**Import:** \`${component.import}\``,
      `**Category:** ${component.category}`,
      `**Description:** ${component.description}`,
      component.figmaNodeId ? `**Figma Node:** ${component.figmaNodeId}` : "",
      ``,
      component.variants.length ? `**Variants:** ${component.variants.join(", ")}` : "",
      component.sizes.length ? `**Sizes:** ${component.sizes.join(", ")}` : "",
      ``,
      `## When to Use`,
      ...component.whenToUse.map((w) => `- ${w}`),
      ``,
      `## Avoid When`,
      ...component.avoidWhen.map((a) => `- ${a}`),
      ``,
      `## Related Components`,
      component.relatedComponents.join(", "),
      ``,
      propsSource ? `## Props (TypeScript)\n\`\`\`typescript\n${propsSource}\n\`\`\`` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return { content: [{ type: "text", text: result }] };
  }
);

// ═══════════════════════════════════════════════════════════
// TOOL 2: Find Components
// Agent describes what it needs, gets matching components
// ═══════════════════════════════════════════════════════════
server.registerTool(
  "find_components",
  {
    title: "Find Components",
    description:
      "Search for Glow DS components by category, keyword, or use case. Returns matching components with descriptions and usage guidelines.",
    inputSchema: z.object({
      query: z
        .string()
        .optional()
        .describe("Search keyword (e.g. 'form', 'navigation', 'filter', 'chat')"),
      category: z
        .enum(["actions", "forms", "data-display", "feedback", "navigation", "zoe-ai", "utility"])
        .optional()
        .describe("Filter by component category"),
    }),
  },
  async ({ query, category }) => {
    let components = loadManifest();

    if (category) {
      components = components.filter((c) => c.category === category);
    }

    if (query) {
      const q = query.toLowerCase();
      components = components.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.whenToUse.some((w) => w.toLowerCase().includes(q)) ||
          c.variants.some((v) => v.toLowerCase().includes(q))
      );
    }

    if (components.length === 0) {
      return {
        content: [{ type: "text", text: "No components found matching your criteria." }],
      };
    }

    const result = components
      .map(
        (c) =>
          `**${c.name}** (${c.category})\n  ${c.description}\n  Import: \`${c.import}\`\n  ${c.variants.length ? `Variants: ${c.variants.join(", ")}` : ""}${c.sizes.length ? ` | Sizes: ${c.sizes.join(", ")}` : ""}`
      )
      .join("\n\n");

    return {
      content: [{ type: "text", text: `Found ${components.length} component(s):\n\n${result}` }],
    };
  }
);

// ═══════════════════════════════════════════════════════════
// TOOL 3: Get Design Tokens
// Agent needs token values for colors, spacing, typography
// ═══════════════════════════════════════════════════════════
server.registerTool(
  "get_tokens",
  {
    title: "Get Design Tokens",
    description:
      "Returns Glow DS token values. Search by category (colors, spacing, typography, radii, shadows, z-index) and optionally by keyword. Always use these tokens — never hardcode values.",
    inputSchema: z.object({
      category: z
        .enum(["colors", "spacing", "typography", "radii", "shadows", "z-index"])
        .describe("Token category"),
      layer: z
        .enum(["primitive", "semantic"])
        .optional()
        .default("semantic")
        .describe("Token layer: 'primitive' for raw values, 'semantic' for meaningful names (default: semantic)"),
      search: z
        .string()
        .optional()
        .describe("Filter tokens containing this keyword (e.g. 'primary', 'error', 'display')"),
    }),
  },
  async ({ category, layer, search }) => {
    const tokenPath = join(DS_ROOT, "tokens", layer ?? "semantic", `${category}.ts`);

    if (!existsSync(tokenPath)) {
      return {
        content: [{ type: "text", text: `Token file not found: ${tokenPath}` }],
        isError: true,
      };
    }

    let content = readFileSync(tokenPath, "utf-8");

    if (search) {
      const lines = content.split("\n");
      const filtered = lines.filter((line) =>
        line.toLowerCase().includes(search.toLowerCase())
      );
      if (filtered.length === 0) {
        return {
          content: [{ type: "text", text: `No tokens matching "${search}" in ${layer}/${category}.ts` }],
        };
      }
      content = filtered.join("\n");
    }

    return {
      content: [{ type: "text", text: `# ${layer}/${category}.ts\n\n\`\`\`typescript\n${content}\n\`\`\`` }],
    };
  }
);

// ═══════════════════════════════════════════════════════════
// TOOL 4: Get Usage Rules
// Agent needs to know when/how to use components correctly
// ═══════════════════════════════════════════════════════════
server.registerTool(
  "get_usage_rules",
  {
    title: "Get Usage Rules",
    description:
      "Returns usage rules and constraints for a component family. Includes when to use, when to avoid, variant selection, and pairing rules. ALWAYS read these before building UI.",
    inputSchema: z.object({
      component: z
        .enum([
          "button", "card", "chip", "modal", "tooltip", "layout",
          "selection-controls", "typography", "avatar-navbar", "sidenav",
          "network-tier", "providercard", "zoe", "composition",
        ])
        .describe("Component family name"),
    }),
  },
  async ({ component }) => {
    const rulesPath = join(DS_ROOT, "tokens", "usage", `${component}-rules.ts`);

    if (!existsSync(rulesPath)) {
      return {
        content: [{ type: "text", text: `Usage rules not found: ${rulesPath}` }],
        isError: true,
      };
    }

    const content = readFileSync(rulesPath, "utf-8");
    return {
      content: [{ type: "text", text: `# Usage Rules: ${component}\n\n\`\`\`typescript\n${content}\n\`\`\`` }],
    };
  }
);

// ═══════════════════════════════════════════════════════════
// TOOL 5: Search Icons
// Agent needs to find the right icon from 1,882 available
// ═══════════════════════════════════════════════════════════
server.registerTool(
  "search_icons",
  {
    title: "Search Icons",
    description:
      "Search the Glow DS icon library (1,882 icons). Returns matching icon names with import paths. NEVER use inline SVG — always use DS icons.",
    inputSchema: z.object({
      query: z.string().describe("Search term (e.g. 'search', 'heart', 'arrow', 'chevron')"),
      style: z
        .enum(["line", "solid", "specialty", "profile", "all"])
        .optional()
        .default("all")
        .describe("Icon style to search (default: all)"),
    }),
  },
  async ({ query, style }) => {
    const styles = style === "all" ? ["line", "solid", "specialty", "profile"] : [style];
    const results: string[] = [];

    for (const s of styles) {
      const iconsDir = join(DS_ROOT, "src", "components", "Icon", "icons", s);
      if (!existsSync(iconsDir)) continue;

      const icons = readdirSync(iconsDir)
        .filter((f) => f.endsWith(".tsx"))
        .map((f) => f.replace(".tsx", ""));

      const matched = icons.filter((i) =>
        i.toLowerCase().includes(query.toLowerCase())
      );

      if (matched.length > 0) {
        results.push(
          `## ${s}/ (${matched.length} matches)`,
          ...matched.map(
            (icon) =>
              `- **${icon}** → \`import ${icon}${s.charAt(0).toUpperCase() + s.slice(1)} from 'glow-ds/icons/${s}/${icon}'\``
          )
        );
      }
    }

    if (results.length === 0) {
      return {
        content: [{ type: "text", text: `No icons found matching "${query}".` }],
      };
    }

    return {
      content: [{ type: "text", text: results.join("\n") }],
    };
  }
);

// ═══════════════════════════════════════════════════════════
// TOOL 6: Get Component Source
// Agent needs to see the actual implementation
// ═══════════════════════════════════════════════════════════
server.registerTool(
  "get_component_source",
  {
    title: "Get Component Source Code",
    description:
      "Returns the source code of a Glow DS component. Use this when you need to understand the internal implementation, token usage, or accessibility features.",
    inputSchema: z.object({
      name: z.string().describe("Component name in PascalCase (e.g. 'Button', 'NavBar')"),
      file: z
        .enum(["source", "types", "both"])
        .optional()
        .default("both")
        .describe("Which file to return: 'source' (.tsx), 'types' (.types.ts), or 'both'"),
    }),
  },
  async ({ name, file }) => {
    const parts: string[] = [];
    const basePath = join(DS_ROOT, "src", "components", name);

    if (!existsSync(basePath)) {
      return {
        content: [{ type: "text", text: `Component folder not found: ${basePath}` }],
        isError: true,
      };
    }

    if (file === "source" || file === "both") {
      const sourcePath = join(basePath, `${name}.tsx`);
      if (existsSync(sourcePath)) {
        parts.push(`## ${name}.tsx\n\`\`\`tsx\n${readFileSync(sourcePath, "utf-8")}\n\`\`\``);
      }
    }

    if (file === "types" || file === "both") {
      const typesPath = join(basePath, `${name}.types.ts`);
      if (existsSync(typesPath)) {
        parts.push(`## ${name}.types.ts\n\`\`\`typescript\n${readFileSync(typesPath, "utf-8")}\n\`\`\``);
      }
    }

    return {
      content: [{ type: "text", text: parts.join("\n\n") || `No source files found for ${name}` }],
    };
  }
);

// ═══════════════════════════════════════════════════════════
// TOOL 7: Get Pattern Example
// Agent needs to see a full-page composition
// ═══════════════════════════════════════════════════════════
server.registerTool(
  "get_pattern",
  {
    title: "Get Pattern Example",
    description:
      "Returns source code of a full-page pattern example showing how multiple Glow DS components work together. Use these as templates when building new pages.",
    inputSchema: z.object({
      pattern: z
        .enum(["healthee-home", "provider-search", "login", "zoe-chat", "modal-form"])
        .describe("Pattern name"),
    }),
  },
  async ({ pattern }) => {
    const patternMap: Record<string, string> = {
      "healthee-home": "HealtheeHomeExample.tsx",
      "provider-search": "ProviderSearchResultsExample.tsx",
      "login": "LoginExample.tsx",
      "zoe-chat": "ZoeChatExample.tsx",
      "modal-form": "ModalFormExample.tsx",
    };

    const filename = patternMap[pattern];
    const filePath = join(DS_ROOT, "src", "docs", "examples", filename);

    if (!existsSync(filePath)) {
      return {
        content: [{ type: "text", text: `Pattern file not found: ${filePath}` }],
        isError: true,
      };
    }

    const content = readFileSync(filePath, "utf-8");
    return {
      content: [{ type: "text", text: `# Pattern: ${pattern}\n\n\`\`\`tsx\n${content}\n\`\`\`` }],
    };
  }
);

// ═══════════════════════════════════════════════════════════
// TOOL 8: DS Overview
// Quick summary of the entire design system
// ═══════════════════════════════════════════════════════════
server.registerTool(
  "ds_overview",
  {
    title: "Glow DS Overview",
    description:
      "Returns a high-level overview of the Glow Design System: component count, categories, token architecture, icon count, and key rules. Start here when you're new to the DS.",
    inputSchema: z.object({}),
  },
  async () => {
    const components = loadManifest();
    const categories = new Map<string, string[]>();
    for (const c of components) {
      if (!categories.has(c.category)) categories.set(c.category, []);
      categories.get(c.category)!.push(c.name);
    }

    const overview = [
      `# Glow Design System Overview`,
      ``,
      `An agentic design system built for AI agent consumption.`,
      `Every token, component, and usage rule is structured in TypeScript.`,
      ``,
      `## Stats`,
      `- **${components.length} components** across ${categories.size} categories`,
      `- **1,882 icons** in 4 styles (line, solid, specialty, profile)`,
      `- **103 semantic color tokens** grouped by intent`,
      `- **3-layer token architecture:** Primitive → Semantic → Usage Rules`,
      `- **5 pattern examples:** Home, Provider Search, Login, Zoe Chat, Modal+Form`,
      ``,
      `## Categories`,
      ...[...categories.entries()].map(
        ([cat, names]) => `- **${cat}** (${names.length}): ${names.join(", ")}`
      ),
      ``,
      `## Key Rules`,
      `- Never hardcode hex colors — use semantic tokens`,
      `- Never use inline SVG — import from icon library`,
      `- Never build containers with raw divs — use <Card>`,
      `- Max ONE primary button per screen`,
      `- Call button is MANDATORY on ProviderCard when actions exist`,
      `- Default background is always white (neutral-negative)`,
      `- Read usage rules before choosing component variants`,
      `- Always place form components at MODULE SCOPE — never define them inside a parent's render body (causes input focus loss). See get_pattern("modal-form") and get_usage_rules("composition").`,
      ``,
      `## Available Tools`,
      `- \`get_component\` — details about a specific component`,
      `- \`find_components\` — search by category or keyword`,
      `- \`get_tokens\` — design token values`,
      `- \`get_usage_rules\` — component usage constraints`,
      `- \`search_icons\` — find icons by name`,
      `- \`get_component_source\` — read source code`,
      `- \`get_pattern\` — full-page example code`,
    ].join("\n");

    return { content: [{ type: "text", text: overview }] };
  }
);

// ── Start Server ────────────────────────────────────────────
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("✅ Glow DS MCP server running on stdio");
  console.error(`   DS root: ${DS_ROOT}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
