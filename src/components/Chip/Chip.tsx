import type { ChipProps, ChipGroupProps, ChipVariant, ChipColor } from './Chip.types'
import type { ChipSize } from './Chip.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontWeights } from '../../../tokens/primitive/typography'

// ============================================================
// GLOW DS — Chip Component
//
// A compact label for categorization, filtering, and selection.
// Use Chip for tags, filters, and status indicators.
// Use Button for actions.
//
// Variants:  subtle | outline | filled
// Colors:    neutral | primary | success | error
// Sizes:     sm (28px) | md (32px) | lg (36px)
// Features:  selected, removable, iconLeft, disabled
// ============================================================

// ── Close Icon SVG ────────────────────────────────────────────
function CloseIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 1l6 6M7 1l-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ── Variant Color Definitions ─────────────────────────────────
// Each variant × color combination defines colors for every state.
// Token references in comments map to semantic/colors.ts.

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
  selected: VariantColors
  disabled: VariantColors
}

// ── Subtle Variant ────────────────────────────────────────────
// Soft fill, no border. For tags, labels, categories.

const subtleVariants: Record<ChipColor, VariantDef> = {
  neutral: {
    default:  { bg: sc.neutral.surface.subtle, text: sc.neutral.text.DEFAULT },                                                       // #f2f2f2 bg, #000 text
    hover:    { bg: sc.neutral.surface.light, text: sc.neutral.text.DEFAULT },                                                        // #e0e0e0 bg
    focus:    { bg: sc.neutral.surface.light, text: sc.neutral.text.DEFAULT, focusBorder: sc.neutral.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.neutral.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // #000 bg, #fff text
    disabled: { bg: sc.neutral.surface.disabled, text: sc.neutral.text.disabledDark },                                                // #d4d4d4 bg, #949494 text
  },
  primary: {
    default:  { bg: sc.primary.surface.subtle, text: sc.primary.text.DEFAULT },                                                       // #fff8f5 bg, #fd5201 text
    hover:    { bg: sc.primary.surface.extraLight, text: sc.primary.text.dark },                                                      // #ffede5 bg
    focus:    { bg: sc.primary.surface.extraLight, text: sc.primary.text.DEFAULT, focusBorder: sc.primary.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.primary.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // #fd5201 bg, #fff text
    disabled: { bg: sc.primary.surface.disabled, text: sc.primary.text.disabled },                                                    // #ffb999 bg, #fff8f5 text
  },
  success: {
    default:  { bg: sc.success.surface.subtle, text: sc.success.text.dark },                                                          // #f1f9f1 bg, #317233 text
    hover:    { bg: sc.success.surface.light, text: sc.success.text.dark },                                                           // #c2e5c3 bg
    focus:    { bg: sc.success.surface.light, text: sc.success.text.dark, focusBorder: sc.success.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.success.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // #5bb95e bg, #fff text
    disabled: { bg: sc.success.surface.disabled, text: sc.neutral.text.disabledDark },                                                // #c2e5c3 bg, #949494 text
  },
  error: {
    default:  { bg: sc.error.surface.subtle, text: sc.error.text.DEFAULT },                                                           // #feecec bg, #e10f0f text
    hover:    { bg: sc.error.surface.light, text: sc.error.text.dark },                                                               // #f78c8c bg
    focus:    { bg: sc.error.surface.light, text: sc.error.text.DEFAULT, focusBorder: sc.error.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.error.surface.DEFAULT, text: sc.neutral.text.negative },                                                       // #f23c3c bg, #fff text
    disabled: { bg: sc.error.surface.disabled, text: sc.error.text.disabled },                                                        // #fab3b3 bg, #fcd9d9 text
  },
}

// ── Outline Variant ───────────────────────────────────────────
// Border-based, transparent bg. For filter chips, selectable chips.

const outlineVariants: Record<ChipColor, VariantDef> = {
  neutral: {
    default:  { bg: 'transparent', text: sc.neutral.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 1 },
    hover:    { bg: sc.neutral.surface.subtle, text: sc.neutral.text.DEFAULT, border: sc.neutral.border.xstrong, borderWidth: 1 },
    focus:    { bg: 'transparent', text: sc.neutral.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 1, focusBorder: sc.neutral.border.strong, focusBorderWidth: 2 },
    selected: { bg: sc.neutral.surface.DEFAULT, text: sc.neutral.text.negative, border: sc.neutral.border.DEFAULT, borderWidth: 1 },
    disabled: { bg: 'transparent', text: sc.neutral.text.disabledDark, border: sc.neutral.border.light, borderWidth: 1 },
  },
  primary: {
    default:  { bg: 'transparent', text: sc.primary.text.DEFAULT, border: sc.primary.border.DEFAULT, borderWidth: 1 },
    hover:    { bg: sc.primary.surface.subtle, text: sc.primary.text.dark, border: sc.primary.border.DEFAULT, borderWidth: 1 },
    focus:    { bg: 'transparent', text: sc.primary.text.DEFAULT, border: sc.primary.border.DEFAULT, borderWidth: 1, focusBorder: sc.primary.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.primary.surface.DEFAULT, text: sc.neutral.text.negative, border: sc.primary.border.DEFAULT, borderWidth: 1 },
    disabled: { bg: 'transparent', text: sc.primary.text.disabled, border: sc.primary.border.light, borderWidth: 1 },
  },
  success: {
    default:  { bg: 'transparent', text: sc.success.text.dark, border: sc.success.border.DEFAULT, borderWidth: 1 },
    hover:    { bg: sc.success.surface.subtle, text: sc.success.text.dark, border: sc.success.border.DEFAULT, borderWidth: 1 },
    focus:    { bg: 'transparent', text: sc.success.text.dark, border: sc.success.border.DEFAULT, borderWidth: 1, focusBorder: sc.success.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.success.surface.DEFAULT, text: sc.neutral.text.negative, border: sc.success.border.DEFAULT, borderWidth: 1 },
    disabled: { bg: 'transparent', text: sc.neutral.text.disabledDark, border: sc.success.border.light, borderWidth: 1 },
  },
  error: {
    default:  { bg: 'transparent', text: sc.error.text.DEFAULT, border: sc.error.border.DEFAULT, borderWidth: 1 },
    hover:    { bg: sc.error.surface.subtle, text: sc.error.text.dark, border: sc.error.border.DEFAULT, borderWidth: 1 },
    focus:    { bg: 'transparent', text: sc.error.text.DEFAULT, border: sc.error.border.DEFAULT, borderWidth: 1, focusBorder: sc.error.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.error.surface.DEFAULT, text: sc.neutral.text.negative, border: sc.error.border.DEFAULT, borderWidth: 1 },
    disabled: { bg: 'transparent', text: sc.error.text.disabled, border: sc.error.border.light, borderWidth: 1 },
  },
}

// ── Filled Variant ────────────────────────────────────────────
// Solid bg, white text. For status indicators, emphasis.

const filledVariants: Record<ChipColor, VariantDef> = {
  neutral: {
    default:  { bg: sc.neutral.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // #000 bg, #fff text
    hover:    { bg: sc.neutral.surface.hover, text: sc.neutral.text.negative },                                                       // #404040 bg
    focus:    { bg: sc.neutral.surface.focused, text: sc.neutral.text.negative, focusBorder: sc.neutral.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.neutral.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // same as default (already filled)
    disabled: { bg: sc.neutral.surface.disabled, text: sc.neutral.text.disabledDark },
  },
  primary: {
    default:  { bg: sc.primary.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // #fd5201 bg, #fff text
    hover:    { bg: sc.primary.surface.hover, text: sc.neutral.text.negative },                                                       // #fe7434 bg
    focus:    { bg: sc.primary.surface.focused, text: sc.neutral.text.negative, focusBorder: sc.primary.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.primary.surface.selected, text: sc.neutral.text.negative },                                                    // #cb4101 bg
    disabled: { bg: sc.primary.surface.disabled, text: sc.primary.text.disabled },
  },
  success: {
    default:  { bg: sc.success.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // #5bb95e bg
    hover:    { bg: sc.success.surface.hover, text: sc.neutral.text.negative },                                                       // #7ec881 bg
    focus:    { bg: sc.success.surface.focused, text: sc.neutral.text.negative, focusBorder: sc.success.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.success.surface.selected, text: sc.neutral.text.negative },                                                    // #429a45 bg
    disabled: { bg: sc.success.surface.disabled, text: sc.neutral.text.disabledDark },
  },
  error: {
    default:  { bg: sc.error.surface.DEFAULT, text: sc.neutral.text.negative },                                                       // #f23c3c bg
    hover:    { bg: sc.error.surface.hover, text: sc.neutral.text.negative },                                                         // #f46161 bg
    focus:    { bg: sc.error.surface.focused, text: sc.neutral.text.negative, focusBorder: sc.error.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.error.surface.selected, text: sc.neutral.text.negative },                                                      // #e10f0f bg
    disabled: { bg: sc.error.surface.disabled, text: sc.error.text.disabled },
  },
}

// ── Master variant map ────────────────────────────────────────

const variantColorMap: Record<ChipVariant, Record<ChipColor, VariantDef>> = {
  subtle:  subtleVariants,
  outline: outlineVariants,
  filled:  filledVariants,
}

// ── Size Definitions ──────────────────────────────────────────
// Chips are always pill-shaped (borderRadius: 999 → radii.full).

type SizeDef = {
  height: number
  paddingX: number
  paddingY: number
  gap: number
  iconSize: number
  fontSize: number
  lineHeight: number
  closeSize: number       // X button hit area
  closeIconSize: number   // X SVG size
}

const sizes: Record<ChipSize, SizeDef> = {
  sm: { height: 28, paddingX: 10, paddingY: 4, gap: 4, iconSize: 14, fontSize: 14, lineHeight: 18, closeSize: 18, closeIconSize: 8 },
  md: { height: 32, paddingX: 12, paddingY: 6, gap: 6, iconSize: 16, fontSize: 14, lineHeight: 18, closeSize: 20, closeIconSize: 8 },
  lg: { height: 36, paddingX: 14, paddingY: 8, gap: 8, iconSize: 18, fontSize: 16, lineHeight: 19, closeSize: 22, closeIconSize: 10 },
}

// ── Chip Component ────────────────────────────────────────────

export function Chip({
  variant   = 'subtle',
  color     = 'neutral',
  size      = 'md',
  selected  = false,
  removable = false,
  onRemove,
  disabled  = false,
  iconLeft,
  onClick,
  children,
  className = '',
  style: styleProp,
  ...props
}: ChipProps) {
  const v = variantColorMap[variant][color]
  const s = sizes[size]
  const isInteractive = !!onClick && !disabled

  // Pick state colors
  const colors = disabled
    ? v.disabled
    : selected
      ? v.selected
      : v.default

  const baseStyle: React.CSSProperties = {
    // Colors
    backgroundColor: colors.bg,
    color: colors.text,
    borderColor: colors.border ?? 'transparent',
    borderWidth: colors.borderWidth ?? 0,
    borderStyle: colors.border ? 'solid' : 'none',
    // Sizing
    height: s.height,
    paddingLeft: s.paddingX,
    paddingRight: removable ? s.paddingX - 2 : s.paddingX,   // slightly tighter when close button present
    borderRadius: 999,                                         // radii.full — always pill
    gap: s.gap,
    // Typography
    fontSize: s.fontSize,
    lineHeight: `${s.lineHeight}px`,
    fontWeight: fontWeights.medium,
    // Misc
    cursor: disabled ? 'not-allowed' : isInteractive ? 'pointer' : 'default',
    opacity: disabled ? 1 : undefined,                         // colors handle disabled, not opacity
    transition: 'background-color 150ms ease, color 150ms ease, border-color 150ms ease',
    userSelect: 'none',
    boxSizing: 'border-box',
    ...styleProp,
  }

  return (
    <div
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-selected={selected || undefined}
      aria-disabled={disabled || undefined}
      data-variant={variant}
      data-color={color}
      data-size={size}
      data-selected={selected || undefined}
      className={[
        'inline-flex items-center shrink-0 font-default whitespace-nowrap',
        className,
      ].filter(Boolean).join(' ')}
      style={baseStyle}
      onClick={isInteractive ? onClick : undefined}

      // ── Hover ──
      onMouseEnter={isInteractive ? (e) => {
        const el = e.currentTarget
        if (selected) return
        el.style.backgroundColor = v.hover.bg
        el.style.color = v.hover.text
        if (v.hover.border) el.style.borderColor = v.hover.border
      } : undefined}

      onMouseLeave={isInteractive ? (e) => {
        const el = e.currentTarget
        if (selected) return
        el.style.backgroundColor = colors.bg
        el.style.color = colors.text
        el.style.borderColor = colors.border ?? 'transparent'
        if (document.activeElement !== el) {
          el.style.outline = 'none'
          el.style.outlineOffset = '0px'
        }
      } : undefined}

      // ── Focus ──
      onFocus={isInteractive ? (e) => {
        const el = e.currentTarget
        if (!el.matches(':focus-visible')) return
        el.style.outline = `${v.focus.focusBorderWidth}px solid ${v.focus.focusBorder}`
        el.style.outlineOffset = '2px'
      } : undefined}

      onBlur={isInteractive ? (e) => {
        const el = e.currentTarget
        el.style.outline = 'none'
        el.style.outlineOffset = '0px'
      } : undefined}

      // ── Keyboard ──
      onKeyDown={isInteractive ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>)
        }
      } : undefined}

      {...props}
    >
      {/* Leading icon */}
      {iconLeft && (
        <span
          className="inline-flex items-center justify-center shrink-0"
          style={{ width: s.iconSize, height: s.iconSize }}
        >
          {iconLeft}
        </span>
      )}

      {/* Label */}
      <span>{children}</span>

      {/* Remove button */}
      {removable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onRemove?.()
          }}
          disabled={disabled}
          aria-label={`Remove ${typeof children === 'string' ? children : ''}`}
          className="inline-flex items-center justify-center shrink-0 cursor-pointer"
          style={{
            width: s.closeSize,
            height: s.closeSize,
            borderRadius: 999,
            border: 'none',
            background: 'transparent',
            color: 'inherit',
            padding: 0,
            opacity: 0.6,
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          onMouseEnter={!disabled ? (e) => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.08)'
          } : undefined}
          onMouseLeave={!disabled ? (e) => {
            e.currentTarget.style.opacity = '0.6'
            e.currentTarget.style.backgroundColor = 'transparent'
          } : undefined}
        >
          <CloseIcon size={s.closeIconSize} />
        </button>
      )}
    </div>
  )
}

// ── ChipGroup Component ───────────────────────────────────────

export function ChipGroup({
  gap = 8,          // spacing.xxs
  wrap = true,
  children,
  className = '',
  style: styleProp,
  ...props
}: ChipGroupProps) {
  return (
    <div
      role="group"
      className={[
        'inline-flex',
        wrap ? 'flex-wrap' : '',
        className,
      ].filter(Boolean).join(' ')}
      style={{ gap, ...styleProp }}
      {...props}
    >
      {children}
    </div>
  )
}
