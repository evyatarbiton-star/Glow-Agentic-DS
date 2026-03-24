import type { IconButtonProps, IconButtonVariant, IconButtonSize } from './IconButton.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticRadii } from '../../../tokens/semantic/radii'

// IconButton Component
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

// "pressed" states use primary tokens (e.g., orange bookmark)

type StateColors = {
  bg: string
  text: string
  border?: string
  borderWidth?: number
}

type VariantDef = {
  default:  StateColors
  hover:    StateColors
  active:   StateColors
  focus:    StateColors & { focusBorder: string; focusBorderWidth: number }
  disabled: StateColors
  // Pressed (toggle ON) states — for actions like bookmark, favorite
  pressed:      StateColors
  pressedHover: StateColors
}

const variants: Record<IconButtonVariant, VariantDef> = {
  ghost: {
    default:      { bg: 'transparent',                    text: sc.neutral.text.dark },
    hover:        { bg: sc.neutral.surface.subtle,        text: sc.neutral.text.DEFAULT },
    active:       { bg: 'transparent',                    text: sc.neutral.text.DEFAULT },
    focus:        { bg: sc.neutral.surface.subtle,        text: sc.neutral.text.DEFAULT, focusBorder: sc.neutral.border.light, focusBorderWidth: 2 },
    disabled:     { bg: 'transparent',                    text: sc.neutral.text.disabledDark },
    pressed:      { bg: 'transparent',                    text: sc.primary.text.DEFAULT },
    pressedHover: { bg: sc.primary.surface.subtle,        text: sc.primary.text.DEFAULT },
  },
  outline: {
    default:      { bg: sc.neutral.surface.negative,      text: sc.neutral.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 1 },
    hover:        { bg: sc.neutral.surface.subtle,        text: sc.neutral.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 1 },
    active:       { bg: sc.neutral.surface.negative,      text: sc.neutral.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 1 },
    focus:        { bg: sc.neutral.surface.negative,      text: sc.neutral.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 2, focusBorder: sc.neutral.border.strong, focusBorderWidth: 2 },
    disabled:     { bg: sc.neutral.surface.subtle,        text: sc.neutral.text.disabledDark, border: sc.neutral.border.strong, borderWidth: 1 },
    pressed:      { bg: sc.neutral.surface.negative,      text: sc.primary.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 1 },
    pressedHover: { bg: sc.primary.surface.subtle,        text: sc.primary.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 1 },
  },
}

// Size definitions: square dimension + icon size tier

type SizeDef = {
  dimension: number
  iconSize: number
  radiusPill: number
  radiusRounded: number
}

const sizes: Record<IconButtonSize, SizeDef> = {
  xs: { dimension: 28, iconSize: 16, radiusPill: 999, radiusRounded: parseInt(semanticRadii.xxxs) },
  sm: { dimension: 32, iconSize: 16, radiusPill: 999, radiusRounded: parseInt(semanticRadii.xxs) },
  md: { dimension: 40, iconSize: 20, radiusPill: 999, radiusRounded: parseInt(semanticRadii.xxs) },
  lg: { dimension: 48, iconSize: 24, radiusPill: 999, radiusRounded: parseInt(semanticRadii.xs) },
}

export function IconButton({
  icon,
  variant  = 'ghost',
  size     = 'md',
  pill     = true,
  pressed,
  loading  = false,
  disabled,
  className = '',
  style: styleProp,
  ...props
}: IconButtonProps) {
  const isDisabled = disabled || loading
  const isPressed  = pressed === true
  const v = variants[variant]
  const s = sizes[size]

  // Pick the right default state colors
  const colors = isDisabled
    ? v.disabled
    : isPressed
      ? v.pressed
      : v.default

  // Hover colors depend on pressed state
  const hoverColors = isPressed ? v.pressedHover : v.hover

  const borderRadius = pill ? s.radiusPill : s.radiusRounded

  const baseStyle: React.CSSProperties = {
    // Colors
    backgroundColor: colors.bg,
    color: colors.text,
    borderColor: colors.border ?? 'transparent',
    borderWidth: colors.borderWidth ?? 0,
    borderStyle: colors.border ? 'solid' : 'none',
    // Sizing — square
    width: s.dimension,
    height: s.dimension,
    borderRadius,
    // Misc
    ...styleProp,
  }

  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      aria-pressed={pressed !== undefined ? pressed : undefined}
      data-variant={variant}
      data-size={size}
      className={[
        'inline-flex items-center justify-center shrink-0',
        'select-none',
        'transition-colors duration-150',
        isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={baseStyle}
      // Hover / Focus / Active — JS handlers for inline styles
      onMouseEnter={!isDisabled ? (e) => {
        const el = e.currentTarget
        el.style.backgroundColor = hoverColors.bg
        el.style.color = hoverColors.text
        if (hoverColors.border) el.style.borderColor = hoverColors.border
      } : undefined}
      onMouseLeave={!isDisabled ? (e) => {
        const el = e.currentTarget
        el.style.backgroundColor = colors.bg
        el.style.color = colors.text
        el.style.borderColor = colors.border ?? 'transparent'
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
        el.style.backgroundColor = hoverColors.bg
        el.style.color = hoverColors.text
        if (hoverColors.border) el.style.borderColor = hoverColors.border
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
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </span>
      )}
    </button>
  )
}
