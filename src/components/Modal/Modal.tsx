import { useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import type { ModalProps, ModalSize } from './Modal.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticRadii } from '../../../tokens/semantic/radii'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { primitiveShadows } from '../../../tokens/primitive/shadows'
import { fontFamilies } from '../../../tokens/primitive/typography'
import { typographyStyles } from '../../../tokens/semantic/typography'
import CloseLine from '../Icon/icons/line/Close'
import ChevronLeftLine from '../Icon/icons/line/ChevronLeft'
import { IconButton } from '../IconButton'

// Modal Component — Figma node-id=2370-44085 (desktop), node-id=2370-43655 (mobile)

const BACKDROP_BG     = sc.overlay.surface.DEFAULT          // rgba(0, 0, 0, 0.72)
const PANEL_BG        = sc.neutral.surface.negative          // #ffffff
const PANEL_RADIUS    = semanticRadii.ln                     // 24px
const PANEL_SHADOW    = primitiveShadows.xl                  // 0px 8px 32px rgba(0,0,0,0.12)

const BORDER_COLOR    = sc.neutral.border.strong             // #e0e0e0
const TITLE_COLOR     = sc.neutral.text.DEFAULT              // #000000

const HEADER_PX       = semanticSpacing.l                    // 24px
const HEADER_PY       = semanticSpacing.s                    // 16px
const FOOTER_PX       = semanticSpacing.l                    // 24px
const FOOTER_PY       = semanticSpacing.m                    // 20px
const FOOTER_GAP      = semanticSpacing.xxs                  // 8px

// Mobile footer: tighter padding from Figma mobile spec
const MOBILE_FOOTER_PX = semanticSpacing.m                   // 20px
const MOBILE_FOOTER_PY = semanticSpacing.s                   // 16px

const ICON_BTN_SIZE   = 40                                   // spacing for centering spacer
const CLOSE_ICON_SIZE = 'md' as const                        // 20px

// Title: Heading/Small from Figma — 24px/28px
const TITLE_SIZE      = 24
const TITLE_LH        = '28px'
const TITLE_WEIGHT    = parseInt(typographyStyles['heading-s']?.fontWeight ?? '400')
const FONT            = fontFamilies.default

const Z_INDEX         = 1500                                 // above Select/DatePicker/Tooltip (1000)
const ANIM_DURATION   = '150ms'
const MOBILE_BP       = 640                                  // px — mobile breakpoint

const SIZE_MAP: Record<ModalSize, number> = {
  sm: 480,
  md: 600,
  lg: 708,
}

const MODAL_CSS = `
  @keyframes modal-backdrop-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes modal-panel-in {
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes modal-sheet-in {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }

  /* ── Desktop (default) ── */
  .glow-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: ${Z_INDEX};
    display: flex;
    align-items: center;
    justify-content: center;
    animation: modal-backdrop-in ${ANIM_DURATION} ease forwards;
  }

  .glow-modal-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 48px);
    background-color: ${PANEL_BG};
    border-radius: ${PANEL_RADIUS};
    box-shadow: ${PANEL_SHADOW};
    overflow: hidden;
    outline: none;
    animation: modal-panel-in ${ANIM_DURATION} ease forwards;
  }

  .glow-modal-footer {
    padding: ${FOOTER_PY} ${FOOTER_PX};
    border-top: 1px solid ${BORDER_COLOR};
    flex-shrink: 0;
  }

  /* ── Mobile (< ${MOBILE_BP}px) — bottom sheet ── */
  @media (max-width: ${MOBILE_BP - 1}px) {
    .glow-modal-overlay {
      align-items: flex-end;
      justify-content: stretch;
    }

    .glow-modal-panel {
      width: 100% !important;
      max-width: 100vw;
      max-height: 90vh;
      border-radius: ${PANEL_RADIUS} ${PANEL_RADIUS} 0 0;
      animation: modal-sheet-in ${ANIM_DURATION} ease forwards;
    }

    .glow-modal-footer {
      padding: ${MOBILE_FOOTER_PY} ${MOBILE_FOOTER_PX};
    }
  }
`

export function Modal({
  open,
  onClose,
  title,
  size = 'md',
  showBackButton = false,
  onBack,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  children,
  footer,
  footerActions,
  footerLeft,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const titleId = useRef(`modal-title-${Math.random().toString(36).slice(2, 8)}`).current

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (closeOnEscape && e.key === 'Escape') {
      e.stopPropagation()
      onClose()
    }
  }, [closeOnEscape, onClose])

  const handleTab = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !panelRef.current) return

    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }, [])

  useEffect(() => {
    if (!open) return

    // Save previous focus
    previousFocusRef.current = document.activeElement as HTMLElement

    // Lock body scroll
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Add listeners
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keydown', handleTab)

    // Focus the panel
    requestAnimationFrame(() => {
      panelRef.current?.focus()
    })

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keydown', handleTab)

      // Restore focus
      previousFocusRef.current?.focus()
    }
  }, [open, handleKeyDown, handleTab])

  if (!open) return null

  const hasFooter = footer !== undefined || footerActions !== undefined
  const renderFooter = () => {
    if (footer !== undefined) return footer
    if (footerActions === undefined) return null

    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: footerLeft ? 'space-between' : 'flex-end',
        gap: FOOTER_GAP,
      }}>
        {footerLeft && <div style={{ flex: 1 }}>{footerLeft}</div>}
        <div style={{ display: 'flex', alignItems: 'center', gap: FOOTER_GAP, flexShrink: 0 }}>
          {footerActions}
        </div>
      </div>
    )
  }

  return createPortal(
    <div className="glow-modal-overlay">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: BACKDROP_BG,
        }}
        onClick={closeOnBackdropClick ? onClose : undefined}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className="glow-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        style={{ width: SIZE_MAP[size] }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: HEADER_PX,
            paddingRight: HEADER_PX,
            paddingTop: HEADER_PY,
            paddingBottom: HEADER_PY,
            borderBottom: `1px solid ${BORDER_COLOR}`,
            flexShrink: 0,
          }}
        >
          {/* Invisible spacer when no back button — keeps title centered */}
          {showBackButton ? (
            <IconButton
              icon={<ChevronLeftLine size={CLOSE_ICON_SIZE} />}
              aria-label="Go back"
              variant="outline"
              size="md"
              onClick={onBack ?? onClose}
            />
          ) : (
            <div style={{ width: ICON_BTN_SIZE, height: ICON_BTN_SIZE, flexShrink: 0, visibility: 'hidden' }} />
          )}

          <p
            id={titleId}
            style={{
              flex: 1,
              fontFamily: FONT,
              fontSize: TITLE_SIZE,
              fontWeight: TITLE_WEIGHT,
              lineHeight: TITLE_LH,
              color: TITLE_COLOR,
              textAlign: 'center',
              margin: 0,
              minWidth: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </p>

          <IconButton
            icon={<CloseLine size={CLOSE_ICON_SIZE} />}
            aria-label="Close modal"
            variant="outline"
            size="md"
            onClick={onClose}
          />
        </div>

        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            minHeight: 0,
          }}
        >
          {children}
        </div>

        {hasFooter && (
          <div className="glow-modal-footer">
            {renderFooter()}
          </div>
        )}
      </div>

      <style>{MODAL_CSS}</style>
    </div>,
    document.body
  )
}
