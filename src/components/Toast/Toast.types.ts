import type { ReactNode } from 'react'

// ── Toast variants by intent ───────────────────────────────
export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info'

// ── Action button config ───────────────────────────────────
export interface ToastAction {
  label: string
  onClick: () => void
}

// ── Toast component props ──────────────────────────────────
export interface ToastProps {
  /** The message text displayed in the toast */
  message: string

  /** Visual intent variant — controls the left icon */
  variant?: ToastVariant

  /** Optional left icon override — replaces the default variant icon */
  iconLeft?: ReactNode

  /** Hide the left icon entirely */
  hideIcon?: boolean

  /** Optional action button (e.g. "Retry", "Undo") */
  action?: ToastAction

  /** Show the close (X) button — default true */
  showClose?: boolean

  /** Called when the close button is clicked */
  onClose?: () => void

  /** Auto-dismiss duration in ms — 0 to disable. Default: 5000 */
  duration?: number

  /** Whether the toast is currently visible */
  open?: boolean

  /** Additional className */
  className?: string
}
