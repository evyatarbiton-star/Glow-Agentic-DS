// ============================================================
// GLOW DS — Card Usage Rules
// Source: Healthee product analysis — real-world card patterns
//
// These rules define WHEN to use each Card variant.
// AI agents generating screens MUST follow these rules.
// ============================================================

export const cardUsageRules = {

  // ── Core Principle ────────────────────────────────────────
  // EVERY container with a border, shadow, or filled background
  // must use the <Card> component. Never build raw divs with
  // border/shadow/radius manually.

  variants: {
    outline:  'Default — clean border container. Use for most content sections, list items, info blocks.',
    elevated: 'Shadow lift — use for floating cards, overlays, or to draw attention above the page surface.',
    filled:   'Subtle background fill — use for secondary/supporting content areas, grouped info, or nested sections.',
  },

  // ── Radius ────────────────────────────────────────────────
  radius: {
    sm: '12px — compact cards, list items, inline sections',
    md: '16px — default. Most content cards, info blocks, settings rows',
    lg: '24px — hero cards, large feature blocks, prominent containers',
  },

  // ── Padding ───────────────────────────────────────────────
  padding: {
    none: 'Image-first cards where content bleeds to edges (image at top, text below)',
    sm:   '16px — compact cards, list items, dense layouts',
    md:   '20px — default. Standard content cards',
    lg:   '32px — spacious hero cards, large feature blocks, marketing sections',
  },

  // ── Rules ─────────────────────────────────────────────────
  rules: [
    {
      id: 'always-use-card',
      rule: 'Never build a container with border/shadow/radius manually — always use <Card>',
      detail: 'Even for simple bordered sections, use <Card variant="outline">. This ensures consistent tokens.',
      examples: {
        correct: ['<Card variant="outline" padding="md">content</Card>'],
        incorrect: ['<div className="border rounded-lg p-4 shadow">content</div>'],
      },
    },
    {
      id: 'interactive-for-clickable',
      rule: 'Use interactive={true} only when the entire card is clickable',
      detail: 'Adds hover shadow lift and translateY(-1px). If only a button inside is clickable, do NOT make the card interactive.',
      examples: {
        correct: ['Provider card that navigates on click → interactive', 'Card with a "Book" button inside → NOT interactive'],
        incorrect: ['Card with interactive={true} but onClick only on a child button'],
      },
    },
    {
      id: 'outline-is-default',
      rule: 'Default to variant="outline" unless there is a specific reason for elevated or filled',
      detail: 'Outline is the workhorse. Elevated is for floating/prominent. Filled is for nesting or grouping.',
    },
    {
      id: 'no-nested-elevated',
      rule: 'Never nest an elevated card inside another elevated card',
      detail: 'Stacked shadows create visual noise. Use outline or filled inside elevated containers.',
    },
    {
      id: 'padding-none-with-image',
      rule: 'Use padding="none" when the card has a full-bleed image at top',
      detail: 'Wrap text content below in its own padded div. The image touches the card edges.',
    },
  ],
}
