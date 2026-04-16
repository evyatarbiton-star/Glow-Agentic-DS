// ============================================================
// GLOW DS — TextInput
// Figma: Web-DS → Text input (node 121-1568)
// URL: https://www.figma.com/design/ke9Y1BHl3xvX8UMRRAMQ9T/Web-DS?node-id=121-1568
//
// Variants: 3 Types (Enabled/Disabled/Error) × 6 States × 2 Shapes × 3 Sizes
// ============================================================

import { useRef, useId } from 'react'
import type { TextInputProps, TextInputSize, TextInputShape } from './TextInput.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { fontWeights, fontFamilies } from '../../../tokens/primitive/typography'
import { primitiveShadows } from '../../../tokens/primitive/shadows'
import InfoCrFrLine from '../Icon/icons/line/InfoCrFr'

// ── Dimensions ───────────────────────────────────────────────
const INPUT_BORDER_WIDTH          = 1
const INPUT_BORDER_RADIUS_DEFAULT = 8    // borderRadius.xxs
const INPUT_BORDER_RADIUS_ROUNDED = 999  // borderRadius.full
const INPUT_PADDING_X             = 16   // spacing.s
const INPUT_PADDING_Y             = 8    // spacing.xxs
const ICON_SIZE                   = 20   // spacing.m
const GAP_VERTICAL                = 8    // spacing.xxs (header ↔ input ↔ helper)
const GAP_LABEL_ITEMS             = 4    // spacing.xxxs (title ↔ asterisk ↔ info)
const GAP_ICON_TEXT               = 8    // spacing.xxs (leftIcon ↔ text)

// ── Size Config ──────────────────────────────────────────────
const SIZE_CONFIG: Record<TextInputSize, { height: number }> = {
  sm: { height: 40 },  // matches Button sm
  md: { height: 48 },  // matches Button md
  lg: { height: 56 },  // matches Button lg
} as const

// ── State Colors ─────────────────────────────────────────────
type InputStateColors = {
  border: string
  bg: string
  text: string
  placeholder: string
  helperText: string
  iconColor: string
}

const stateColors = {
  default: {
    border:      sc.neutral.border.strong,     // #e0e0e0
    bg:          sc.neutral.surface.negative,   // #ffffff
    text:        sc.neutral.text.DEFAULT,       // #000000
    placeholder: sc.neutral.text.light,         // #8a8a8a (was #6b6b6b — corrected to nearest token)
    helperText:  sc.neutral.text.light,         // #8a8a8a
    iconColor:   sc.neutral.text.DEFAULT,       // #000000
  },
  hover: {
    border:      sc.neutral.border.DEFAULT,     // #000000
    bg:          sc.neutral.surface.negative,
    text:        sc.neutral.text.DEFAULT,
    placeholder: sc.neutral.text.light,
    helperText:  sc.neutral.text.light,
    iconColor:   sc.neutral.text.DEFAULT,
  },
  focus: {
    border:      sc.neutral.border.DEFAULT,     // #000000
    bg:          sc.neutral.surface.negative,
    text:        sc.neutral.text.DEFAULT,
    placeholder: sc.neutral.text.light,
    helperText:  sc.neutral.text.light,
    iconColor:   sc.neutral.text.DEFAULT,
  },
  disabled: {
    border:      sc.neutral.border.strong,      // #e0e0e0
    bg:          sc.neutral.surface.subtle,      // #f2f2f2
    text:        sc.neutral.text.disabledDark,   // #949494
    placeholder: sc.neutral.text.disabledDark,   // #949494
    helperText:  sc.neutral.text.light,
    iconColor:   sc.neutral.text.disabledDark,   // #949494
  },
  error: {
    border:      sc.error.border.DEFAULT,       // #e10f0f
    bg:          sc.neutral.surface.negative,
    text:        sc.neutral.text.DEFAULT,
    placeholder: sc.neutral.text.light,
    helperText:  sc.error.text.DEFAULT,          // #e10f0f
    iconColor:   sc.neutral.text.DEFAULT,
  },
} as const

// ── Typography ───────────────────────────────────────────────
// Label (title above input)
const LABEL_FONT_SIZE    = parseInt(typographyStyles['label-s'].fontSize)
const LABEL_LINE_HEIGHT  = typographyStyles['label-s'].lineHeight
const LABEL_FONT_WEIGHT  = typographyStyles['label-s'].fontWeight
const LABEL_COLOR        = sc.neutral.text.DEFAULT

// Input text + placeholder
const INPUT_FONT_SIZE    = parseInt(typographyStyles['paragraph-m'].fontSize)
const INPUT_LINE_HEIGHT  = typographyStyles['paragraph-m'].lineHeight
const INPUT_FONT_WEIGHT  = typographyStyles['paragraph-m'].fontWeight

// Helper text
const HELPER_FONT_SIZE   = parseInt(typographyStyles['paragraph-s'].fontSize)
const HELPER_LINE_HEIGHT = typographyStyles['paragraph-s'].lineHeight
const HELPER_FONT_WEIGHT = typographyStyles['paragraph-s'].fontWeight

// Required asterisk
const REQUIRED_COLOR     = sc.error.text.DEFAULT

// Focus ring (consistent with Checkbox, RadioButton, Toggle)
const FOCUS_RING_COLOR   = sc.neutral.border.light
const FOCUS_RING_WIDTH   = 2

// ── DS Icon (inline SVG replaced) ────────────────────────────

// ── Component ────────────────────────────────────────────────
export function TextInput({
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  helperText,
  required = false,
  size = 'md',
  shape = 'default',
  iconLeft,
  iconRight,
  showInfoIcon = false,
  name,
  ...props
}: TextInputProps) {

  const inputBoxRef = useRef<HTMLDivElement>(null)
  const helperId = useId()
  const { height } = SIZE_CONFIG[size]
  const borderRadius = shape === 'rounded'
    ? INPUT_BORDER_RADIUS_ROUNDED
    : INPUT_BORDER_RADIUS_DEFAULT

  // Determine current color set
  const getColors = (): InputStateColors => {
    if (disabled) return stateColors.disabled
    if (error) return stateColors.error
    return stateColors.default
  }
  const colors = getColors()

  // ── Hover handlers ──
  const onMouseEnter = () => {
    if (disabled) return
    const box = inputBoxRef.current
    if (!box) return
    // Error keeps red border on hover
    if (!error) {
      box.style.borderColor = stateColors.hover.border
    }
  }

  const onMouseLeave = () => {
    if (disabled) return
    const box = inputBoxRef.current
    if (!box) return
    box.style.borderColor = colors.border
  }

  // ── Focus handlers ──
  const onFocus = () => {
    if (disabled) return
    const box = inputBoxRef.current
    if (!box) return
    if (!error) {
      box.style.borderColor = stateColors.focus.border
    }
    box.style.outline = `${FOCUS_RING_WIDTH}px solid ${FOCUS_RING_COLOR}`
    box.style.outlineOffset = `${FOCUS_RING_WIDTH}px`
  }

  const onBlur = () => {
    const box = inputBoxRef.current
    if (!box) return
    box.style.borderColor = colors.border
    box.style.outline = 'none'
    box.style.outlineOffset = '0px'
  }

  // ── Render ──
  const showHeader = label || required || showInfoIcon

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: GAP_VERTICAL,
        width: '100%',
      }}
    >
      {/* ── Header: label + asterisk + info icon ── */}
      {showHeader && (
        <div
          style={{
            display: 'flex',
            gap: GAP_LABEL_ITEMS,
            alignItems: 'center',
          }}
        >
          {label && (
            <label
              style={{
                fontSize: LABEL_FONT_SIZE,
                lineHeight: LABEL_LINE_HEIGHT,
                fontWeight: LABEL_FONT_WEIGHT,
                color: LABEL_COLOR,
              }}
            >
              {label}
            </label>
          )}
          {required && (
            <span
              style={{
                fontSize: LABEL_FONT_SIZE,
                lineHeight: LABEL_LINE_HEIGHT,
                fontWeight: LABEL_FONT_WEIGHT,
                color: REQUIRED_COLOR,
              }}
            >
              *
            </span>
          )}
          {showInfoIcon && (
            <InfoCrFrLine size="md" style={{ color: disabled ? stateColors.disabled.iconColor : sc.neutral.text.DEFAULT }} />
          )}
        </div>
      )}

      {/* ── Input Box ── */}
      <div
        ref={inputBoxRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          display: 'flex',
          alignItems: 'center',
          height,
          paddingLeft: INPUT_PADDING_X,
          paddingRight: INPUT_PADDING_X,
          paddingTop: INPUT_PADDING_Y,
          paddingBottom: INPUT_PADDING_Y,
          backgroundColor: colors.bg,
          border: `${INPUT_BORDER_WIDTH}px solid ${colors.border}`,
          borderRadius,
          cursor: disabled ? 'not-allowed' : 'text',
          transition: 'border-color 150ms ease',
        }}
      >
        {/* Left icon */}
        {iconLeft && (
          <div
            style={{
              flexShrink: 0,
              width: ICON_SIZE,
              height: ICON_SIZE,
              marginRight: GAP_ICON_TEXT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.iconColor,
            }}
          >
            {iconLeft}
          </div>
        )}

        {/* Native input */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          aria-invalid={error || undefined}
          aria-describedby={helperText ? helperId : undefined}
          aria-required={required || undefined}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontSize: INPUT_FONT_SIZE,
            lineHeight: INPUT_LINE_HEIGHT,
            fontWeight: INPUT_FONT_WEIGHT,
            color: colors.text,
            cursor: disabled ? 'not-allowed' : 'text',
            padding: 0,
            width: '100%',
            fontFamily: 'inherit',
            ...(props.style || {}),
          }}
        />

        {/* Right icon */}
        {iconRight && (
          <div
            style={{
              flexShrink: 0,
              width: ICON_SIZE,
              height: ICON_SIZE,
              marginLeft: GAP_ICON_TEXT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.iconColor,
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
          >
            {iconRight}
          </div>
        )}
      </div>

      {/* ── Helper Text ── */}
      {helperText && (
        <p
          id={helperId}
          style={{
            fontSize: HELPER_FONT_SIZE,
            lineHeight: HELPER_LINE_HEIGHT,
            fontWeight: HELPER_FONT_WEIGHT,
            color: error ? stateColors.error.helperText : colors.helperText,
            margin: 0,
          }}
        >
          {helperText}
        </p>
      )}
    </div>
  )
}
