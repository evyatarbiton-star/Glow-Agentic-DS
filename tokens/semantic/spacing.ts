// ============================================================
// GLOW DS — Semantic Spacing
// T-shirt sizing mapped to the 4px primitive scale
// Usage in Tailwind: p-s, gap-m, mt-xl, etc.
// ============================================================

export const semanticSpacing = {
  xxxs:  '4px',
  xxs:   '8px',
  xs:    '12px',
  s:     '16px',
  m:     '20px',
  l:     '24px',
  xl:    '32px',
  xxl:   '40px',
  xxxl:  '48px',
  xxxxl: '56px',
  '5xl':  '72px',
} as const

export type SpacingToken = keyof typeof semanticSpacing
