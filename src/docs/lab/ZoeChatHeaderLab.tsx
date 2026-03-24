import { ZoeChatHeader } from '../../components/_lab/ZoeChatHeader'
import { semanticColors as sc } from '../../../tokens/semantic/colors'

// ============================================================
// LAB DOC — ZoeChatHeader
// Status: Ready
// Figma: Zoe UI — "Chat" (node-id=497:28402)
// ============================================================

export default function ZoeChatHeaderLab() {
  return (
    <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ZoeChatHeader
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#8a8a8a', marginBottom: 32 }}>
        Sticky gradient header for the Zoe chat screen. Contains a close button. Background fades from white to transparent so scrolled content shows through.
      </p>

      {/* ── Standalone header ──────────────────────────── */}
      <Section title="Header on white" description="Gradient fades to transparent — visible against white background">
        <div style={{
          height: 300,
          background: sc.neutral.surface.negative,
          borderRadius: 12,
          border: '1px solid #e8e8e8',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div style={{ height: '100%', overflowY: 'auto' }}>
            <ZoeChatHeader onClose={() => alert('Close clicked')} />
            <div style={{ padding: '0 32px 32px' }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <p key={i} style={{
                  fontFamily: 'Founders Grotesk, sans-serif',
                  fontSize: 16,
                  color: sc.neutral.text.dark,
                  marginBottom: 12,
                }}>
                  Scroll to see the gradient header stay sticky while content passes underneath. Line {i + 1}.
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Props ──────────────────────────────────────── */}
      <Section title="Props" description="Component API">
        <table style={{
          fontFamily: 'Founders Grotesk, sans-serif',
          fontSize: 14,
          borderCollapse: 'collapse',
          width: '100%',
          maxWidth: 600,
        }}>
          <thead>
            <tr>
              {['Prop', 'Type', 'Required', 'Description'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #e0e0e0', fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['onClose', '() => void', 'Yes', 'Called when X button is clicked'],
              ['className', 'string', 'No', 'Additional CSS class'],
              ['style', 'CSSProperties', 'No', 'Additional inline styles'],
            ].map(([prop, type, req, desc]) => (
              <tr key={prop}>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0', fontFamily: 'monospace', fontSize: 13 }}>{prop}</td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0', fontFamily: 'monospace', fontSize: 13 }}>{type}</td>
                <td style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>{req}</td>
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
