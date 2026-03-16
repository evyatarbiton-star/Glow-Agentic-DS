// ============================================================
// GLOW DS — Modal Usage Rules
// Source: Figma Web DS — node-id=2370-44085 (desktop), 2370-43655 (mobile)
//
// These rules define WHEN and HOW to use Modal.
// AI agents generating screens MUST follow these rules.
// ============================================================

export const modalUsageRules = {

  // ── When to Use Modal ─────────────────────────────────────
  // Modal = focused task that interrupts the main flow.
  // The user MUST complete or dismiss the modal before continuing.
  //
  // Do NOT use Modal for:
  // - Simple confirmations → use native confirm() or inline UI
  // - Non-blocking info → use Tooltip or inline expansion
  // - Navigation → use page routing

  sizes: {
    sm: '480px — simple confirmations, short forms (1–3 fields), alerts',
    md: '600px — default. Standard forms, content review, settings panels',
    lg: '708px — complex forms, multi-step wizards, content with tables or lists',
  },

  // ── Footer Rules (CRITICAL) ───────────────────────────────
  // Footer buttons are ALWAYS right-aligned. This is a strict rule.

  footerPatterns: {
    noFooter:        'Informational modals with no actions needed. Just set no footer props.',
    singleButton:    'Use footerActions with one Button. Example: "Done", "Close", "Got it".',
    twoButtons:      'Primary + secondary. Use footerActions={<><Button variant="outline">Cancel</Button><Button>Confirm</Button></>}. Primary action on the right.',
    leftAndRight:    'Use footerLeft for checkbox/text + footerActions for buttons. Example: "Don\'t show again" checkbox on left, "OK" button on right.',
    customFooter:    'Use footer prop for fully custom content. Avoid unless the standard patterns don\'t work.',
  },

  rules: [
    {
      id: 'footer-right-aligned',
      rule: 'Footer buttons are ALWAYS right-aligned — never centered or left-aligned',
      detail: 'Use footerActions prop for right-aligned buttons. Use footerLeft for left-side content. Never use the footer prop with centered buttons.',
      examples: {
        correct: ['footerActions={<Button>Confirm</Button>}'],
        incorrect: ['footer={<div style={{justifyContent: "center"}}><Button>OK</Button></div>}'],
      },
    },
    {
      id: 'ds-components-only',
      rule: 'Every element inside Modal MUST use DS components or tokens',
      detail: 'No native HTML checkboxes, radio buttons, or inputs. Use <Checkbox>, <RadioButton>, <TextInput>, etc.',
      examples: {
        correct: ['<Checkbox label="Remember choice" />'],
        incorrect: ['<input type="checkbox" /> Remember choice'],
      },
    },
    {
      id: 'primary-button-placement',
      rule: 'Primary action goes on the RIGHT, secondary/cancel goes on the LEFT',
      detail: 'In a two-button footer, the order is: Cancel (outline) → Confirm (primary/secondary). Read left-to-right: dismiss → confirm.',
    },
    {
      id: 'mobile-bottom-sheet',
      rule: 'Modal automatically becomes a bottom sheet on mobile (< 640px)',
      detail: 'No extra code needed. The CSS handles: full width, top-only border radius, slide-up animation. Footer gets tighter padding.',
    },
    {
      id: 'escape-and-backdrop',
      rule: 'Always support Escape key and backdrop click to close (defaults are true)',
      detail: 'Only disable closeOnBackdropClick or closeOnEscape for critical flows where accidental dismissal would lose data.',
    },
    {
      id: 'back-button-for-steps',
      rule: 'Use showBackButton for multi-step flows, not for single-screen modals',
      detail: 'The back button replaces the invisible spacer on the left of the title. Use onBack to navigate to the previous step.',
    },
    {
      id: 'form-input-sizes',
      rule: 'Use compact input sizes inside modals — never use size="lg"',
      detail: 'Modals are constrained spaces. Form inputs (TextInput, Select, DatePicker) should use smaller sizes. Modal sm/md → inputs size="sm" (40px). Modal lg → inputs size="md" (48px). Never use size="lg" inputs (56px) inside modals — lg is reserved for full-page forms. Buttons in ALL modal footers should be size="md" (48px) for consistency.',
      examples: {
        correct: ['<Select size="sm" />', '<TextInput size="sm" />', '<Button size="md">Submit</Button>'],
        incorrect: ['<Select size="lg" />', '<TextInput size="lg" />', '<DatePicker size="lg" />', '<Button size="sm">Submit</Button>'],
      },
    },
    {
      id: 'no-pill-buttons-in-footer',
      rule: 'Modal footer buttons are NEVER pill-shaped — always use default rounded',
      detail: 'For visual consistency across all modals, footer action buttons must use the default shape (rounded corners), not pill. This applies to all footer buttons: primary, outline, secondary, destructive. The pill shape is reserved for in-page CTAs and navigation actions.',
      examples: {
        correct: ['<Button variant="primary">Confirm</Button>', '<Button variant="outline">Cancel</Button>'],
        incorrect: ['<Button variant="primary" pill>Confirm</Button>'],
      },
    },
  ],
}
