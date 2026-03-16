// ============================================================
// GLOW DS — Chip Usage Rules
// Source: Healthee product analysis — real-world chip patterns
//
// These rules define WHEN to use each Chip variant and color.
// AI agents generating screens MUST follow these rules.
// ============================================================

export const chipUsageRules = {

  // ── Chip vs Button.pill ───────────────────────────────────
  // This is the most common mistake AI agents make.
  //
  // Chip = labeling, categorization, filtering, status (NON-ACTION)
  // Button with pill prop = clickable ACTIONS that happen to be pill-shaped
  //
  // If clicking the element performs a primary action (submit, navigate, book),
  // use <Button pill>. If it selects/filters/labels, use <Chip>.

  variants: {
    subtle:  'Default — soft background fill. Use for static labels, categories, tags.',
    outline: 'Border only — use for selectable/filter chips. Clear selected state contrast.',
    filled:  'Solid background — use for strong status indicators, badges, active state emphasis.',
  },

  colors: {
    neutral: 'Default — general-purpose labels, categories, tags, filters.',
    primary: 'Brand emphasis — selected state, active filters, primary categories.',
    success: 'Positive — "active", "in-network", "available", "verified", "approved".',
    error:   'Negative — "inactive", "out-of-network", "unavailable", "expired", "denied".',
  },

  sizes: {
    sm: '28px height — compact lists, table cells, inline tags',
    md: '32px height — default. Most use cases.',
    lg: '36px height — prominent filters, hero sections, onboarding chips',
  },

  rules: [
    {
      id: 'chip-not-button',
      rule: 'Chip is for labeling/filtering/status — NOT for primary actions',
      detail: 'If the user clicks and something "happens" (navigate, submit, book), use <Button pill>. Chip is for selecting/filtering/displaying.',
      examples: {
        correct: ['<Chip variant="outline" onClick={toggleFilter}>Cardiology</Chip>', '<Button pill onClick={submit}>Book Now</Button>'],
        incorrect: ['<Chip onClick={navigateToPage}>Go to page</Chip>'],
      },
    },
    {
      id: 'subtle-for-static',
      rule: 'Use variant="subtle" for non-interactive labels and tags',
      detail: 'Static display chips (category labels, status tags) should be subtle. No onClick needed.',
    },
    {
      id: 'outline-for-filter',
      rule: 'Use variant="outline" for selectable/filter chips',
      detail: 'Filter chips toggle between selected/unselected. The outline variant shows clear contrast between states.',
    },
    {
      id: 'color-matches-meaning',
      rule: 'Always match Chip color to semantic meaning',
      detail: 'success = positive/active, error = negative/inactive, primary = brand/selected, neutral = general.',
      examples: {
        correct: ['<Chip color="success">In-Network</Chip>', '<Chip color="error">Out-of-Network</Chip>'],
        incorrect: ['<Chip color="neutral">In-Network</Chip> (should be success)'],
      },
    },
    {
      id: 'chipgroup-for-multiple',
      rule: 'Wrap multiple chips in <ChipGroup> for consistent spacing and wrapping',
      detail: 'ChipGroup provides flex layout with gap=8px and optional wrap. Never manually space chips with margin.',
    },
  ],
}
