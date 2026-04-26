# Glow Design System (Agentic DS)

Library of tokens, components, and usage rules in TypeScript for AI agent consumption.

## This is a library — NOT a product project

DO NOT build screens/prototypes here. Create a separate project (e.g., `~/Desktop/my-prototype/`) with React+Vite+Tailwind. `src/docs/examples/` is ONLY for DS documentation examples.

## Token Files

### Primitives → Semantics → Usage Rules:

1. `tokens/primitive/colors.ts` — raw color palette (Grey, Orange, Blue, Green, Yellow, Red, Purple)
2. `tokens/semantic/colors.ts` — 103 semantic tokens by intent (primary, neutral, accent-yellow, accent-blue, accent-purple, success, error, overlay), each with surface/border/text
3. `tokens/primitive/spacing.ts` — 4px base grid (0–120px)
4. `tokens/semantic/spacing.ts` — t-shirt sizing (xxxs → 5xl)
5. `tokens/primitive/typography.ts` — font families, sizes, weights, line-heights
6. `tokens/semantic/typography.ts` — 40 web tokens (display/heading/label/paragraph/text-link)
6b. `tokens/semantic/typography-native.ts` — 23 native tokens from Figma Native DS (node 1:394). Same convention as web but fewer sizes; all headings weight 500; includes `text-link-xm`
7. `tokens/primitive/radii.ts` — border-radius scale
8. `tokens/semantic/radii.ts` — t-shirt naming (none → full, `sn` = small, `ln` = large)
9. `tokens/primitive/shadows.ts` — shadow tokens (sm, md, lg, xl, 2xl, none)
10. `tokens/semantic/shadows.ts` — semantic shadow layer (card, cardHover, toast, tooltip, dropdown)
11. `tokens/semantic/z-index.ts` — stacking order (sticky:10, stickyNav:50, dropdown:1000, modal:1500)

### Usage rules:

- `tokens/usage/button-rules.ts` — Button variant/size, pairing matrix
- `tokens/usage/selection-controls-rules.ts` — Checkbox vs RadioButton vs Toggle
- `tokens/usage/typography-rules.ts` — font pairing (Tiempos Headline + Founders Grotesk)
- `tokens/usage/layout-rules.ts` — background/surface color defaults (white-first)
- `tokens/usage/tooltip-rules.ts` — Tooltip variants, modes, directions, content
- `tokens/usage/network-tier-rules.ts` — insurance network tier badge colors, icons, ordering
- `tokens/usage/card-rules.ts` — Card variants, radius, padding, interactive patterns
- `tokens/usage/chip-rules.ts` — Chip vs Button.pill, variant/color/size
- `tokens/usage/modal-rules.ts` — Modal sizes, footer patterns, mobile behavior
- `tokens/usage/avatar-navbar-rules.ts` — Avatar sizes, NavBar zones, composition
- `tokens/usage/providercard-rules.ts` — ProviderCard avatar fallback, providerType, composition
- `tokens/usage/sidenav-rules.ts` — SideNav anatomy, compound components, hover, responsive
- `tokens/usage/zoe-rules.ts` — Zoe AI chat answer types, component anatomy, layout, context defaults

## Component Inventory

Import from `src/components`:

```tsx
import {
  Button, IconButton,
  Checkbox, RadioButton, Toggle,
  TextInput, Select, DatePicker,
  Card, Chip, ChipGroup,
  Tooltip, TooltipPanel,
  Modal,
  Avatar, NavBar,
  NetworkBadge,
  StarRating,
  ScrollArea,
  Toast,
  SideNav,
  ProviderCard,
  ZoeInput, ZoeThinkingLoader, ZoeUserBubble, ZoeResponseBubble,
  ZoeStreamingText, ZoeBenefitCard, ZoePromptChip,
  ZoeChatHeader, ZoeDrawer, ZoeProviderCard,
} from '../components'
```

### Actions
| Component | Variants | Sizes | Key Props |
|-----------|----------|-------|-----------|
| **Button** | primary, secondary, outline, subtle, ghost, destructive | xs (36px), sm (40px), md (48px), lg (56px) | `pill`, `iconOnly`, `loading`, `fullWidth`, `iconLeft`, `iconRight` |
| **IconButton** | ghost, outline | xs (28px), sm (32px), md (40px), lg (48px) | `icon`, `aria-label` (required), `pressed`, `pill`, `loading` |

### Selection Controls
| Component | Purpose | Key Props |
|-----------|---------|-----------|
| **Checkbox** | Multi-select, independent on/off | `checked`, `indeterminate`, `label`, `disabled` |
| **RadioButton** | Single-select from 2+ options | `checked`, `label`, `name`, `disabled` |
| **Toggle** | Instant binary switch (on/off) | `checked`, `size` (default, large), `disabled` |

### Form Inputs
| Component | Sizes | Shapes | Key Props |
|-----------|-------|--------|-----------|
| **TextInput** | sm, md, lg | rounded, pill | `label`, `helperText`, `error`, `iconLeft`, `iconRight` |
| **Select** | sm, md, lg | rounded, pill | `options`, `multiple`, `searchable`, `placeholder` |
| **DatePicker** | sm, md, lg | rounded, pill | `value`, `onChange`, `rangeMode`, `minDate`, `maxDate` |

### Containers & Display
| Component | Variants | Key Props |
|-----------|----------|-----------|
| **Card** | outline, elevated, filled | `radius` (sm/md/lg), `padding` (none/sm/md/lg), `interactive`, `as` |
| **Chip** | subtle, outline, filled | `color` (neutral/success/error/info/warning/recommended/hsa/lfsa), `size` (sm/md/lg), `selected`, `removable`, `iconLeft` |
| **ChipGroup** | — | `gap`, `wrap` |
| **Modal** | — | `size` (sm/md/lg), `title`, `showBackButton`, `footer`, `footerActions`, `footerLeft` |
| **Tooltip** | default (dark blur), rich (solid) | `direction`, `title`, `leftIcon`, `media`, `primaryAction`, `secondaryAction`, `link` |
| **Avatar** | — | `size` (sm/md/lg), `src`, `alt`, `fallback`, `bgColor`, `color` |
| **NetworkBadge** | — | Thin wrapper around Chip — tier→color mapping + NetworkTierCoin icon |
| **ProviderCard** | — | `name`, `specialty`, `loading`, `photoUrl`, `providerType` (male/female/facility), `networkTier`, `cost`, `costVariant` (coinsurance/cost-unknown/cost-no-comparison/copay-visit/copay-procedure/not-covered/price-unknown/hidden — primary variant API), `costLevel` (chip color — coinsurance only), `languages` (string[]), `virtualAvailable`, `onBookClick`, `onCallClick` |
| **StarRating** | — | `rating`, `maxStars`, `size` (xs/sm/md/lg), `showValue`, `reviewCount`, `filledColor`, `emptyColor` |
| **ScrollArea** | — | `direction` (horizontal/vertical/both), `gap`, `snap`, `snapAlign`, `maxHeight`, `maxWidth`, `hideScrollbar` |

### Feedback & Overlay
| Component | Variants | Key Props |
|-----------|----------|-----------|
| **Toast** | default, success, error, warning, info | `message`, `variant`, `action` ({ label, onClick }), `showClose`, `duration` (5000ms), `open` |

### Navigation
| Component | Key Props |
|-----------|-----------|
| **NavBar** | `left` (NavBar.Brand), `center` (NavBar.Tabs), `right` (free-form), `sticky`, `maxWidth`, `responsive`, `mobileRight` |
| **SideNav** | `open`, `onClose`, `closeOnBackdropClick`, `closeOnEscape`. Compound: `.Profile`, `.Section`, `.NavItem` (expandable), `.SubItem`, `.ToolItem` (thumbnail, title, description), `.AppDownload` (qrImageUrl), `.Footer`, `.FooterItem` |

### Zoe AI Components
| Component | Key Props |
|-----------|-----------|
| **ZoeInput** | `value`, `onChange`, `onSubmit`, `placeholder`, `showZoeIcon` |
| **ZoeThinkingLoader** | `isThinking`, `messageSets`, `delay`, `showIcon`, `onExitComplete` |
| **ZoeUserBubble** | `text` |
| **ZoeResponseBubble** | `children` (accepts text, cards, carousels) |
| **ZoeStreamingText** | `text`, `isStreaming` (shows blinking cursor) |
| **ZoeBenefitCard** | `title`, `subtitle`, `imageSrc`, `iconElement`, `metaIcon`, `metaText`, `isActive`, `onClick` |
| **ZoePromptChip** | `text`, `emoji`, `onClick` |
| **ZoeChatHeader** | `onClose` |
| **ZoeDrawer** | `open`, `onClose`, `title`, `subtitle`, `footer`, `children` |
| **ZoeProviderCard** | Extends ProviderCard + `isActive` |

### Icon System (1,882 icons)
| Style | Count | Import Pattern |
|-------|-------|----------------|
| Line | 925 | `import SearchLine from '@/components/Icon/icons/line/Search'` |
| Solid | 917 | `import SearchSolid from '@/components/Icon/icons/solid/Search'` |
| Specialty | 20 | `import HeartSpecialty from '@/components/Icon/icons/specialty/Heart'` |
| Profile | 20 | `import DoctorProfile from '@/components/Icon/icons/profile/Doctor'` |

Icon sizes: `xs` (14px), `sm` (16px), `md` (20px), `lg` (24px), `xl` (32px)

Never use inline SVG icons in product code — always import from the DS icon library. If missing, ask the user. Exception: inline SVG is permitted inside DS component internals for animation primitives (e.g., Button/Chip loading spinners) — keep these self-contained and do not expose raw SVG in component props.

## IconButton vs Button iconOnly

| Scenario | Use |
|----------|-----|
| Close, dismiss, bookmark, hamburger, nav arrows | `<IconButton>` ghost |
| Close on overlay/modal | `<IconButton>` outline |
| Bookmark / favorite toggle | `<IconButton>` ghost + `pressed` |
| Formal destructive icon action | `<Button iconOnly>` destructive |
| Toolbar formatting (bold, italic) | `<Button iconOnly>` subtle |

## Chip vs Button.pill

| Scenario | Use |
|----------|-----|
| Categorize/tag content | `<Chip>` |
| Filter search results | `<Chip variant="outline" onClick>` |
| Show status (In-Network, Active) | `<Chip color="success">` |
| Book appointment, Submit form | `<Button pill>` |
| Navigate to another page | `<Button pill>` |

## Tech Stack

- React 19 + TypeScript
- Vite (dev server on port 5175)
- Tailwind CSS (utility classes for layout; components use inline styles with token constants)
- React Router (docs site routing)

## Fonts

- **Tiempos Headline** (`font-display`) — serif, for page-level H1 titles and hero text only
- **Founders Grotesk** (`font-default`) — sans-serif, for everything else

## Mandatory Rules

1. Always use semantic tokens for every color, spacing, radius, shadow, typography — never hardcode hex/px
2. Add token comments: `const BOX_SIZE = 20 // spacing.m`
3. Check usage rules before choosing a component variant
4. Use `<Card>` for any bordered/elevated/filled container — never raw divs
5. Use `<Chip>` for labels, tags, filters, status indicators. Wrap in `<ChipGroup>`
6. Match Chip color to meaning: success=positive, error=negative, info=informational, warning=caution, recommended=product recommendation
7. Never use inline SVG icons in product code — import from `src/components/Icon/icons/`. DS components may use inline SVG for internal animation primitives (spinners, transitions) only.
8. Never use native HTML form elements — use DS components
9. Never use `bg-white`/`bg-[#ffffff]` — use `bg-neutral-negative`
10. Never put two filled buttons side by side — primary + outline, or secondary + outline
11. Max ONE primary button per screen. lg (56px) buttons only for marketing/hero
12. Never use `font-display` except for page-level H1 — everything else is `font-default`
13. Never nest elevated Cards inside elevated Cards — use outline or filled for inner
14. Modal footer buttons: always use `footerActions` (right-aligned), never custom `footer`
15. ProviderCard: never generate Book without Call. Valid: Call+Book, Call only, or no actions
16. Always include rating, distance+address, and appointment row on every ProviderCard
17. Default backgrounds to white (`bg-neutral-negative`) unless Figma says otherwise
18. Always provide `alt` text for Avatar when `src` is provided

## Escape Hatch: `glow-ignore`

The token validator supports a per-line escape hatch for legitimate exceptions that cannot be expressed as DS tokens (e.g., animation timing, third-party embed constraints, one-off magic numbers tied to external APIs).

**Format — a reason is REQUIRED:**
```tsx
const BLUR_RADIUS = '4.3px' // glow-ignore: backdrop-filter blur needs exact value for iOS parity
<svg viewBox="0 0 24 24" /* glow-ignore: internal animation primitive */ />
```

**When `glow-ignore` is acceptable:**
- Animation primitives inside DS component internals (spinners, loaders, transitions)
- Values mandated by a third-party SDK or embed (Stripe, Datadog, reCAPTCHA)
- Platform workarounds with a linked issue/commit

**When it is NOT acceptable:**
- "I couldn't find the right token" → ask in #design-system before ignoring
- Color, spacing, or radius values that fit existing tokens
- Hiding new, unaudited colors from the palette

Reviewers should reject any `glow-ignore` without a clear reason after the colon. The validator enforces the `glow-ignore:` prefix.

## Figma-to-Token Mapping

### Colors (hex → semantic token)
- `#fd5201` → `sc.primary.surface.DEFAULT`
- `#f2f2f2` → `sc.neutral.surface.subtle`
- `#e0e0e0` → `sc.neutral.surface.light` / `sc.neutral.border.strong`
- `#404040` → `sc.neutral.text.dark`
- `#8a8a8a` → `sc.neutral.text.light`
- `#ffffff` → `sc.neutral.surface.negative`
- `#000000` → `sc.neutral.text.DEFAULT`
- No match → STOP and flag it. Never invent a new token.

### Spacing (px → token)
- `4px` → `xxxs` | `8px` → `xxs` | `12px` → `xs` | `16px` → `s` | `20px` → `m`
- `24px` → `l` | `32px` → `xl` | `40px` → `xxl` | `48px` → `xxxl` | `56px` → `xxxxl` | `72px` → `5xl`
- No match → use nearest token, note the deviation.

### Typography (font/size/weight → token)
- Tiempos 40px/48px → `typographyStyles['display-xs']`
- Founders 18px/21px → `typographyStyles['paragraph-l']`
- Founders 16px/19px → `typographyStyles['paragraph-m']`
- Never set fontSize/lineHeight/fontFamily individually — always spread from `typographyStyles['token-name']`

### Components
Before building any component, check Component Inventory above and `src/components/_lab/`. If a match exists, use it even if Figma looks slightly different. No match → build with DS tokens, flag as potential new DS component.

### Validation
```bash
node scripts/validate-tokens.cjs src/path/to/file.tsx
```
Detects hardcoded hex colors, inline SVGs, suggests correct DS token.

## Component Pattern

```
ComponentName/
  ComponentName.tsx       — Implementation (inline styles + JS event handlers)
  ComponentName.types.ts  — TypeScript interfaces
  index.ts                — Single named export
```

- Inline styles with token constants, not CSS classes for component-internal styles
- Named constants at top: `const PANEL_BG = sc.neutral.surface.negative // #ffffff`
- Tailwind for layout only (flex, grid, padding, margin on page-level containers)
- Figma node-id documented in a comment at top of each component file

## How to Build a Screen

### Page shell
```tsx
<div className="min-h-screen bg-neutral-negative">
  <NavBar left={...} center={...} right={...} />
  <main className="max-w-[1200px] mx-auto px-xl py-xl">
    {/* page content */}
  </main>
</div>
```

### Sections with Cards
```tsx
<Card variant="outline" radius="md" padding="md">
  <h2 className="font-default font-medium text-[18px] text-neutral mb-xs">Section Title</h2>
  {/* section content */}
</Card>
```

### Forms
```tsx
<div className="space-y-m">
  <TextInput label="Full Name" placeholder="Enter your name" size="md" />
  <Select label="Specialty" options={options} placeholder="Select..." size="md" />
  <div className="flex gap-xxs justify-end">
    <Button variant="outline">Cancel</Button>
    <Button variant="primary">Submit</Button>
  </div>
</div>
```

### Filter UI with Chips
```tsx
<ChipGroup wrap>
  <Chip variant="outline" selected={filter === 'all'} onClick={() => setFilter('all')}>All</Chip>
  <Chip variant="outline" selected={filter === 'in'} onClick={() => setFilter('in')} color="success">In-Network</Chip>
  <Chip variant="outline" selected={filter === 'out'} onClick={() => setFilter('out')} color="error">Out-of-Network</Chip>
</ChipGroup>
```

### Modal
```tsx
<Modal
  open={showModal}
  onClose={() => setShowModal(false)}
  title="Confirm Booking"
  size="sm"
  footerActions={
    <>
      <Button variant="outline" size="md" onClick={() => setShowModal(false)}>Cancel</Button>
      <Button variant="primary" size="md" onClick={handleConfirm}>Confirm</Button>
    </>
  }
>
  <div className="px-l py-m">
    <p className="font-default text-[15px] text-neutral-text-dark">
      Are you sure you want to book this appointment?
    </p>
  </div>
</Modal>
```

## Common Composition Patterns

### Provider Card (use `<ProviderCard>` — NOT Card + Avatar)
```tsx
<ProviderCard
  name="Dr. Emily Chen"
  specialty="Ophthalmologist"
  providerType="female"
  networkTier="in-network"
  distance="0.3 mi"
  address="123 Medical Center Dr"
  rating={4.8}
  reviewCount={124}
  cost="$1,400"
  costLevel="lower"
  nextAppointmentLabel="Next appointment"
  nextAppointmentDate="Today, May 7"
  onCallClick={() => call(provider)}
  onBookClick={() => book(provider)}
  onClick={() => navigate(`/provider/${provider.id}`)}
/>
<!-- Never manually compose Card + Avatar for providers -->
```

### ProviderCard Carousel
```tsx
<!-- Each wrapper 360px fixed. 16px gap. Cards without Book show "Call to check availability" -->
<ScrollArea direction="horizontal" gap={16} snap>
  {providers.map(p => (
    <div key={p.id} style={{ width: 360, minWidth: 360, flexShrink: 0, scrollSnapAlign: 'start', display: 'flex' }}>
      <ProviderCard
        name={p.name} specialty={p.specialty} providerType={p.providerType}
        networkTier={p.networkTier} cost={p.cost} costLevel={p.costLevel}
        onCallClick={() => call(p)}
        onBookClick={p.hasBook ? () => book(p) : undefined}
      />
    </div>
  ))}
</ScrollArea>
```

### Filter Bar
```tsx
<div className="flex items-center gap-m">
  <div className="flex-1">
    <TextInput placeholder="Search..." iconLeft={<SearchLine size="md" />} size="sm" />
  </div>
  <ChipGroup>
    {filters.map(f => (
      <Chip key={f.id} variant="outline" selected={f.active} onClick={() => toggle(f.id)}>
        {f.label}
      </Chip>
    ))}
  </ChipGroup>
</div>
```

### Settings Row
```tsx
<Card variant="outline" radius="sm" padding="sm">
  <div className="flex items-center justify-between">
    <div>
      <p className="font-default font-medium text-[15px] text-neutral">Email Notifications</p>
      <p className="font-default text-[13px] text-neutral-text-light">Receive updates about your appointments</p>
    </div>
    <Toggle checked={emailEnabled} onChange={setEmailEnabled} />
  </div>
</Card>
```

### AI anti-patterns to avoid (CRITICAL)

**Rule:** NEVER define a React component inside another component's render body. This is the #1 source of AI-generated bugs in Modal+Form flows — every keystroke re-creates the inner component, React remounts the `<input>`, and focus is lost after each character.

**Always:**
- Define form components at MODULE SCOPE (outside the parent function), OR inline the JSX directly inside the Modal.
- Keep form state in the PARENT that renders the Modal — pass `value` + `onChange` down as props.
- Use a STABLE id (e.g., `option.value`) for `key` when mapping fields, never the array index.
- Never put a changing value (like `open` or form state) in the Modal's `key` prop.

```tsx
// ❌ WRONG — Form defined inside parent's body. Every keystroke remounts <input>.
function ModalFormScreen() {
  const [name, setName] = useState('')
  const Form = () => <TextInput value={name} onChange={(e) => setName(e.target.value)} />
  return <Modal open={open}><Form /></Modal>
}

// ✅ RIGHT — Form at module scope, state in parent
const BookingForm = ({ name, setName }: { name: string; setName: (v: string) => void }) => (
  <TextInput value={name} onChange={(e) => setName(e.target.value)} />
)
function ModalFormScreen() {
  const [name, setName] = useState('')
  return <Modal open={open}><BookingForm name={name} setName={setName} /></Modal>
}
```

Applies to: Modal, ZoeDrawer, SideNav with forms, any Portal/Overlay that wraps form fields. See `tokens/usage/composition-rules.ts` and `src/docs/examples/ModalFormExample.tsx`.

### Form in Modal
```tsx
<Modal open={open} onClose={close} title="Add Details" size="md"
  footerActions={
    <>
      <Button variant="outline" size="md" onClick={close}>Cancel</Button>
      <Button variant="primary" size="md" onClick={save}>Save</Button>
    </>
  }
>
  <div className="px-l py-m space-y-m">
    <TextInput label="Name" placeholder="Enter name" size="sm" />
    <Select label="Category" options={categories} placeholder="Select..." size="sm" />
    <DatePicker label="Date" placeholder="Pick a date" size="sm" />
  </div>
</Modal>
```

## Z-Index Hierarchy

| Layer | Z-Index | Component |
|-------|---------|-----------|
| Base content | auto | Page content |
| NavBar | 50 | Sticky navigation |
| Select/DatePicker dropdown | 1000 | Form dropdowns |
| Tooltip | 1000 | Contextual popups |
| Modal | 1500 | Dialog overlay |

## Examples

See `src/docs/examples/`:
- `LoginExample.tsx` — form with inputs, button, typography
- `ProviderSearchResultsExample.tsx` — desktop provider search, filters, ProviderCard, NavBar
- `HealtheeHomeExample.tsx` — dashboard with navigation, cards, benefits grid

## Lab — WIP components (not exported, preview only in docs site)

```
src/components/_lab/ComponentName/   — WIP source
src/docs/lab/ComponentNameLab.tsx    — Lab doc page
```

Statuses: **Draft** (grey), **Review** (orange), **Ready** (green)

### Adding a lab component
1. Create component folder in `src/components/_lab/ComponentName/`
2. Create doc page in `src/docs/lab/ComponentNameLab.tsx`
3. Add route in `App.tsx`: `<Route path="/lab/component-name" element={<ComponentNameLab />} />`
4. Add sidebar entry in `Sidebar.tsx` under Lab section with `status` field

### Promoting to production
1. Move `src/components/_lab/ComponentName/` → `src/components/ComponentName/`
2. Add export to `src/components/index.ts`
3. Move doc from `src/docs/lab/` → `src/docs/components/`
4. Update Sidebar (move from Lab to Components) + Routes
5. Update this file's Component Inventory table

## DS Change Checklist

### Token changes (colors, spacing, typography, radii, shadows)
- [ ] Update primitive token file (`tokens/primitive/…`)
- [ ] Update semantic token file (`tokens/semantic/…`)
- [ ] Update `tailwind.config.js` to mirror new/changed semantic tokens
- [ ] Update matching Foundation doc page (`src/docs/foundation/…`)
- [ ] Update this file (`CLAUDE.md`) — token counts, file descriptions, affected rules
- [ ] Update usage rules file if change affects component usage (`tokens/usage/…`)

### Component changes (new component, new variant, prop change)
- [ ] Update component doc page (`src/docs/components/…`)
- [ ] Update Component Inventory table in this file
- [ ] Add/update usage rules if component has variant/pairing constraints
- [ ] Add working example in doc page
- [ ] Update `src/components/index.ts` exports if new component

### Icon changes (new icon, renamed icon)
- [ ] Place in correct style folder (`line/`, `solid/`, `specialty/`, `profile/`)
- [ ] Update icon counts in this file and Icon doc page
- [ ] Ensure icon uses `currentColor` and supports standard sizes

### New component/screen — token compliance
- [ ] Run `node scripts/validate-tokens.cjs src/path/to/file.tsx` — 0 violations
- [ ] Zero hardcoded hex colors, font values, inline SVGs
- [ ] All containers use `<Card>`, existing DS components reused

## Running

```bash
npx vite --port 5175
```
