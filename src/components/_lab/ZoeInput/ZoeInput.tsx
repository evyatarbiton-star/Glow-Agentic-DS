// ============================================================
// GLOW DS — ZoeInput
// Figma: Zoe UI — "Zoe text bar web" (node-id=12742:178974)
//
// The Zoe AI chat input bar. Pill-shaped container with:
// - Zoe branding icon (visible in idle state)
// - Auto-expanding textarea
// - Send button (activates when text exists)
//
// States: idle → focused → typing → typed → sent
// Shape: pill (single line) → rounded-24 (multi-line)
// ============================================================

import { useRef, useState, useCallback, useEffect, useId } from 'react'
import { semanticColors as sc } from '../../../../tokens/semantic/colors'
import { typographyStyles } from '../../../../tokens/semantic/typography'
import { semanticSpacing } from '../../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../../tokens/semantic/radii'
import { primitiveShadows } from '../../../../tokens/primitive/shadows'
import ArrowUpCrFrSolid from '../../Icon/icons/solid/ArrowUpCrFr'
import ZoeDefaultIcon from '../../Icon/icons/line/ZoeDefault'
import type { ZoeInputProps } from './ZoeInput.types'

// ── Token Constants ─────────────────────────────────────────
const BAR_BG = sc.neutral.surface.negative                     // #ffffff — outer bar
const FIELD_BG = sc.neutral.surface.extraSubtle                // #fafafa — inner input field
const TEXT_COLOR = sc.neutral.text.DEFAULT                     // #000000 — typed text
const PLACEHOLDER_COLOR = sc.neutral.text.light                // #8a8a8a — placeholder when focused
const PLACEHOLDER_IDLE_COLOR = sc.neutral.text.DEFAULT         // #000000 — placeholder when idle
const SEND_ACTIVE = sc.primary.surface.DEFAULT                 // #fd5201 — send button enabled
const SEND_DISABLED = sc.neutral.surface.disabled              // #d4d4d4 — send button disabled
const SEND_HOVER = sc.primary.surface.hover                    // #fe7434 — send button hover

const BAR_PADDING = semanticSpacing.xxs                        // 8px — spacing.xxs
const FIELD_PADDING_LEFT = semanticSpacing.s                   // 16px — spacing.s
const FIELD_PADDING_RIGHT = semanticSpacing.xxxs               // 4px — spacing.xxxs
const FIELD_PADDING_Y = 10                                     // vertical padding when multi-line (no exact token)
const FIELD_HEIGHT = 40                                        // inner field min-height (no token)
const ICON_SIZE = 32                                           // Zoe icon + send button size (no token)
const MAX_ROWS = 6                                             // max textarea rows before scroll

const PARAGRAPH_L = typographyStyles['paragraph-l']            // 18px / 21px — paragraph/large
const FONT_SIZE = Number.parseInt(PARAGRAPH_L.fontSize)        // 18
const LINE_HEIGHT_NUM = Number.parseInt(PARAGRAPH_L.lineHeight) // 21

const SHADOW_DEFAULT = primitiveShadows.md                     // 0px 2px 8px rgba(0,0,0,0.08)
const SHADOW_FOCUSED = primitiveShadows.lg                     // 0px 4px 16px rgba(0,0,0,0.10)

const RADIUS_PILL = semanticRadii.full                         // 999px — corner-radius/full
const RADIUS_EXPANDED = semanticRadii.ln                       // 24px — corner-radius/l
const FIELD_RADIUS_EXPANDED = semanticRadii.sn                 // 16px — corner-radius/sn for expanded field

export function ZoeInput({
  value,
  onChange,
  onSubmit,
  placeholder = 'Ask Zoe anything...',
  disabled = false,
  autoFocus = false,
  showZoeIcon = true,
  className,
  style,
}: ZoeInputProps) {
  const instanceId = useId().replace(/:/g, '')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isSendHovered, setIsSendHovered] = useState(false)
  const [textareaHeight, setTextareaHeight] = useState(LINE_HEIGHT_NUM)

  const hasText = value.trim().length > 0
  const isIdle = !isFocused && !hasText
  const isMultiLine = textareaHeight > LINE_HEIGHT_NUM

  // ── Auto-resize textarea ────────────────────────────────
  const updateHeight = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = `${LINE_HEIGHT_NUM}px`
    const maxH = LINE_HEIGHT_NUM * MAX_ROWS
    const scrollH = Math.min(el.scrollHeight, maxH)
    el.style.height = `${scrollH}px`
    setTextareaHeight(scrollH)
  }, [])

  useEffect(() => {
    updateHeight()
  }, [value, updateHeight])

  // ── Handlers ────────────────────────────────────────────
  const handleSubmit = useCallback(() => {
    if (!hasText || disabled) return
    onSubmit(value.trim())
  }, [hasText, disabled, value, onSubmit])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }, [handleSubmit])

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    if (!hasText) {
      setIsFocused(false)
    }
  }, [hasText])

  const handleSendClick = useCallback(() => {
    handleSubmit()
    textareaRef.current?.focus()
  }, [handleSubmit])

  // ── Zoe icon visibility (animated) ───────────────────────
  const iconVisible = showZoeIcon && isIdle

  // ── Dynamic radius ───────────────────────────────────────
  const borderRadius = isMultiLine ? RADIUS_EXPANDED : RADIUS_PILL
  const fieldRadius = isMultiLine ? FIELD_RADIUS_EXPANDED : RADIUS_PILL

  // ── Styles ───────────────────────────────────────────────
  const barStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: BAR_PADDING,
    background: BAR_BG,
    borderRadius,
    boxShadow: isFocused || isHovered ? SHADOW_FOCUSED : SHADOW_DEFAULT,
    transition: 'box-shadow 0.15s ease, border-radius 0.15s ease',
    width: '100%',
    ...style,
  }

  const iconWrapStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    overflow: 'hidden',
    // Animate width + spacing to collapse smoothly; icon rotates & fades
    width: iconVisible ? 48 : 0,                                // 8pl + 32 icon + 8mr
    paddingLeft: iconVisible ? BAR_PADDING : 0,                 // spacing.xxs
    marginRight: iconVisible ? BAR_PADDING : 0,                 // spacing.xxs — gap between icon and field
    opacity: iconVisible ? 1 : 0,
    transform: iconVisible ? 'rotate(0deg)' : 'rotate(180deg) translateX(8px)',
    transition: 'width 0.25s ease, padding-left 0.25s ease, margin-right 0.25s ease, opacity 0.2s ease, transform 0.3s ease',
  }

  const fieldStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: isMultiLine ? 'flex-end' : 'center',
    gap: BAR_PADDING,
    flex: '1 1 0',
    minHeight: FIELD_HEIGHT,
    background: FIELD_BG,
    borderRadius: fieldRadius,
    paddingLeft: FIELD_PADDING_LEFT,
    paddingRight: FIELD_PADDING_RIGHT,
    paddingTop: isMultiLine ? FIELD_PADDING_Y : 0,
    paddingBottom: isMultiLine ? FIELD_PADDING_Y : 0,
    transition: 'border-radius 0.15s ease',
  }

  const textareaStyle: React.CSSProperties = {
    flex: '1 1 0',
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: PARAGRAPH_L.fontFamily,                        // Founders Grotesk, sans-serif
    fontSize: FONT_SIZE,
    lineHeight: `${LINE_HEIGHT_NUM}px`,
    color: TEXT_COLOR,
    resize: 'none',
    overflow: textareaHeight >= LINE_HEIGHT_NUM * MAX_ROWS ? 'auto' : 'hidden',
    padding: 0,
    margin: 0,
    height: textareaHeight,
    // Custom scrollbar for overflow
    scrollbarWidth: 'thin',
    scrollbarColor: `${sc.neutral.border.light} transparent`,
  }

  const sendStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: ICON_SIZE,
    height: ICON_SIZE,
    flexShrink: 0,
    cursor: hasText && !disabled ? 'pointer' : 'default',
    borderRadius: '50%',
    transition: 'transform 0.1s ease',
    transform: isSendHovered && hasText ? 'scale(1.05)' : 'scale(1)',
  }

  const sendColor = hasText && !disabled
    ? (isSendHovered ? SEND_HOVER : SEND_ACTIVE)
    : SEND_DISABLED

  // ── Dynamic placeholder color CSS ─────────────────────
  // Idle: black placeholder. Focused: grey placeholder.
  const textareaClass = `zoe-input-${instanceId}`
  const placeholderColor = isIdle ? PLACEHOLDER_IDLE_COLOR : PLACEHOLDER_COLOR
  const placeholderCSS = `
    .${textareaClass}::placeholder {
      color: ${placeholderColor};
      opacity: 1;
    }
  `

  return (
    <div
      className={className}
      style={barStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{placeholderCSS}</style>

      {/* Zoe icon — animates out on focus (half-spin + slide left) */}
      {showZoeIcon && (
        <div style={iconWrapStyle}>
          <ZoeDefaultIcon size="xl" />
        </div>
      )}

      {/* Input field area */}
      <div style={fieldStyle}>
        <textarea
          ref={textareaRef}
          className={textareaClass}
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          rows={1}
          style={textareaStyle}
          aria-label="Chat with Zoe"
        />

        {/* Send button */}
        <div
          style={sendStyle}
          onClick={handleSendClick}
          onMouseEnter={() => setIsSendHovered(true)}
          onMouseLeave={() => setIsSendHovered(false)}
          role="button"
          aria-label="Send message"
          aria-disabled={!hasText || disabled}
          tabIndex={hasText && !disabled ? 0 : -1}
        >
          <ArrowUpCrFrSolid size="xl" color={sendColor} />
        </div>
      </div>
    </div>
  )
}
