import { NavBar } from '../../../components/NavBar'
import { Avatar } from '../../../components/Avatar'
import { Button } from '../../../components/Button'
import ChevronDownLine from '../../../components/Icon/icons/line/ChevronDown'
import ZoeSelectedLine from '../../../components/Icon/icons/line/ZoeSelected'

// ── Token Imports ─────────────────────────────────────────────
import { semanticColors as sc } from '../../../../tokens/semantic/colors'
import { fontFamilies, fontWeights, fontSizes } from '../../../../tokens/primitive/typography'
import { semanticSpacing } from '../../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../../tokens/semantic/radii'

// ── Token Constants ───────────────────────────────────────────
const PRIMARY_BG   = sc.primary.surface.DEFAULT        // #fd5201
const TEXT_DEFAULT = sc.neutral.text.DEFAULT             // #000000
const TEXT_DARK    = sc.neutral.text.dark                // #404040

const FONT       = fontFamilies.default
const W_MEDIUM   = fontWeights.medium
const W_REGULAR  = fontWeights.regular

const SPACE_XXXS = parseInt(semanticSpacing.xxxs)       // 4
const SPACE_XXS  = parseInt(semanticSpacing.xxs)        // 8
const SPACE_S    = parseInt(semanticSpacing.s)           // 16

const RADIUS_XXS = parseInt(semanticRadii.xxs)          // 4

// ── Healthee Logo ─────────────────────────────────────────────
function HealtheeLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: SPACE_XXS }}>
      <div style={{
        width: 28, height: 28, borderRadius: RADIUS_XXS,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: PRIMARY_BG,
      }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Zm0 10.5c-2.49 0-4.5-2.01-4.5-4.5S5.51 3.5 8 3.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5Z" fill="white" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" fill="white" />
        </svg>
      </div>
      <span style={{ fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[18], color: TEXT_DEFAULT }}>
        healthee
      </span>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// AppNavBar — shared navigation bar for all example pages
// ══════════════════════════════════════════════════════════════

interface AppNavBarProps {
  /** Currently active tab value */
  activeTab: string
  /** Callback when tab changes */
  onTabChange: (tab: string) => void
  /** Whether the navbar should be sticky */
  sticky?: boolean
}

export function AppNavBar({ activeTab, onTabChange, sticky }: AppNavBarProps) {
  return (
    <NavBar
      left={
        <NavBar.Brand
          logo={<HealtheeLogo />}
          onMenuClick={() => {}}
        />
      }
      center={
        <NavBar.Tabs value={activeTab} onChange={onTabChange}>
          <NavBar.Tab value="home">Home</NavBar.Tab>
          <NavBar.Tab value="my-benefits">My Benefits</NavBar.Tab>
          <NavBar.Tab value="find-care">Find Care</NavBar.Tab>
        </NavBar.Tabs>
      }
      right={
        <div style={{ display: 'flex', alignItems: 'center', gap: SPACE_S }}>
          <Button variant="outline" size="sm" pill iconLeft={<ZoeSelectedLine size="sm" />}>
            Chat with Zoe
          </Button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0 }}>
            <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DEFAULT }}>
              New York 10014
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: SPACE_XXXS }}>
              <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14], color: TEXT_DARK }}>
                Home
              </span>
              <ChevronDownLine size="xs" color={TEXT_DARK} />
            </div>
          </div>
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
            alt="Jane Doe"
          />
        </div>
      }
      mobileRight={
        <Button variant="outline" size="sm" pill iconLeft={<ZoeSelectedLine size="sm" />}>
          Chat with Zoe
        </Button>
      }
      maxWidth={1536}
      sticky={sticky}
    />
  )
}
