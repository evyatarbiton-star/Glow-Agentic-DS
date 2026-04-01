// ZoeResponseBubble — Figma: node-id=741:89831
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import ZoeDefaultIcon from '../Icon/icons/line/ZoeDefault'
import type { ZoeResponseBubbleProps } from './ZoeResponseBubble.types'

const TEXT_COLOR = sc.neutral.text.DEFAULT                     // #000000
const ICON_SIZE = 40                                           // 40px
const GAP = semanticSpacing.xxs                                // 8px
const PARAGRAPH_L = typographyStyles['paragraph-l']            // 18px/21px

export function ZoeResponseBubble({
  children,
  className,
  style,
}: ZoeResponseBubbleProps) {
  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: GAP,
    width: '100%',
    ...style,
  }

  const textStyle: React.CSSProperties = {
    fontFamily: PARAGRAPH_L.fontFamily,
    fontSize: PARAGRAPH_L.fontSize,
    lineHeight: PARAGRAPH_L.lineHeight,
    fontWeight: PARAGRAPH_L.fontWeight,
    letterSpacing: PARAGRAPH_L.letterSpacing,
    color: TEXT_COLOR,
  }

  return (
    <div className={className} style={wrapperStyle}>
      <ZoeDefaultIcon size={ICON_SIZE} />

      <div style={{ ...textStyle, width: '100%' }}>
        {children}
      </div>
    </div>
  )
}
