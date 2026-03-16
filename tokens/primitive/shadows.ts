// ============================================================
// GLOW DS — Primitive Shadows
// Source: Figma Glow-DS Foundation → Effects
// ============================================================

export const primitiveShadows = {
  // From Figma Card/Default variable
  card:   '0px 2px 8px rgba(0, 0, 0, 0.08)',
  // Extended shadow scale
  sm:     '0px 1px 4px rgba(0, 0, 0, 0.06)',
  md:     '0px 2px 8px rgba(0, 0, 0, 0.08)',
  lg:     '0px 4px 16px rgba(0, 0, 0, 0.10)',
  xl:     '0px 8px 32px rgba(0, 0, 0, 0.12)',
  '2xl':  '0px 16px 48px rgba(0, 0, 0, 0.16)',
  none:   'none',
} as const

export type PrimitiveShadow = keyof typeof primitiveShadows
