import { ZoeUserBubble } from '../../components/_lab/ZoeUserBubble'

// ============================================================
// LAB DOC — ZoeUserBubble
// Status: Draft
// Figma: Zoe UI — "User text" (node-id=741:89831)
// ============================================================

export default function ZoeUserBubbleLab() {
  return (
    <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ZoeUserBubble
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#8a8a8a', marginBottom: 32 }}>
        User's chat message bubble — light grey pill, max 450px width, right-aligned in conversation layout.
      </p>

      {/* ── Short message ──────────────────────────────── */}
      <Section title="Short message" description="Single line, auto-width">
        <BubbleRow>
          <ZoeUserBubble text="Am I covered for MRI?" />
        </BubbleRow>
      </Section>

      {/* ── Medium message ─────────────────────────────── */}
      <Section title="Medium message" description="Wraps within max-width of 450px">
        <BubbleRow>
          <ZoeUserBubble text="Can you help me find a dermatologist in my network near downtown?" />
        </BubbleRow>
      </Section>

      {/* ── Long message ──────────────────────────────── */}
      <Section title="Long message" description="Multi-line wrap, stays within 450px max">
        <BubbleRow>
          <ZoeUserBubble text="I have a recurring back pain issue and my primary care doctor suggested I see either an orthopedic specialist or a physical therapist. Can you check which option would be more cost-effective under my current plan?" />
        </BubbleRow>
      </Section>

      {/* ── Conversation flow ─────────────────────────── */}
      <Section title="Conversation flow" description="Multiple messages stacked, right-aligned">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 700 }}>
          <BubbleRow>
            <ZoeUserBubble text="Am I covered for MRI?" />
          </BubbleRow>
          <BubbleRow>
            <ZoeUserBubble text="What about at an in-network facility?" />
          </BubbleRow>
          <BubbleRow>
            <ZoeUserBubble text="Great, can you find one near me?" />
          </BubbleRow>
        </div>
      </Section>

      {/* ── Mobile width ──────────────────────────────── */}
      <Section title="Mobile width (369px container)" description="Bubble respects max-width within narrow container">
        <div style={{ maxWidth: 369, background: '#ffffff', padding: 16, borderRadius: 12, border: '1px solid #e8e8e8' }}>
          <BubbleRow>
            <ZoeUserBubble text="Can you help me find a dermatologist in my network near downtown?" />
          </BubbleRow>
        </div>
      </Section>
    </div>
  )
}

/** Right-aligns the bubble (like in a real chat) */
function BubbleRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
