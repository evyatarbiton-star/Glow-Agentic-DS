// ============================================================
// GLOW DS — Semantic Typography Styles
// Source: Figma Web DS — node-id=75-9128
// URL: https://www.figma.com/design/ke9Y1BHl3xvX8UMRRAMQ9T/Web-DS?node-id=75-9128
// ============================================================

export const typographyStyles = {

  // ── Display — Tiempos Headline ─────────────────────────────
  // Usage: Hero sections, marketing headlines only
  'display-l':              { fontFamily: '"Tiempos Headline", serif', fontSize: '64px', lineHeight: '76px', fontWeight: 500, letterSpacing: '0.64px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-m':              { fontFamily: '"Tiempos Headline", serif', fontSize: '56px', lineHeight: '64px', fontWeight: 500, letterSpacing: '0.56px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-s':              { fontFamily: '"Tiempos Headline", serif', fontSize: '48px', lineHeight: '58px', fontWeight: 500, letterSpacing: '0px',    fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-xs':             { fontFamily: '"Tiempos Headline", serif', fontSize: '40px', lineHeight: '48px', fontWeight: 500, letterSpacing: '0px',    fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-xxs':            { fontFamily: '"Tiempos Headline", serif', fontSize: '32px', lineHeight: '39px', fontWeight: 500, letterSpacing: '0px',    fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-xxxs':           { fontFamily: '"Tiempos Headline", serif', fontSize: '24px', lineHeight: '29px', fontWeight: 500, letterSpacing: '0px',    fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-xxxxs':          { fontFamily: '"Tiempos Headline", serif', fontSize: '20px', lineHeight: '24px', fontWeight: 500, letterSpacing: '0px',    fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'display-italic':         { fontFamily: '"Tiempos Headline", serif', fontSize: '20px', lineHeight: '24px', fontWeight: 400, letterSpacing: '0px',    fontStyle: 'italic' as const, textDecoration: 'none' as const },
  'display-medium-italic':  { fontFamily: '"Tiempos Headline", serif', fontSize: '20px', lineHeight: '24px', fontWeight: 500, letterSpacing: '0px',    fontStyle: 'italic' as const, textDecoration: 'none' as const },

  // ── Heading — Founders Grotesk ─────────────────────────────
  // Usage: Section titles, card headers, page headings
  // Note: XXL → S = Regular (400), XS → XXXS = Medium (500)
  'heading-xxl':         { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '40px', lineHeight: '47px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-xl':          { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '36px', lineHeight: '42px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-l':           { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '32px', lineHeight: '38px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-m':           { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '28px', lineHeight: '33px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-s':           { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '24px', lineHeight: '28px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-xs':          { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '20px', lineHeight: '24px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-xs-regular':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '20px', lineHeight: '24px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-xxs':         { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '18px', lineHeight: '21px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'heading-xxxs':        { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '16px', lineHeight: '19px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },

  // ── Labels — Founders Grotesk Medium ──────────────────────
  // Usage: Button text, form labels, navigation items, tags
  'label-l':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '20px', lineHeight: '24px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'label-m':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '18px', lineHeight: '22px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'label-s':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '16px', lineHeight: '19px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'label-xs':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '14px', lineHeight: '18px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },

  // ── Paragraph — Founders Grotesk Regular ──────────────────
  // Usage: Body text, descriptions, long-form content
  'paragraph-xl':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '20px', lineHeight: '24px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'paragraph-l':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '18px', lineHeight: '21px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'paragraph-m':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '16px', lineHeight: '19px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'paragraph-s':   { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '14px', lineHeight: '17px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },
  'paragraph-xs':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '12px', lineHeight: '14px', fontWeight: 400, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'none' as const },

  // ── Text Link — Founders Grotesk Medium + underline ───────
  // Usage: Inline text links, anchor text
  'text-link-l':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '18px', lineHeight: '22px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'underline' as const },
  'text-link-m':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '16px', lineHeight: '22px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'underline' as const },
  'text-link-s':  { fontFamily: '"Founders Grotesk", sans-serif', fontSize: '14px', lineHeight: '17px', fontWeight: 500, letterSpacing: '0px', fontStyle: 'normal' as const, textDecoration: 'underline' as const },

} as const

export type TypographyStyle = keyof typeof typographyStyles
