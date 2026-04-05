// ============================================================
// GLOW DESIGN SYSTEM — Component Manifest
// Auto-consumable by AI agents, MCP servers, and developers.
// Single source of truth for every component in the system.
//
// Usage:
//   import { manifest } from './manifest'
//   const button = manifest.components.find(c => c.name === 'Button')
// ============================================================

export interface PropDef {
  type: string
  default?: string
  required: boolean
  description: string
}

export interface SubComponent {
  name: string
  description: string
  props: Record<string, PropDef>
}

export interface ComponentEntry {
  /** Component display name */
  name: string
  /** Import statement */
  import: string
  /** Category in the DS */
  category: 'actions' | 'forms' | 'data-display' | 'feedback' | 'navigation' | 'zoe-ai' | 'utility'
  /** One-line description */
  description: string
  /** Figma source node (Web DS file ke9Y1BHl3xvX8UMRRAMQ9T) */
  figmaNodeId: string | null
  /** Available visual variants */
  variants: string[]
  /** Available sizes */
  sizes: string[]
  /** Full props definition */
  props: Record<string, PropDef>
  /** Compound sub-components (e.g. NavBar.Brand) */
  subComponents?: SubComponent[]
  /** Semantic color tokens used */
  tokensUsed: {
    colors: string[]
    spacing: string[]
  }
  /** Accessibility features */
  accessibility: {
    role: string | null
    ariaAttributes: string[]
    keyboardInteraction: string[]
  }
  /** When to choose this component */
  whenToUse: string[]
  /** When NOT to use this component */
  avoidWhen: string[]
  /** Components commonly used alongside this one */
  relatedComponents: string[]
  /** Short code examples */
  examples: { label: string; code: string }[]
}

export interface GlowManifest {
  name: string
  version: string
  description: string
  techStack: string[]
  tokenArchitecture: string
  totalIcons: number
  iconStyles: Record<string, number>
  components: ComponentEntry[]
}

export const manifest: GlowManifest = {
  name: 'Glow Design System',
  version: '1.0.0',
  description: 'Agentic design system built for AI agent consumption. Every token, component, and usage rule is structured in TypeScript so agents can read and apply them programmatically.',
  techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
  tokenArchitecture: 'Primitive → Semantic → Usage Rules (3-layer system)',
  totalIcons: 1882,
  iconStyles: { line: 925, solid: 917, specialty: 20, profile: 20 },

  components: [
    // ─────────────────────────────────────────────────────────
    // ACTIONS
    // ─────────────────────────────────────────────────────────
    {
      name: 'Button',
      import: "import { Button } from 'glow-ds'",
      category: 'actions',
      description: 'Primary action trigger with 6 variants and 4 sizes. Supports icons, loading state, and pill shape.',
      figmaNodeId: '114-6888',
      variants: ['primary', 'secondary', 'outline', 'subtle', 'ghost', 'destructive'],
      sizes: ['xs', 'sm', 'md', 'lg'],
      props: {
        variant: { type: "'primary' | 'secondary' | 'outline' | 'subtle' | 'ghost' | 'destructive'", default: "'primary'", required: false, description: 'Visual style of the button' },
        size: { type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", required: false, description: 'Button size: xs=36px, sm=40px, md=48px, lg=56px' },
        pill: { type: 'boolean', default: 'false', required: false, description: 'Fully rounded corners (999px radius)' },
        iconOnly: { type: 'boolean', default: 'false', required: false, description: 'Square button with no text, icon centered' },
        loading: { type: 'boolean', default: 'false', required: false, description: 'Show spinner and disable interaction' },
        fullWidth: { type: 'boolean', default: 'false', required: false, description: 'Stretch to fill parent width' },
        iconLeft: { type: 'ReactNode', required: false, description: 'Icon rendered before label' },
        iconRight: { type: 'ReactNode', required: false, description: 'Icon rendered after label' },
        children: { type: 'ReactNode', required: true, description: 'Button text content' },
        disabled: { type: 'boolean', default: 'false', required: false, description: 'Disable all interaction' },
      },
      tokensUsed: {
        colors: ['sc.primary.surface.DEFAULT', 'sc.primary.surface.hover', 'sc.neutral.surface.DEFAULT', 'sc.neutral.surface.subtle', 'sc.neutral.text.negative', 'sc.neutral.text.DEFAULT', 'sc.neutral.border.strong', 'sc.error.surface.DEFAULT'],
        spacing: ['semanticSpacing.xxs', 'semanticSpacing.xs', 'semanticSpacing.s', 'semanticSpacing.m'],
      },
      accessibility: {
        role: 'button (native)',
        ariaAttributes: ['aria-busy', 'aria-disabled'],
        keyboardInteraction: ['Enter', 'Space'],
      },
      whenToUse: [
        'Primary (orange): single most important action per screen — search, submit, confirm',
        'Secondary (black): repeated CTAs on cards in lists/grids — Book, Connect',
        'Outline: secondary actions, filters, toggles, cancel buttons',
        'Subtle: quiet secondary actions in dense layouts',
        'Ghost: navigation links, icon-only favorites, "Show all" actions',
        'Destructive: ONLY inside confirmation dialogs for irreversible actions',
      ],
      avoidWhen: [
        'Never place primary + secondary buttons side by side (they compete)',
        'Never use two primary buttons on the same screen',
        'Never use lg (56px) in product screens (lg is for marketing/hero only)',
        'Never use destructive outside a confirmation dialog',
      ],
      relatedComponents: ['IconButton', 'Chip'],
      examples: [
        { label: 'Primary action', code: '<Button variant="primary" size="md">Search</Button>' },
        { label: 'With icon', code: '<Button variant="outline" size="sm" pill iconLeft={<SearchLine size="sm" />}>Find Care</Button>' },
        { label: 'Loading state', code: '<Button loading>Submitting...</Button>' },
      ],
    },

    {
      name: 'IconButton',
      import: "import { IconButton } from 'glow-ds'",
      category: 'actions',
      description: 'Icon-only button with ghost or outline variant. Always requires aria-label for accessibility.',
      figmaNodeId: null,
      variants: ['ghost', 'outline'],
      sizes: ['xs', 'sm', 'md', 'lg'],
      props: {
        icon: { type: 'ReactNode', required: true, description: 'DS Icon component to render' },
        'aria-label': { type: 'string', required: true, description: 'Accessible label (mandatory)' },
        variant: { type: "'ghost' | 'outline'", default: "'ghost'", required: false, description: 'Visual style' },
        size: { type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", required: false, description: 'Button size: xs=28px, sm=32px, md=40px, lg=48px' },
        pressed: { type: 'boolean', default: 'false', required: false, description: 'Toggle pressed state' },
        pill: { type: 'boolean', default: 'true', required: false, description: 'Rounded shape' },
        loading: { type: 'boolean', default: 'false', required: false, description: 'Show spinner' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.subtle', 'sc.neutral.border.strong', 'sc.primary.surface.DEFAULT'],
        spacing: [],
      },
      accessibility: {
        role: 'button (native)',
        ariaAttributes: ['aria-label (required)', 'aria-pressed', 'aria-busy', 'aria-disabled'],
        keyboardInteraction: ['Enter', 'Space'],
      },
      whenToUse: [
        'Close buttons, menu triggers, bookmark toggles, share icons',
        'Any action represented only by an icon with no visible text',
      ],
      avoidWhen: [
        'Never use without aria-label — screen readers need it',
        'If there is room for text, use Button with iconLeft instead',
      ],
      relatedComponents: ['Button'],
      examples: [
        { label: 'Close button', code: '<IconButton icon={<CloseLine size="md" />} aria-label="Close" />' },
        { label: 'Bookmark toggle', code: '<IconButton icon={<BookmarkSolid size="md" />} aria-label="Bookmark" pressed />' },
      ],
    },

    // ─────────────────────────────────────────────────────────
    // FORMS & INPUT
    // ─────────────────────────────────────────────────────────
    {
      name: 'TextInput',
      import: "import { TextInput } from 'glow-ds'",
      category: 'forms',
      description: 'Standard text input field with label, helper text, error state, icons, and two shapes.',
      figmaNodeId: '121-1568',
      variants: [],
      sizes: ['sm', 'md', 'lg'],
      props: {
        label: { type: 'string', required: false, description: 'Field label above input' },
        placeholder: { type: 'string', required: false, description: 'Placeholder text' },
        value: { type: 'string', required: false, description: 'Current input value' },
        onChange: { type: '(e: ChangeEvent<HTMLInputElement>) => void', required: false, description: 'Change handler' },
        disabled: { type: 'boolean', default: 'false', required: false, description: 'Disable interaction' },
        error: { type: 'boolean', default: 'false', required: false, description: 'Show error border (red)' },
        helperText: { type: 'string', required: false, description: 'Helper or error message below input' },
        required: { type: 'boolean', default: 'false', required: false, description: 'Show asterisk after label' },
        size: { type: "'sm' | 'md' | 'lg'", default: "'md'", required: false, description: 'Input height: sm=40px, md=48px, lg=56px' },
        shape: { type: "'default' | 'rounded'", default: "'default'", required: false, description: 'Border radius: default=8px, rounded=999px' },
        iconLeft: { type: 'ReactNode', required: false, description: 'Icon inside input (left)' },
        iconRight: { type: 'ReactNode', required: false, description: 'Icon inside input (right)' },
        showInfoIcon: { type: 'boolean', default: 'false', required: false, description: 'Show info icon next to label' },
        name: { type: 'string', required: false, description: 'HTML name attribute for forms' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.negative', 'sc.neutral.border.DEFAULT', 'sc.neutral.border.strong', 'sc.error.border.DEFAULT', 'sc.error.text.DEFAULT', 'sc.neutral.text.DEFAULT', 'sc.neutral.text.dark'],
        spacing: ['semanticSpacing.xxs', 'semanticSpacing.xs'],
      },
      accessibility: {
        role: null,
        ariaAttributes: [],
        keyboardInteraction: ['Focus via Tab', 'Type to input'],
      },
      whenToUse: [
        'Single-line text entry: names, emails, search queries, short answers',
        'With label and helperText for form fields',
        'With iconLeft for search inputs (SearchLine icon)',
      ],
      avoidWhen: [
        'Multi-line text — use a textarea (not yet in DS)',
        'Selection from predefined options — use Select instead',
        'Never use lg size inside modals (use sm or md)',
      ],
      relatedComponents: ['Select', 'DatePicker'],
      examples: [
        { label: 'Basic field', code: '<TextInput label="Email" placeholder="you@example.com" />' },
        { label: 'Error state', code: '<TextInput label="Password" error helperText="Password is required" />' },
        { label: 'Search input', code: '<TextInput shape="rounded" iconLeft={<SearchLine size="sm" />} placeholder="Search..." />' },
      ],
    },

    {
      name: 'Select',
      import: "import { Select } from 'glow-ds'",
      category: 'forms',
      description: 'Dropdown select with search, multi-select, custom trigger, and option icons.',
      figmaNodeId: '2337-40933',
      variants: [],
      sizes: ['sm', 'md', 'lg'],
      props: {
        options: { type: 'SelectOption[]', required: true, description: 'Array of { value, label, disabled?, iconLeft?, additionalInfo? }' },
        value: { type: 'string', required: false, description: 'Selected value (controlled)' },
        onChange: { type: '(value: string) => void', required: false, description: 'Selection change handler' },
        placeholder: { type: 'string', required: false, description: 'Placeholder when no selection' },
        label: { type: 'string', required: false, description: 'Field label' },
        helperText: { type: 'string', required: false, description: 'Helper text below' },
        required: { type: 'boolean', default: 'false', required: false, description: 'Show asterisk' },
        disabled: { type: 'boolean', default: 'false', required: false, description: 'Disable interaction' },
        error: { type: 'boolean', default: 'false', required: false, description: 'Error state' },
        size: { type: "'sm' | 'md' | 'lg'", default: "'md'", required: false, description: 'Height: sm=40px, md=48px, lg=56px' },
        shape: { type: "'default' | 'rounded'", default: "'default'", required: false, description: 'Border radius' },
        iconLeft: { type: 'ReactNode', required: false, description: 'Icon in trigger' },
        searchable: { type: 'boolean', default: 'false', required: false, description: 'Enable search filter' },
        multiple: { type: 'boolean', default: 'false', required: false, description: 'Multi-select mode' },
        multiValue: { type: 'string[]', required: false, description: 'Selected values in multi mode' },
        onMultiChange: { type: '(values: string[]) => void', required: false, description: 'Multi-select change handler' },
        maxVisibleOptions: { type: 'number', default: '6', required: false, description: 'Max options before scroll' },
        renderTrigger: { type: '(selected) => ReactNode', required: false, description: 'Custom trigger renderer' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.negative', 'sc.neutral.border.DEFAULT', 'sc.neutral.border.strong', 'sc.error.border.DEFAULT', 'sc.neutral.text.DEFAULT'],
        spacing: ['semanticSpacing.xxs', 'semanticSpacing.xs'],
      },
      accessibility: {
        role: null,
        ariaAttributes: [],
        keyboardInteraction: ['Tab to focus', 'Enter/Space to open', 'Arrow keys to navigate', 'Enter to select'],
      },
      whenToUse: [
        'Choosing from a predefined list of 3+ options',
        'When radio buttons would take too much space (5+ options)',
        'Multi-select for filters (tags, categories)',
      ],
      avoidWhen: [
        'Only 2-3 options — use RadioButton group instead',
        'Free-text input needed — use TextInput',
        'Never use lg size inside modals',
      ],
      relatedComponents: ['TextInput', 'Checkbox', 'RadioButton'],
      examples: [
        { label: 'Basic', code: `<Select label="State" options={[{ value: 'ny', label: 'New York' }, { value: 'ca', label: 'California' }]} />` },
        { label: 'Searchable', code: '<Select label="Language" searchable options={languages} />' },
      ],
    },

    {
      name: 'DatePicker',
      import: "import { DatePicker } from 'glow-ds'",
      category: 'forms',
      description: 'Date input with calendar dropdown, min/max date constraints, and manual text entry (MM/DD/YYYY).',
      figmaNodeId: null,
      variants: [],
      sizes: ['sm', 'md', 'lg'],
      props: {
        label: { type: 'string', required: false, description: 'Field label' },
        helperText: { type: 'string', required: false, description: 'Helper text' },
        required: { type: 'boolean', default: 'false', required: false, description: 'Show asterisk' },
        disabled: { type: 'boolean', default: 'false', required: false, description: 'Disable interaction' },
        error: { type: 'boolean', default: 'false', required: false, description: 'Error state' },
        size: { type: "'sm' | 'md' | 'lg'", default: "'md'", required: false, description: 'Height: sm=40px, md=48px, lg=56px' },
        shape: { type: "'default' | 'rounded'", default: "'default'", required: false, description: 'Border radius' },
        value: { type: 'string', required: false, description: 'Display value in MM/DD/YYYY format' },
        onChange: { type: '(displayValue: string) => void', required: false, description: 'Text input change' },
        onDateChange: { type: '(date: Date | null) => void', required: false, description: 'Resolved date change' },
        minDate: { type: 'Date', required: false, description: 'Minimum selectable date' },
        maxDate: { type: 'Date', required: false, description: 'Maximum selectable date' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.negative', 'sc.neutral.border.DEFAULT', 'sc.error.border.DEFAULT', 'sc.primary.surface.DEFAULT'],
        spacing: ['semanticSpacing.xxs', 'semanticSpacing.xs'],
      },
      accessibility: {
        role: null,
        ariaAttributes: [],
        keyboardInteraction: ['Tab to focus', 'Type date manually', 'Click calendar icon to open picker'],
      },
      whenToUse: ['Date of birth, appointment dates, date range filters'],
      avoidWhen: ['Time selection — not supported', 'Date ranges — use two DatePickers'],
      relatedComponents: ['TextInput', 'Select'],
      examples: [
        { label: 'Basic', code: '<DatePicker label="Date of Birth" />' },
        { label: 'With constraints', code: '<DatePicker label="Appointment" minDate={new Date()} />' },
      ],
    },

    {
      name: 'Checkbox',
      import: "import { Checkbox } from 'glow-ds'",
      category: 'forms',
      description: 'Multi-select control for independently toggling options. Supports indeterminate state.',
      figmaNodeId: '118-10667',
      variants: [],
      sizes: [],
      props: {
        checked: { type: 'boolean', required: false, description: 'Checked state' },
        onChange: { type: '(e: ChangeEvent<HTMLInputElement>) => void', required: false, description: 'Change handler' },
        disabled: { type: 'boolean', default: 'false', required: false, description: 'Disable interaction' },
        label: { type: 'string', required: false, description: 'Text label (right of checkbox)' },
        name: { type: 'string', required: false, description: 'Form name attribute' },
        value: { type: 'string', required: false, description: 'Form value' },
        indeterminate: { type: 'boolean', default: 'false', required: false, description: 'Dash icon for partial selection' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.negative', 'sc.neutral.border.DEFAULT', 'sc.neutral.text.DEFAULT'],
        spacing: [],
      },
      accessibility: {
        role: 'checkbox (native input)',
        ariaAttributes: ['aria-hidden (on visual element)'],
        keyboardInteraction: ['Space to toggle', 'Tab to focus'],
      },
      whenToUse: [
        'Multi-select: user picks zero, one, or many options independently',
        'Terms & conditions acceptance',
        'Filter checkboxes',
      ],
      avoidWhen: [
        'Single-select from a group — use RadioButton',
        'Instant toggle effect — use Toggle',
        'Never use a single radio button alone (use Checkbox)',
      ],
      relatedComponents: ['RadioButton', 'Toggle'],
      examples: [
        { label: 'Basic', code: '<Checkbox label="I agree to the terms" checked={agreed} onChange={...} />' },
        { label: 'Indeterminate', code: '<Checkbox indeterminate label="Select all" />' },
      ],
    },

    {
      name: 'RadioButton',
      import: "import { RadioButton } from 'glow-ds'",
      category: 'forms',
      description: 'Single-select control for choosing exactly one option from a group of 2+.',
      figmaNodeId: '118-10667',
      variants: [],
      sizes: [],
      props: {
        checked: { type: 'boolean', required: false, description: 'Selected state' },
        onChange: { type: '(e: ChangeEvent<HTMLInputElement>) => void', required: false, description: 'Change handler' },
        disabled: { type: 'boolean', default: 'false', required: false, description: 'Disable interaction' },
        label: { type: 'string', required: false, description: 'Text label (right of radio)' },
        name: { type: 'string', required: false, description: 'Form name (groups radios together)' },
        value: { type: 'string', required: false, description: 'Form value' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.negative', 'sc.neutral.border.DEFAULT', 'sc.neutral.text.DEFAULT'],
        spacing: [],
      },
      accessibility: {
        role: 'radio (native input)',
        ariaAttributes: ['aria-hidden (on visual element)'],
        keyboardInteraction: ['Arrow keys to navigate group', 'Space to select', 'Tab to focus group'],
      },
      whenToUse: [
        'Exactly one selection from 2-5 options',
        'Always in groups of 2+ with one pre-selected',
      ],
      avoidWhen: [
        'Never use a single radio button alone',
        'More than 5 options — use Select dropdown instead',
        'Multi-select — use Checkbox',
      ],
      relatedComponents: ['Checkbox', 'Select', 'Toggle'],
      examples: [
        { label: 'Group', code: `<RadioButton name="plan" value="basic" label="Basic" checked={plan === 'basic'} onChange={...} />\n<RadioButton name="plan" value="premium" label="Premium" checked={plan === 'premium'} onChange={...} />` },
      ],
    },

    {
      name: 'Toggle',
      import: "import { Toggle } from 'glow-ds'",
      category: 'forms',
      description: 'Binary on/off switch with immediate effect. No submit button needed.',
      figmaNodeId: '118-10915',
      variants: [],
      sizes: ['default', 'large'],
      props: {
        checked: { type: 'boolean', required: false, description: 'Toggle state' },
        onChange: { type: '(e: ChangeEvent<HTMLInputElement>) => void', required: false, description: 'Change handler' },
        disabled: { type: 'boolean', default: 'false', required: false, description: 'Disable interaction' },
        label: { type: 'string', required: false, description: 'Text label' },
        name: { type: 'string', required: false, description: 'Form name' },
        value: { type: 'string', required: false, description: 'Form value' },
        size: { type: "'default' | 'large'", default: "'default'", required: false, description: 'Track size: default=44px, large=52px' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.disabled', 'sc.neutral.border.DEFAULT', 'sc.success.surface.DEFAULT'],
        spacing: [],
      },
      accessibility: {
        role: 'switch (native input)',
        ariaAttributes: ['aria-hidden (on visual track)'],
        keyboardInteraction: ['Space to toggle', 'Tab to focus'],
      },
      whenToUse: [
        'Settings that take effect immediately (notifications, dark mode)',
        'Binary preferences with instant feedback',
      ],
      avoidWhen: [
        'Inside a form with a Submit button — use Checkbox instead',
        'Multi-option selection — use Checkbox group',
      ],
      relatedComponents: ['Checkbox', 'RadioButton'],
      examples: [
        { label: 'Setting', code: '<Toggle label="Push notifications" checked={enabled} onChange={...} />' },
      ],
    },

    // ─────────────────────────────────────────────────────────
    // DATA DISPLAY
    // ─────────────────────────────────────────────────────────
    {
      name: 'Avatar',
      import: "import { Avatar } from 'glow-ds'",
      category: 'data-display',
      description: 'User profile image with fallback to silhouette icon or custom content (initials).',
      figmaNodeId: '149-7867',
      variants: [],
      sizes: ['sm', 'md', 'lg'],
      props: {
        size: { type: "'sm' | 'md' | 'lg'", default: "'md'", required: false, description: 'Avatar size: sm=32px, md=40px, lg=48px' },
        src: { type: 'string', required: false, description: 'Image URL' },
        alt: { type: 'string', required: false, description: 'Alt text for image' },
        fallback: { type: 'ReactNode', required: false, description: 'Custom fallback content (initials, icon)' },
        bgColor: { type: 'string', default: "'#fff8f5'", required: false, description: 'Background color override' },
        color: { type: 'string', default: "'#fd5201'", required: false, description: 'Icon/text color override' },
      },
      tokensUsed: {
        colors: ['sc.primary.surface.subtle', 'sc.primary.border.DEFAULT'],
        spacing: [],
      },
      accessibility: {
        role: null,
        ariaAttributes: [],
        keyboardInteraction: [],
      },
      whenToUse: [
        'User profile images in NavBar (use md=40px)',
        'Provider photos in cards (sm=32px)',
        'Profile pages (lg=48px)',
      ],
      avoidWhen: [
        'Logos or brand images — use <img> directly',
        'Never hardcode colors — use bgColor/color props',
      ],
      relatedComponents: ['NavBar', 'ProviderCard'],
      examples: [
        { label: 'With image', code: '<Avatar size="md" src="/photo.jpg" alt="Jane Doe" />' },
        { label: 'Initials', code: '<Avatar size="md" fallback="JD" bgColor="#e8d5ff" color="#7c3aed" />' },
      ],
    },

    {
      name: 'Card',
      import: "import { Card } from 'glow-ds'",
      category: 'data-display',
      description: 'Flexible container with 3 variants (outline, elevated, filled), configurable radius and padding.',
      figmaNodeId: null,
      variants: ['outline', 'elevated', 'filled'],
      sizes: [],
      props: {
        variant: { type: "'outline' | 'elevated' | 'filled'", default: "'outline'", required: false, description: 'Visual style: outline=border, elevated=shadow, filled=grey bg' },
        radius: { type: "'sm' | 'md' | 'lg'", default: "'md'", required: false, description: 'Border radius: sm=12px, md=16px, lg=24px' },
        padding: { type: "'sm' | 'md' | 'lg' | 'none'", default: "'md'", required: false, description: 'Inner padding: sm=16px, md=20px, lg=32px, none=0' },
        interactive: { type: 'boolean', default: 'false', required: false, description: 'Enable hover effect (cursor pointer, shadow lift)' },
        isActive: { type: 'boolean', default: 'false', required: false, description: 'Persistent hover/active state' },
        as: { type: "'div' | 'article' | 'section' | 'a'", default: "'div'", required: false, description: 'Semantic HTML element' },
        children: { type: 'ReactNode', required: true, description: 'Card content' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.negative', 'sc.neutral.surface.subtle', 'sc.neutral.border.light'],
        spacing: ['semanticSpacing.s', 'semanticSpacing.m', 'semanticSpacing.xl'],
      },
      accessibility: {
        role: null,
        ariaAttributes: [],
        keyboardInteraction: [],
      },
      whenToUse: [
        'Outline (default): clean border container for content sections, list items',
        'Elevated: floating cards, overlays, attention-drawing above page surface',
        'Filled: secondary/supporting content areas, grouped info, nested sections',
      ],
      avoidWhen: [
        'Never build containers manually with borders/shadows — always use Card',
        'Never nest elevated inside elevated (stacked shadows)',
        'Never use interactive unless entire card is clickable',
      ],
      relatedComponents: ['ProviderCard', 'ZoeBenefitCard'],
      examples: [
        { label: 'Basic outline', code: '<Card variant="outline" padding="md">Content here</Card>' },
        { label: 'Interactive', code: '<Card interactive onClick={handleClick}>Clickable card</Card>' },
      ],
    },

    {
      name: 'Chip',
      import: "import { Chip } from 'glow-ds'",
      category: 'data-display',
      description: 'Compact label/tag for categorization, filtering, and status. NOT for primary actions (use Button pill instead).',
      figmaNodeId: null,
      variants: ['subtle', 'outline', 'filled'],
      sizes: ['sm', 'md', 'lg'],
      props: {
        variant: { type: "'subtle' | 'outline' | 'filled'", default: "'outline'", required: false, description: 'Visual style' },
        color: { type: "'neutral' | 'success' | 'error' | 'info' | 'warning' | 'recommended' | 'hsa' | 'lfsa'", default: "'neutral'", required: false, description: 'Semantic color' },
        size: { type: "'sm' | 'md' | 'lg'", default: "'md'", required: false, description: 'Height: sm=28px, md=32px, lg=36px' },
        selected: { type: 'boolean', default: 'false', required: false, description: 'Active/selected state' },
        removable: { type: 'boolean', default: 'false', required: false, description: 'Show remove (X) button' },
        onRemove: { type: '() => void', required: false, description: 'Remove callback' },
        disabled: { type: 'boolean', default: 'false', required: false, description: 'Disable interaction' },
        iconLeft: { type: 'ReactNode', required: false, description: 'Icon before label' },
        onClick: { type: '(e: MouseEvent) => void', required: false, description: 'Click handler' },
        children: { type: 'ReactNode', required: true, description: 'Chip label text' },
      },
      tokensUsed: {
        colors: ['sc.neutral.*', 'sc.success.*', 'sc.error.*', 'sc.accent-blue.*', 'sc.accent-yellow.*', 'sc.accent-purple.*'],
        spacing: ['semanticSpacing.xxxs', 'semanticSpacing.xxs'],
      },
      accessibility: {
        role: 'button (when clickable)',
        ariaAttributes: ['aria-selected', 'aria-disabled'],
        keyboardInteraction: ['Enter/Space when clickable'],
      },
      whenToUse: [
        'Subtle: non-interactive static labels and tags',
        'Outline: selectable/filter chips with clear selected/unselected contrast',
        'Filled: strong status indicators, badges, active state emphasis',
        'Colors must match semantic meaning: success=positive, error=negative, info=informational',
      ],
      avoidWhen: [
        'NEVER use Chip for primary actions (navigate, submit, book) — use Button pill instead',
        'Most common mistake: confusing Chip (labeling) with Button.pill (action)',
      ],
      relatedComponents: ['Button', 'NetworkBadge'],
      examples: [
        { label: 'Status', code: '<Chip color="success" variant="subtle">Active</Chip>' },
        { label: 'Filter', code: '<Chip variant="outline" selected={isSelected} onClick={toggle}>Dermatology</Chip>' },
      ],
    },

    {
      name: 'StarRating',
      import: "import { StarRating } from 'glow-ds'",
      category: 'data-display',
      description: 'Read-only star rating display with decimal support, optional numeric value and review count.',
      figmaNodeId: null,
      variants: [],
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
      props: {
        rating: { type: 'number', required: true, description: '0-5 rating value, supports decimals (e.g. 4.3)' },
        maxStars: { type: 'number', default: '5', required: false, description: 'Total number of stars' },
        size: { type: 'IconSize', default: "'sm'", required: false, description: 'Star icon size' },
        showValue: { type: 'boolean', default: 'false', required: false, description: 'Show numeric rating text' },
        reviewCount: { type: 'number', required: false, description: 'Review count in parentheses e.g. (128)' },
        filledColor: { type: 'string', default: "'#ffd129'", required: false, description: 'Filled star color' },
        emptyColor: { type: 'string', default: "'#d4d4d4'", required: false, description: 'Empty star color' },
      },
      tokensUsed: {
        colors: ['sc.accent-yellow.surface.selected', 'sc.neutral.surface.disabled', 'sc.neutral.text.light'],
        spacing: ['semanticSpacing.xxs'],
      },
      accessibility: { role: null, ariaAttributes: [], keyboardInteraction: [] },
      whenToUse: ['Provider ratings, product reviews, quality indicators'],
      avoidWhen: ['Interactive rating input — this is read-only only'],
      relatedComponents: ['ProviderCard'],
      examples: [
        { label: 'With count', code: '<StarRating rating={4.5} showValue reviewCount={128} />' },
      ],
    },

    {
      name: 'ProviderCard',
      import: "import { ProviderCard } from 'glow-ds'",
      category: 'data-display',
      description: 'Complete healthcare provider card with avatar, details, cost, network badge, and actions. Self-contained — never manually compose with Card + Avatar.',
      figmaNodeId: null,
      variants: [],
      sizes: [],
      props: {
        name: { type: 'string', required: true, description: 'Provider name' },
        specialty: { type: 'string', required: true, description: 'Medical specialty' },
        layout: { type: "'vertical' | 'horizontal' | 'responsive'", default: "'responsive'", required: false, description: 'Card layout mode' },
        loading: { type: 'boolean', default: 'false', required: false, description: 'Show skeleton loading state' },
        photoUrl: { type: 'string', required: false, description: 'Provider photo URL' },
        initials: { type: 'string', required: false, description: 'Fallback initials' },
        providerType: { type: "'male' | 'female' | 'facility'", default: "'male'", required: false, description: 'Avatar icon type when no photo' },
        address: { type: 'string', required: false, description: 'Physical address' },
        distance: { type: 'string', required: false, description: 'Distance (e.g. "0.3 mi")' },
        rating: { type: 'number', required: false, description: 'Star rating (0-5)' },
        reviewCount: { type: 'number', required: false, description: 'Number of reviews' },
        networkTier: { type: "'in-network' | 'tier-2' | 'tier-3' | 'out-of-network'", required: false, description: 'Insurance network tier' },
        networkName: { type: 'string', required: false, description: 'Network name (e.g. "Aetna")' },
        networkLabel: { type: 'string', required: false, description: 'Custom tier label' },
        cost: { type: 'string', required: false, description: 'Price range (e.g. "$1,400")' },
        costLevel: { type: "'lower' | 'typical' | 'higher' | 'unknown'", required: false, description: 'Cost comparison badge' },
        costLabel: { type: 'ReactNode', required: false, description: 'Label under price' },
        showCostChip: { type: 'boolean', default: 'true', required: false, description: 'Show cost comparison chip' },
        showPrice: { type: 'boolean', default: 'true', required: false, description: 'Show entire price section' },
        costHint: { type: 'ReactNode', required: false, description: 'Hint text below price' },
        languages: { type: 'string[]', required: false, description: 'Spoken languages (max 2 shown + "+N")' },
        virtualAvailable: { type: 'boolean', default: 'false', required: false, description: 'Virtual appointments available' },
        nextAppointmentLabel: { type: 'string', required: false, description: 'e.g. "Next appointment"' },
        nextAppointmentDate: { type: 'string', required: false, description: 'e.g. "Today, May 7"' },
        bookmarkable: { type: 'boolean', default: 'true', required: false, description: 'Show bookmark toggle' },
        onBookmarkChange: { type: '(bookmarked: boolean) => void', required: false, description: 'Bookmark callback' },
        onCallClick: { type: '() => void', required: false, description: 'Call button handler' },
        onBookClick: { type: '() => void', required: false, description: 'Book button handler' },
        onClick: { type: '() => void', required: false, description: 'Card click handler' },
        isActive: { type: 'boolean', default: 'false', required: false, description: 'Persistent highlight state' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.negative', 'sc.neutral.border.light', 'sc.neutral.text.DEFAULT', 'sc.neutral.text.dark', 'sc.neutral.text.light'],
        spacing: ['semanticSpacing.s', 'semanticSpacing.m', 'semanticSpacing.l'],
      },
      accessibility: { role: null, ariaAttributes: [], keyboardInteraction: [] },
      whenToUse: [
        'Provider search results, saved/bookmarked lists, comparisons, appointment booking',
        'Complete self-contained component — never manually compose Card + Avatar',
        'Default detail rows: ALWAYS include rating, distance + address, and appointment row. Languages and virtualAvailable are optional extras.',
      ],
      avoidWhen: [
        'Generic user profiles — use Card + Avatar manually',
        'Non-healthcare person cards',
        'Never pass onBookClick without onCallClick — Call is MANDATORY when actions exist',
        'Never set width on ProviderCard — set width on parent wrapper (it is 100% width built-in)',
        'Never omit rating, distance, or address — these are mandatory default detail rows',
      ],
      relatedComponents: ['NetworkBadge', 'StarRating', 'Card', 'ZoeProviderCard'],
      examples: [
        { label: 'Full card', code: `<ProviderCard\n  name="Dr. Sarah Chen"\n  specialty="Dermatology"\n  providerType="female"\n  rating={4.8}\n  reviewCount={124}\n  distance="0.3 mi"\n  address="123 Medical Center Dr"\n  networkTier="in-network"\n  cost="$1,400"\n  costLevel="lower"\n  nextAppointmentLabel="Next appointment"\n  nextAppointmentDate="Today, May 7"\n  onCallClick={() => {}}\n  onBookClick={() => {}}\n/>` },
      ],
    },

    {
      name: 'NetworkBadge',
      import: "import { NetworkBadge } from 'glow-ds'",
      category: 'data-display',
      description: 'Insurance network tier badge with colored coin icon. Always use this instead of Chip for network tiers.',
      figmaNodeId: null,
      variants: [],
      sizes: ['sm', 'md'],
      props: {
        tier: { type: "'in-network' | 'tier-2' | 'tier-3' | 'out-of-network'", required: true, description: 'Network tier level' },
        networkName: { type: 'string', required: false, description: 'Network name (e.g. "Aetna")' },
        label: { type: 'string', required: false, description: 'Custom tier label text' },
        bordered: { type: 'boolean', default: 'true', required: false, description: 'Show grey border pill' },
        size: { type: "'sm' | 'md'", default: "'sm'", required: false, description: 'Badge size' },
      },
      tokensUsed: {
        colors: ['sc.success.*', 'sc.accent-yellow.*', 'sc.accent-purple.*', 'sc.error.*'],
        spacing: [],
      },
      accessibility: { role: null, ariaAttributes: [], keyboardInteraction: [] },
      whenToUse: [
        'Provider cards and benefit details to show insurance coverage level',
        'ALWAYS use NetworkBadge for network tiers — never generic Chip',
      ],
      avoidWhen: ['Never create custom icons for tiers', 'Never use Chip with network tier colors manually'],
      relatedComponents: ['ProviderCard', 'Chip'],
      examples: [
        { label: 'In network', code: '<NetworkBadge tier="in-network" />' },
        { label: 'With name', code: '<NetworkBadge tier="tier-2" networkName="Aetna" />' },
      ],
    },

    {
      name: 'ScrollArea',
      import: "import { ScrollArea } from 'glow-ds'",
      category: 'data-display',
      description: 'Custom scrollable container with optional scroll-snap, configurable direction, and styled scrollbar.',
      figmaNodeId: null,
      variants: [],
      sizes: [],
      props: {
        direction: { type: "'horizontal' | 'vertical' | 'both'", default: "'vertical'", required: false, description: 'Scroll axis' },
        maxHeight: { type: 'number | string', required: false, description: 'Max-height constraint' },
        maxWidth: { type: 'number | string', required: false, description: 'Max-width constraint' },
        gap: { type: 'number', required: false, description: 'Gap between children (px)' },
        snap: { type: 'boolean', default: 'false', required: false, description: 'Enable scroll-snap' },
        snapAlign: { type: "'start' | 'center' | 'end'", default: "'start'", required: false, description: 'Snap alignment' },
        hideScrollbar: { type: 'boolean', default: 'false', required: false, description: 'Hide scrollbar entirely' },
        children: { type: 'ReactNode', required: true, description: 'Scrollable content' },
      },
      tokensUsed: {
        colors: [],
        spacing: [],
      },
      accessibility: { role: null, ariaAttributes: [], keyboardInteraction: [] },
      whenToUse: [
        'Horizontal card carousels (ProviderCard, ZoeBenefitCard)',
        'Scrollable content areas with max-height',
        'With snap for card-by-card scrolling',
      ],
      avoidWhen: ['Full page scroll — let the page scroll naturally'],
      relatedComponents: ['ProviderCard', 'ZoeBenefitCard'],
      examples: [
        { label: 'Card carousel', code: '<ScrollArea direction="horizontal" gap={16} snap>\n  {cards.map(c => <div style={{ width: 360 }}><ProviderCard {...c} /></div>)}\n</ScrollArea>' },
      ],
    },

    // ─────────────────────────────────────────────────────────
    // FEEDBACK & OVERLAY
    // ─────────────────────────────────────────────────────────
    {
      name: 'Toast',
      import: "import { Toast } from 'glow-ds'",
      category: 'feedback',
      description: 'Temporary notification snackbar with variants, optional icon, action button, and auto-dismiss.',
      figmaNodeId: '149:1555',
      variants: ['default', 'success', 'error', 'warning', 'info'],
      sizes: [],
      props: {
        message: { type: 'string', required: true, description: 'Toast message text' },
        variant: { type: "'default' | 'success' | 'error' | 'warning' | 'info'", default: "'default'", required: false, description: 'Intent variant (affects icon)' },
        iconLeft: { type: 'ReactNode', required: false, description: 'Icon override' },
        hideIcon: { type: 'boolean', default: 'false', required: false, description: 'Hide variant icon' },
        action: { type: '{ label: string; onClick: () => void }', required: false, description: 'Action button' },
        showClose: { type: 'boolean', default: 'true', required: false, description: 'Show close X button' },
        onClose: { type: '() => void', required: false, description: 'Close callback' },
        duration: { type: 'number', default: '5000', required: false, description: 'Auto-dismiss duration in ms' },
        open: { type: 'boolean', required: false, description: 'Controlled visibility' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.focused', 'sc.neutral.text.negative', 'sc.success.*', 'sc.error.*', 'sc.accent-yellow.*'],
        spacing: ['semanticSpacing.xs', 'semanticSpacing.m'],
      },
      accessibility: {
        role: 'alert',
        ariaAttributes: ['aria-live="polite"'],
        keyboardInteraction: [],
      },
      whenToUse: [
        'Success confirmations (saved, sent, booked)',
        'Error notifications (failed to save, network error)',
        'Informational messages with optional undo action',
      ],
      avoidWhen: [
        'Critical errors requiring user action — use inline error or Modal',
        'Never use for form validation errors (use inline error states)',
      ],
      relatedComponents: ['Modal'],
      examples: [
        { label: 'Success', code: '<Toast open variant="success" message="Appointment booked!" />' },
        { label: 'With action', code: '<Toast open variant="default" message="Provider removed" action={{ label: "Undo", onClick: undo }} />' },
      ],
    },

    {
      name: 'Tooltip',
      import: "import { Tooltip } from 'glow-ds'",
      category: 'feedback',
      description: 'Contextual info popup with default (simple) and rich (media, actions) variants. Hover or controlled mode.',
      figmaNodeId: '2347-42116',
      variants: ['default', 'rich'],
      sizes: [],
      props: {
        text: { type: 'string', required: true, description: 'Body text' },
        title: { type: 'string', required: false, description: 'Optional heading' },
        leftIcon: { type: 'ReactNode', required: false, description: 'Icon left of title' },
        media: { type: "{ type: 'image' | 'video', src: string, alt?: string, poster?: string }", required: false, description: 'Rich media (image or video)' },
        link: { type: '{ label: string, href?: string, onClick?: () => void }', required: false, description: 'Bottom link (rich only)' },
        primaryAction: { type: '{ label: string, onClick?: () => void }', required: false, description: 'Primary CTA button' },
        secondaryAction: { type: '{ label: string, onClick?: () => void }', required: false, description: 'Secondary CTA button' },
        variant: { type: "'default' | 'rich'", default: "'default'", required: false, description: 'Simple or rich content' },
        direction: { type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left' | 'right'", default: "'top-left'", required: false, description: 'Arrow position' },
        open: { type: 'boolean', required: false, description: 'Controlled visibility' },
        onClose: { type: '() => void', required: false, description: 'Close callback' },
        children: { type: 'ReactNode', required: false, description: 'Trigger element' },
      },
      tokensUsed: {
        colors: ['sc.overlay.surface.DEFAULT', 'sc.neutral.surface.negative', 'sc.neutral.text.DEFAULT'],
        spacing: ['semanticSpacing.xs', 'semanticSpacing.s'],
      },
      accessibility: {
        role: null,
        ariaAttributes: ['aria-label (close button)'],
        keyboardInteraction: [],
      },
      whenToUse: [
        'Default: brief contextual info, icon labels, explanations on hover',
        'Rich: educational content, walkthroughs, onboarding with media/actions',
        'Controlled: feature announcements with explicit close button',
      ],
      avoidWhen: [
        'Form fields or complex interactions — too cramped',
        'Error messages — use inline error or Toast',
        'Mobile primary interactions — no hover state on touch',
      ],
      relatedComponents: ['Toast', 'Modal'],
      examples: [
        { label: 'Simple hover', code: '<Tooltip text="Click to save this provider">\n  <IconButton icon={<BookmarkLine />} aria-label="Bookmark" />\n</Tooltip>' },
      ],
    },

    {
      name: 'Modal',
      import: "import { Modal } from 'glow-ds'",
      category: 'feedback',
      description: 'Dialog overlay for focused tasks. Auto-converts to bottom sheet on mobile. Focus trap and Escape to close.',
      figmaNodeId: '2370-44085',
      variants: [],
      sizes: ['sm', 'md', 'lg'],
      props: {
        open: { type: 'boolean', required: true, description: 'Modal visibility' },
        onClose: { type: '() => void', required: true, description: 'Close handler' },
        title: { type: 'string', required: true, description: 'Header title text' },
        size: { type: "'sm' | 'md' | 'lg'", default: "'md'", required: false, description: 'Width: sm=480px, md=600px, lg=708px' },
        showBackButton: { type: 'boolean', default: 'false', required: false, description: 'Back chevron for multi-step flows' },
        onBack: { type: '() => void', required: false, description: 'Back button callback' },
        closeOnBackdropClick: { type: 'boolean', default: 'true', required: false, description: 'Close when clicking backdrop' },
        closeOnEscape: { type: 'boolean', default: 'true', required: false, description: 'Close on Escape key' },
        children: { type: 'ReactNode', required: true, description: 'Modal body content' },
        footer: { type: 'ReactNode', required: false, description: 'Custom footer content' },
        footerActions: { type: 'ReactNode', required: false, description: 'Right-aligned footer buttons (preferred)' },
        footerLeft: { type: 'ReactNode', required: false, description: 'Left-side footer content' },
      },
      tokensUsed: {
        colors: ['sc.overlay.surface.DEFAULT', 'sc.neutral.surface.negative', 'sc.neutral.border.strong'],
        spacing: ['semanticSpacing.s', 'semanticSpacing.m', 'semanticSpacing.l'],
      },
      accessibility: {
        role: 'dialog',
        ariaAttributes: ['aria-modal="true"', 'aria-labelledby'],
        keyboardInteraction: ['Escape to close', 'Tab focus trap'],
      },
      whenToUse: [
        'Focused tasks that interrupt main flow (forms, confirmations)',
        'sm: simple confirmations, md: standard forms, lg: complex forms',
      ],
      avoidWhen: [
        'Simple confirmations — consider Toast instead',
        'Non-blocking info — use inline content',
        'Never center footer buttons — always right-aligned via footerActions',
        'Never use lg (56px) form inputs inside modals',
        'Never use pill-shaped buttons in modal footers',
      ],
      relatedComponents: ['Toast', 'SideNav'],
      examples: [
        { label: 'Confirmation', code: `<Modal open={isOpen} onClose={close} title="Confirm Booking" size="sm"\n  footerActions={<>\n    <Button variant="outline" onClick={close}>Cancel</Button>\n    <Button onClick={confirm}>Confirm</Button>\n  </>}\n>\n  <p>Book appointment with Dr. Chen?</p>\n</Modal>` },
      ],
    },

    // ─────────────────────────────────────────────────────────
    // NAVIGATION
    // ─────────────────────────────────────────────────────────
    {
      name: 'NavBar',
      import: "import { NavBar } from 'glow-ds'",
      category: 'navigation',
      description: 'Top navigation bar with 3-zone layout (left/center/right). Responsive — collapses center+right below 1200px. Compound component with Brand, Tabs, Tab.',
      figmaNodeId: '149-7678',
      variants: [],
      sizes: [],
      props: {
        left: { type: 'ReactNode', required: false, description: 'Left zone — typically NavBar.Brand' },
        center: { type: 'ReactNode', required: false, description: 'Center zone — typically NavBar.Tabs' },
        right: { type: 'ReactNode', required: false, description: 'Right zone — free-form (buttons, avatar, etc.)' },
        sticky: { type: 'boolean', default: 'true', required: false, description: 'Sticky positioning at top' },
        maxWidth: { type: 'number', default: '1200', required: false, description: 'Inner content max-width (px)' },
        responsive: { type: 'boolean', default: 'true', required: false, description: 'Enable responsive collapse at 1200px' },
        mobileRight: { type: 'ReactNode', required: false, description: 'Alternative right zone for mobile (shown when center+right hide)' },
      },
      subComponents: [
        {
          name: 'NavBar.Brand',
          description: 'Left zone: hamburger menu + logo',
          props: {
            logo: { type: 'ReactNode', required: true, description: 'Logo element (img or SVG)' },
            onMenuClick: { type: '() => void', required: false, description: 'Hamburger click handler (omit to hide hamburger)' },
          },
        },
        {
          name: 'NavBar.Tabs',
          description: 'Center zone: tab navigation container',
          props: {
            value: { type: 'string', required: true, description: 'Active tab value' },
            onChange: { type: '(value: string) => void', required: true, description: 'Tab change handler' },
            children: { type: 'ReactNode', required: true, description: 'NavBar.Tab children' },
          },
        },
        {
          name: 'NavBar.Tab',
          description: 'Individual tab button inside NavBar.Tabs',
          props: {
            value: { type: 'string', required: true, description: 'Tab identifier value' },
            children: { type: 'ReactNode', required: true, description: 'Tab label text' },
          },
        },
      ],
      tokensUsed: {
        colors: ['sc.neutral.surface.negative', 'sc.neutral.border.light'],
        spacing: ['semanticSpacing.xs', 'semanticSpacing.xxxl'],
      },
      accessibility: {
        role: 'navigation',
        ariaAttributes: ['role="navigation"'],
        keyboardInteraction: [],
      },
      whenToUse: [
        'One per page, always at the top',
        '3 zones: left (brand + hamburger), center (tabs), right (avatar/actions)',
        'Active tab uses secondary variant, inactive uses subtle variant',
      ],
      avoidWhen: [
        'Never use multiple NavBars on the same page',
        'NavBar tabs are for top-level navigation only — not in-page content tabs',
      ],
      relatedComponents: ['SideNav', 'Avatar', 'Button'],
      examples: [
        { label: 'Full NavBar', code: `<NavBar\n  left={<NavBar.Brand logo={<Logo />} onMenuClick={openSideNav} />}\n  center={\n    <NavBar.Tabs value={tab} onChange={setTab}>\n      <NavBar.Tab value="home">Home</NavBar.Tab>\n      <NavBar.Tab value="benefits">My Benefits</NavBar.Tab>\n      <NavBar.Tab value="find-care">Find Care</NavBar.Tab>\n    </NavBar.Tabs>\n  }\n  right={\n    <div className="flex items-center gap-s">\n      <Button variant="outline" size="sm" pill>Chat with Zoe</Button>\n      <Avatar size="sm" src="/photo.jpg" />\n    </div>\n  }\n/>` },
      ],
    },

    {
      name: 'SideNav',
      import: "import { SideNav } from 'glow-ds'",
      category: 'navigation',
      description: 'Slide-in navigation drawer from left. Compound component with Profile, Section, NavItem, SubItem, ToolItem, AppDownload, Footer.',
      figmaNodeId: '532-9256',
      variants: [],
      sizes: [],
      props: {
        open: { type: 'boolean', required: true, description: 'Drawer visibility' },
        onClose: { type: '() => void', required: true, description: 'Close handler' },
        closeOnBackdropClick: { type: 'boolean', default: 'true', required: false, description: 'Close on backdrop click' },
        closeOnEscape: { type: 'boolean', default: 'true', required: false, description: 'Close on Escape' },
        children: { type: 'ReactNode', required: true, description: 'SideNav content (compound children)' },
      },
      subComponents: [
        { name: 'SideNav.Profile', description: 'User profile at top', props: { name: { type: 'string', required: true, description: 'User name' }, companyName: { type: 'string', required: false, description: 'Company' }, companyLogo: { type: 'ReactNode', required: false, description: 'Company logo' } } },
        { name: 'SideNav.Section', description: 'Group of nav items', props: { children: { type: 'ReactNode', required: true, description: 'NavItem/ToolItem children' } } },
        { name: 'SideNav.NavItem', description: 'Navigation link (40px height)', props: { label: { type: 'string', required: true, description: 'Item label' }, onClick: { type: '() => void', required: false, description: 'Click handler' }, expandable: { type: 'boolean', required: false, description: 'Show expand arrow' }, expanded: { type: 'boolean', required: false, description: 'Expanded state' }, children: { type: 'ReactNode', required: false, description: 'SubItem children' } } },
        { name: 'SideNav.SubItem', description: 'Nested nav item', props: { label: { type: 'string', required: true, description: 'Sub-item label' }, onClick: { type: '() => void', required: false, description: 'Click handler' } } },
        { name: 'SideNav.ToolItem', description: 'Tool card with 56px thumbnail', props: { thumbnail: { type: 'ReactNode', required: true, description: '56x56 image' }, title: { type: 'string', required: true, description: 'Tool name' }, description: { type: 'string', required: true, description: 'Tool description' }, onClick: { type: '() => void', required: false, description: 'Click handler' } } },
        { name: 'SideNav.AppDownload', description: 'QR code + store links', props: { qrImageUrl: { type: 'string', required: false, description: 'QR code image URL' }, title: { type: 'string', default: '"Download the Healthee app"', required: false, description: 'Section title' } } },
        { name: 'SideNav.Footer', description: 'Footer section', props: { children: { type: 'ReactNode', required: true, description: 'FooterItem children' } } },
        { name: 'SideNav.FooterItem', description: 'Footer link', props: { label: { type: 'string', required: true, description: 'Link label' }, onClick: { type: '() => void', required: false, description: 'Click handler' }, right: { type: 'ReactNode', required: false, description: 'Right-side content' } } },
      ],
      tokensUsed: {
        colors: ['sc.overlay.surface.DEFAULT', 'sc.neutral.surface.negative', 'sc.neutral.surface.extra-subtle'],
        spacing: ['semanticSpacing.xxs', 'semanticSpacing.xs', 'semanticSpacing.s', 'semanticSpacing.m'],
      },
      accessibility: {
        role: null,
        ariaAttributes: [],
        keyboardInteraction: ['Escape to close'],
      },
      whenToUse: [
        'Primary navigation drawer triggered by hamburger in NavBar',
        'Profile at top → sections with nav items → tools → footer',
      ],
      avoidWhen: [
        'Settings panels — use Modal',
        'Filter panels — use inline filter UI',
      ],
      relatedComponents: ['NavBar', 'Modal'],
      examples: [
        { label: 'Basic', code: `<SideNav open={isOpen} onClose={close}>\n  <SideNav.Profile name="Jane Doe" />\n  <SideNav.Section>\n    <SideNav.NavItem label="Home" onClick={...} />\n    <SideNav.NavItem label="My Benefits" onClick={...} />\n  </SideNav.Section>\n  <SideNav.Footer>\n    <SideNav.FooterItem label="Settings" onClick={...} />\n  </SideNav.Footer>\n</SideNav>` },
      ],
    },

    // ─────────────────────────────────────────────────────────
    // UTILITY
    // ─────────────────────────────────────────────────────────
    {
      name: 'Icon',
      import: "import SearchLine from 'glow-ds/icons/line/Search'",
      category: 'utility',
      description: '1,882 icons in 4 styles. Import individually from line/ solid/ specialty/ profile/. Each icon accepts size and color props.',
      figmaNodeId: null,
      variants: [],
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
      props: {
        size: { type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | number", default: "'md'", required: false, description: 'Icon size: xs=14px, sm=16px, md=20px, lg=24px, xl=32px' },
        color: { type: 'string', default: "'currentColor'", required: false, description: 'SVG fill color' },
      },
      tokensUsed: { colors: [], spacing: [] },
      accessibility: { role: null, ariaAttributes: [], keyboardInteraction: [] },
      whenToUse: [
        'Inside Button iconLeft/iconRight, IconButton icon, Chip iconLeft',
        'Standalone decorative or informational icons',
        '4 styles: line (outlined), solid (filled), specialty (multi-color), profile (user avatars)',
      ],
      avoidWhen: [
        'NEVER use inline SVG — always import from the icon library',
        'If the icon does not exist in the library, ask the user before creating',
      ],
      relatedComponents: ['Button', 'IconButton', 'Chip'],
      examples: [
        { label: 'Line icon', code: "import SearchLine from 'glow-ds/icons/line/Search'\n<SearchLine size=\"md\" color=\"#404040\" />" },
        { label: 'In button', code: "<Button iconLeft={<SearchLine size=\"sm\" />}>Search</Button>" },
      ],
    },

    // ─────────────────────────────────────────────────────────
    // ZOE AI
    // ─────────────────────────────────────────────────────────
    {
      name: 'ZoeInput',
      import: "import { ZoeInput } from 'glow-ds'",
      category: 'zoe-ai',
      description: 'Chat input bar with Zoe icon, pill shape, Enter to submit, Shift+Enter for multiline.',
      figmaNodeId: '12742:178974',
      variants: [],
      sizes: [],
      props: {
        value: { type: 'string', required: true, description: 'Input value' },
        onChange: { type: '(value: string) => void', required: true, description: 'Change handler' },
        onSubmit: { type: '(value: string) => void', required: true, description: 'Submit handler (Enter key)' },
        placeholder: { type: 'string', default: "'Ask Zoe anything...'", required: false, description: 'Placeholder text' },
        disabled: { type: 'boolean', default: 'false', required: false, description: 'Disable input' },
        autoFocus: { type: 'boolean', default: 'false', required: false, description: 'Auto-focus on mount' },
        showZoeIcon: { type: 'boolean', default: 'true', required: false, description: 'Show Zoe icon (rotates 180° on focus)' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.subtle', 'sc.neutral.border.DEFAULT', 'sc.primary.surface.DEFAULT'],
        spacing: ['semanticSpacing.xxs'],
      },
      accessibility: {
        role: null,
        ariaAttributes: ['aria-label="Chat with Zoe"', 'aria-disabled'],
        keyboardInteraction: ['Enter to submit', 'Shift+Enter for newline'],
      },
      whenToUse: ['Zoe chat input — always at bottom of chat area, always sticky'],
      avoidWhen: ['General search inputs — use TextInput with rounded shape'],
      relatedComponents: ['ZoeUserBubble', 'ZoeResponseBubble', 'ZoePromptChip'],
      examples: [
        { label: 'Chat input', code: '<ZoeInput value={msg} onChange={setMsg} onSubmit={send} />' },
      ],
    },

    {
      name: 'ZoeThinkingLoader',
      import: "import { ZoeThinkingLoader } from 'glow-ds'",
      category: 'zoe-ai',
      description: 'Animated thinking indicator with spinning Zoe icon and word-by-word text animation. Minimum 2 spin loops (7s).',
      figmaNodeId: '2858:188906',
      variants: [],
      sizes: [],
      props: {
        isThinking: { type: 'boolean', required: true, description: 'Controls thinking animation state' },
        messageSets: { type: 'string[][]', required: false, description: 'Custom message arrays (defaults to built-in set)' },
        delay: { type: 'number', default: '0', required: false, description: 'Animation start delay (ms)' },
        showIcon: { type: 'boolean', default: 'true', required: false, description: 'Show Zoe spinner icon' },
        onExitComplete: { type: '() => void', required: false, description: 'Called when exit animation finishes' },
      },
      tokensUsed: {
        colors: ['sc.neutral.text.light'],
        spacing: [],
      },
      accessibility: { role: null, ariaAttributes: [], keyboardInteraction: [] },
      whenToUse: ['Between user message and Zoe response — shows while AI processes'],
      avoidWhen: ['General loading ��� use a spinner or skeleton'],
      relatedComponents: ['ZoeResponseBubble', 'ZoeStreamingText'],
      examples: [
        { label: 'Thinking', code: '<ZoeThinkingLoader isThinking={isLoading} onExitComplete={showResponse} />' },
      ],
    },

    {
      name: 'ZoeUserBubble',
      import: "import { ZoeUserBubble } from 'glow-ds'",
      category: 'zoe-ai',
      description: 'Right-aligned grey chat bubble for user messages. Fully rounded corners, max-width 450px.',
      figmaNodeId: '741:89831',
      variants: [],
      sizes: [],
      props: {
        text: { type: 'string', required: true, description: 'User message text' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.subtle', 'sc.neutral.text.DEFAULT'],
        spacing: [],
      },
      accessibility: { role: null, ariaAttributes: [], keyboardInteraction: [] },
      whenToUse: ['User messages in Zoe chat conversation'],
      avoidWhen: ['Zoe (AI) responses — use ZoeResponseBubble'],
      relatedComponents: ['ZoeResponseBubble', 'ZoeInput'],
      examples: [
        { label: 'User message', code: '<ZoeUserBubble text="What dermatologists are near me?" />' },
      ],
    },

    {
      name: 'ZoeResponseBubble',
      import: "import { ZoeResponseBubble } from 'glow-ds'",
      category: 'zoe-ai',
      description: 'Zoe AI response container — Zoe icon on top, content below. No background/border. Accepts any children (text, cards, carousels).',
      figmaNodeId: '741:89831',
      variants: [],
      sizes: [],
      props: {
        children: { type: 'ReactNode', required: true, description: 'Response content (text, cards, provider carousels)' },
      },
      tokensUsed: {
        colors: ['sc.neutral.text.DEFAULT'],
        spacing: [],
      },
      accessibility: { role: null, ariaAttributes: [], keyboardInteraction: [] },
      whenToUse: ['All Zoe AI responses — wraps any content type'],
      avoidWhen: ['User messages — use ZoeUserBubble'],
      relatedComponents: ['ZoeUserBubble', 'ZoeStreamingText', 'ZoeBenefitCard', 'ZoeProviderCard'],
      examples: [
        { label: 'Text response', code: '<ZoeResponseBubble>\n  <ZoeStreamingText text="Here are some dermatologists near you..." isStreaming />\n</ZoeResponseBubble>' },
      ],
    },

    {
      name: 'ZoeStreamingText',
      import: "import { ZoeStreamingText } from 'glow-ds'",
      category: 'zoe-ai',
      description: 'Text display with optional streaming cursor animation. Used inside ZoeResponseBubble.',
      figmaNodeId: null,
      variants: [],
      sizes: [],
      props: {
        text: { type: 'string', required: true, description: 'Text to display' },
        isStreaming: { type: 'boolean', default: 'false', required: false, description: 'Show blinking cursor' },
      },
      tokensUsed: {
        colors: ['sc.neutral.text.DEFAULT', 'sc.primary.surface.DEFAULT'],
        spacing: [],
      },
      accessibility: {
        role: null,
        ariaAttributes: ['aria-hidden="true" (on cursor)'],
        keyboardInteraction: [],
      },
      whenToUse: ['Text content inside ZoeResponseBubble during/after streaming'],
      avoidWhen: ['Static text — just use a <p> element'],
      relatedComponents: ['ZoeResponseBubble'],
      examples: [
        { label: 'Streaming', code: '<ZoeStreamingText text="Looking up your benefits..." isStreaming />' },
      ],
    },

    {
      name: 'ZoeBenefitCard',
      import: "import { ZoeBenefitCard } from 'glow-ds'",
      category: 'zoe-ai',
      description: 'Horizontal benefit card with 88x88px thumbnail, title, subtitle, metadata. Clicking opens ZoeDrawer. Max 4 inline.',
      figmaNodeId: '11584:134644',
      variants: [],
      sizes: [],
      props: {
        title: { type: 'string', required: true, description: 'Benefit title' },
        subtitle: { type: 'string', required: false, description: 'Short subtitle (single line)' },
        imageSrc: { type: 'string', required: false, description: 'Thumbnail image URL (88x88)' },
        imageAlt: { type: 'string', required: false, description: 'Image alt text' },
        iconElement: { type: 'ReactNode', required: false, description: 'Icon instead of image' },
        iconBgColor: { type: 'string', required: false, description: 'Icon background color' },
        metaIcon: { type: 'ReactNode', required: false, description: 'Metadata icon (20px)' },
        metaText: { type: 'string', required: false, description: 'Metadata text' },
        isActive: { type: 'boolean', default: 'false', required: false, description: 'Drawer is open for this card' },
        onClick: { type: '() => void', required: false, description: 'Click handler (opens drawer)' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.negative', 'sc.neutral.border.light', 'sc.neutral.text.DEFAULT', 'sc.neutral.text.dark'],
        spacing: ['semanticSpacing.xs', 'semanticSpacing.s'],
      },
      accessibility: {
        role: 'button',
        ariaAttributes: ['aria-pressed'],
        keyboardInteraction: ['Enter', 'Space'],
      },
      whenToUse: ['Zoe benefit answers — up to 4 cards in horizontal scroll'],
      avoidWhen: ['Non-benefit content — use Card instead'],
      relatedComponents: ['ZoeDrawer', 'ZoeResponseBubble', 'ScrollArea'],
      examples: [
        { label: 'Benefit', code: '<ZoeBenefitCard title="Physical Therapy" subtitle="20 visits/year" imageSrc="/pt.jpg" onClick={openDrawer} />' },
      ],
    },

    {
      name: 'ZoePromptChip',
      import: "import { ZoePromptChip } from 'glow-ds'",
      category: 'zoe-ai',
      description: 'Frosted glass suggestion chip. Clicking sends the text as a user message. Show 2-4 after last Zoe response.',
      figmaNodeId: '12742:31877',
      variants: [],
      sizes: [],
      props: {
        text: { type: 'string', required: true, description: 'Prompt text (also sent as message)' },
        emoji: { type: 'string', required: false, description: 'Emoji before text' },
        onClick: { type: '() => void', required: false, description: 'Click handler' },
      },
      tokensUsed: {
        colors: ['sc.neutral.text.DEFAULT'],
        spacing: [],
      },
      accessibility: { role: null, ariaAttributes: [], keyboardInteraction: [] },
      whenToUse: [
        'Quick-reply suggestions after Zoe response',
        'Show 2-4 chips, disappear when any new message is sent',
      ],
      avoidWhen: [
        'General filtering — use Chip component',
        'NOT a DS Chip — this is a custom frosted glass component',
      ],
      relatedComponents: ['ZoeInput', 'ZoeResponseBubble'],
      examples: [
        { label: 'Prompt', code: '<ZoePromptChip emoji="🦷" text="What dental benefits do I have?" onClick={send} />' },
      ],
    },

    {
      name: 'ZoeChatHeader',
      import: "import { ZoeChatHeader } from 'glow-ds'",
      category: 'zoe-ai',
      description: 'Chat header with Zoe branding and close button.',
      figmaNodeId: '497:28402',
      variants: [],
      sizes: [],
      props: {
        onClose: { type: '() => void', required: true, description: 'Close button handler' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.negative'],
        spacing: ['semanticSpacing.s', 'semanticSpacing.m'],
      },
      accessibility: {
        role: null,
        ariaAttributes: ['aria-label="Close Zoe chat"'],
        keyboardInteraction: [],
      },
      whenToUse: ['Top of Zoe chat panel/drawer'],
      avoidWhen: ['Non-Zoe headers — use a custom header or Modal'],
      relatedComponents: ['ZoeDrawer', 'ZoeInput'],
      examples: [
        { label: 'Header', code: '<ZoeChatHeader onClose={closeChat} />' },
      ],
    },

    {
      name: 'ZoeDrawer',
      import: "import { ZoeDrawer } from 'glow-ds'",
      category: 'zoe-ai',
      description: 'Side panel (480px desktop, full-width mobile) for benefit details. Header with title/subtitle, scrollable body, sticky footer.',
      figmaNodeId: '11584:134644',
      variants: [],
      sizes: [],
      props: {
        open: { type: 'boolean', required: true, description: 'Drawer visibility' },
        onClose: { type: '() => void', required: true, description: 'Close handler' },
        title: { type: 'string', required: true, description: 'Header title' },
        subtitle: { type: 'string', required: false, description: 'Title subtitle' },
        footer: { type: 'ReactNode', required: false, description: 'Sticky footer content' },
        children: { type: 'ReactNode', required: true, description: 'Scrollable body content' },
      },
      tokensUsed: {
        colors: ['sc.neutral.surface.negative', 'sc.neutral.border.light', 'sc.neutral.text.DEFAULT'],
        spacing: ['semanticSpacing.m'],
      },
      accessibility: {
        role: 'dialog',
        ariaAttributes: ['aria-label'],
        keyboardInteraction: ['Escape to close'],
      },
      whenToUse: ['Benefit detail panels opened from ZoeBenefitCard'],
      avoidWhen: ['General side panels — use SideNav or Modal'],
      relatedComponents: ['ZoeBenefitCard', 'Modal', 'SideNav'],
      examples: [
        { label: 'Benefit drawer', code: '<ZoeDrawer open={isOpen} onClose={close} title="Physical Therapy" subtitle="In-Network">\n  <p>Coverage details...</p>\n</ZoeDrawer>' },
      ],
    },

    {
      name: 'ZoeProviderCard',
      import: "import { ZoeProviderCard } from 'glow-ds'",
      category: 'zoe-ai',
      description: 'ProviderCard wrapper for Zoe chat context. Extends all ProviderCard props with isActive highlight.',
      figmaNodeId: null,
      variants: [],
      sizes: [],
      props: {
        isActive: { type: 'boolean', default: 'false', required: false, description: 'Persistent highlight border' },
      },
      tokensUsed: {
        colors: [],
        spacing: [],
      },
      accessibility: { role: null, ariaAttributes: [], keyboardInteraction: [] },
      whenToUse: ['Provider cards inside Zoe chat responses — in horizontal carousel'],
      avoidWhen: ['Outside Zoe context — use ProviderCard directly'],
      relatedComponents: ['ProviderCard', 'ZoeResponseBubble', 'ScrollArea'],
      examples: [
        { label: 'In chat', code: '<ZoeProviderCard name="Dr. Chen" specialty="Dermatology" isActive={selectedId === id} />' },
      ],
    },
  ],
}
