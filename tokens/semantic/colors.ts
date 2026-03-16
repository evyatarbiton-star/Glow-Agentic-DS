// ============================================================
// GLOW DS — Semantic Colors
// 103 tokens — 1:1 mapping to Figma Variables
// Structure: Category → Surface/Border/Text
// Source: Figma Glow-DS → Semantic Colors collection
// ============================================================
import { primitiveColors as c } from '../primitive/colors'

export const semanticColors = {

  // ── Primary (Figma: Primary Orange) ────────────────────────
  primary: {
    surface: {
      DEFAULT:    c.orange[500],   // #fd5201
      subtle:     c.orange[50],    // #fff8f5
      extraLight: c.orange[75],    // #ffede5
      light:      c.orange[300],   // #fe9767
      hover:      c.orange[400],   // #fe7434
      focused:    c.orange[400],   // #fe7434
      selected:   c.orange[600],   // #cb4101
      disabled:   c.orange[200],   // #ffb999
    },
    border: {
      DEFAULT:    c.orange[500],   // #fd5201
      light:      c.orange[200],   // #ffb999
      darker:     c.orange[700],   // #983101
    },
    text: {
      DEFAULT:    c.orange[500],   // #fd5201
      light:      c.orange[300],   // #fe9767
      dark:       c.orange[700],   // #983101
      disabled:   c.orange[50],    // #fff8f5
    },
  },

  // ── Neutral (Figma: Primary Black) ─────────────────────────
  neutral: {
    surface: {
      DEFAULT:     c.grey[950],    // #000000
      dark:        c.grey[650],    // #949494
      negative:    c.grey[0],      // #ffffff
      extraSubtle: c.grey[25],     // #fafafa
      subtle:      c.grey[50],     // #f2f2f2
      light:       c.grey[200],    // #e0e0e0
      hover:       c.grey[900],    // #404040
      focused:     c.grey[900],    // #404040
      selected:    c.grey[950],    // #000000
      disabled:    c.grey[300],    // #d4d4d4
    },
    border: {
      DEFAULT:     c.grey[950],    // #000000
      light:       c.grey[100],    // #ededed
      strong:      c.grey[200],    // #e0e0e0
      xstrong:     c.grey[300],    // #d4d4d4
    },
    text: {
      DEFAULT:      c.grey[950],   // #000000
      light:        c.grey[700],   // #8a8a8a
      dark:         c.grey[900],   // #404040
      disabledDark: c.grey[650],   // #949494
      disabledLight:c.grey[300],   // #d4d4d4
      negative:     c.grey[0],     // #ffffff
      medium:       c.grey[400],   // #c4c4c4
    },
  },

  // ── Accent Yellow (Figma: Secondary Yellow) ────────────────
  'accent-yellow': {
    surface: {
      DEFAULT:  c.yellow[300],   // #ffdb57
      subtle:   c.yellow[50],    // #fff9e5
      light:    c.yellow[100],   // #fff3c7
      hover:    c.yellow[200],   // #ffe78f
      focused:  c.yellow[100],   // #fff3c7
      selected: c.yellow[400],   // #ffd129
      disabled: c.yellow[200],   // #ffe78f
    },
    border: {
      DEFAULT:  c.yellow[300],   // #ffdb57
      light:    c.yellow[100],   // #fff3c7
      darker:   c.yellow[400],   // #ffd129
    },
    text: {
      DEFAULT:  c.yellow[500],   // #f5c000
      light:    c.yellow[300],   // #ffdb57
      dark:     c.yellow[700],   // #947400
    },
  },

  // ── Accent Blue (Figma: Secondary Blue) ────────────────────
  'accent-blue': {
    surface: {
      DEFAULT:  c.blue[300],     // #99b4ff
      subtle:   c.blue[50],      // #f5f8ff
      light:    c.blue[100],     // #ebf0ff
      hover:    c.blue[200],     // #d3dfff
      focused:  c.blue[200],     // #d3dfff
      selected: c.blue[400],     // #618bff
      disabled: c.blue[200],     // #d3dfff
    },
    border: {
      DEFAULT:  c.blue[300],     // #99b4ff
      light:    c.blue[100],     // #ebf0ff
      darker:   c.blue[400],     // #618bff
    },
    text: {
      DEFAULT:  c.blue[300],     // #99b4ff
      dark:     c.blue[500],     // #245eff
    },
  },

  // ── Accent Purple (Figma: Secondary Purple) ───────────────
  'accent-purple': {
    surface: {
      DEFAULT:  c.purple[300],   // #b38cf3
      subtle:   c.purple[50],    // #f3edfd
      light:    c.purple[100],   // #e7dafb
      hover:    c.purple[200],   // #ceb5f7
      focused:  c.purple[200],   // #ceb5f7
      selected: c.purple[400],   // #9b67ef
      disabled: c.purple[200],   // #ceb5f7
    },
    border: {
      DEFAULT:  c.purple[300],   // #b38cf3
      light:    c.purple[100],   // #e7dafb
      darker:   c.purple[400],   // #9b67ef
    },
    text: {
      DEFAULT:  c.purple[300],   // #b38cf3
      dark:     c.purple[500],   // #8242eb
    },
  },

  // ── Success ────────────────────────────────────────────────
  success: {
    surface: {
      DEFAULT:  c.green[500],    // #5bb95e
      subtle:   c.green[50],     // #f1f9f1
      light:    c.green[200],    // #c2e5c3
      hover:    c.green[400],    // #7ec881
      focused:  c.green[400],    // #7ec881
      selected: c.green[600],    // #429a45
      disabled: c.green[200],    // #c2e5c3
    },
    border: {
      DEFAULT:  c.green[500],    // #5bb95e
      light:    c.green[100],    // #e2f3e3
      darker:   c.green[700],    // #317233
    },
    text: {
      DEFAULT:  c.green[500],    // #5bb95e
      dark:     c.green[700],    // #317233
    },
  },

  // ── Error ──────────────────────────────────────────────────
  error: {
    surface: {
      DEFAULT:  c.red[500],      // #f23c3c
      subtle:   c.red[50],       // #feecec
      light:    c.red[300],      // #f78c8c
      hover:    c.red[400],      // #f46161
      focused:  c.red[400],      // #f46161
      selected: c.red[600],      // #e10f0f
      disabled: c.red[200],      // #fab3b3
    },
    border: {
      DEFAULT:  c.red[600],      // #e10f0f
      light:    c.red[200],      // #fab3b3
      darker:   c.red[700],      // #ac0b0b
    },
    text: {
      DEFAULT:  c.red[600],      // #e10f0f
      light:    c.red[300],      // #f78c8c
      dark:     c.red[700],      // #ac0b0b
      disabled: c.red[100],      // #fcd9d9
    },
  },

  // ── Overlay (Figma: Tooltip / Modal backdrops) ────────────────
  overlay: {
    surface: {
      DEFAULT:  'rgba(0, 0, 0, 0.72)',      // dark overlay — tooltip default
      light:    'rgba(64, 64, 64, 0.72)',    // grey overlay — tooltip rich
    },
    blur: '13px',                            // backdrop-filter blur radius
  },

} as const

export type SemanticColor = keyof typeof semanticColors
