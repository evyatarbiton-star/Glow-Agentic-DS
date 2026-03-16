// ============================================================
// GLOW DS — Primitive Typography
// Source: Figma Glow-DS Foundation + Web DS file
// ============================================================

export const fontFamilies = {
  default: '"Founders Grotesk", sans-serif', // All UI text
  display: '"Tiempos Headline", serif',       // Large headings only
} as const

export const fontWeights = {
  regular: 400,
  medium:  500,
} as const

// All font sizes used in the DS
export const fontSizes = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  56: '56px',
} as const

// Line heights mapped to font sizes
export const lineHeights = {
  14: '14px',
  17: '17px',
  18: '18px',
  19: '19px',
  21: '21px',
  22: '22px',
  24: '24px',
  28: '28px',
  29: '29px',
  38: '38px',
  39: '39px',
  48: '48px',
  58: '58px',
  64: '64px',
} as const

export type FontFamily = keyof typeof fontFamilies
