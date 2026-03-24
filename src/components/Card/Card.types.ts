import type { ReactNode, HTMLAttributes } from 'react'

export type CardVariant = 'outline' | 'elevated' | 'filled'
export type CardRadius  = 'sm' | 'md' | 'lg'
export type CardPadding = 'sm' | 'md' | 'lg' | 'none'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual variant — outline (border), elevated (shadow), filled (subtle bg) */
  variant?: CardVariant
  /** Corner radius — sm (12px) | md (16px) | lg (24px) */
  radius?: CardRadius
  /** Inner padding — sm (16px) | md (20px) | lg (32px) | none (0px) */
  padding?: CardPadding
  /** Adds hover effect: shadow lift + translateY(-1px). Use for clickable cards. */
  interactive?: boolean
  /** Persistent highlight state — keeps hover shadow active (e.g., when a drawer is open for this card) */
  isActive?: boolean
  /** Semantic HTML element to render */
  as?: 'div' | 'article' | 'section' | 'a'
  children: ReactNode
}
