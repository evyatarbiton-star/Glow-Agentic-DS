export interface ZoeThinkingLoaderProps {
  /** Whether Zoe is currently "thinking" (waiting for response) */
  isThinking: boolean
  /** Custom message sets — each set is an array of 3 strings.
   *  One set is chosen randomly per cycle. Defaults to built-in sets. */
  messageSets?: string[][]
  /** Delay before animation starts (ms). Default: 0 (immediate) */
  delay?: number
  /** Whether to render the spinning Zoe icon. Default: true.
   *  Set false when the parent provides its own icon (e.g. chat demo). */
  showIcon?: boolean
  /** Called when the exit animation completes and the loader unmounts.
   *  Useful for transitioning from thinking state to response display. */
  onExitComplete?: () => void
  /** Optional className for the outer wrapper */
  className?: string
  /** Optional inline styles */
  style?: React.CSSProperties
}
