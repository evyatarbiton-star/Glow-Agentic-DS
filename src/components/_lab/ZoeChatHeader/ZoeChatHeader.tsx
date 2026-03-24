// ============================================================
// GLOW DS — ZoeChatHeader
// Figma: Zoe UI — "Chat" (node-id=497:28402)
//
// Sticky gradient header for the Zoe chat screen. Contains a
// close button (returns to home). Background fades from white
// to transparent so scrolled content shows through.
//
// Usage: place as first child inside the scroll area.
// ============================================================

import { semanticColors as sc } from '../../../../tokens/semantic/colors'
import { semanticSpacing } from '../../../../tokens/semantic/spacing'
import { IconButton } from '../../IconButton/IconButton'
import CloseLine from '../../Icon/icons/line/Close'
import type { ZoeChatHeaderProps } from './ZoeChatHeader.types'

// ── Token Constants ─────────────────────────────────────────
const BG_COLOR = sc.neutral.surface.negative                   // #ffffff — gradient start
const PADDING_Y = semanticSpacing.s                            // 16px — top & bottom
const PADDING_X = semanticSpacing.l                            // 24px — left & right
const Z_INDEX = 10                                             // above scroll content

// Build gradient from token (white → transparent, fade ends at 70% of header height)
const GRADIENT = `linear-gradient(to bottom, ${BG_COLOR} 40%, transparent 100%)`

export function ZoeChatHeader({
  onClose,
  className,
  style,
}: ZoeChatHeaderProps) {
  const wrapperStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: Z_INDEX,
    background: GRADIENT,
    padding: `${PADDING_Y} ${PADDING_X}`,                          // 16px top/bottom, 24px sides
    pointerEvents: 'none',                                     // gradient area doesn't block scroll
    ...style,
  }

  const buttonWrapStyle: React.CSSProperties = {
    pointerEvents: 'auto',                                     // button itself is clickable
    display: 'inline-flex',
  }

  return (
    <div className={className} style={wrapperStyle}>
      <div style={buttonWrapStyle}>
        <IconButton
          variant="outline"
          size="md"
          icon={<CloseLine size="md" />}
          aria-label="Close Zoe chat"
          onClick={onClose}
        />
      </div>
    </div>
  )
}
