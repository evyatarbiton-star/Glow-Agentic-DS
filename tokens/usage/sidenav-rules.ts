// ============================================================
// GLOW DS — SideNav Usage Rules
// Source: Figma Web DS — node-id=532-9256 (components), node-id=1816-5027 (assembled)
//
// These rules define WHEN and HOW to use SideNav and its compound components.
// AI agents generating screens MUST follow these rules.
// ============================================================

export const sideNavUsageRules = {

  // ── When to Use SideNav ─────────────────────────────────────
  // SideNav = primary navigation drawer that slides in from the left.
  // Triggered by a hamburger menu button (typically in NavBar).
  // Contains navigation links, tools, app download, and footer links.
  //
  // Do NOT use SideNav for:
  // - Settings panels → use Modal
  // - Filters → use inline filter UI
  // - Contextual menus → use dropdown or popover

  anatomy: {
    root:       'SideNav — overlay + panel container. Controls open/close, backdrop, escape, focus trap.',
    profile:    'SideNav.Profile — user greeting with name, company name, and optional company logo.',
    section:    'SideNav.Section — groups related items with no internal gap (gap is handled by parent).',
    navItem:    'SideNav.NavItem — main navigation link (40px height). Optionally expandable with chevron.',
    subItem:    'SideNav.SubItem — indented child item inside an expanded NavItem (40px height).',
    toolItem:   'SideNav.ToolItem — feature card with 56×56 thumbnail, title, and description.',
    appDownload:'SideNav.AppDownload — banner with QR code (desktop) + Apple/Android store buttons.',
    footer:     'SideNav.Footer — pinned to bottom with marginTop: auto. Contains AppDownload + FooterItems.',
    footerItem: 'SideNav.FooterItem — footer link (40px height) with optional right element.',
  },

  // ── Composition Order (recommended) ─────────────────────────
  // The compound components can be reordered, but this is the standard layout:
  //
  // 1. SideNav.Profile
  // 2. SideNav.Section (navigation items)
  //    └─ SideNav.NavItem (with optional SideNav.SubItem children)
  // 3. SideNav.Section (tools)
  //    └─ SideNav.ToolItem
  // 4. SideNav.Footer
  //    ├─ SideNav.AppDownload
  //    └─ <div> containing SideNav.FooterItem(s)

  dimensions: {
    panelWidth:    '400px (max), 100vw on mobile (<640px)',
    itemHeight:    '40px — all NavItem, SubItem, and FooterItem rows',
    thumbnailSize: '56px — ToolItem thumbnail (rounded 8px)',
    qrSize:        '100px — QR code container in AppDownload',
    headerHeight:  '72px — derived from padding 16px + IconButton md 40px + padding 16px',
    panelPadding:  '20px left and right (spacing.m)',
  },

  // ── Hover States (from Figma) ──────────────────────────────
  hoverStates: {
    navItem:    'Background changes to neutral.surface.extraSubtle (#fafafa), border-radius 8px',
    subItem:    'Same as NavItem — background #fafafa, border-radius 8px',
    toolItem:   'Border appears: 1px solid neutral.border.light (#ededed). NO background change.',
    footerItem: 'Background changes to neutral.surface.extraSubtle (#fafafa), border-radius 8px',
    appDownload:'No hover state',
  },

  // ── ToolItem Trailing Icon ─────────────────────────────────
  trailingIcon: {
    purpose: 'Shows an icon (typically UpRightArrow) for tools that navigate outside the app',
    behavior: 'Icon is always present but opacity: 0 by default, opacity: 1 on hover',
    icon: 'UpRightArrowLine size="sm" — for external links',
    rule: 'Only add trailingIcon when the tool opens an external URL or leaves the Healthee app',
  },

  // ── FooterItem Right Element ───────────────────────────────
  footerItemPatterns: {
    simpleLink:   'Just label + onClick. Example: "Support", "Log out"',
    withChevron:  'Language selector — right={<span>EN <ChevronDownLine size="sm" /></span>}',
    externalLink: 'External link — right={<UpRightArrowLine size="sm" />}',
  },

  // ── AppDownload ────────────────────────────────────────────
  appDownload: {
    desktop: 'Shows QR code (or placeholder) + title + Apple/Android store buttons',
    mobile:  'QR code hidden via CSS media query. Only title + store buttons shown.',
    qrFallback: 'When no qrImageUrl or qrElement provided, a QR placeholder SVG is shown',
    storeButtons: 'Apple and Android icons are clickable buttons with onAppleClick/onAndroidClick handlers',
  },

  // ── Responsive ─────────────────────────────────────────────
  responsive: {
    desktop: 'Panel width: 400px, backdrop visible, QR code shown in AppDownload',
    mobile:  'Panel width: 100vw (full screen), QR code hidden, AppDownload gets larger padding',
    breakpoint: '640px — below this is considered mobile web',
  },

  rules: [
    {
      id: 'compound-components-only',
      rule: 'Always use SideNav compound components — never build custom nav items with raw divs',
      detail: 'Use SideNav.NavItem for navigation, SideNav.ToolItem for tools, SideNav.FooterItem for footer links. This ensures consistent height, hover states, and typography.',
    },
    {
      id: 'external-link-icon',
      rule: 'Use trailingIcon with UpRightArrowLine for any ToolItem that navigates outside the app',
      detail: 'Import UpRightArrowLine from Icon library. The icon automatically shows on hover only.',
      examples: {
        correct: ['<SideNav.ToolItem trailingIcon={<UpRightArrowLine size="sm" />} ... />'],
        incorrect: ['<SideNav.ToolItem trailingIcon={<span>↗</span>} ... /> // no inline icons'],
      },
    },
    {
      id: 'section-grouping',
      rule: 'Wrap related items in SideNav.Section for correct spacing',
      detail: 'Navigation items go in one Section, tools in another. The 24px gap between sections is handled automatically by the parent container.',
    },
    {
      id: 'footer-structure',
      rule: 'Footer should contain AppDownload first, then FooterItems wrapped in a div',
      detail: 'The Footer component handles bottom-pinning with marginTop: auto. Place SideNav.AppDownload first, then wrap FooterItem(s) in a plain div.',
    },
    {
      id: 'profile-at-top',
      rule: 'SideNav.Profile should always be the first child of SideNav',
      detail: 'The profile section greets the user and shows their company. It should appear at the top before any navigation sections.',
    },
    {
      id: 'ds-icons-only',
      rule: 'Never use inline SVG icons inside SideNav — always import from DS icon library',
      detail: 'All chevrons, arrows, and icons must come from src/components/Icon/icons/. Use ChevronDownLine for expandable items, UpRightArrowLine for external links.',
      examples: {
        correct: ['<ChevronDownLine size="sm" />', '<UpRightArrowLine size="sm" />'],
        incorrect: ['<svg width="16" height="16">...</svg>'],
      },
    },
    {
      id: 'thumbnail-size',
      rule: 'ToolItem thumbnails must be 56×56px with 8px border-radius',
      detail: 'The component enforces this size. Provide a ReactNode (img, SVG, or styled div) that fills 56×56. Use overflow: hidden on the thumbnail wrapper.',
    },
    {
      id: 'mobile-full-width',
      rule: 'On mobile web (<640px), SideNav takes full viewport width',
      detail: 'This is handled automatically by the component CSS. No extra code needed from consumers.',
    },
  ],
}
