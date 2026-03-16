import type { InputHTMLAttributes } from 'react'

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Whether this radio is selected */
  checked?: boolean
  /** Callback when selection changes */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Disable all interactions */
  disabled?: boolean
  /** Text label displayed to the right of the radio button */
  label?: string
  /** Input name attribute — groups radios for single-select behavior */
  name?: string
  /** Input value attribute */
  value?: string
}
