// ============================================================
// GLOW DS — DatePicker
// Date input with typed entry (MM/DD/YYYY) + calendar popup.
// Visual shell identical to TextInput; popup uses Select portal pattern.
//
// Variants: 3 Sizes (sm/md/lg) × 2 Shapes × States (default/disabled/error)
// ============================================================

import { useState, useRef, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { DatePickerProps, DatePickerSize } from './DatePicker.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { fontWeights, fontFamilies } from '../../../tokens/primitive/typography'
import { primitiveShadows } from '../../../tokens/primitive/shadows'
import { semanticZIndex } from '../../../tokens/semantic/z-index'
import Calendar12Line from '../Icon/icons/line/Calendar12'
import ChevronLeftLine from '../Icon/icons/line/ChevronLeft'
import ChevronRightLine from '../Icon/icons/line/ChevronRight'
import InfoCrFrLine from '../Icon/icons/line/InfoCrFr'
import { IconButton } from '../IconButton'

// ── Dimensions (identical to TextInput / Select) ─────────────
const INPUT_BORDER_WIDTH          = 1
const INPUT_BORDER_RADIUS_DEFAULT = 8    // borderRadius.xxs
const INPUT_BORDER_RADIUS_ROUNDED = 999  // borderRadius.full
const INPUT_PADDING_X             = 16   // spacing.s
const INPUT_PADDING_Y             = 8    // spacing.xxs
const ICON_SIZE                   = 20   // spacing.m
const GAP_VERTICAL                = 8    // spacing.xxs
const GAP_LABEL_ITEMS             = 4    // spacing.xxxs
const GAP_ICON_TEXT               = 8    // spacing.xxs

const SIZE_CONFIG: Record<DatePickerSize, { height: number }> = {
  sm: { height: 40 },
  md: { height: 48 },
  lg: { height: 56 },
}

// ── State Colors (identical to TextInput / Select) ───────────
const stateColors = {
  default:  { border: sc.neutral.border.strong, bg: sc.neutral.surface.negative, text: sc.neutral.text.DEFAULT, placeholder: sc.neutral.text.light, helperText: sc.neutral.text.light, iconColor: sc.neutral.text.DEFAULT },
  hover:    { border: sc.neutral.border.DEFAULT, bg: sc.neutral.surface.negative, text: sc.neutral.text.DEFAULT, placeholder: sc.neutral.text.light, helperText: sc.neutral.text.light, iconColor: sc.neutral.text.DEFAULT },
  focus:    { border: sc.neutral.border.DEFAULT, bg: sc.neutral.surface.negative, text: sc.neutral.text.DEFAULT, placeholder: sc.neutral.text.light, helperText: sc.neutral.text.light, iconColor: sc.neutral.text.DEFAULT },
  disabled: { border: sc.neutral.border.strong, bg: sc.neutral.surface.subtle, text: sc.neutral.text.disabledDark, placeholder: sc.neutral.text.disabledDark, helperText: sc.neutral.text.light, iconColor: sc.neutral.text.disabledDark },
  error:    { border: sc.error.border.DEFAULT, bg: sc.neutral.surface.negative, text: sc.neutral.text.DEFAULT, placeholder: sc.neutral.text.light, helperText: sc.error.text.DEFAULT, iconColor: sc.neutral.text.DEFAULT },
} as const

// ── Typography (identical to TextInput / Select) ─────────────
const LABEL_FONT_SIZE    = parseInt(typographyStyles['label-s'].fontSize)
const LABEL_LINE_HEIGHT  = typographyStyles['label-s'].lineHeight
const LABEL_FONT_WEIGHT  = typographyStyles['label-s'].fontWeight
const LABEL_COLOR        = sc.neutral.text.DEFAULT
const INPUT_FONT_SIZE    = parseInt(typographyStyles['paragraph-m'].fontSize)
const INPUT_LINE_HEIGHT  = typographyStyles['paragraph-m'].lineHeight
const INPUT_FONT_WEIGHT  = typographyStyles['paragraph-m'].fontWeight
const HELPER_FONT_SIZE   = parseInt(typographyStyles['paragraph-s'].fontSize)
const HELPER_LINE_HEIGHT = typographyStyles['paragraph-s'].lineHeight
const HELPER_FONT_WEIGHT = typographyStyles['paragraph-s'].fontWeight
const REQUIRED_COLOR     = sc.error.text.DEFAULT
const FOCUS_RING_COLOR   = sc.neutral.border.light
const FOCUS_RING_WIDTH   = 2
const FONT               = fontFamilies.default

// ── Calendar Popup Tokens ────────────────────────────────────
const CALENDAR_WIDTH            = 280
const CALENDAR_BORDER_RADIUS    = 12   // borderRadius.xs — same as Select dropdown
const CALENDAR_SHADOW           = primitiveShadows['2xl']
const CALENDAR_Z_INDEX          = semanticZIndex.dropdown
const CALENDAR_GAP_FROM_TRIGGER = 4
const CAL_PADDING               = 16   // spacing.s
const CAL_DAY_SIZE              = 32
const CAL_DAY_GAP               = 4
const CAL_DAY_RADIUS            = 6
const CAL_WEEKDAY_FONT_SIZE     = 11
const CAL_DAY_FONT_SIZE         = 14
const CAL_NAV_ICON_SIZE         = 20

const CAL_DAY_DEFAULT_BG    = 'transparent'
const CAL_DAY_HOVER_BG      = sc.neutral.surface.subtle
const CAL_DAY_SELECTED_BG   = sc.neutral.text.DEFAULT
const CAL_DAY_TODAY_BG       = sc.neutral.border.light
const CAL_DAY_SELECTED_TEXT = sc.neutral.text.negative
const CAL_DAY_DISABLED_TEXT = sc.neutral.text.disabledDark
const CAL_DAY_OUTSIDE_TEXT  = sc.neutral.text.medium
const CAL_WEEKDAY_COLOR     = sc.neutral.text.light
const CAL_HEADER_TEXT_COLOR = sc.neutral.text.DEFAULT

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const MONTH_NAMES_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

type CalendarView = 'days' | 'months' | 'years'

// ── Grid cell tokens for month / year views ──
const GRID_CELL_HEIGHT = 36
const GRID_CELL_RADIUS = 6

// ── DS Icons (inline SVGs replaced) ──────────────────────────

// ── Date Utilities ───────────────────────────────────────────

function formatDateInput(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 8)
  if (digits.length <= 2) return digits
  if (digits.length <= 4) return digits.slice(0, 2) + ' / ' + digits.slice(2)
  return digits.slice(0, 2) + ' / ' + digits.slice(2, 4) + ' / ' + digits.slice(4, 8)
}

function parseDisplayDate(s: string): Date | null {
  if (s.length !== 14) return null
  const parts = s.split(' / ')
  if (parts.length !== 3) return null
  const month = parseInt(parts[0], 10) - 1
  const day   = parseInt(parts[1], 10)
  const year  = parseInt(parts[2], 10)
  if (isNaN(month) || isNaN(day) || isNaN(year)) return null
  if (month < 0 || month > 11) return null
  if (day < 1 || day > 31) return null
  if (year < 1900 || year > 2100) return null
  const date = new Date(year, month, day)
  if (date.getMonth() !== month || date.getDate() !== day) return null
  return date
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

// ── Inline Mask ─────────────────────────────────────────────
// Builds per-character data for the mask overlay behind the input.
// Typed digits → transparent in mask (input shows them in black).
// Unfilled positions → placeholder letter (M/D/Y) in gray.

// Builds the full mask string matching the input's format.
// Typed positions get the actual digit; unfilled positions get template char.
// Returns segments: each has text + whether it's placeholder (gray) or typed (transparent).
function buildMaskSegments(digits: string): Array<{ text: string; isPlaceholder: boolean }> {
  // Template: MM / DD / YYYY — matches formatDateInput output format
  // Each group maps digit indices to template characters
  const groups: Array<{ digitIdx: number; template: string } | { sep: string; afterDigits: number }> = [
    { digitIdx: 0, template: 'M' },
    { digitIdx: 1, template: 'M' },
    { sep: ' / ', afterDigits: 3 },
    { digitIdx: 2, template: 'D' },
    { digitIdx: 3, template: 'D' },
    { sep: ' / ', afterDigits: 5 },
    { digitIdx: 4, template: 'Y' },
    { digitIdx: 5, template: 'Y' },
    { digitIdx: 6, template: 'Y' },
    { digitIdx: 7, template: 'Y' },
  ]

  const segments: Array<{ text: string; isPlaceholder: boolean }> = []
  let lastIsPlaceholder: boolean | null = null

  for (const g of groups) {
    let text: string
    let isPlaceholder: boolean

    if ('sep' in g) {
      // Separator — transparent if typed past, placeholder (gray) if not
      isPlaceholder = digits.length < g.afterDigits
      text = g.sep
    } else {
      if (g.digitIdx < digits.length) {
        text = digits[g.digitIdx]
        isPlaceholder = false
      } else {
        text = g.template
        isPlaceholder = true
      }
    }

    // Merge into existing segment if same type
    if (lastIsPlaceholder === isPlaceholder && segments.length > 0) {
      segments[segments.length - 1].text += text
    } else {
      segments.push({ text, isPlaceholder })
      lastIsPlaceholder = isPlaceholder
    }
  }

  return segments
}

function isDateDisabled(date: Date, minDate?: Date, maxDate?: Date): boolean {
  if (minDate) {
    const min = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())
    if (date < min) return true
  }
  if (maxDate) {
    const max = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())
    if (date > max) return true
  }
  return false
}

interface CalendarCell {
  day: number
  month: number
  year: number
  isCurrentMonth: boolean
}

function getCalendarCells(year: number, month: number): CalendarCell[] {
  const firstDay    = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrev  = new Date(year, month, 0).getDate()
  const cells: CalendarCell[] = []

  // Leading cells from previous month
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = daysInPrev - i
    const m = month === 0 ? 11 : month - 1
    const y = month === 0 ? year - 1 : year
    cells.push({ day: d, month: m, year: y, isCurrentMonth: false })
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, month, year, isCurrentMonth: true })
  }

  // Trailing cells from next month (fill to 42 = 6 rows)
  const remaining = 42 - cells.length
  for (let d = 1; d <= remaining; d++) {
    const m = month === 11 ? 0 : month + 1
    const y = month === 11 ? year + 1 : year
    cells.push({ day: d, month: m, year: y, isCurrentMonth: false })
  }

  return cells
}

// ── DayCell Sub-component ────────────────────────────────────

function DayCell({
  day, month, year, isCurrentMonth, isSelected, isToday, isDisabled, onClick,
}: {
  day: number; month: number; year: number
  isCurrentMonth: boolean; isSelected: boolean; isToday: boolean; isDisabled: boolean
  onClick: (date: Date) => void
}) {
  const [hovered, setHovered] = useState(false)

  const bg = isSelected
    ? CAL_DAY_SELECTED_BG
    : hovered && !isDisabled
      ? CAL_DAY_HOVER_BG
      : isToday && !isSelected
        ? CAL_DAY_TODAY_BG
        : CAL_DAY_DEFAULT_BG

  const textColor = isSelected
    ? CAL_DAY_SELECTED_TEXT
    : isDisabled
      ? CAL_DAY_DISABLED_TEXT
      : !isCurrentMonth
        ? CAL_DAY_OUTSIDE_TEXT
        : sc.neutral.text.DEFAULT

  return (
    <button
      type="button"
      onClick={() => !isDisabled && onClick(new Date(year, month, day))}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={isDisabled}
      tabIndex={isCurrentMonth && !isDisabled ? 0 : -1}
      aria-label={`${MONTH_NAMES[month]} ${day}, ${year}`}
      style={{
        width: CAL_DAY_SIZE,
        height: CAL_DAY_SIZE,
        borderRadius: CAL_DAY_RADIUS,
        border: 'none',
        backgroundColor: bg,
        color: textColor,
        fontSize: CAL_DAY_FONT_SIZE,
        fontWeight: isSelected ? fontWeights.medium : fontWeights.regular,
        fontFamily: FONT,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 100ms ease',
        padding: 0,
        position: 'relative',
      }}
    >
      {day}
      {isToday && !isSelected && (
        <span style={{
          position: 'absolute', bottom: 2, left: '50%',
          transform: 'translateX(-50%)',
          width: 4, height: 4, borderRadius: '50%',
          backgroundColor: sc.neutral.text.DEFAULT,
        }} />
      )}
    </button>
  )
}

// ── MonthCell Sub-component ──────────────────────────────────

function MonthCell({
  monthIndex, year, isSelected, isCurrent, isDisabled, onClick,
}: {
  monthIndex: number; year: number
  isSelected: boolean; isCurrent: boolean; isDisabled: boolean
  onClick: (month: number) => void
}) {
  const [hovered, setHovered] = useState(false)

  const bg = isSelected
    ? CAL_DAY_SELECTED_BG
    : hovered && !isDisabled
      ? CAL_DAY_HOVER_BG
      : isCurrent
        ? CAL_DAY_TODAY_BG
        : CAL_DAY_DEFAULT_BG

  const textColor = isSelected
    ? CAL_DAY_SELECTED_TEXT
    : isDisabled
      ? CAL_DAY_DISABLED_TEXT
      : sc.neutral.text.DEFAULT

  return (
    <button
      type="button"
      onClick={() => !isDisabled && onClick(monthIndex)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={isDisabled}
      aria-label={`${MONTH_NAMES[monthIndex]} ${year}`}
      style={{
        height: GRID_CELL_HEIGHT,
        borderRadius: GRID_CELL_RADIUS,
        border: 'none',
        backgroundColor: bg,
        color: textColor,
        fontSize: 13,
        fontWeight: isSelected ? fontWeights.medium : fontWeights.regular,
        fontFamily: FONT,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 100ms ease',
        padding: 0,
      }}
    >
      {MONTH_NAMES_SHORT[monthIndex]}
    </button>
  )
}

// ── YearCell Sub-component ──────────────────────────────────

function YearCell({
  year, isSelected, isCurrent, isDisabled, onClick,
}: {
  year: number
  isSelected: boolean; isCurrent: boolean; isDisabled: boolean
  onClick: (year: number) => void
}) {
  const [hovered, setHovered] = useState(false)

  const bg = isSelected
    ? CAL_DAY_SELECTED_BG
    : hovered && !isDisabled
      ? CAL_DAY_HOVER_BG
      : isCurrent
        ? CAL_DAY_TODAY_BG
        : CAL_DAY_DEFAULT_BG

  const textColor = isSelected
    ? CAL_DAY_SELECTED_TEXT
    : isDisabled
      ? CAL_DAY_DISABLED_TEXT
      : sc.neutral.text.DEFAULT

  return (
    <button
      type="button"
      onClick={() => !isDisabled && onClick(year)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={isDisabled}
      aria-label={String(year)}
      style={{
        height: GRID_CELL_HEIGHT,
        borderRadius: GRID_CELL_RADIUS,
        border: 'none',
        backgroundColor: bg,
        color: textColor,
        fontSize: 13,
        fontWeight: isSelected ? fontWeights.medium : fontWeights.regular,
        fontFamily: FONT,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 100ms ease',
        padding: 0,
      }}
    >
      {year}
    </button>
  )
}

// ── Main DatePicker Component ────────────────────────────────

export function DatePicker({
  label,
  helperText,
  required = false,
  showInfoIcon = false,
  disabled = false,
  error = false,
  size = 'md',
  shape = 'default',
  value,
  onChange,
  onDateChange,
  minDate,
  maxDate,
  name,
}: DatePickerProps) {

  // ── Value state ──
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(value ?? '')
  const displayValue = isControlled ? value : internalValue

  // ── Calendar state ──
  const [isOpen, setIsOpen] = useState(false)
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [calendarPos, setCalendarPos] = useState<{ top: number; left: number } | null>(null)
  const [calendarView, setCalendarView] = useState<CalendarView>('days')
  const [yearRangeStart, setYearRangeStart] = useState(() => Math.floor(today.getFullYear() / 12) * 12)

  // ── Refs ──
  const wrapperRef  = useRef<HTMLDivElement>(null)
  const inputBoxRef = useRef<HTMLDivElement>(null)
  const inputRef    = useRef<HTMLInputElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

  // ── Derived ──
  const { height } = SIZE_CONFIG[size]
  const borderRadius = shape === 'rounded' ? INPUT_BORDER_RADIUS_ROUNDED : INPUT_BORDER_RADIUS_DEFAULT
  const colors = disabled ? stateColors.disabled : error ? stateColors.error : stateColors.default
  const selectedDate = parseDisplayDate(displayValue)

  // ── Inline mask ──
  const rawDigits = displayValue.replace(/\D/g, '')
  const maskSegments = buildMaskSegments(rawDigits)

  // ── Focus styling helpers (same pattern as TextInput) ──
  const applyFocusStyling = () => {
    const box = inputBoxRef.current
    if (!box || disabled) return
    if (!error) box.style.borderColor = stateColors.focus.border
    box.style.outline = `${FOCUS_RING_WIDTH}px solid ${FOCUS_RING_COLOR}`
    box.style.outlineOffset = `${FOCUS_RING_WIDTH}px`
  }

  const removeFocusStyling = () => {
    const box = inputBoxRef.current
    if (!box) return
    box.style.borderColor = colors.border
    box.style.outline = 'none'
    box.style.outlineOffset = '0px'
  }

  // ── Input handlers ──
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDateInput(e.target.value)
    if (!isControlled) setInternalValue(formatted)
    onChange?.(formatted)
    const date = parseDisplayDate(formatted)
    onDateChange?.(date)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const pos = inputRef.current?.selectionStart ?? 0
      // Positions 2-4 are the first " / " separator, 7-9 are the second
      const inSep1 = pos >= 2 && pos <= 4
      const inSep2 = pos >= 7 && pos <= 9
      if (inSep1 || inSep2) {
        e.preventDefault()
        const digitEnd = inSep1 ? 2 : 7
        const raw = displayValue.slice(0, digitEnd - 1) + displayValue.slice(digitEnd)
        const formatted = formatDateInput(raw)
        if (!isControlled) setInternalValue(formatted)
        onChange?.(formatted)
        onDateChange?.(parseDisplayDate(formatted))
        const newPos = digitEnd - 1
        setTimeout(() => {
          inputRef.current?.setSelectionRange(newPos, newPos)
        }, 0)
      }
    }
    if (e.key === 'Escape' && isOpen) {
      e.preventDefault()
      setIsOpen(false)
      removeFocusStyling()
    }
  }

  const onInputFocus = () => {
    applyFocusStyling()
  }

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const relatedTarget = e.relatedTarget as Node | null
    const inWrapper  = wrapperRef.current?.contains(relatedTarget)
    const inCalendar = calendarRef.current?.contains(relatedTarget)
    if (!inWrapper && !inCalendar) {
      removeFocusStyling()
    }
  }

  // ── Hover handlers (same as TextInput) ──
  const onMouseEnter = () => {
    if (disabled || isOpen) return
    const box = inputBoxRef.current
    if (!box) return
    if (!error) box.style.borderColor = stateColors.hover.border
  }

  const onMouseLeave = () => {
    if (disabled || isOpen) return
    const box = inputBoxRef.current
    if (!box) return
    box.style.borderColor = colors.border
  }

  // ── Calendar toggle ──
  const toggleCalendar = () => {
    if (disabled) return
    if (isOpen) {
      setIsOpen(false)
      setCalendarView('days')
      removeFocusStyling()
    } else {
      const parsed = parseDisplayDate(displayValue)
      if (parsed) {
        setViewMonth(parsed.getMonth())
        setViewYear(parsed.getFullYear())
      } else {
        setViewMonth(today.getMonth())
        setViewYear(today.getFullYear())
      }
      setCalendarView('days')
      setIsOpen(true)
      applyFocusStyling()
    }
  }

  // ── Calendar positioning (portal — same as Select) ──
  const updateCalendarPos = useCallback(() => {
    if (inputBoxRef.current) {
      const rect = inputBoxRef.current.getBoundingClientRect()
      setCalendarPos({
        top:  rect.bottom + CALENDAR_GAP_FROM_TRIGGER + window.scrollY,
        left: rect.left + window.scrollX,
      })
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    updateCalendarPos()
    window.addEventListener('scroll', updateCalendarPos, true)
    window.addEventListener('resize', updateCalendarPos)
    return () => {
      window.removeEventListener('scroll', updateCalendarPos, true)
      window.removeEventListener('resize', updateCalendarPos)
    }
  }, [isOpen, updateCalendarPos])

  // ── Click-outside (two-ref pattern from Select) ──
  useEffect(() => {
    if (!isOpen) return
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node
      const inWrapper  = wrapperRef.current?.contains(target)
      const inCalendar = calendarRef.current?.contains(target)
      if (!inWrapper && !inCalendar) {
        setIsOpen(false)
        setCalendarView('days')
        removeFocusStyling()
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [isOpen, error, colors.border])

  // ── Calendar navigation ──
  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  // ── Day selection from calendar ──
  const handleDaySelect = (date: Date) => {
    const mm   = String(date.getMonth() + 1).padStart(2, '0')
    const dd   = String(date.getDate()).padStart(2, '0')
    const yyyy = String(date.getFullYear())
    const formatted = `${mm} / ${dd} / ${yyyy}`

    if (!isControlled) setInternalValue(formatted)
    onChange?.(formatted)
    onDateChange?.(date)
    setIsOpen(false)
    setCalendarView('days')
    removeFocusStyling()
    inputRef.current?.focus()
  }

  // ── Calendar key handler ──
  const handleCalendarKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      setIsOpen(false)
      setCalendarView('days')
      removeFocusStyling()
      inputRef.current?.focus()
    }
  }

  // ── Month/Year disabled helpers ──
  const isMonthDisabled = (monthIdx: number, yr: number): boolean => {
    if (minDate) {
      const lastDay = new Date(yr, monthIdx + 1, 0)
      if (lastDay < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true
    }
    if (maxDate) {
      const firstDay = new Date(yr, monthIdx, 1)
      if (firstDay > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true
    }
    return false
  }

  const isYearDisabled = (yr: number): boolean => {
    if (minDate && yr < minDate.getFullYear()) return true
    if (maxDate && yr > maxDate.getFullYear()) return true
    return false
  }

  // ── View transition handlers ──
  const handleHeaderClick = () => {
    if (calendarView === 'days') {
      setCalendarView('months')
    } else if (calendarView === 'months') {
      setYearRangeStart(Math.floor(viewYear / 12) * 12)
      setCalendarView('years')
    }
  }

  const handleMonthSelect = (monthIdx: number) => {
    setViewMonth(monthIdx)
    setCalendarView('days')
  }

  const handleYearSelect = (yr: number) => {
    setViewYear(yr)
    setCalendarView('months')
  }

  // ── Chevron handlers per view ──
  const handlePrevNav = () => {
    if (calendarView === 'days') prevMonth()
    else if (calendarView === 'months') setViewYear(y => y - 1)
    else setYearRangeStart(s => s - 12)
  }

  const handleNextNav = () => {
    if (calendarView === 'days') nextMonth()
    else if (calendarView === 'months') setViewYear(y => y + 1)
    else setYearRangeStart(s => s + 12)
  }

  // ── Header label per view ──
  const headerLabel =
    calendarView === 'days'   ? `${MONTH_NAMES[viewMonth]} ${viewYear}` :
    calendarView === 'months' ? String(viewYear) :
    `${yearRangeStart} – ${yearRangeStart + 11}`

  const headerClickable = calendarView !== 'years'

  const chevronAriaLabel =
    calendarView === 'days'   ? ['Previous month', 'Next month'] :
    calendarView === 'months' ? ['Previous year', 'Next year'] :
    ['Previous 12 years', 'Next 12 years']

  // ── Render ──
  const showHeader = label || required || showInfoIcon
  const cells = getCalendarCells(viewYear, viewMonth)

  return (
    <div
      ref={wrapperRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: GAP_VERTICAL,
        width: '100%',
      }}
    >
      {/* ── Header: label + asterisk + info icon ── */}
      {showHeader && (
        <div style={{ display: 'flex', gap: GAP_LABEL_ITEMS, alignItems: 'center' }}>
          {label && (
            <label style={{
              fontSize: LABEL_FONT_SIZE,
              lineHeight: LABEL_LINE_HEIGHT,
              fontWeight: LABEL_FONT_WEIGHT,
              color: LABEL_COLOR,
            }}>
              {label}
            </label>
          )}
          {required && (
            <span style={{
              fontSize: LABEL_FONT_SIZE,
              lineHeight: LABEL_LINE_HEIGHT,
              fontWeight: LABEL_FONT_WEIGHT,
              color: REQUIRED_COLOR,
            }}>
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
        {/* Input + inline mask wrapper */}
        <div style={{ position: 'relative', flex: 1 }}>
          {/* Mask layer — shows placeholder chars for unfilled positions */}
          {rawDigits.length < 8 && (
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none',
                fontSize: INPUT_FONT_SIZE,
                lineHeight: INPUT_LINE_HEIGHT,
                fontWeight: INPUT_FONT_WEIGHT,
                fontFamily: FONT,
                letterSpacing: '0.02em',
              }}
            >
              {maskSegments.map((seg, i) => (
                <span
                  key={i}
                  style={{ color: seg.isPlaceholder ? colors.placeholder : 'transparent' }}
                >
                  {seg.text}
                </span>
              ))}
            </span>
          )}

          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            value={displayValue}
            disabled={disabled}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            aria-label={label ?? 'Date'}
            style={{
              position: 'relative',
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
              fontFamily: FONT,
              letterSpacing: '0.02em',
            }}
          />
        </div>

        {/* Calendar icon button */}
        <button
          type="button"
          onClick={toggleCalendar}
          disabled={disabled}
          aria-label="Open date picker"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          tabIndex={-1}
          style={{
            flexShrink: 0,
            width: ICON_SIZE,
            height: ICON_SIZE,
            marginLeft: GAP_ICON_TEXT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            background: 'transparent',
            padding: 0,
            color: colors.iconColor,
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
        >
          <Calendar12Line size="md" style={{ color: colors.iconColor }} />
        </button>
      </div>

      {/* ── Helper Text ── */}
      {helperText && (
        <p style={{
          fontSize: HELPER_FONT_SIZE,
          lineHeight: HELPER_LINE_HEIGHT,
          fontWeight: HELPER_FONT_WEIGHT,
          color: error ? stateColors.error.helperText : colors.helperText,
          margin: 0,
        }}>
          {helperText}
        </p>
      )}

      {/* ── Hidden input for form submission ── */}
      {name && <input type="hidden" name={name} value={displayValue} />}

      {/* ── Calendar Portal ── */}
      {isOpen && calendarPos && createPortal(
        <div
          ref={calendarRef}
          role="dialog"
          aria-label="Date picker"
          onKeyDown={handleCalendarKeyDown}
          style={{
            position: 'absolute',
            top: calendarPos.top,
            left: calendarPos.left,
            width: CALENDAR_WIDTH,
            zIndex: CALENDAR_Z_INDEX,
            backgroundColor: sc.neutral.surface.negative,
            borderRadius: CALENDAR_BORDER_RADIUS,
            boxShadow: CALENDAR_SHADOW,
            padding: CAL_PADDING,
            fontFamily: FONT,
          }}
        >
          {/* Navigation header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}>
            <IconButton
              icon={<ChevronLeftLine size="sm" />}
              aria-label={chevronAriaLabel[0]}
              variant="ghost"
              size="sm"
              pill={false}
              onClick={handlePrevNav}
            />

            {headerClickable ? (
              <button
                type="button"
                onClick={handleHeaderClick}
                aria-label={calendarView === 'days' ? 'Switch to month selection' : 'Switch to year selection'}
                style={{
                  fontSize: 14, fontWeight: fontWeights.medium,
                  color: CAL_HEADER_TEXT_COLOR,
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  padding: '2px 8px',
                  borderRadius: 6,
                  transition: 'background-color 100ms ease',
                  fontFamily: FONT,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = CAL_DAY_HOVER_BG }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
              >
                {headerLabel}
              </button>
            ) : (
              <span style={{
                fontSize: 14, fontWeight: fontWeights.medium,
                color: CAL_HEADER_TEXT_COLOR,
                userSelect: 'none',
              }}>
                {headerLabel}
              </span>
            )}

            <IconButton
              icon={<ChevronRightLine size="sm" />}
              aria-label={chevronAriaLabel[1]}
              variant="ghost"
              size="sm"
              pill={false}
              onClick={handleNextNav}
            />
          </div>

          {/* ── Days View ── */}
          {calendarView === 'days' && (
            <>
              {/* Weekday labels */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                marginBottom: CAL_DAY_GAP,
              }}>
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                  <div key={d} style={{
                    textAlign: 'center',
                    fontSize: CAL_WEEKDAY_FONT_SIZE,
                    fontWeight: 500,
                    color: CAL_WEEKDAY_COLOR,
                    paddingBottom: 4,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    userSelect: 'none',
                  }}>
                    {d}
                  </div>
                ))}
              </div>

              {/* Day grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: CAL_DAY_GAP,
                justifyItems: 'center',
              }}>
                {cells.map((cell) => {
                  const cellDate = new Date(cell.year, cell.month, cell.day)
                  const isSelected = selectedDate ? isSameDay(cellDate, selectedDate) : false
                  const isToday = isSameDay(cellDate, today)
                  const isDis = isDateDisabled(cellDate, minDate, maxDate)

                  return (
                    <DayCell
                      key={`${cell.year}-${cell.month}-${cell.day}`}
                      day={cell.day}
                      month={cell.month}
                      year={cell.year}
                      isCurrentMonth={cell.isCurrentMonth}
                      isSelected={isSelected}
                      isToday={isToday}
                      isDisabled={isDis}
                      onClick={handleDaySelect}
                    />
                  )
                })}
              </div>
            </>
          )}

          {/* ── Months View ── */}
          {calendarView === 'months' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: CAL_DAY_GAP,
            }}>
              {MONTH_NAMES_SHORT.map((_, idx) => {
                const isSel = selectedDate
                  ? selectedDate.getFullYear() === viewYear && selectedDate.getMonth() === idx
                  : false
                const isCur = today.getFullYear() === viewYear && today.getMonth() === idx
                return (
                  <MonthCell
                    key={idx}
                    monthIndex={idx}
                    year={viewYear}
                    isSelected={isSel}
                    isCurrent={isCur && !isSel}
                    isDisabled={isMonthDisabled(idx, viewYear)}
                    onClick={handleMonthSelect}
                  />
                )
              })}
            </div>
          )}

          {/* ── Years View ── */}
          {calendarView === 'years' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: CAL_DAY_GAP,
            }}>
              {Array.from({ length: 12 }, (_, i) => {
                const yr = yearRangeStart + i
                const isSel = selectedDate ? selectedDate.getFullYear() === yr : false
                const isCur = today.getFullYear() === yr
                return (
                  <YearCell
                    key={yr}
                    year={yr}
                    isSelected={isSel}
                    isCurrent={isCur && !isSel}
                    isDisabled={isYearDisabled(yr)}
                    onClick={handleYearSelect}
                  />
                )
              })}
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  )
}
