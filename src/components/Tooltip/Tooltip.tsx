import { useState, useRef, useEffect }  from 'react'
import { createPortal } from 'react-dom'
import type { TooltipProps, TooltipDirection } from './Tooltip.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontWeights, fontFamilies } from '../../../tokens/primitive/typography'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { semanticZIndex } from '../../../tokens/semantic/z-index'
import { semanticShadows } from '../../../tokens/semantic/shadows'

// ============================================================
// GLOW DS — Tooltip Component
// Source: Figma Web DS — node-id=2347-42116
// URL: https://www.figma.com/design/ke9Y1BHl3xvX8UMRRAMQ9T/Web-DS?node-id=2347-42116
//
// Variants:    default | rich
// Directions:  top-left | top-right | bottom-left | bottom-right | left | right
// Modes:       hover (no onClose) | controlled (onClose provided)
// ============================================================

// ── DS Token Constants ───────────────────────────────────────

const BG_DEFAULT    = sc.overlay.surface.DEFAULT       // rgba(0, 0, 0, 0.72)
const BG_RICH       = sc.overlay.surface.light         // rgba(64, 64, 64, 0.72)
const BLUR          = sc.overlay.blur                   // 13px
const TEXT_WHITE    = sc.neutral.text.negative           // #ffffff
const BTN_OUTLINE_BG  = sc.neutral.surface.negative      // #ffffff
const BTN_OUTLINE_BDR = sc.neutral.border.strong         // #e0e0e0
const BTN_OUTLINE_TXT = sc.neutral.text.DEFAULT          // #000000
const BTN_OUTLINE_HOV = sc.neutral.surface.subtle        // #f2f2f2
const BTN_GHOST_TXT   = sc.neutral.text.negative         // #ffffff
const BTN_GHOST_HOV   = 'rgba(255,255,255,0.10)' // TOKEN-EXCEPTION: white alpha on inverted dark bg — tooltip-specific
const CLOSE_COLOR   = 'rgba(255,255,255,0.60)'   // TOKEN-EXCEPTION: white alpha on inverted dark bg — tooltip-specific
const CLOSE_HOV     = sc.neutral.text.negative           // #ffffff
const LINK_COLOR    = sc.neutral.text.negative           // #ffffff
const LINK_HOV      = 'rgba(255,255,255,0.80)' // TOKEN-EXCEPTION: white alpha on inverted dark bg — tooltip-specific

const RADIUS_BOX    = 12                  // radii.xs (12px)
const RADIUS_FULL   = 999                 // radii.full

// Box padding — Figma: pt=12(xs), pb=16(s), px=12(xs)
const PAD_TOP       = 12                  // spacing.xs
const PAD_BOTTOM    = 16                  // spacing.s
const PAD_X         = 12                  // spacing.xs

// Rich variant padding — Figma: p=8(xxs), pb=16(s)
const PAD_RICH      = 8                   // spacing.xxs
const PAD_RICH_BOTTOM = 16               // spacing.s

const ITEMS_GAP     = 10
const SECTION_GAP   = 16                  // spacing.s
const TEXT_GAP      = 4                   // spacing.xxxs
const BTN_GAP       = 8                   // spacing.xxs
const BTN_H         = 36
const BTN_PAD_X     = 12                  // spacing.xs
const BTN_SIZE      = parseInt(typographyStyles['label-xs'].fontSize)
const BTN_W         = typographyStyles['label-xs'].fontWeight
const CLOSE_SIZE    = 20
const ICON_SIZE     = 24
const MEDIA_RADIUS_IMG = 4               // radii.xxxs
const MEDIA_RADIUS_VID = 8               // radii.xxs
const GAP_TRIGGER   = 8

const MIN_W         = 250
const MAX_W         = 450
const FONT          = fontFamilies.default

// Default variant title — Paragraph/Medium style
const TITLE_SIZE    = parseInt(typographyStyles['paragraph-m'].fontSize)
const TITLE_W       = fontWeights.medium
const TITLE_LH      = typographyStyles['paragraph-m'].lineHeight

// Rich variant title — Labels/X Small style
const TITLE_RICH_SIZE = parseInt(typographyStyles['label-xs'].fontSize)
const TITLE_RICH_LH   = typographyStyles['label-xs'].lineHeight

const BODY_SIZE     = parseInt(typographyStyles['paragraph-s'].fontSize)
const BODY_W        = typographyStyles['paragraph-s'].fontWeight
const BODY_LH       = typographyStyles['paragraph-s'].lineHeight
const LINK_SIZE     = parseInt(typographyStyles['paragraph-s'].fontSize)

// Arrow dimensions
const ARROW_W       = 22
const ARROW_H       = 10
const ARROW_PAD     = 24                  // spacing.l
const ARROW_OVERLAP = 12


const SHADOW = semanticShadows.tooltip

// ── Arrow Components ─────────────────────────────────────────

// Standard arrow — SVG triangle (used for default variant)
function ArrowUp({ color }: { color: string }) {
  return (
    <svg width={ARROW_W} height={ARROW_H} viewBox={`0 0 ${ARROW_W} ${ARROW_H}`} fill="none" style={{ display: 'block', flexShrink: 0 }}>
      <polygon points={`0,${ARROW_H} ${ARROW_W},${ARROW_H} ${ARROW_W / 2},0`} fill={color} />
    </svg>
  )
}

function ArrowDown({ color }: { color: string }) {
  return (
    <svg width={ARROW_W} height={ARROW_H} viewBox={`0 0 ${ARROW_W} ${ARROW_H}`} fill="none" style={{ display: 'block', flexShrink: 0 }}>
      <polygon points={`0,0 ${ARROW_W},0 ${ARROW_W / 2},${ARROW_H}`} fill={color} />
    </svg>
  )
}

function ArrowLeft({ color }: { color: string }) {
  return (
    <svg width={ARROW_H} height={ARROW_W} viewBox={`0 0 ${ARROW_H} ${ARROW_W}`} fill="none" style={{ display: 'block', flexShrink: 0 }}>
      <polygon points={`${ARROW_H},0 ${ARROW_H},${ARROW_W} 0,${ARROW_W / 2}`} fill={color} />
    </svg>
  )
}

function ArrowRight({ color }: { color: string }) {
  return (
    <svg width={ARROW_H} height={ARROW_W} viewBox={`0 0 ${ARROW_H} ${ARROW_W}`} fill="none" style={{ display: 'block', flexShrink: 0 }}>
      <polygon points={`0,0 0,${ARROW_W} ${ARROW_H},${ARROW_W / 2}`} fill={color} />
    </svg>
  )
}


// ── Close Icon ───────────────────────────────────────────────

function CloseIcon({ onClose }: { onClose: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      type="button"
      aria-label="Close tooltip"
      onClick={onClose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: CLOSE_SIZE,
        height: CLOSE_SIZE,
        flexShrink: 0,
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        color: hovered ? CLOSE_HOV : CLOSE_COLOR,
        transition: 'color 120ms',
      }}
    >
      <svg width={10} height={10} viewBox="0 0 10 10" fill="none">
        <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  )
}

// ── Chevron Icon (for link) ──────────────────────────────────

function ChevronRight() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Action Button ────────────────────────────────────────────

function ActionBtn({ label, onClick, btnVariant }: { label: string; onClick?: () => void; btnVariant: 'outline' | 'ghost' }) {
  const [hovered, setHovered] = useState(false)
  const isOutline = btnVariant === 'outline'

  const bg = isOutline
    ? (hovered ? BTN_OUTLINE_HOV : BTN_OUTLINE_BG)
    : (hovered ? BTN_GHOST_HOV  : 'transparent')

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: BTN_H,
        paddingLeft: BTN_PAD_X,
        paddingRight: BTN_PAD_X,
        borderRadius: RADIUS_FULL,
        backgroundColor: bg,
        border: isOutline ? `1px solid ${BTN_OUTLINE_BDR}` : 'none',
        color: isOutline ? BTN_OUTLINE_TXT : BTN_GHOST_TXT,
        fontFamily: FONT,
        fontSize: BTN_SIZE,
        fontWeight: BTN_W,
        lineHeight: '18px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background-color 120ms',
      }}
    >
      {label}
    </button>
  )
}

// ── Tooltip Box ──────────────────────────────────────────────
// The inner content box (no arrow). Layout matches Figma:
//   Standard: 3-column row [leftIcon 24×24] [content flex:1] [close 20×20]
//   Rich:     close row + media + text area (different structure)

interface TooltipPanelProps extends Omit<TooltipProps, 'children' | 'open'> {
  direction: TooltipDirection
  bg: string
}

function TooltipBox({ bg, variant, title, text, leftIcon, media, link, primaryAction, secondaryAction, onClose, panelStyle }: TooltipPanelProps) {
  const isRich = variant === 'rich'

  // ── Rich variant layout ──────────────────────────────────
  if (isRich) {
    return (
      <div
        style={{
          backgroundColor: bg,
          boxShadow: SHADOW,
          backdropFilter: `blur(${BLUR})`,
          WebkitBackdropFilter: `blur(${BLUR})`,
          borderRadius: RADIUS_BOX,
          paddingLeft: PAD_RICH,
          paddingRight: PAD_RICH,
          paddingTop: 0,
          paddingBottom: PAD_RICH_BOTTOM,
          overflow: 'hidden',
          ...panelStyle,
        }}
      >
        {/* Inner frame with gap */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: PAD_RICH, paddingTop: PAD_RICH, paddingBottom: 0 }}>

          {/* Title + close row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: PAD_RICH, paddingRight: PAD_RICH }}>
            <p style={{ flex: 1, fontFamily: FONT, fontSize: TITLE_RICH_SIZE, fontWeight: TITLE_W, color: TEXT_WHITE, lineHeight: TITLE_RICH_LH, margin: 0 }}>
              {title}
            </p>
            {onClose && <CloseIcon onClose={onClose} />}
          </div>

          {/* Media area */}
          {media && (
            <div
              style={{
                borderRadius: media.type === 'video' ? MEDIA_RADIUS_VID : MEDIA_RADIUS_IMG,
                overflow: 'hidden',
                lineHeight: 0,
              }}
            >
              {media.type === 'video' ? (
                <video src={media.src} poster={media.poster} controls style={{ width: '100%', display: 'block' }} />
              ) : (
                <img src={media.src} alt={media.alt ?? ''} style={{ width: '100%', display: 'block' }} />
              )}
            </div>
          )}
        </div>

        {/* Text area below media */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: PAD_RICH, paddingLeft: PAD_RICH, paddingRight: PAD_RICH, paddingTop: TEXT_GAP }}>
          <p style={{ fontFamily: FONT, fontSize: BODY_SIZE, fontWeight: BODY_W, color: TEXT_WHITE, lineHeight: BODY_LH, margin: 0 }}>
            {text}
          </p>

          {/* Bottom link */}
          {link && (
            <a
              href={link.href ?? '#'}
              onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick?.() } : undefined}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                fontFamily: FONT,
                fontSize: LINK_SIZE,
                fontWeight: fontWeights.medium,
                color: LINK_COLOR,
                textDecoration: 'underline',
                cursor: 'pointer',
                transition: 'color 120ms',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = LINK_HOV }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = LINK_COLOR }}
            >
              {link.label}
              <ChevronRight />
            </a>
          )}
        </div>
      </div>
    )
  }

  // ── Standard (default) variant layout ────────────────────
  // Figma: single row with gap=10, items-start
  //   [leftIcon 24×24] [content column flex:1] [close 20×20]
  return (
    <div
      style={{
        backgroundColor: bg,
        boxShadow: SHADOW,
        backdropFilter: `blur(${BLUR})`,
        WebkitBackdropFilter: `blur(${BLUR})`,
        borderRadius: RADIUS_BOX,
        paddingTop: PAD_TOP,
        paddingBottom: PAD_BOTTOM,
        paddingLeft: PAD_X,
        paddingRight: PAD_X,
        overflow: 'hidden',
        ...panelStyle,
      }}
    >
      <div style={{ display: 'flex', gap: ITEMS_GAP, alignItems: 'flex-start' }}>

        {/* Left icon — fixed 24×24 */}
        {leftIcon && (
          <div style={{ width: ICON_SIZE, height: ICON_SIZE, flexShrink: 0, overflow: 'hidden', color: TEXT_WHITE }}>
            {leftIcon}
          </div>
        )}

        {/* Content column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: SECTION_GAP }}>

          {/* Text block: title + body with 4px gap */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: TEXT_GAP }}>
            {title && (
              <p style={{ fontFamily: FONT, fontSize: TITLE_SIZE, fontWeight: TITLE_W, color: TEXT_WHITE, lineHeight: TITLE_LH, margin: 0 }}>
                {title}
              </p>
            )}
            <p style={{ fontFamily: FONT, fontSize: BODY_SIZE, fontWeight: BODY_W, color: TEXT_WHITE, lineHeight: BODY_LH, margin: 0 }}>
              {text}
            </p>
          </div>

          {/* Action buttons */}
          {(primaryAction || secondaryAction) && (
            <div style={{ display: 'flex', gap: BTN_GAP }}>
              {primaryAction && (
                <ActionBtn label={primaryAction.label} onClick={primaryAction.onClick} btnVariant="outline" />
              )}
              {secondaryAction && (
                <ActionBtn label={secondaryAction.label} onClick={secondaryAction.onClick} btnVariant="ghost" />
              )}
            </div>
          )}
        </div>

        {/* Close icon — always top-right, sibling of content */}
        {onClose && <CloseIcon onClose={onClose} />}
      </div>
    </div>
  )
}

// ── Positioned Panel (box + arrow) ───────────────────────────
// Outer wrapper: holds arrow + box, applies shadow & blur.

export function TooltipPanel(props: TooltipPanelProps) {
  const { direction } = props
  const isRich = props.variant === 'rich'
  const bg = isRich ? BG_RICH : BG_DEFAULT

  const isTop    = direction === 'top-left'    || direction === 'top-right'
  const isBottom = direction === 'bottom-left' || direction === 'bottom-right'
  const isLeft   = direction === 'left'
  const isRight  = direction === 'right'
  const isAlignLeft = direction === 'top-left' || direction === 'bottom-left'

  // Outer panel styles — shadow + blur moved to TooltipBox (border-radius clips them)
  const outerStyle: React.CSSProperties = {
    minWidth: MIN_W,
    maxWidth: MAX_W,
  }

  // Arrow element — same SVG triangle for all variants
  const renderArrow = (dir: 'up' | 'down' | 'left' | 'right') => {
    switch (dir) {
      case 'up':    return <ArrowUp color={bg} />
      case 'down':  return <ArrowDown color={bg} />
      case 'left':  return <ArrowLeft color={bg} />
      case 'right': return <ArrowRight color={bg} />
    }
  }

  if (isTop || isBottom) {
    return (
      <div style={{ ...outerStyle, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        {isTop && (
          <div style={{
            display: 'flex',
            justifyContent: isAlignLeft ? 'flex-start' : 'flex-end',
            paddingLeft: isAlignLeft ? ARROW_PAD : undefined,
            paddingRight: !isAlignLeft ? ARROW_PAD : undefined,
            paddingBottom: ARROW_OVERLAP,
            marginBottom: -ARROW_OVERLAP,
          }}>
            {renderArrow('up')}
          </div>
        )}

        <TooltipBox {...props} bg={bg} />

        {isBottom && (
          <div style={{
            display: 'flex',
            justifyContent: isAlignLeft ? 'flex-start' : 'flex-end',
            paddingLeft: isAlignLeft ? ARROW_PAD : undefined,
            paddingRight: !isAlignLeft ? ARROW_PAD : undefined,
            paddingTop: ARROW_OVERLAP,
            marginTop: -ARROW_OVERLAP,
          }}>
            {renderArrow('down')}
          </div>
        )}
      </div>
    )
  }

  if (isLeft) {
    return (
      <div style={{ ...outerStyle, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ paddingRight: ARROW_OVERLAP, marginRight: -ARROW_OVERLAP }}>
          {renderArrow('left')}
        </div>
        <TooltipBox {...props} bg={bg} />
      </div>
    )
  }

  if (isRight) {
    return (
      <div style={{ ...outerStyle, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <TooltipBox {...props} bg={bg} />
        <div style={{ paddingLeft: ARROW_OVERLAP, marginLeft: -ARROW_OVERLAP }}>
          {renderArrow('right')}
        </div>
      </div>
    )
  }

  return <TooltipBox {...props} bg={bg} />
}

// ── Absolute Position Wrapper ─────────────────────────────────

function getPanelPositionStyle(direction: TooltipDirection): React.CSSProperties {
  const gap = GAP_TRIGGER
  switch (direction) {
    case 'top-left':
      return { top: `calc(100% + ${gap}px)`, left: 0 }
    case 'top-right':
      return { top: `calc(100% + ${gap}px)`, right: 0 }
    case 'bottom-left':
      return { bottom: `calc(100% + ${gap}px)`, left: 0 }
    case 'bottom-right':
      return { bottom: `calc(100% + ${gap}px)`, right: 0 }
    case 'left':
      return { left: `calc(100% + ${gap}px)`, top: '50%', transform: 'translateY(-50%)' }
    case 'right':
      return { right: `calc(100% + ${gap}px)`, top: '50%', transform: 'translateY(-50%)' }
  }
}

// ── Portal Position Calculator ───────────────────────────────

function getPortalPositionStyle(
  rect: DOMRect,
  direction: TooltipDirection,
): React.CSSProperties {
  const gap = GAP_TRIGGER
  const scrollX = window.scrollX
  const scrollY = window.scrollY

  switch (direction) {
    // "top-left" in Figma means the ARROW points up-left → panel appears BELOW trigger
    case 'top-left':
      return {
        position: 'absolute',
        top: rect.bottom + gap + scrollY,
        left: rect.left + scrollX,
      }
    case 'top-right':
      return {
        position: 'absolute',
        top: rect.bottom + gap + scrollY,
        right: document.documentElement.clientWidth - rect.right,
      }
    // "bottom-left" → arrow points down-left → panel appears ABOVE trigger
    case 'bottom-left':
      return {
        position: 'absolute',
        top: rect.top - gap + scrollY,
        left: rect.left + scrollX,
        transform: 'translateY(-100%)',
      }
    case 'bottom-right':
      return {
        position: 'absolute',
        top: rect.top - gap + scrollY,
        right: document.documentElement.clientWidth - rect.right,
        transform: 'translateY(-100%)',
      }
    case 'left':
      return {
        position: 'absolute',
        top: rect.top + rect.height / 2 + scrollY,
        left: rect.right + gap + scrollX,
        transform: 'translateY(-50%)',
      }
    case 'right':
      return {
        position: 'absolute',
        top: rect.top + rect.height / 2 + scrollY,
        right: document.documentElement.clientWidth - rect.left + gap,
        transform: 'translateY(-50%)',
      }
  }
}

// ── Tooltip (main export) ────────────────────────────────────

export function Tooltip({
  children,
  open,
  onClose,
  direction   = 'top-left',
  variant     = 'default',
  className,
  ...panelProps
}: TooltipProps) {
  const isControlled  = onClose !== undefined
  const triggerRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [portalStyle, setPortalStyle] = useState<React.CSSProperties | null>(null)
  const isVisible = isControlled ? (open ?? false) : hovered

  // Calculate portal position when visible
  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPortalStyle(getPortalPositionStyle(rect, direction))
    }
  }, [isVisible, direction])

  // Standalone panel — no trigger, just render the box
  if (!children) {
    return (
      <TooltipPanel
        direction={direction}
        variant={variant}
        onClose={onClose}
        {...panelProps}
      />
    )
  }

  return (
    <div
      ref={triggerRef}
      className={className}
      style={{ display: 'inline-block' }}
      onMouseEnter={!isControlled ? () => setHovered(true)  : undefined}
      onMouseLeave={!isControlled ? () => setHovered(false) : undefined}
    >
      {children}
      {isVisible && portalStyle && createPortal(
        <div style={{ zIndex: semanticZIndex.dropdown, ...portalStyle }}>
          <TooltipPanel
            direction={direction}
            variant={variant}
            onClose={onClose}
            {...panelProps}
          />
        </div>,
        document.body
      )}
    </div>
  )
}
