import type { ReactNode, HTMLAttributes, MouseEvent } from 'react'

export type ChipVariant = 'subtle' | 'outline' | 'filled'
export type ChipColor   = 'neutral' | 'primary' | 'success' | 'error'
export type ChipSize    = 'sm' | 'md' | 'lg'

export interface ChipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Visual variant — subtle (soft fill) | outline (border) | filled (solid) */
  variant?: ChipVariant
  /** Color family — maps to semantic color tokens */
  color?: ChipColor
  /** Size — sm (28px) | md (32px) | lg (36px) */
  size?: ChipSize
  /** Selected / active state */
  selected?: boolean
  /** Show remove (X) button */
  removable?: boolean
  /** Callback when remove button is clicked */
  onRemove?: () => void
  /** Disable all interactions */
  disabled?: boolean
  /** Icon placed before label */
  iconLeft?: ReactNode
  /** Click handler — makes chip interactive with hover/press states */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  /** Chip label */
  children: ReactNode
}

export interface ChipGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Gap between chips in px — defaults to 8 (spacing.xxs) */
  gap?: number
  /** Allow wrapping to multiple lines */
  wrap?: boolean
  children: ReactNode
}
