// ============================================================
// GLOW DS — Typography Usage Rules
// Source: Healthee design guidelines — font family & sizing patterns
//
// These rules define WHEN to use each typography category.
// AI agents generating screens MUST follow these rules
// to maintain visual consistency with the Healthee product.
// ============================================================

export const typographyUsageRules = {

  // ── Font Family Rules ────────────────────────────────────
  // The DS has TWO font families with distinct roles.
  // Mixing them up is the #1 typography mistake an agent can make.

  fontFamilyRules: {
    display: {
      font: 'Tiempos Headline',
      type: 'serif — decorative / brand',
      allowedFor: ['page main title', 'hero headline', 'large price', 'card featured price'],
      neverFor: ['paragraph', 'body text', 'button text', 'label', 'form input', 'navigation', 'link text', 'placeholder', 'tooltip', 'tag', 'badge'],
      note: 'Tiempos is the brand/decorative serif font. Use sparingly for maximum impact. It exists to create contrast with the UI font.',
    },
    heading: {
      font: 'Founders Grotesk',
      type: 'sans-serif — functional / structural',
      allowedFor: ['section heading', 'card title', 'modal title', 'sidebar heading', 'dialog title', 'page sub-heading'],
      note: 'Founders Grotesk is the functional sans-serif. All structural headings use this font.',
    },
    label: {
      font: 'Founders Grotesk Medium (500)',
      type: 'sans-serif — interactive / UI emphasis',
      allowedFor: ['button text', 'form label', 'navigation item', 'tab', 'tag', 'badge', 'chip'],
      note: 'Medium weight provides emphasis for interactive UI elements. Button text is ALWAYS a Label token.',
    },
    paragraph: {
      font: 'Founders Grotesk Regular (400)',
      type: 'sans-serif — readable body content',
      allowedFor: ['body text', 'description', 'helper text', 'long-form content', 'card description'],
      note: 'Regular weight for comfortable reading in body content.',
    },
    textLink: {
      font: 'Founders Grotesk Medium (500) + underline',
      type: 'sans-serif — interactive inline link',
      allowedFor: ['inline link', 'anchor text', 'navigation link in body text'],
      note: 'Always underlined to visually distinguish from regular text.',
    },
  },

  // ── Core Rules ───────────────────────────────────────────

  rules: [
    {
      id: 'display-is-tiempos-only',
      rule: 'Display tokens (Tiempos Headline) are ONLY for: page main title, hero headline, large prices',
      detail: 'Tiempos Headline is a decorative serif font. It creates visual impact through contrast with the UI font (Founders Grotesk). NEVER use it for body text, buttons, labels, form inputs, navigation, or any functional UI text. If you need a heading but it is not the page main title or a price — use a Heading token instead.',
      examples: {
        correct: ['Hero headline on landing page', 'Price "$150/month" on pricing card', 'Main page title "Find a Doctor"'],
        incorrect: ['Tiempos for a paragraph', 'Tiempos for button text', 'Tiempos for a form label', 'Tiempos for a navigation item', 'Tiempos for a card title that is not a price'],
      },
    },
    {
      id: 'one-display-heading-per-page',
      rule: 'Maximum ONE Display (Tiempos) main heading per page, section headings use Heading (Founders Grotesk)',
      detail: 'A page typically has one primary Display heading at the top (the page title), and multiple Heading elements for sections within the page. This creates a clear visual hierarchy: Display (brand impact) → Heading (structural) → Label/Paragraph (content). Exception: prices on cards may also use Display since they serve a different role than headings.',
      examples: {
        correct: [
          'Display "Find a Doctor" as page title + Heading "Popular Specialties" as section title',
          'Display page title + Display price on a card (price is not a heading)',
        ],
        incorrect: [
          'Two Display headings competing for attention on the same page',
          'Heading token for the page main title when Display would be appropriate',
        ],
      },
    },
    {
      id: 'heading-for-structural-titles',
      rule: 'Use Heading (Founders Grotesk) for all structural/section titles within a page',
      detail: 'Section headings, card titles, modal titles, dialog titles, sidebar headings — all use the Heading category. These are functional, not decorative. Headings XXL→S use weight 400 (regular), XS→XXXS use weight 500 (medium) for smaller sizes that need extra definition.',
      examples: {
        correct: ['heading-m for section title "Your Benefits"', 'heading-xxs for card title "Dr. Smith"', 'heading-s for modal title "Filter Results"'],
        incorrect: ['Display for a card title', 'Label for a section heading', 'Paragraph for a modal title'],
      },
    },
    {
      id: 'label-for-interactive-elements',
      rule: 'Use Label (Founders Grotesk Medium 500) for buttons, form labels, navigation, tags',
      detail: 'Label tokens have medium weight (500) which provides emphasis for interactive UI elements. Button text is ALWAYS a Label token — never Heading or Display. The size maps to button size: lg→label-l, md→label-m, sm→label-s, xs→label-xs.',
      examples: {
        correct: ['label-m for button text', 'label-s for form label', 'label-xs for tag text', 'label-m for navigation tab'],
        incorrect: ['heading-xxxs for button text', 'display-xxxxs for a tag', 'paragraph-s for a form label'],
      },
    },
    {
      id: 'paragraph-for-body-text',
      rule: 'Use Paragraph (Founders Grotesk Regular 400) for body text, descriptions, and helper text',
      detail: 'Paragraph tokens have regular weight (400) for comfortable reading. All body text, descriptions, helper text, and long-form content use Paragraph. Never use Label weight (500) for body content — it is too heavy and reduces readability.',
      examples: {
        correct: ['paragraph-m for card description', 'paragraph-s for helper text under form field', 'paragraph-l for article body'],
        incorrect: ['label-m for a description (too heavy for reading)', 'heading-xxxs for body text (wrong category)'],
      },
    },
    {
      id: 'size-by-context',
      rule: 'Choose size by context: hero/landing → large, page → medium, card/component → small',
      detail: 'Within each category, pick size based on the UI context. The agent has flexibility — no strict mapping required, but follow the general principle: bigger context = bigger size. See contextDefaults for recommended ranges.',
      examples: {
        correct: ['display-l for hero landing page', 'display-xxxs for card price', 'heading-m for page section', 'heading-xxs for card title', 'paragraph-m for main body, paragraph-s for card description'],
        incorrect: ['display-l for a card price (way too big)', 'heading-xxl for a card title (too big for card context)', 'paragraph-xl for helper text (too big)'],
      },
    },
  ],

  // ── Context-Based Defaults ─────────────────────────────
  // Recommended token for each UI context.
  // The agent may pick any size within the sizeRange.
  // First item in sizeRange is the default recommendation.

  contextDefaults: {
    // Display (Tiempos Headline) — brand / decorative
    'hero-headline':        { category: 'display',  sizeRange: ['display-l', 'display-m'] },
    'landing-page-title':   { category: 'display',  sizeRange: ['display-m', 'display-s'] },
    'page-main-title':      { category: 'display',  sizeRange: ['display-s', 'display-xs', 'display-xxs'] },
    'card-price-large':     { category: 'display',  sizeRange: ['display-xxs', 'display-xxxs'] },
    'card-price-small':     { category: 'display',  sizeRange: ['display-xxxs', 'display-xxxxs'] },

    // Heading (Founders Grotesk) — structural
    'section-heading':      { category: 'heading',  sizeRange: ['heading-l', 'heading-m', 'heading-s'] },
    'card-title':           { category: 'heading',  sizeRange: ['heading-xxs', 'heading-xxxs'] },
    'modal-title':          { category: 'heading',  sizeRange: ['heading-s', 'heading-xs'] },
    'sidebar-heading':      { category: 'heading',  sizeRange: ['heading-xs', 'heading-xxs'] },
    'dialog-title':         { category: 'heading',  sizeRange: ['heading-s', 'heading-xs'] },

    // Label (Founders Grotesk Medium) — interactive UI
    'button-text-lg':       { category: 'label',    sizeRange: ['label-l'] },
    'button-text-md':       { category: 'label',    sizeRange: ['label-m'] },
    'button-text-sm':       { category: 'label',    sizeRange: ['label-s'] },
    'button-text-xs':       { category: 'label',    sizeRange: ['label-xs'] },
    'form-label':           { category: 'label',    sizeRange: ['label-s', 'label-xs'] },
    'nav-item':             { category: 'label',    sizeRange: ['label-m', 'label-s'] },
    'tab-label':            { category: 'label',    sizeRange: ['label-m', 'label-s'] },
    'tag-text':             { category: 'label',    sizeRange: ['label-xs'] },
    'badge-text':           { category: 'label',    sizeRange: ['label-xs'] },
    'chip-text':            { category: 'label',    sizeRange: ['label-s', 'label-xs'] },

    // Paragraph (Founders Grotesk Regular) — body content
    'body-text':            { category: 'paragraph', sizeRange: ['paragraph-m', 'paragraph-l'] },
    'card-description':     { category: 'paragraph', sizeRange: ['paragraph-s', 'paragraph-m'] },
    'helper-text':          { category: 'paragraph', sizeRange: ['paragraph-xs', 'paragraph-s'] },
    'long-form-content':    { category: 'paragraph', sizeRange: ['paragraph-l', 'paragraph-xl'] },
    'caption':              { category: 'paragraph', sizeRange: ['paragraph-xs'] },

    // Text Link (Founders Grotesk Medium + underline)
    'inline-link':          { category: 'textLink', sizeRange: ['text-link-m', 'text-link-s'] },
    'body-link':            { category: 'textLink', sizeRange: ['text-link-m'] },
    'small-link':           { category: 'textLink', sizeRange: ['text-link-s'] },
  },

} as const

export type TypographyRule = typeof typographyUsageRules.rules[number]
export type TypographyContext = keyof typeof typographyUsageRules.contextDefaults
export type FontFamilyCategory = keyof typeof typographyUsageRules.fontFamilyRules
