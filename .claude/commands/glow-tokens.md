# /glow-tokens — Token Lookup for Glow Design System

## When to trigger
Use this skill when anyone asks about colors, spacing, typography, radius, shadows, or any design token — "what color for...", "what spacing...", "what font size...", "how do I use...".

## How it works

You are a Glow DS token lookup tool. You find the exact token, its value, and how to use it in code.

## Step 1: Determine the token category

| Question about | Read this file |
|----------------|----------------|
| Colors (hex, brand, text, background, border) | `tokens/semantic/colors.ts` + `tokens/primitive/colors.ts` |
| Spacing (gap, padding, margin) | `tokens/semantic/spacing.ts` + `tokens/primitive/spacing.ts` |
| Typography (font, size, weight, line-height) | `tokens/semantic/typography.ts` + `tokens/primitive/typography.ts` |
| Border radius (corners, rounded, pill) | `tokens/semantic/radii.ts` + `tokens/primitive/radii.ts` |
| Shadows (elevation, drop shadow) | `tokens/primitive/shadows.ts` |
| Component-specific tokens | The relevant `tokens/usage/*-rules.ts` file |

## Step 2: Find and return the answer

Always return:

1. **Token name** — the exact import path and property name
2. **Value** — the resolved CSS value
3. **Code example** — copy-pasteable usage
4. **Context** — when and where to use it

### Response format

```markdown
## [token-name]

**Value:** [resolved value]
**Import:** `import { semanticColors as sc } from 'glow-ds/tokens/semantic/colors'`
**Usage:** `sc.primary.surface.DEFAULT`

### Code example
const BRAND_COLOR = sc.primary.surface.DEFAULT  // #fd5201

### When to use
Use for primary action backgrounds (buttons, CTAs). Do NOT use for text — use sc.primary.text.DEFAULT instead.
```

## Common lookups (fast answers)

### Brand colors
- Brand orange: `sc.primary.surface.DEFAULT` → #fd5201
- Black: `sc.neutral.text.DEFAULT` → #000000
- Dark grey text: `sc.neutral.text.dark` → #404040
- Light grey text: `sc.neutral.text.light` → #8a8a8a
- White background: `sc.neutral.surface.negative` → #ffffff
- Subtle grey bg: `sc.neutral.surface.subtle` → #f2f2f2
- Light border: `sc.neutral.border.light` → #ededed
- Strong border: `sc.neutral.border.strong` → #e0e0e0

### Status colors
- Success: `sc.success.surface.DEFAULT` → #5bb95e
- Error: `sc.error.surface.DEFAULT` → #f23c3c
- Error text: `sc.error.text.DEFAULT` → #e10f0f
- Warning: `sc['accent-yellow'].surface.DEFAULT` → #ffdb57
- Info: `sc['accent-blue'].surface.DEFAULT` → #99b4ff

### Spacing
- 4px: `semanticSpacing.xxxs`
- 8px: `semanticSpacing.xxs`
- 12px: `semanticSpacing.xs`
- 16px: `semanticSpacing.s`
- 20px: `semanticSpacing.m`
- 24px: `semanticSpacing.l`
- 32px: `semanticSpacing.xl`
- 40px: `semanticSpacing.xxl`
- 48px: `semanticSpacing.xxxl`

### Typography
- Page title (H1, serif): `typographyStyles['display-l']` — Tiempos Headline 64px
- Section heading: `typographyStyles['heading-l']` — Founders Grotesk 32px/500
- Card title: `typographyStyles['heading-s']` — Founders Grotesk 24px/500
- Body text: `typographyStyles['paragraph-l']` — Founders Grotesk 18px/400
- Small text: `typographyStyles['paragraph-s']` — Founders Grotesk 14px/400
- Button label: `typographyStyles['label-m']` — Founders Grotesk 16px/500
- Link: `typographyStyles['text-link-l']` — Founders Grotesk 18px/500 underline

### Border radius
- Small (inputs, chips): `semanticRadii.xxs` → 8px
- Medium (cards): `semanticRadii.xs` → 12px
- Large (modal): `semanticRadii.ln` → 24px
- Pill: `semanticRadii.full` → 999px

## Figma variable names

When asked about Figma, also return the corresponding variable name:
- Code: `sc.primary.surface.DEFAULT` → Figma: `primary/surface/default`
- Code: `semanticSpacing.m` → Figma: not yet in variables (spacing variables pending)
- Code: `semanticRadii.xxs` → Figma: `radius/xxs`
