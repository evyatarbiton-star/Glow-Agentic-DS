// ============================================================
// GLOW DS — StarRating Types
// ============================================================

import type { IconSize } from '../Icon/Icon.types'

export interface StarRatingProps {
  /** Rating value (0–5). Supports decimals — rounds to nearest integer for star display. */
  rating: number

  /** Total number of stars. Default: 5 */
  maxStars?: number

  /** Icon size for each star. Default: 'sm' */
  size?: IconSize

  /** Show numeric value text (e.g., "4.8/5"). Default: false */
  showValue?: boolean

  /** Review count shown in parentheses (e.g., "(124)"). Only rendered if provided. */
  reviewCount?: number

  /** Color for filled stars. Default: accent-yellow.surface.selected (#ffd129) */
  filledColor?: string

  /** Color for empty stars. Default: neutral.surface.disabled (#d4d4d4) */
  emptyColor?: string

  /** Additional className for the root element */
  className?: string

  /** Additional inline styles for the root element */
  style?: React.CSSProperties
}
