export interface ZoeDrawerProps {
  /** Whether the drawer is open */
  open: boolean
  /** Called when the drawer should close (X button, backdrop click, Escape) */
  onClose: () => void
  /** Header title */
  title: string
  /** Optional subtitle below the title */
  subtitle?: string
  /** Sticky footer content (typically action buttons) */
  footer?: React.ReactNode
  /** Scrollable body content */
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}
