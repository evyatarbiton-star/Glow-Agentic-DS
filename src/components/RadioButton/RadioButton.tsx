import { useRef } from 'react'
import type { RadioButtonProps } from './RadioButton.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontWeights } from '../../../tokens/primitive/typography'
import { typographyStyles } from '../../../tokens/semantic/typography'

// ============================================================
// GLOW DS — RadioButton Component
// Source: Figma Web DS — node-id=118-10667
// URL: https://www.figma.com/design/ke9Y1BHl3xvX8UMRRAMQ9T/Web-DS?node-id=118-10667
//
// States:   Default | Hover | Disabled
// Selected: checked / unchecked
// Size:     24×24 container, 20×20 inner circle
// Radius:   999px (rounded-full)
// ============================================================

// ── Dimensions ───────────────────────────────────────────────
// All sizes extracted from Figma and mapped to DS spacing tokens.
//
// container  24×24  → spacing.l (24px)
// inner cir  20×20  → spacing.m (20px)
// radius     999px  → borderRadius.full (rounded-full)
// border     2px    → Figma spec (component-internal, not a spacing token)
// dot        8px    → Figma spec (component-internal)

const CONTAINER_SIZE = 24   // spacing.l
const CIRCLE_SIZE    = 20   // spacing.m
const CIRCLE_RADIUS  = 999  // borderRadius.full
const BORDER_WIDTH   = 2    // Figma spec
const DOT_SIZE       = 8    // Figma spec

// ── State Color Definitions ──────────────────────────────────
// Extracted from Figma variables. Every color maps to a semantic token.
//
// Token mapping:
//   #000000  → neutral.DEFAULT          (Grey/950)
//   #404040  → neutral.hover            (Grey/900)
//   #f2f2f2  → neutral.subtle           (Grey/50)
//   #d4d4d4  → neutral.surface-disabled (Grey/300)
//   #ffffff  → neutral.negative          (Grey/0)
//   #ededed  → neutral.border-light     (Grey/100)  — focus ring

type StateColors = {
  border: string
  bg: string
  fill: string
  dot: string
}

const stateColors = {
  default: {
    unchecked: { border: sc.neutral.surface.DEFAULT, bg: 'transparent', fill: 'transparent', dot: 'transparent' },
    checked:   { border: sc.neutral.surface.DEFAULT, bg: sc.neutral.surface.DEFAULT, fill: sc.neutral.surface.DEFAULT, dot: sc.neutral.surface.negative },
  },
  hover: {
    unchecked: { border: sc.neutral.surface.hover, bg: sc.neutral.surface.subtle, fill: 'transparent', dot: 'transparent' },
    checked:   { border: sc.neutral.surface.hover, bg: sc.neutral.surface.hover, fill: sc.neutral.surface.hover, dot: sc.neutral.surface.negative },
  },
  disabled: {
    unchecked: { border: sc.neutral.surface.disabled, bg: sc.neutral.surface.subtle, fill: 'transparent', dot: 'transparent' },
    checked:   { border: sc.neutral.surface.disabled, bg: sc.neutral.surface.disabled, fill: sc.neutral.surface.disabled, dot: sc.neutral.surface.negative },
  },
} as const

const FOCUS_RING_COLOR = sc.neutral.border.light
const FOCUS_RING_WIDTH = 2

const LABEL_FONT_SIZE    = parseInt(typographyStyles['paragraph-m'].fontSize)
const LABEL_LINE_HEIGHT  = typographyStyles['paragraph-m'].lineHeight
const LABEL_FONT_WEIGHT  = typographyStyles['paragraph-m'].fontWeight
const LABEL_COLOR        = sc.neutral.text.DEFAULT
const LABEL_DISABLED_COLOR = sc.neutral.text.disabledLight

// ── Component ────────────────────────────────────────────────
export function RadioButton({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  value,
  className = '',
  style: styleProp,
  ...props
}: RadioButtonProps) {
  const circleRef = useRef<HTMLDivElement>(null)

  const selectionKey = checked ? 'checked' : 'unchecked'
  const defaultColors = disabled
    ? stateColors.disabled[selectionKey]
    : stateColors.default[selectionKey]
  const hoverColors = stateColors.hover[selectionKey]

  const applyColors = (colors: StateColors) => {
    const circle = circleRef.current
    if (!circle) return
    circle.style.borderColor = colors.border
    circle.style.backgroundColor = checked ? colors.fill : colors.bg
  }

  return (
    <label
      className={[
        'flex items-center gap-xxs select-none',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className,
      ].filter(Boolean).join(' ')}
      style={styleProp}
      onMouseEnter={!disabled ? () => applyColors(hoverColors) : undefined}
      onMouseLeave={!disabled ? () => applyColors(defaultColors) : undefined}
    >
      {/* Hidden native input for a11y + form submission */}
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        className="absolute opacity-0"
        style={{ width: 0, height: 0 }}
        onFocus={(e) => {
          if (!e.currentTarget.matches(':focus-visible')) return
          const circle = circleRef.current
          if (circle && !disabled) {
            circle.style.outline = `${FOCUS_RING_WIDTH}px solid ${FOCUS_RING_COLOR}`
            circle.style.outlineOffset = `${FOCUS_RING_WIDTH}px`
          }
        }}
        onBlur={() => {
          const circle = circleRef.current
          if (circle) {
            circle.style.outline = 'none'
            circle.style.outlineOffset = '0px'
          }
        }}
        {...props}
      />

      {/* Visual radio button */}
      <div
        aria-hidden="true"
        style={{
          width: CONTAINER_SIZE,
          height: CONTAINER_SIZE,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <div
          ref={circleRef}
          style={{
            width: CIRCLE_SIZE,
            height: CIRCLE_SIZE,
            borderRadius: CIRCLE_RADIUS,
            borderWidth: BORDER_WIDTH,
            borderStyle: 'solid',
            borderColor: defaultColors.border,
            backgroundColor: checked ? defaultColors.fill : defaultColors.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 150ms, border-color 150ms',
          }}
        >
          {/* Inner dot — visible only when selected */}
          {checked && (
            <div
              style={{
                width: DOT_SIZE,
                height: DOT_SIZE,
                borderRadius: CIRCLE_RADIUS,
                backgroundColor: defaultColors.dot,
              }}
            />
          )}
        </div>
      </div>

      {/* Label text */}
      {label && (
        <span
          className="font-default"
          style={{
            fontSize: LABEL_FONT_SIZE,
            lineHeight: LABEL_LINE_HEIGHT,
            fontWeight: LABEL_FONT_WEIGHT,
            color: disabled ? LABEL_DISABLED_COLOR : LABEL_COLOR,
          }}
        >
          {label}
        </span>
      )}
    </label>
  )
}
