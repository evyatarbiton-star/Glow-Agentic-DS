export type DatePickerSize  = 'sm' | 'md' | 'lg'
export type DatePickerShape = 'default' | 'rounded'

export interface DatePickerProps {
  /** Field label above the input */
  label?: string
  /** Helper text below the input */
  helperText?: string
  /** Show required asterisk (*) next to label */
  required?: boolean
  /** Show info icon next to label */
  showInfoIcon?: boolean

  /** Disabled state */
  disabled?: boolean
  /** Error state — red border + red helper text */
  error?: boolean

  /** Input height — sm (40px) | md (48px) | lg (56px) */
  size?: DatePickerSize
  /** Border shape — default (8px) | rounded (999px pill) */
  shape?: DatePickerShape

  /** Current value in display format "MM/DD/YYYY" */
  value?: string
  /** Fires on every keystroke and on calendar pick, with the display string */
  onChange?: (displayValue: string) => void
  /** Fires when a complete, valid Date is resolved (or null when cleared/invalid) */
  onDateChange?: (date: Date | null) => void

  /** Disable all calendar dates before this date */
  minDate?: Date
  /** Disable all calendar dates after this date */
  maxDate?: Date

  /** Form field name — renders a hidden input for form submission */
  name?: string
}
