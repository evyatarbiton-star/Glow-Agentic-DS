// ============================================================
// GLOW DS — Semantic Typography Styles (Native / React Native)
// Source: Figma Native DS — node-id=1-394
// URL: https://www.figma.com/design/J3BwzKOV4gexz4dAg2L9Yo/Native-DS?node-id=1-394
// ============================================================

export const nativeTypographyStyles = {

  // ── Display — Tiempos Headline ─────────────────────────────
  // Usage: Hero sections, marketing headlines only
  'display-l':              { fontFamily: '"Tiempos Headline", serif', fontSize: '48px', lineHeight: '54px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-m':              { fontFamily: '"Tiempos Headline", serif', fontSize: '36px', lineHeight: '44px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-s':              { fontFamily: '"Tiempos Headline", serif', fontSize: '32px', lineHeight: '39px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-xs':             { fontFamily: '"Tiempos Headline", serif', fontSize: '24px', lineHeight: '29px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-xxs':            { fontFamily: '"Tiempos Headline", serif', fontSize: '20px', lineHeight: '24px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-xxxs':           { fontFamily: '"Tiempos Headline", serif', fontSize: '18px', lineHeight: '20px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-italic':         { fontFamily: '"Tiempos Headline", serif', fontSize: '18px', lineHeight: '20px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'italic' as const, textDecoration: 'none' as const },
  'display-medium-italic':  { fontFamily: '"Tiempos Headline", serif', fontSize: '18px', lineHeight: '20px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'italic' as const, textDecoration: 'none' as const },

  // ── Heading — Founders Grotesk Medium ─────────────────────
  // Usage: Section titles, card headers, screen headings
  // All weights are Medium (500) on native
  'heading-xl':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '28px', lineHeight: '33px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-l':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '24px', lineHeight: '29px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-m':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '20px', lineHeight: '24px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-s':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '18px', lineHeight: '21px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },

  // ── Labels — Founders Grotesk Medium ──────────────────────
  // Usage: Button text, form labels, tab bar items, tags
  'label-l':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '18px', lineHeight: '22px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'label-m':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '16px', lineHeight: '19px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'label-s':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '14px', lineHeight: '18px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'label-xs':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '12px', lineHeight: '18px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },

  // ── Paragraph — Founders Grotesk Regular ──────────────────
  // Usage: Body text, descriptions, long-form content
  'paragraph-l':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '18px', lineHeight: '22px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'paragraph-m':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '16px', lineHeight: '19px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'paragraph-s':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '14px', lineHeight: '17px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'paragraph-xs':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '12px', lineHeight: '18px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },

  // ── Text Link — Founders Grotesk Medium ───────────────────
  // Usage: Inline text links, tappable anchor text
  // text-link-m = underline, text-link-xm = no underline
  'text-link-m':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '16px', lineHeight: '19px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'underline' as const },
  'text-link-xm':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '16px', lineHeight: '19px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'text-link-s':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '14px', lineHeight: '18px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'underline' as const },

} as const

export type NativeTypographyStyle = keyof typeof nativeTypographyStyles
