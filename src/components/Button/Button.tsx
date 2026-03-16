import type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontWeights } from '../../../tokens/primitive/typography'

// ============================================================
// GLOW DS — Button Component
// Source: Figma Web DS — node-id=114-6888
// URL: https://www.figma.com/design/ke9Y1BHl3xvX8UMRRAMQ9T/Web-DS?node-id=114-6888
//
// Variants:  primary | secondary | outline | subtle | ghost | destructive
// Sizes:     xs (36px) | sm (40px) | md (48px) | lg (56px)
// Features:  pill, iconOnly, loading, fullWidth, iconLeft, iconRight
// ============================================================

// ── Spinner ─────────────────────────────────────────────────
function Spinner({ size }: { size: number }) {
  return (
    <svg
      className="animate-spin shrink-0"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

// ── Variant Color Definitions ───────────────────────────────
// Each variant defines colors for every state.
// Extracted from Figma Web DS variables.
//
// Mapping:
//   primary     → Figma "Primary"      (orange filled)
//   secondary   → Figma "Secondary"    (black filled)
//   outline     → Figma "Tertiary 1"   (white + border)
//   subtle      → Figma "Tertiary 2"   (gray filled)
//   ghost       → Figma "Link"         (transparent)
//   destructive → Not in Figma         (red filled)

type VariantColors = {
  bg: string
  text: string
  border?: string
  borderWidth?: number
}

type VariantDef = {
  default:  VariantColors
  hover:    VariantColors
  focus:    VariantColors & { focusBorder: string; focusBorderWidth: number }
  active:   VariantColors
  disabled: VariantColors
}

const variants: Record<ButtonVariant, VariantDef> = {
  primary: {
    default:  { bg: sc.primary.surface.DEFAULT, text: sc.neutral.text.negative },
    hover:    { bg: sc.primary.surface.hover, text: sc.neutral.text.negative },
    focus:    { bg: sc.primary.surface.focused, text: sc.neutral.text.negative, focusBorder: sc.primary.border.light, focusBorderWidth: 2 },
    active:   { bg: sc.primary.surface.selected, text: sc.neutral.text.negative },
    disabled: { bg: sc.primary.surface.disabled, text: sc.primary.text.disabled },
  },
  secondary: {
    default:  { bg: sc.neutral.surface.DEFAULT, text: sc.neutral.text.negative },
    hover:    { bg: sc.neutral.surface.hover, text: sc.neutral.text.negative },
    focus:    { bg: sc.neutral.surface.focused, text: sc.neutral.text.negative, focusBorder: sc.neutral.border.light, focusBorderWidth: 2 },
    active:   { bg: sc.neutral.surface.selected, text: sc.neutral.text.negative },
    disabled: { bg: sc.neutral.surface.disabled, text: sc.neutral.text.disabledDark },
  },
  outline: {
    default:  { bg: sc.neutral.surface.negative, text: sc.neutral.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 1 },
    hover:    { bg: sc.neutral.surface.negative, text: sc.neutral.text.dark, border: sc.neutral.border.strong, borderWidth: 1 },
    focus:    { bg: sc.neutral.surface.negative, text: sc.neutral.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 2, focusBorder: sc.neutral.border.strong, focusBorderWidth: 2 },
    active:   { bg: sc.neutral.surface.negative, text: sc.neutral.text.DEFAULT, border: sc.neutral.border.DEFAULT, borderWidth: 1 },
    disabled: { bg: sc.neutral.surface.subtle, text: sc.neutral.text.disabledDark, border: sc.neutral.border.strong, borderWidth: 1 },
  },
  subtle: {
    default:  { bg: sc.neutral.surface.subtle, text: sc.neutral.text.DEFAULT },
    hover:    { bg: sc.neutral.surface.light, text: sc.neutral.text.DEFAULT },
    focus:    { bg: sc.neutral.surface.light, text: sc.neutral.text.DEFAULT, focusBorder: sc.neutral.border.light, focusBorderWidth: 2 },
    active:   { bg: sc.neutral.surface.DEFAULT, text: sc.neutral.text.negative },
    disabled: { bg: sc.neutral.surface.disabled, text: sc.neutral.text.disabledDark },
  },
  ghost: {
    default:  { bg: 'transparent', text: sc.neutral.text.dark },
    hover:    { bg: sc.neutral.surface.subtle, text: sc.neutral.text.DEFAULT },
    focus:    { bg: sc.neutral.surface.subtle, text: sc.neutral.text.DEFAULT, focusBorder: sc.neutral.border.light, focusBorderWidth: 2 },
    active:   { bg: 'transparent', text: sc.neutral.text.DEFAULT },
    disabled: { bg: 'transparent', text: sc.neutral.text.disabledDark },
  },
  destructive: {
    default:  { bg: sc.error.surface.DEFAULT, text: sc.neutral.text.negative },
    hover:    { bg: sc.error.surface.selected, text: sc.neutral.text.negative },
    focus:    { bg: sc.error.surface.selected, text: sc.neutral.text.negative, focusBorder: sc.error.border.light, focusBorderWidth: 2 },
    active:   { bg: sc.error.border.darker, text: sc.neutral.text.negative },
    disabled: { bg: sc.error.border.light, text: sc.error.surface.subtle },
  },
}

// ── Size Definitions ────────────────────────────────────────
// Extracted from Figma variables per size tier.

type SizeDef = {
  height: number
  paddingX: number
  paddingY: number
  borderRadius: number
  gap: number
  iconSize: number
  fontSize: number
  lineHeight: number
}

const sizes: Record<ButtonSize, SizeDef> = {
  lg: { height: 56, paddingX: 32, paddingY: 16, borderRadius: 12, gap: 12, iconSize: 24, fontSize: 20, lineHeight: 24 },
  md: { height: 48, paddingX: 24, paddingY: 12, borderRadius: 8,  gap: 8,  iconSize: 24, fontSize: 16, lineHeight: 19 },
  sm: { height: 40, paddingX: 20, paddingY: 8,  borderRadius: 8,  gap: 4,  iconSize: 20, fontSize: 16, lineHeight: 19 },
  xs: { height: 36, paddingX: 12, paddingY: 8,  borderRadius: 8,  gap: 4,  iconSize: 20, fontSize: 14, lineHeight: 18 },
}

// ── Component ────────────────────────────────────────────────
export function Button({
  variant   = 'primary',
  size      = 'md',
  pill      = false,
  iconOnly  = false,
  loading   = false,
  fullWidth = false,
  disabled,
  iconLeft,
  iconRight,
  children,
  className = '',
  style: styleProp,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading
  const v = variants[variant]
  const s = sizes[size]

  // Pick the right state colors
  const colors = isDisabled ? v.disabled : v.default

  // Compute border-radius
  const borderRadius = pill ? 999 : s.borderRadius

  // Icon-only: square dimensions, no horizontal padding
  const px = iconOnly ? 0 : s.paddingX
  const width = iconOnly ? s.height : undefined

  const baseStyle: React.CSSProperties = {
    // Colors
    backgroundColor: colors.bg,
    color: colors.text,
    borderColor: colors.border ?? 'transparent',
    borderWidth: colors.borderWidth ?? 0,
    borderStyle: colors.border ? 'solid' : 'none',
    // Sizing
    height: s.height,
    width: fullWidth ? '100%' : width,
    paddingLeft: px,
    paddingRight: px,
    paddingTop: s.paddingY,
    paddingBottom: s.paddingY,
    borderRadius,
    gap: s.gap,
    // Typography
    fontSize: s.fontSize,
    lineHeight: `${s.lineHeight}px`,
    fontWeight: fontWeights.medium,
    // Misc
    ...styleProp,
  }

  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      data-variant={variant}
      data-size={size}
      className={[
        // Layout
        'inline-flex items-center justify-center shrink-0',
        'font-default select-none whitespace-nowrap',
        'transition-colors duration-150',
        // Cursor
        isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
        // Custom class
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={baseStyle}
      // Hover / Focus / Active — applied via JS handlers since we use inline styles
      onMouseEnter={!isDisabled ? (e) => {
        const el = e.currentTarget
        el.style.backgroundColor = v.hover.bg
        el.style.color = v.hover.text
        if (v.hover.border) el.style.borderColor = v.hover.border
      } : undefined}
      onMouseLeave={!isDisabled ? (e) => {
        const el = e.currentTarget
        el.style.backgroundColor = colors.bg
        el.style.color = colors.text
        el.style.borderColor = colors.border ?? 'transparent'
        // Remove focus ring on leave if not focused
        if (document.activeElement !== el) {
          el.style.outline = 'none'
          el.style.outlineOffset = '0px'
        }
      } : undefined}
      onMouseDown={!isDisabled ? (e) => {
        const el = e.currentTarget
        el.style.backgroundColor = v.active.bg
        el.style.color = v.active.text
        if (v.active.border) el.style.borderColor = v.active.border
      } : undefined}
      onMouseUp={!isDisabled ? (e) => {
        const el = e.currentTarget
        el.style.backgroundColor = v.hover.bg
        el.style.color = v.hover.text
      } : undefined}
      onFocus={!isDisabled ? (e) => {
        const el = e.currentTarget
        if (!el.matches(':focus-visible')) return
        el.style.outline = `${v.focus.focusBorderWidth}px solid ${v.focus.focusBorder}`
        el.style.outlineOffset = '2px'
      } : undefined}
      onBlur={!isDisabled ? (e) => {
        const el = e.currentTarget
        el.style.outline = 'none'
        el.style.outlineOffset = '0px'
      } : undefined}
      {...props}
    >
      {loading ? (
        <Spinner size={s.iconSize} />
      ) : (
        <>
          {!iconOnly && iconLeft}
          {iconOnly ? (iconLeft || iconRight || children) : <span>{children}</span>}
          {!iconOnly && iconRight}
        </>
      )}
    </button>
  )
}
