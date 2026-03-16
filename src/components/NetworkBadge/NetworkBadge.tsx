import type { NetworkTier, NetworkBadgeSize, NetworkBadgeProps } from './NetworkBadge.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontFamilies, fontWeights, fontSizes } from '../../../tokens/primitive/typography'
import { semanticRadii } from '../../../tokens/semantic/radii'
import NetworkTierCoin from '../Icon/icons/specialty/NetworkTierCoin'

// ============================================================
// GLOW DS — NetworkBadge
//
// Displays a dual-color coin icon + network tier label.
// Use this component EVERYWHERE network tier info is shown:
// provider cards, modals, search results, benefit details, etc.
//
// NEVER use a generic <Chip> for network tier display.
// ALWAYS use <NetworkBadge> to ensure consistent styling.
// ============================================================

// ── Tier Color Definitions ────────────────────────────────────
const TIER_COLORS: Record<NetworkTier, { back: string; front: string }> = {
  'in-network':      { back: sc.success.surface.light,              front: sc.success.surface.DEFAULT },      // #c2e5c3 / #5bb95e
  'tier-2':          { back: sc['accent-yellow'].surface.hover,     front: sc['accent-yellow'].text.DEFAULT }, // #ffe78f / #f5c000
  'tier-3':          { back: sc['accent-purple'].surface.light,      front: sc['accent-purple'].surface.selected }, // #e7dafb / #9b67ef
  'out-of-network':  { back: sc.error.surface.disabled,             front: sc.error.surface.DEFAULT },         // #fab3b3 / #f23c3c
}

// ── Size Definitions (aligned with Chip sm/md) ──────────────
type SizeDef = {
  paddingV: number
  paddingH: number
  gap: number
  fontSize: string
  iconSize: 'sm' | 'md'
}

const SIZES: Record<NetworkBadgeSize, SizeDef> = {
  sm: { paddingV: 4, paddingH: 10, gap: 4, fontSize: fontSizes[14], iconSize: 'sm' },  // ~28px height
  md: { paddingV: 6, paddingH: 12, gap: 6, fontSize: fontSizes[14], iconSize: 'md' },  // ~32px height
}

// ── Token Constants ───────────────────────────────────────────
const FONT         = fontFamilies.default          // Founders Grotesk
const W_MEDIUM     = fontWeights.medium            // 500
const TEXT_COLOR   = sc.neutral.text.DEFAULT        // #000000
const BORDER_LIGHT = sc.neutral.border.light        // #ededed
const RADIUS_FULL  = parseInt(semanticRadii.full)   // 999

// ── Component ─────────────────────────────────────────────────

export function NetworkBadge({ tier, networkName, label, networkLabel, bordered = true, size = 'sm' }: NetworkBadgeProps) {
  const colors = TIER_COLORS[tier]
  const s = SIZES[size]
  const resolvedLabel = label ?? networkLabel ?? ''
  const displayLabel = networkName
    ? `${networkName} · ${resolvedLabel}`
    : resolvedLabel

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: s.gap, flexShrink: 0,
      ...(bordered ? {
        border: `1px solid ${BORDER_LIGHT}`,
        borderRadius: RADIUS_FULL,
        padding: `${s.paddingV}px ${s.paddingH}px`,
      } : {}),
    }}>
      <NetworkTierCoin backColor={colors.back} frontColor={colors.front} size={s.iconSize} />
      {displayLabel && (
        <span style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: s.fontSize, color: TEXT_COLOR, whiteSpace: 'nowrap' }}>
          {displayLabel}
        </span>
      )}
    </div>
  )
}
