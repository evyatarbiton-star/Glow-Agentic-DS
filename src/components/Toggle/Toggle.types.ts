import type { InputHTMLAttributes } from 'react'

export type ToggleSize = 'default' | 'large'

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Whether the toggle is on */
  checked?: boolean
  /** Change handler — receives the native input event */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Disabled state — grey track, no interaction */
  disabled?: boolean
  /** Text label displayed to the right of the toggle */
  label?: string
  /** Form field name */
  name?: string
  /** Form field value */
  value?: string
  /** Toggle size — 'default' (44px track) or 'large' (52px track) */
  size?: ToggleSize
}
