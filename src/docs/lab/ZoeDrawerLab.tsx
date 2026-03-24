import { useState } from 'react'
import { ZoeDrawer } from '../../components/_lab/ZoeDrawer'
import { Button } from '../../components/Button/Button'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { semanticSpacing } from '../../../tokens/semantic/spacing'

// ============================================================
// LAB DOC — ZoeDrawer
// Status: Ready
// Figma: Zoe UI — "Medical benefit" drawer (node-id=11584:134644)
// ============================================================

export default function ZoeDrawerLab() {
  const [open, setOpen] = useState(false)
  const [withFooter, setWithFooter] = useState(true)
  const [withSubtitle, setWithSubtitle] = useState(true)

  return (
    <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ZoeDrawer
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#8a8a8a', marginBottom: 32 }}>
        Right-side push drawer for Zoe chat. Pushes content left — no overlay or backdrop. Sticky header + scrollable body + sticky footer.
      </p>

      {/* ── Interactive demo ──────────────────────────── */}
      <Section title="Interactive demo" description="Toggle drawer open/closed. Press Escape to close.">
        <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
          <Button variant="primary" size="sm" onClick={() => setOpen(true)}>Open drawer</Button>
          <Button variant="outline" size="sm" onClick={() => setWithSubtitle(s => !s)}>
            {withSubtitle ? 'Hide subtitle' : 'Show subtitle'}
          </Button>
          <Button variant="outline" size="sm" onClick={() => setWithFooter(f => !f)}>
            {withFooter ? 'Hide footer' : 'Show footer'}
          </Button>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          height: 500,
          border: '1px solid #e8e8e8',
          borderRadius: 12,
          overflow: 'hidden',
          background: sc.neutral.surface.negative,
        }}>
          {/* Simulated chat area */}
          <div style={{ flex: 1, minWidth: 0, padding: 24, transition: 'flex 250ms ease' }}>
            <p style={{
              fontFamily: typographyStyles['paragraph-l'].fontFamily,
              fontSize: typographyStyles['paragraph-l'].fontSize,
              lineHeight: typographyStyles['paragraph-l'].lineHeight,
              color: sc.neutral.text.DEFAULT,
            }}>
              This area represents the chat content. When the drawer opens, it pushes this content to the left.
            </p>
          </div>

          {/* Drawer */}
          <ZoeDrawer
            open={open}
            onClose={() => setOpen(false)}
            title="Mental Health Visit"
            subtitle={withSubtitle ? 'Home visit for individual, family' : undefined}
            footer={withFooter ? (
              <>
                <Button variant="outline" size="md" onClick={() => setOpen(false)}>More coverage options</Button>
                <Button variant="primary" size="md" onClick={() => setOpen(false)}>Find providers</Button>
              </>
            ) : undefined}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: semanticSpacing.l }}>
              {['About this benefit', 'What to know before you book', 'How to use this benefit'].map(heading => (
                <section key={heading}>
                  <h3 style={{
                    fontFamily: typographyStyles['label-m'].fontFamily,
                    fontSize: typographyStyles['label-m'].fontSize,
                    lineHeight: typographyStyles['label-m'].lineHeight,
                    fontWeight: typographyStyles['label-m'].fontWeight,
                    color: sc.neutral.text.DEFAULT,
                    margin: `0 0 ${semanticSpacing.xxs}px 0`,
                  }}>
                    {heading}
                  </h3>
                  <p style={{
                    fontFamily: typographyStyles['paragraph-l'].fontFamily,
                    fontSize: typographyStyles['paragraph-l'].fontSize,
                    lineHeight: typographyStyles['paragraph-l'].lineHeight,
                    color: sc.neutral.text.DEFAULT,
                    margin: 0,
                  }}>
                    This is placeholder content for the {heading.toLowerCase()} section. In production, this would contain real benefit details, requirements, and instructions.
                  </p>
                </section>
              ))}
            </div>
          </ZoeDrawer>
        </div>
      </Section>

      {/* ── Props ──────────────────────────────────────── */}
      <Section title="Props" description="Component API">
        <table style={{
          fontFamily: 'Founders Grotesk, sans-serif',
          fontSize: 14,
          borderCollapse: 'collapse',
          width: '100%',
          maxWidth: 700,
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
              ['open', 'boolean', 'Yes', 'Whether the drawer is open'],
              ['onClose', '() => void', 'Yes', 'Called on X click or Escape key'],
              ['title', 'string', 'Yes', 'Header title text'],
              ['subtitle', 'string', 'No', 'Optional subtitle below title'],
              ['footer', 'ReactNode', 'No', 'Sticky footer content (action buttons)'],
              ['children', 'ReactNode', 'Yes', 'Scrollable body content'],
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
