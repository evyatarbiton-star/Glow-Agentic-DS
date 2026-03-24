import { ZoePromptChip } from '../../components/_lab/ZoePromptChip'

// ============================================================
// LAB DOC — ZoePromptChip
// Status: Draft
// Figma: Zoe UI — "Promt" (node-id=12742:31877)
// ============================================================

export default function ZoePromptChipLab() {
  return (
    <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ZoePromptChip
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#8a8a8a', marginBottom: 32 }}>
        Suggested follow-up action in Zoe chat — frosted glass card with shadow, rounded-16 corners.
        <br />
        Clicking sends the text directly as a user message (bypasses the input field).
      </p>

      {/* ── With emoji ───────────────────────────────── */}
      <Section title="With emoji" description="Emoji prefix + text — most common pattern">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
          <ZoePromptChip emoji="🔍" text="Help me find providers" onClick={() => alert('Help me find providers')} />
          <ZoePromptChip emoji="👀" text="See all coverage options" onClick={() => alert('See all coverage options')} />
          <ZoePromptChip emoji="🌟" text="Help me schedule check-ins for the kids" onClick={() => alert('Sent!')} />
        </div>
      </Section>

      {/* ── Without emoji ────────────────────────────── */}
      <Section title="Without emoji" description="Text only — simpler variant">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
          <ZoePromptChip text="Show me my deductible status" onClick={() => alert('Sent!')} />
          <ZoePromptChip text="Find an in-network dermatologist" onClick={() => alert('Sent!')} />
        </div>
      </Section>

      {/* ── Welcome screen layout ────────────────────── */}
      <Section title="Welcome screen layout" description="Centered vertical stack — as it appears in the Zoe welcome state">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
          padding: 40,
          background: '#ffffff',
          borderRadius: 16,
          border: '1px solid #e8e8e8',
        }}>
          <ZoePromptChip emoji="🤓" text="Is [Dr. Name], [specialty], in my network?" onClick={() => {}} />
          <ZoePromptChip emoji="🌟" text="Help me schedule check-ins for the kids" onClick={() => {}} />
          <ZoePromptChip emoji="🦹" text="Check if I have gym membership discount" onClick={() => {}} />
          <ZoePromptChip emoji="🧘" text="Check what alternative treatments I'm covered for" onClick={() => {}} />
        </div>
      </Section>

      {/* ── After response layout ────────────────────── */}
      <Section title="After response layout" description="Left-aligned row — appears below Zoe's response text">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 12,
          padding: 24,
          background: '#ffffff',
          borderRadius: 16,
          border: '1px solid #e8e8e8',
          maxWidth: 700,
        }}>
          <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 16, fontWeight: 500, color: '#000', margin: 0 }}>
            How would you like to proceed?
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <ZoePromptChip emoji="🔍" text="Help me find providers" onClick={() => {}} />
            <ZoePromptChip emoji="👀" text="See all coverage options" onClick={() => {}} />
          </div>
        </div>
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
