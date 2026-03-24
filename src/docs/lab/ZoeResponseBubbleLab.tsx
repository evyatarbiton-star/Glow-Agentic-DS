import { ZoeResponseBubble } from '../../components/_lab/ZoeResponseBubble'

// ============================================================
// LAB DOC — ZoeResponseBubble
// Status: Draft
// Figma: Zoe UI — "Zoe Response Bubble" (node-id=741:89831)
// ============================================================

export default function ZoeResponseBubbleLab() {
  return (
    <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ZoeResponseBubble
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#8a8a8a', marginBottom: 32 }}>
        Zoe AI response bubble — 40px Zoe icon on top, response text below. No background, no border.
      </p>

      {/* ── Short response ───────────────────────────────── */}
      <Section title="Short response" description="Single line answer">
        <ZoeResponseBubble>
          Yes, MRI scans are covered under your plan.
        </ZoeResponseBubble>
      </Section>

      {/* ── Medium response ──────────────────────────────── */}
      <Section title="Medium response" description="Multi-sentence answer, wraps naturally">
        <ZoeResponseBubble>
          Dr. Smith is an in-network orthopedic specialist. Your copay would be $30 per visit. Would you like me to help you book an appointment?
        </ZoeResponseBubble>
      </Section>

      {/* ── Long response ────────────────────────────────── */}
      <Section title="Long response" description="Detailed answer with multiple points">
        <ZoeResponseBubble>
          Based on your current plan, MRI scans are covered at 80% after your deductible. At an in-network facility, your estimated out-of-pocket cost would be around $150–$300. I found 3 imaging centers within 5 miles of your location. The closest one, City Medical Imaging, has availability as early as next Tuesday. Would you like me to show you all options?
        </ZoeResponseBubble>
      </Section>

      {/* ── Constrained width ────────────────────────────── */}
      <Section title="Mobile width (369px container)" description="Response in a narrow container">
        <div style={{ maxWidth: 369, background: '#ffffff', padding: 16, borderRadius: 12, border: '1px solid #e8e8e8' }}>
          <ZoeResponseBubble>
            Your employer plan includes a gym membership discount through the Wellness Program. You get 50% off at participating gyms.
          </ZoeResponseBubble>
        </div>
      </Section>

      {/* ── With custom style ────────────────────────────── */}
      <Section title="Custom max-width (500px)" description="Passing style prop to constrain bubble width">
        <ZoeResponseBubble style={{ maxWidth: 500 }}>
          I found 3 dermatologists in your network within 5 miles. Would you like me to show you their availability and ratings? I can also filter by languages spoken if that helps.
        </ZoeResponseBubble>
      </Section>
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
