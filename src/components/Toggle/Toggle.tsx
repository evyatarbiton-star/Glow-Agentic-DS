import { useRef } from 'react'
import type { ToggleProps } from './Toggle.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontWeights } from '../../../tokens/primitive/typography'
import { typographyStyles } from '../../../tokens/semantic/typography'

// ============================================================
// GLOW DS — Toggle Component
// Source: Figma Web DS — node-id=118-10915
// URL: https://www.figma.com/design/ke9Y1BHl3xvX8UMRRAMQ9T/Web-DS?node-id=118-10915
//
// States:   Default | Hover | Disabled
// Selected: on (checked) / off (unchecked)
// Sizes:    Default (44×28) | Large (52×32)
// ============================================================

// ── Dimensions ───────────────────────────────────────────────
// All sizes extracted from Figma and mapped to DS spacing tokens.
//
// track padding  4px     → spacing.xxxs (4px)
// track radius   999px   → borderRadius.full
// knob default   20px    → spacing.m (20px)
// knob large     24px    → spacing.l (24px)
// knob radius    100px   → borderRadius.full
// checkmark def  16px    → Figma spec (component-internal)
// checkmark lg   20px    → spacing.m (20px)

const TRACK_PADDING  = 4    // spacing.xxxs
const TRACK_RADIUS   = 999  // borderRadius.full
const KNOB_RADIUS    = 100  // borderRadius.full

const SIZE_CONFIG = {
  default: {
    trackWidth:    44,   // Figma spec (component-internal)
    trackHeight:   28,   // knob 20 + padding 4×2
    knobSize:      20,   // spacing.m
    checkmarkSize: 16,   // Figma spec (component-internal)
  },
  large: {
    trackWidth:    52,   // Figma spec (component-internal)
    trackHeight:   32,   // knob 24 + padding 4×2
    knobSize:      24,   // spacing.l
    checkmarkSize: 20,   // spacing.m
  },
} as const

// ── State Color Definitions ──────────────────────────────────
// Extracted from Figma variables. Every color maps to a semantic token.
//
// Token mapping:
//   #000000  → neutral.DEFAULT          (Grey/950)  — active on track
//   #949494  → neutral.text-disabled-dark (Grey/600) — active off track
//   #e0e0e0  → neutral.surface.light    (Grey/200)  — disabled track
//   #404040  → neutral.hover            (Grey/800)  — hover track
//   #d4d4d4  → neutral.surface-disabled (Grey/300)  — disabled knob
//   #ffffff  → white                               — active knob
//   #ededed  → neutral.border-light     (Grey/100)  — focus ring

type TrackColors = {
  track: string
  knob: string
  checkmark: string
}

const stateColors = {
  default: {
    off: { track: sc.neutral.text.disabledDark, knob: sc.neutral.surface.negative, checkmark: 'transparent' },
    on:  { track: sc.neutral.surface.DEFAULT, knob: sc.neutral.surface.negative, checkmark: sc.neutral.surface.DEFAULT },
  },
  hover: {
    off: { track: sc.neutral.surface.hover, knob: sc.neutral.surface.negative, checkmark: 'transparent' },
    on:  { track: sc.neutral.surface.hover, knob: sc.neutral.surface.negative, checkmark: sc.neutral.surface.hover },
  },
  disabled: {
    off: { track: sc.neutral.surface.light, knob: sc.neutral.surface.disabled, checkmark: 'transparent' },
    on:  { track: sc.neutral.surface.light, knob: sc.neutral.surface.disabled, checkmark: sc.neutral.surface.disabled },
  },
} as const

const FOCUS_RING_COLOR = sc.neutral.border.light
const FOCUS_RING_WIDTH = 2

const LABEL_FONT_SIZE      = parseInt(typographyStyles['paragraph-m'].fontSize)
const LABEL_LINE_HEIGHT    = typographyStyles['paragraph-m'].lineHeight
const LABEL_FONT_WEIGHT    = typographyStyles['paragraph-m'].fontWeight
const LABEL_COLOR          = sc.neutral.text.DEFAULT
const LABEL_DISABLED_COLOR = sc.neutral.text.disabledLight

// ── Checkmark SVG ──────────────────────────────────────────────
function CheckmarkIcon({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
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

// ── Component ────────────────────────────────────────────────
export function Toggle({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  value,
  size = 'default',
  className = '',
  style: styleProp,
  ...props
}: ToggleProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const config = SIZE_CONFIG[size]
  const selectionKey = checked ? 'on' : 'off'
  const defaultColors = disabled
    ? stateColors.disabled[selectionKey]
    : stateColors.default[selectionKey]
  const hoverColors = stateColors.hover[selectionKey]

  const applyColors = (colors: TrackColors) => {
    const track = trackRef.current
    if (!track) return
    track.style.backgroundColor = colors.track
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
          const track = trackRef.current
          if (track && !disabled) {
            track.style.outline = `${FOCUS_RING_WIDTH}px solid ${FOCUS_RING_COLOR}`
            track.style.outlineOffset = `${FOCUS_RING_WIDTH}px`
          }
        }}
        onBlur={() => {
          const track = trackRef.current
          if (track) {
            track.style.outline = 'none'
            track.style.outlineOffset = '0px'
          }
        }}
        {...props}
      />

      {/* Visual toggle track */}
      <div
        ref={trackRef}
        aria-hidden="true"
        style={{
          width: config.trackWidth,
          height: config.trackHeight,
          borderRadius: TRACK_RADIUS,
          padding: TRACK_PADDING,
          backgroundColor: defaultColors.track,
          display: 'flex',
          alignItems: 'center',
          justifyContent: checked ? 'flex-end' : 'flex-start',
          flexShrink: 0,
          transition: 'background-color 150ms',
        }}
      >
        {/* Knob */}
        <div
          style={{
            width: config.knobSize,
            height: config.knobSize,
            borderRadius: KNOB_RADIUS,
            backgroundColor: defaultColors.knob,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 150ms',
            flexShrink: 0,
          }}
        >
          {/* Checkmark — visible only when checked */}
          {checked && (
            <CheckmarkIcon
              color={defaultColors.checkmark}
              size={config.checkmarkSize}
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
