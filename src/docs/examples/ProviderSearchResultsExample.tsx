import { useState, useEffect } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { TextInput } from '../../components/TextInput'
import { Select } from '../../components/Select'
import { RadioButton } from '../../components/RadioButton'
import { Toggle } from '../../components/Toggle'
import { ProviderCard } from '../../components/ProviderCard'
import { Modal } from '../../components/Modal'
import { Avatar } from '../../components/Avatar'
import { NetworkBadge } from '../../components/NetworkBadge'
import { IconButton } from '../../components/IconButton'

// ── DS Icons ──────────────────────────────────────────────────
import SearchLine from '../../components/Icon/icons/line/Search'
import FilterLine from '../../components/Icon/icons/line/Filter'
import ChevronDownLine from '../../components/Icon/icons/line/ChevronDown'
import LocationLine from '../../components/Icon/icons/line/Location'
import { StarRating } from '../../components/StarRating'
import CloseLine from '../../components/Icon/icons/line/Close'
import HomeLine from '../../components/Icon/icons/line/Home'
import ZoeSelectedLine from '../../components/Icon/icons/line/ZoeSelected'
import CalendarLine from '../../components/Icon/icons/line/Calendar'
import ClockLine from '../../components/Icon/icons/line/Clock15'
import HospitalBuildingLine from '../../components/Icon/icons/line/HospitalBuilding'
import { AppNavBar } from './shared/AppNavBar'

// ── Token Imports ─────────────────────────────────────────────
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontFamilies, fontWeights, fontSizes } from '../../../tokens/primitive/typography'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../tokens/semantic/radii'

// ── Token Constants ───────────────────────────────────────────
const BG_WHITE       = sc.neutral.surface.negative       // #ffffff
const BG_SUBTLE      = sc.neutral.surface.subtle         // #f2f2f2
const TEXT_DEFAULT   = sc.neutral.text.DEFAULT            // #000000
const TEXT_DARK      = sc.neutral.text.dark               // #404040
const TEXT_LIGHT     = sc.neutral.text.light              // #8a8a8a
const BORDER_LIGHT   = sc.neutral.border.light            // #ededed
const BORDER_STRONG  = sc.neutral.border.strong           // #e0e0e0
const PRIMARY_BG     = sc.primary.surface.DEFAULT         // #fd5201
const PRIMARY_TEXT   = sc.primary.text.DEFAULT             // #fd5201
const BANNER_BG     = sc['accent-yellow'].surface.subtle   // warm cream for powered-by banner
const ERROR_TEXT    = sc.error.text.DEFAULT                 // red for required asterisk

const SPACE_XXXS = parseInt(semanticSpacing.xxxs)  // 4
const SPACE_XXS  = parseInt(semanticSpacing.xxs)   // 8
const SPACE_XS   = parseInt(semanticSpacing.xs)    // 12
const SPACE_S    = parseInt(semanticSpacing.s)      // 16
const SPACE_M    = parseInt(semanticSpacing.m)      // 20
const SPACE_L    = parseInt(semanticSpacing.l)      // 24
const SPACE_XL   = parseInt(semanticSpacing.xl)     // 32
const SPACE_XXL  = parseInt(semanticSpacing.xxl)    // 40
const SPACE_XXXL = parseInt(semanticSpacing.xxxl)   // 48
const SPACE_5XL  = parseInt(semanticSpacing['5xl']) // 72

const RADIUS_XXS  = parseInt(semanticRadii.xxs)    // 8
const RADIUS_XS   = parseInt(semanticRadii.xs)     // 12
const RADIUS_FULL = parseInt(semanticRadii.full)   // 999

const SIDEBAR_W      = 376                              // sidebar width
const SIDEBAR_BP     = 1024                             // hide sidebar below this

const FONT    = fontFamilies.default
const W_MEDIUM = fontWeights.medium
const W_REGULAR = fontWeights.regular



// ── Filter Section Title ──────────────────────────────────────
function FilterTitle({ title }: { title: string }) {
  return (
    <p style={{
      fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[20],
      lineHeight: '24px', color: TEXT_DEFAULT, margin: 0,
    }}>
      {title}
    </p>
  )
}

// ── Map Placeholder ───────────────────────────────────────────
function MapPlaceholder() {
  return (
    <div style={{
      width: '100%', height: 160, borderRadius: RADIUS_XS,
      background: `linear-gradient(135deg, ${sc.neutral.surface.light} 0%, ${sc.neutral.surface.disabled} 100%)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid lines */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
        {[0.25, 0.5, 0.75].map(p => (
          <div key={`h-${p}`} style={{
            position: 'absolute', left: 0, right: 0,
            top: `${p * 100}%`, height: 1, background: BORDER_STRONG,
          }} />
        ))}
        {[0.25, 0.5, 0.75].map(p => (
          <div key={`v-${p}`} style={{
            position: 'absolute', top: 0, bottom: 0,
            left: `${p * 100}%`, width: 1, background: BORDER_STRONG,
          }} />
        ))}
      </div>
      {/* Location pin */}
      <div style={{
        width: 32, height: 32, borderRadius: RADIUS_FULL,
        background: PRIMARY_BG, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <LocationLine size="sm" color={BG_WHITE} />
      </div>
    </div>
  )
}

// ── Select Options ────────────────────────────────────────────
const planOptions = [
  { value: 'anthem', label: 'Anthem' },
  { value: 'aetna', label: 'Aetna' },
  { value: 'cigna', label: 'Cigna' },
  { value: 'unitedhealthcare', label: 'UnitedHealthcare' },
]

const networkOptions = [
  { value: 'in-network', label: 'In-network' },
  { value: 'tier-2', label: 'Tier 2' },
  { value: 'tier-3', label: 'Tier 3' },
  { value: 'out-of-network', label: 'Out-of-network' },
]

const distanceOptions = [
  { value: '5', label: '5 miles' },
  { value: '10', label: '10 miles' },
  { value: '25', label: '25 miles' },
  { value: '50', label: '50 miles' },
]

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'mandarin', label: 'Mandarin' },
  { value: 'cantonese', label: 'Cantonese' },
  { value: 'korean', label: 'Korean' },
  { value: 'russian', label: 'Russian' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'french', label: 'French' },
  { value: 'portuguese', label: 'Portuguese' },
]


// ── Mock Provider Data ────────────────────────────────────────
const providers = [
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Dermatologist',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.5 miles',
    address: '457 Broome St, New York, NY',
    rating: 3.9,
    reviewCount: 320,
    cost: '$215',
    costLevel: 'lower' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Today, May 7',
  },
  {
    name: 'Dr. Christopher Montgo Vander',
    specialty: 'Dermatologist',
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.5 miles',
    address: '457 Broome St, New York, NY',
    rating: 3.9,
    reviewCount: 320,
    cost: '$330',
    costLevel: 'typical' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Today, May 7',
  },
  {
    name: 'Dr. Michael Torres',
    specialty: 'Dermatologist',
    providerType: 'male' as const,
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.5 miles',
    address: '457 Broome St, New York, NY',
    rating: 3.9,
    reviewCount: 320,
    cost: '$215',
    costLevel: 'typical' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Today, May 7',
  },
  {
    name: 'Dr. Emily Park',
    specialty: 'Dermatologist',
    providerType: 'female' as const,
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.5 miles',
    address: '457 Broome St, New York, NY',
    rating: 3.9,
    reviewCount: 320,
    cost: '$460',
    costLevel: 'higher' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Today, May 7',
  },
  {
    name: 'Dr. Robert Kim',
    specialty: 'Dermatologist',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face',
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.5 miles',
    address: '457 Broome St, New York, NY',
    rating: 3.9,
    reviewCount: 320,
    cost: '$800',
    costLevel: 'higher' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Today, May 7',
  },
  {
    name: 'Manhattan Eye Center',
    specialty: 'Retinal imaging center',
    providerType: 'facility' as const,
    networkTier: 'out-of-network' as const,
    networkLabel: 'Out-of-Network',
    distance: '0.9 miles',
    address: '100 E 77th St, Lower Level, New York, NY 10075',
    rating: 4.3,
    reviewCount: 67,
    cost: '$890',
    costLevel: 'higher' as const,
  },
]

// ══════════════════════════════════════════════════════════════
// ProviderSearchResultsScreen — Full-screen interactive page
// ══════════════════════════════════════════════════════════════
export function ProviderSearchResultsScreen() {
  const [activeTab, setActiveTab] = useState('find-care')
  const [searchQuery, setSearchQuery] = useState('Retinal imaging')
  const [plan, setPlan] = useState('anthem')
  const [network, setNetwork] = useState('in-network')
  const [distance, setDistance] = useState('5')
  const [rating, setRating] = useState('5')
  const [gender, setGender] = useState<string | null>(null)
  const [languages, setLanguages] = useState<string[]>([])
  const [onlineBooking, setOnlineBooking] = useState(true)
  const [bookingProvider, setBookingProvider] = useState<typeof providers[0] | null>(null)
  const [bookingLocation, setBookingLocation] = useState('loc1')
  const [visitReason, setVisitReason] = useState('primary')
  const [seenBefore, setSeenBefore] = useState<'yes' | 'no' | null>('no')

  // ── Responsive: hide sidebar below 1024px ──
  const [winWidth, setWinWidth] = useState(window.innerWidth)
  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const showSidebar = winWidth >= SIDEBAR_BP

  return (
    <div style={{ minHeight: '100vh', background: BG_WHITE }}>

      {/* ── NavBar (shared component) ── */}
      <AppNavBar activeTab={activeTab} onTabChange={setActiveTab} sticky />

      {/* ── Search Bar ────────────────────────────────────────── */}
      <div style={{
        borderBottom: `1px solid ${BORDER_LIGHT}`,
        background: BG_WHITE,
        padding: `${SPACE_S}px ${showSidebar ? SPACE_XL : SPACE_S}px`,
      }}>
        {showSidebar ? (
          /* ── Desktop: full active search bar ── */
          <div style={{
            maxWidth: 1132, margin: '0 auto',
            display: 'flex', alignItems: 'center', gap: 0,
            border: `1px solid ${BORDER_STRONG}`,
            borderRadius: RADIUS_FULL,
            overflow: 'hidden',
            padding: `${SPACE_XXS}px ${SPACE_XXS}px ${SPACE_XXS}px ${SPACE_S}px`,
          }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: SPACE_XXS }}>
              <SearchLine size="md" color={TEXT_LIGHT} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1, border: 'none', outline: 'none', background: 'transparent',
                  fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], color: TEXT_DEFAULT,
                }}
                placeholder="Search for a provider, specialty, or condition..."
              />
              {searchQuery && (
                <IconButton
                  icon={<CloseLine size="sm" />}
                  aria-label="Clear search"
                  variant="ghost"
                  size="xs"
                  onClick={() => setSearchQuery('')}
                />
              )}
            </div>
            <div style={{ width: 1, height: SPACE_XXXL, background: BORDER_STRONG, margin: `0 ${SPACE_XXS}px` }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: SPACE_XXS, padding: `0 ${SPACE_S}px`, minWidth: 160 }}>
              <HomeLine size="md" color={TEXT_DEFAULT} />
              <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[16], color: TEXT_DEFAULT }}>
                Home
              </span>
              <ChevronDownLine size="sm" color={TEXT_DEFAULT} />
            </div>
            <Button variant="primary" size="sm" iconOnly aria-label="Search"
              style={{ borderRadius: RADIUS_FULL, width: 48, height: 48 }}>
              <SearchLine size="md" color={BG_WHITE} />
            </Button>
          </div>
        ) : (
          /* ── Mobile: collapsed search summary ── */
          <div style={{
            maxWidth: 1132, margin: '0 auto',
            display: 'flex', alignItems: 'center', gap: SPACE_S,
            border: `1px solid ${BORDER_STRONG}`,
            borderRadius: RADIUS_FULL,
            padding: `${SPACE_XS}px ${SPACE_M}px ${SPACE_XS}px ${SPACE_XS}px`,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: RADIUS_FULL,
              background: PRIMARY_BG, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <SearchLine size="md" color={BG_WHITE} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: FONT, fontWeight: W_MEDIUM, fontSize: fontSizes[16],
                color: TEXT_DEFAULT, lineHeight: '20px',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {searchQuery || 'Search'}
              </div>
              <div style={{
                fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[14],
                color: TEXT_LIGHT, lineHeight: '18px',
              }}>
                New York (Home)
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Main Content ──────────────────────────────────────── */}
      <div style={{
        maxWidth: 1132, margin: '0 auto',
        display: 'flex', gap: SPACE_5XL,
        padding: `${SPACE_XXL}px ${SPACE_XL}px`,
      }}>

        {/* ── Left: Filters Sidebar (hidden below 1024px) ───── */}
        {showSidebar && <div style={{ width: SIDEBAR_W, flexShrink: 0, padding: `0 ${SPACE_L}px` }}>

          {/* Map placeholder */}
          <MapPlaceholder />

          {/* Preferences title */}
          <h2 style={{
            fontFamily: FONT, fontWeight: W_REGULAR, fontSize: 28,
            lineHeight: '33px', color: TEXT_DEFAULT,
            margin: `${SPACE_XL}px 0 ${SPACE_L}px`,
          }}>
            Preferences
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXXL }}>

            {/* Plan & Network */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
              <FilterTitle title="Plan & Network" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_S }}>
                <Select
                  options={planOptions}
                  value={plan}
                  onChange={(v) => setPlan(v as string)}
                  placeholder="Select plan"
                  size="sm"
                />
                <Select
                  options={networkOptions}
                  value={network}
                  onChange={(v) => setNetwork(v as string)}
                  placeholder="Network type"
                  size="sm"
                />
              </div>
            </div>

            {/* Distance */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
              <FilterTitle title="Distance" />
              <Select
                options={distanceOptions}
                value={distance}
                onChange={(v) => setDistance(v as string)}
                placeholder="Select distance"
                size="sm"
              />
            </div>

            {/* Provider Rating */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
              <FilterTitle title="Provider rating" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} style={{
                    display: 'flex', alignItems: 'center', gap: SPACE_XXS,
                    padding: `${SPACE_XXS}px 0`,
                  }}>
                    <RadioButton
                      name="rating"
                      checked={rating === String(stars)}
                      onChange={() => setRating(String(stars))}
                      label=""
                    />
                    <StarRating rating={stars} />
                    <span style={{
                      fontFamily: FONT, fontWeight: W_REGULAR,
                      fontSize: fontSizes[16], color: TEXT_DEFAULT,
                    }}>
                      and up
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Provider Gender */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
              <FilterTitle title="Provider gender" />
              <div style={{ display: 'flex', gap: SPACE_XS }}>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setGender(gender === 'male' ? null : 'male')}
                  style={gender === 'male' ? { borderColor: TEXT_DEFAULT, background: BG_SUBTLE } : {}}
                >
                  Male
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setGender(gender === 'female' ? null : 'female')}
                  style={gender === 'female' ? { borderColor: TEXT_DEFAULT, background: BG_SUBTLE } : {}}
                >
                  Female
                </Button>
              </div>
            </div>

            {/* Languages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
              <FilterTitle title="Languages" />
              <Select
                options={languageOptions}
                value={languages}
                onChange={(v) => setLanguages(v as string[])}
                placeholder="Filter by language"
                multiple
                searchable
                size="sm"
              />
            </div>

            {/* All Filters */}
            <Button
              variant="outline"
              size="sm"
              fullWidth
              iconLeft={<FilterLine size="md" />}
            >
              All filters
            </Button>

          </div>
        </div>}

        {/* ── Right: Results ─────────────────────────────────── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Results header */}
          <div style={{ marginBottom: SPACE_L }}>
            <h2 style={{
              fontFamily: FONT, fontWeight: W_REGULAR, fontSize: 28,
              lineHeight: '33px', color: TEXT_DEFAULT, margin: 0,
            }}>
              89 in-network results near you
            </h2>

            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginTop: SPACE_S,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: SPACE_S }}>
                <Toggle
                  checked={onlineBooking}
                  onChange={setOnlineBooking}
                />
                <span style={{
                  fontFamily: FONT, fontWeight: W_REGULAR,
                  fontSize: fontSizes[16], color: TEXT_DEFAULT,
                }}>
                  Accepting online booking
                </span>
              </div>
              <Button variant="outline" size="xs" pill iconRight={<ChevronDownLine size="sm" />}>
                Sort by distance
              </Button>
            </div>
          </div>

          {/* Provider Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_L }}>
            {providers.map((provider, i) => (
              <ProviderCard
                key={i}
                layout="responsive"
                name={provider.name}
                specialty={provider.specialty}
                photoUrl={provider.photoUrl}
                providerType={provider.providerType}
                networkTier={provider.networkTier}
                networkLabel={provider.networkLabel}
                distance={provider.distance}
                address={provider.address}
                rating={provider.rating}
                reviewCount={provider.reviewCount}
                cost={provider.cost}
                costLevel={provider.costLevel}
                costLabel={provider.costLabel}
                nextAppointmentLabel={provider.nextAppointmentLabel}
                nextAppointmentDate={provider.nextAppointmentDate}
                onCallClick={() => {}}
                onBookClick={() => setBookingProvider(provider)}
                onClick={() => {}}
              />
            ))}
          </div>

          {/* Pagination info */}
          <div style={{
            marginTop: SPACE_XL, paddingTop: SPACE_L,
            borderTop: `1px solid ${BORDER_LIGHT}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: FONT, fontWeight: W_REGULAR,
              fontSize: fontSizes[14], color: TEXT_LIGHT,
            }}>
              Showing 1–6 of 89 results
            </span>
          </div>
        </div>
      </div>

      {/* ── Booking Modal ────────────────────────────────────── */}
      <Modal
        open={!!bookingProvider}
        onClose={() => { setBookingProvider(null); setBookingLocation('loc1'); setVisitReason('primary'); setSeenBefore('no') }}
        title="Book online"
        size="sm"
        footerActions={
          <Button variant="primary" onClick={() => { setBookingProvider(null); setBookingLocation('loc1'); setVisitReason('primary'); setSeenBefore('no') }}>
            See available time slots
          </Button>
        }
      >
        {bookingProvider && (
          <div>
            {/* Powered-by banner */}
            <div style={{
              display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: SPACE_XXS,
              padding: `${SPACE_XXS}px ${SPACE_L}px`,
              backgroundColor: BANNER_BG,
              borderBottom: `1px solid ${BORDER_LIGHT}`,
            }}>
              <span style={{ fontFamily: FONT, fontWeight: W_REGULAR, fontSize: fontSizes[13], color: TEXT_DARK }}>
                Provided by Zocdoc
              </span>
              {/* Zocdoc brand logo — inline SVG exception for third-party brand mark */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="10" cy="10" r="10" fill="#FFF0B8" />
                <text x="10" y="14" textAnchor="middle" fontFamily="serif" fontWeight="bold" fontSize="12" fill="#333">Z</text>
              </svg>
            </div>

            {/* Form content */}
            <div style={{ padding: `${SPACE_L}px ${SPACE_XL}px`, display: 'flex', flexDirection: 'column', gap: SPACE_L }}>
              {/* Location select */}
              <Select
                label="Available location (2)"
                value={bookingLocation}
                onChange={setBookingLocation}
                iconLeft={<HospitalBuildingLine size="md" />}
                options={[
                  { value: 'loc1', label: 'Internal Medicine Associates, P.C.' },
                  { value: 'loc2', label: bookingProvider.address },
                ]}
                size="sm"
              />

              {/* Visit reason select */}
              <div>
                <Select
                  label="What's the reason for your visit?"
                  value={visitReason}
                  onChange={setVisitReason}
                  options={[
                    { value: 'primary', label: 'Primary care visit' },
                    { value: 'followup', label: 'Follow-up visit' },
                    { value: 'annual', label: 'Annual physical' },
                    { value: 'urgent', label: 'Urgent care' },
                    { value: 'specialist', label: 'Specialist consultation' },
                  ]}
                  size="sm"
                />
                <p style={{
                  fontFamily: FONT, fontWeight: W_REGULAR,
                  fontSize: fontSizes[13], color: TEXT_LIGHT,
                  marginTop: SPACE_XXS,
                }}>
                  Procedures and prices are subject to change and may differ from actual costs. Always consult with the provider for the current procedures and prices.
                </p>
              </div>

              {/* Have you seen this doctor before? */}
              <div>
                <p style={{
                  fontFamily: FONT, fontWeight: W_MEDIUM,
                  fontSize: fontSizes[15], color: TEXT_DEFAULT,
                  marginBottom: SPACE_XS,
                }}>
                  Have you seen this doctor before? <span style={{ color: ERROR_TEXT }}>*</span>
                </p>
                <div style={{ display: 'flex', gap: SPACE_XXS }}>
                  <Button
                    variant={seenBefore === 'yes' ? 'secondary' : 'outline'}
                    size="sm"
                    onClick={() => setSeenBefore('yes')}
                  >
                    Yes
                  </Button>
                  <Button
                    variant={seenBefore === 'no' ? 'secondary' : 'outline'}
                    size="sm"
                    onClick={() => setSeenBefore('no')}
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// DocLayout-wrapped version for DS docs
// ══════════════════════════════════════════════════════════════
export function ProviderSearchResultsExample() {
  return (
    <DocLayout
      title="Provider Search Results"
      description="Desktop search results page with filter sidebar and horizontal provider cards. Uses NavBar, Select, RadioButton, Toggle, ProviderCard (horizontal), and Button from the DS."
    >
      <Section
        title="Full Page Preview"
        description="This is a full-width page template. Open the preview mode for the best experience."
      >
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('/preview/provider-search-results', '_blank')}
        >
          Open full-screen preview →
        </Button>
        <div style={{
          marginTop: SPACE_S,
          border: `1px solid ${BORDER_LIGHT}`,
          borderRadius: RADIUS_XS,
          overflow: 'hidden',
          maxHeight: 800,
          overflowY: 'auto',
        }}>
          <ProviderSearchResultsScreen />
        </div>
      </Section>
    </DocLayout>
  )
}
