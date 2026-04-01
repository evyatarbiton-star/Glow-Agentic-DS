// ZoeChatHeader — Figma: node-id=497:28402
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { IconButton } from '../IconButton/IconButton'
import CloseLine from '../Icon/icons/line/Close'
import type { ZoeChatHeaderProps } from './ZoeChatHeader.types'

const BG_COLOR = sc.neutral.surface.negative                   // #ffffff
const PADDING_Y = semanticSpacing.s                            // 16px
const PADDING_X = semanticSpacing.l                            // 24px
const Z_INDEX = 10

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
    padding: `${PADDING_Y} ${PADDING_X}`,
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
