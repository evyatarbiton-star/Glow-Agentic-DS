// ============================================================
// GLOW DS — Avatar & NavBar Usage Rules
// Source: Figma Web DS — Avatar (node-id=149-7867), NavBar (node-id=149-7678)
//
// These rules define WHEN and HOW to use Avatar and NavBar.
// AI agents generating screens MUST follow these rules.
// ============================================================

// ── Avatar Rules ────────────────────────────────────────────

export const avatarUsageRules = {

  sizes: {
    sm: '32px — compact lists, table cells, comment threads, inline mentions',
    md: '40px — default. Nav bars, cards, headers, profile sections',
    lg: '48px — profile pages, large cards, hero sections, settings',
  },

  rules: [
    {
      id: 'always-provide-alt',
      rule: 'Always provide alt text when src is given',
      detail: 'Use the user\'s name as alt text. This is required for accessibility.',
    },
    {
      id: 'fallback-for-missing',
      rule: 'Avatar shows a silhouette icon when no src is provided',
      detail: 'The default fallback is a user icon. You can provide custom fallback content (initials, custom icon).',
    },
    {
      id: 'md-for-navbar',
      rule: 'Use size="md" (40px) in NavBar — this matches the NavBar height proportions',
    },
    {
      id: 'no-hardcoded-colors',
      rule: 'Use bgColor and color props for custom avatar colors — never wrap in a colored div',
      detail: 'Default colors use primary tokens (orange border on cream bg). Override via props, not wrapper styles.',
    },
  ],
}

// ── NavBar Rules ────────────────────────────────────────────

export const navBarUsageRules = {

  // ── Layout Zones ──────────────────────────────────────────
  // NavBar has 3 zones: left (brand), center (tabs), right (avatar/actions)
  // Each zone is optional. NavBar handles sticky positioning and responsive layout.

  zones: {
    left:   'Brand logo + optional hamburger menu. Use <NavBar.Brand logo={...} onMenuClick={...} />',
    center: 'Navigation tabs. Use <NavBar.Tabs value={active} onChange={setActive}>...<NavBar.Tab>',
    right:  'Free-form — typically Avatar, notification icon, or action buttons',
  },

  rules: [
    {
      id: 'one-navbar-per-page',
      rule: 'Only one NavBar per page, always at the top',
      detail: 'NavBar is sticky by default (sticky={true}). It stays at the top when scrolling.',
    },
    {
      id: 'brand-always-left',
      rule: 'Brand logo always goes in the left zone — never center or right',
    },
    {
      id: 'tabs-for-navigation',
      rule: 'Use NavBar.Tabs for top-level page navigation, not for content tabs within a page',
      detail: 'NavBar tabs navigate between pages/sections. For in-page content tabs, use a custom tab UI.',
    },
    {
      id: 'avatar-in-right',
      rule: 'User avatar goes in the right zone with size="md"',
      detail: 'Optionally wrap Avatar in a button/link for profile navigation.',
    },
    {
      id: 'max-width-default',
      rule: 'Default maxWidth is 1200px — only override for full-bleed layouts',
      detail: 'The NavBar centers its content within maxWidth. For full-width page layouts, set maxWidth={1536} or higher.',
    },
    {
      id: 'center-zone-grid',
      rule: 'Center zone is always visually centered on the screen using CSS Grid (1fr/auto/1fr)',
      detail: 'Left and right zones each get equal space (1fr), center (auto) sits exactly in the middle regardless of left/right content width.',
    },
    {
      id: 'zoe-button-uses-zoeselected',
      rule: 'The "Chat with Zoe" button uses ZoeSelectedLine icon — not ZoeLine',
      detail: 'ZoeSelectedLine has gradient orange colors. ZoeLine uses currentColor (monochrome). Always use ZoeSelectedLine for the Zoe branding button.',
    },
    {
      id: 'responsive-default',
      rule: 'NavBar hides center and right zones below 1024px by default',
      detail: 'On mobile/tablet, only the left zone (hamburger + logo) is visible. Use mobileRight to keep specific right-zone content (e.g., Zoe button) visible on mobile. Provide onMenuClick to NavBar.Brand so the hamburger appears. Set responsive={false} to disable.',
    },
    {
      id: 'z-index-50',
      rule: 'NavBar uses z-index: 50 — modal (1500) and tooltip (1000) layer above it',
      detail: 'Never set a higher z-index on page content that would overlap the NavBar.',
    },
  ],
}
