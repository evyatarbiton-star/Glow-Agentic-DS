export interface ZoePromptChipProps {
  /** Display text for the prompt */
  text: string
  /** Optional emoji shown before the text */
  emoji?: string
  /** Click handler — sends the prompt as a message */
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}
