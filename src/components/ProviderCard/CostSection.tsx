import type React from 'react'
import type { CostLevel } from './ProviderCard.types'
import type { ChipColor } from '../Chip/Chip.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontFamilies, fontWeights, fontSizes, lineHeights } from '../../../tokens/primitive/typography'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { Chip } from '../Chip'
import ArrowDownLeftCrFrIcon from '../Icon/icons/solid/ArrowDownLeftCrFr'
import ArrowUpRightCrFrIcon from '../Icon/icons/solid/ArrowUpRightCrFr'
import DistributeHorizontalSolid from '../Icon/icons/solid/DistributeHorizontal'
import FileInfoIcon from '../Icon/icons/solid/FileInfo'

// CostSection — internal sub-component for ProviderCard
type ChipConfig = {
  label: string
  chipColor: ChipColor
  Icon: typeof ArrowDownLeftCrFrIcon
}

const COST_CHIP_CONFIG: Record<CostLevel, ChipConfig> = {
  lower:   { label: 'Lower cost',       chipColor: 'success', Icon: ArrowDownLeftCrFrIcon },
  typical: { label: 'Typical cost',      chipColor: 'info',    Icon: DistributeHorizontalSolid },
  higher:  { label: 'Higher cost',       chipColor: 'error',   Icon: ArrowUpRightCrFrIcon },
  unknown: { label: 'Unknown cost est',  chipColor: 'neutral', Icon: FileInfoIcon },
}

const FONT         = fontFamilies.default        // Founders Grotesk
const FONT_DISPLAY = fontFamilies.display        // Tiempos Headline
const W_REGULAR    = fontWeights.regular         // 400
const W_MEDIUM     = fontWeights.medium          // 500
const TEXT_DEFAULT = sc.neutral.text.DEFAULT      // #000000
const TEXT_DARK    = sc.neutral.text.dark         // #404040
const TEXT_LIGHT   = sc.neutral.text.light        // #8a8a8a
const GAP_XXS      = parseInt(semanticSpacing.xxs)  // 8px

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
  /** Optional hint text below the price, e.g. "Call provider for an exact estimate" */
  costHint?: React.ReactNode
}

export function CostSection({
  cost,
  costLevel,
  costLabel: costLabelProp,
  costChipLabel,
  showCostChip = true,
  costChipHideIcon = false,
  chipInline = false,
  costHint,
}: CostSectionProps) {
  // Default cost label: "Call to verify out-of-pocket cost" for unknown, "est. out-of-pocket" otherwise
  const costLabel = costLabelProp ?? (costLevel === 'unknown' ? 'Call to verify out-of-pocket cost' : 'est. out-of-pocket')

  const rawChip = costLevel ? COST_CHIP_CONFIG[costLevel] : null
  const chip = rawChip && costChipLabel ? { ...rawChip, label: costChipLabel } : rawChip
  const showChip = showCostChip && chip

  const hintEl = costHint ? (
    <p style={{
      fontFamily: FONT, fontWeight: W_REGULAR,
      fontSize: fontSizes[13], lineHeight: lineHeights[16],
      color: TEXT_LIGHT, marginTop: 2,
    }}>
      {costHint}
    </p>
  ) : null

  const chipEl = showChip ? (
    <Chip
      color={chip.chipColor}
      variant="subtle"
      size="sm"
      iconLeft={!costChipHideIcon ? <chip.Icon size="sm" /> : undefined}
    >
      {chip.label}
    </Chip>
  ) : null

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
        {hintEl}
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: costHint ? 'flex-start' : 'center', justifyContent: 'space-between', gap: GAP_XXS }}>
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
          {hintEl}
        </div>
      ) : (
        <div>
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
          {hintEl}
        </div>
      )}

      {chipEl}
    </div>
  )
}
