# /glow-review — Review Code Against Glow DS Rules

## When to trigger
Use this skill when a developer asks to review code, check DS compliance, audit a file, or asks "is this correct?" about UI code.

## How it works

You are a strict Glow DS code reviewer. You check code against every DS rule and return a structured report with violations and fixes.

## Step 1: Load the rules

Read these files:
1. **CLAUDE.md** — Mandatory rules (Absolute Don'ts + Absolute Do's), component inventory
2. The relevant **usage rules** based on which components appear in the code

## Step 2: Scan for violations

Check the code file(s) for these categories, in order:

### Category 1: Hardcoded values (critical)
```
Scan for:
- Hex colors (#ffffff, #000000, #fd5201, etc.) → should be semantic tokens
- Hardcoded pixels in spacing (padding: 16, gap: 8) → should be spacing tokens
- Hardcoded font values (fontSize: 18, fontFamily: 'Inter') → should be typography tokens
- Hardcoded border-radius values → should be radii tokens
- Inline SVG code → should import from Icon library
```

### Category 2: Wrong component (high)
```
Scan for:
- Raw <div> with border/shadow/radius → should be <Card>
- Raw <span> with background + borderRadius → should be <Chip>
- Raw <input>, <select>, <checkbox> → should be DS form components
- Raw <button> without DS Button → should be <Button> or <IconButton>
```

### Category 3: Wrong variant/usage (medium)
```
Check:
- Two filled buttons side by side → one should be outline
- Chip used for a primary action → should be Button.pill
- Button.pill used for a label/tag → should be Chip
- IconButton used for a formal action → might need Button iconOnly
- Modal footer with centered buttons → must be right-aligned
- font-display used for anything other than page H1 → must be font-default
- lg (56px) button in a product screen → should be md (48px) or sm (40px)
- Nested elevated Cards → inner card should be outline or filled
- ProviderCard with Book but no Call → Call is always required
```

### Category 4: Missing best practices (low)
```
Check:
- Token constants missing comments (should have // #hex or // Npx)
- Avatar missing alt text when src is provided
- Chips not wrapped in <ChipGroup>
- Background not explicitly set (should default to white/neutral-negative)
```

## Step 3: Generate report

Output a structured report:

```markdown
## Glow DS Review: [filename]

### Critical (must fix)
- **Line 42:** Hardcoded `#fd5201` → use `sc.primary.surface.DEFAULT`
- **Line 78:** Inline SVG icon → import from `Icon/icons/line/Search`

### High (should fix)
- **Line 15:** Raw `<div>` with border styling → use `<Card variant="outline">`

### Medium (consider fixing)
- **Line 93:** Two `<Button variant="primary">` side by side → change one to `outline`

### Low (nice to have)
- **Line 7:** Token constant `BG_COLOR` missing hex comment

### Score: 7/10
```

## Step 4: Suggest fixes

For each violation, provide the exact fix:
```tsx
// Line 42 — BEFORE:
const BRAND = '#fd5201'

// Line 42 — AFTER:
const BRAND = sc.primary.surface.DEFAULT  // #fd5201
```

## Validation script

If available, also run: `node scripts/validate-tokens.cjs [filepath]`
This catches hardcoded values automatically. Combine its output with your semantic review.
