import type React from 'react'
import type { CostLevel } from './ProviderCard.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontFamilies, fontWeights, fontSizes, lineHeights } from '../../../tokens/primitive/typography'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../tokens/semantic/radii'
import ArrowDownLeftCrFrIcon from '../Icon/icons/solid/ArrowDownLeftCrFr'
import ArrowUpRightCrFrIcon from '../Icon/icons/solid/ArrowUpRightCrFr'
import DistributeHorizontalSolid from '../Icon/icons/solid/DistributeHorizontal'

// ============================================================
// GLOW DS — CostSection (internal sub-component)
//
// Displays the price + optional cost comparison chip.
// Used inside ProviderCard — not exported from the DS.
// ============================================================

// ── Cost Chip Config ──────────────────────────────────────────
type ChipConfig = {
  label: string
  bg: string
  color: string
  Icon: typeof ArrowDownLeftCrFrIcon | null
}

const COST_CHIP_CONFIG: Record<CostLevel, ChipConfig> = {
  lower: {
    label: 'Lower cost',
    bg:    sc.success.surface.subtle,    // #f1f9f1
    color: sc.success.text.dark,         // #317233
    Icon:  ArrowDownLeftCrFrIcon,
  },
  typical: {
    label: 'Typical cost',
    bg:    sc['accent-blue'].surface.subtle,  // #f5f8ff
    color: '#003feb',                          // blue-600 — darker, consistent with green/red chip tones
    Icon:  DistributeHorizontalSolid,
  },
  higher: {
    label: 'Higher cost',
    bg:    sc.error.surface.subtle,      // #feecec
    color: sc.error.text.dark,           // #ac0b0b
    Icon:  ArrowUpRightCrFrIcon,
  },
}

// ── Token Constants ───────────────────────────────────────────
const FONT         = fontFamilies.default        // Founders Grotesk
const FONT_DISPLAY = fontFamilies.display        // Tiempos Headline
const W_REGULAR    = fontWeights.regular         // 400
const W_MEDIUM     = fontWeights.medium          // 500
const TEXT_DEFAULT = sc.neutral.text.DEFAULT      // #000000
const TEXT_DARK    = sc.neutral.text.dark         // #404040
const GAP_XXXS     = parseInt(semanticSpacing.xxxs) // 4px
const GAP_XXS      = parseInt(semanticSpacing.xxs)  // 8px
const RADIUS_FULL  = parseInt(semanticRadii.full)   // 999px

// ── Component ─────────────────────────────────────────────────
interface CostSectionProps {
  cost: string
  costLevel?: CostLevel
  costLabel?: React.ReactNode
  costChipLabel?: string
  showCostChip?: boolean
  /** Hide the icon inside the cost chip */
  costChipHideIcon?: boolean
  /** Place cost chip inline with the price (used in horizontal layout) */
  chipInline?: boolean
}

export function CostSection({
  cost,
  costLevel,
  costLabel = 'est. out-of-pocket',
  costChipLabel,
  showCostChip = true,
  costChipHideIcon = false,
  chipInline = false,
}: CostSectionProps) {
  const rawChip = costLevel ? COST_CHIP_CONFIG[costLevel] : null
  const chip = rawChip && costChipLabel ? { ...rawChip, label: costChipLabel } : rawChip
  const showChip = showCostChip && chip

  // ── Chip element (reused) ──
  const chipEl = showChip ? (
    <div style={{
      display: 'flex', alignItems: 'center', gap: GAP_XXXS,
      backgroundColor: chip.bg, borderRadius: RADIUS_FULL,
      padding: `${GAP_XXXS}px 10px`, color: chip.color, // 10px horizontal — aligned with Chip sm
    }}>
      {chip.Icon && !costChipHideIcon && <chip.Icon size="xs" />}
      <span style={{
        fontFamily: FONT, fontWeight: W_MEDIUM,
        fontSize: fontSizes[14], lineHeight: lineHeights[18],
      }}>
        {chip.label}
      </span>
    </div>
  ) : null

  // ── Inline layout (horizontal card): always stacked, chip sits next to price when present ──
  if (chipInline) {
    return (
      <div>
        {showChip ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: GAP_XXS }}>
            {chipEl}
            <span style={{
              fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM,
              fontSize: fontSizes[24], lineHeight: lineHeights[29], color: TEXT_DEFAULT,
            }}>
              {cost}
            </span>
          </div>
        ) : (
          <span style={{
            fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM,
            fontSize: fontSizes[24], lineHeight: lineHeights[29], color: TEXT_DEFAULT,
          }}>
            {cost}
          </span>
        )}
        <p style={{
          fontFamily: FONT, fontWeight: W_REGULAR,
          fontSize: fontSizes[14], lineHeight: lineHeights[17], color: TEXT_DARK, marginTop: 2,
        }}>
          {costLabel}
        </p>
      </div>
    )
  }

  // ── Default layout: chip below or beside the price block ──
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {/* Price + label */}
      {showChip ? (
        <div>
          <span style={{
            fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM,
            fontSize: fontSizes[24], lineHeight: lineHeights[29], color: TEXT_DEFAULT,
          }}>
            {cost}
          </span>
          <p style={{
            fontFamily: FONT, fontWeight: W_REGULAR,
            fontSize: fontSizes[14], lineHeight: lineHeights[17], color: TEXT_DARK, marginTop: 2,
          }}>
            {costLabel}
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: GAP_XXS }}>
          <span style={{
            fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM,
            fontSize: fontSizes[24], lineHeight: lineHeights[29], color: TEXT_DEFAULT,
          }}>
            {cost}
          </span>
          <span style={{
            fontFamily: FONT, fontWeight: W_REGULAR,
            fontSize: fontSizes[14], lineHeight: lineHeights[17], color: TEXT_DARK,
          }}>
            {costLabel}
          </span>
        </div>
      )}

      {/* Cost chip */}
      {chipEl}
    </div>
  )
}
