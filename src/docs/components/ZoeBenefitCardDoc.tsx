import { useState } from 'react'
import { ZoeBenefitCard } from '../../components/ZoeBenefitCard'
import LocationLine from '../../components/Icon/icons/line/Location'
import FileLine from '../../components/Icon/icons/line/File'

// ============================================================
// LAB DOC — ZoeBenefitCard
// Status: Draft
// Figma: Zoe UI — "Medical benefit" (node-id=11584:134644)
// ============================================================

// Demo images (placeholder)
const DEMO_IMAGE_1 = 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=176&h=176&fit=crop'
const DEMO_IMAGE_2 = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=176&h=176&fit=crop'
const DEMO_IMAGE_3 = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=176&h=176&fit=crop'

/** Simple colored icon for the icon variant demo */
function DemoIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 8L26 14L20 20L14 14L20 8Z" fill="#A855F7" />
      <path d="M20 20L26 26L20 32L14 26L20 20Z" fill="#3B82F6" />
    </svg>
  )
}

export default function ZoeBenefitCardLab() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ZoeBenefitCard
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#8a8a8a', marginBottom: 32 }}>
        Benefit card in the Zoe conversation — image or icon thumbnail, title, optional subtitle &amp; metadata, chevron.
        <br />
        3 states: default (flat), hover (shadow), active (drawer open).
      </p>

      {/* ── Image variant — full ──────────────────────────── */}
      <Section title="Image variant — full" description="Photo thumbnail + title + subtitle + metadata (location)">
        <CardContainer>
          <ZoeBenefitCard
            title="Mental Health Visit"
            subtitle="Home visit for individual, family"
            imageSrc={DEMO_IMAGE_1}
            imageAlt="Mental health visit"
            metaIcon={<LocationLine size={20} />}
            metaText="At an outpatient facility"
            onClick={() => alert('Open drawer')}
          />
        </CardContainer>
      </Section>

      {/* ── Icon variant ─────────────────────────────────── */}
      <Section title="Icon variant" description="Colored background + icon/logo, no subtitle, metadata with file icon">
        <CardContainer>
          <ZoeBenefitCard
            title="Virtual mental health support"
            iconElement={<DemoIcon />}
            iconBgColor="#eed6de"
            metaIcon={<FileLine size={20} />}
            metaText="Provided by Skyler Health"
            onClick={() => alert('Open drawer')}
          />
        </CardContainer>
      </Section>

      {/* ── Active state ─────────────────────────────────── */}
      <Section title="Active state" description="Click a card to toggle active (simulates drawer open). Active card stays flat, non-active cards show hover.">
        <CardContainer>
          <ZoeBenefitCard
            title="Virtual mental health support"
            iconElement={<DemoIcon />}
            iconBgColor="#eed6de"
            metaIcon={<FileLine size={20} />}
            metaText="Provided by Skyler Health"
            isActive={activeCard === 'icon'}
            onClick={() => setActiveCard(activeCard === 'icon' ? null : 'icon')}
          />
          <ZoeBenefitCard
            title="Mental Health Visit"
            subtitle="Home visit for individual, family"
            imageSrc={DEMO_IMAGE_1}
            imageAlt="Mental health visit"
            metaIcon={<LocationLine size={20} />}
            metaText="At an outpatient facility"
            isActive={activeCard === 'img1'}
            onClick={() => setActiveCard(activeCard === 'img1' ? null : 'img1')}
          />
          <ZoeBenefitCard
            title="Mental Health Visit"
            subtitle="Home visit for individual, family"
            imageSrc={DEMO_IMAGE_2}
            imageAlt="Mental health visit"
            metaIcon={<LocationLine size={20} />}
            metaText="Office visit"
            isActive={activeCard === 'img2'}
            onClick={() => setActiveCard(activeCard === 'img2' ? null : 'img2')}
          />
        </CardContainer>
      </Section>

      {/* ── Title only ───────────────────────────────────── */}
      <Section title="Title only" description="No subtitle, no metadata — minimal card">
        <CardContainer>
          <ZoeBenefitCard
            title="Acupuncture"
            imageSrc={DEMO_IMAGE_3}
            imageAlt="Acupuncture"
            onClick={() => alert('Open drawer')}
          />
        </CardContainer>
      </Section>

      {/* ── Stacked list (chat context) ──────────────────── */}
      <Section title="Stacked list (chat context)" description="3 cards stacked vertically as they appear in the conversation, max-width 700px">
        <div style={{ maxWidth: 700, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <ZoeBenefitCard
            title="Virtual mental health support"
            iconElement={<DemoIcon />}
            iconBgColor="#eed6de"
            metaIcon={<FileLine size={20} />}
            metaText="Provided by Skyler Health"
            onClick={() => {}}
          />
          <ZoeBenefitCard
            title="Mental Health Visit"
            subtitle="Home visit for individual, family"
            imageSrc={DEMO_IMAGE_1}
            imageAlt="Mental health visit"
            metaIcon={<LocationLine size={20} />}
            metaText="At an outpatient facility"
            onClick={() => {}}
          />
          <ZoeBenefitCard
            title="Mental Health Visit"
            subtitle="Home visit for individual, family"
            imageSrc={DEMO_IMAGE_2}
            imageAlt="Mental health visit"
            metaIcon={<LocationLine size={20} />}
            metaText="Office visit"
            onClick={() => {}}
          />
        </div>
      </Section>
    </div>
  )
}

function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 700, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {children}
    </div>
  )
}

function Section({ title, description, children }: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
        {title}
      </h2>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 13, color: '#8a8a8a', marginBottom: 16 }}>
        {description}
      </p>
      {children}
    </div>
  )
}
