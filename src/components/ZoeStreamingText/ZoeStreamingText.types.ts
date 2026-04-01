export interface ZoeStreamingTextProps {
  /** The text to display (partial during streaming, full after) */
  text: string
  /** Whether streaming is active — shows blinking cursor */
  isStreaming?: boolean
  /** Optional className */
  className?: string
  /** Optional inline styles */
  style?: React.CSSProperties
}
