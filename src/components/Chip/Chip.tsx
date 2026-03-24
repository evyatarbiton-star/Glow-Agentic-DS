import type { ChipProps, ChipGroupProps, ChipVariant, ChipColor } from './Chip.types'
import type { ChipSize } from './Chip.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontWeights } from '../../../tokens/primitive/typography'

// Chip Component
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

// Variant × color state definitions (token refs in inline comments)

type VariantColors = {
  bg: string
  text: string
  border?: string
  borderWidth?: number
  background?: string   // CSS background (for gradients) — overrides bg
}

type VariantDef = {
  default:  VariantColors
  hover:    VariantColors
  focus:    VariantColors & { focusBorder: string; focusBorderWidth: number }
  selected: VariantColors
  disabled: VariantColors
}

const subtleVariants: Record<ChipColor, VariantDef> = {
  neutral: {
    default:  { bg: sc.neutral.surface.subtle, text: sc.neutral.text.DEFAULT },                                                       // #f2f2f2 bg, #000 text
    hover:    { bg: sc.neutral.surface.light, text: sc.neutral.text.DEFAULT },                                                        // #e0e0e0 bg
    focus:    { bg: sc.neutral.surface.light, text: sc.neutral.text.DEFAULT, focusBorder: sc.neutral.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.neutral.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // #000 bg, #fff text
    disabled: { bg: sc.neutral.surface.disabled, text: sc.neutral.text.disabledDark },                                                // #d4d4d4 bg, #949494 text
  },
  success: {
    default:  { bg: sc.success.surface.subtle, text: sc.success.text.dark },                                                          // #f1f9f1 bg → #e2f3e3 (Figma green/100)
    hover:    { bg: sc.success.surface.light, text: sc.success.text.dark },                                                           // #c2e5c3 bg
    focus:    { bg: sc.success.surface.light, text: sc.success.text.dark, focusBorder: sc.success.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.success.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // #5bb95e bg, #fff text
    disabled: { bg: sc.success.surface.disabled, text: sc.neutral.text.disabledDark },                                                // #c2e5c3 bg, #949494 text
  },
  error: {
    default:  { bg: sc.error.surface.subtle, text: sc.error.text.DEFAULT },                                                           // #feecec bg → #fcd9d9 (Figma red/100)
    hover:    { bg: sc.error.surface.light, text: sc.error.text.dark },                                                               // #f78c8c bg
    focus:    { bg: sc.error.surface.light, text: sc.error.text.DEFAULT, focusBorder: sc.error.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.error.surface.DEFAULT, text: sc.neutral.text.negative },                                                       // #f23c3c bg, #fff text
    disabled: { bg: sc.error.surface.disabled, text: sc.error.text.disabled },                                                        // #fab3b3 bg, #fcd9d9 text
  },
  info: {
    default:  { bg: sc['accent-blue'].surface.light, text: sc['accent-blue'].text.dark },                                             // #ebf0ff bg, #245eff text
    hover:    { bg: sc['accent-blue'].surface.hover, text: sc['accent-blue'].text.dark },                                             // #d3dfff bg
    focus:    { bg: sc['accent-blue'].surface.hover, text: sc['accent-blue'].text.dark, focusBorder: sc['accent-blue'].border.light, focusBorderWidth: 2 },
    selected: { bg: sc['accent-blue'].surface.selected, text: sc.neutral.text.negative },                                             // #618bff bg, #fff text
    disabled: { bg: sc['accent-blue'].surface.disabled, text: sc.neutral.text.disabledDark },                                         // #d3dfff bg, #949494 text
  },
  warning: {
    default:  { bg: sc['accent-yellow'].surface.light, text: sc['accent-yellow'].text.dark },                                         // #fff3c7 bg, #947400 text
    hover:    { bg: sc['accent-yellow'].surface.hover, text: sc['accent-yellow'].text.dark },                                         // #ffe78f bg
    focus:    { bg: sc['accent-yellow'].surface.hover, text: sc['accent-yellow'].text.dark, focusBorder: sc['accent-yellow'].border.light, focusBorderWidth: 2 },
    selected: { bg: sc['accent-yellow'].surface.selected, text: sc.neutral.text.negative },                                           // #ffd129 bg, #fff text
    disabled: { bg: sc['accent-yellow'].surface.disabled, text: sc.neutral.text.disabledDark },                                       // #ffe78f bg, #949494 text
  },
  recommended: {
    default:  { bg: 'transparent', text: sc.neutral.text.DEFAULT, background: `linear-gradient(to right, ${sc['accent-yellow'].surface.light}, ${sc.success.surface.light})` },  // gradient yellow→green
    hover:    { bg: 'transparent', text: sc.neutral.text.DEFAULT, background: `linear-gradient(to right, ${sc['accent-yellow'].surface.hover}, ${sc.success.surface.light})` },
    focus:    { bg: 'transparent', text: sc.neutral.text.DEFAULT, background: `linear-gradient(to right, ${sc['accent-yellow'].surface.light}, ${sc.success.surface.light})`, focusBorder: sc['accent-yellow'].border.DEFAULT, focusBorderWidth: 2 },
    selected: { bg: 'transparent', text: sc.neutral.text.DEFAULT, background: `linear-gradient(to right, ${sc['accent-yellow'].surface.hover}, ${sc.success.surface.hover})` },
    disabled: { bg: sc.neutral.surface.disabled, text: sc.neutral.text.disabledDark },                                                // fallback solid when disabled
  },
  hsa: {
    default:  { bg: sc['accent-yellow'].surface.light, text: sc['accent-yellow'].text.dark, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 1 },   // #fff3c7 bg, #ffdb57 border
    hover:    { bg: sc['accent-yellow'].surface.hover, text: sc['accent-yellow'].text.dark, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 1 },
    focus:    { bg: sc['accent-yellow'].surface.light, text: sc['accent-yellow'].text.dark, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 1, focusBorder: sc['accent-yellow'].border.darker, focusBorderWidth: 2 },
    selected: { bg: sc['accent-yellow'].surface.selected, text: sc.neutral.text.negative, border: sc['accent-yellow'].border.darker, borderWidth: 1 },
    disabled: { bg: sc['accent-yellow'].surface.disabled, text: sc.neutral.text.disabledDark, border: sc['accent-yellow'].border.light, borderWidth: 1 },
  },
  lfsa: {
    default:  { bg: sc['accent-purple'].surface.light, text: sc['accent-purple'].text.dark, border: sc['accent-purple'].border.DEFAULT, borderWidth: 1 },   // #e7dafb bg, #b38cf3 border
    hover:    { bg: sc['accent-purple'].surface.hover, text: sc['accent-purple'].text.dark, border: sc['accent-purple'].border.DEFAULT, borderWidth: 1 },
    focus:    { bg: sc['accent-purple'].surface.light, text: sc['accent-purple'].text.dark, border: sc['accent-purple'].border.DEFAULT, borderWidth: 1, focusBorder: sc['accent-purple'].border.darker, focusBorderWidth: 2 },
    selected: { bg: sc['accent-purple'].surface.selected, text: sc.neutral.text.negative, border: sc['accent-purple'].border.darker, borderWidth: 1 },
    disabled: { bg: sc['accent-purple'].surface.disabled, text: sc.neutral.text.disabledDark, border: sc['accent-purple'].border.light, borderWidth: 1 },
  },
}

const outlineVariants: Record<ChipColor, VariantDef> = {
  neutral: {
    default:  { bg: 'transparent', text: sc.neutral.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 1 },
    hover:    { bg: sc.neutral.surface.subtle, text: sc.neutral.text.DEFAULT, border: sc.neutral.border.xstrong, borderWidth: 1 },
    focus:    { bg: 'transparent', text: sc.neutral.text.DEFAULT, border: sc.neutral.border.strong, borderWidth: 1, focusBorder: sc.neutral.border.strong, focusBorderWidth: 2 },
    selected: { bg: sc.neutral.surface.DEFAULT, text: sc.neutral.text.negative, border: sc.neutral.border.DEFAULT, borderWidth: 1 },
    disabled: { bg: 'transparent', text: sc.neutral.text.disabledDark, border: sc.neutral.border.light, borderWidth: 1 },
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
  info: {
    default:  { bg: 'transparent', text: sc['accent-blue'].text.dark, border: sc['accent-blue'].border.DEFAULT, borderWidth: 1 },
    hover:    { bg: sc['accent-blue'].surface.subtle, text: sc['accent-blue'].text.dark, border: sc['accent-blue'].border.DEFAULT, borderWidth: 1 },
    focus:    { bg: 'transparent', text: sc['accent-blue'].text.dark, border: sc['accent-blue'].border.DEFAULT, borderWidth: 1, focusBorder: sc['accent-blue'].border.light, focusBorderWidth: 2 },
    selected: { bg: sc['accent-blue'].surface.selected, text: sc.neutral.text.negative, border: sc['accent-blue'].border.darker, borderWidth: 1 },
    disabled: { bg: 'transparent', text: sc.neutral.text.disabledDark, border: sc['accent-blue'].border.light, borderWidth: 1 },
  },
  warning: {
    default:  { bg: 'transparent', text: sc['accent-yellow'].text.dark, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 1 },
    hover:    { bg: sc['accent-yellow'].surface.subtle, text: sc['accent-yellow'].text.dark, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 1 },
    focus:    { bg: 'transparent', text: sc['accent-yellow'].text.dark, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 1, focusBorder: sc['accent-yellow'].border.light, focusBorderWidth: 2 },
    selected: { bg: sc['accent-yellow'].surface.selected, text: sc.neutral.text.negative, border: sc['accent-yellow'].border.darker, borderWidth: 1 },
    disabled: { bg: 'transparent', text: sc.neutral.text.disabledDark, border: sc['accent-yellow'].border.light, borderWidth: 1 },
  },
  recommended: {
    default:  { bg: 'transparent', text: sc.neutral.text.DEFAULT, border: sc['accent-yellow'].surface.light, borderWidth: 2 },        // Figma: 2nd Recommended — yellow border
    hover:    { bg: sc['accent-yellow'].surface.subtle, text: sc.neutral.text.DEFAULT, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 2 },
    focus:    { bg: 'transparent', text: sc.neutral.text.DEFAULT, border: sc['accent-yellow'].surface.light, borderWidth: 2, focusBorder: sc['accent-yellow'].border.DEFAULT, focusBorderWidth: 2 },
    selected: { bg: sc['accent-yellow'].surface.light, text: sc.neutral.text.DEFAULT, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 2 },
    disabled: { bg: 'transparent', text: sc.neutral.text.disabledDark, border: sc.neutral.border.light, borderWidth: 2 },
  },
  hsa: {
    default:  { bg: 'transparent', text: sc['accent-yellow'].text.dark, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 1 },
    hover:    { bg: sc['accent-yellow'].surface.subtle, text: sc['accent-yellow'].text.dark, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 1 },
    focus:    { bg: 'transparent', text: sc['accent-yellow'].text.dark, border: sc['accent-yellow'].border.DEFAULT, borderWidth: 1, focusBorder: sc['accent-yellow'].border.darker, focusBorderWidth: 2 },
    selected: { bg: sc['accent-yellow'].surface.selected, text: sc.neutral.text.negative, border: sc['accent-yellow'].border.darker, borderWidth: 1 },
    disabled: { bg: 'transparent', text: sc.neutral.text.disabledDark, border: sc['accent-yellow'].border.light, borderWidth: 1 },
  },
  lfsa: {
    default:  { bg: 'transparent', text: sc['accent-purple'].text.dark, border: sc['accent-purple'].border.DEFAULT, borderWidth: 1 },
    hover:    { bg: sc['accent-purple'].surface.subtle, text: sc['accent-purple'].text.dark, border: sc['accent-purple'].border.DEFAULT, borderWidth: 1 },
    focus:    { bg: 'transparent', text: sc['accent-purple'].text.dark, border: sc['accent-purple'].border.DEFAULT, borderWidth: 1, focusBorder: sc['accent-purple'].border.darker, focusBorderWidth: 2 },
    selected: { bg: sc['accent-purple'].surface.selected, text: sc.neutral.text.negative, border: sc['accent-purple'].border.darker, borderWidth: 1 },
    disabled: { bg: 'transparent', text: sc.neutral.text.disabledDark, border: sc['accent-purple'].border.light, borderWidth: 1 },
  },
}

const filledVariants: Record<ChipColor, VariantDef> = {
  neutral: {
    default:  { bg: sc.neutral.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // #000 bg, #fff text
    hover:    { bg: sc.neutral.surface.hover, text: sc.neutral.text.negative },                                                       // #404040 bg
    focus:    { bg: sc.neutral.surface.focused, text: sc.neutral.text.negative, focusBorder: sc.neutral.border.light, focusBorderWidth: 2 },
    selected: { bg: sc.neutral.surface.DEFAULT, text: sc.neutral.text.negative },                                                     // same as default (already filled)
    disabled: { bg: sc.neutral.surface.disabled, text: sc.neutral.text.disabledDark },
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
  info: {
    default:  { bg: sc['accent-blue'].surface.selected, text: sc.neutral.text.negative },                                             // #618bff bg
    hover:    { bg: sc['accent-blue'].surface.DEFAULT, text: sc.neutral.text.negative },                                              // #99b4ff bg
    focus:    { bg: sc['accent-blue'].surface.selected, text: sc.neutral.text.negative, focusBorder: sc['accent-blue'].border.light, focusBorderWidth: 2 },
    selected: { bg: sc['accent-blue'].surface.selected, text: sc.neutral.text.negative },
    disabled: { bg: sc['accent-blue'].surface.disabled, text: sc.neutral.text.disabledDark },
  },
  warning: {
    default:  { bg: sc['accent-yellow'].surface.DEFAULT, text: sc.neutral.text.DEFAULT },                                             // #ffdb57 bg, black text
    hover:    { bg: sc['accent-yellow'].surface.selected, text: sc.neutral.text.DEFAULT },                                            // #ffd129 bg
    focus:    { bg: sc['accent-yellow'].surface.DEFAULT, text: sc.neutral.text.DEFAULT, focusBorder: sc['accent-yellow'].border.darker, focusBorderWidth: 2 },
    selected: { bg: sc['accent-yellow'].surface.selected, text: sc.neutral.text.DEFAULT },
    disabled: { bg: sc['accent-yellow'].surface.disabled, text: sc.neutral.text.disabledDark },
  },
  recommended: {
    default:  { bg: 'transparent', text: sc.neutral.text.negative, background: `linear-gradient(to right, ${sc['accent-yellow'].surface.DEFAULT}, ${sc.success.surface.DEFAULT})` },
    hover:    { bg: 'transparent', text: sc.neutral.text.negative, background: `linear-gradient(to right, ${sc['accent-yellow'].surface.selected}, ${sc.success.surface.hover})` },
    focus:    { bg: 'transparent', text: sc.neutral.text.negative, background: `linear-gradient(to right, ${sc['accent-yellow'].surface.DEFAULT}, ${sc.success.surface.DEFAULT})`, focusBorder: sc['accent-yellow'].border.DEFAULT, focusBorderWidth: 2 },
    selected: { bg: 'transparent', text: sc.neutral.text.negative, background: `linear-gradient(to right, ${sc['accent-yellow'].surface.selected}, ${sc.success.surface.selected})` },
    disabled: { bg: sc.neutral.surface.disabled, text: sc.neutral.text.disabledDark },
  },
  hsa: {
    default:  { bg: sc['accent-yellow'].surface.DEFAULT, text: sc.neutral.text.DEFAULT },                                             // #ffdb57 bg
    hover:    { bg: sc['accent-yellow'].surface.selected, text: sc.neutral.text.DEFAULT },
    focus:    { bg: sc['accent-yellow'].surface.DEFAULT, text: sc.neutral.text.DEFAULT, focusBorder: sc['accent-yellow'].border.darker, focusBorderWidth: 2 },
    selected: { bg: sc['accent-yellow'].surface.selected, text: sc.neutral.text.DEFAULT },
    disabled: { bg: sc['accent-yellow'].surface.disabled, text: sc.neutral.text.disabledDark },
  },
  lfsa: {
    default:  { bg: sc['accent-purple'].surface.DEFAULT, text: sc.neutral.text.negative },                                            // #b38cf3 bg
    hover:    { bg: sc['accent-purple'].surface.selected, text: sc.neutral.text.negative },
    focus:    { bg: sc['accent-purple'].surface.DEFAULT, text: sc.neutral.text.negative, focusBorder: sc['accent-purple'].border.darker, focusBorderWidth: 2 },
    selected: { bg: sc['accent-purple'].surface.selected, text: sc.neutral.text.negative },
    disabled: { bg: sc['accent-purple'].surface.disabled, text: sc.neutral.text.disabledDark },
  },
}

const variantColorMap: Record<ChipVariant, Record<ChipColor, VariantDef>> = {
  subtle:  subtleVariants,
  outline: outlineVariants,
  filled:  filledVariants,
}

// Chips are always pill-shaped (borderRadius: 999 → radii.full)

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
    // Always use `background` (shorthand) for both solid fills and gradients.
    // React 19 conflicts when mixing `background` and `backgroundColor` across rerenders.
    background: colors.background ?? colors.bg,
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
    transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease',
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

      onMouseEnter={isInteractive ? (e) => {
        const el = e.currentTarget
        if (selected) return
        el.style.background = v.hover.background ?? v.hover.bg
        el.style.color = v.hover.text
        if (v.hover.border) el.style.borderColor = v.hover.border
      } : undefined}

      onMouseLeave={isInteractive ? (e) => {
        const el = e.currentTarget
        if (selected) return
        el.style.background = colors.background ?? colors.bg
        el.style.color = colors.text
        el.style.borderColor = colors.border ?? 'transparent'
        if (document.activeElement !== el) {
          el.style.outline = 'none'
          el.style.outlineOffset = '0px'
        }
      } : undefined}

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

      onKeyDown={isInteractive ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>)
        }
      } : undefined}

      {...props}
    >
      {iconLeft && (
        <span
          className="inline-flex items-center justify-center shrink-0"
          style={{ width: s.iconSize, height: s.iconSize }}
        >
          {iconLeft}
        </span>
      )}

      <span>{children}</span>

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
            e.currentTarget.style.background = 'rgba(0,0,0,0.08)'
          } : undefined}
          onMouseLeave={!disabled ? (e) => {
            e.currentTarget.style.opacity = '0.6'
            e.currentTarget.style.background = 'transparent'
          } : undefined}
        >
          <CloseIcon size={s.closeIconSize} />
        </button>
      )}
    </div>
  )
}

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
