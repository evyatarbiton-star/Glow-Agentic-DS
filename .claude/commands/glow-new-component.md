# /glow-new-component — Add a New Component INTO the Glow DS

## When to trigger

Use this skill when the user wants to **add a new component to the DS itself** — not consume the DS from another project. Trigger phrases: "add X to the DS", "let's build a [Component] in Glow", "create a new component", "I need a [Component] in the design system".

**Do NOT use for**:
- Building screens / pages / prototypes — that's `/glow` (consumer-side).
- Reviewing existing code — that's `/glow-review`.
- Looking up tokens — that's `/glow-tokens`.
- Sync-only after manual changes — that's `/glow-sync` (this command will call it for you).

## Inputs (any combination, all optional)

The user might give you any of these — or none:
- **Figma URL or node ID** → fetch via Figma MCP (`get_design_context`, `get_screenshot`, `get_variable_defs`, `get_metadata`).
- **Text description** → "I want a Banner component with title, message, dismiss button."
- **Sketch image** (path or pasted) → use `Read` to view it.
- **Just the component name** → "Add a Tabs component."

If no input is given, ask what to build before running Phase 1.

---

## Phase 1 — Understand

### 1a. Load DS context (parallel)
- `CLAUDE.md` (project root) — full Component Inventory, mandatory rules, naming conventions, token mapping table.
- `src/components/index.ts` — see what already exists; do not duplicate.
- 2–3 representative existing components (e.g. `Button/`, `Modal/`, `Chip/`) — match folder structure, prop pattern, inline-style conventions.
- Token semantic files: `tokens/semantic/colors.ts`, `spacing.ts`, `radii.ts`, `typography.ts`, `shadows.ts`, `z-index.ts`.

Use the **Explore agent** for this — load in parallel, do not serially read each file.

### 1b. Pre-existing-component check
Search `src/components/` and `src/components/_lab/` for anything similar. If a close match exists, **stop and ask the user**: "X already exists — should I extend it via a new prop instead of building a new component?"

### 1c. Parse the inputs
- **Figma**: extract node IDs, variable definitions, fonts, colors, spacing, radii. Save the variable list — every value must map to a token in Phase 3.
- **Image / sketch**: identify visual structure, list components inside.
- **Text**: extract intent, behavior, states.

### 1d. Ask clarifying questions (use `AskUserQuestion`, max 4)
Always cover these decisions:
1. **Name** (PascalCase) — confirm or propose.
2. **API style** — compound (`<X><X.Item>...`) vs data-driven (`items={[]}`) vs single component.
3. **Behavior**:
   - For interactive: controlled+uncontrolled both? single vs multi-select? toggle behavior?
   - For containers: variants? sizes? polymorphic `as` prop?
4. **Placement** — production (`src/components/`) or `_lab/` first? Default: ask. For non-trivial components default to `_lab/`.

Skip questions whose answers are obvious from the input. Don't pad to 4.

---

## Phase 2 — Research best practices

Before designing the API, do real research. Goal: not to copy others, but to know what's expected.

### 2a. WAI-ARIA Authoring Practices Guide
Use `WebFetch` on the relevant pattern:
- Disclosure / Accordion → `https://www.w3.org/WAI/ARIA/apg/patterns/accordion/`
- Dialog / Modal → `.../patterns/dialog-modal/`
- Tabs → `.../patterns/tabs/`
- Menu / Listbox / Combobox / Tree / Switch / Slider / etc. → `.../patterns/{name}/`

Extract: required ARIA attributes, role, keyboard interaction map, focus management.

### 2b. Industry references
Use `WebFetch` or `WebSearch` to look at how mature DS libraries solved this:
- **Radix UI** (`https://www.radix-ui.com/primitives/docs/components/{name}`) — best-in-class compound APIs and a11y.
- **Headless UI** (`https://headlessui.com/`)
- **Reach UI** / **shadcn/ui** / **React Aria** — fall back if Radix doesn't have it.

Capture:
- API shape conventions (controlled/uncontrolled, prop names)
- States they handle that you might miss
- Edge cases they document
- Animation/transition patterns

### 2c. Responsive considerations
Decide and document:
- Behavior on mobile (touch targets ≥ 44×44, no hover-only affordances).
- Breakpoints used (DS uses Tailwind defaults: sm 640, md 1024, lg 1200, xl 1536).
- Stacking, wrapping, scrolling behavior.

### 2d. State matrix
List EVERY state the component supports. Tick each that applies:
- [ ] default
- [ ] hover (mouse only — never the sole indicator)
- [ ] focus-visible (keyboard)
- [ ] active / pressed
- [ ] disabled
- [ ] loading (async actions)
- [ ] selected / checked / pressed (toggleable)
- [ ] error / invalid (validatable inputs)
- [ ] empty (collection-backed)
- [ ] open / closed (disclosures)
- [ ] read-only (input-like)
- [ ] indeterminate (tri-state controls)

---

## Phase 3 — Plan (gated on user approval)

### 3a. Build the token mapping table
For every visual value (color, spacing, radius, typography, shadow), name the EXACT semantic token.

**HARD STOP**: if any Figma value has no matching token, do not invent one. Ask the user:
> "Figma uses #abc123 / 13px / 18px line-height — there's no DS token that matches. Options: (1) round to nearest existing token (and tell me which), (2) add a new token to the DS, (3) is this a Figma mistake?"

The user said explicitly: **Figma can have mistakes**. Trust the DS over the design.

### 3b. Naming conventions checklist
- Component name: PascalCase (`Accordion`, `IconButton`, `ProviderCard`).
- Sub-components (compound): `Component.Item` or `ComponentItem` — match Modal/SideNav pattern in this DS (named exports, not dot-notation, per the existing convention).
- Route path: lowercase-hyphenated (`/components/accordion`, `/components/icon-button`).
- Sizes: t-shirt only — `xs | sm | md | lg | xl` (and t-shirt extended where needed).
- Variants: lowercase string union (`primary | secondary | outline | subtle | ghost | destructive`).
- Prop names: camelCase. Booleans use existing patterns: `disabled`, `loading`, `selected`, `pressed`, `open`, `pill`, `iconOnly`, `fullWidth`. Callbacks: `onClick`, `onChange`, `on{Event}`. Controlled value: `value` + `onValueChange`, `defaultValue`.

### 3c. File list
Standard 3-file pattern + doc page:
- `src/components/{Name}/{Name}.tsx` (or `_lab/{Name}/...` if labbed first)
- `src/components/{Name}/{Name}.types.ts`
- `src/components/{Name}/index.ts`
- `src/docs/components/{Name}Doc.tsx` (or `src/docs/lab/{Name}Lab.tsx` if labbed)

### 3d. Write a structured plan
Sections: Context · API · State management · Accessibility · Token mapping · Animation · Files to create · Files to modify · Verification.

If invoked in plan mode → write to the plan file and call `ExitPlanMode`.
Otherwise → present in chat and ask the user to confirm before building.

**Do not start writing code until the user approves.**

---

## Phase 4 — Build

### 4a. Generate files
Match the existing DS conventions exactly (read Button/Modal/Chip if uncertain):
- Inline `React.CSSProperties` with **named constants at module scope** for every visual value.
- Comment each constant with the resolved value: `const PANEL_BG = sc.neutral.surface.negative // #ffffff`.
- Tokens imported from `../../../tokens/semantic/...` (and `../../../tokens/primitive/...` only when semantic doesn't expose what you need).
- Icons imported from `../Icon/icons/{line|solid|specialty|profile}/{Name}` — never inline SVG (exception: animation primitives like spinners).
- A11y wired according to Phase 2a research.
- Keyboard handlers from the WAI-ARIA pattern.
- `prefers-reduced-motion` honored in any transition.
- TypeScript: interface in `*.types.ts`, extend appropriate `HTMLAttributes`, defaults destructured in function signature.

### 4b. Generate the doc page
Mirror `ButtonDoc.tsx` structure: `DocLayout` + `Section` blocks + `CodeBlock` snippets + props tables (one per interface for compound). Cover every state from the matrix in Phase 2d. Include a final "Usage" section with copy-pastable examples and a real-world composition example (e.g. our Accordion's "Some common questions" FAQ section).

### 4c. Validate locally
Run **before** moving on:
```bash
node scripts/validate-tokens.cjs src/components/{Name}/{Name}.tsx
node scripts/validate-tokens.cjs src/docs/components/{Name}Doc.tsx
```
Must report `0 violations`. If not, fix and re-run.

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -i "{Name}"
```
Must produce zero output (no errors in the new files; pre-existing errors elsewhere are fine).

---

## Phase 5 — Verify in browser

### 5a. Start the DS dev server
Use `preview_start` with name `glow-ds`. The MCP server resolves the project path and port via `~/.claude/launch.json` (currently port **5188**).

### 5b. Navigate and snapshot
Use `preview_eval` to navigate to `/components/{name}`. Use `preview_eval` with `JSON.stringify({...})` returns to verify:
- Page renders, `h1` matches the component name.
- ARIA wiring: `aria-expanded`, `aria-controls`, `role`, `aria-labelledby`.
- Token-derived styles via `preview_inspect` — confirm `background-color`, `border-color`, `font-size`, `line-height` match the token values.
- Each state from the matrix: simulate by clicking via `dispatchEvent` or `.click()` (NOT `preview_click` for IDs starting with underscore — it can fail silently; use `eval`'s direct DOM access).
- Keyboard map: dispatch `KeyboardEvent`s and verify focus + state changes.
- Reduced-motion: emulate via DevTools or just trust the code path.

### 5c. Screenshot the final composition example
Take one or two `preview_screenshot` calls for the user — show them the component in action.

---

## Phase 6 — Sync (chain into `/glow-sync`)

Don't duplicate `/glow-sync`'s work. Invoke it explicitly to handle every registry update:
- `src/components/index.ts` — exports.
- `lib/components.ts` — public library exports.
- `src/App.tsx` — route + import.
- `src/docs/layout/Sidebar.tsx` — nav entry in the right group.
- `src/manifest.ts` — full ComponentEntry (props, tokens used, a11y, examples).
- `CLAUDE.md` — Component Inventory table row + import block.
- `README.md` — component count + categories table.
- `tokens/usage/{name}-rules.ts` — usage rules file (if the component has variant/pairing decisions).
- `.claude/commands/glow.md` — reference table (only if the component is significant enough to warrant build-skill mention).
- Propagation step: copy consumer-facing skills (NOT this one and NOT glow-sync) to `~/.claude/commands/`.

After `/glow-sync` completes, run a final TypeScript check and the library build to confirm nothing broke:
```bash
npx tsc --noEmit --skipLibCheck
npx vite build --config vite.config.lib.ts
```

---

## Hard rules (never break)

1. **No invented tokens.** Every hex, every px, every font value must resolve to an existing semantic token. If Figma demands a value the DS doesn't have → ask the user.
2. **English only.** No Hebrew in component code, comments, props, doc text, or examples.
3. **Inline styles + token constants** in component internals. NEVER Tailwind classes inside the component. Tailwind is only for layout in doc pages and consuming screens.
4. **WAI-ARIA pattern compliance** for any interactive component.
5. **Keyboard support** — Tab order, activation keys, arrow nav where the WAI-ARIA pattern requires.
6. **`prefers-reduced-motion`** — honor it in every animated transition.
7. **3-file structure** (`Component.tsx`, `Component.types.ts`, `index.ts`).
8. **Named export** (no default exports, no anonymous functions — match existing convention).
9. **Stop and confirm** between Phases 1→2, 3→4, and 5→6. Do not steamroll.
10. **Sub-components in compound APIs** keep their own state inside the parent context — never lift a child's state into the parent component's render body (focus-loss anti-pattern from CLAUDE.md).

---

## Failure modes and recovery

- **Token gap (no DS match for a Figma value)** → STOP, ask user. Never silently round.
- **Naming conflict (Component already exists)** → STOP, propose extending the existing one or renaming.
- **a11y pattern unclear** → re-fetch the WAI-ARIA APG page, ask user if the pattern is non-standard.
- **TS errors in new files** → fix before Phase 5. Do not declare done with errors.
- **Token validator violations** → fix before Phase 5. Do not declare done with violations.
- **Browser doesn't render** → check `preview_logs`, `preview_console_logs`, then `preview_list` to confirm the right port/serverId.

---

## Output style for the user

Per phase, give the user:
- Phase 1: a short summary of what you found + the questions.
- Phase 2: a 1-paragraph summary of WAI-ARIA + industry findings — not the raw research dump.
- Phase 3: the full plan (or write to plan file in plan mode).
- Phase 4: a one-line confirmation per file generated, plus validator/TS results.
- Phase 5: the screenshot(s) and a state-by-state pass/fail table.
- Phase 6: the sync summary from `/glow-sync` + final build status.

Keep narration tight. The user reads the diff for what changed; they read your text for what to think about and what to decide.

---

## Quick reference

| Phase | Primary tools | Output |
|-------|---------------|--------|
| 1 — Understand | Explore agent, Figma MCP, Read, AskUserQuestion | Questions answered |
| 2 — Research | WebFetch, WebSearch | Research notes |
| 3 — Plan | Write (plan file) or chat output | Approved plan |
| 4 — Build | Write, Edit, Bash (validator + tsc) | Files created, validated |
| 5 — Verify | preview_start, preview_eval, preview_inspect, preview_screenshot | Pass/fail table + screenshot |
| 6 — Sync | Skill (`/glow-sync`), Bash (build) | All registries in sync, build green |
