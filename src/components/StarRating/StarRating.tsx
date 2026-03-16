// ============================================================
// GLOW DS — StarRating Component
// Displays a row of filled/empty stars with optional rating text.
//
// Usage:
//   <StarRating rating={4.8} showValue reviewCount={124} />
//   → ★★★★★ 4.8/5 (124)
//
//   <StarRating rating={3} size="md" />
//   → ★★★☆☆
// ============================================================

import type { StarRatingProps } from './StarRating.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { fontFamilies, fontSizes, fontWeights } from '../../../tokens/primitive/typography'
import StarSolid from '../Icon/icons/solid/Star'

// ── Token Constants ─────────────────────────────────────────
const DEFAULT_FILLED = sc['accent-yellow'].surface.selected  // #ffd129
const DEFAULT_EMPTY  = sc.neutral.surface.disabled           // #d4d4d4
const TEXT_COLOR     = sc.neutral.text.light                 // #8a8a8a
const FONT           = fontFamilies.default
const FONT_SIZE      = fontSizes[13]                         // 13px
const FONT_WEIGHT    = fontWeights.regular                   // 400
const TEXT_GAP       = parseInt(semanticSpacing.xxs)         // 8px — gap before text

// ── Component ───────────────────────────────────────────────
export function StarRating({
  rating,
  maxStars = 5,
  size = 'sm',
  showValue = false,
  reviewCount,
  filledColor = DEFAULT_FILLED,
  emptyColor = DEFAULT_EMPTY,
  className = '',
  style,
}: StarRatingProps) {
  const rounded = Math.round(Math.min(Math.max(rating, 0), maxStars))

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        ...style,
      }}
    >
      {/* Stars */}
      {Array.from({ length: maxStars }, (_, i) => (
        <StarSolid
          key={i}
          size={size}
          color={i < rounded ? filledColor : emptyColor}
        />
      ))}

      {/* Optional text: "4.8/5 (124)" */}
      {(showValue || reviewCount != null) && (
        <span
          style={{
            marginLeft: TEXT_GAP,
            fontFamily: FONT,
            fontSize: FONT_SIZE,
            fontWeight: FONT_WEIGHT,
            color: TEXT_COLOR,
            lineHeight: 1,
          }}
        >
          {showValue && `${rating}/${maxStars}`}
          {reviewCount != null && `${showValue ? ' ' : ''}(${reviewCount})`}
        </span>
      )}
    </div>
  )
}
