// ============================================================
// GLOW DS — ProviderCard Usage Rules
// Source: Figma Web DS — ProviderCard (node-id=4108:10968)
//
// These rules define WHEN and HOW to use ProviderCard.
// AI agents generating screens MUST follow these rules.
// ============================================================

export const providerCardUsageRules = {

  // ── When to Use ─────────────────────────────────────────────
  // ProviderCard is a COMPLETE, self-contained component for displaying
  // healthcare provider information. It includes its own avatar, layout,
  // network badge, cost section, and action buttons.

  whenToUse: [
    'Provider search results — listing doctors, specialists, facilities',
    'Provider detail previews — summary cards before a full profile page',
    'Saved/bookmarked provider lists',
    'Provider comparison views',
    'Appointment booking flows — selecting a provider',
  ],

  whenNotToUse: [
    'Generic user profiles — use Card + Avatar instead',
    'Non-healthcare person cards — use Card + Avatar instead',
    'Provider detail pages (full page) — ProviderCard is for compact card format only',
  ],

  // ── Avatar Behavior ─────────────────────────────────────────
  // ProviderCard has a BUILT-IN avatar system. Do NOT use the Avatar
  // component inside ProviderCard — it manages its own 52px circular avatar.

  avatar: {
    size: '52px — fixed, custom size (not an Avatar component size)',
    photoMode: 'When photoUrl is provided, the avatar shows the photo with cover fit',
    fallbackMode: 'When NO photoUrl is provided, the avatar shows a provider-type icon',
    providerType: {
      male:     'Default. Shows detailed male doctor illustration (stethoscope, lab coat)',
      female:   'Shows female doctor illustration',
      facility: 'Shows facility/building illustration (hospital, clinic)',
    },
    rules: [
      'NEVER use <Avatar> inside ProviderCard — the avatar is built-in',
      'ALWAYS set providerType when the provider gender or type is known',
      'Default providerType is "male" — set "female" or "facility" explicitly',
      'The initials prop is deprecated — use providerType instead',
      'Photo takes priority: if photoUrl is set, providerType icon is hidden',
    ],
  },

  // ── Required Props ──────────────────────────────────────────
  requiredProps: {
    name:      'Provider full name — displayed as the card title',
    specialty: 'Medical specialty — displayed under the name (e.g., "Ophthalmologist")',
  },

  // ── Optional Prop Groups ────────────────────────────────────
  optionalProps: {
    identity: {
      photoUrl:     'URL for the provider photo (falls back to providerType icon)',
      providerType: '"male" | "female" | "facility" — controls fallback avatar icon (default: "male")',
    },
    location: {
      address:  'Physical address string',
      distance: 'Distance string, e.g., "0.3 mi"',
    },
    quality: {
      rating:      'Numeric rating out of 5, e.g., 4.5',
      reviewCount: 'Number of reviews — shown in parentheses after rating',
    },
    network: {
      networkTier:  '"in-network" | "tier-2" | "tier-3" | "out-of-network" — controls badge color',
      networkName:  'Insurance network name, e.g., "Aetna"',
      networkLabel: 'Custom label, e.g., "In-Network" (auto-generated from tier if omitted)',
    },
    cost: {
      cost:         'Formatted cost string, e.g., "$1,400"',
      costLevel:    '"lower" | "typical" | "higher" — controls chip color and icon',
      costLabel:    'Label under cost, default: "est. out-of-pocket"',
      showCostChip: 'Show/hide the cost comparison chip (default: true)',
      showPrice:    'Show/hide the entire cost section (default: true)',
    },
    languages: {
      languages: 'string[] — Languages spoken. Shows first 2, then "+N" for extras. Optional, hidden by default.',
    },
    virtual: {
      virtualAvailable: 'boolean — Shows "Accept virtual appointment" row with video icon. Optional, hidden by default.',
    },
    appointment: {
      nextAppointmentLabel: 'e.g., "Next appointment" — no colon needed',
      nextAppointmentDate:  'e.g., "Today, May 7" — ALWAYS last detail row',
    },
    interaction: {
      bookmarkable:    'Show bookmark toggle (default: true)',
      onBookmarkChange: 'Callback when bookmark state changes',
      onCallClick:     'Call button handler — button hidden if omitted',
      onBookClick:     'Book button handler — button hidden if omitted',
      onClick:         'Makes entire card clickable with hover effect',
    },
  },

  // ── Composition Rules ───────────────────────────────────────
  compositionRules: [
    {
      id: 'use-providercard-not-card-avatar',
      rule: 'For healthcare provider listings, ALWAYS use <ProviderCard> — never manually compose Card + Avatar',
      detail: 'ProviderCard handles avatar fallbacks, network badges, cost chips, and action buttons automatically.',
    },
    {
      id: 'providertype-matches-data',
      rule: 'Set providerType to match the actual provider: "female" for female providers, "facility" for clinics/hospitals',
      detail: 'This controls the fallback icon when no photo is available. Default is "male".',
    },
    {
      id: 'actions-are-optional',
      rule: 'Action buttons (Call, Book) only appear when their handlers are provided',
      detail: 'Omit onCallClick/onBookClick to hide the action buttons section entirely. Valid combinations: Book + Call, Call only, or no actions. Book-only is NOT a valid state.',
    },
    {
      id: 'appointment-follows-actions',
      rule: 'Book+Call → MUST provide nextAppointmentDate (shows "Next appointment [date]"). Call-only → shows "Call to check availability" automatically (no date needed). No actions → no appointment row.',
      detail: 'It is impossible to have a Book button without a next appointment date. When only Call is available, the component auto-shows "Call to check availability" instead of a date.',
    },
    {
      id: 'actions-fixed-width-horizontal',
      rule: 'In horizontal layout, action buttons have a fixed 160px width — never stretch based on cost text',
      detail: 'This ensures consistent button sizing across a list of cards regardless of cost text length. In vertical (mobile) layout, buttons stretch to full card width.',
    },
    {
      id: 'network-tier-follows-rules',
      rule: 'Network tier badge colors follow network-tier-rules.ts — do not override',
      detail: 'See tokens/usage/network-tier-rules.ts for the full color/icon mapping.',
    },
    {
      id: 'cost-chip-follows-level',
      rule: 'The cost comparison chip color is driven by costLevel prop — green for "lower", blue for "typical", red for "higher"',
    },
    {
      id: 'always-provide-costlevel-with-cost',
      rule: 'Always provide costLevel when cost is provided — this ensures consistent layout across all cards',
      detail: 'Without costLevel, the cost label renders inline (same line as price) instead of below, breaking visual consistency with other cards that have cost chips.',
    },
    {
      id: 'detail-row-order',
      rule: 'Detail rows follow a fixed order: Rating → Address/Distance → Languages → Virtual → Next Appointment (always last)',
      detail: 'All detail rows are optional. Next appointment MUST always be the last detail row when present.',
    },
    {
      id: 'languages-shows-max-two',
      rule: 'The languages row shows at most 2 language names, then "+N" for any extras',
      detail: 'e.g., ["English", "Spanish", "Mandarin"] renders as "English, Spanish +1". Empty array hides the row.',
    },
    {
      id: 'clickable-card',
      rule: 'To make the entire card clickable (e.g., navigate to provider detail), pass onClick',
      detail: 'This adds a hover effect to the card. Action buttons (Call, Book) stop propagation automatically.',
    },
    {
      id: 'loading-skeleton',
      rule: 'Use loading={true} to show a shimmer skeleton while provider data is being fetched',
      detail: 'The skeleton renders placeholder shapes matching the full card structure (avatar, name, specialty, 3 detail rows, cost, 2 buttons) to prevent layout shift. Works in both vertical and horizontal layouts. All other props are ignored when loading is true.',
    },
  ],

  // ── Example Usage ───────────────────────────────────────────
  examples: {
    basic: `
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
  nextAppointmentLabel="Next appointment"
  nextAppointmentDate="Tomorrow at 2:00 PM"
  onCallClick={() => call(provider)}
  onBookClick={() => book(provider)}
  onClick={() => navigate(\`/provider/\${provider.id}\`)}
/>`,
    facility: `
<ProviderCard
  name="Cedars-Sinai Medical Center"
  specialty="Hospital"
  providerType="facility"
  networkTier="in-network"
  distance="1.2 mi"
  address="8700 Beverly Blvd"
  onBookClick={() => book(facility)}
/>`,
    minimalMale: `
<ProviderCard
  name="Dr. James Wilson"
  specialty="Cardiologist"
/>`,
    loading: `
// Show skeleton while data is being fetched — pass loading={true}
// All other props are ignored when loading is true.
<ProviderCard loading />

// Typical pattern: toggle loading based on fetch state
<ProviderCard
  loading={!provider}
  name={provider?.name ?? ''}
  specialty={provider?.specialty ?? ''}
  ...
/>`,
  },
}
