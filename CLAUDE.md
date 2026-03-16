# Glow Design System (Agentic DS)

This is **Glow DS** — an agentic design system built for AI agent consumption.
Every token, component, and usage rule is structured in TypeScript so agents can read
and apply them programmatically when generating UI.

---

## ⚠️ THIS IS A LIBRARY — NOT A PRODUCT PROJECT

This repo is the Glow Design System **library**. It contains reusable tokens,
components, and documentation only.

**DO NOT** build product screens, prototypes, or app flows inside this project.
The `src/docs/examples/` folder is ONLY for DS documentation examples that
demonstrate component usage — it is NOT for product prototypes.

**When asked to build a prototype, screen, or flow:**
1. Create a **new project** in a separate directory (e.g., `~/Desktop/my-prototype/`)
2. Set it up with React + Vite + Tailwind
3. Copy the relevant tokens and components from Glow DS into the new project, or reference them
4. Build the prototype there — never inside `glow-design-system/`

---

## Before You Build Anything

**Read the tokens and usage rules first.** Never hardcode colors, spacing, or font values.
Every visual value must trace back to a DS token.

### Token architecture (3 layers):

```
Primitive (raw values) → Semantic (meaning) → Usage Rules (constraints)
```

1. **Primitive tokens** — raw palette, never used directly in components
2. **Semantic tokens** — meaningful names mapped to primitives, used everywhere
3. **Usage rules** — mandatory constraints for choosing components and variants

### Token files to read (in order):

1. `tokens/primitive/colors.ts` — raw color palette (Grey, Orange, Blue, Green, Yellow, Red, Purple)
2. `tokens/semantic/colors.ts` — 103 semantic tokens grouped by intent (primary, neutral, accent-yellow, accent-blue, accent-purple, success, error, overlay), each with surface/border/text sub-categories
3. `tokens/primitive/spacing.ts` — 4px base grid (0–120px)
4. `tokens/semantic/spacing.ts` — t-shirt sizing (xxxs → 5xl)
5. `tokens/primitive/typography.ts` — font families, sizes, weights, line-heights
6. `tokens/semantic/typography.ts` — 40 web tokens (display/heading/label/paragraph/text-link)
6b. `tokens/semantic/typography-native.ts` — 23 native tokens from Figma Native DS (node 1:394). Same key convention as web but fewer sizes; all headings weight 500; includes `text-link-xm` (no underline variant)
7. `tokens/primitive/radii.ts` — border-radius scale
8. `tokens/semantic/radii.ts` — t-shirt naming (none → full, note: `sn` = small, `ln` = large)
9. `tokens/primitive/shadows.ts` — shadow tokens (sm, md, lg, xl, 2xl, none)

### Usage rules (MUST read before choosing components):

- `tokens/usage/button-rules.ts` — when to use each Button variant/size, pairing matrix
- `tokens/usage/selection-controls-rules.ts` — Checkbox vs RadioButton vs Toggle
- `tokens/usage/typography-rules.ts` — font pairing rules (Tiempos Headline + Founders Grotesk)
- `tokens/usage/layout-rules.ts` — background/surface color defaults (white-first principle)
- `tokens/usage/tooltip-rules.ts` — Tooltip variants, modes, directions, content rules
- `tokens/usage/network-tier-rules.ts` — insurance network tier badge colors, icons, ordering
- `tokens/usage/card-rules.ts` — Card variants, radius, padding, interactive patterns
- `tokens/usage/chip-rules.ts` — Chip vs Button.pill, variant/color/size selection
- `tokens/usage/modal-rules.ts` — Modal sizes, footer patterns, mobile behavior
- `tokens/usage/avatar-navbar-rules.ts` — Avatar sizes, NavBar zones, composition
- `tokens/usage/providercard-rules.ts` — ProviderCard avatar fallback, providerType, composition

---

## Complete Component Inventory

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
| **Chip** | subtle, outline, filled | `color` (neutral/primary/success/error), `size` (sm/md/lg), `selected`, `removable`, `iconLeft` |
| **ChipGroup** | — | `gap`, `wrap` |
| **Modal** | — | `size` (sm/md/lg), `title`, `showBackButton`, `footer`, `footerActions`, `footerLeft` |
| **Tooltip** | default (dark blur), rich (solid) | `direction`, `title`, `leftIcon`, `media`, `primaryAction`, `secondaryAction`, `link` |
| **Avatar** | — | `size` (sm/md/lg), `src`, `alt`, `fallback`, `bgColor`, `color` |
| **NetworkBadge** | — | `tier` (in-network/tier-2/tier-3/out-of-network), `label`, `networkName`, `bordered` (default: true), `size` (sm/md, default: sm). **ALWAYS use this for network tier display — never use Chip.** |
| **ProviderCard** | — | `name`, `specialty`, `loading`, `photoUrl`, `providerType` (male/female/facility), `networkTier`, `cost`, `costLevel`, `languages` (string[]), `virtualAvailable`, `onBookClick`, `onCallClick` |
| **StarRating** | — | `rating`, `maxStars`, `size` (xs/sm/md/lg), `showValue`, `reviewCount`, `filledColor`, `emptyColor` |

### Navigation
| Component | Key Props |
|-----------|-----------|
| **NavBar** | `left` (NavBar.Brand), `center` (NavBar.Tabs), `right` (free-form), `sticky`, `maxWidth`, `responsive`, `mobileRight` |

### Icon System (1,879 icons)
| Style | Count | Import Pattern |
|-------|-------|----------------|
| Line | 924 | `import SearchLine from '@/components/Icon/icons/line/Search'` |
| Solid | 917 | `import SearchSolid from '@/components/Icon/icons/solid/Search'` |
| Specialty | 19 | `import HeartSpecialty from '@/components/Icon/icons/specialty/Heart'` |
| Profile | 19 | `import DoctorProfile from '@/components/Icon/icons/profile/Doctor'` |

Icon sizes: `xs` (14px), `sm` (16px), `md` (20px), `lg` (24px), `xl` (32px)

**CRITICAL:** Never use inline SVG icons. Always import from the DS icon library. If a needed icon doesn't exist, ask the user before falling back to inline SVG.

---

## IconButton vs Button iconOnly

| Scenario | Use | Why |
|----------|-----|-----|
| Close, dismiss, bookmark, hamburger, nav arrows | `<IconButton>` ghost | Lightweight transparent utility |
| Close on overlay/modal | `<IconButton>` outline | Visible boundary on busy backgrounds |
| Bookmark / favorite toggle | `<IconButton>` ghost + `pressed` | Toggle with color change |
| Formal destructive icon action | `<Button iconOnly>` destructive | Needs visual weight |
| Toolbar formatting (bold, italic) | `<Button iconOnly>` subtle | Formal action context |

---

## Chip vs Button.pill

This is the most common mistake. Follow this decision tree:

| Scenario | Use | Why |
|----------|-----|-----|
| Categorize/tag content | `<Chip>` | Labeling, not action |
| Filter search results | `<Chip variant="outline" onClick>` | Selectable filter |
| Show status (In-Network, Active) | `<Chip color="success">` | Status indicator |
| Book appointment, Submit form | `<Button pill>` | Primary action |
| Navigate to another page | `<Button pill>` | Navigation action |

---

## Tech Stack

- React 19 + TypeScript
- Vite (dev server on port 5175)
- Tailwind CSS (utility classes for layout; components use inline styles with token constants)
- React Router (docs site routing)

## Fonts

- **Tiempos Headline** (`font-display`) — serif, for page-level H1 titles and hero text only
- **Founders Grotesk** (`font-default`) — sans-serif, for everything else (body, labels, buttons, headings H2+)

---

## Mandatory Rules

### Absolute Don'ts (NEVER do these):

1. **Never hardcode hex colors** — use semantic tokens (`sc.primary.surface.DEFAULT`, not `#fd5201`)
2. **Never hardcode pixel values** — use spacing tokens (`semanticSpacing.m`, not `20`)
3. **Never use inline SVG icons** — import from `src/components/Icon/icons/`
4. **Never build containers with raw divs** — use `<Card>` for any bordered/elevated/filled container
5. **Never center footer buttons in Modal** — footer actions are ALWAYS right-aligned
6. **Never use native HTML form elements** — use DS components (`<Checkbox>`, not `<input type="checkbox">`)
7. **Never use `bg-white` or `bg-[#ffffff]`** — use `bg-neutral-negative`
8. **Never put two filled buttons side by side** — primary + outline, or secondary + outline
9. **Never use `font-display` for anything except page-level H1** — everything else is `font-default`
10. **Never nest elevated Cards inside elevated Cards** — use outline or filled for inner cards

### Absolute Do's (ALWAYS do these):

1. **Always use semantic tokens** — every color, spacing, radius, shadow, and typography value
2. **Always add token comments** — `const BOX_SIZE = 20 // spacing.m`
3. **Always check usage rules** before choosing a component variant
4. **Always use `<Card>`** for containers — pick the right variant/radius/padding
5. **Always use `<Chip>`** for labels, tags, filters, and status indicators
6. **Always provide `alt` text** for Avatar when `src` is provided
7. **Always use `footerActions`** for Modal buttons (right-aligned) — not custom `footer`
8. **Always wrap multiple Chips** in `<ChipGroup>` for consistent spacing
9. **Always match Chip color** to semantic meaning (success = positive, error = negative)
10. **Always default backgrounds to white** (`bg-neutral-negative`) unless Figma says otherwise

### Component Pattern:

```
ComponentName/
  ComponentName.tsx       — Implementation (inline styles + JS event handlers)
  ComponentName.types.ts  — TypeScript interfaces
  index.ts                — Single named export
```

- Inline styles with token constants (not CSS classes for component-internal styles)
- Named constants at the top of the file: `const PANEL_BG = sc.neutral.surface.negative // #ffffff`
- Tailwind for layout only (flex, grid, padding, margin on page-level containers)
- Figma node-id documented in a comment at the top of each component file

---

## How to Build a Screen (Step by Step)

When building a new page or screen, follow this order:

### 1. Understand the structure
Read the Figma design and identify: NavBar, page sections, cards, forms, modals.

### 2. Set up the page shell
```tsx
// Page background is always white unless Figma says otherwise
<div className="min-h-screen bg-neutral-negative">
  <NavBar left={...} center={...} right={...} />
  <main className="max-w-[1200px] mx-auto px-xl py-xl">
    {/* page content */}
  </main>
</div>
```

### 3. Build sections with Cards
```tsx
<Card variant="outline" radius="md" padding="md">
  <h2 className="font-default font-medium text-[18px] text-neutral mb-xs">Section Title</h2>
  {/* section content */}
</Card>
```

### 4. Add forms
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

### 5. Add status/filter UI with Chips
```tsx
<ChipGroup wrap>
  <Chip variant="outline" selected={filter === 'all'} onClick={() => setFilter('all')}>All</Chip>
  <Chip variant="outline" selected={filter === 'in'} onClick={() => setFilter('in')} color="success">In-Network</Chip>
  <Chip variant="outline" selected={filter === 'out'} onClick={() => setFilter('out')} color="error">Out-of-Network</Chip>
</ChipGroup>
```

### 6. Add modals for focused tasks
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

---

## Common Composition Patterns

### Provider Card (use `<ProviderCard>` — NOT Card + Avatar)
```tsx
// CORRECT — use the dedicated ProviderCard component
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
  languages={["English", "Spanish"]}
  virtualAvailable
  nextAppointmentLabel="Next appointment"
  nextAppointmentDate="Today, May 7"
  onCallClick={() => call(provider)}
  onBookClick={() => book(provider)}
  onClick={() => navigate(`/provider/${provider.id}`)}
/>

// WRONG — never manually compose Card + Avatar for providers
// <Card><Avatar /><div>name...</div></Card>  ← DON'T DO THIS
```

### Filter Bar (ChipGroup + TextInput)
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

### Settings Row (Card + Toggle)
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

### Form in Modal (Modal + TextInput + Select + Button)
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

---

## Z-Index Hierarchy

| Layer | Z-Index | Component |
|-------|---------|-----------|
| Base content | auto | Page content |
| NavBar | 50 | Sticky navigation |
| Select/DatePicker dropdown | 1000 | Form dropdowns |
| Tooltip | 1000 | Contextual popups |
| Modal | 1500 | Dialog overlay |

---

## Examples

See working examples in `src/docs/examples/`:
- `LoginExample.tsx` — form with inputs, button, typography pairing
- `ProviderSearchResultsExample.tsx` — desktop provider search results with filters, ProviderCard horizontal layout, NavBar
- `HealtheeHomeExample.tsx` — full dashboard with navigation, cards, benefits grid

---

## Lab (Work-In-Progress Components)

The Lab is a staging area for components that are still being built, reviewed, or iterated on.
Lab components are **not exported** from the DS — they can be previewed in the docs site but cannot be imported by consumers.

### Directory structure

```
src/components/_lab/         ← WIP component source (same pattern as production)
  ComponentName/
    ComponentName.tsx
    ComponentName.types.ts
    index.ts

src/docs/lab/                ← Lab doc pages
  ComponentNameLab.tsx
```

### Status badges

Each lab item in the sidebar can have a status:
- **Draft** (grey) — still being built
- **Review** (orange) — ready for feedback
- **Ready** (green) — approved, pending promotion

### Adding a lab component

1. Create component folder in `src/components/_lab/ComponentName/`
2. Create doc page in `src/docs/lab/ComponentNameLab.tsx`
3. Add route in `App.tsx`: `<Route path="/lab/component-name" element={<ComponentNameLab />} />`
4. Add sidebar entry in `Sidebar.tsx` under the Lab section with a `status` field

### Promoting to production

1. Move `src/components/_lab/ComponentName/` → `src/components/ComponentName/`
2. Add export to `src/components/index.ts`
3. Move doc from `src/docs/lab/` → `src/docs/components/`
4. Update Sidebar (move from Lab to Components) + Routes
5. Update this file's Component Inventory table

---

## DS Change Checklist

When adding, removing, or modifying tokens or components, **always complete every applicable step**:

### Token changes (colors, spacing, typography, radii, shadows)
- [ ] Update the **primitive** token file (`tokens/primitive/…`)
- [ ] Update the **semantic** token file (`tokens/semantic/…`)
- [ ] Update **`tailwind.config.js`** to mirror the new/changed semantic tokens
- [ ] Update the matching **Foundation doc page** (`src/docs/foundation/…`) — labels, descriptions, counts
- [ ] Update **this file** (`CLAUDE.md`) — token counts, file descriptions, any affected rules
- [ ] Update the **usage rules** file if the change affects component usage (`tokens/usage/…`)

### Component changes (new component, new variant, prop change)
- [ ] Update the **component doc page** (`src/docs/components/…`)
- [ ] Update the **Component Inventory** table in this file (`CLAUDE.md`)
- [ ] Add or update **usage rules** if the component has variant/pairing constraints
- [ ] Add a **working example** in the doc page showing the new variant/feature
- [ ] Update **`src/components/index.ts`** exports if adding a new component

### Icon changes (new icon, renamed icon)
- [ ] Place the icon in the correct style folder (`line/`, `solid/`, `specialty/`, `profile/`)
- [ ] Update icon **counts** in this file and in the Icon doc page
- [ ] Ensure the icon uses **`currentColor`** and supports standard sizes

---

## Running

```bash
npx vite --port 5175
```
