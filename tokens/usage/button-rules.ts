// ============================================================
// GLOW DS — Button Usage Rules
// Source: Healthee product analysis — real-world button patterns
//
// These rules define WHEN to use each button variant.
// AI agents generating screens MUST follow these rules
// to maintain visual consistency with the Healthee product.
// ============================================================

export const buttonUsageRules = {

  // ── Hierarchy ──────────────────────────────────────────────
  // Buttons follow a strict visual hierarchy on every screen.
  // From most prominent to least:
  //   primary → secondary → outline → subtle → ghost
  //
  // Destructive is a special case — only for delete/irreversible.

  hierarchy: {
    primary:     'Highest emphasis — the single most important action on the screen',
    secondary:   'High emphasis — strong supporting actions or repeated card CTAs',
    outline:     'Medium emphasis — secondary actions, filters, toggles, cancel',
    subtle:      'Low emphasis — quiet secondary actions in dense layouts',
    ghost:       'Minimal emphasis — navigation links, icon-only favorites, "Show all"',
    destructive: 'Special — only for delete/irreversible actions inside confirmation dialogs',
  },

  // ── Core Rules ─────────────────────────────────────────────

  rules: [
    {
      id: 'one-primary-per-screen',
      rule: 'Maximum ONE primary (orange) button per screen',
      detail: 'Primary is reserved for the single most important action: search, submit, confirm. Not every screen needs a primary button.',
      examples: {
        correct: ['Search icon button in header', 'Show results in modal', 'Submit form'],
        incorrect: ['Two orange buttons on the same page', 'Primary button on a settings/profile page'],
      },
    },
    {
      id: 'no-primary-next-to-secondary',
      rule: 'Never place primary (orange) and secondary (black) buttons side by side',
      detail: 'Adjacent buttons should be: primary + outline, OR secondary + outline. Two filled buttons next to each other compete for attention.',
      examples: {
        correct: ['Primary "Submit" + Outline "Cancel"', 'Secondary "Book" + Outline phone icon'],
        incorrect: ['Primary "Save" next to Secondary "Continue"'],
      },
    },
    {
      id: 'secondary-for-card-ctas',
      rule: 'Use secondary (black) for repeated CTAs on cards in a list or grid',
      detail: 'When the same action appears on multiple cards (Book, Connect, Speak to doctor), always use secondary — never primary.',
      examples: {
        correct: ['"Book" button on each provider card', '"Speak to a doctor" on telehealth card'],
        incorrect: ['Orange "Book" button on each card — too much visual noise'],
      },
    },
    {
      id: 'outline-for-secondary-actions',
      rule: 'Use outline for secondary actions, filters, toggles, and cancel buttons',
      detail: 'Outline is the workhorse for everything that is not the primary CTA: cancel, reset, edit, filter chips, toggles, "Free Telehealth" links.',
      examples: {
        correct: ['"Cancel" in modal', '"Edit" on profile', 'Filter chips (Medical/Dental/Vision)', '"Reset" button', 'In-network / Out-of-network toggle'],
        incorrect: ['Using primary for a filter chip', 'Using secondary for a cancel button'],
      },
    },
    {
      id: 'ghost-for-navigation',
      rule: 'Use ghost for minimal navigation and quiet actions',
      detail: 'Ghost buttons are for actions that should not draw attention: "Show all →", favorite hearts, sidebar navigation items, text links within content.',
      examples: {
        correct: ['"Show all →" link', 'Heart/favorite icon button', 'Sort dropdown trigger'],
        incorrect: ['Ghost for a form submit button — too subtle for a primary action'],
      },
    },
    {
      id: 'info-pages-no-primary',
      rule: 'Information/settings pages typically have no primary button',
      detail: 'Profile pages, account settings, expense views — these use outline and ghost buttons only. A secondary (black) may appear for an informational CTA like "How coverage works".',
      examples: {
        correct: ['Profile page with outline "Edit" buttons', 'Expenses page with secondary "How coverage works"'],
        incorrect: ['Orange primary button on a static profile page'],
      },
    },
    {
      id: 'modal-button-pattern',
      rule: 'In modals: primary for confirm action, outline for cancel/reset',
      detail: 'The button that closes the modal with a positive action (Show results, Submit, Confirm) is primary. The dismiss/reset button is outline. Place the primary button on the right.',
      examples: {
        correct: ['Outline "Reset" + Primary "Show 839 results"'],
        incorrect: ['Two primary buttons in a modal', 'Ghost button for the main modal action'],
      },
    },
    {
      id: 'destructive-only-in-confirmation',
      rule: 'Destructive (red) is ONLY used inside confirmation dialogs for irreversible actions',
      detail: 'Never use destructive for the initial delete trigger — use outline or ghost for that. Destructive appears only in the confirmation step: "Are you sure? [Cancel] [Delete]".',
      examples: {
        correct: ['"Delete Account" in a confirmation modal', '"Remove" in a destructive confirmation dialog'],
        incorrect: ['Red delete button directly on a list item', 'Destructive button as a page-level CTA'],
      },
    },
    {
      id: 'icon-only-hierarchy',
      rule: 'Icon-only buttons follow the same variant hierarchy',
      detail: 'Search = primary icon-only pill, Phone = outline icon-only, Heart/favorite = ghost icon-only, Edit pen = ghost icon-only.',
      examples: {
        correct: ['Orange search icon (primary, pill)', 'Phone icon with border (outline)', 'Heart icon without background (ghost)'],
        incorrect: ['Primary orange phone icon — too prominent for a secondary action'],
      },
    },
    {
      id: 'pill-for-standalone-ctas',
      rule: 'Pill shape is used for standalone round CTAs, typically icon-only',
      detail: 'The search button is the most common pill button (primary, icon-only, pill). Pill is also used for toggle groups (In-network / Out-of-network).',
      examples: {
        correct: ['Search icon button (primary, pill)', 'Toggle pills (outline, pill)'],
        incorrect: ['Pill shape for a standard form submit button'],
      },
    },
    {
      id: 'size-defaults',
      rule: 'Default button size is md (48px). Use lg (56px) only for hero/marketing CTAs — never in standard product flows.',
      detail: 'Size guide: xs (36px) for tight spaces like table rows. sm (40px) for card actions and compact forms. md (48px) for standard forms, modals, page CTAs. lg (56px) for marketing landing pages and hero sections ONLY — not for product screens.',
      examples: {
        correct: ['md "Submit" in a form', 'sm "Book" on a provider card', 'md "Show results" in modal'],
        incorrect: ['lg orange "Find a provider" in a product page — looks like a marketing banner'],
      },
    },
    {
      id: 'arrow-icon-in-buttons',
      rule: 'For arrow icons inside buttons, use ArrowBigRight (line) — not ArrowRightCrFr (circle frame)',
      detail: 'ArrowBigRight is clean and minimal. ArrowRightCrFr adds a circle frame that creates visual noise inside a button that already has its own shape. Import: `import ArrowBigRightLine from "@/components/Icon/icons/line/ArrowBigRight"`.',
      examples: {
        correct: ['<Button iconRight={<ArrowBigRightLine />}>Find a provider</Button>'],
        incorrect: ['<Button iconRight={<ArrowRightCrFrLine />}>Find a provider</Button> — circle frame inside button is redundant'],
      },
    },
  ],

  // ── Pairing Matrix ─────────────────────────────────────────
  // Which variants can appear next to each other

  validPairings: {
    'primary + outline':     true,   // ✅ Most common: submit + cancel
    'primary + ghost':       true,   // ✅ Submit + skip link
    'secondary + outline':   true,   // ✅ Book + phone icon
    'secondary + ghost':     true,   // ✅ CTA + favorite heart
    'outline + outline':     true,   // ✅ Filter chips, toggle groups
    'outline + ghost':       true,   // ✅ Edit button + navigation
    'ghost + ghost':         true,   // ✅ Multiple nav links
    'primary + secondary':   false,  // ❌ NEVER — two filled buttons compete
    'primary + destructive': false,  // ❌ NEVER — two high-emphasis colors
    'primary + primary':     false,  // ❌ NEVER — one primary per screen
  },

  // ── Context-Based Defaults ─────────────────────────────────
  // What variant to use in specific UI contexts

  contextDefaults: {
    'page-main-cta':         'primary',      // The single most important action
    'modal-confirm':         'primary',      // Confirm/submit in modal
    'modal-cancel':          'outline',      // Cancel/reset in modal
    'card-cta':              'secondary',    // CTA on repeating cards
    'card-secondary-action': 'outline',      // Secondary action on card (e.g., phone)
    'filter-chip':           'outline',      // Filter/category chips
    'toggle-group':          'outline',      // Toggle buttons (pill shape)
    'navigation-link':       'ghost',        // "Show all", sidebar items
    'favorite-action':       'ghost',        // Heart/bookmark icon
    'edit-action':           'outline',      // Edit button with icon
    'add-action':            'outline',      // "+ Add item" button
    'delete-trigger':        'outline',      // Initial delete button (not confirmation)
    'delete-confirm':        'destructive',  // Confirmation dialog delete button
    'info-cta':              'secondary',    // "How coverage works" style CTAs
    'search-button':         'primary',      // Search icon button (pill, icon-only)
    'phone-icon':            'outline',      // Phone call icon button
    'page-cta':              'primary',      // Page-level CTA — use md size, NOT lg
  },

} as const

export type ButtonRule = typeof buttonUsageRules.rules[number]
export type ButtonContext = keyof typeof buttonUsageRules.contextDefaults
