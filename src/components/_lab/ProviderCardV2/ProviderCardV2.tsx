import { useState, useRef, useEffect } from 'react'
import type { ProviderCardV2Props } from './ProviderCardV2.types'
import { Card } from '../../Card'
import { Button } from '../../Button'
import { IconButton } from '../../IconButton'
import { NetworkBadge } from '../../ProviderCard/NetworkBadge'
import { CostSection } from '../../ProviderCard/CostSection'
import { semanticColors as sc } from '../../../../tokens/semantic/colors'
import { fontFamilies, fontWeights, fontSizes, lineHeights } from '../../../../tokens/primitive/typography'
import { semanticSpacing } from '../../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../../tokens/semantic/radii'

// ── DS Icons ──────────────────────────────────────────────────
import LocationIcon from '../../Icon/icons/line/Location'
import StarLineIcon from '../../Icon/icons/line/Star'
import CalendarIcon from '../../Icon/icons/line/Calendar'
import BookmarkLineIcon from '../../Icon/icons/line/Bookmark'
import BookmarkSolidIcon from '../../Icon/icons/solid/Bookmark'

// ── Provider Avatar Fallback Icons ───────────────────────────
import ProviderFemaleSm from '../../Icon/icons/profile/ProviderFemaleSm'
import ProviderMale from '../../Icon/icons/profile/ProviderMale'
import Facility from '../../Icon/icons/profile/Facility'

// ============================================================
// LAB — ProviderCard V2
// Status: Draft
//
// Iteration on the original ProviderCard. Same data model,
// open for layout / visual experiments.
//
// Reuses production sub-components: NetworkBadge, CostSection
// ============================================================

// ── Token Constants ───────────────────────────────────────────
const FONT         = fontFamilies.default              // Founders Grotesk
const W_REGULAR    = fontWeights.regular               // 400
const W_MEDIUM     = fontWeights.medium                // 500
const TEXT_DEFAULT = sc.neutral.text.DEFAULT            // #000000
const TEXT_DARK    = sc.neutral.text.dark               // #404040
const BORDER_LIGHT = sc.neutral.border.light           // #ededed
const BG_EXTRA_SUBTLE = sc.neutral.surface.extraSubtle // #fafafa
const RADIUS_FULL  = parseInt(semanticRadii.full)      // 999
const SPACE_XXXS   = parseInt(semanticSpacing.xxxs)    // 4px
const SPACE_XXS    = parseInt(semanticSpacing.xxs)     // 8px
const SPACE_XS     = parseInt(semanticSpacing.xs)      // 12px
const SPACE_S      = parseInt(semanticSpacing.s)       // 16px
const SPACE_M      = parseInt(semanticSpacing.m)       // 20px

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
        providerType === 'female' ? <ProviderFemaleSm size={AVATAR_SIZE} /> :
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

// ── Component ─────────────────────────────────────────────────
export function ProviderCardV2({
  layout = 'responsive',
  name,
  specialty,
  photoUrl,
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
  showCostChip = true,
  showPrice = true,
  nextAppointmentLabel,
  nextAppointmentDate,
  bookmarkable = true,
  onBookmarkChange,
  onCallClick,
  onBookClick,
  onClick,
}: ProviderCardV2Props) {
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

  const hasDetails = distance || address || rating != null || nextAppointmentDate
  const hasCost = showPrice && cost
  const hasActions = onCallClick || onBookClick

  // ── Horizontal Layout (Two-Column) ──────────────────────────
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
                {(distance || address) && (
                  <DetailRow icon={<LocationIcon size="sm" />}>
                    {distance && address ? `${distance} - ${address}` : distance || address}
                  </DetailRow>
                )}
                {rating != null && (
                  <DetailRow icon={<StarLineIcon size="sm" />}>
                    {rating}/5{reviewCount != null ? ` (${reviewCount})` : ''}
                  </DetailRow>
                )}
                {nextAppointmentDate && (
                  <DetailRow icon={<CalendarIcon size="sm" />}>
                    {nextAppointmentLabel && `${nextAppointmentLabel} `}
                    <strong style={{ fontWeight: W_MEDIUM }}>{nextAppointmentDate}</strong>
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
                  costLabel={costLabel} showCostChip={showCostChip}
                  chipInline
                />
              </div>
            )}

            {/* Action Buttons */}
            {hasActions && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACE_XXS, width: '100%', marginTop: 'auto' }}>
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
          <ProviderAvatar
            photoUrl={photoUrl} name={name} providerType={providerType}
            imgError={imgError} onImgError={() => setImgError(true)}
          />
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
              fontSize: fontSizes[16], lineHeight: lineHeights[19], color: TEXT_DEFAULT, marginTop: 2,
            }}>
              {specialty}
            </p>
            {networkTier && (
              <NetworkBadge tier={networkTier} networkName={networkName} networkLabel={networkLabel} />
            )}
          </div>
          {bookmarkable && (
            <IconButton
              icon={isFaved ? <BookmarkSolidIcon size="md" /> : <BookmarkLineIcon size="md" />}
              aria-label={isFaved ? 'Remove from saved' : 'Save provider'}
              variant="ghost" size="sm" pressed={isFaved}
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
            {(distance || address) && (
              <DetailRow icon={<LocationIcon size="sm" />}>
                {distance && address ? `${distance} - ${address}` : distance || address}
              </DetailRow>
            )}
            {rating != null && (
              <DetailRow icon={<StarLineIcon size="sm" />}>
                {rating}/5{reviewCount != null ? ` (${reviewCount})` : ''}
              </DetailRow>
            )}
            {nextAppointmentDate && (
              <DetailRow icon={<CalendarIcon size="sm" />}>
                {nextAppointmentLabel && `${nextAppointmentLabel} `}
                <strong style={{ fontWeight: W_MEDIUM }}>{nextAppointmentDate}</strong>
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
              showCostChip={showCostChip}
            />
          </div>
        </>
      )}

      {/* ── Action Buttons ───────────────────────────────────── */}
      {hasActions && (
        <div style={{ padding: `${SPACE_XS}px ${SPACE_S}px ${SPACE_S}px` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACE_XS }}>
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
