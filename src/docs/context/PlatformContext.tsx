import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

// ── Types ────────────────────────────────────────────────────
export type Platform = 'web' | 'native'

interface PlatformContextValue {
  platform: Platform
  setPlatform: (p: Platform) => void
}

// ── Context ──────────────────────────────────────────────────
const PlatformContext = createContext<PlatformContextValue | null>(null)

const STORAGE_KEY = 'glow-ds-platform'

function getInitialPlatform(): Platform {
  // 1. URL search param takes priority
  const params = new URLSearchParams(window.location.search)
  const fromUrl = params.get('platform')
  if (fromUrl === 'native') return 'native'
  if (fromUrl === 'web') return 'web'

  // 2. localStorage fallback
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'native') return 'native'
  } catch { /* ignore */ }

  // 3. Default
  return 'web'
}

// ── Provider ─────────────────────────────────────────────────
export function PlatformProvider({ children }: { children: ReactNode }) {
  const [platform, setPlatformState] = useState<Platform>(getInitialPlatform)

  const setPlatform = (p: Platform) => {
    setPlatformState(p)

    // Sync to localStorage
    try { localStorage.setItem(STORAGE_KEY, p) } catch { /* ignore */ }

    // Sync to URL search param
    const url = new URL(window.location.href)
    if (p === 'web') {
      url.searchParams.delete('platform')
    } else {
      url.searchParams.set('platform', p)
    }
    window.history.replaceState({}, '', url.toString())
  }

  // On mount: sync URL if initial came from localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const fromUrl = params.get('platform')
    if (!fromUrl && platform === 'native') {
      const url = new URL(window.location.href)
      url.searchParams.set('platform', 'native')
      window.history.replaceState({}, '', url.toString())
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PlatformContext.Provider value={{ platform, setPlatform }}>
      {children}
    </PlatformContext.Provider>
  )
}

// ── Hook ─────────────────────────────────────────────────────
export function usePlatform(): PlatformContextValue {
  const ctx = useContext(PlatformContext)
  if (!ctx) throw new Error('usePlatform must be used within PlatformProvider')
  return ctx
}
