import type { CardProps, CardVariant, CardRadius, CardPadding } from './Card.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticRadii } from '../../../tokens/semantic/radii'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { primitiveShadows } from '../../../tokens/primitive/shadows'

// Card Component

type VariantDef = {
  bg: string
  border: string
  borderWidth: number
  shadow: string
}

const variantDefs: Record<CardVariant, VariantDef> = {
  outline: {
    bg: sc.neutral.surface.negative,              // #ffffff
    border: sc.neutral.border.strong,              // #e0e0e0
    borderWidth: 1,
    shadow: primitiveShadows.none,                 // none
  },
  elevated: {
    bg: sc.neutral.surface.negative,              // #ffffff
    border: 'transparent',
    borderWidth: 0,
    shadow: primitiveShadows.card,                 // 0px 2px 8px rgba(0,0,0,0.08)
  },
  filled: {
    bg: sc.neutral.surface.subtle,                // #f2f2f2
    border: 'transparent',
    borderWidth: 0,
    shadow: primitiveShadows.none,                 // none
  },
}

const radii: Record<CardRadius, number> = {
  sm: parseInt(semanticRadii.xs),                  // 12px
  md: parseInt(semanticRadii.sn),                  // 16px
  lg: parseInt(semanticRadii.ln),                  // 24px
}

const paddings: Record<CardPadding, number> = {
  none: 0,
  sm: parseInt(semanticSpacing.s),                 // 16px
  md: parseInt(semanticSpacing.m),                 // 20px
  lg: parseInt(semanticSpacing.xl),                // 32px
}

const HOVER_SHADOW = primitiveShadows.lg            // 0px 4px 16px rgba(0,0,0,0.10)

// Focus ring (a11y — matches Button pattern)
const FOCUS_RING_COLOR = sc.neutral.border.light    // #ededed
const FOCUS_RING_WIDTH = 2

export function Card({
  variant     = 'outline',
  radius      = 'lg',
  padding     = 'md',
  interactive = false,
  isActive    = false,
  as          = 'div',
  children,
  className   = '',
  style: styleProp,
  ...props
}: CardProps) {
  const v = variantDefs[variant]
  const r = radii[radius]
  const p = paddings[padding]

  const baseStyle: React.CSSProperties = {
    backgroundColor: v.bg,
    borderColor: v.border,
    borderWidth: v.borderWidth,
    borderStyle: v.borderWidth ? 'solid' : 'none',
    borderRadius: r,
    padding: p,
    boxShadow: isActive ? HOVER_SHADOW : v.shadow,
    overflow: 'hidden',
    boxSizing: 'border-box',
    transition: (interactive || isActive) ? 'box-shadow 150ms ease, transform 150ms ease' : undefined,
    cursor: interactive ? 'pointer' : undefined,
    ...styleProp,
  }

  const Tag = as as keyof JSX.IntrinsicElements

  return (
    <Tag
      className={className || undefined}
      style={baseStyle}
      {...(interactive ? { tabIndex: 0, role: 'button' } : {})}
      onMouseEnter={interactive ? (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget
        el.style.boxShadow = HOVER_SHADOW
        el.style.transform = 'translateY(-1px)'
      } : undefined}
      onMouseLeave={interactive ? (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget
        el.style.boxShadow = isActive ? HOVER_SHADOW : v.shadow
        el.style.transform = 'translateY(0)'
      } : undefined}
      onFocus={interactive ? (e: React.FocusEvent<HTMLElement>) => {
        const el = e.currentTarget
        if (!el.matches(':focus-visible')) return
        el.style.outline = `${FOCUS_RING_WIDTH}px solid ${FOCUS_RING_COLOR}`
        el.style.outlineOffset = '2px'
      } : undefined}
      onBlur={interactive ? (e: React.FocusEvent<HTMLElement>) => {
        const el = e.currentTarget
        el.style.outline = 'none'
        el.style.outlineOffset = '0px'
      } : undefined}
      onKeyDown={interactive ? (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          e.currentTarget.click()
        }
      } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}
