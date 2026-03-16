import type { ReactNode, CSSProperties } from 'react'

// ── Direction ───────────────────────────────────────────────
// Describes where the ARROW appears on the tooltip panel.
// The panel is positioned on the opposite side of the trigger.
//
//   top-left   → arrow at top-left   → panel appears BELOW trigger, left-aligned
//   top-right  → arrow at top-right  → panel appears BELOW trigger, right-aligned
//   bottom-left  → arrow at bottom-left  → panel appears ABOVE trigger, left-aligned
//   bottom-right → arrow at bottom-right → panel appears ABOVE trigger, right-aligned
//   left  → arrow at left center  → panel appears to the RIGHT of trigger
//   right → arrow at right center → panel appears to the LEFT of trigger

export type TooltipDirection =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'

export type TooltipVariant = 'default' | 'rich'

export interface TooltipAction {
  /** Button label */
  label: string
  onClick?: () => void
}

export interface TooltipMedia {
  /** 'image' renders a static image; 'video' renders a video with poster frame */
  type: 'image' | 'video'
  src: string
  alt?: string
  /** Poster image for video (optional) */
  poster?: string
}

export interface TooltipLink {
  /** Text for the bottom link */
  label: string
  href?: string
  onClick?: () => void
}

export interface TooltipProps {
  // ── Required ───────────────────────────────────────────────
  /** Main body text */
  text: string

  // ── Content ────────────────────────────────────────────────
  /** Optional heading above the body text */
  title?: string
  /** Icon shown to the left of the content (16–20px recommended) */
  leftIcon?: ReactNode
  /** Media area — image or video preview (used with variant='rich') */
  media?: TooltipMedia
  /** Bottom text link (used with variant='rich') */
  link?: TooltipLink

  // ── Actions ────────────────────────────────────────────────
  /** Primary CTA — rendered as an outline button */
  primaryAction?: TooltipAction
  /** Secondary CTA — rendered as a ghost button */
  secondaryAction?: TooltipAction

  // ── Behavior ───────────────────────────────────────────────
  /**
   * variant='default' → semi-transparent dark overlay (rgba 0,0,0,0.72) with blur
   * variant='rich'    → solid #404040 panel, optimised for media content
   */
  variant?: TooltipVariant

  /**
   * Which edge of the panel the arrow sits on.
   * Determines where the panel is positioned relative to the trigger.
   * Default: 'top-left'
   */
  direction?: TooltipDirection

  /**
   * Controlled visibility.
   * Provide this together with `onClose` to use controlled mode.
   * In hover mode (no `onClose`), this prop is ignored.
   */
  open?: boolean

  /**
   * Providing `onClose` enables CONTROLLED mode:
   * - A close (×) button appears in the panel
   * - The panel stays visible until onClose is called
   * - `open` controls visibility
   *
   * Omitting `onClose` enables HOVER mode:
   * - No close button
   * - Panel shows on hover, hides when pointer leaves
   */
  onClose?: () => void

  // ── Layout ─────────────────────────────────────────────────
  /**
   * Trigger element.
   * If provided, the tooltip positions itself relative to this element.
   * If omitted, the panel renders standalone (useful for doc previews).
   */
  children?: ReactNode

  /** Override panel inline styles */
  panelStyle?: CSSProperties

  className?: string
}
