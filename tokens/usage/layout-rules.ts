// ============================================================
// GLOW DS — Layout Usage Rules
// Source: Healthee design guidelines — background and surface patterns
//
// These rules define WHEN to use each background / surface color.
// AI agents generating screens MUST follow these rules
// to maintain visual consistency with the Healthee product.
// ============================================================

export const layoutRules = {

  // ── Surface / Background Defaults ───────────────────────────
  // Healthee products are white-first. The baseline for any screen,
  // page, modal, or dialog is neutral-negative (#ffffff).
  // Only deviate from white when there is a deliberate design reason.

  surfaceDefaults: [
    {
      context: 'Page / Screen / Modal / Dialog / Drawer / Bottom sheet',
      token: 'neutral-negative',
      tailwind: 'bg-neutral-negative',
      hex: '#ffffff',
      isDefault: true,
      note: 'WHITE is the default. Every product surface starts white unless a specific design calls for something else. Never use a grey or off-white background on a product screen without a reason.',
    },
    {
      context: 'Secondary panel / Settings / Docs page',
      token: 'neutral-extra-subtle',
      tailwind: 'bg-neutral-extra-subtle',
      hex: '#fafafa',
      isDefault: false,
      note: 'Very light off-white for secondary panels — e.g. a settings sidebar, documentation pages, or filter panels.',
    },
    {
      context: 'Content section / Alternating row / Input area background',
      token: 'neutral-subtle',
      tailwind: 'bg-neutral-subtle',
      hex: '#f2f2f2',
      isDefault: false,
      note: 'Visible grey for alternating table rows, code blocks, or content groupings inside a white page.',
    },
    {
      context: 'Brand surface / CTA panel / Highlight section',
      token: 'primary',
      tailwind: 'bg-primary',
      hex: '#fd5201',
      isDefault: false,
      note: 'Orange — use only for deliberate brand moments (e.g. the right panel of the login screen). Never as a full-page background on a content screen.',
    },
  ],

  // ── Rules ───────────────────────────────────────────────────

  rules: [
    {
      id: 'white-by-default',
      rule: 'All product screens default to white (neutral-negative) background',
      detail: 'Unless a Figma design explicitly shows a different background, assume white. This applies to: pages, screens, modals, dialogs, drawers, bottom sheets, cards (if floating on a grey surface). Do NOT use neutral-subtle (#f2f2f2) or neutral-extra-subtle (#fafafa) as a page background in the product — those are for the docs site and secondary panels only.',
      examples: {
        correct: ['Profile page: bg-neutral-negative', 'Plan selection modal: bg-neutral-negative', 'Booking confirmation drawer: bg-neutral-negative'],
        incorrect: ['Profile page with bg-neutral-subtle (unwanted grey)', 'Modal with bg-neutral-extra-subtle (#fafafa)', 'Page with hardcoded bg-[#f5f5f5]'],
      },
    },
    {
      id: 'no-hardcoded-bg',
      rule: 'Never hardcode background hex values — always use a DS token',
      detail: 'Even for white: use bg-neutral-negative, not bg-white or bg-[#ffffff]. This ensures the background is semantically tracked and can be updated globally.',
      examples: {
        correct: ['bg-neutral-negative', 'bg-neutral-extra-subtle', 'bg-neutral-subtle', 'bg-primary'],
        incorrect: ['bg-white', 'bg-[#ffffff]', 'bg-[#f9f9f9]', 'bg-[#f2f2f2]', 'bg-gray-50'],
      },
    },
    {
      id: 'primary-bg-sparingly',
      rule: 'Orange (primary) as a background only for deliberate brand moments',
      detail: 'bg-primary is reserved for brand-highlight surfaces — the login right panel, onboarding splash screens, or marketing sections. Never use it as a generic section or card background.',
      examples: {
        correct: ['Login right panel: bg-primary', 'Onboarding welcome screen: bg-primary', 'Plan selection brand banner: bg-primary'],
        incorrect: ['Card background: bg-primary', 'Profile section header: bg-primary', 'Filter panel: bg-primary'],
      },
    },
    {
      id: 'no-hardcoded-colors',
      rule: 'Never use hardcoded hex colors in JSX — always use a DS color token',
      detail: 'All color values (text, background, border) MUST use DS Tailwind classes: text-primary, bg-primary, border-neutral-border-strong, etc. Never write style={{ color: "#fd5201" }} or className="text-[#fd5201]". The only exception is decorative gradients (e.g. specialty icon backgrounds) that are not part of the brand palette and cannot be mapped to a token.',
      examples: {
        correct: ['text-primary', 'bg-primary', 'text-neutral-text-dark', 'bg-accent-yellow', 'border-neutral-border-strong'],
        incorrect: ['style={{ color: "#fd5201" }}', 'style={{ background: "#ffd129" }}', 'className="text-[#404040]"', 'className="bg-[#fd5201]"'],
      },
    },
    {
      id: 'no-inline-style-for-spacing',
      rule: 'Never use inline style for spacing or typography — use DS Tailwind classes',
      detail: 'Padding, margin, gap, font-size, font-weight, and line-height MUST use Tailwind classes from the DS spacing/typography scales. Never write style={{ padding: 16 }} or style={{ fontSize: 20 }}. Use p-s, text-[20px], etc. The only exception is layout-specific one-off dimensions (e.g. a card height of 156px or minHeight of 300px) that are not part of the spacing scale.',
      examples: {
        correct: ['p-s (16px)', 'px-xxl (40px)', 'gap-l (24px)', 'text-[20px]', 'font-medium', 'leading-[24px]'],
        incorrect: ['style={{ padding: 16 }}', 'style={{ padding: "0 40px 80px" }}', 'style={{ fontSize: 20 }}', 'style={{ fontWeight: 600 }}', 'style={{ color: "black" }}'],
      },
    },
    {
      id: 'min-horizontal-padding',
      rule: 'Page content containers must have at least 32px (spacing.xl) horizontal padding',
      detail: 'When using max-width + margin: 0 auto for centering, always add horizontal padding (px-xl or padding: 0 32px) so content never touches screen edges on narrow viewports. This applies to all content wrappers inside the page shell — including search bars, main content areas, and footer sections.',
      examples: {
        correct: ['padding: ${SPACE_XXL}px ${SPACE_XL}px', 'className="px-xl"', 'padding: 40px 32px'],
        incorrect: ['padding: ${SPACE_XXL}px 0', 'padding: 40px 0', 'no horizontal padding on centered container'],
      },
    },
  ],

} as const

export type LayoutSurface = typeof layoutRules.surfaceDefaults[number]
export type LayoutRule = typeof layoutRules.rules[number]
