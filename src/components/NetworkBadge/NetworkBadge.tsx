import type { NetworkTier, NetworkBadgeSize, NetworkBadgeProps } from './NetworkBadge.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import NetworkTierCoin from '../Icon/icons/specialty/NetworkTierCoin'
import { Chip } from '../Chip'
import type { ChipSize } from '../Chip'

// ============================================================
// GLOW DS — NetworkBadge
//
// Displays a dual-color coin icon + network tier label.
// Internally renders a <Chip> for consistent sizing with all
// other chip-based badges in the system.
//
// Use this component EVERYWHERE network tier info is shown:
// provider cards, modals, search results, benefit details, etc.
// ============================================================

// ── Tier Color Definitions ────────────────────────────────────
const TIER_COLORS: Record<NetworkTier, { back: string; front: string }> = {
  'in-network':      { back: sc.success.surface.light,              front: sc.success.surface.DEFAULT },      // #c2e5c3 / #5bb95e
  'tier-2':          { back: sc['accent-yellow'].surface.hover,     front: sc['accent-yellow'].text.DEFAULT }, // #ffe78f / #f5c000
  'tier-3':          { back: sc['accent-purple'].surface.light,      front: sc['accent-purple'].surface.selected }, // #e7dafb / #9b67ef
  'out-of-network':  { back: sc.error.surface.disabled,             front: sc.error.surface.DEFAULT },         // #fab3b3 / #f23c3c
}

// ── Size mapping: NetworkBadge size → Chip size ──────────────
const SIZE_MAP: Record<NetworkBadgeSize, ChipSize> = {
  sm: 'sm',   // 28px
  md: 'md',   // 32px
}

// ── Default tier labels (used when no explicit label is provided) ──
const DEFAULT_TIER_LABELS: Record<NetworkTier, string> = {
  'in-network':     'In-Network',
  'tier-2':         'Tier 2',
  'tier-3':         'Tier 3',
  'out-of-network': 'Out-of-Network',
}

// ── Component ─────────────────────────────────────────────────

export function NetworkBadge({ tier, networkName, label, networkLabel, bordered = true, size = 'sm' }: NetworkBadgeProps) {
  const colors = TIER_COLORS[tier]
  const chipSize = SIZE_MAP[size]
  const resolvedLabel = label ?? networkLabel ?? DEFAULT_TIER_LABELS[tier]
  const displayLabel = networkName
    ? `${networkName} · ${resolvedLabel}`
    : resolvedLabel

  const coinIcon = <NetworkTierCoin backColor={colors.back} frontColor={colors.front} size={chipSize === 'sm' ? 'sm' : 'md'} />

  if (!bordered) {
    // Unbounded: just icon + text, no chip wrapper
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
        {coinIcon}
        {displayLabel && (
          <span style={{ whiteSpace: 'nowrap' }}>{displayLabel}</span>
        )}
      </span>
    )
  }

  return (
    <Chip
      variant="outline"
      color="neutral"
      size={chipSize}
      iconLeft={coinIcon}
    >
      {displayLabel}
    </Chip>
  )
}
