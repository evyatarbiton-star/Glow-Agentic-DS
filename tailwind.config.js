/** @type {import('tailwindcss').Config} */

// ============================================================
// GLOW DS — Tailwind Configuration
// All DS tokens mapped here → available as Tailwind classes
//
// Colors:  bg-primary, text-error, border-neutral-light ...
// Spacing: p-s, gap-m, mt-xl, mb-xxxs ...
// Radius:  rounded-xs, rounded-full ...
// Shadow:  shadow-card, shadow-lg ...
// ============================================================

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {

      // ── Colors (Semantic — 90 tokens, 1:1 Figma mapping) ────
      colors: {
        // ── Primary (Figma: Primary Orange) ──────────────────
        primary: {
          DEFAULT:            '#fd5201',  // surface.DEFAULT — Orange/500
          subtle:             '#fff8f5',  // surface.subtle — Orange/50
          'extra-light':      '#ffede5',  // surface.extraLight — Orange/75
          light:              '#fe9767',  // surface.light — Orange/300
          hover:              '#fe7434',  // surface.hover — Orange/400
          focused:            '#fe7434',  // surface.focused — Orange/400
          selected:           '#cb4101',  // surface.selected — Orange/600
          'surface-disabled': '#ffb999',  // surface.disabled — Orange/200
          border:             '#fd5201',  // border.DEFAULT — Orange/500
          'border-light':     '#ffb999',  // border.light — Orange/200
          'border-darker':    '#983101',  // border.darker — Orange/700
          text:               '#fd5201',  // text.DEFAULT — Orange/500
          'text-light':       '#fe9767',  // text.light — Orange/300
          'text-dark':        '#983101',  // text.dark — Orange/700
          'text-disabled':    '#fff8f5',  // text.disabled — Orange/50
        },

        // ── Neutral (Figma: Primary Black) ───────────────────
        neutral: {
          DEFAULT:              '#000000',  // surface.DEFAULT — Grey/950
          dark:                 '#949494',  // surface.dark — Grey/650
          negative:             '#ffffff',  // surface.negative — Grey/0
          'extra-subtle':       '#fafafa',  // surface.extraSubtle — Grey/25
          subtle:               '#f2f2f2',  // surface.subtle — Grey/50
          light:                '#e0e0e0',  // surface.light — Grey/200
          hover:                '#404040',  // surface.hover — Grey/900
          focused:              '#404040',  // surface.focused — Grey/900
          selected:             '#000000',  // surface.selected — Grey/950
          'surface-disabled':   '#d4d4d4',  // surface.disabled — Grey/300
          border:               '#000000',  // border.DEFAULT — Grey/950
          'border-light':       '#ededed',  // border.light — Grey/100
          'border-strong':      '#e0e0e0',  // border.strong — Grey/200
          'border-xstrong':     '#d4d4d4',  // border.xstrong — Grey/300
          text:                 '#000000',  // text.DEFAULT — Grey/950
          'text-light':         '#8a8a8a',  // text.light — Grey/700
          'text-dark':          '#404040',  // text.dark — Grey/900
          'text-disabled-dark': '#949494',  // text.disabledDark — Grey/650
          'text-disabled-light':'#d4d4d4',  // text.disabledLight — Grey/300
          'text-negative':      '#ffffff',  // text.negative — Grey/0
          'text-medium':        '#c4c4c4',  // text.medium — Grey/400
        },

        // ── Accent Yellow (Figma: Secondary Yellow) ──────────
        'accent-yellow': {
          DEFAULT:            '#ffdb57',  // surface.DEFAULT — Yellow/300
          subtle:             '#fff9e5',  // surface.subtle — Yellow/50
          light:              '#fff3c7',  // surface.light — Yellow/100
          hover:              '#ffe78f',  // surface.hover — Yellow/200
          focused:            '#fff3c7',  // surface.focused — Yellow/100
          selected:           '#ffd129',  // surface.selected — Yellow/400
          'surface-disabled': '#ffe78f',  // surface.disabled — Yellow/200
          border:             '#ffdb57',  // border.DEFAULT — Yellow/300
          'border-light':     '#fff3c7',  // border.light — Yellow/100
          'border-darker':    '#ffd129',  // border.darker — Yellow/400
          text:               '#f5c000',  // text.DEFAULT — Yellow/500
          'text-light':       '#ffdb57',  // text.light — Yellow/300
          'text-dark':        '#947400',  // text.dark — Yellow/700
        },

        // ── Accent Blue (Figma: Secondary Blue) ─────────────
        'accent-blue': {
          DEFAULT:            '#99b4ff',  // surface.DEFAULT — Blue/300
          subtle:             '#f5f8ff',  // surface.subtle — Blue/50
          light:              '#ebf0ff',  // surface.light — Blue/100
          hover:              '#d3dfff',  // surface.hover — Blue/200
          focused:            '#d3dfff',  // surface.focused — Blue/200
          selected:           '#618bff',  // surface.selected — Blue/400
          'surface-disabled': '#d3dfff',  // surface.disabled — Blue/200
          border:             '#99b4ff',  // border.DEFAULT — Blue/300
          'border-light':     '#ebf0ff',  // border.light — Blue/100
          'border-darker':    '#618bff',  // border.darker — Blue/400
          text:               '#99b4ff',  // text.DEFAULT — Blue/300
          'text-dark':        '#245eff',  // text.dark — Blue/500
        },

        // ── Accent Purple (Figma: Secondary Purple) ────────
        'accent-purple': {
          DEFAULT:            '#b38cf3',  // surface.DEFAULT — Purple/300
          subtle:             '#f3edfd',  // surface.subtle — Purple/50
          light:              '#e7dafb',  // surface.light — Purple/100
          hover:              '#ceb5f7',  // surface.hover — Purple/200
          focused:            '#ceb5f7',  // surface.focused — Purple/200
          selected:           '#9b67ef',  // surface.selected — Purple/400
          'surface-disabled': '#ceb5f7',  // surface.disabled — Purple/200
          border:             '#b38cf3',  // border.DEFAULT — Purple/300
          'border-light':     '#e7dafb',  // border.light — Purple/100
          'border-darker':    '#9b67ef',  // border.darker — Purple/400
          text:               '#b38cf3',  // text.DEFAULT — Purple/300
          'text-dark':        '#8242eb',  // text.dark — Purple/500
        },

        // ── Success ──────────────────────────────────────────
        success: {
          DEFAULT:            '#5bb95e',  // surface.DEFAULT — Green/500
          subtle:             '#f1f9f1',  // surface.subtle — Green/50
          light:              '#c2e5c3',  // surface.light — Green/200
          hover:              '#7ec881',  // surface.hover — Green/400
          focused:            '#7ec881',  // surface.focused — Green/400
          selected:           '#429a45',  // surface.selected — Green/600
          'surface-disabled': '#c2e5c3',  // surface.disabled — Green/200
          border:             '#5bb95e',  // border.DEFAULT — Green/500
          'border-light':     '#e2f3e3',  // border.light — Green/100
          'border-darker':    '#317233',  // border.darker — Green/700
          text:               '#5bb95e',  // text.DEFAULT — Green/500
          'text-dark':        '#317233',  // text.dark — Green/700
        },

        // ── Error ────────────────────────────────────────────
        error: {
          DEFAULT:            '#f23c3c',  // surface.DEFAULT — Red/500
          subtle:             '#feecec',  // surface.subtle — Red/50
          light:              '#f78c8c',  // surface.light — Red/300
          hover:              '#f46161',  // surface.hover — Red/400
          focused:            '#f46161',  // surface.focused — Red/400
          selected:           '#e10f0f',  // surface.selected — Red/600
          'surface-disabled': '#fab3b3',  // surface.disabled — Red/200
          border:             '#e10f0f',  // border.DEFAULT — Red/600
          'border-light':     '#fab3b3',  // border.light — Red/200
          'border-darker':    '#ac0b0b',  // border.darker — Red/700
          text:               '#e10f0f',  // text.DEFAULT — Red/600
          'text-light':       '#f78c8c',  // text.light — Red/300
          'text-dark':        '#ac0b0b',  // text.dark — Red/700
          'text-disabled':    '#fcd9d9',  // text.disabled — Red/100
        },

        // ── Primitive palettes (Foundation docs pages) ───────
        grey:   { 0:'#ffffff', 25:'#fafafa', 50:'#f2f2f2', 100:'#ededed', 200:'#e0e0e0', 300:'#d4d4d4', 400:'#c4c4c4', 500:'#b3b3b3', 600:'#a1a1a1', 650:'#949494', 700:'#8a8a8a', 800:'#6b6b6b', 900:'#404040', 950:'#000000' },
        orange: { 50:'#fff8f5', 75:'#ffede5', 100:'#ffdccc', 200:'#ffb999', 300:'#fe9767', 400:'#fe7434', 500:'#fd5201', 600:'#cb4101', 700:'#983101', 800:'#662000', 900:'#331000', 950:'#190800' },
        blue:   { 50:'#f5f8ff', 100:'#ebf0ff', 200:'#d3dfff', 300:'#99b4ff', 400:'#618bff', 500:'#245eff', 600:'#003feb', 700:'#002ead', 800:'#001f75', 900:'#000f38' },
        green:  { 50:'#f1f9f1', 100:'#e2f3e3', 200:'#c2e5c3', 300:'#a6d9a8', 400:'#7ec881', 500:'#5bb95e', 600:'#429a45', 700:'#317233', 800:'#204b21', 900:'#112712' },
        yellow: { 50:'#fff9e5', 100:'#fff3c7', 200:'#ffe78f', 300:'#ffdb57', 400:'#ffd129', 500:'#f5c000', 600:'#c29800', 700:'#947400', 800:'#614c00', 900:'#332800' },
        red:    { 50:'#feecec', 100:'#fcd9d9', 200:'#fab3b3', 300:'#f78c8c', 400:'#f46161', 500:'#f23c3c', 600:'#e10f0f', 700:'#ac0b0b', 800:'#730808', 900:'#390404' },
        purple: { 50:'#f3edfd', 100:'#e7dafb', 200:'#ceb5f7', 300:'#b38cf3', 400:'#9b67ef', 500:'#8242eb', 600:'#6117d9', 700:'#4811a1', 800:'#320c6f', 900:'#190637' },
      },

      // ── Spacing ─────────────────────────────────────────────
      spacing: {
        xxxs:  '4px',
        xxs:   '8px',
        xs:    '12px',
        s:     '16px',
        m:     '20px',
        l:     '24px',
        xl:    '32px',
        xxl:   '40px',
        xxxl:  '48px',
        xxxxl: '56px',
        '5xl':  '72px',
      },

      // ── Border Radius ────────────────────────────────────────
      // NOTE: `s` and `l` renamed to `sn`/`ln` to avoid collision
      // with Tailwind's directional utilities (`rounded-s` = start-side,
      // `rounded-l` = left-side). Use `rounded-sn` and `rounded-ln`.
      borderRadius: {
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
      },

      // ── Box Shadow ───────────────────────────────────────────
      boxShadow: {
        card:  '0px 2px 8px rgba(0, 0, 0, 0.08)',
        sm:    '0px 1px 4px rgba(0, 0, 0, 0.06)',
        md:    '0px 2px 8px rgba(0, 0, 0, 0.08)',
        lg:    '0px 4px 16px rgba(0, 0, 0, 0.10)',
        xl:    '0px 8px 32px rgba(0, 0, 0, 0.12)',
        '2xl': '0px 16px 48px rgba(0, 0, 0, 0.16)',
      },

      // ── Font Family ──────────────────────────────────────────
      fontFamily: {
        default: ['"Founders Grotesk"', 'sans-serif'],
        display: ['"Tiempos Headline"', 'serif'],
      },

    },
  },
  plugins: [],
}
