import { useState } from 'react'
import { Modal } from '../../components/Modal'
import { Card } from '../../components/Card'
import { NetworkBadge } from '../../components/NetworkBadge'
import type { NetworkTier } from '../../components/NetworkBadge/NetworkBadge.types'
import InfoCrFrLine from '../../components/Icon/icons/line/InfoCrFr'
import CoinDollarLine from '../../components/Icon/icons/line/CoinDollar'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { typographyStyles } from '../../../tokens/semantic/typography'

// ============================================================
// Cost Breakdown Modal — "How we calculate your cost?"
// Figma: node-id=2752-11505
// ============================================================

// ── Typography ──────────────────────────────────────────────
const LABEL_S       = typographyStyles['label-s']        // 16px/19px, Founders Medium
const LABEL_XS      = typographyStyles['label-xs']       // 14px/18px, Founders Medium
const DISPLAY_XXS   = typographyStyles['display-xxs']    // 32px/39px, Tiempos Medium
const PARAGRAPH_XS  = typographyStyles['paragraph-xs']   // 12px/14px, Founders Regular
const PARAGRAPH_S   = typographyStyles['paragraph-s']    // 14px/17px, Founders Regular
const PARAGRAPH_M   = typographyStyles['paragraph-m']    // 16px/19px, Founders Regular

// ── Colors ──────────────────────────────────────────────────
const TEXT_DEFAULT   = sc.neutral.text.DEFAULT            // #000000
const TEXT_DARK      = sc.neutral.text.dark               // #404040
const ORANGE_BG      = sc.primary.surface.subtle          // #fff8f5
const ORANGE_BORDER  = sc.primary.border.light            // #ffb999 (closest token to Figma #ffdccc)
const BANNER_BG      = sc.neutral.surface.extraSubtle     // #fafafa

// ── Spacing ─────────────────────────────────────────────────
const BODY_PX        = semanticSpacing.xxxl               // 48px
const BODY_PT        = semanticSpacing.m                  // 20px
const BODY_PB        = semanticSpacing.xxl                // 40px
const SECTION_GAP    = semanticSpacing.s                  // 16px
const CARDS_GAP      = semanticSpacing.m                  // 20px
const CARD_GAP       = semanticSpacing.xs                 // 12px
const BANNER_PX      = semanticSpacing.m                  // 20px
const BANNER_PY      = semanticSpacing.s                  // 16px
const BANNER_GAP     = semanticSpacing.xs                 // 12px
const TITLE_ICON_GAP = semanticSpacing.xxxs               // 4px
const COVERAGE_GAP   = semanticSpacing.xs                 // 12px

// ── Props ───────────────────────────────────────────────────
type CostBreakdownModalProps = {
  open: boolean
  onClose: () => void
  onBack?: () => void
  serviceName: string
  networkTier: NetworkTier
  estimatedServicePrice: string
  estimatedUserCost: string
  servicePriceDescription: string
  userCostDescription: string
  coverageExplanation: string
}

export function CostBreakdownModal({
  open,
  onClose,
  onBack,
  serviceName,
  networkTier,
  estimatedServicePrice,
  estimatedUserCost,
  servicePriceDescription,
  userCostDescription,
  coverageExplanation,
}: CostBreakdownModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      onBack={onBack}
      title="How we calculate your cost?"
      size="lg"
      showBackButton
    >
      <div
        style={{
          paddingLeft: BODY_PX,
          paddingRight: BODY_PX,
          paddingTop: BODY_PT,
          paddingBottom: BODY_PB,
          display: 'flex',
          flexDirection: 'column',
          gap: SECTION_GAP,
        }}
      >
        {/* ── Service row ─────────────────────────────────────── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: CARDS_GAP }}>
          <p style={{ ...LABEL_S, color: TEXT_DEFAULT, margin: 0 }}>
            {serviceName}
          </p>
          <NetworkBadge tier={networkTier} size="sm" />
        </div>

        {/* ── Cost cards ──────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: CARDS_GAP }}>
          {/* Left card — Estimated service price */}
          <Card variant="outline" radius="sm" padding="sm" style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: CARD_GAP }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: TITLE_ICON_GAP }}>
                <p style={{ ...LABEL_XS, color: TEXT_DEFAULT, margin: 0 }}>
                  Estimated service price
                </p>
                <InfoCrFrLine size="md" />
              </div>
              <div>
                <p style={{ ...DISPLAY_XXS, color: TEXT_DEFAULT, margin: 0 }}>
                  {estimatedServicePrice}
                </p>
                <p style={{ ...PARAGRAPH_XS, color: TEXT_DEFAULT, margin: 0 }}>
                  Per procedure
                </p>
              </div>
              <p style={{ ...PARAGRAPH_S, color: TEXT_DARK, margin: 0 }}>
                {servicePriceDescription}
              </p>
            </div>
          </Card>

          {/* Right card — Your estimated cost (orange) */}
          <Card
            variant="outline"
            radius="sm"
            padding="sm"
            style={{
              flex: 1,
              backgroundColor: ORANGE_BG,
              borderColor: ORANGE_BORDER,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: CARD_GAP }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: TITLE_ICON_GAP }}>
                <p style={{ ...LABEL_XS, color: TEXT_DEFAULT, margin: 0 }}>
                  Your estimated cost
                </p>
                <InfoCrFrLine size="md" />
              </div>
              <div>
                <p style={{ ...DISPLAY_XXS, color: TEXT_DEFAULT, margin: 0 }}>
                  {estimatedUserCost}
                </p>
                <p style={{ ...PARAGRAPH_XS, color: TEXT_DEFAULT, margin: 0 }}>
                  Per procedure
                </p>
              </div>
              <p style={{ ...PARAGRAPH_S, color: TEXT_DARK, margin: 0 }}>
                {userCostDescription}
              </p>
            </div>
          </Card>
        </div>

        {/* ── Extra fees banner ────────────────────────────────── */}
        <Card
          variant="filled"
          radius="sm"
          padding="none"
          style={{ backgroundColor: BANNER_BG }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: BANNER_GAP,
              paddingLeft: BANNER_PX,
              paddingRight: BANNER_PX,
              paddingTop: BANNER_PY,
              paddingBottom: BANNER_PY,
            }}
          >
            <div style={{ flexShrink: 0 }}>
              <CoinDollarLine size="lg" />
            </div>
            <p style={{ ...PARAGRAPH_S, color: TEXT_DEFAULT, margin: 0 }}>
              <span style={{ ...LABEL_XS }}>Extra fees may apply</span>
              {' '}for services like imaging, anesthesia, or facility usage. Speak to your provider for details.
            </p>
          </div>
        </Card>

        {/* ── How your coverage works ─────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: COVERAGE_GAP, paddingTop: semanticSpacing.xxs }}>
          <p style={{ ...LABEL_S, color: TEXT_DEFAULT, margin: 0 }}>
            How your coverage works
          </p>
          <p style={{ ...PARAGRAPH_M, color: TEXT_DARK, margin: 0 }}>
            {coverageExplanation}
          </p>
        </div>
      </div>
    </Modal>
  )
}

// ── Demo wrapper ────────────────────────────────────────────
export default function CostBreakdownModalExample() {
  const [open, setOpen] = useState(true)

  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => setOpen(true)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Open Cost Breakdown
      </button>
      <CostBreakdownModal
        open={open}
        onClose={() => setOpen(false)}
        onBack={() => setOpen(false)}
        serviceName="Blood test"
        networkTier="in-network"
        estimatedServicePrice="$50"
        estimatedUserCost="$25"
        servicePriceDescription="This is an estimate based on what providers in your area usually charge for this procedure."
        userCostDescription="You'll pay 20% of the service price (your co-insurance)."
        coverageExplanation="Your plan covers this service regardless of your deductible status, so cost-sharing (copay or coinsurance) begins immediately. You only pay up to the out-of-pocket maximum ($XXX left). After that, your plan pays 100% of covered expenses."
      />
    </div>
  )
}
