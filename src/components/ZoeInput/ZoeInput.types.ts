// ============================================================
// GLOW DS — ZoeInput Types
// Figma: Zoe UI — "Zoe text bar web" (node-id=12742:178974)
//
// The Zoe chat input bar — pill-shaped with Zoe branding icon,
// expandable textarea, send button, and optional prompt chips.
// ============================================================

export interface ZoeInputProps {
  /** Current input value (controlled) */
  value: string

  /** Change handler */
  onChange: (value: string) => void

  /** Submit handler — called when user presses Enter or clicks Send */
  onSubmit: (value: string) => void

  /** Placeholder text — default: "Ask Zoe anything..." */
  placeholder?: string

  /** Whether the input is disabled */
  disabled?: boolean

  /** Auto-focus on mount */
  autoFocus?: boolean

  /** Show the Zoe icon on the left in default state — default: true */
  showZoeIcon?: boolean

  /** Optional className for the outer wrapper */
  className?: string

  /** Optional inline styles for the outer wrapper */
  style?: React.CSSProperties
}
