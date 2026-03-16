// ============================================================
// GLOW DS — Semantic Corner Radius
// T-shirt sizing. Source: Figma Corner Radius variables
// ============================================================

export const semanticRadii = {
  none:  '0px',
  xxxs:  '4px',
  xxs:   '8px',
  xs:    '12px',
  sn:    '16px',
  m:     '20px',
  ln:    '24px',
  xl:    '32px',
  xxl:   '40px',
  xxxl:  '48px',
  full:  '999px',
} as const

export type RadiusToken = keyof typeof semanticRadii
