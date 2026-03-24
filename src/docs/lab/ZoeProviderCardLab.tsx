import { useState } from 'react'
import { ZoeProviderCard } from '../../components/_lab/ZoeProviderCard'

// ============================================================
// LAB DOC — ZoeProviderCard
// Status: Ready
// Figma: Zoe UI — Provider answer type
// ============================================================

const DEMO_PROVIDER = {
  name: 'Dr. Lin Wei',
  specialty: 'Licensed Acupuncturist',
  providerType: 'female' as const,
  networkTier: 'in-network' as const,
  address: '245 Wellness Ave',
  cost: '$95',
  costLevel: 'lower' as const,
  rating: 4.9,
  reviewCount: 215,
  distance: '0.4 mi',
}

export default function ZoeProviderCardLab() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ZoeProviderCard
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#8a8a8a', marginBottom: 32 }}>
        Wrapper around ProviderCard for Zoe chat context. Adds active state (persistent shadow when drawer is open for this card).
      </p>

      {/* ── Default vs Active ──────────────────────────── */}
      <Section title="Default vs Active" description="Click a card to toggle active state. Active card keeps shadow even after hover leaves.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 700 }}>
          {[0, 1, 2].map(i => (
            <ZoeProviderCard
              key={i}
              {...DEMO_PROVIDER}
              name={i === 0 ? 'Dr. Lin Wei' : i === 1 ? 'Dr. James Nakamura' : 'Dr. Maya Patel'}
              specialty={i === 0 ? 'Licensed Acupuncturist' : i === 1 ? 'Acupuncture & Herbal Medicine' : 'Pain Management'}
              isActive={activeIdx === i}
              onCallClick={() => {}}
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
            />
          ))}
        </div>
      </Section>

      {/* ── Props ──────────────────────────────────────── */}
      <Section title="Props" description="Extends all ProviderCard props + isActive">
        <table style={{
          fontFamily: 'Founders Grotesk, sans-serif',
          fontSize: 14,
          borderCollapse: 'collapse',
          width: '100%',
          maxWidth: 600,
        }}>
          <thead>
            <tr>
              {['Prop', 'Type', 'Description'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #e0e0e0', fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['isActive', 'boolean', 'Persistent shadow — keeps card highlighted when its drawer is open'],
              ['...rest', 'ProviderCardProps', 'All standard ProviderCard props passed through'],
            ].map(([prop, type, desc]) => (
              <tr key={prop}>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0', fontFamily: 'monospace', fontSize: 13 }}>{prop}</td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0', fontFamily: 'monospace', fontSize: 13 }}>{type}</td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </div>
  )
}

function Section({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 18, fontWeight: 500, marginBottom: 4 }}>{title}</h2>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 13, color: '#8a8a8a', marginBottom: 16 }}>{description}</p>
      {children}
    </div>
  )
}
