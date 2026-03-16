import type { ReactNode, HTMLAttributes } from 'react'

// ── NavBar ──────────────────────────────────────────────────
export interface NavBarProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** Left zone content — typically NavBar.Brand */
  left?: ReactNode
  /** Center zone content — typically NavBar.Tabs */
  center?: ReactNode
  /** Right zone content — free-form */
  right?: ReactNode
  /** Sticky positioning at top of viewport. Default: true */
  sticky?: boolean
  /** Max width of the inner content container (px). Default: 1200 */
  maxWidth?: number
  /** Enable responsive collapse below 1024px (hides center & right zones). Default: true */
  responsive?: boolean
  /** Content to show in the right zone on mobile/tablet (< 1024px). If omitted, right zone is fully hidden. */
  mobileRight?: ReactNode
}

// ── NavBar.Brand ────────────────────────────────────────────
export interface NavBarBrandProps {
  /** Logo element */
  logo: ReactNode
  /** Hamburger menu click handler. If omitted, hamburger is hidden */
  onMenuClick?: () => void
}

// ── NavBar.Tabs ─────────────────────────────────────────────
export interface NavBarTabsProps {
  /** Currently active tab value */
  value: string
  /** Called when a tab is clicked */
  onChange: (value: string) => void
  children: ReactNode
}

// ── NavBar.Tab ──────────────────────────────────────────────
export interface NavBarTabProps {
  /** Unique value identifying this tab */
  value: string
  children: ReactNode
}
