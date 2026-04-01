import { ZoeStreamingText } from '../../components/ZoeStreamingText'

// ============================================================
// LAB DOC — ZoeStreamingText
// Status: Draft
// Figma: Zoe UI — streaming text display with blinking cursor
// ============================================================

export default function ZoeStreamingTextDoc() {
  return (
    <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ZoeStreamingText
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#8a8a8a', marginBottom: 32 }}>
        Streaming text display with an animated blinking cursor. Used inside Zoe AI chat to render
        assistant responses as they stream in token-by-token.
      </p>

      {/* ── Static text (not streaming) ───────────────── */}
      <Section title="Static text (isStreaming=false)" description="Complete message — no cursor shown">
        <DemoRow>
          <ZoeStreamingText
            text="Your plan covers MRI scans at in-network facilities with a $50 copay after your deductible is met."
            isStreaming={false}
          />
        </DemoRow>
      </Section>

      {/* ── Streaming with cursor ─────────────────────── */}
      <Section title="Streaming with cursor (isStreaming=true)" description="Blinking orange cursor indicates the response is still being generated">
        <DemoRow>
          <ZoeStreamingText
            text="Based on your benefits, I can see that your plan includes coverage for"
            isStreaming={true}
          />
        </DemoRow>
      </Section>

      {/* ── Empty streaming (start of response) ───────── */}
      <Section title="Empty streaming state" description="Cursor appears even with no text — indicates response is starting">
        <DemoRow>
          <ZoeStreamingText text="" isStreaming={true} />
        </DemoRow>
      </Section>

      {/* ── Long multi-line text ──────────────────────── */}
      <Section title="Long multi-line text" description="Text wraps naturally with pre-wrap white-space handling">
        <DemoRow>
          <div style={{ maxWidth: 500 }}>
            <ZoeStreamingText
              text={
                'Your insurance plan provides comprehensive coverage for mental health services. ' +
                'This includes up to 30 outpatient therapy sessions per year with an in-network provider. ' +
                'Your copay for each session is $25, and there is no prior authorization required for the first 10 visits.'
              }
              isStreaming={false}
            />
          </div>
        </DemoRow>
      </Section>

      {/* ── Props table ───────────────────────────────── */}
      <Section title="Props" description="ZoeStreamingTextProps">
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14 }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #e0e0e0' }}>
              <th style={{ padding: '8px 12px' }}>Prop</th>
              <th style={{ padding: '8px 12px' }}>Type</th>
              <th style={{ padding: '8px 12px' }}>Default</th>
              <th style={{ padding: '8px 12px' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <PropRow prop="text" type="string" required description="The text to display (partial during streaming, full after)" />
            <PropRow prop="isStreaming" type="boolean" defaultVal="false" description="Whether streaming is active — shows blinking cursor" />
            <PropRow prop="className" type="string" description="Optional className" />
            <PropRow prop="style" type="React.CSSProperties" description="Optional inline styles" />
          </tbody>
        </table>
      </Section>

      {/* ── Usage example ─────────────────────────────── */}
      <Section title="Usage" description="Code example">
        <pre
          style={{
            background: '#1e1e1e',
            color: '#d4d4d4',
            padding: 20,
            borderRadius: 8,
            fontSize: 13,
            fontFamily: 'monospace',
            overflowX: 'auto',
            lineHeight: 1.6,
          }}
        >
{`import { ZoeStreamingText } from '@/components/ZoeStreamingText'

// Static completed message
<ZoeStreamingText
  text="Your copay for this visit is $25."
  isStreaming={false}
/>

// Actively streaming response
<ZoeStreamingText
  text={partialResponse}
  isStreaming={true}
/>`}
        </pre>
      </Section>
    </div>
  )
}

/* ── Helpers ─────────────────────────────────────────── */

function DemoRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#ffffff', padding: 20, borderRadius: 8, border: '1px solid #e8e8e8' }}>
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

function PropRow({ prop, type, defaultVal, required, description }: {
  prop: string
  type: string
  defaultVal?: string
  required?: boolean
  description: string
}) {
  return (
    <tr style={{ borderBottom: '1px solid #e8e8e8' }}>
      <td style={{ padding: '8px 12px', fontWeight: 500 }}>
        {prop}{required && <span style={{ color: '#fd5201' }}>*</span>}
      </td>
      <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 13, color: '#6b6b6b' }}>{type}</td>
      <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 13, color: '#6b6b6b' }}>{defaultVal ?? '—'}</td>
      <td style={{ padding: '8px 12px', color: '#404040' }}>{description}</td>
    </tr>
  )
}
