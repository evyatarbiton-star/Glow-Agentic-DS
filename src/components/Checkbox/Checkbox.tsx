import { useRef, useEffect } from 'react'
import type { CheckboxProps } from './Checkbox.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontWeights } from '../../../tokens/primitive/typography'
import { typographyStyles } from '../../../tokens/semantic/typography'

// ============================================================
// GLOW DS — Checkbox Component
// Source: Figma Web DS — node-id=118-10667
// URL: https://www.figma.com/design/ke9Y1BHl3xvX8UMRRAMQ9T/Web-DS?node-id=118-10667
//
// States:   Default | Hover | Disabled
// Selected: checked / unchecked / indeterminate
// Size:     24×24 container, 20×20 inner box
// Radius:   4px (rounded-xxxs)
// ============================================================

// ── Dimensions ───────────────────────────────────────────────
// All sizes extracted from Figma and mapped to DS spacing tokens.
//
// container  24×24  → spacing.l (24px)
// inner box  20×20  → spacing.m (20px)
// radius     4px    → borderRadius.xxxs (4px)
// border     2px    → Figma spec (component-internal, not a spacing token)
// icon SVG   12×12  → Figma spec (component-internal)

const CONTAINER_SIZE = 24   // spacing.l
const BOX_SIZE       = 20   // spacing.m
const BOX_RADIUS     = 4    // borderRadius.xxxs
const BORDER_WIDTH   = 2    // Figma spec

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
  icon: string
}

const stateColors = {
  default: {
    unchecked: { border: sc.neutral.surface.DEFAULT, bg: 'transparent',  fill: 'transparent', icon: 'transparent' },
    checked:   { border: sc.neutral.surface.DEFAULT, bg: sc.neutral.surface.DEFAULT, fill: sc.neutral.surface.DEFAULT, icon: sc.neutral.surface.negative },
  },
  hover: {
    unchecked: { border: sc.neutral.surface.hover, bg: sc.neutral.surface.subtle,  fill: 'transparent', icon: 'transparent' },
    checked:   { border: sc.neutral.surface.hover, bg: sc.neutral.surface.hover,   fill: sc.neutral.surface.hover, icon: sc.neutral.surface.negative },
  },
  disabled: {
    unchecked: { border: sc.neutral.surface.disabled, bg: sc.neutral.surface.subtle,    fill: 'transparent', icon: 'transparent' },
    checked:   { border: sc.neutral.surface.disabled, bg: sc.neutral.surface.disabled,  fill: sc.neutral.surface.disabled, icon: sc.neutral.surface.negative },
  },
} as const

const FOCUS_RING_COLOR = sc.neutral.border.light
const FOCUS_RING_WIDTH = 2

const LABEL_FONT_SIZE    = parseInt(typographyStyles['paragraph-m'].fontSize)
const LABEL_LINE_HEIGHT  = typographyStyles['paragraph-m'].lineHeight
const LABEL_FONT_WEIGHT  = typographyStyles['paragraph-m'].fontWeight
const LABEL_COLOR        = sc.neutral.text.DEFAULT
const LABEL_DISABLED_COLOR = sc.neutral.text.disabledLight

// ── Checkmark SVG ────────────────────────────────────────────
function CheckmarkIcon({ color }: { color: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 3L4.5 8.5L2 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Indeterminate Dash SVG ───────────────────────────────────
function IndeterminateIcon({ color }: { color: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 6H9.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ── Component ────────────────────────────────────────────────
export function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  value,
  indeterminate = false,
  className = '',
  style: styleProp,
  ...props
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  // Set indeterminate via ref (not an HTML attribute)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  // Determine visual state
  const isSelected = checked || indeterminate
  const selectionKey = isSelected ? 'checked' : 'unchecked'
  const defaultColors = disabled
    ? stateColors.disabled[selectionKey]
    : stateColors.default[selectionKey]
  const hoverColors = stateColors.hover[selectionKey]

  // Apply colors to the visual box
  const applyColors = (colors: StateColors) => {
    const box = boxRef.current
    if (!box) return
    box.style.borderColor = colors.border
    box.style.backgroundColor = isSelected ? colors.fill : colors.bg
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
        ref={inputRef}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        className="absolute opacity-0"
        style={{ width: 0, height: 0 }}
        onFocus={(e) => {
          if (!e.currentTarget.matches(':focus-visible')) return
          const box = boxRef.current
          if (box && !disabled) {
            box.style.outline = `${FOCUS_RING_WIDTH}px solid ${FOCUS_RING_COLOR}`
            box.style.outlineOffset = `${FOCUS_RING_WIDTH}px`
          }
        }}
        onBlur={() => {
          const box = boxRef.current
          if (box) {
            box.style.outline = 'none'
            box.style.outlineOffset = '0px'
          }
        }}
        {...props}
      />

      {/* Visual checkbox */}
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
          ref={boxRef}
          style={{
            width: BOX_SIZE,
            height: BOX_SIZE,
            borderRadius: BOX_RADIUS,
            borderWidth: BORDER_WIDTH,
            borderStyle: 'solid',
            borderColor: defaultColors.border,
            backgroundColor: isSelected ? defaultColors.fill : defaultColors.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 150ms, border-color 150ms',
          }}
        >
          {indeterminate ? (
            <IndeterminateIcon color={defaultColors.icon} />
          ) : checked ? (
            <CheckmarkIcon color={defaultColors.icon} />
          ) : null}
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
