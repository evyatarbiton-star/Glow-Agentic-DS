// ============================================================
// GLOW DS — Selection Controls Usage Rules
// Source: Healthee design guidelines — Checkbox, Radio Button & Toggle
//
// These rules define WHEN to use Checkbox vs Radio Button vs Toggle.
// AI agents generating screens MUST follow these rules
// to pick the correct selection control for each context.
// ============================================================

export const selectionControlsUsageRules = {

  // ── When to Use ──────────────────────────────────────────
  whenToUse: {
    checkbox:    'Multi-select — user can select zero, one, or many options from a list',
    radioButton: 'Single-select — user must pick exactly one option from a group of 2+',
    toggle:      'Instant binary switch — effect applies immediately without a submit button',
  },

  // ── Core Rules ───────────────────────────────────────────

  rules: [
    {
      id: 'checkbox-for-multi-select',
      rule: 'Use Checkbox when the user can select multiple options independently',
      detail: 'Each checkbox operates independently. Selecting one does not deselect others. Use for filters, preferences, feature toggles, and "agree to terms" patterns.',
      examples: {
        correct: [
          'Filter: Medical, Dental, Vision (can select all three)',
          'Preferences: Email notifications, SMS notifications',
          '"I agree to the Terms of Service" single checkbox',
        ],
        incorrect: [
          'Gender selection (only one answer) using checkboxes',
          'Payment method selection using checkboxes',
        ],
      },
    },
    {
      id: 'radio-for-single-select',
      rule: 'Use Radio Button when exactly one option must be selected from a group',
      detail: 'Radio buttons in the same name group are mutually exclusive. Selecting one deselects the previous. Always provide a default selection so the user never faces an empty group.',
      examples: {
        correct: [
          'Plan type: Basic / Premium / Enterprise',
          'Appointment type: In-person / Virtual',
          'Sort order: Distance / Rating / Availability',
        ],
        incorrect: [
          'Single radio button alone (use checkbox instead)',
          'More than 5 radio options (consider a dropdown)',
        ],
      },
    },
    {
      id: 'radio-needs-group',
      rule: 'Never use a single Radio Button in isolation — it must be part of a group of 2+',
      detail: 'A lone radio button has no purpose since the user cannot deselect it. For a standalone toggle (yes/no, on/off), use a Checkbox instead.',
      examples: {
        correct: ['Group of 3 radio buttons for plan selection'],
        incorrect: ['Single radio button for "Enable notifications"'],
      },
    },
    {
      id: 'always-have-label',
      rule: 'Every Checkbox and Radio Button MUST have a visible text label',
      detail: 'The label prop is technically optional for edge cases, but in practice every selection control must have a visible label for accessibility and clarity. The label describes what selecting/deselecting does.',
      examples: {
        correct: ['Checkbox with label "Email notifications"', 'Radio with label "In-person visit"'],
        incorrect: ['Checkbox with no label (just a box)', 'Label that says "Option 1" (not descriptive)'],
      },
    },
    {
      id: 'label-position-right',
      rule: 'Labels are always placed to the right of the control',
      detail: 'The checkbox or radio circle appears on the left, with the text label immediately to the right. This is the standard Western reading pattern and matches the Figma spec.',
      examples: {
        correct: ['[✓] Email notifications (control left, label right)'],
        incorrect: ['Email notifications [✓] (label left, control right)'],
      },
    },
    {
      id: 'radio-default-selection',
      rule: 'Radio button groups should have a default selection',
      detail: 'Unlike checkboxes, a radio group should always have one option pre-selected so the user never submits an empty value. The most common or recommended option should be the default.',
      examples: {
        correct: ['Plan selection with "Basic" pre-selected', 'Sort by "Relevance" pre-selected'],
        incorrect: ['Radio group with nothing selected on load'],
      },
    },
    {
      id: 'checkbox-no-default-required',
      rule: 'Checkboxes should start unchecked unless restoring user preferences',
      detail: 'Do not pre-check checkboxes to trick users into opting in. Pre-check only when restoring previously saved preferences or when the checked state is genuinely the expected default.',
      examples: {
        correct: ['Unchecked "Subscribe to newsletter" on signup', 'Pre-checked "Email notifications" when user previously enabled it'],
        incorrect: ['Pre-checked "Share my data with partners" on signup form'],
      },
    },
    {
      id: 'max-radio-options',
      rule: 'Radio groups with more than 5 options should become a Select/Dropdown instead',
      detail: 'Long lists of radio buttons consume too much vertical space and overwhelm the user. If there are more than 5 mutually exclusive options, use a dropdown select instead.',
      examples: {
        correct: ['3 radio buttons for appointment type', '5 radio buttons for rating'],
        incorrect: ['12 radio buttons for state/country selection'],
      },
    },
    {
      id: 'group-with-fieldset',
      rule: 'Groups of related checkboxes or radios should be wrapped in a fieldset with a legend',
      detail: 'For accessibility, group related controls with a <fieldset> and provide a <legend> that describes the group. This is critical for screen readers to understand the relationship between controls.',
      examples: {
        correct: ['<fieldset><legend>Notification preferences</legend>…checkboxes…</fieldset>'],
        incorrect: ['Loose checkboxes with only a visual heading above them'],
      },
    },
    {
      id: 'indeterminate-for-parent',
      rule: 'Use the indeterminate state on a parent Checkbox that controls a group of child checkboxes',
      detail: 'When a "Select all" checkbox has some but not all children checked, show it in the indeterminate state (dash icon). Clicking it should check all children. This is a Checkbox-only feature; Radio buttons never have an indeterminate state.',
      examples: {
        correct: ['Select all checkbox shows dash when 2 of 5 items are checked'],
        incorrect: ['Indeterminate state on a standalone checkbox with no children'],
      },
    },

    // ── Toggle-specific Rules ───────────────────────────────

    {
      id: 'toggle-for-instant-effect',
      rule: 'Use Toggle when the action takes effect immediately — no submit button needed',
      detail: 'Toggles represent an instant on/off switch. Flipping the toggle applies the change immediately (e.g., enable dark mode, turn on notifications). If the change requires a "Save" or "Submit" button, use a Checkbox instead.',
      examples: {
        correct: [
          'Dark mode toggle — applies immediately',
          'Push notifications toggle — enables instantly',
          'Auto-play toggle in settings',
        ],
        incorrect: [
          'Toggle inside a form that has a Submit button (use Checkbox)',
          'Toggle for "I agree to terms" (use Checkbox)',
        ],
      },
    },
    {
      id: 'toggle-vs-checkbox',
      rule: 'Toggle = instant effect, Checkbox = deferred effect (submit required)',
      detail: 'This is the fundamental distinction. If the user flips a control and the system responds immediately, use Toggle. If the user checks options and then submits a form, use Checkbox. Never mix them — all controls in a form should be the same type.',
      examples: {
        correct: [
          'Settings page: each toggle applies immediately',
          'Form with checkboxes + submit button',
        ],
        incorrect: [
          'Toggle inside a form with a Save button',
          'Checkbox for a setting that applies immediately',
        ],
      },
    },
    {
      id: 'toggle-label-describes-on',
      rule: 'Toggle label should describe what happens when the toggle is ON',
      detail: 'The label text describes the enabled state. When the toggle is off, the user understands the feature is disabled. Avoid negative labels like "Disable notifications" — use "Notifications" or "Enable notifications" instead.',
      examples: {
        correct: [
          '"Push notifications" — ON means notifications are enabled',
          '"Dark mode" — ON means dark mode is active',
        ],
        incorrect: [
          '"Disable notifications" — confusing double-negative when OFF',
          '"Do not show again" — negative framing',
        ],
      },
    },
  ],

  // ── Context-Based Defaults ─────────────────────────────
  // Recommended control type for each UI context.
  // The agent MUST pick the correct control based on the context.

  contextDefaults: {
    'filter-multi':         { control: 'checkbox',    note: 'Filters allow multiple selections' },
    'preferences-toggle':   { control: 'checkbox',    note: 'Each preference is independent on/off' },
    'terms-agreement':      { control: 'checkbox',    note: 'Single "I agree" checkbox' },
    'select-all':           { control: 'checkbox',    note: 'Parent checkbox with indeterminate support' },
    'boolean-toggle':       { control: 'checkbox',    note: 'Yes/no, on/off single option' },
    'plan-selection':       { control: 'radioButton', note: 'Choose exactly one plan' },
    'appointment-type':     { control: 'radioButton', note: 'In-person vs virtual (one choice)' },
    'sort-order':           { control: 'radioButton', note: 'Single sort criteria' },
    'payment-method':       { control: 'radioButton', note: 'One payment method at a time' },
    'instant-setting':      { control: 'toggle',      note: 'Dark mode, notifications — applies immediately' },
    'feature-flag':         { control: 'toggle',      note: 'Enable/disable beta features instantly' },
    'auto-play':            { control: 'toggle',      note: 'Media auto-play setting — instant effect' },
  },

} as const

export type SelectionControlRule = typeof selectionControlsUsageRules.rules[number]
export type SelectionControlContext = keyof typeof selectionControlsUsageRules.contextDefaults
