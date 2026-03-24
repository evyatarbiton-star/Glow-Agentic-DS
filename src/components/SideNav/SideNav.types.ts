import type { ReactNode } from 'react'

// ============================================================
// GLOW DS — SideNav Types
// ============================================================

export interface SideNavProps {
  /** Whether the side nav is open */
  open: boolean
  /** Called when the side nav should close (backdrop click, Escape, close button) */
  onClose: () => void
  /** Close when clicking the backdrop (default: true) */
  closeOnBackdropClick?: boolean
  /** Close when pressing Escape (default: true) */
  closeOnEscape?: boolean
  /** Side nav content — use SideNav compound components */
  children: ReactNode
}

export interface SideNavProfileProps {
  /** User's display name */
  name: string
  /** Company name shown below the user name */
  companyName?: string
  /** Company logo — ReactNode (img or SVG) */
  companyLogo?: ReactNode
}

export interface SideNavSectionProps {
  /** Section content — SideNav.NavItem, SideNav.ToolItem, etc. */
  children: ReactNode
}

export interface SideNavNavItemProps {
  /** Navigation label */
  label: string
  /** Click handler */
  onClick?: () => void
  /** Whether this item is expandable (shows chevron) */
  expandable?: boolean
  /** Whether the expanded section is open (controlled) */
  expanded?: boolean
  /** Called when expand/collapse is toggled */
  onExpandChange?: (expanded: boolean) => void
  /** Sub-items (SideNav.SubItem) rendered when expanded */
  children?: ReactNode
}

export interface SideNavSubItemProps {
  /** Sub-item label */
  label: string
  /** Click handler */
  onClick?: () => void
}

export interface SideNavToolItemProps {
  /** Thumbnail element (icon, image, or ReactNode) — 56×56 rounded */
  thumbnail: ReactNode
  /** Tool title */
  title: string
  /** Tool description */
  description: string
  /** Click handler */
  onClick?: () => void
  /** Optional trailing icon (e.g. external link arrow) */
  trailingIcon?: ReactNode
}

export interface SideNavAppDownloadProps {
  /** QR code image source URL */
  qrImageUrl?: string
  /** Custom QR code element (overrides qrImageUrl) */
  qrElement?: ReactNode
  /** Title text (default: "Download the Healthee app") */
  title?: string
  /** Show Apple store icon (default: true) */
  showApple?: boolean
  /** Show Android store icon (default: true) */
  showAndroid?: boolean
  /** Click handler for Apple store icon */
  onAppleClick?: () => void
  /** Click handler for Android store icon */
  onAndroidClick?: () => void
  /** Click handler for the entire banner */
  onClick?: () => void
}

export interface SideNavFooterProps {
  /** Footer content — SideNav.AppDownload, SideNav.FooterItem, etc. */
  children: ReactNode
}

export interface SideNavFooterItemProps {
  /** Footer item label */
  label: string
  /** Click handler */
  onClick?: () => void
  /** Optional right-side element (e.g. "EN ▾" for language, arrow for external link) */
  right?: ReactNode
}
