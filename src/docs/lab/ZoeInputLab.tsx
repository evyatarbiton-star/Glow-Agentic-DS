import { useState } from 'react'
import { ZoeInput } from '../../components/_lab/ZoeInput'

// ============================================================
// LAB DOC — ZoeInput
// Status: Draft
// Figma: Zoe UI — "Zoe text bar web" (node-id=12742:178974)
// ============================================================

const PROMPT_CHIPS = [
  { emoji: '🥸', text: 'Is [Dr. Name], [specialty], in my network?' },
  { emoji: '🌟', text: 'Help me schedule check-ins for the kids' },
  { emoji: '🦹', text: 'Check if I have gym membership discount' },
  { emoji: '🙏', text: 'Check what alternative treatments I\'m covered for' },
]

export default function ZoeInputLab() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('Check out these back pain relief benefits. You have access to the Sword health program through your employer benefits.')
  const [sent, setSent] = useState<string[]>([])

  return (
    <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ZoeInput
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#8a8a8a', marginBottom: 32 }}>
        Chat input bar for Zoe AI assistant — pill shape, auto-expanding, Zoe branding icon.
      </p>

      {/* ── Default (idle) ────────────────────────────── */}
      <Section title="Default (idle)" description="Zoe icon visible, placeholder in black, send disabled">
        <div style={{ maxWidth: 748 }}>
          <ZoeInput
            value={value1}
            onChange={setValue1}
            onSubmit={(v) => { setSent(s => [...s, v]); setValue1('') }}
          />
        </div>
      </Section>

      {/* ── With prompt chips ─────────────────────────── */}
      <Section title="With prompt chips (home page)" description="Chips send the message directly (user bubble + Zoe reply) — they don't fill the input">
        <div style={{ maxWidth: 748, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <ZoeInput
            value={value2}
            onChange={setValue2}
            onSubmit={(v) => { setSent(s => [...s, v]); setValue2('') }}
          />
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            {PROMPT_CHIPS.slice(0, 2).map((chip, i) => (
              <button
                key={i}
                onClick={() => { setSent(s => [...s, chip.text]); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0,
                  padding: '8px',
                  background: '#ffffff',
                  border: '1px solid #e0e0e0',
                  borderRadius: 8,
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer',
                  fontFamily: 'Founders Grotesk, sans-serif',
                  fontSize: 16,
                  lineHeight: '19px',
                  color: '#000000',
                  whiteSpace: 'nowrap',
                }}
              >
                {chip.emoji} &nbsp;{chip.text}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Pre-filled (multi-line) ───────────────────── */}
      <Section title="Multi-line (pre-filled)" description="Auto-expands, radius changes from pill to 24px">
        <div style={{ maxWidth: 748 }}>
          <ZoeInput
            value={value3}
            onChange={setValue3}
            onSubmit={(v) => { setSent(s => [...s, v]); setValue3('') }}
          />
        </div>
      </Section>

      {/* ── Without Zoe icon ──────────────────────────── */}
      <Section title="Without Zoe icon (inside chat)" description="showZoeIcon={false} — for when input is inside the Zoe chat panel">
        <div style={{ maxWidth: 748 }}>
          <ZoeInput
            value=""
            onChange={() => {}}
            onSubmit={() => {}}
            showZoeIcon={false}
            placeholder="Ask Zoe anything..."
          />
        </div>
      </Section>

      {/* ── Mobile width ──────────────────────────────── */}
      <Section title="Mobile width (369px)" description="Same component, narrower container">
        <div style={{ maxWidth: 369 }}>
          <ZoeInput
            value=""
            onChange={() => {}}
            onSubmit={() => {}}
          />
        </div>
      </Section>

      {/* ── Sent messages log ─────────────────────────── */}
      {sent.length > 0 && (
        <Section title="Sent messages" description="Messages submitted from the inputs above">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {sent.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: 'flex-end',
                  padding: '12px 16px',
                  background: '#fd5201',
                  color: '#ffffff',
                  borderRadius: '16px 16px 4px 16px',
                  fontFamily: 'Founders Grotesk, sans-serif',
                  fontSize: 15,
                  lineHeight: '20px',
                  maxWidth: '80%',
                }}
              >
                {msg}
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}

// ── Section wrapper ──────────────────────────────────────
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
