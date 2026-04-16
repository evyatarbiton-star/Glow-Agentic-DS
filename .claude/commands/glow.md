# /glow — Build UI with Glow Design System

## When to trigger
Use this skill when a developer asks to build, create, or generate any UI — pages, components, forms, modals, layouts, screens, or any visual interface.

## How it works

You are a Glow Design System expert. You generate production-ready React code that uses ONLY DS tokens and components. Zero hardcoded values. Zero guessing.

## Step 1: Load the system

Before writing any code, read these files (in this order):

1. **CLAUDE.md** (root) — Full component inventory, mandatory rules, composition patterns
2. **tokens/semantic/colors.ts** — 103 color tokens (primary, neutral, accent, success, error)
3. **tokens/semantic/spacing.ts** — Spacing scale (xxxs → 5xl)
4. **tokens/semantic/typography.ts** — 40 typography tokens (display, heading, label, paragraph, text-link)
5. **tokens/semantic/radii.ts** — Border radius scale (none → full)
6. **tokens/semantic/shadows.ts** — Semantic shadows (card, cardHover, toast, tooltip, dropdown)
7. **tokens/semantic/z-index.ts** — Stacking order (sticky, stickyNav, dropdown, modal)

## Step 2: Load relevant usage rules

Based on what the developer is building, read the matching usage rules:

| Building this | Read this file |
|---------------|----------------|
| Buttons | `tokens/usage/button-rules.ts` |
| Cards, containers | `tokens/usage/card-rules.ts` |
| Chips, tags, filters | `tokens/usage/chip-rules.ts` |
| Checkboxes, radios, toggles | `tokens/usage/selection-controls-rules.ts` |
| Typography, fonts | `tokens/usage/typography-rules.ts` |
| Modals, dialogs | `tokens/usage/modal-rules.ts` |
| Modal + form composition (inputs, selects inside a Modal/Drawer/Popover) | `tokens/usage/composition-rules.ts` |
| Tooltips | `tokens/usage/tooltip-rules.ts` |
| Layouts, backgrounds | `tokens/usage/layout-rules.ts` |
| Avatars, NavBar | `tokens/usage/avatar-navbar-rules.ts` |
| SideNav | `tokens/usage/sidenav-rules.ts` |
| Network badges | `tokens/usage/network-tier-rules.ts` |
| ProviderCard | `tokens/usage/providercard-rules.ts` |
| Zoe AI chat | `tokens/usage/zoe-rules.ts` |

## Step 3: Generate code

Follow these rules strictly:

### Token usage
```tsx
// CORRECT — use semantic tokens
import { semanticColors as sc } from 'glow-ds/tokens/semantic/colors'
import { semanticSpacing } from 'glow-ds/tokens/semantic/spacing'
import { typographyStyles } from 'glow-ds/tokens/semantic/typography'

const HEADER_BG = sc.neutral.surface.negative        // #ffffff
const TITLE_COLOR = sc.neutral.text.DEFAULT           // #000000
const GAP = semanticSpacing.m                         // 20px

// WRONG — never hardcode
const HEADER_BG = '#ffffff'    // ← NEVER
const GAP = 20                 // ← NEVER
```

### Component usage
```tsx
// CORRECT — use DS components
import { Button, Card, Chip, ChipGroup, Modal, TextInput } from 'glow-ds'

// WRONG — never use raw HTML for DS-covered patterns
<div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>  // ← use <Card>
<span style={{ background: '#f2f2f2', borderRadius: 999 }}>Tag</span>     // ← use <Chip>
```

### Named constants with comments
Every visual value gets a named constant with a comment showing the token name:
```tsx
const CARD_RADIUS = 'md'                              // semanticRadii.xs (12px)
const CARD_PADDING = 'md'                              // semanticSpacing.m (20px)
const TEXT_PRIMARY = sc.neutral.text.DEFAULT            // #000000
const TEXT_SECONDARY = sc.neutral.text.dark             // #404040
const TEXT_LIGHT = sc.neutral.text.light                // #8a8a8a
```

## Step 4: Validate

Before returning the code, check:
- [ ] Zero hardcoded hex colors
- [ ] Zero hardcoded pixel values for spacing/radius
- [ ] Zero inline SVG icons — all from `src/components/Icon/icons/`
- [ ] All containers use `<Card>` (not raw divs with borders)
- [ ] Correct component for the job (Chip vs Button.pill, IconButton vs Button iconOnly)
- [ ] Button pairs follow the rule: primary + outline, or secondary + outline — never two filled buttons side by side
- [ ] Modal footer actions are right-aligned via `footerActions` prop
- [ ] `font-display` (Tiempos) used ONLY for page-level H1
- [ ] All backgrounds default to white (`sc.neutral.surface.negative`) unless explicitly specified otherwise
- [ ] **Modal/Drawer with form fields:** form sub-components are defined at MODULE SCOPE (not inside the parent's render body), form state lives in the parent, and map `key`s use stable ids — before generating, read `tokens/usage/composition-rules.ts` or call `get_pattern('modal-form')`

## Decision helpers

### Chip or Button.pill?
- Labeling, tagging, filtering, status → `<Chip>`
- Primary action, navigation, submit → `<Button pill>`

### IconButton or Button iconOnly?
- Close, dismiss, bookmark, nav arrows → `<IconButton>` ghost
- Formal action (delete, settings) → `<Button iconOnly>`

### Card variant?
- Default container → `outline`
- Elevated/floating → `elevated` (never nest elevated inside elevated)
- Colored background → `filled`

## Pattern Templates

When asked to create a page or screen based on an existing pattern, **clone the pattern file** as a starting point and adapt it. This saves time and ensures DS compliance from the start.

### Available patterns:

| Pattern | Source File | Use when |
|---------|------------|----------|
| **Zoe Chat** | `src/docs/examples/ZoeChatExample.tsx` | AI chat interface, conversational UI, Zoe integration |
| **Provider Search** | `src/docs/examples/ProviderSearchResultsExample.tsx` | Search results with filters, ProviderCard grid/list |
| **Healthee Home** | `src/docs/examples/HealtheeHomeExample.tsx` | Dashboard with navigation, cards, benefits grid |
| **Login** | `src/docs/examples/LoginExample.tsx` | Auth forms, sign-in/sign-up screens |
| **Modal + Form** | `src/docs/examples/ModalFormExample.tsx` | Any Modal/Drawer/Popover containing form inputs — demonstrates the module-scope form, parent-owned state, and stable keys pattern that prevents focus-loss bugs |

### How to use patterns:

1. Read the source file listed above
2. Copy it to the target project/directory
3. Rename the component and file to match the new feature
4. Adapt the content — keep the structure, change the data
5. All DS tokens and imports are already correct — just extend as needed

### Zoe AI Components:

When building Zoe-related features, these production components are available:

```tsx
import {
  ZoeInput,            // Chat input with send button + Zoe icon
  ZoeThinkingLoader,   // Animated thinking dots
  ZoeUserBubble,       // User message bubble
  ZoeResponseBubble,   // Zoe response wrapper with icon
  ZoeStreamingText,    // Typewriter text effect with cursor
  ZoeBenefitCard,      // Benefit/coverage info card
  ZoePromptChip,       // Suggestion prompt chips
  ZoeChatHeader,       // Chat header with close button
  ZoeDrawer,           // Bottom sheet drawer
  ZoeProviderCard,     // Provider card adapted for Zoe context
} from 'glow-ds'
```

Hooks for streaming text orchestration:
```tsx
import { useStreamingText, useResponseSequence } from 'glow-ds/hooks'
```
