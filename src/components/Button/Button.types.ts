import type { ReactNode, ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'subtle' | 'ghost' | 'destructive'
export type ButtonSize    = 'xs' | 'sm' | 'md' | 'lg'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Visual variant — maps to Figma: Primary / Secondary / Tertiary 1 / Tertiary 2 / Link / (Destructive) */
  variant?: ButtonVariant
  /** Size — xs (36px) | sm (40px) | md (48px) | lg (56px) */
  size?: ButtonSize
  /** Pill shape — rounds corners to 999px */
  pill?: boolean
  /** Icon-only mode — renders as a square button with no text */
  iconOnly?: boolean
  /** Show loading spinner and disable interaction */
  loading?: boolean
  /** Stretch to fill container width */
  fullWidth?: boolean
  /** Icon placed before label */
  iconLeft?: ReactNode
  /** Icon placed after label */
  iconRight?: ReactNode
  children: ReactNode
}
