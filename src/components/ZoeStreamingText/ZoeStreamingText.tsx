// ZoeStreamingText — streaming text display with blinking cursor
import { useId } from 'react'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { typographyStyles } from '../../../tokens/semantic/typography'
import type { ZoeStreamingTextProps } from './ZoeStreamingText.types'

const TEXT_COLOR = sc.neutral.text.DEFAULT                     // #000000
const CURSOR_COLOR = sc.primary.surface.DEFAULT                // #fd5201
const PARAGRAPH_L = typographyStyles['paragraph-l']            // 18px/21px

export function ZoeStreamingText({
  text,
  isStreaming = false,
  className,
  style,
}: ZoeStreamingTextProps) {
  const id = useId().replace(/:/g, '')
  const blinkKf = `zoe-cursor-blink-${id}`

  const textStyle: React.CSSProperties = {
    fontFamily: PARAGRAPH_L.fontFamily,
    fontSize: PARAGRAPH_L.fontSize,
    lineHeight: PARAGRAPH_L.lineHeight,
    fontWeight: PARAGRAPH_L.fontWeight,
    letterSpacing: PARAGRAPH_L.letterSpacing,
    color: TEXT_COLOR,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    ...style,
  }

  const cursorStyle: React.CSSProperties = {
    display: 'inline-block',
    width: 2,
    height: '1em',
    backgroundColor: CURSOR_COLOR,
    marginLeft: 2,
    verticalAlign: 'text-bottom',
    borderRadius: 1,
    animation: `${blinkKf} 530ms step-end infinite`,
  }

  return (
    <>
      {isStreaming && (
        <style>{`@keyframes ${blinkKf} { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
      )}
      <span className={className} style={textStyle}>
        {text}
        {isStreaming && <span style={cursorStyle} aria-hidden="true" />}
      </span>
    </>
  )
}
