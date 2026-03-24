// ============================================================
// GLOW DS — ZoeUserBubble
// Figma: Zoe UI — "User text" (node-id=741:89831)
//
// The user's chat message bubble in the Zoe conversation.
// Light grey pill with left-aligned text, right-aligned in layout.
// Max width 450px — text wraps naturally beyond that.
// ============================================================

import { semanticColors as sc } from '../../../../tokens/semantic/colors'
import { typographyStyles } from '../../../../tokens/semantic/typography'
import { semanticSpacing } from '../../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../../tokens/semantic/radii'
import type { ZoeUserBubbleProps } from './ZoeUserBubble.types'

// ── Token Constants ─────────────────────────────────────────
const BUBBLE_BG = sc.neutral.surface.subtle                   // #f2f2f2 — grey/50
const TEXT_COLOR = sc.neutral.text.DEFAULT                     // #000000

const PADDING_X = semanticSpacing.m                            // 20px — spacing.m
const PADDING_Y = semanticSpacing.xs                           // 12px — spacing.xs
const BORDER_RADIUS = semanticRadii.ln                         // 24px — corner-radius/l
const MAX_WIDTH = 450                                          // max bubble width (no token)
const PARAGRAPH_L = typographyStyles['paragraph-l']            // 18px / 21px — paragraph/large

export function ZoeUserBubble({
  text,
  className,
  style,
}: ZoeUserBubbleProps) {
  const bubbleStyle: React.CSSProperties = {
    display: 'inline-block',
    maxWidth: MAX_WIDTH,
    paddingLeft: PADDING_X,
    paddingRight: PADDING_X,
    paddingTop: PADDING_Y,
    paddingBottom: PADDING_Y,
    background: BUBBLE_BG,
    borderRadius: BORDER_RADIUS,
    fontFamily: PARAGRAPH_L.fontFamily,                        // Founders Grotesk, sans-serif
    fontSize: PARAGRAPH_L.fontSize,                            // 18px
    lineHeight: PARAGRAPH_L.lineHeight,                        // 21px
    fontWeight: PARAGRAPH_L.fontWeight,                        // 400
    letterSpacing: PARAGRAPH_L.letterSpacing,                  // 0px
    color: TEXT_COLOR,
    wordBreak: 'break-word',
    ...style,
  }

  return (
    <div className={className} style={bubbleStyle}>
      {text}
    </div>
  )
}
