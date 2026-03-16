import type { InputHTMLAttributes, ReactNode } from 'react'

export type TextInputSize = 'sm' | 'md' | 'lg'
export type TextInputShape = 'default' | 'rounded'

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label displayed above the input */
  label?: string
  /** Placeholder text when empty */
  placeholder?: string
  /** Current input value */
  value?: string
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Disabled state — grey background, no interaction */
  disabled?: boolean
  /** Error state — red border + red helper text */
  error?: boolean
  /** Helper text displayed below the input */
  helperText?: string
  /** Show required asterisk (*) next to label */
  required?: boolean
  /** Input size — sm (40px) | md (48px) | lg (56px) */
  size?: TextInputSize
  /** Border shape — default (8px radius) | rounded (999px pill) */
  shape?: TextInputShape
  /** Icon on the left side of the input */
  iconLeft?: ReactNode
  /** Icon on the right side of the input */
  iconRight?: ReactNode
  /** Show info icon next to label */
  showInfoIcon?: boolean
  /** Form field name */
  name?: string
}
