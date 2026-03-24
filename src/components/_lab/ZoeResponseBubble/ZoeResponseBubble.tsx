// ============================================================
// GLOW DS — ZoeResponseBubble
// Figma: Zoe UI — "Zoe Response Bubble" (node-id=741:89831)
//
// The Zoe AI response bubble in the Zoe conversation.
// Zoe icon on top, response content below.
// No background, no border — just icon + text in a vertical stack.
// ============================================================

import { semanticColors as sc } from '../../../../tokens/semantic/colors'
import { typographyStyles } from '../../../../tokens/semantic/typography'
import { semanticSpacing } from '../../../../tokens/semantic/spacing'
import ZoeDefaultIcon from '../../Icon/icons/line/ZoeDefault'
import type { ZoeResponseBubbleProps } from './ZoeResponseBubble.types'

// ── Token Constants ─────────────────────────────────────────
const TEXT_COLOR = sc.neutral.text.DEFAULT                     // #000000 — neutral text default
const ICON_SIZE = 40                                           // Zoe icon size
const GAP = semanticSpacing.xxs                                // 8px — spacing.xxs
const PARAGRAPH_L = typographyStyles['paragraph-l']            // 18px / 21px — paragraph/large

export function ZoeResponseBubble({
  children,
  className,
  style,
}: ZoeResponseBubbleProps) {
  // ── Wrapper: vertical flex column, left-aligned ───────────
  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: GAP,                                                  // spacing.xxs = 8px
    width: '100%',                                             // fill parent so children (cards, etc.) can expand
    ...style,
  }

  // ── Text wrapper: paragraph-l typography ──────────────────
  const textStyle: React.CSSProperties = {
    fontFamily: PARAGRAPH_L.fontFamily,                        // Founders Grotesk, sans-serif
    fontSize: PARAGRAPH_L.fontSize,                            // 18px
    lineHeight: PARAGRAPH_L.lineHeight,                        // 21px
    fontWeight: PARAGRAPH_L.fontWeight,                        // 400
    letterSpacing: PARAGRAPH_L.letterSpacing,                  // 0px
    color: TEXT_COLOR,                                         // neutral.text.DEFAULT
  }

  return (
    <div className={className} style={wrapperStyle}>
      {/* Zoe icon — 40px */}
      <ZoeDefaultIcon size={ICON_SIZE} />

      {/* Response content with paragraph-l typography */}
      <div style={{ ...textStyle, width: '100%' }}>
        {children}
      </div>
    </div>
  )
}
