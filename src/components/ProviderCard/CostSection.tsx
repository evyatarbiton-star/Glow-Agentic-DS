import type React from 'react'
import type { CostLevel, CostVariant } from './ProviderCard.types'
import type { ChipColor } from '../Chip/Chip.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontFamilies, fontWeights, fontSizes, lineHeights } from '../../../tokens/primitive/typography'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { Chip } from '../Chip'
import ArrowDownLeftCrFrIcon from '../Icon/icons/solid/ArrowDownLeftCrFr'
import ArrowUpRightCrFrIcon from '../Icon/icons/solid/ArrowUpRightCrFr'
import DistributeHorizontalSolid from '../Icon/icons/solid/DistributeHorizontal'

// ============================================================
// CostSection — internal sub-component for ProviderCard
//
// Variant-driven: `costVariant` selects a preset which controls
// label, hint, chip visibility AND the typography treatment:
//
//   • 'cost'  style → Tiempos Headline Medium 20/24 (serif, hero)
//                     for what the user pays out of pocket
//                     (coinsurance, cost-no-comparison, copay-*)
//
//   • 'price' style → Founders Grotesk Medium 16/19 (sans, subdued)
//                     for what the provider charges before insurance
//                     (cost-unknown, not-covered, price-unknown)
//
// User-provided `costLabel` / `costHint` / `showCostChip` override
// the preset values. Within the `coinsurance` variant, `costLevel`
// controls the chip color; it is ignored for all other variants.
// ============================================================

type ChipConfig = {
  label: string
  chipColor: ChipColor
  Icon: typeof ArrowDownLeftCrFrIcon
}

const COST_CHIP_CONFIG: Record<Exclude<CostLevel, 'unknown'>, ChipConfig> = {
  lower:   { label: 'Lower cost',   chipColor: 'success', Icon: ArrowDownLeftCrFrIcon },
  typical: { label: 'Typical cost', chipColor: 'info',    Icon: DistributeHorizontalSolid },
  higher:  { label: 'Higher cost',  chipColor: 'error',   Icon: ArrowUpRightCrFrIcon },
}

type PriceStyle = 'cost' | 'price'
type VariantConfig = { label: string; hint?: string; showChip: boolean; priceStyle: PriceStyle }

const VARIANT_DEFAULTS: Record<CostVariant, VariantConfig> = {
  'coinsurance':         { label: 'Est. out-of-pocket cost',           showChip: true,  priceStyle: 'cost'  },
  'cost-unknown':        { label: 'Call to verify out-of-pocket cost', showChip: false, priceStyle: 'cost'  },
  'cost-no-comparison':  { label: 'Est. out-of-pocket cost',           showChip: false, priceStyle: 'cost'  },
  'copay-visit':         { label: 'Per visit',                         showChip: false, priceStyle: 'cost'  },
  'copay-procedure':     { label: 'Per procedure',                     showChip: false, priceStyle: 'cost'  },
  'not-covered':         { label: 'Without insurance', hint: 'Call to verify out-of-pocket cost', showChip: false, priceStyle: 'price' },
  'price-unknown':       { label: 'Est. service price', hint: 'Before insurance',                 showChip: false, priceStyle: 'price' },
  'hidden':              { label: '',                                  showChip: false, priceStyle: 'cost'  },
}

// ── Token constants ─────────────────────────────────────────
const FONT         = fontFamilies.default           // Founders Grotesk
const FONT_DISPLAY = fontFamilies.display           // Tiempos Headline
const W_REGULAR    = fontWeights.regular            // 400
const W_MEDIUM     = fontWeights.medium             // 500
const TEXT_DEFAULT = sc.neutral.text.DEFAULT        // #000000
const GAP_XXXS     = parseInt(semanticSpacing.xxxs) // 4px
const GAP_XXS      = parseInt(semanticSpacing.xxs)  // 8px
const GAP_XS       = parseInt(semanticSpacing.xs)   // 12px

// ── Typography presets per price-style ──────────────────────
//   Mapped directly from Figma (node 5815:112757):
//   • cost  → Tiempos Medium 20/24 value, Founders Regular 14/17 label
//   • price → Founders Medium 16/19 value, Founders Medium 16/19 label

const VALUE_STYLE: Record<PriceStyle, React.CSSProperties> = {
  cost: {
    fontFamily: FONT_DISPLAY, fontWeight: W_MEDIUM,
    fontSize: fontSizes[20], lineHeight: lineHeights[24], color: TEXT_DEFAULT,
  },
  price: {
    fontFamily: FONT, fontWeight: W_MEDIUM,
    fontSize: fontSizes[16], lineHeight: lineHeights[19], color: TEXT_DEFAULT,
  },
}

const LABEL_STYLE: Record<PriceStyle, React.CSSProperties> = {
  cost: {
    fontFamily: FONT, fontWeight: W_REGULAR,
    fontSize: fontSizes[14], lineHeight: lineHeights[17], color: TEXT_DEFAULT,
  },
  price: {
    fontFamily: FONT, fontWeight: W_MEDIUM,
    fontSize: fontSizes[16], lineHeight: lineHeights[19], color: TEXT_DEFAULT,
  },
}

const HINT_STYLE: React.CSSProperties = {
  fontFamily: FONT, fontWeight: W_REGULAR,
  fontSize: fontSizes[14], lineHeight: lineHeights[17], color: TEXT_DEFAULT,
}

interface CostSectionProps {
  cost: string
  /** Chip color within the `coinsurance` variant. Ignored for other variants. */
  costLevel?: CostLevel
  /** Variant preset — drives label + hint + chip visibility + typography. Default 'coinsurance'. */
  costVariant?: CostVariant
  costLabel?: React.ReactNode
  costChipLabel?: string
  showCostChip?: boolean
  /** Hide the icon inside the cost chip */
  costChipHideIcon?: boolean
  /** Place cost chip inline with the price (used in horizontal layout) */
  chipInline?: boolean
  /** Optional hint text below the price, e.g. "Before insurance" */
  costHint?: React.ReactNode
}

export function CostSection({
  cost,
  costLevel,
  costVariant = 'coinsurance',
  costLabel: costLabelProp,
  costChipLabel,
  showCostChip: showCostChipProp,
  costChipHideIcon = false,
  chipInline = false,
  costHint: costHintProp,
}: CostSectionProps) {
  const variant = VARIANT_DEFAULTS[costVariant]
  const isPriceStyle = variant.priceStyle === 'price'

  // Resolve label/hint/chip visibility — user prop wins, variant default fallback
  const costLabel = costLabelProp ?? variant.label
  const costHint = costHintProp ?? variant.hint
  const resolvedShowChip = showCostChipProp ?? variant.showChip

  // Chip only renders for coinsurance variant + valid costLevel
  const isCoinsurance = costVariant === 'coinsurance'
  const rawChip = isCoinsurance && costLevel && costLevel !== 'unknown'
    ? COST_CHIP_CONFIG[costLevel]
    : null
  const chip = rawChip && costChipLabel ? { ...rawChip, label: costChipLabel } : rawChip
  const showChip = resolvedShowChip && chip

  const valueEl = <span style={VALUE_STYLE[variant.priceStyle]}>{cost}</span>

  const labelEl = costLabel ? (
    <p style={{ ...LABEL_STYLE[variant.priceStyle], marginTop: isPriceStyle ? 0 : GAP_XXXS }}>
      {costLabel}
    </p>
  ) : null

  const hintEl = costHint ? (
    <p style={{ ...HINT_STYLE, marginTop: GAP_XXXS }}>
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

  // ── Horizontal layout with chip inline (coinsurance only) ──
  if (chipInline) {
    return (
      <div>
        {showChip ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: GAP_XS, justifyContent: 'flex-end' }}>
            {chipEl}
            {valueEl}
          </div>
        ) : (
          valueEl
        )}
        {labelEl}
        {hintEl}
      </div>
    )
  }

  // ── Vertical layout with chip on the right ─────────────────
  if (showChip) {
    return (
      <div style={{ display: 'flex', alignItems: costHint ? 'flex-start' : 'center', justifyContent: 'space-between', gap: GAP_XXS }}>
        <div>
          {valueEl}
          {labelEl}
          {hintEl}
        </div>
        {chipEl}
      </div>
    )
  }

  // ── Stacked (no chip) — used by all price variants + copays + no-comparison ──
  return (
    <div>
      {valueEl}
      {labelEl}
      {hintEl}
    </div>
  )
}
