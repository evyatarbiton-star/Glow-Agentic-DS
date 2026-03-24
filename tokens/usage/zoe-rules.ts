// ============================================================
// GLOW DS — Zoe AI Chat Usage Rules
// Source: Figma Zoe UI — multiple screens
//   Benefit Answer: node 12742:31854
//   Insurance Card: node 4471:50034
//   Deductible: node 4471:58064
//   Drawer: node 11584:134644
//
// Zoe is the AI chat assistant inside the Healthee product.
// She answers health insurance questions with structured responses
// that embed rich UI components (benefit cards, provider cards, etc.).
//
// Architecture: Option C — Zoe compositions built from DS primitives.
// These are NOT standalone DS primitives — they are product-level
// compositions (like ProviderCard is a composition of Card + Avatar + Chip).
//
// Web-only for now. Native Zoe will be addressed separately.
// ============================================================

export const zoeUsageRules = {

  // ── Overview ────────────────────────────────────────────────
  // A Zoe conversation is a vertical list of messages:
  //   ZoeUserBubble (user's question — right-aligned grey bubble)
  //   → ZoeResponseBubble (Zoe's answer — icon on top, content below)
  //   → ZoeUserBubble (follow-up)
  //   → ZoeResponseBubble (follow-up answer)
  //   → ...
  //   ZoeInput (sticky at bottom — always available, never disabled)
  //
  // Thinking flow:
  //   User sends → ZoeThinkingLoader (spinning icon + animated text)
  //   → response arrives → loader exits → ZoeResponseBubble appears below static icon

  // ── Answer Types ──────────────────────────────────────────
  // Every Zoe response follows a predictable anatomy:
  //
  //   ZoeDefaultIcon (40px, top of response)
  //   ├─ Text block (intro paragraph)
  //   ├─ Content block (varies by answer type — see below)
  //   ├─ Text block (optional — summary or follow-up copy)
  //   ├─ "See more" link (optional — opens Drawer)
  //   └─ ZoePromptChips (suggested follow-up questions)

  answerTypes: {
    textOnly: {
      description: 'Simple text response — no embedded components',
      contentBlock: 'None — just one or more text paragraphs',
      usedWhen: 'General knowledge questions, simple yes/no, clarifications',
    },
    benefit: {
      description: 'Shows coverage details for a specific benefit',
      contentBlock: 'ZoeBenefitCard — two variants: image (photo header) or icon (icon + title + subtitle)',
      usedWhen: 'User asks "Does my plan cover X?", "What is my copay for X?"',
      drawerLink: 'Optional "See more" opens ZoeDrawer with full benefit details',
    },
    insuranceCard: {
      description: 'Shows user\'s insurance card(s)',
      contentBlock: 'ZoeInsuranceCardRow — card image + member info + View/Download buttons',
      usedWhen: 'User asks "Show me my insurance card", "What is my member ID?"',
      drawerLink: 'None — cards are shown inline',
    },
    deductible: {
      description: 'Shows deductible progress/status',
      contentBlock: 'ZoeDeductibleCard — progress bar with spent/remaining amounts',
      usedWhen: 'User asks "How much deductible do I have left?", "What is my deductible?"',
      drawerLink: 'None — card is shown inline',
    },
    provider: {
      description: 'Shows provider search results',
      contentBlock: 'ProviderCard carousel — reuses existing ProviderCard in ScrollArea',
      usedWhen: 'User asks "Find me a dermatologist", "Who is in my network?"',
      drawerLink: 'Card click opens ZoeDrawer with full provider details',
    },
  },

  // ── Component Anatomy ──────────────────────────────────────

  components: {

    // ── ZoeUserBubble ────────────────────────────────
    zoeUserBubble: {
      description: 'The user\'s chat message — grey bubble, right-aligned',
      layout: {
        alignment: 'right',
        background: 'sc.neutral.surface.subtle (#f2f2f2)',
        textColor: 'sc.neutral.text.DEFAULT (#000000)',
        borderRadius: '24px (corner-radius/l) — fully round, NOT asymmetric',
        padding: '20px horizontal (spacing.m), 12px vertical (spacing.xs)',
        maxWidth: '450px',
      },
      typography: {
        style: 'paragraph-l',
        size: '18px',
        lineHeight: '21px',
        fontFamily: 'Founders Grotesk',
      },
      rules: [
        'Always right-aligned — user messages are on the right side',
        'Grey background (#f2f2f2) with black text — NOT orange, NOT white text',
        'Fully round corners (24px) on all sides — NOT asymmetric',
        'Max width 450px',
        'No avatar for user — just the bubble',
        'Typography: paragraph-l (18px / 21px / Founders Grotesk)',
      ],
    },

    // ── ZoeResponseBubble ──────────────────────────────
    zoeResponseBubble: {
      description: 'Wrapper for a single Zoe AI response — icon on top, content below',
      anatomy: [
        'ZoeDefaultIcon (40px, custom numeric size) — top of response',
        'Content area below icon — vertical stack of text, cards, provider results, etc.',
        'ZoePromptChips — at the bottom of the last message only',
      ],
      layout: {
        direction: 'vertical',
        iconSize: '40px (custom numeric size — not a DS t-shirt size)',
        iconPosition: 'top, left-aligned',
        gapIconToContent: 'spacing.xxs (8px)',
        background: 'none — no background, no border, content sits on white',
        maxWidth: 'Fills available chat width — no max on content area',
      },
      typography: {
        style: 'paragraph-l',
        size: '18px',
        lineHeight: '21px',
        textColor: 'sc.neutral.text.DEFAULT (#000000)',
      },
      rules: [
        'Icon is ZoeDefaultIcon at 40px — sits on TOP of the content, not beside it',
        '8px gap between icon and text content below',
        'No background, no border — just icon + text on white surface',
        'Accepts children — can contain text, cards, provider results, etc.',
        'Content blocks (benefit card, provider cards, etc.) appear between text paragraphs',
        'ZoePromptChips appear ONLY at the end of the LAST Zoe message — not on every message',
        'Text uses paragraph-l (18px / 21px / Founders Grotesk)',
        'Links in text are orange (primary color) with underline on hover',
        'Icon persists from thinking → response: spins during thinking, stops when response arrives',
      ],
    },

    // ── ZoeThinkingLoader ──────────────────────────────
    zoeThinkingLoader: {
      description: 'Spinning Zoe icon + word-by-word animated text — replaces old bouncing dots indicator',
      anatomy: [
        'ZoeDefaultIcon (40px) — spinning with wind-up-and-release animation',
        'Animated text beside icon — words fade in/out one by one',
      ],
      spinAnimation: {
        description: 'Wind-up and release — half rotation backward, then 2 forward rotations, then pause',
        phases: [
          '0% → 12%: half rotation backward (-180°), ease-out',
          '12% → 80%: 2 full rotations forward (540° total), cubic-bezier(0.2, 0, 0.2, 1)',
          '80% → 100%: pause — icon stays still',
        ],
        loopDuration: '3.5s',
        loop: true,
      },
      textAnimation: {
        fadeIn: {
          stagger: '150ms per word',
          duration: '500ms per word',
        },
        visibleDuration: '2.1s — message stays visible after all words appear',
        fadeOut: {
          stagger: '70ms per word',
          duration: '400ms per word',
          easing: 'accelerate',
        },
        fastExit: {
          description: 'When response arrives, text exits quickly',
          duration: '200ms per word',
          stagger: '30ms per word',
        },
        messageSets: '2 built-in sets, randomly chosen per thinking cycle',
        cycling: 'Messages cycle through set; last message stays visible until response arrives',
      },
      props: {
        showIcon: 'boolean — when false, icon is managed externally (e.g., chat demo). Default true.',
        onExitComplete: 'callback — fires when exit animation is finished, signals response can appear',
      },
      rules: [
        'Starts immediately — no delay',
        'CRITICAL: Minimum 2 spin loops (7 seconds) before text can exit',
        'CRITICAL: Text NEVER exits mid-spin-loop — always waits for loop boundary (3.5s intervals)',
        'When response arrives (isThinking=false): wait for current spin loop to end, then fast exit text',
        'onExitComplete fires after text finishes exiting — only then does response appear',
        'Icon stays in same position throughout thinking → response transition — it never disappears',
        'After exit, icon stops spinning and remains static above the response content',
      ],
    },

    // ── ZoeInput ─────────────────────────────────────
    zoeInput: {
      description: 'Sticky bottom input bar — always visible, always available (never disabled during thinking)',
      anatomy: [
        'ZoeDefaultIcon (xl/32px) — visible when idle, animates out on focus',
        'Text input field (placeholder: "Ask Zoe anything...")',
        'Send button (ArrowUpCrFrSolid — solid variant, NOT line)',
      ],
      layout: {
        position: 'sticky bottom',
        background: 'white',
        inputShape: 'pill',
      },
      iconBehavior: {
        idle: 'ZoeDefaultIcon visible at xl (32px) size inside input',
        onFocus: [
          'Half rotation (180°) while sliding left and fading out',
          'Width, padding, and margin collapse to 0 with matched transitions',
          'marginRight handles spacing (not flex gap) — avoids residual spacing when icon is gone',
        ],
      },
      sendButton: {
        icon: 'ArrowUpCrFrSolid (solid variant — NOT line)',
        colorWithText: 'primary (orange)',
        colorEmpty: 'sc.neutral.text.light (grey)',
      },
      rules: [
        'Always visible at the bottom — chat content scrolls behind it',
        'ALWAYS available — never disabled during thinking or loading',
        'Zoe icon animates out on focus with rotation + slide + fade',
        'marginRight (not gap) handles icon spacing to avoid residual space when collapsed',
        'Send button uses ArrowUpCrFrSolid — solid variant, not line',
        'Send button is primary color when text exists, neutral.text.light when empty',
        'On submit: input clears, ZoeUserBubble appears, ZoeThinkingLoader starts, then ZoeResponseBubble',
      ],
    },

    // ── ZoePromptChip ────────────────────────────────
    // Figma: Zoe UI — "Promt" (node-id=12742:31877)
    zoePromptChip: {
      description: 'Suggested follow-up action — frosted glass card with subtle shadow, rounded-16 corners. NOT a pill, NOT a DS Chip.',
      anatomy: [
        'Optional emoji prefix (inline text)',
        'Action text (paragraph-l)',
      ],
      layout: {
        background: 'rgba(255, 255, 255, 0.5) — frosted glass, semi-transparent white',
        borderRadius: 'radii.sn (16px) — rounded rectangle, NOT pill',
        padding: 'spacing.l (24px) horizontal, spacing.xs (12px) vertical',
        shadow: '0px 2px 8px rgba(0, 0, 0, 0.08) — Card/Default shadow',
        border: 'none — shadow provides visual edge',
        gap: '12px between chips when stacked',
      },
      typography: {
        style: 'paragraph-l (18px / 21px / Founders Grotesk)',
        color: 'sc.neutral.text.DEFAULT (#000000)',
      },
      states: {
        default: 'Semi-transparent white bg + subtle shadow',
        hover: 'More opaque white bg (0.85) + slightly stronger shadow',
      },
      contexts: {
        welcomeScreen: 'Centered vertical stack below greeting — 4 chips max',
        afterResponse: 'Left-aligned, wrapping horizontal row below Zoe response — 2-4 chips',
      },
      rules: [
        'Custom component — NOT built on DS Chip (visual style is completely different)',
        'Clicking sends the text DIRECTLY as a user message — bypasses input field',
        'ALL chips disappear after any message is sent (not just the selected chip)',
        'Show 2-4 chips max — never more than 4',
        'In welcome screen: vertical stack, centered',
        'After Zoe response: chips appear ONLY after the LAST message in a conversation turn',
        'Emoji is optional — data-driven, not required',
        'Text uses paragraph-l (18px) — NOT paragraph-m or smaller',
      ],
    },

    // ── ZoeBenefitCard ───────────────────────────────
    // Figma: Zoe UI — "Medical benefit" (node-id=11584:134644)
    zoeBenefitCard: {
      description: 'Benefit card in the Zoe conversation — horizontal layout with thumbnail, title, metadata, and chevron. Clicking opens the benefit drawer.',
      anatomy: [
        'Thumbnail (88×88px, rounded 16px / radii.sn) — image variant OR icon variant',
        'Content area: title + optional subtitle + optional metadata row',
        'Chevron button (36px circle, white bg, 1px border #e0e0e0, ChevronRight icon 20px)',
      ],
      variants: {
        image: {
          description: 'Photo thumbnail variant — for visually recognizable benefits',
          thumbnail: '88×88px photo, object-cover, rounded 16px',
          usedFor: 'Mental Health, Acupuncture, Yoga — benefits with stock imagery',
        },
        icon: {
          description: 'Icon/logo variant — for branded or less visual benefits',
          thumbnail: '88×88px colored background + centered icon/logo element',
          usedFor: 'Virtual services, pharmacy benefits, branded program cards',
        },
      },
      layout: {
        direction: 'horizontal — flex row, vertically centered',
        padding: 'spacing.xs (12px)',
        gap: 'spacing.s (16px) — between thumbnail, content, and chevron',
        borderRadius: 'radii.ln (24px)',
        maxWidth: 'fills available chat width (no fixed max — parent constrains)',
      },
      typography: {
        title: 'display-xxxxs (Tiempos 20px/24px, weight 500, black)',
        subtitle: 'paragraph-m (Founders 16px/19px, #404040) — single line, text-ellipsis',
        metaText: 'paragraph-l (Founders 18px/21px, black)',
      },
      states: {
        default: 'Transparent bg, no shadow, no border',
        hover: 'White bg (surface.negative) + shadow 0px 2px 8px rgba(0,0,0,0.16), cursor pointer',
        active: 'Same as default visually — indicates this card\'s drawer is open',
      },
      metadataRow: {
        description: 'Optional row with icon + text (e.g., location, provider name)',
        iconSize: '20px',
        gap: '4px between icon and text',
        examples: [
          'Location icon + "At an outpatient facility"',
          'File icon + "Provided by Skyler Health"',
        ],
      },
      rules: [
        'Custom card — NOT built on DS Card component (states differ from Card variants)',
        'Multiple benefit cards stack vertically with spacing.xxs (8px) gap between them',
        'Show up to 4 benefit cards inline — use "See more benefits" link for additional results',
        'Clicking a card opens ZoeDrawer — card enters active state',
        'Active state suppresses hover effect (no shadow when drawer is open)',
        'Chevron button is decorative — entire card is clickable, not just the chevron',
        'Subtitle truncates to single line with ellipsis when too long',
        'Icon variant: iconBgColor is per-benefit (comes from data, not a fixed color)',
      ],
    },

    // ── ZoeInsuranceCardRow ──────────────────────────
    zoeInsuranceCardRow: {
      description: 'Insurance card display — shows card image with View/Download actions',
      anatomy: [
        'Card image thumbnail (left, rounded corners)',
        'Card info: plan name, member name, member ID',
        'Action buttons: "View" (outline) + "Download" (ghost) — right side or below',
      ],
      layout: {
        base: 'Card variant="outline", radius="md", padding="sm"',
        direction: 'horizontal on desktop, vertical on narrow',
      },
      rules: [
        'Built on DS Card component',
        'View button opens full-size card in a Modal',
        'Download button triggers PDF/image download',
        'If user has front + back, show as two rows',
        'Buttons use sm size (40px) — compact within the card',
      ],
    },

    // ── ZoeDeductibleCard ────────────────────────────
    zoeDeductibleCard: {
      description: 'Deductible status card with progress bar',
      anatomy: [
        'Header: "Your Deductible" or plan-specific label',
        'Progress bar: spent vs total (colored fill)',
        'Amount labels: "$X spent of $Y" + "$Z remaining"',
        'Optional: individual vs family toggle or network tier tabs',
      ],
      layout: {
        base: 'Card variant="outline", radius="md", padding="md"',
        progressBarHeight: 8,
        progressBarRadius: 4,
        progressBarFill: 'primary.surface.DEFAULT (orange)',
        progressBarTrack: 'neutral.surface.light',
      },
      rules: [
        'Built on DS Card component',
        'Progress bar uses orange fill for spent amount',
        'When deductible is met (100%), bar is full green (success color)',
        'Amount text: spent is bold, total and remaining are regular weight',
        'If plan has separate in-network/out-of-network deductibles, use tabs or separate cards',
      ],
    },

    // ── ZoeDrawer ────────────────────────────────────
    zoeDrawer: {
      description: 'Right-side panel that opens for full details — benefits, providers, etc.',
      anatomy: [
        'Header: image/icon + title + close button',
        'Tag chips (e.g., plan type, network)',
        'Tabs (e.g., "Before deductible" / "After deductible", or "In-Network" / "Out-of-Network")',
        'Cost card: price range with low/mid/high breakdown',
        'Rich text sections: bullet lists, bold labels, paragraphs',
        'Sticky footer: action buttons (e.g., "More coverage options", "Find providers")',
      ],
      layout: {
        position: 'fixed right, full height',
        width: '480px on desktop, full-width on mobile',
        background: 'white',
        overlay: 'dark semi-transparent backdrop',
        headerHeight: 'auto — image can be 160px + title area',
        footerHeight: '72px sticky',
      },
      rules: [
        'Opens from the right side — slides in with a backdrop overlay',
        'Close button is top-right (IconButton ghost, XLine icon)',
        'Close on backdrop click and Escape key',
        'Content scrolls independently — header and footer are fixed',
        'Tab content changes inline — no page navigation',
        'Uses DS Card for cost breakdown sections',
        'Uses DS Chip for tag pills (plan type, network tier)',
        'Footer buttons: primary "Find providers" + outline "More options" — right-aligned',
        'On mobile: drawer becomes full-screen overlay (not half-sheet)',
      ],
    },
  },

  // ── Layout Rules ──────────────────────────────────────────
  layoutRules: [
    {
      id: 'chat-container',
      rule: 'Zoe chat sits inside a panel (right side or full-screen on mobile) with a fixed header and sticky input at bottom',
      detail: 'Chat messages scroll vertically between the header and input bar. The container has a white background (#ffffff) — NOT light grey.',
    },
    {
      id: 'message-spacing',
      rule: 'Messages have semanticSpacing.xxl (40px) vertical gap between them. User bubbles and Zoe responses alternate.',
      detail: 'Within a Zoe response, content blocks are separated by spacing.xxs (8px) gap between icon and text.',
    },
    {
      id: 'prompt-chips-placement',
      rule: 'Prompt chips appear ONLY after the last Zoe message — they are not repeated on every message',
      detail: 'When a new user message is sent, the previous prompt chips disappear. All chips disappear together — not one at a time.',
    },
    {
      id: 'auto-scroll',
      rule: 'Chat auto-scrolls to bottom when a new message appears — unless the user has scrolled up to read history',
      detail: 'Auto-scroll uses scrollTop on the messages container — NOT scrollIntoView, which can scroll the parent page.',
    },
    {
      id: 'thinking-to-response-transition',
      rule: 'ZoeThinkingLoader handles the thinking→response transition with a precise sequence',
      detail: [
        '1. User sends message → user bubble appears immediately',
        '2. ZoeThinkingLoader starts: spinning icon + animated text beside it',
        '3. Response arrives from API → isThinking set to false',
        '4. Loader waits until current spin loop ends (minimum 2 loops / 7s total)',
        '5. Text does fast exit (fades out word by word: 200ms/30ms stagger)',
        '6. onExitComplete fires → response text appears BELOW the now-static icon',
        '7. Icon stays in same position throughout — it never disappears or moves',
      ].join('\n'),
    },
    {
      id: 'icon-persistence',
      rule: 'Zoe icon persists from thinking → response: spins during thinking, stops spinning when response arrives',
      detail: 'The icon position is the same in both states. Response content appears below the icon (vertical layout), NOT beside it.',
    },
    {
      id: 'input-always-available',
      rule: 'Input bar is always available — never disabled during thinking or loading',
      detail: 'User can type and send follow-up messages at any time.',
    },
    {
      id: 'provider-cards-in-chat',
      rule: 'Provider results use the existing ProviderCard component inside a horizontal ScrollArea carousel',
      detail: 'Same 360px wrapper pattern as the regular ProviderCard carousel. Cards in Zoe context are clickable — tap opens ZoeDrawer with provider details. Show scroll indicator on desktop (hideScrollbar=false), hide on mobile (hideScrollbar=true) — mobile users swipe natively.',
    },
    {
      id: 'no-markdown-rendering',
      rule: 'Zoe text is NOT raw markdown — it is pre-structured as styled paragraphs, bold spans, and bullet lists',
      detail: 'Do not use a markdown renderer. Text formatting is done with semantic HTML: <p>, <strong>, <ul>/<li>, and styled links.',
    },
  ],

  // ── Context Defaults ──────────────────────────────────────
  // When an agent needs to generate a Zoe answer, these are the defaults.
  contextDefaults: {
    'benefit-question':     'textOnly or benefit answer type — depends on whether structured benefit data exists',
    'insurance-card':       'insuranceCard answer type — always show card images',
    'deductible-question':  'deductible answer type — always show progress bar card',
    'provider-search':      'provider answer type — carousel of ProviderCards',
    'general-question':     'textOnly — just paragraphs with optional prompt chips',
    'follow-up':            'textOnly — short answer, 1-2 prompt chips',
  },

  // ── Zoe vs Regular DS Components ──────────────────────────
  // These Zoe compositions are SEPARATE from the core DS. They live in
  // the DS repo but are exported from a `zoe/` sub-path.
  //
  // import { ZoeResponseBubble, ZoeUserBubble, ZoeThinkingLoader, ZoePromptChip, ZoeInput } from 'glow-ds/zoe'
  //
  // The regular DS components (Card, Chip, Button, ProviderCard, etc.)
  // are used INSIDE Zoe compositions — but consumers don't need to know that.
  // Zoe components are the public API; internal composition is an implementation detail.
}
