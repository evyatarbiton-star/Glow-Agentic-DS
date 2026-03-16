import type { ReactNode, ButtonHTMLAttributes } from 'react'

export type IconButtonVariant = 'ghost' | 'outline'
export type IconButtonSize    = 'xs' | 'sm' | 'md' | 'lg'

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** The icon to render — must be a DS Icon component */
  icon: ReactNode
  /** Required accessible label (no visible text, so aria-label is mandatory) */
  'aria-label': string
  /** Visual variant — ghost (transparent) or outline (white + border) */
  variant?: IconButtonVariant
  /** Size tier — xs (28px) | sm (32px) | md (40px) | lg (48px) */
  size?: IconButtonSize
  /** Toggle pressed state — maps to aria-pressed for screen readers */
  pressed?: boolean
  /** Pill shape (borderRadius: 999px) — default true */
  pill?: boolean
  /** Show loading spinner and disable interaction */
  loading?: boolean
}
