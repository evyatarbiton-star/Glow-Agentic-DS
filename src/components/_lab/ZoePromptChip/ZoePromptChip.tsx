// ============================================================
// GLOW DS — ZoePromptChip
// Figma: Zoe UI — "Promt" (node-id=12742:31877)
//
// A suggested follow-up action chip in the Zoe conversation.
// Appears in the welcome screen and after Zoe responses.
// Clicking sends the text as a user message directly (bypasses input).
//
// Design: frosted glass card — semi-transparent white bg, subtle
// shadow, rounded-16 corners. NOT a pill shape.
// ============================================================

import { useState } from 'react'
import { semanticColors as sc } from '../../../../tokens/semantic/colors'
import { typographyStyles } from '../../../../tokens/semantic/typography'
import { semanticSpacing } from '../../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../../tokens/semantic/radii'
import type { ZoePromptChipProps } from './ZoePromptChip.types'

// ── Token Constants ─────────────────────────────────────────
const BG_DEFAULT = 'rgba(255, 255, 255, 0.5)'                  // Frosted glass — semi-transparent white
const BG_HOVER = 'rgba(255, 255, 255, 0.85)'                   // More opaque on hover
const SHADOW_DEFAULT = '0px 2px 8px rgba(0, 0, 0, 0.08)'       // Card/Default shadow
const SHADOW_HOVER = '0px 4px 12px rgba(0, 0, 0, 0.12)'        // Slightly stronger on hover
const PADDING_H = semanticSpacing.l                              // 24px — horizontal
const PADDING_V = semanticSpacing.xs                             // 12px — vertical
const BORDER_RADIUS = semanticRadii.sn                           // 16px — NOT pill
const TEXT_COLOR = sc.neutral.text.DEFAULT                       // #000000
const PARAGRAPH_L = typographyStyles['paragraph-l']              // 18px / 21px

export function ZoePromptChip({
  text,
  emoji,
  onClick,
  className,
  style,
}: ZoePromptChipProps) {
  const [isHovered, setIsHovered] = useState(false)

  const chipStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0,
    padding: `${PADDING_V} ${PADDING_H}`,
    background: isHovered ? BG_HOVER : BG_DEFAULT,
    borderRadius: BORDER_RADIUS,
    boxShadow: isHovered ? SHADOW_HOVER : SHADOW_DEFAULT,
    border: 'none',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'background-color 150ms ease, box-shadow 150ms ease',
    fontFamily: PARAGRAPH_L.fontFamily,
    fontSize: PARAGRAPH_L.fontSize,
    lineHeight: PARAGRAPH_L.lineHeight,
    fontWeight: PARAGRAPH_L.fontWeight,
    letterSpacing: PARAGRAPH_L.letterSpacing,
    color: TEXT_COLOR,
    whiteSpace: 'nowrap',
    ...style,
  }

  return (
    <button
      className={className}
      style={chipStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="button"
    >
      {emoji && <span>{emoji}&nbsp;&nbsp;</span>}
      <span>{text}</span>
    </button>
  )
}
