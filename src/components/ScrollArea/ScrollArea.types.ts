// ============================================================
// GLOW DS — ScrollArea Types
// A styled scroll container with thin, light scrollbars.
// Supports horizontal, vertical, or both directions.
// ============================================================

export type ScrollDirection = 'horizontal' | 'vertical' | 'both'

export interface ScrollAreaProps {
  /** Scroll direction — controls which axis is scrollable */
  direction?: ScrollDirection

  /** Optional max-height constraint (vertical or both) */
  maxHeight?: number | string

  /** Optional max-width constraint (horizontal or both) */
  maxWidth?: number | string

  /** Gap between children — useful for card lists and carousels */
  gap?: number

  /** Enable CSS scroll-snap on the scroll axis */
  snap?: boolean

  /** Scroll-snap alignment for children — 'start' | 'center' | 'end' */
  snapAlign?: 'start' | 'center' | 'end'

  /** Hide scrollbar entirely (content still scrollable) */
  hideScrollbar?: boolean

  /** Additional inline styles for the scroll container */
  style?: React.CSSProperties

  /** Additional className for the scroll container */
  className?: string

  /** Content */
  children: React.ReactNode
}
