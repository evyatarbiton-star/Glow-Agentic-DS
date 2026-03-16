import type { ReactNode } from 'react'

export type ModalSize = 'sm' | 'md' | 'lg'

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean
  /** Called when the modal should close (X button, backdrop click, Escape) */
  onClose: () => void
  /** Header title text */
  title: string
  /** Width preset — sm (480px) | md (600px) | lg (708px) */
  size?: ModalSize
  /** Show a back (chevron-left) button on the left side of the header */
  showBackButton?: boolean
  /** Called when the back button is clicked */
  onBack?: () => void
  /** Close when clicking the backdrop overlay. Default true */
  closeOnBackdropClick?: boolean
  /** Close when pressing Escape. Default true */
  closeOnEscape?: boolean
  /** Modal body content (scrollable) */
  children: ReactNode
  /** Fully custom footer — overrides footerActions/footerLeft */
  footer?: ReactNode
  /** Shorthand: buttons rendered right-aligned in the footer */
  footerActions?: ReactNode
  /** Optional left-side content in the footer (checkbox, text, etc.) */
  footerLeft?: ReactNode
}
