import { usePlatform, type Platform } from '../context/PlatformContext'
import { semanticColors as sc } from '../../../tokens/semantic/colors'

const SEGMENTS: { value: Platform; label: string }[] = [
  { value: 'web',    label: 'Web' },
  { value: 'native', label: 'Native' },
]

export function PlatformToggle() {
  const { platform, setPlatform } = usePlatform()

  return (
    <div
      style={{
        display: 'inline-flex',
        borderRadius: 999,
        backgroundColor: sc.neutral.surface.subtle,
        padding: 2,
        gap: 0,
      }}
    >
      {SEGMENTS.map(seg => {
        const isActive = platform === seg.value
        return (
          <button
            key={seg.value}
            onClick={() => setPlatform(seg.value)}
            style={{
              border: 'none',
              cursor: 'pointer',
              borderRadius: 999,
              padding: '4px 14px',
              fontSize: 12,
              fontWeight: 500,
              fontFamily: '"Founders Grotesk", sans-serif',
              lineHeight: '18px',
              letterSpacing: '0.01em',
              transition: 'all 150ms ease',
              backgroundColor: isActive ? sc.primary.surface.DEFAULT : 'transparent',
              color: isActive ? sc.neutral.text.negative : sc.neutral.text.light,
            }}
          >
            {seg.label}
          </button>
        )
      })}
    </div>
  )
}
