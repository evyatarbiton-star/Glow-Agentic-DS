import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import type {
  SideNavProps,
  SideNavProfileProps,
  SideNavSectionProps,
  SideNavNavItemProps,
  SideNavSubItemProps,
  SideNavToolItemProps,
  SideNavAppDownloadProps,
  SideNavFooterProps,
  SideNavFooterItemProps,
} from './SideNav.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticZIndex } from '../../../tokens/semantic/z-index'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../tokens/semantic/radii'
import { fontFamilies, fontWeights } from '../../../tokens/primitive/typography'
import CloseLine from '../Icon/icons/line/Close'
import ChevronDownLine from '../Icon/icons/line/ChevronDown'
import ChevronUpLine from '../Icon/icons/line/ChevronUp'
import AppleSolid from '../Icon/icons/solid/Apple'
import AndroidSolid from '../Icon/icons/solid/Android'
import { IconButton } from '../IconButton'

// ============================================================
// GLOW DS — SideNav Component (Compound)
// Source: Figma Web DS — node-id=532-9256 (components), node-id=1816-5027 (assembled)
//
// Slides in from the left with a dark backdrop overlay.
// Uses compound components for flexible, reorderable content.
// ============================================================

// ── DS Token Constants ───────────────────────────────────────

const BACKDROP_BG       = sc.overlay.surface.DEFAULT           // rgba(0,0,0,0.72)
const PANEL_BG          = sc.neutral.surface.negative          // #ffffff
const PANEL_WIDTH       = 400                                  // px — Figma spec
const BORDER_COLOR      = sc.neutral.border.strong             // #e0e0e0
const BORDER_LIGHT      = sc.neutral.border.light              // #ededed

const TEXT_DEFAULT      = sc.neutral.text.DEFAULT              // #000000
const TEXT_DARK         = sc.neutral.text.dark                 // #404040

const SURFACE_EXTRA_SUBTLE = sc.neutral.surface.extraSubtle    // #fafafa
const SURFACE_SUBTLE    = sc.neutral.surface.subtle            // #f2f2f2

const FONT              = fontFamilies.default                 // Founders Grotesk
const FONT_DISPLAY      = fontFamilies.display                 // Tiempos Headline
const W_REGULAR         = fontWeights.regular                  // 400
const W_MEDIUM          = fontWeights.medium                   // 500

const PAD_M             = semanticSpacing.m                    // 20px
const PAD_L             = semanticSpacing.l                    // 24px
const PAD_S             = semanticSpacing.s                    // 16px
const PAD_XS            = semanticSpacing.xs                   // 12px
const PAD_XXS           = semanticSpacing.xxs                  // 8px
const PAD_XXXS          = semanticSpacing.xxxs                 // 4px
const PAD_XXL           = semanticSpacing.xxl                  // 40px
const PAD_XXXXL         = semanticSpacing.xxxxl                // 56px
const GAP_L             = semanticSpacing.l                    // 24px
const GAP_M             = semanticSpacing.m                    // 20px

const RADIUS_XXXS       = semanticRadii.xxxs                   // 4px
const RADIUS_XXS        = semanticRadii.xxs                    // 8px
const RADIUS_XS         = semanticRadii.xs                     // 12px
const RADIUS_SN         = semanticRadii.sn                     // 16px
const RADIUS_M          = semanticRadii.ln                     // 24px

// ── Component-specific dimensions (from Figma) ─────────────
const NAV_ITEM_HEIGHT   = 40                                   // Figma: main nav / sub-item row height
const THUMBNAIL_SIZE    = 56                                   // Figma: tool thumbnail (spacing.xxxxl)
const QR_SIZE           = 100                                  // Figma: QR code container

const Z_INDEX           = semanticZIndex.modal                  // 1500 — same as Modal
const ANIM_DURATION     = '250ms'
const ANIM_EASING       = 'cubic-bezier(0.32, 0.72, 0, 1)'    // smooth ease-out
const MOBILE_BP         = 640                                  // px — mobile breakpoint

// ── CSS (injected once) ──────────────────────────────────────

const SIDENAV_CSS = `
  @keyframes glow-sidenav-backdrop-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes glow-sidenav-backdrop-out {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
  @keyframes glow-sidenav-slide-in {
    from { transform: translateX(-100%); }
    to   { transform: translateX(0); }
  }
  @keyframes glow-sidenav-slide-out {
    from { transform: translateX(0); }
    to   { transform: translateX(-100%); }
  }

  .glow-sidenav-overlay {
    position: fixed;
    inset: 0;
    z-index: ${Z_INDEX};
    display: flex;
  }
  .glow-sidenav-overlay[data-state="open"] {
    animation: glow-sidenav-backdrop-in ${ANIM_DURATION} ${ANIM_EASING} forwards;
  }
  .glow-sidenav-overlay[data-state="closing"] {
    animation: glow-sidenav-backdrop-out ${ANIM_DURATION} ${ANIM_EASING} forwards;
  }

  .glow-sidenav-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${PANEL_WIDTH}px;
    max-width: ${PANEL_WIDTH}px;
    height: 100%;
    background-color: ${PANEL_BG};
    outline: none;
    flex-shrink: 0;
  }
  @media (max-width: ${MOBILE_BP - 1}px) {
    .glow-sidenav-panel {
      width: 100vw;
      max-width: 100vw;
    }
  }
  .glow-sidenav-overlay[data-state="open"] .glow-sidenav-panel {
    animation: glow-sidenav-slide-in ${ANIM_DURATION} ${ANIM_EASING} forwards;
  }
  .glow-sidenav-overlay[data-state="closing"] .glow-sidenav-panel {
    animation: glow-sidenav-slide-out ${ANIM_DURATION} ${ANIM_EASING} forwards;
  }

  /* AppDownload responsive — hide QR on mobile */
  .glow-sidenav-app-qr {
    display: flex;
  }
  @media (max-width: ${MOBILE_BP - 1}px) {
    .glow-sidenav-app-qr {
      display: none !important;
    }
    .glow-sidenav-app-download {
      padding: ${PAD_S} !important;
    }
  }
`

// ── Helpers ──────────────────────────────────────────────────

let cssInjected = false
function ensureSideNavCSS() {
  if (cssInjected) return
  const style = document.createElement('style')
  style.textContent = SIDENAV_CSS
  document.head.appendChild(style)
  cssInjected = true
}

// ── SideNav (Root) ───────────────────────────────────────────

export function SideNav({
  open,
  onClose,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  children,
}: SideNavProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const [state, setState] = useState<'closed' | 'open' | 'closing'>('closed')

  useEffect(() => { ensureSideNavCSS() }, [])

  // Open/close state machine
  useEffect(() => {
    if (open) {
      setState('open')
    } else if (state === 'open') {
      setState('closing')
    }
  }, [open])

  // Handle animation end → fully close
  const handleAnimationEnd = useCallback(() => {
    if (state === 'closing') {
      setState('closed')
    }
  }, [state])

  // Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (closeOnEscape && e.key === 'Escape') {
      e.stopPropagation()
      onClose()
    }
  }, [closeOnEscape, onClose])

  // Focus trap
  const handleTab = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !panelRef.current) return
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus() }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus() }
    }
  }, [])

  // Body scroll lock + focus management
  useEffect(() => {
    if (state !== 'open') return
    previousFocusRef.current = document.activeElement as HTMLElement
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keydown', handleTab)
    requestAnimationFrame(() => panelRef.current?.focus())
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keydown', handleTab)
      previousFocusRef.current?.focus()
    }
  }, [state, handleKeyDown, handleTab])

  if (state === 'closed') return null

  return createPortal(
    <div
      className="glow-sidenav-overlay"
      data-state={state}
      onAnimationEnd={handleAnimationEnd}
    >
      {/* Backdrop */}
      <div
        style={{ position: 'absolute', inset: 0, backgroundColor: BACKDROP_BG }}
        onClick={closeOnBackdropClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="glow-sidenav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        tabIndex={-1}
      >
        {/* Header — close button (72px = PAD_S + IconButton md 40 + PAD_S) */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingLeft: PAD_M,
          paddingRight: PAD_M,
          paddingTop: PAD_S,
          paddingBottom: PAD_S,
          flexShrink: 0,
        }}>
          <IconButton
            icon={<CloseLine size="md" />}
            aria-label="Close menu"
            variant="outline"
            size="md"
            onClick={onClose}
          />
        </div>

        {/* Scrollable content area */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          paddingLeft: PAD_M,
          paddingRight: PAD_M,
          paddingTop: PAD_S,
          paddingBottom: PAD_S,
          display: 'flex',
          flexDirection: 'column',
          gap: GAP_L,
          minHeight: 0,
        }}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}

// ── SideNav.Profile ──────────────────────────────────────────

function Profile({ name, companyName, companyLogo }: SideNavProfileProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: PAD_XXXS,
      paddingLeft: PAD_S,
      paddingRight: PAD_S,
      flexShrink: 0,
    }}>
      <p style={{
        fontFamily: FONT_DISPLAY,
        fontSize: 20,                // Heading/X Small
        fontWeight: W_MEDIUM,
        lineHeight: '24px',          // Heading/X Small
        color: TEXT_DEFAULT,
        margin: 0,
      }}>
        {name}
      </p>
      {companyName && (
        <div style={{
          display: 'flex',
          alignItems: 'end',
          gap: PAD_XXXS,
        }}>
          <span style={{
            fontFamily: FONT,
            fontSize: 16,              // Paragraph/Medium
            fontWeight: W_REGULAR,
            lineHeight: '19px',        // Paragraph/Medium
            color: TEXT_DARK,
            whiteSpace: 'nowrap',
          }}>
            Healthee membership provided by
          </span>
          {companyLogo ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
              {companyLogo}
            </span>
          ) : (
            <span style={{
              fontFamily: FONT,
              fontSize: 16,              // Heading/XXX Small
              fontWeight: W_MEDIUM,
              lineHeight: '19px',        // Heading/XXX Small
              color: TEXT_DEFAULT,
            }}>
              {companyName}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

// ── SideNav.Section ──────────────────────────────────────────
// Groups items with NO internal gap — items stack tight.
// The 24px gap between sections is handled by the scrollable wrapper's gap.

function Section({ children }: SideNavSectionProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
    }}>
      {children}
    </div>
  )
}

// ── SideNav.NavItem ──────────────────────────────────────────

function NavItem({ label, onClick, expandable, expanded, onExpandChange, children }: SideNavNavItemProps) {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const isExpanded = expanded !== undefined ? expanded : internalExpanded
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    if (expandable) {
      const next = !isExpanded
      setInternalExpanded(next)
      onExpandChange?.(next)
    } else {
      onClick?.()
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: PAD_XS,
          height: NAV_ITEM_HEIGHT,
          paddingLeft: PAD_S,
          paddingRight: PAD_S,
          borderRadius: parseInt(RADIUS_XXS),
          backgroundColor: hovered ? SURFACE_EXTRA_SUBTLE : 'transparent',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left',
          transition: 'background-color 150ms ease',
        }}
      >
        <span style={{
          flex: 1,
          fontFamily: FONT,
          fontSize: 16,              // Heading/XXX Small
          fontWeight: W_MEDIUM,
          lineHeight: '19px',        // Heading/XXX Small
          color: TEXT_DEFAULT,
        }}>
          {label}
        </span>
        {expandable && (
          isExpanded
            ? <ChevronUpLine size="sm" />
            : <ChevronDownLine size="sm" />
        )}
      </button>
      {expandable && isExpanded && children && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          {children}
        </div>
      )}
    </div>
  )
}

// ── SideNav.SubItem ──────────────────────────────────────────

function SubItem({ label, onClick }: SideNavSubItemProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        height: NAV_ITEM_HEIGHT,
        paddingLeft: parseInt(PAD_XXL),
        paddingRight: PAD_S,
        borderRadius: parseInt(RADIUS_XXS),
        backgroundColor: hovered ? SURFACE_EXTRA_SUBTLE : 'transparent',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left',
        transition: 'background-color 150ms ease',
      }}
    >
      <span style={{
        fontFamily: FONT,
        fontSize: 16,              // Paragraph/Medium
        fontWeight: W_REGULAR,
        lineHeight: '19px',        // Paragraph/Medium
        color: TEXT_DEFAULT,
      }}>
        {label}
      </span>
    </button>
  )
}

// ── SideNav.ToolItem ─────────────────────────────────────────

function ToolItem({ thumbnail, title, description, onClick, trailingIcon }: SideNavToolItemProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: PAD_XS,
        padding: PAD_XXS,
        borderRadius: RADIUS_XS,
        backgroundColor: 'transparent',
        border: hovered ? `1px solid ${BORDER_LIGHT}` : '1px solid transparent',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left',
        transition: 'border-color 150ms ease',
      }}
    >
      {/* Thumbnail */}
      <div style={{
        width: THUMBNAIL_SIZE,
        height: THUMBNAIL_SIZE,
        borderRadius: parseInt(RADIUS_XXS),
        overflow: 'hidden',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {thumbnail}
      </div>

      {/* Text */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: PAD_XXXS,
        minWidth: 0,
      }}>
        <span style={{
          fontFamily: FONT,
          fontSize: 16,              // Heading/XXX Small
          fontWeight: W_MEDIUM,
          lineHeight: '19px',        // Heading/XXX Small
          color: TEXT_DEFAULT,
        }}>
          {title}
        </span>
        <span style={{
          fontFamily: FONT,
          fontSize: 14,              // Paragraph/Small
          fontWeight: W_REGULAR,
          lineHeight: '17px',        // Paragraph/Small
          color: TEXT_DARK,
        }}>
          {description}
        </span>
      </div>

      {/* Trailing icon — visible on hover */}
      {trailingIcon && (
        <div style={{
          flexShrink: 0,
          padding: PAD_XXS,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 150ms ease',
        }}>
          {trailingIcon}
        </div>
      )}
    </button>
  )
}

// ── QR Placeholder ──────────────────────────────────────────
// A simple QR-code-like grid pattern used when no qrImageUrl or qrElement is provided.

function QrPlaceholder() {
  const SIZE = QR_SIZE
  const PAD = parseInt(PAD_S)
  const INNER = SIZE - PAD * 2 // 68px usable area
  const CELL = Math.floor(INNER / 7) // ~9px per cell in a 7×7 grid
  const OFFSET = PAD

  // Classic QR pattern: 3 finder squares (top-left, top-right, bottom-left) + some data dots
  const cells: [number, number][] = [
    // Top-left finder (3×3 solid)
    [0,0],[1,0],[2,0],
    [0,1],[2,1],
    [0,2],[1,2],[2,2],
    // Top-right finder
    [4,0],[5,0],[6,0],
    [4,1],[6,1],
    [4,2],[5,2],[6,2],
    // Bottom-left finder
    [0,4],[1,4],[2,4],
    [0,5],[2,5],
    [0,6],[1,6],[2,6],
    // Some "data" dots
    [4,4],[5,5],[6,4],[4,6],[6,6],
    [3,3],[3,5],[5,3],
  ]

  return (
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} fill="none" aria-hidden="true">
      <rect width={SIZE} height={SIZE} rx={parseInt(RADIUS_SN)} fill={SURFACE_SUBTLE} />
      {cells.map(([x, y], i) => (
        <rect
          key={i}
          x={OFFSET + x * CELL}
          y={OFFSET + y * CELL}
          width={CELL - 1}
          height={CELL - 1}
          rx={1.5}
          fill={BORDER_COLOR}
        />
      ))}
    </svg>
  )
}

// ── SideNav.AppDownload ──────────────────────────────────────
// Desktop (Web): QR code + title + store icons — horizontal row
// Mobile (<640px): title + store icons only — no QR code, larger padding

function AppDownload({
  qrImageUrl,
  qrElement,
  title = 'Download the Healthee app',
  onAppleClick,
  onAndroidClick,
  onClick,
}: SideNavAppDownloadProps) {
  return (
    <div
      className="glow-sidenav-app-download"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: PAD_XS,
        padding: PAD_XXS,
        borderRadius: RADIUS_M,
        backgroundColor: SURFACE_EXTRA_SUBTLE,
        cursor: onClick ? 'pointer' : 'default',
        flexShrink: 0,
      }}
    >
      {/* QR Code — hidden on mobile via CSS. Shows placeholder if no QR provided. */}
      <div
        className="glow-sidenav-app-qr"
        style={{
          width: QR_SIZE,
          height: QR_SIZE,
          borderRadius: parseInt(RADIUS_SN),
          backgroundColor: SURFACE_SUBTLE,
          overflow: 'hidden',
          flexShrink: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {qrElement || (qrImageUrl ? (
          <img src={qrImageUrl} alt="QR code" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <QrPlaceholder />
        ))}
      </div>

      {/* Text + store icons */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: PAD_S,
        justifyContent: 'center',
        minWidth: 0,
      }}>
        <span style={{
          fontFamily: FONT,
          fontSize: 18,              // Heading/XX Small
          fontWeight: W_MEDIUM,
          lineHeight: '21px',        // Heading/XX Small
          color: TEXT_DEFAULT,
        }}>
          {title}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: PAD_XXS }}>
          {/* Apple store button */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onAppleClick?.() }}
            aria-label="Download on the App Store"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: PAD_XXXS,
              background: 'none',
              border: 'none',
              cursor: onAppleClick ? 'pointer' : 'default',
              borderRadius: parseInt(RADIUS_XXXS),
            }}
          >
            <AppleSolid size="lg" />
          </button>
          {/* Divider */}
          <div style={{ width: 1, alignSelf: 'stretch', backgroundColor: BORDER_COLOR }} />
          {/* Android store button */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onAndroidClick?.() }}
            aria-label="Get it on Google Play"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: PAD_XXXS,
              background: 'none',
              border: 'none',
              cursor: onAndroidClick ? 'pointer' : 'default',
              borderRadius: parseInt(RADIUS_XXXS),
            }}
          >
            <AndroidSolid size="lg" />
          </button>
        </div>
      </div>
    </div>
  )
}

// ── SideNav.Footer ───────────────────────────────────────────
// Pushes to bottom via marginTop: auto. Gap of 20px between children.

function Footer({ children }: SideNavFooterProps) {
  return (
    <div style={{
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: GAP_M,
      flexShrink: 0,
      paddingTop: GAP_L,
    }}>
      {children}
    </div>
  )
}

// ── SideNav.FooterItem ───────────────────────────────────────

function FooterItem({ label, onClick, right }: SideNavFooterItemProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: NAV_ITEM_HEIGHT,
        paddingLeft: PAD_S,
        paddingRight: PAD_S,
        borderRadius: parseInt(RADIUS_XXS),
        backgroundColor: hovered ? SURFACE_EXTRA_SUBTLE : 'transparent',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left',
        transition: 'background-color 150ms ease',
      }}
    >
      <span style={{
        fontFamily: FONT,
        fontSize: 16,              // Paragraph/Medium
        fontWeight: W_REGULAR,
        lineHeight: '19px',        // Paragraph/Medium
        color: TEXT_DEFAULT,
      }}>
        {label}
      </span>
      {right && (
        <div style={{ display: 'flex', alignItems: 'center', gap: PAD_XS, flexShrink: 0 }}>
          {right}
        </div>
      )}
    </button>
  )
}

// ── Attach sub-components ────────────────────────────────────

SideNav.Profile     = Profile
SideNav.Section     = Section
SideNav.NavItem     = NavItem
SideNav.SubItem     = SubItem
SideNav.ToolItem    = ToolItem
SideNav.AppDownload = AppDownload
SideNav.Footer      = Footer
SideNav.FooterItem  = FooterItem
