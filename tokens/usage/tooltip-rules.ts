// ============================================================
// GLOW DS — Tooltip Usage Rules
// Source: Figma Web DS — node-id=2347-42116
//
// These rules define WHEN and HOW to use tooltips.
// AI agents generating screens MUST follow these rules
// to maintain visual consistency with the Healthee product.
// ============================================================

export const tooltipUsageRules = {

  // ── Variants ────────────────────────────────────────────────

  variants: {
    default: [
      'Use for most tooltips — brief contextual information, short labels, icon explanations',
      'Background: rgba(0,0,0,0.72) with backdrop-blur — works on any surface color',
      'Supports: title, body text, leftIcon, action buttons, close button',
      'Minimum width: 250px, maximum width: 450px',
    ],
    rich: [
      'Use for richer educational content, feature walkthroughs, onboarding nudges',
      'Background: #404040 solid — no blur, designed for image or video content',
      'Requires: title + onClose (always controlled mode)',
      'Supports: media (image or video), text link in addition to standard content',
      'Best for: "Learn more" popovers, first-time feature explanations with visual context',
    ],
  },

  // ── Behavior Modes ─────────────────────────────────────────

  modes: {
    hover: {
      description: 'Panel shows on hover, disappears when pointer leaves. No close button.',
      when: [
        'Short supplementary info (icon labels, field hints, truncated text)',
        'Non-critical context — the user is not required to acknowledge',
        'Dense UIs where tooltips should feel lightweight',
      ],
      implementation: 'Omit the `onClose` prop. Tooltip manages its own visibility.',
    },
    controlled: {
      description: 'Panel stays open until the user explicitly closes it. Close (×) button always shown.',
      when: [
        'Onboarding tips or feature announcements the user should read',
        'Rich tooltips with media — users need time to watch/view the content',
        'Action tooltips where the user must make a choice (primaryAction / secondaryAction)',
        'Content triggered by a click (not hover)',
      ],
      implementation: 'Provide `onClose` and control `open` state from the parent.',
    },
  },

  // ── Direction ───────────────────────────────────────────────

  directions: {
    'top-left': 'Panel below trigger, left-aligned. Arrow at top-left. Use when trigger is near the left edge.',
    'top-right': 'Panel below trigger, right-aligned. Arrow at top-right. Use when trigger is near the right edge.',
    'bottom-left': 'Panel above trigger, left-aligned. Arrow at bottom-left. Use when there is no space below.',
    'bottom-right': 'Panel above trigger, right-aligned. Arrow at bottom-right. Use when no space below and trigger is near right.',
    'left': 'Panel to the right of trigger, vertically centered. Arrow on left. Use for inline icons in flowing text.',
    'right': 'Panel to the left of trigger, vertically centered. Arrow on right. Use when trigger is near the right viewport edge.',
    choice: [
      'Default direction is top-left — works for most cases in left-to-right layouts',
      'Choose a direction that keeps the panel inside the viewport',
      'For items in a row near the right edge, use top-right or bottom-right',
      'For top-of-page triggers, use top-left or top-right (panel appears below)',
    ],
  },

  // ── Content Rules ──────────────────────────────────────────

  content: {
    text: [
      'Keep body text under 2 short sentences for default tooltips',
      'Rich tooltips may have longer explanations — up to a short paragraph',
      'Never put critical information exclusively in a tooltip (hover mode is not always accessible)',
    ],
    title: [
      'Add a title when the tooltip is a named feature or tip (e.g., "New feature", "Pro tip")',
      'Required for rich variant',
      'Skip the title for simple label/hint tooltips — body text is enough',
    ],
    leftIcon: [
      'Use to visually reinforce the tooltip type (e.g., info icon, star icon)',
      'Keep icon at 16–20px',
      'Skip when the content already makes the purpose clear',
    ],
    media: [
      'Only used with variant="rich"',
      'Image: use for static screenshots, diagrams, product illustrations',
      'Video: use for animated feature walkthroughs — provide a `poster` image',
      'Images render at 100% panel width; keep aspect ratios consistent (16:9 recommended)',
    ],
    actions: [
      'primaryAction renders as a white outline pill button',
      'secondaryAction renders as a ghost pill button (white text, no border)',
      'Use at most ONE primary + ONE secondary action per tooltip',
      'Good examples: "Try it" (primary) + "Dismiss" (secondary)',
      'Never use action buttons in hover mode — the tooltip disappears before the user can click',
    ],
    link: [
      'Only used with variant="rich"',
      'A single "Learn more" style text link at the bottom of the panel',
      'Use for navigation to a full docs page, help article, or feature overview',
    ],
  },

  // ── Accessibility ────────────────────────────────────────────

  a11y: [
    'In hover mode: content must be supplementary only — not the sole way to convey information',
    'In controlled mode: the close button has aria-label="Close tooltip"',
    'Tooltip panels receive role="tooltip" when used in hover mode',
    'Ensure keyboard users can access the same information through the main UI',
    'Min touch target for close button: 20x20px (already sized at CLOSE_SIZE)',
  ],

  // ── Anti-patterns ────────────────────────────────────────────

  antiPatterns: [
    'Do not put form fields, complex interactions, or required choices inside a hover tooltip',
    'Do not use a tooltip to hide important navigation links',
    'Do not stack multiple tooltips on the same trigger',
    'Do not use a tooltip for error messages — use an inline error or toast instead',
    'Do not use hover tooltips on mobile (no hover state) — prefer controlled open/close',
    'Do not make the body text longer than ~80 words in the default variant',
  ],

}
