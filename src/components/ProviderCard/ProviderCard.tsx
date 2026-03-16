import { useState, useRef, useEffect } from 'react'
import type { ProviderCardProps } from './ProviderCard.types'
import { Card } from '../Card'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { NetworkBadge } from './NetworkBadge'
import { CostSection } from './CostSection'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontFamilies, fontWeights, fontSizes, lineHeights } from '../../../tokens/primitive/typography'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../tokens/semantic/radii'

// ── DS Icons ──────────────────────────────────────────────────
import LocationIcon from '../Icon/icons/line/Location'
import StarLineIcon from '../Icon/icons/line/Star'
import CalendarIcon from '../Icon/icons/line/Calendar'
import GlobeIcon from '../Icon/icons/line/Globe'
import VideoCameraIcon from '../Icon/icons/line/VideoCamera'
import BookmarkLineIcon from '../Icon/icons/line/Bookmark'
import BookmarkSolidIcon from '../Icon/icons/solid/Bookmark'

// ── Provider Avatar Fallback Icons (detailed / M variants) ──
import ProviderFemale from '../Icon/icons/profile/ProviderFemale'
import ProviderMale from '../Icon/icons/profile/ProviderMale'
import Facility from '../Icon/icons/profile/Facility'

// ============================================================
// GLOW DS — ProviderCard Component
//
// A card displaying healthcare provider information including
// avatar, name, specialty, network tier, location, rating,
// appointment, cost with comparison chip, and action buttons.
//
// Supports two layouts:
//   - vertical (default) — stacked sections, ideal for grids
//   - horizontal — single-row, ideal for list views
//
// Uses: Card, Button, NetworkBadge (internal), CostSection (internal)
// ============================================================

// ── Token Constants ───────────────────────────────────────────
const FONT         = fontFamilies.default              // Founders Grotesk
const W_REGULAR    = fontWeights.regular               // 400
const W_MEDIUM     = fontWeights.medium                // 500
const TEXT_DEFAULT = sc.neutral.text.DEFAULT            // #000000
const TEXT_DARK    = sc.neutral.text.dark               // #404040
const BORDER_LIGHT = sc.neutral.border.light           // #ededed
const BG_EXTRA_SUBTLE = sc.neutral.surface.extraSubtle // #fafafa
const BG_SUBTLE       = sc.neutral.surface.subtle      // #f2f2f2
const BG_NEGATIVE     = sc.neutral.surface.negative     // #ffffff
const RADIUS_FULL  = parseInt(semanticRadii.full)      // 999
const SPACE_XXXS   = parseInt(semanticSpacing.xxxs)    // 4px
const SPACE_XXS    = parseInt(semanticSpacing.xxs)     // 8px
const SPACE_XS     = parseInt(semanticSpacing.xs)      // 12px
const SPACE_S      = parseInt(semanticSpacing.s)       // 16px
const SPACE_M      = parseInt(semanticSpacing.m)       // 20px

// ── Action Buttons ──────────────────────────────────────────
const ACTION_BTN_WIDTH = 160                             // Fixed width for action buttons grid

// ── Avatar Size ───────────────────────────────────────────────
const AVATAR_SIZE = 52                                  // Custom size for provider photos

// ── Responsive Breakpoint ─────────────────────────────────────
const HORIZONTAL_MIN_WIDTH = 480                        // px — below this → vertical

// ── useContainerWidth Hook ────────────────────────────────────
function useContainerWidth(ref: React.RefObject<HTMLDivElement | null>) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Set initial width synchronously to avoid layout flash
    setWidth(el.getBoundingClientRect().width)
    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])
  return width
}

// ── Shared Sub-Components ─────────────────────────────────────

function ProviderAvatar({ photoUrl, name, providerType, imgError, onImgError }: {
  photoUrl?: string; name: string; providerType: 'male' | 'female' | 'facility'
  imgError: boolean; onImgError: () => void
}) {
  return (
    <div
      style={{
        width: AVATAR_SIZE, height: AVATAR_SIZE,
        borderRadius: RADIUS_FULL, backgroundColor: BG_EXTRA_SUBTLE,
        overflow: 'hidden', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {photoUrl && !imgError ? (
        <img
          src={photoUrl} alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={onImgError}
        />
      ) : (
        providerType === 'female' ? <ProviderFemale size={AVATAR_SIZE} /> :
        providerType === 'facility' ? <Facility size={AVATAR_SIZE} /> :
        <ProviderMale size={AVATAR_SIZE} />
      )}
    </div>
  )
}

/** Single detail row: icon + text */
function DetailRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: SPACE_XXS, overflow: 'hidden' }}>
      <span style={{ color: TEXT_DEFAULT, display: 'flex', flexShrink: 0 }}>{icon}</span>
      <span style={{
        fontFamily: FONT, fontWeight: W_REGULAR,
        fontSize: fontSizes[16], lineHeight: lineHeights[19], color: TEXT_DEFAULT,
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0,
      }}>
        {children}
      </span>
    </div>
  )
}

// ── Shimmer Style (injected once) ─────────────────────────────
// Uses DS tokens: BG_SUBTLE for base, BG_NEGATIVE for shimmer highlight.
// All skeleton elements share a fixed-width gradient (800px) so CSS syncs
// the animation across every element — one continuous sweep across the card.
const SHIMMER_STYLE_ID = 'glow-skeleton-shimmer-style'
const SHIMMER_WIDTH = 800 // px — gradient band width, wider than any card
function ensureShimmerStyle() {
  if (typeof document === 'undefined') return
  if (document.getElementById(SHIMMER_STYLE_ID)) return
  const style = document.createElement('style')
  style.id = SHIMMER_STYLE_ID
  style.textContent = `
    @keyframes glow-skeleton-shimmer {
      0%   { background-position: -${SHIMMER_WIDTH}px 0; }
      100% { background-position: ${SHIMMER_WIDTH}px 0; }
    }
    .glow-skeleton-shimmer {
      background-color: ${BG_SUBTLE};
      background-image: linear-gradient(
        100deg,
        transparent 30%,
        ${BG_NEGATIVE}80 50%,
        transparent 70%
      );
      background-size: ${SHIMMER_WIDTH}px 100%;
      background-repeat: no-repeat;
      animation: glow-skeleton-shimmer 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  `
  document.head.appendChild(style)
}

// ── Skeleton Placeholder Helpers ──────────────────────────────
function SkeletonBar({ width, height = 12, radius = 8 }: { width: number | string; height?: number; radius?: number }) {
  ensureShimmerStyle()
  return (
    <div className="glow-skeleton-shimmer" style={{
      width, height, borderRadius: radius,
    }} />
  )
}

function SkeletonCircle({ size }: { size: number }) {
  ensureShimmerStyle()
  return (
    <div className="glow-skeleton-shimmer" style={{
      width: size, height: size, borderRadius: RADIUS_FULL,
      flexShrink: 0,
    }} />
  )
}

// ── Skeleton Layouts ──────────────────────────────────────────

function VerticalSkeleton() {
  return (
    <>
      {/* ── Header: avatar + name + specialty ── */}
      <div style={{ padding: `${SPACE_S}px ${SPACE_S}px ${SPACE_XS}px` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: SPACE_XXS }}>
          <SkeletonCircle size={AVATAR_SIZE} />
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <SkeletonBar width="55%" height={16} />
            <SkeletonBar width="35%" height={12} />
          </div>
          {/* Bookmark placeholder */}
          <SkeletonBar width={24} height={24} radius={6} />
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: 1, backgroundColor: BORDER_LIGHT, margin: `0 ${SPACE_S}px` }} />

      {/* ── Detail rows ── */}
      <div style={{
        padding: `${SPACE_XS}px ${SPACE_S}px`,
        display: 'flex', flexDirection: 'column', gap: SPACE_XS,
      }}>
        {[65, 75, 45].map((w, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: SPACE_XXS }}>
            <SkeletonBar width={14} height={14} radius={4} />
            <SkeletonBar width={`${w}%`} height={11} />
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div style={{ height: 1, backgroundColor: BORDER_LIGHT, margin: `0 ${SPACE_S}px` }} />

      {/* ── Cost area ── */}
      <div style={{ padding: `${SPACE_XS}px ${SPACE_S}px`, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <SkeletonBar width="28%" height={20} radius={6} />
        <SkeletonBar width="38%" height={10} />
      </div>

      {/* ── Action buttons ── */}
      <div style={{ padding: `${SPACE_XS}px ${SPACE_S}px ${SPACE_S}px` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACE_XS }}>
          <SkeletonBar width="100%" height={36} radius={10} />
          <SkeletonBar width="100%" height={36} radius={10} />
        </div>
      </div>
    </>
  )
}

function HorizontalSkeleton() {
  return (
    <div style={{ display: 'flex', padding: SPACE_S }}>
      {/* ── Left Column ── */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: SPACE_S }}>
        {/* Avatar + name row */}
        <div style={{ display: 'flex', gap: SPACE_XS, alignItems: 'flex-start' }}>
          <SkeletonCircle size={AVATAR_SIZE} />
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <SkeletonBar width="50%" height={16} />
            <SkeletonBar width="30%" height={12} />
          </div>
        </div>

        {/* Detail rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
          {[65, 75, 45].map((w, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: SPACE_XXS }}>
              <SkeletonBar width={14} height={14} radius={4} />
              <SkeletonBar width={`${w}%`} height={11} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Right Column ── */}
      <div style={{
        flexShrink: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'flex-end',
        marginLeft: SPACE_S, minWidth: 160, gap: SPACE_M,
      }}>
        {/* Bookmark placeholder */}
        <SkeletonBar width={24} height={24} radius={6} />

        {/* Cost area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
          <SkeletonBar width={56} height={20} radius={6} />
          <SkeletonBar width={76} height={10} />
        </div>

        {/* Action buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACE_XXS, width: ACTION_BTN_WIDTH, marginTop: 'auto' }}>
          <SkeletonBar width="100%" height={36} radius={10} />
          <SkeletonBar width="100%" height={36} radius={10} />
        </div>
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────
export function ProviderCard({
  layout = 'responsive',
  loading,
  name,
  specialty,
  photoUrl,
  initials,
  providerType = 'male',
  address,
  distance,
  rating,
  reviewCount,
  networkTier,
  networkName,
  networkLabel,
  cost,
  costLevel,
  costLabel = 'est. out-of-pocket',
  costChipLabel,
  costChipHideIcon,
  showCostChip = true,
  showPrice = true,
  languages,
  virtualAvailable,
  nextAppointmentLabel,
  nextAppointmentDate,
  bookmarkable = true,
  onBookmarkChange,
  onCallClick,
  onBookClick,
  onClick,
}: ProviderCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const containerWidth = useContainerWidth(containerRef)
  const effectiveLayout = layout === 'responsive'
    ? (containerWidth >= HORIZONTAL_MIN_WIDTH ? 'horizontal' : 'vertical')
    : layout

  const [isFaved, setIsFaved] = useState(false)
  const [imgError, setImgError] = useState(false)

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation()
    const next = !isFaved
    setIsFaved(next)
    onBookmarkChange?.(next)
  }

  // ── Loading / Skeleton State ──────────────────────────────────
  if (loading) {
    const skeletonLayout = effectiveLayout === 'horizontal' ? 'horizontal' : 'vertical'
    return (
      <div ref={containerRef} style={layout === 'horizontal' ? { minWidth: HORIZONTAL_MIN_WIDTH } : undefined}>
        <Card variant="outline" radius="md" padding="none" as="article">
          {skeletonLayout === 'horizontal' ? <HorizontalSkeleton /> : <VerticalSkeleton />}
        </Card>
      </div>
    )
  }

  const hasLanguages = languages && languages.length > 0
  const languageText = hasLanguages
    ? (languages!.length <= 2
        ? languages!.join(', ')
        : `${languages!.slice(0, 2).join(', ')} +${languages!.length - 2}`)
    : ''
  const callOnly = onCallClick && !onBookClick
  const showAppointmentRow = onBookClick ? !!nextAppointmentDate : callOnly
  const hasDetails = distance || address || rating != null || hasLanguages || virtualAvailable || showAppointmentRow
  const hasCost = showPrice && cost
  const hasActions = onCallClick || onBookClick

  // ── Horizontal Layout ───────────────────────────────────────
  if (effectiveLayout === 'horizontal') {
    return (
      <div ref={containerRef} style={layout === 'horizontal' ? { minWidth: HORIZONTAL_MIN_WIDTH } : undefined}>
      <Card
        variant="outline"
        radius="md"
        padding="none"
        interactive={!!onClick}
        onClick={onClick}
        as="article"
      >
        <div style={{ display: 'flex', padding: SPACE_S }}>
          {/* ── Left Column: Header + Details ── */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: SPACE_S }}>
            {/* Avatar + Name Row */}
            <div style={{ display: 'flex', gap: SPACE_XS, alignItems: 'flex-start' }}>
              <ProviderAvatar
                photoUrl={photoUrl} name={name} providerType={providerType}
                imgError={imgError} onImgError={() => setImgError(true)}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: SPACE_XXS }}>
                  <p style={{
                    fontFamily: FONT, fontWeight: W_MEDIUM,
                    fontSize: fontSizes[18], lineHeight: lineHeights[22], color: TEXT_DEFAULT,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {name}
                  </p>
                  {networkTier && (
                    <NetworkBadge tier={networkTier} networkName={networkName} networkLabel={networkLabel} bordered />
                  )}
                </div>
                <p style={{
                  fontFamily: FONT, fontWeight: W_REGULAR,
                  fontSize: fontSizes[16], lineHeight: lineHeights[19], color: TEXT_DEFAULT, marginTop: 2,
                }}>
                  {specialty}
                </p>
              </div>
            </div>

            {/* Detail Rows — aligned to card left edge */}
            {hasDetails && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE_XXS }}>
                {rating != null && (
                  <DetailRow icon={<StarLineIcon size="sm" />}>
                    {rating}/5{reviewCount != null ? ` (${reviewCount})` : ''}
                  </DetailRow>
                )}
                {(distance || address) && (
                  <DetailRow icon={<LocationIcon size="sm" />}>
                    {distance && address ? `${distance} - ${address}` : distance || address}
                  </DetailRow>
                )}
                {hasLanguages && (
                  <DetailRow icon={<GlobeIcon size="sm" />}>
                    {languageText}
                  </DetailRow>
                )}
                {virtualAvailable && (
                  <DetailRow icon={<VideoCameraIcon size="sm" />}>
                    Accept virtual appointment
                  </DetailRow>
                )}
                {showAppointmentRow && (
                  <DetailRow icon={<CalendarIcon size="sm" />}>
                    {callOnly ? (
                      'Call to check availability'
                    ) : (
                      <>{nextAppointmentLabel && `${nextAppointmentLabel} `}<strong style={{ fontWeight: W_MEDIUM }}>{nextAppointmentDate}</strong></>
                    )}
                  </DetailRow>
                )}
              </div>
            )}
          </div>

          {/* ── Right Column: Bookmark + Cost + Buttons ── */}
          <div style={{
            flexShrink: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'flex-end',
            marginLeft: SPACE_S, minWidth: 160, gap: SPACE_M,
          }}>
            {/* Bookmark */}
            {bookmarkable && (
              <IconButton
                icon={isFaved ? <BookmarkSolidIcon size="md" /> : <BookmarkLineIcon size="md" />}
                aria-label={isFaved ? 'Remove from saved' : 'Save provider'}
                variant="ghost" size="sm" pressed={isFaved}
                onClick={handleBookmark}
              />
            )}

            {/* Cost */}
            {hasCost && (
              <div style={{ textAlign: 'right' }}>
                <CostSection
                  cost={cost!} costLevel={costLevel}
                  costLabel={costLabel} costChipLabel={costChipLabel} costChipHideIcon={costChipHideIcon} showCostChip={showCostChip}
                  chipInline
                />
              </div>
            )}

            {/* Action Buttons */}
            {hasActions && (
              <div style={{ display: 'grid', gridTemplateColumns: onBookClick ? '1fr 1fr' : '1fr', gap: SPACE_XXS, width: ACTION_BTN_WIDTH, marginTop: 'auto' }}>
                {onCallClick && (
                  <Button variant="outline" size="sm" fullWidth onClick={(e) => { e.stopPropagation(); onCallClick() }}>
                    Call
                  </Button>
                )}
                {onBookClick && (
                  <Button variant="secondary" size="sm" fullWidth onClick={(e) => { e.stopPropagation(); onBookClick() }}>
                    Book
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
      </div>
    )
  }

  // ── Vertical Layout (default) ───────────────────────────────
  return (
    <div ref={containerRef}>
    <Card
      variant="outline"
      radius="md"
      padding="none"
      interactive={!!onClick}
      onClick={onClick}
      as="article"
    >
      {/* ── Provider Header ──────────────────────────────────── */}
      <div style={{ padding: `${SPACE_S}px ${SPACE_S}px ${SPACE_XS}px` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: SPACE_XXS }}>
          {/* Avatar */}
          <ProviderAvatar
            photoUrl={photoUrl} name={name} providerType={providerType}
            imgError={imgError} onImgError={() => setImgError(true)}
          />

          {/* Name + Specialty + Network */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              fontFamily: FONT, fontWeight: W_MEDIUM,
              fontSize: fontSizes[18], lineHeight: lineHeights[22], color: TEXT_DEFAULT,
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {name}
            </p>
            <p style={{
              fontFamily: FONT, fontWeight: W_REGULAR,
              fontSize: fontSizes[16], lineHeight: lineHeights[19], color: TEXT_DEFAULT, marginTop: 2, // optical adjustment
            }}>
              {specialty}
            </p>

            {networkTier && (
              <div style={{ marginTop: SPACE_XXS }}>
                <NetworkBadge
                  tier={networkTier}
                  networkName={networkName}
                  networkLabel={networkLabel}
                  bordered={false}
                />
              </div>
            )}
          </div>

          {/* Bookmark button */}
          {bookmarkable && (
            <IconButton
              icon={isFaved ? <BookmarkSolidIcon size="md" /> : <BookmarkLineIcon size="md" />}
              aria-label={isFaved ? 'Remove from saved' : 'Save provider'}
              variant="ghost"
              size="sm"
              pressed={isFaved}
              onClick={handleBookmark}
            />
          )}
        </div>
      </div>

      {/* ── Details Section ──────────────────────────────────── */}
      {hasDetails && (
        <>
          <div style={{ height: 1, backgroundColor: BORDER_LIGHT, margin: `0 ${SPACE_S}px` }} />
          <div style={{
            padding: `${SPACE_XS}px ${SPACE_S}px`,
            display: 'flex', flexDirection: 'column', gap: SPACE_XS,
          }}>
            {rating != null && (
              <DetailRow icon={<StarLineIcon size="sm" />}>
                {rating}/5{reviewCount != null ? ` (${reviewCount})` : ''}
              </DetailRow>
            )}
            {(distance || address) && (
              <DetailRow icon={<LocationIcon size="sm" />}>
                {distance && address ? `${distance} - ${address}` : distance || address}
              </DetailRow>
            )}
            {hasLanguages && (
              <DetailRow icon={<GlobeIcon size="sm" />}>
                {languageText}
              </DetailRow>
            )}
            {virtualAvailable && (
              <DetailRow icon={<VideoCameraIcon size="sm" />}>
                Virtual visit available
              </DetailRow>
            )}
            {showAppointmentRow && (
              <DetailRow icon={<CalendarIcon size="sm" />}>
                {callOnly ? (
                  'Call to check availability'
                ) : (
                  <>{nextAppointmentLabel && `${nextAppointmentLabel} `}<strong style={{ fontWeight: W_MEDIUM }}>{nextAppointmentDate}</strong></>
                )}
              </DetailRow>
            )}
          </div>
        </>
      )}

      {/* ── Cost Section ─────────────────────────────────────── */}
      {hasCost && (
        <>
          <div style={{ height: 1, backgroundColor: BORDER_LIGHT, margin: `0 ${SPACE_S}px` }} />
          <div style={{ padding: `${SPACE_XS}px ${SPACE_S}px` }}>
            <CostSection
              cost={cost}
              costLevel={costLevel}
              costLabel={costLabel}
              costChipLabel={costChipLabel}
              costChipHideIcon={costChipHideIcon}
              showCostChip={showCostChip}
            />
          </div>
        </>
      )}

      {/* ── Action Buttons ───────────────────────────────────── */}
      {hasActions && (
        <div style={{ padding: `${SPACE_XS}px ${SPACE_S}px ${SPACE_S}px` }}>
          <div style={{ display: 'grid', gridTemplateColumns: onBookClick ? '1fr 1fr' : '1fr', gap: SPACE_XS }}>
            {onCallClick && (
              <Button variant="outline" size="sm" fullWidth onClick={(e) => { e.stopPropagation(); onCallClick() }}>
                Call
              </Button>
            )}
            {onBookClick && (
              <Button variant="secondary" size="sm" fullWidth onClick={(e) => { e.stopPropagation(); onBookClick() }}>
                Book
              </Button>
            )}
          </div>
        </div>
      )}
    </Card>
    </div>
  )
}
