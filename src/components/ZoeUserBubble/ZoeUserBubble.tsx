// ZoeUserBubble — Figma: node-id=741:89831
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../tokens/semantic/radii'
import type { ZoeUserBubbleProps } from './ZoeUserBubble.types'

const BUBBLE_BG = sc.neutral.surface.subtle                   // #f2f2f2
const TEXT_COLOR = sc.neutral.text.DEFAULT                     // #000000

const PADDING_X = semanticSpacing.m                            // 20px
const PADDING_Y = semanticSpacing.xs                           // 12px
const BORDER_RADIUS = semanticRadii.ln                         // 24px
const MAX_WIDTH = 450                                          // 450px
const PARAGRAPH_L = typographyStyles['paragraph-l']            // 18px/21px

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
    fontFamily: PARAGRAPH_L.fontFamily,
    fontSize: PARAGRAPH_L.fontSize,
    lineHeight: PARAGRAPH_L.lineHeight,
    fontWeight: PARAGRAPH_L.fontWeight,
    letterSpacing: PARAGRAPH_L.letterSpacing,
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
