import type { InputHTMLAttributes } from 'react'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Whether the checkbox is checked */
  checked?: boolean
  /** Callback when checked state changes */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Disable all interactions */
  disabled?: boolean
  /** Text label displayed to the right of the checkbox */
  label?: string
  /** Input name attribute for form submission */
  name?: string
  /** Input value attribute */
  value?: string
  /** Indeterminate state — shows dash icon for "select all" patterns */
  indeterminate?: boolean
}
