# Glow Design System

An **agentic design system** built for AI agent consumption. Every token, component, and usage rule is structured in TypeScript so AI agents can read and apply them programmatically when generating UI.

## Quick Start

```bash
# Install dependencies
npm install

# Run docs site
npx vite --port 5175

# Build library for distribution
npm run build:lib
```

Docs site: [http://localhost:5175](http://localhost:5175)

## For AI Agents

**Start here:** Read [`CLAUDE.md`](./CLAUDE.md) before generating any code. It contains:

- Complete component inventory with props
- 10 mandatory "Don'ts" and 10 mandatory "Do's"
- Step-by-step screen-building guide
- Composition patterns (Provider Card, Filter Bar, Settings Row, Form in Modal)

## Architecture

### Token Layers (3-tier)

```
Primitive (raw values) → Semantic (meaning) → Usage Rules (constraints)
```

| Layer | Path | Purpose |
|-------|------|---------|
| Primitive | `tokens/primitive/` | Raw palette, spacing grid, font scale, radii, shadows |
| Semantic | `tokens/semantic/` | Meaningful names mapped to primitives (90 color tokens, t-shirt spacing, typography presets) |
| Usage Rules | `tokens/usage/` | Mandatory constraints for choosing components and variants |

### Usage Rules

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

## Components

14 components available via `src/components`:

| Category | Components |
|----------|------------|
| Actions | Button |
| Selection | Checkbox, RadioButton, Toggle |
| Form Inputs | TextInput, Select, DatePicker |
| Containers | Card, Chip, ChipGroup, Modal |
| Overlays | Tooltip, TooltipPanel |
| Navigation | NavBar (with NavBar.Brand, NavBar.Tabs, NavBar.Tab) |
| Identity | Avatar |

### Icon System (1,874 icons)

| Style | Count | Path |
|-------|-------|------|
| Line | 924 | `src/components/Icon/icons/line/` |
| Solid | 917 | `src/components/Icon/icons/solid/` |
| Specialty | 19 | `src/components/Icon/icons/specialty/` |
| Profile | 14 | `src/components/Icon/icons/profile/` |
| Network Tier | 4 variants | `NetworkTierCoin` with color props |

```tsx
// Import pattern
import SearchLine from '@/components/Icon/icons/line/Search'
import SearchSolid from '@/components/Icon/icons/solid/Search'
```

## Library Usage

Install as a package and import:

```tsx
// Components
import { Button, Card, Chip, Modal } from 'glow-ds/components'

// Tokens
import { semanticColors, semanticSpacing } from 'glow-ds/tokens'

// Tailwind preset
// In tailwind.config.js:
presets: [require('glow-ds/tailwind-preset')]
```

## Fonts

- **Tiempos Headline** (`font-display`) — serif, page-level H1 titles only
- **Founders Grotesk** (`font-default`) — sans-serif, everything else

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3
- React Router (docs site)

## Project Structure

```
glow-design-system/
├── CLAUDE.md                    # AI agent instructions (read first)
├── src/
│   ├── components/              # All DS components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Chip/
│   │   ├── Modal/
│   │   ├── Tooltip/
│   │   ├── Icon/icons/          # 1,874 SVG icons (line/solid/specialty/profile)
│   │   └── ...
│   └── docs/                    # Documentation site
│       ├── pages/               # Component doc pages
│       └── examples/            # Full-screen example compositions
├── tokens/
│   ├── primitive/               # Raw values (colors, spacing, typography, radii, shadows)
│   ├── semantic/                # Meaningful mappings (90 color tokens, t-shirt spacing)
│   └── usage/                   # 10 rule files (button, card, chip, modal, etc.)
├── lib/                         # Library entry points
│   ├── components.ts            # All 14 components + types
│   ├── tokens.ts                # All token exports
│   └── tailwind-preset.js       # Tailwind preset with DS values
└── figma-icons/                 # Raw SVGs exported from Figma
```

## Examples

Working compositions in `src/docs/examples/`:

- **CarCardExample** — Telehealth card with image, badges, pricing
- **LoginExample** — Form with inputs, button, typography pairing
- **FindCareExample** — Search with filters, specialty cards, provider results
- **HealtheeHomeExample** — Full dashboard with navigation, cards, benefits grid
- **ProviderSearchExample** — Mobile provider search interface

## Scripts

```bash
npm run dev              # Start dev server
npm run build            # Build docs site
npm run build:lib        # Build library for distribution
npm run lint             # Run ESLint
npm run icons:build      # Full icon pipeline (rename → generate → index)
```
