// ============================================================
// GLOW DS — Select (Dropdown)
// Figma: Web-DS → Select input / Dropdown (node 2337-40933)
// URL: https://www.figma.com/design/ke9Y1BHl3xvX8UMRRAMQ9T/Web-DS?node-id=2337-40933
//
// Trigger reuses TextInput visual pattern.
// Dropdown uses padded container with rich option support.
//
// Variants:
//   - searchable   → adds search input at top of dropdown
//   - multiple     → multi-select with tag chips in trigger
//   - renderTrigger → custom trigger content (e.g., logo + text)
// ============================================================

import { useRef, useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import type { SelectProps, SelectSize, SelectShape, SelectOption } from './Select.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { fontWeights, fontFamilies } from '../../../tokens/primitive/typography'
import { primitiveShadows } from '../../../tokens/primitive/shadows'
import ChevronDownLine from '../Icon/icons/line/ChevronDown'
import SearchLine from '../Icon/icons/line/Search'
import InfoCrFrLine from '../Icon/icons/line/InfoCrFr'

// ── Trigger Dimensions (same as TextInput) ──────────────────
const TRIGGER_BORDER_WIDTH          = 1
const TRIGGER_BORDER_RADIUS_DEFAULT = 8    // borderRadius.xxs
const TRIGGER_BORDER_RADIUS_ROUNDED = 999  // borderRadius.full
const TRIGGER_PADDING_X             = 16   // spacing.s
const TRIGGER_PADDING_Y             = 8    // spacing.xxs
const ICON_SIZE                     = 20   // spacing.m
const GAP_VERTICAL                  = 8    // spacing.xxs (header ↔ trigger ↔ helper)
const GAP_LABEL_ITEMS               = 4    // spacing.xxxs (title ↔ asterisk ↔ info)
const GAP_ICON_TEXT                  = 8    // spacing.xxs (leftIcon ↔ text)

// ── Size Config ─────────────────────────────────────────────
const SIZE_CONFIG: Record<SelectSize, { height: number }> = {
  sm: { height: 40 },  // matches Button sm
  md: { height: 48 },  // matches Button md
  lg: { height: 56 },  // matches Button lg
} as const

// ── Trigger State Colors (same as TextInput) ────────────────
type TriggerStateColors = {
  border: string
  bg: string
  text: string
  placeholder: string
  helperText: string
  iconColor: string
}

const stateColors = {
  default: {
    border:      sc.neutral.border.strong,
    bg:          sc.neutral.surface.negative,
    text:        sc.neutral.text.DEFAULT,
    placeholder: sc.neutral.text.light,
    helperText:  sc.neutral.text.light,
    iconColor:   sc.neutral.text.DEFAULT,
  },
  hover: {
    border:      sc.neutral.border.DEFAULT,
    bg:          sc.neutral.surface.negative,
    text:        sc.neutral.text.DEFAULT,
    placeholder: sc.neutral.text.light,
    helperText:  sc.neutral.text.light,
    iconColor:   sc.neutral.text.DEFAULT,
  },
  focus: {
    border:      sc.neutral.border.DEFAULT,
    bg:          sc.neutral.surface.negative,
    text:        sc.neutral.text.DEFAULT,
    placeholder: sc.neutral.text.light,
    helperText:  sc.neutral.text.light,
    iconColor:   sc.neutral.text.DEFAULT,
  },
  disabled: {
    border:      sc.neutral.border.strong,
    bg:          sc.neutral.surface.subtle,
    text:        sc.neutral.text.disabledDark,
    placeholder: sc.neutral.text.disabledDark,
    helperText:  sc.neutral.text.light,
    iconColor:   sc.neutral.text.disabledDark,
  },
  error: {
    border:      sc.error.border.DEFAULT,
    bg:          sc.neutral.surface.negative,
    text:        sc.neutral.text.DEFAULT,
    placeholder: sc.neutral.text.light,
    helperText:  sc.error.text.DEFAULT,
    iconColor:   sc.neutral.text.DEFAULT,
  },
} as const

// ── Dropdown Tokens ─────────────────────────────────────────
const DROPDOWN_BORDER_RADIUS   = 12     // borderRadius.xs
const DROPDOWN_SHADOW          = primitiveShadows['2xl'] // closest match
const DROPDOWN_PADDING         = 8      // spacing.xxs
const DROPDOWN_ITEMS_RADIUS    = 4      // borderRadius.xxxs
const DROPDOWN_GAP_FROM_TRIGGER = 4
const DROPDOWN_Z_INDEX         = 1000

// ── Option Tokens ───────────────────────────────────────────
const OPTION_PADDING_X         = 16
const OPTION_PADDING_Y         = 12
const OPTION_GAP               = 12
const OPTION_DEFAULT_BG        = sc.neutral.surface.negative
const OPTION_HOVER_BG          = sc.neutral.surface.subtle
const OPTION_DEFAULT_TEXT      = sc.neutral.text.dark
const OPTION_SELECTED_TEXT     = sc.neutral.text.DEFAULT
const OPTION_SELECTED_WEIGHT   = fontWeights.medium
const OPTION_DEFAULT_WEIGHT    = fontWeights.regular
const OPTION_DISABLED_TEXT     = sc.neutral.text.disabledDark

// ── Search Tokens ───────────────────────────────────────────
const SEARCH_PADDING_X         = 16
const SEARCH_PADDING_Y         = 12
const SEARCH_BORDER_COLOR      = sc.neutral.border.light
const SEARCH_ICON_COLOR        = sc.neutral.text.light
const SEARCH_FONT_SIZE         = parseInt(typographyStyles['paragraph-m'].fontSize)
const SEARCH_LINE_HEIGHT       = typographyStyles['paragraph-m'].lineHeight
const SEARCH_EMPTY_COLOR       = sc.neutral.text.light

// ── Tag Tokens (multi-select trigger chips) ─────────────────
const TAG_HEIGHT               = 28
const TAG_BG                   = sc.neutral.surface.subtle
const TAG_TEXT                 = sc.neutral.text.DEFAULT
const TAG_CLOSE_COLOR          = sc.neutral.text.light
const TAG_RADIUS               = 4
const TAG_PADDING_LEFT         = 8
const TAG_PADDING_RIGHT        = 4
const TAG_GAP                  = 4
const TAG_FONT_SIZE            = parseInt(typographyStyles['paragraph-s'].fontSize)
const TAG_LINE_HEIGHT          = typographyStyles['paragraph-s'].lineHeight

// ── Typography ──────────────────────────────────────────────
const LABEL_FONT_SIZE    = parseInt(typographyStyles['label-s'].fontSize)
const LABEL_LINE_HEIGHT  = typographyStyles['label-s'].lineHeight
const LABEL_FONT_WEIGHT  = typographyStyles['label-s'].fontWeight
const LABEL_COLOR        = sc.neutral.text.DEFAULT

const TRIGGER_FONT_SIZE  = parseInt(typographyStyles['paragraph-m'].fontSize)
const TRIGGER_LINE_HEIGHT = typographyStyles['paragraph-m'].lineHeight
const TRIGGER_FONT_WEIGHT = typographyStyles['paragraph-m'].fontWeight

const OPTION_FONT_SIZE   = parseInt(typographyStyles['paragraph-m'].fontSize)
const OPTION_LINE_HEIGHT = typographyStyles['paragraph-m'].lineHeight

const HELPER_FONT_SIZE   = parseInt(typographyStyles['paragraph-s'].fontSize)
const HELPER_LINE_HEIGHT = typographyStyles['paragraph-s'].lineHeight
const HELPER_FONT_WEIGHT = typographyStyles['paragraph-s'].fontWeight

const REQUIRED_COLOR     = sc.error.text.DEFAULT

// Focus ring
const FOCUS_RING_COLOR   = sc.neutral.border.light
const FOCUS_RING_WIDTH   = 2

// Chevron
const CHEVRON_TRANSITION = 'transform 200ms ease'

// ── DS Icon wrappers (inline SVGs replaced with DS components) ──

// ── Tag Close Icon SVG ──────────────────────────────────────
function TagCloseIcon() {
  return (
    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3l6 6M9 3l-6 6" stroke={TAG_CLOSE_COLOR} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ── TagChip (internal component for multi-select trigger) ───
function TagChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: TAG_GAP,
        paddingLeft: TAG_PADDING_LEFT,
        paddingRight: TAG_PADDING_RIGHT,
        height: TAG_HEIGHT,
        backgroundColor: TAG_BG,
        borderRadius: TAG_RADIUS,
        fontSize: TAG_FONT_SIZE,
        fontWeight: OPTION_DEFAULT_WEIGHT,
        lineHeight: TAG_LINE_HEIGHT,
        color: TAG_TEXT,
        cursor: 'default',
        fontFamily: 'inherit',
      }}
    >
      <span>{label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 20,
          height: 20,
          borderRadius: TAG_RADIUS,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          padding: 0,
        }}
        aria-label={`Remove ${label}`}
      >
        <TagCloseIcon />
      </button>
    </div>
  )
}

// ── Component ───────────────────────────────────────────────
export function Select({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  label,
  helperText,
  required = false,
  disabled = false,
  error = false,
  size = 'md',
  shape = 'default',
  iconLeft,
  showInfoIcon = false,
  name,
  maxVisibleOptions = 6,
  searchable = false,
  searchPlaceholder = 'Search...',
  multiple = false,
  multiValue,
  onMultiChange,
  renderTrigger,
}: SelectProps) {

  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [internalValue, setInternalValue] = useState(value ?? '')
  const [searchQuery, setSearchQuery] = useState('')
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number; width: number } | null>(null)

  // Support both controlled and uncontrolled modes
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const { height } = SIZE_CONFIG[size]
  const borderRadius = shape === 'rounded'
    ? TRIGGER_BORDER_RADIUS_ROUNDED
    : TRIGGER_BORDER_RADIUS_DEFAULT

  // ── Filtered options (search) ──
  const filteredOptions = searchable && searchQuery
    ? options.filter(o => o.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : options

  // Find selected option(s)
  const selectedOption = options.find(o => o.value === currentValue)
  const selectedMultiOptions = multiple && multiValue
    ? options.filter(o => multiValue.includes(o.value))
    : []

  // Determine current color set
  const getColors = (): TriggerStateColors => {
    if (disabled) return stateColors.disabled
    if (error) return stateColors.error
    return stateColors.default
  }
  const colors = getColors()

  // ── Dropdown max height ──
  const optionHeight = OPTION_PADDING_Y * 2 + 19 // py*2 + lineHeight
  const searchRowHeight = searchable ? SEARCH_PADDING_Y * 2 + 19 + 1 : 0 // include border
  const dropdownMaxHeight = DROPDOWN_PADDING * 2 + optionHeight * maxVisibleOptions + searchRowHeight

  // ── Click outside (checks both wrapper and portal dropdown) ──
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const inWrapper = wrapperRef.current?.contains(target)
      const inDropdown = dropdownRef.current?.contains(target)
      if (!inWrapper && !inDropdown) {
        setIsOpen(false)
        setSearchQuery('')
        if (triggerRef.current && !error) {
          triggerRef.current.style.borderColor = colors.border
        }
        if (triggerRef.current) {
          triggerRef.current.style.outline = 'none'
          triggerRef.current.style.outlineOffset = '0px'
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, error, colors.border])

  // ── Calculate dropdown position (portal) ──
  const updateDropdownPos = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setDropdownPos({
        top: rect.bottom + DROPDOWN_GAP_FROM_TRIGGER + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      })
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    updateDropdownPos()
    window.addEventListener('scroll', updateDropdownPos, true)
    window.addEventListener('resize', updateDropdownPos)
    return () => {
      window.removeEventListener('scroll', updateDropdownPos, true)
      window.removeEventListener('resize', updateDropdownPos)
    }
  }, [isOpen, updateDropdownPos])

  // ── Auto-focus search input on open ──
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen, searchable])

  // ── Reset highlighted index when search query changes ──
  useEffect(() => {
    if (searchable && isOpen) {
      setHighlightedIndex(filteredOptions.length > 0 ? 0 : -1)
    }
  }, [searchQuery])

  // ── Open / Close ──
  const applyFocusStyling = () => {
    if (triggerRef.current) {
      if (!error) {
        triggerRef.current.style.borderColor = stateColors.focus.border
      }
      triggerRef.current.style.outline = `${FOCUS_RING_WIDTH}px solid ${FOCUS_RING_COLOR}`
      triggerRef.current.style.outlineOffset = `${FOCUS_RING_WIDTH}px`
    }
  }

  const removeFocusStyling = () => {
    if (triggerRef.current) {
      triggerRef.current.style.borderColor = colors.border
      triggerRef.current.style.outline = 'none'
      triggerRef.current.style.outlineOffset = '0px'
    }
  }

  const toggleOpen = () => {
    if (disabled) return
    const next = !isOpen
    setIsOpen(next)
    if (next) {
      const idx = multiple ? 0 : filteredOptions.findIndex(o => o.value === value)
      setHighlightedIndex(idx >= 0 ? idx : 0)
      applyFocusStyling()
    } else {
      setSearchQuery('')
      removeFocusStyling()
    }
  }

  const selectOption = useCallback((option: SelectOption) => {
    if (option.disabled) return

    if (multiple) {
      // Toggle in multi-select — don't close dropdown
      const currentMulti = multiValue || []
      const newValues = currentMulti.includes(option.value)
        ? currentMulti.filter(v => v !== option.value)
        : [...currentMulti, option.value]
      onMultiChange?.(newValues)
      return
    }

    if (!isControlled) setInternalValue(option.value)
    onChange?.(option.value)
    setIsOpen(false)
    setSearchQuery('')
    removeFocusStyling()
  }, [onChange, colors.border, isControlled, multiple, multiValue, onMultiChange])

  // ── Keyboard navigation ──
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    // When search is focused, let typing go through
    if (searchable && isOpen && e.target === searchInputRef.current) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        if (e.key === 'ArrowDown') {
          setHighlightedIndex(prev => {
            let next = prev + 1
            while (next < filteredOptions.length && filteredOptions[next].disabled) next++
            return next < filteredOptions.length ? next : prev
          })
        } else {
          setHighlightedIndex(prev => {
            let next = prev - 1
            while (next >= 0 && filteredOptions[next].disabled) next--
            return next >= 0 ? next : prev
          })
        }
        return
      }
      if (e.key === 'Enter') {
        e.preventDefault()
        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          selectOption(filteredOptions[highlightedIndex])
        }
        return
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        setIsOpen(false)
        setSearchQuery('')
        removeFocusStyling()
        return
      }
      // Let all other keys (letters, backspace, etc.) go to search input
      return
    }

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (isOpen && highlightedIndex >= 0) {
          const opt = filteredOptions[highlightedIndex]
          if (opt && !opt.disabled) {
            selectOption(opt)
          }
        } else {
          toggleOpen()
        }
        break

      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen) {
          toggleOpen()
        } else {
          setHighlightedIndex(prev => {
            let next = prev + 1
            while (next < filteredOptions.length && filteredOptions[next].disabled) next++
            return next < filteredOptions.length ? next : prev
          })
        }
        break

      case 'ArrowUp':
        e.preventDefault()
        if (isOpen) {
          setHighlightedIndex(prev => {
            let next = prev - 1
            while (next >= 0 && filteredOptions[next].disabled) next--
            return next >= 0 ? next : prev
          })
        }
        break

      case 'Escape':
        e.preventDefault()
        setIsOpen(false)
        setSearchQuery('')
        removeFocusStyling()
        break

      case 'Tab':
        if (isOpen) {
          setIsOpen(false)
          setSearchQuery('')
          removeFocusStyling()
        }
        break
    }
  }

  // ── Hover handlers for trigger ──
  const onMouseEnter = () => {
    if (disabled || isOpen) return
    const box = triggerRef.current
    if (!box) return
    if (!error) {
      box.style.borderColor = stateColors.hover.border
    }
  }

  const onMouseLeave = () => {
    if (disabled || isOpen) return
    const box = triggerRef.current
    if (!box) return
    box.style.borderColor = colors.border
  }

  // ── Multi-select: check if option is selected ──
  const isOptionMultiSelected = (optionValue: string) => {
    return multiple && multiValue ? multiValue.includes(optionValue) : false
  }

  // ── Trigger content ──
  const renderTriggerContent = () => {
    // Custom render
    if (renderTrigger) {
      const selected = multiple ? selectedMultiOptions : selectedOption
      return renderTrigger(selected)
    }

    // Multi-select: show tags
    if (multiple) {
      if (selectedMultiOptions.length === 0) {
        return (
          <div
            style={{
              flex: 1,
              fontSize: TRIGGER_FONT_SIZE,
              lineHeight: TRIGGER_LINE_HEIGHT,
              fontWeight: TRIGGER_FONT_WEIGHT,
              color: colors.placeholder,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontFamily: 'inherit',
            }}
          >
            {placeholder}
          </div>
        )
      }
      return (
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexWrap: 'wrap',
            gap: TAG_GAP,
            alignItems: 'center',
            minWidth: 0,
          }}
        >
          {selectedMultiOptions.map(opt => (
            <TagChip
              key={opt.value}
              label={opt.label}
              onRemove={() => {
                const newValues = (multiValue || []).filter(v => v !== opt.value)
                onMultiChange?.(newValues)
              }}
            />
          ))}
        </div>
      )
    }

    // Default: show selected text or placeholder
    return (
      <div
        style={{
          flex: 1,
          fontSize: TRIGGER_FONT_SIZE,
          lineHeight: TRIGGER_LINE_HEIGHT,
          fontWeight: TRIGGER_FONT_WEIGHT,
          color: selectedOption ? colors.text : colors.placeholder,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontFamily: 'inherit',
        }}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>
    )
  }

  // ── Render ──
  const showHeader = label || required || showInfoIcon
  const useMinHeight = multiple && selectedMultiOptions.length > 0

  return (
    <div
      ref={wrapperRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: GAP_VERTICAL,
        width: '100%',
        position: 'relative',
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

      {/* ── Trigger Box ── */}
      <div
        ref={triggerRef}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          display: 'flex',
          alignItems: 'center',
          ...(useMinHeight
            ? { minHeight: height, paddingTop: TAG_GAP, paddingBottom: TAG_GAP }
            : { height, paddingTop: TRIGGER_PADDING_Y, paddingBottom: TRIGGER_PADDING_Y }
          ),
          paddingLeft: TRIGGER_PADDING_X,
          paddingRight: TRIGGER_PADDING_X,
          backgroundColor: colors.bg,
          border: `${TRIGGER_BORDER_WIDTH}px solid ${colors.border}`,
          borderRadius,
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'border-color 150ms ease',
          outline: 'none',
          userSelect: 'none',
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

        {/* Trigger content (text / tags / custom) */}
        {renderTriggerContent()}

        {/* Chevron icon (rotates when open) */}
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
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: CHEVRON_TRANSITION,
          }}
        >
          <ChevronDownLine size="md" />
        </div>
      </div>

      {/* ── Helper Text ── */}
      {helperText && (
        <p
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

      {/* ── Hidden input for form submission ── */}
      {name && !multiple && (
        <input type="hidden" name={name} value={currentValue || ''} />
      )}
      {name && multiple && (multiValue || []).map(v => (
        <input key={v} type="hidden" name={name} value={v} />
      ))}

      {/* ── Dropdown Menu (portal) ── */}
      {isOpen && dropdownPos && createPortal(
        <div
          ref={dropdownRef}
          role="listbox"
          style={{
            position: 'absolute',
            top: dropdownPos.top,
            left: dropdownPos.left,
            width: dropdownPos.width,
            zIndex: DROPDOWN_Z_INDEX,
            backgroundColor: sc.neutral.surface.negative,       // neutral.negative
            borderRadius: DROPDOWN_BORDER_RADIUS,
            boxShadow: DROPDOWN_SHADOW,
            maxHeight: dropdownMaxHeight,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* ── Search Input ── */}
          {searchable && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: GAP_ICON_TEXT,
                paddingLeft: SEARCH_PADDING_X,
                paddingRight: SEARCH_PADDING_X,
                paddingTop: SEARCH_PADDING_Y,
                paddingBottom: SEARCH_PADDING_Y,
                borderBottom: `1px solid ${SEARCH_BORDER_COLOR}`,
                flexShrink: 0,
              }}
            >
              <SearchLine size="md" style={{ color: SEARCH_ICON_COLOR }} />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={searchPlaceholder}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: SEARCH_FONT_SIZE,
                  lineHeight: SEARCH_LINE_HEIGHT,
                  fontWeight: OPTION_DEFAULT_WEIGHT,
                  color: stateColors.default.text,
                  backgroundColor: 'transparent',
                  fontFamily: 'inherit',
                  padding: 0,
                }}
              />
            </div>
          )}

          {/* ── Options ── */}
          <div
            style={{
              padding: DROPDOWN_PADDING,
              overflowY: 'auto',
              flex: 1,
            }}
          >
            <div
              style={{
                borderRadius: DROPDOWN_ITEMS_RADIUS,
                overflow: 'hidden',
              }}
            >
              {filteredOptions.length === 0 && (
                <div
                  style={{
                    padding: `${OPTION_PADDING_Y}px ${OPTION_PADDING_X}px`,
                    fontSize: OPTION_FONT_SIZE,
                    lineHeight: OPTION_LINE_HEIGHT,
                    color: SEARCH_EMPTY_COLOR,
                    fontFamily: 'inherit',
                  }}
                >
                  No results found
                </div>
              )}
              {filteredOptions.map((option, index) => {
                const isSelected = multiple
                  ? isOptionMultiSelected(option.value)
                  : option.value === currentValue
                const isHighlighted = index === highlightedIndex
                const isDisabled = !!option.disabled

                return (
                  <div
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={isDisabled}
                    onClick={() => {
                      if (!isDisabled) selectOption(option)
                    }}
                    onMouseEnter={() => {
                      if (!isDisabled) setHighlightedIndex(index)
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: OPTION_GAP,
                      paddingLeft: OPTION_PADDING_X,
                      paddingRight: OPTION_PADDING_X,
                      paddingTop: OPTION_PADDING_Y,
                      paddingBottom: OPTION_PADDING_Y,
                      backgroundColor: isHighlighted && !isDisabled
                        ? OPTION_HOVER_BG
                        : OPTION_DEFAULT_BG,
                      cursor: isDisabled ? 'not-allowed' : 'pointer',
                      transition: 'background-color 100ms ease',
                    }}
                  >
                    {/* Option left icon */}
                    {option.iconLeft && (
                      <div
                        style={{
                          flexShrink: 0,
                          width: ICON_SIZE,
                          height: ICON_SIZE,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isDisabled
                            ? OPTION_DISABLED_TEXT
                            : isSelected
                              ? OPTION_SELECTED_TEXT
                              : OPTION_DEFAULT_TEXT,
                        }}
                      >
                        {option.iconLeft}
                      </div>
                    )}

                    {/* Option label + additional info */}
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        minWidth: 0,
                      }}
                    >
                      <span
                        style={{
                          fontSize: OPTION_FONT_SIZE,
                          lineHeight: OPTION_LINE_HEIGHT,
                          fontWeight: isSelected ? OPTION_SELECTED_WEIGHT : OPTION_DEFAULT_WEIGHT,
                          color: isDisabled
                            ? OPTION_DISABLED_TEXT
                            : isSelected
                              ? OPTION_SELECTED_TEXT
                              : OPTION_DEFAULT_TEXT,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          fontFamily: 'inherit',
                        }}
                      >
                        {option.label}
                      </span>
                      {option.additionalInfo && (
                        <span
                          style={{
                            fontSize: OPTION_FONT_SIZE,
                            lineHeight: OPTION_LINE_HEIGHT,
                            fontWeight: OPTION_DEFAULT_WEIGHT,
                            color: isDisabled
                              ? OPTION_DISABLED_TEXT
                              : OPTION_DEFAULT_TEXT,
                            flexShrink: 0,
                            marginLeft: OPTION_GAP,
                            fontFamily: 'inherit',
                          }}
                        >
                          {option.additionalInfo}
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
