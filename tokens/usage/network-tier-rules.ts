// ============================================================
// GLOW DS — Network Tier Usage Rules
// Source: Healthee product — insurance network tier badges
//
// Network tiers indicate the level of insurance coverage
// for a provider, facility, or benefit. They appear as
// Chip badges with a colored coin icon throughout the product:
// provider cards, search results, benefit details, dropdowns.
//
// AI agents generating screens with provider/benefit data
// MUST follow these rules for consistent network display.
// ============================================================

export const networkTierUsageRules = {

  // ── Tier Definitions ──────────────────────────────────────
  // Tiers are ordered from best coverage (rank 1) to worst.
  // Green is always first (best), Red is always last (worst).
  // In between, tiers are ranked by the insurance plan.

  tiers: {
    'in-network': {
      rank: 1,
      label: 'In-Network',
      description: 'Best coverage — preferred providers with lowest out-of-pocket costs',
      iconColors: { back: '#C2E5C3', front: '#5BB95E' },
    },
    'tier-2': {
      rank: 2,
      label: 'Tier 2',
      description: 'Secondary network — covered but with higher costs than in-network',
      iconColors: { back: '#FFE78F', front: '#F5C000' },
    },
    'tier-3': {
      rank: 3,
      label: 'Tier 3',
      description: 'Tertiary network — limited coverage, higher out-of-pocket',
      iconColors: { back: '#CEB5F7', front: '#8242EB' },
    },
    'other': {
      rank: 4,
      label: 'Other Network',
      description: 'Non-standard network — coverage varies by plan',
      iconColors: { back: '#D3DFFF', front: '#245EFF' },
    },
    'unknown': {
      rank: 5,
      label: 'Unknown',
      description: 'Network status could not be determined',
      iconColors: { back: '#E0E0E0', front: '#B3B3B3' },
    },
    'out-of-network': {
      rank: 6,
      label: 'Out-of-Network',
      description: 'Worst coverage — provider is not in any network, highest costs',
      iconColors: { back: '#FAB3B3', front: '#F23C3C' },
    },
  },

  // ── Plan Types ────────────────────────────────────────────

  planTypes: {
    'single-network': {
      description: 'Plan with one network — shows only In-Network and Out-of-Network',
      visibleTiers: ['in-network', 'out-of-network'],
    },
    'multi-tier': {
      description: 'Plan with multiple ranked networks — shows all relevant tiers',
      visibleTiers: ['in-network', 'tier-2', 'tier-3', 'other', 'out-of-network'],
      note: 'Not all tiers are always present. Show only tiers that exist in the plan.',
    },
  },

  // ── Core Rules ────────────────────────────────────────────

  rules: [
    {
      id: 'always-show-tier-badge',
      rule: 'Always display the network tier badge on provider cards and benefit details',
      detail: 'Users need to immediately understand coverage level. The badge should appear in the top-right corner of provider cards, and inline in benefit details.',
    },
    {
      id: 'green-first-red-last',
      rule: 'In dropdowns and lists, green (In-Network) is always first, red (Out-of-Network) is always last',
      detail: 'Tiers are ordered by rank (1=best to 6=worst). This matches the coverage hierarchy and guides users toward preferred providers.',
    },
    {
      id: 'use-network-badge-component',
      rule: 'ALWAYS use the <NetworkBadge> component — NEVER use <Chip> for network tiers',
      detail: 'Import from src/components/NetworkBadge. Usage: <NetworkBadge tier="in-network" label="In-Network" />. This component handles the correct coin icon colors, border pill styling, and typography automatically. Using a generic Chip will produce inconsistent results.',
    },
    {
      id: 'always-outline-neutral',
      rule: 'NetworkBadge renders as a grey-bordered pill with black text — only the coin icon color changes between tiers',
      detail: 'All network tier badges look identical in structure: grey border, black text, coin icon. Only the coin icon color differs between tiers. This is handled automatically by <NetworkBadge>.',
    },
    {
      id: 'single-vs-multi',
      rule: 'Single-network plans show only In-Network / Out-of-Network. Multi-tier plans show all relevant tiers.',
      detail: 'Do not show tier options that do not exist in the plan. If the plan has only 2 networks, show 2 tiers.',
    },
    {
      id: 'network-name-as-label',
      rule: 'In multi-tier plans, the chip label is the network name, not "Tier 1/2/3"',
      detail: 'Users identify their network by name (e.g., "Aetna Preferred", "Blue Cross"). For single-network plans, use "In-Network" / "Out-of-Network".',
    },
  ],

  // ── Context-Based Defaults ────────────────────────────────

  // ── Fixed Chip Style ───────────────────────────────────────
  // All network tier badges use the SAME chip style.
  // Only the coin icon color differs between tiers.

  chipStyle: {
    variant: 'outline' as const,
    color: 'neutral' as const,
    size: 'sm' as const,
  },

  contextDefaults: {
    'provider-card-badge':    { position: 'top-right corner of card' },
    'benefit-detail-inline':  { position: 'inline next to benefit name' },
    'network-filter-dropdown':{ position: 'dropdown list items with coin icon' },
    'search-result-badge':    { position: 'top-right of result row' },
  },

} as const

export type NetworkTier = keyof typeof networkTierUsageRules.tiers
export type NetworkPlanType = keyof typeof networkTierUsageRules.planTypes
export type NetworkTierContext = keyof typeof networkTierUsageRules.contextDefaults
