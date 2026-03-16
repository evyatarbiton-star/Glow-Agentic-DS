import type { ReactNode } from 'react'

export type SelectSize = 'sm' | 'md' | 'lg'
export type SelectShape = 'default' | 'rounded'

export interface SelectOption {
  /** Option value (used in onChange callback) */
  value: string
  /** Display label */
  label: string
  /** Disable this individual option */
  disabled?: boolean
  /** Icon on the left side of the option */
  iconLeft?: ReactNode
  /** Additional info text, right-aligned (e.g., price, count) */
  additionalInfo?: string
}

export interface SelectProps {
  /** Array of options to display */
  options: SelectOption[]
  /** Currently selected value */
  value?: string
  /** Callback when selection changes — receives the selected value string */
  onChange?: (value: string) => void
  /** Placeholder text when nothing is selected */
  placeholder?: string
  /** Field label displayed above the trigger */
  label?: string
  /** Helper text displayed below the trigger */
  helperText?: string
  /** Show required asterisk (*) next to label */
  required?: boolean
  /** Disabled state — grey background, no interaction */
  disabled?: boolean
  /** Error state — red border + red helper text */
  error?: boolean
  /** Trigger height — sm (40px) | md (48px) | lg (56px) */
  size?: SelectSize
  /** Border shape — default (8px radius) | rounded (999px pill) */
  shape?: SelectShape
  /** Icon on the left side of the trigger */
  iconLeft?: ReactNode
  /** Show info icon next to label */
  showInfoIcon?: boolean
  /** Form field name */
  name?: string
  /** Max visible options before scroll (default: 6) */
  maxVisibleOptions?: number

  // ── Search variant ──────────────────────────────────────
  /** Enable search/filter input in the dropdown */
  searchable?: boolean
  /** Placeholder for the search input (default: 'Search...') */
  searchPlaceholder?: string

  // ── Multi-select variant ────────────────────────────────
  /** Enable multi-select mode — selections shown as tag chips */
  multiple?: boolean
  /** Currently selected values (multi-select mode) */
  multiValue?: string[]
  /** Callback when multi-selection changes */
  onMultiChange?: (values: string[]) => void

  // ── Custom trigger ──────────────────────────────────────
  /** Custom render for trigger content (e.g., logo + text). Chevron is still rendered by Select. */
  renderTrigger?: (selected: SelectOption | SelectOption[] | undefined) => ReactNode
}
