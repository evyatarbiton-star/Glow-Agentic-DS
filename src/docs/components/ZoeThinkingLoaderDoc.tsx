import { useState, useCallback } from 'react'
import { ZoeThinkingLoader } from '../../components/ZoeThinkingLoader'

// ============================================================
// LAB DOC — ZoeThinkingLoader
// Status: Draft
// Figma: Zoe UI — "Zoe Loader – Text Animation Specs"
//        (node-id=2858:188906)
// ============================================================

export default function ZoeThinkingLoaderLab() {
  // Demo 1: Manual toggle
  const [isThinking1, setIsThinking1] = useState(false)

  // Demo 2: Auto-stop after N seconds (simulates response arrival)
  const [isThinking2, setIsThinking2] = useState(false)
  const [responseTime, setResponseTime] = useState(6)

  const startAutoDemo = useCallback(() => {
    setIsThinking2(true)
    setTimeout(() => setIsThinking2(false), responseTime * 1000)
  }, [responseTime])

  // Demo 3: Long response (animation reaches last message)
  const [isThinking3, setIsThinking3] = useState(false)

  // Demo 4: Custom messages
  const [isThinking4, setIsThinking4] = useState(false)
  const customSets = [
    [
      'Looking up your benefits...',
      'Checking network coverage...',
      'Preparing your summary...',
    ],
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ZoeThinkingLoader
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#8a8a8a', marginBottom: 32 }}>
        Animated "fake loader" with spinning Zoe icon + word-by-word text animation.
        Starts immediately when thinking. Cycles through 3 messages from a randomly chosen set.
      </p>

      {/* ── Demo 1: Manual toggle ──────────────────────── */}
      <Section title="Manual toggle" description="Click to start/stop thinking. Loader appears immediately.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
          <button
            onClick={() => setIsThinking1(!isThinking1)}
            style={btnStyle(isThinking1)}
          >
            {isThinking1 ? 'Stop thinking (response arrived)' : 'Start thinking'}
          </button>
          <div style={loaderContainer}>
            <ZoeThinkingLoader isThinking={isThinking1} />
            {!isThinking1 && <Placeholder text="Click 'Start thinking' — loader appears immediately" />}
          </div>
        </div>
      </Section>

      {/* ── Demo 2: Simulated response time ─────────────── */}
      <Section title="Simulated response" description="Starts thinking, auto-stops after chosen time. Mid-animation = fast exit.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <label style={labelStyle}>Response time:</label>
            {[3, 6, 10, 15].map(t => (
              <button
                key={t}
                onClick={() => setResponseTime(t)}
                style={{
                  ...chipStyle,
                  background: responseTime === t ? '#fd5201' : '#ffffff',
                  color: responseTime === t ? '#ffffff' : '#000000',
                  borderColor: responseTime === t ? '#fd5201' : '#e0e0e0',
                }}
              >
                {t}s
              </button>
            ))}
          </div>
          <button
            onClick={startAutoDemo}
            disabled={isThinking2}
            style={btnStyle(isThinking2)}
          >
            {isThinking2 ? `Thinking... (${responseTime}s)` : `Simulate ${responseTime}s response`}
          </button>
          <div style={loaderContainer}>
            <ZoeThinkingLoader isThinking={isThinking2} />
            {!isThinking2 && <Placeholder text="Loader will appear here" />}
          </div>
        </div>
      </Section>

      {/* ── Demo 3: Long response ────────────────────────── */}
      <Section title="Long response (manual stop)" description="Last message stays visible indefinitely until you stop.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
          <button onClick={() => setIsThinking3(!isThinking3)} style={btnStyle(isThinking3)}>
            {isThinking3 ? 'Stop (response arrived)' : 'Start long thinking'}
          </button>
          <div style={loaderContainer}>
            <ZoeThinkingLoader isThinking={isThinking3} />
            {!isThinking3 && <Placeholder text="Will cycle all 3 messages, then last one stays" />}
          </div>
        </div>
      </Section>

      {/* ── Demo 4: Custom messages ──────────────────────── */}
      <Section title="Custom message set" description="Pass your own messageSets prop for different loading text.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
          <button onClick={() => setIsThinking4(!isThinking4)} style={btnStyle(isThinking4)}>
            {isThinking4 ? 'Stop' : 'Start with custom messages'}
          </button>
          <div style={loaderContainer}>
            <ZoeThinkingLoader isThinking={isThinking4} messageSets={customSets} />
            {!isThinking4 && <Placeholder text='"Looking up your benefits..." → "Checking network..." → "Preparing..."' />}
          </div>
        </div>
      </Section>
    </div>
  )
}

// ── Shared styles ───────────────────────────────────────────
const loaderContainer: React.CSSProperties = {
  minHeight: 48,
  display: 'flex',
  alignItems: 'center',
  padding: '8px 0',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'Founders Grotesk, sans-serif',
  fontSize: 14,
  color: '#8a8a8a',
}

const chipStyle: React.CSSProperties = {
  padding: '4px 12px',
  border: '1px solid #e0e0e0',
  borderRadius: 999,
  cursor: 'pointer',
  fontFamily: 'Founders Grotesk, sans-serif',
  fontSize: 14,
  fontWeight: 500,
}

function btnStyle(active: boolean): React.CSSProperties {
  return {
    padding: '10px 20px',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontFamily: 'Founders Grotesk, sans-serif',
    fontSize: 15,
    fontWeight: 500,
    color: '#ffffff',
    background: active ? '#8a8a8a' : '#fd5201',
    alignSelf: 'flex-start',
  }
}

function Placeholder({ text }: { text: string }) {
  return (
    <span style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#c0c0c0', fontStyle: 'italic' }}>
      {text}
    </span>
  )
}

// ── Section wrapper ─────────────────────────────────────────
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
