import { createContext, useContext } from 'react'
import type {
  NavBarProps,
  NavBarBrandProps,
  NavBarTabsProps,
  NavBarTabProps,
} from './NavBar.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import MenuLine from '../Icon/icons/line/Menu'

// ============================================================
// GLOW DS — NavBar Component
// Source: Figma Web DS — node-id=149-7678 (Nav Web)
// URL: https://www.figma.com/design/ke9Y1BHl3xvX8UMRRAMQ9T/Web-DS?node-id=149-7678
//
// Layout:   3-zone horizontal bar (left | center | right)
// Features: sticky, brand slot (hamburger + logo), tab nav, free-form right slot
// Sub-components: NavBar.Brand, NavBar.Tabs, NavBar.Tab
// ============================================================

// ── Token Constants ─────────────────────────────────────────
const NAV_BG           = sc.neutral.surface.negative   // #ffffff
const NAV_BORDER       = sc.neutral.border.light       // #ededed
const NAV_BORDER_WIDTH = 1                             // default border
const PAD_Y            = 12                            // spacing.xs
const PAD_X            = 48                            // spacing.xxxl
const Z_INDEX          = 50
const DEFAULT_MAX_W    = 1200
const RESPONSIVE_BP    = 1200                             // px — xl breakpoint
const MOBILE_PAD_X     = 16                               // spacing.s

// ── Responsive CSS (injected when responsive=true) ───────
// Two variants: with and without mobileRight content
const NAVBAR_RESPONSIVE_BASE = `
  /* Desktop: hide mobile-right off-screen (keeps SVG gradients alive) */
  .glow-navbar-right-mobile {
    position: absolute;
    width: 1px; height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  @container (max-width: ${RESPONSIVE_BP - 1}px) {
    .glow-navbar-center { display: none !important; }
    .glow-navbar-right-desktop {
      position: absolute !important;
      width: 1px !important; height: 1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
    }
    .glow-navbar-right-mobile {
      position: static !important;
      width: auto !important; height: auto !important;
      overflow: visible !important;
      clip: auto !important;
      white-space: normal !important;
    }
    .glow-navbar-root {
      padding-left: ${MOBILE_PAD_X}px !important;
      padding-right: ${MOBILE_PAD_X}px !important;
    }
    .glow-navbar-grid {
      grid-template-columns: 1fr 1fr !important;
    }
  }
`

const NAVBAR_RESPONSIVE_NO_MOBILE_RIGHT = `
  @container (max-width: ${RESPONSIVE_BP - 1}px) {
    .glow-navbar-center { display: none !important; }
    .glow-navbar-right-desktop { display: none !important; }
    .glow-navbar-root {
      padding-left: ${MOBILE_PAD_X}px !important;
      padding-right: ${MOBILE_PAD_X}px !important;
    }
    .glow-navbar-grid {
      grid-template-columns: 1fr !important;
    }
  }
`

// ── Tabs Context ────────────────────────────────────────────
type TabsCtx = { value: string; onChange: (v: string) => void }
const TabsContext = createContext<TabsCtx | null>(null)

// ── NavBar.Brand ────────────────────────────────────────────
function NavBarBrand({ logo, onMenuClick }: NavBarBrandProps) {
  return (
    <div className="flex items-center gap-s">
      {onMenuClick && (
        <IconButton
          icon={<MenuLine size="md" />}
          aria-label="Menu"
          variant="ghost"
          size="md"
          onClick={onMenuClick}
        />
      )}
      {logo}
    </div>
  )
}

// ── NavBar.Tabs ─────────────────────────────────────────────
function NavBarTabs({ value, onChange, children }: NavBarTabsProps) {
  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <div className="flex items-center gap-xxs">{children}</div>
    </TabsContext.Provider>
  )
}

// ── NavBar.Tab ──────────────────────────────────────────────
function NavBarTab({ value, children }: NavBarTabProps) {
  const ctx = useContext(TabsContext)
  if (!ctx) {
    throw new Error('NavBar.Tab must be used inside NavBar.Tabs')
  }
  const isActive = ctx.value === value

  return (
    <Button
      variant={isActive ? 'secondary' : 'outline'}
      size="sm"
      pill
      onClick={() => ctx.onChange(value)}
    >
      {children}
    </Button>
  )
}

// ── NavBar (main) ───────────────────────────────────────────
function NavBarComponent({
  left,
  center,
  right,
  sticky       = true,
  maxWidth     = DEFAULT_MAX_W,
  responsive   = true,
  mobileRight,
  className    = '',
  style: styleProp,
  ...props
}: NavBarProps) {
  const navStyle: React.CSSProperties = {
    backgroundColor:   NAV_BG,
    borderBottom:      `${NAV_BORDER_WIDTH}px solid ${NAV_BORDER}`,
    paddingTop:        PAD_Y,
    paddingBottom:     PAD_Y,
    paddingLeft:       PAD_X,
    paddingRight:      PAD_X,
    containerType:     'inline-size' as React.CSSProperties['containerType'],
    ...(sticky && { position: 'sticky' as const, top: 0, zIndex: Z_INDEX }),
    ...styleProp,
  }

  const innerStyle: React.CSSProperties = {
    maxWidth,
  }

  return (
    <nav
      role="navigation"
      className={['glow-navbar-root', className].filter(Boolean).join(' ')}
      style={navStyle}
      {...props}
    >
      {responsive && (
        <style>{mobileRight ? NAVBAR_RESPONSIVE_BASE : NAVBAR_RESPONSIVE_NO_MOBILE_RIGHT}</style>
      )}
      <div
        className="glow-navbar-grid mx-auto grid grid-cols-[1fr_auto_1fr] items-center"
        style={innerStyle}
      >
        {/* Left zone — always visible */}
        {left ? <div className="justify-self-start">{left}</div> : <div />}

        {/* Center zone — hidden below 1200px container width when responsive */}
        {center ? <div className="glow-navbar-center justify-self-center">{center}</div> : <div />}

        {/* Right zone — desktop content hidden on mobile, mobile content shown */}
        <div className="justify-self-end">
          {right && <div className="glow-navbar-right-desktop">{right}</div>}
          {mobileRight && <div className="glow-navbar-right-mobile">{mobileRight}</div>}
          {!right && !mobileRight && null}
        </div>
      </div>
    </nav>
  )
}

// ── Attach sub-components ───────────────────────────────────
export const NavBar = Object.assign(NavBarComponent, {
  Brand: NavBarBrand,
  Tabs:  NavBarTabs,
  Tab:   NavBarTab,
})
