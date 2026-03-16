// ============================================================
// GLOW DS — Primitive Corner Radius
// Source: Figma Glow-DS Foundation → Corner Radius variables
// ============================================================

export const primitiveRadii = {
  4:   '4px',
  8:   '8px',
  12:  '12px',
  16:  '16px',
  20:  '20px',
  24:  '24px',
  32:  '32px',
  40:  '40px',
  48:  '48px',
  999: '999px',
} as const

export type PrimitiveRadii = typeof primitiveRadii
