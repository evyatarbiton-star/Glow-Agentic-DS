# /glow-sync — Sync All DS Files After Component Changes

When a component is added, removed, or modified in the Glow Design System, multiple files must be updated to stay in sync. This command ensures nothing is missed.

## Step 1: Detect What Changed

Compare the current state of `src/components/` against these registries to find mismatches:

### Registry files to check:
1. `src/components/index.ts` — component exports
2. `src/App.tsx` — doc page imports + route definitions
3. `src/docs/layout/Sidebar.tsx` — navigation items
4. `src/manifest.ts` — component manifest entries
5. `CLAUDE.md` — component inventory table
6. `.claude/commands/glow.md` — skill reference tables
7. `tokens/usage/` — usage rule files
8. `src/docs/components/` — doc page files
9. `README.md` — component count, categories table, icon counts, usage rules table

### Detection logic:
```
For each folder in src/components/ (excluding Icon/icons/, _lab/):
  - Check if exported in src/components/index.ts
  - Check if route exists in src/App.tsx
  - Check if sidebar item exists in src/docs/layout/Sidebar.tsx
  - Check if entry exists in src/manifest.ts
  - Check if doc page exists in src/docs/components/

Report:
  - MISSING: component exists but not registered in file X
  - ORPHAN: registration exists in file X but component folder is gone
  - STALE: manifest props don't match .types.ts props
```

## Step 2: For NEW Components (folder exists, not registered)

Execute these updates in order:

### 2a. Export in `src/components/index.ts`
```tsx
export { NewComponent } from './NewComponent'
// If it has public types:
export type { NewComponentProps } from './NewComponent'
```

### 2b. Create doc page `src/docs/components/NewComponentDoc.tsx`
- Import the component
- Create a standard doc page with: description, live demos, props table, usage code
- Follow the pattern of existing doc files (e.g., ButtonDoc.tsx)

### 2c. Add route in `src/App.tsx`
```tsx
// Add import at top:
import NewComponentDoc from './docs/components/NewComponentDoc'

// Add route inside <Routes>:
<Route path="/components/new-component" element={<NewComponentDoc />} />
```

### 2d. Add sidebar item in `src/docs/layout/Sidebar.tsx`
Add to the appropriate group (Actions, Forms & Input, Data Display, Feedback & Overlay, Navigation, Zoe AI):
```tsx
{ label: 'New Component', path: '/components/new-component', platforms: ['web'] }
```

### 2e. Add manifest entry in `src/manifest.ts`
Read the component's `.types.ts` file and source `.tsx` file, then create a full `ComponentEntry`:
- name, import, category, description
- figmaNodeId (from source file header comment)
- variants, sizes (from types)
- props (from types — include type, default, required, description for each)
- tokensUsed (scan source for `sc.*` and `semanticSpacing.*` imports)
- accessibility (scan for role=, aria-*, onKeyDown)
- whenToUse, avoidWhen (from usage rules if they exist, or write new ones)
- relatedComponents
- examples (1-2 short code snippets)

### 2f. Update `CLAUDE.md`
- Add component to the import block in the Component Inventory section
- Add row to the appropriate reference table (Actions, Forms, Containers, Navigation, etc.)

### 2g. Update `.claude/commands/glow.md`
- If a new usage rule file was created, add it to the usage rules mapping table
- If it's a Zoe component, add to the Zoe import list

### 2h. Update `README.md`
- Update the Components table (category + component names)
- Update the component count in the heading ("## Components (N)")
- Update the icon counts table if icons changed
- Update the Usage Rules table if a new rule file was added
- Update the Project Structure tree if new top-level folders were added

### 2i. Create usage rules (if needed)
For major components, create `tokens/usage/newcomponent-rules.ts` with:
- whenToUse guidelines
- avoidWhen guidelines
- variant/size selection rules
- common patterns and pairings

## Step 3: For REMOVED Components (registered but folder gone)

Reverse all of Step 2:
1. Remove export from `src/components/index.ts`
2. Remove import + route from `src/App.tsx`
3. Remove sidebar item from `src/docs/layout/Sidebar.tsx`
4. Remove entry from `src/manifest.ts`
5. Remove from `CLAUDE.md` inventory table and import block
6. Remove from `.claude/commands/glow.md` if referenced
7. Delete doc page `src/docs/components/RemovedComponentDoc.tsx`
8. Delete usage rules `tokens/usage/removedcomponent-rules.ts` if exists
9. Check `src/docs/examples/` for broken imports and fix them
10. Check other components that list it in `relatedComponents` in the manifest

## Step 4: For MODIFIED Components (props/variants/sizes changed)

### 4a. Compare .types.ts against manifest
Read the component's `.types.ts` and compare every prop against `src/manifest.ts`:
- New props added to types but missing from manifest → add to manifest
- Props removed from types but still in manifest → remove from manifest
- Default values changed → update in manifest
- Type union changed (new variant/size added) → update variants/sizes arrays

### 4b. Update doc page
If props changed, verify `src/docs/components/ComponentDoc.tsx` still shows correct examples.

### 4c. Update usage rules
If new variants or sizes were added, update the relevant `tokens/usage/*.ts` file with guidance.

### 4d. Update CLAUDE.md
If the component's key characteristics changed (new variants, sizes, key props), update the reference table row.

### 4e. Update pattern examples
Check `src/docs/examples/` files that import this component — verify they still work with the updated API.

## Step 5: Verify

After all updates:
1. Run `npx tsc --noEmit --skipLibCheck` — must pass with zero errors
2. Check the preview at `http://localhost:5175` — navigate to the component's doc page
3. Verify sidebar shows the component in the correct group
4. Verify the manifest entry count matches total component folders

## Step 6: Propagate Skills to Global

After the DS internal state is verified, propagate the 4 consumer-facing skills to the global `~/.claude/commands/` folder so they're available when working in any prototype project on Desktop.

```bash
cp .claude/commands/glow.md ~/.claude/commands/glow.md
cp .claude/commands/glow-figma.md ~/.claude/commands/glow-figma.md
cp .claude/commands/glow-review.md ~/.claude/commands/glow-review.md
cp .claude/commands/glow-tokens.md ~/.claude/commands/glow-tokens.md
```

**DO NOT copy `glow-sync.md`** — it's DS-internal and must stay only inside the DS folder. Invoking it from a prototype directory would try to mutate files that don't belong to the DS.

### Why this step exists
Step 2g of this workflow can rewrite `.claude/commands/glow.md` inside the DS (skill reference tables, Zoe import list, etc.). Without this propagation, the global copy at `~/.claude/commands/glow.md` would silently drift behind the DS version, and consumer projects would reference outdated guidance. Running this step after every sync keeps global and DS aligned automatically.

## Quick Reference: File Locations

| What | Where |
|------|-------|
| Component source | `src/components/{Name}/{Name}.tsx` |
| Component types | `src/components/{Name}/{Name}.types.ts` |
| Component index | `src/components/{Name}/index.ts` |
| Main exports | `src/components/index.ts` |
| Routes | `src/App.tsx` |
| Sidebar nav | `src/docs/layout/Sidebar.tsx` |
| Doc page | `src/docs/components/{Name}Doc.tsx` |
| Manifest | `src/manifest.ts` |
| Usage rules | `tokens/usage/{name}-rules.ts` |
| DS instructions | `CLAUDE.md` |
| Build skill | `.claude/commands/glow.md` |
| Pattern examples | `src/docs/examples/*.tsx` |
| Shared nav | `src/docs/examples/shared/AppNavBar.tsx` |
