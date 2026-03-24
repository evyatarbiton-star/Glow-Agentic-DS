// ============================================================
// GLOW DS — ZoeDrawer
// Figma: Zoe UI — "Medical benefit" drawer (node-id=11584:134644)
//
// Right-side push drawer for Zoe chat. Pushes chat content to
// the left — does NOT overlay with backdrop. Sits inline in a
// flex row with the chat container.
//
// Behavior: slides in from right pushing chat, Escape to close,
// close button in header. No backdrop, no portal.
// ============================================================

import { useEffect, useCallback, useRef } from 'react'
import { semanticColors as sc } from '../../../../tokens/semantic/colors'
import { typographyStyles } from '../../../../tokens/semantic/typography'
import { semanticSpacing } from '../../../../tokens/semantic/spacing'
import { primitiveShadows } from '../../../../tokens/primitive/shadows'
import { IconButton } from '../../IconButton/IconButton'
import CloseLine from '../../Icon/icons/line/Close'
import type { ZoeDrawerProps } from './ZoeDrawer.types'

// ── Token Constants ─────────────────────────────────────────
const DRAWER_WIDTH = 480                                       // desktop width (no token)
const DRAWER_BG = sc.neutral.surface.negative                  // #ffffff
const BORDER_COLOR = sc.neutral.border.strong                  // #e0e0e0
const DRAWER_SHADOW = primitiveShadows.xl                      // 0px 8px 32px rgba(0,0,0,0.12)

const HEADER_PADDING = semanticSpacing.m                       // 20px
const BODY_PADDING = semanticSpacing.m                         // 20px
const FOOTER_PADDING = semanticSpacing.m                       // 20px

const TITLE_STYLE = typographyStyles['heading-xs']             // Founders 20px/24px weight 500
const SUBTITLE_STYLE = typographyStyles['paragraph-m']         // Founders 16px/19px weight 400
const TITLE_COLOR = sc.neutral.text.DEFAULT                    // #000000
const SUBTITLE_COLOR = sc.neutral.text.dark                    // #404040

const TITLE_GAP = semanticSpacing.xxxs                         // 4px between title and subtitle

export function ZoeDrawer({
  open,
  onClose,
  title,
  subtitle,
  footer,
  children,
  className,
  style,
}: ZoeDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  // ── Escape key ──────────────────────────────────────────
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, handleKeyDown])

  // ── Click outside to close ──────────────────────────────
  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (panelRef.current && !panelRef.current.contains(target)) {
        // Don't close if clicking on a card — it will swap drawer content
        if (target.closest('[role="button"]') || target.closest('article')) return
        onClose()
      }
    }
    // Delay listener to avoid closing from the click that opened the drawer
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
    }, 0)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, onClose])

  // ── Styles ──────────────────────────────────────────────
  const panelStyle: React.CSSProperties = {
    width: open ? DRAWER_WIDTH : 0,
    minWidth: open ? DRAWER_WIDTH : 0,
    height: '100%',
    backgroundColor: DRAWER_BG,
    borderLeft: open ? `1px solid ${BORDER_COLOR}` : 'none',
    boxShadow: open ? DRAWER_SHADOW : 'none',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: 'width 250ms ease, min-width 250ms ease',
    ...style,
  }

  const headerStyle: React.CSSProperties = {
    flexShrink: 0,
    display: 'flex',
    alignItems: subtitle ? 'flex-start' : 'center',
    justifyContent: 'space-between',
    padding: HEADER_PADDING,
    borderBottom: `1px solid ${BORDER_COLOR}`,
    minWidth: DRAWER_WIDTH,
  }

  const titleBlockStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: TITLE_GAP,
    flex: 1,
    minWidth: 0,
  }

  const titleTextStyle: React.CSSProperties = {
    fontFamily: TITLE_STYLE.fontFamily,
    fontSize: TITLE_STYLE.fontSize,
    lineHeight: TITLE_STYLE.lineHeight,
    fontWeight: TITLE_STYLE.fontWeight,
    letterSpacing: TITLE_STYLE.letterSpacing,
    color: TITLE_COLOR,
    margin: 0,
  }

  const subtitleTextStyle: React.CSSProperties = {
    fontFamily: SUBTITLE_STYLE.fontFamily,
    fontSize: SUBTITLE_STYLE.fontSize,
    lineHeight: SUBTITLE_STYLE.lineHeight,
    fontWeight: SUBTITLE_STYLE.fontWeight,
    letterSpacing: SUBTITLE_STYLE.letterSpacing,
    color: SUBTITLE_COLOR,
    margin: 0,
  }

  const bodyStyle: React.CSSProperties = {
    flex: 1,
    minHeight: 0,
    overflowY: 'auto',
    padding: BODY_PADDING,
    minWidth: DRAWER_WIDTH,
  }

  const footerStyle: React.CSSProperties = {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: semanticSpacing.xxs,
    padding: FOOTER_PADDING,
    borderTop: `1px solid ${BORDER_COLOR}`,
    minWidth: DRAWER_WIDTH,
  }

  return (
    <div
      ref={panelRef}
      className={className}
      style={panelStyle}
      role={open ? 'dialog' : undefined}
      aria-label={open ? title : undefined}
    >
      {open && (
        <>
          {/* Header — sticky */}
          <div style={headerStyle}>
            <div style={titleBlockStyle}>
              <h2 style={titleTextStyle}>{title}</h2>
              {subtitle && <p style={subtitleTextStyle}>{subtitle}</p>}
            </div>
            <IconButton
              variant="ghost"
              size="md"
              icon={<CloseLine size="md" />}
              aria-label="Close drawer"
              onClick={onClose}
            />
          </div>

          {/* Body — scrolls */}
          <div style={bodyStyle}>
            {children}
          </div>

          {/* Footer — sticky */}
          {footer && (
            <div style={footerStyle}>
              {footer}
            </div>
          )}
        </>
      )}
    </div>
  )
}
