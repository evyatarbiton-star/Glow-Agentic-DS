// ============================================================
// GLOW DS — Semantic Shadow Tokens
// Maps primitive shadows to component-level usage contexts
// ============================================================

import { primitiveShadows } from '../primitive/shadows'

export const semanticShadows = {
  card:      primitiveShadows.card,    // 0px 2px 8px rgba(0,0,0,0.08) — default card
  cardHover: primitiveShadows.lg,      // 0px 4px 16px rgba(0,0,0,0.10) — card lift on hover
  toast:     '0px 2px 8px 0px rgba(0,0,0,0.16)',                       // toast notification
  tooltip:   '0px 0px 1px 0px rgba(23, 15, 73, 0.03), 0px 1px 1px 0px rgba(23, 15, 73, 0.04), 0px 5px 14px 0px rgba(8, 15, 52, 0.04)', // tooltip panel
  dropdown:  primitiveShadows.md,      // 0px 2px 8px rgba(0,0,0,0.08) — select/datepicker
} as const

export type SemanticShadow = keyof typeof semanticShadows
