// ============================================================
// GLOW DS — Semantic Z-Index Tokens
// Single source of truth for stacking order
// ============================================================

export const semanticZIndex = {
  sticky:    10,     // ZoeChatHeader sticky
  stickyNav: 50,     // NavBar sticky
  dropdown:  1000,   // Select, DatePicker, Tooltip dropdowns
  modal:     1500,   // Modal, SideNav overlay
} as const

export type SemanticZIndex = typeof semanticZIndex
