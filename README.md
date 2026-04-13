# Glow Design System

An **agentic design system** built for AI agent consumption. Every token, component, and usage rule is structured in TypeScript so AI agents can read and apply them programmatically when generating UI.

## Quick Start

```bash
# Install dependencies
npm install

# Run docs site
npm run dev

# Open in browser
open http://localhost:5175
```

## For AI Agents (MCP Server)

Glow includes an MCP server that exposes 8 tools for querying the DS. The repo ships with `.mcp.json`, so Claude Code picks it up automatically once built.

```bash
# Build the MCP server
cd packages/mcp-server && npm install && npm run build && cd ../..
```

Then open this repo in Claude Code — it will prompt once to approve the project-level MCP server, and `glow-ds` becomes available.

Available tools: `ds_overview`, `get_component`, `find_components`, `get_tokens`, `get_usage_rules`, `search_icons`, `get_component_source`, `get_pattern`

> Manual alternative (non-Claude-Code clients):
> `node $(pwd)/packages/mcp-server/build/index.js`

Also read [`CLAUDE.md`](./CLAUDE.md) — contains complete component inventory, mandatory rules, composition patterns, and step-by-step screen-building guide.

## Components (31)

| Category | Components |
|----------|------------|
| **Actions** | Button, IconButton |
| **Selection** | Checkbox, RadioButton, Toggle |
| **Form Inputs** | TextInput, Select, DatePicker |
| **Data Display** | Card, Chip, ChipGroup, Avatar, StarRating, ProviderCard, NetworkBadge, ScrollArea |
| **Feedback & Overlay** | Modal, Tooltip, TooltipPanel, Toast |
| **Navigation** | NavBar (Brand, Tabs, Tab), SideNav (Profile, Section, NavItem, SubItem, ToolItem, AppDownload, Footer, FooterItem) |
| **Zoe AI** | ZoeInput, ZoeThinkingLoader, ZoeUserBubble, ZoeResponseBubble, ZoeStreamingText, ZoeBenefitCard, ZoePromptChip, ZoeChatHeader, ZoeDrawer, ZoeProviderCard |

## Token Architecture (3 Layers)

```
Primitive (raw values) → Semantic (meaning) → Usage Rules (constraints)
```

| Layer | Path | Purpose |
|-------|------|---------|
| Primitive | `tokens/primitive/` | Raw palette, spacing grid, font scale, radii, shadows |
| Semantic | `tokens/semantic/` | Meaningful names mapped to primitives (103 color tokens, t-shirt spacing, typography presets) |
| Usage Rules | `tokens/usage/` | Mandatory constraints for choosing components and variants |

### Usage Rules (13 files)

| File | Covers |
|------|--------|
| `button-rules.ts` | Variant/size selection, pairing matrix |
| `selection-controls-rules.ts` | Checkbox vs RadioButton vs Toggle |
| `typography-rules.ts` | Tiempos Headline + Founders Grotesk pairing |
| `layout-rules.ts` | Background/surface defaults (white-first) |
| `tooltip-rules.ts` | Variants, modes, directions, content rules |
| `network-tier-rules.ts` | Insurance tier badge colors, icons, ordering |
| `card-rules.ts` | Variants, radius, padding, interactive patterns |
| `chip-rules.ts` | Chip vs Button.pill, variant/color/size selection |
| `modal-rules.ts` | Sizes, footer patterns, mobile behavior |
| `avatar-navbar-rules.ts` | Avatar sizes, NavBar zones, composition |
| `providercard-rules.ts` | ProviderCard avatar fallback, providerType, composition |
| `sidenav-rules.ts` | SideNav anatomy, compound components, hover states |
| `zoe-rules.ts` | Zoe AI chat answer types, component anatomy, layout rules |

## Icon System (1,882 icons)

| Style | Count | Import Pattern |
|-------|-------|----------------|
| Line | 925 | `import SearchLine from '@/components/Icon/icons/line/Search'` |
| Solid | 917 | `import SearchSolid from '@/components/Icon/icons/solid/Search'` |
| Specialty | 20 | `import HeartSpecialty from '@/components/Icon/icons/specialty/Heart'` |
| Profile | 20 | `import DoctorProfile from '@/components/Icon/icons/profile/Doctor'` |

## Component Manifest

`src/manifest.ts` — a centralized TypeScript file with full metadata for all 31 components:
- Props with types, defaults, and descriptions
- Variants and sizes
- Accessibility info
- Usage rules (whenToUse, avoidWhen)
- Related components
- Code examples

The MCP server reads the manifest at runtime to answer agent queries.

## Project Structure

```
glow-design-system/
├── CLAUDE.md                    # AI agent instructions (read first)
├── README.md                    # This file
├── src/
│   ├── components/              # All 31 DS components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── NavBar/
│   │   ├── ProviderCard/
│   │   ├── SideNav/
│   │   ├── Toast/
│   │   ├── Zoe*/               # 10 Zoe AI components
│   │   ├── Icon/icons/          # 1,882 SVG icons (line/solid/specialty/profile)
│   │   └── ...
│   ├── manifest.ts              # Component manifest (metadata for all components)
│   ├── hooks/                   # Shared hooks (useStreamingText, useResponseSequence)
│   └── docs/                    # Documentation site
│       ├── components/          # Component doc pages
│       ├── lab/                 # Work-in-progress component demos
│       └── examples/            # Full-page example compositions
├── tokens/
│   ├── primitive/               # Raw values (colors, spacing, typography, radii, shadows)
│   ├── semantic/                # Meaningful mappings (103 color tokens, t-shirt spacing)
│   └── usage/                   # 13 rule files (button, card, chip, modal, etc.)
├── packages/
│   └── mcp-server/              # MCP server for AI agent integration
│       ├── src/index.ts         # Server implementation (8 tools)
│       ├── package.json
│       └── tsconfig.json
├── .claude/
│   └── commands/                # Claude Code slash commands
│       ├── glow.md              # /glow — Build UI with Glow DS
│       ├── glow-sync.md         # /glow-sync — Sync all registry files
│       ├── glow-review.md       # /glow-review — Review code against DS rules
│       ├── glow-tokens.md       # /glow-tokens — Token lookup
│       └── glow-figma.md        # /glow-figma — Build in Figma with Glow DS
└── scripts/
    └── validate-tokens.cjs      # Token compliance validator
```

## Fonts

- **Tiempos Headline** (`font-display`) — serif, page-level H1 titles only
- **Founders Grotesk** (`font-default`) — sans-serif, everything else

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3
- React Router (docs site)

## Docs Site Examples

Working full-page compositions in `src/docs/examples/`:
- **LoginExample** — Form with inputs, button, typography pairing
- **ProviderSearchResultsExample** — Desktop search with filters, ProviderCard layout, NavBar
- **HealtheeHomeExample** — Full dashboard with navigation, cards, benefits grid
- **ZoeChatExample** — AI chat interface with streaming, thinking loader, benefit cards

## Scripts

```bash
npm run dev              # Start docs dev server (port 5175)
npm run build            # Build docs site
npm run lint             # Run ESLint
npm run icons:build      # Full icon pipeline (rename → generate → index)
```
