// ============================================================
// GLOW DS — Primitive Colors
// Source of truth: Figma Glow-DS Foundation file
// DO NOT use these directly in components — use semantic tokens
// ============================================================

export const primitiveColors = {
  grey: {
    0:   '#ffffff', // White
    25:  '#fafafa', // Figma Grey/25
    50:  '#f2f2f2', // Figma Grey/50
    100: '#ededed',
    200: '#e0e0e0',
    300: '#d4d4d4',
    400: '#c4c4c4',
    500: '#b3b3b3',
    600: '#a1a1a1',
    650: '#949494', // Figma Grey/650
    700: '#8a8a8a',
    800: '#6b6b6b',
    900: '#404040',
    950: '#000000', // Black
  },
  orange: {
    50:  '#fff8f5',
    75:  '#ffede5', // Figma Orange/75
    100: '#ffdccc',
    200: '#ffb999',
    300: '#fe9767',
    400: '#fe7434',
    500: '#fd5201', // Brand primary
    600: '#cb4101',
    700: '#983101',
    800: '#662000',
    900: '#331000',
    950: '#190800',
  },
  blue: {
    50:  '#f5f8ff',
    100: '#ebf0ff',
    200: '#d3dfff',
    300: '#99b4ff',
    400: '#618bff',
    500: '#245eff',
    600: '#003feb',
    700: '#002ead',
    800: '#001f75',
    900: '#000f38',
  },
  green: {
    50:  '#f1f9f1',
    100: '#e2f3e3',
    200: '#c2e5c3',
    300: '#a6d9a8',
    400: '#7ec881',
    500: '#5bb95e',
    600: '#429a45',
    700: '#317233',
    800: '#204b21',
    900: '#112712',
  },
  yellow: {
    50:  '#fff9e5',
    100: '#fff3c7',
    200: '#ffe78f',
    300: '#ffdb57',
    400: '#ffd129',
    500: '#f5c000',
    600: '#c29800',
    700: '#947400',
    800: '#614c00',
    900: '#332800',
  },
  red: {
    50:  '#feecec', // Figma Red/50
    100: '#fcd9d9',
    200: '#fab3b3',
    300: '#f78c8c',
    400: '#f46161',
    500: '#f23c3c',
    600: '#e10f0f',
    700: '#ac0b0b',
    800: '#730808',
    900: '#390404',
  },
  purple: {
    50:  '#f3edfd',
    100: '#e7dafb',
    200: '#ceb5f7',
    300: '#b38cf3',
    400: '#9b67ef',
    500: '#8242eb',
    600: '#6117d9',
    700: '#4811a1',
    800: '#320c6f',
    900: '#190637',
  },
} as const

export type PrimitiveColorScale = typeof primitiveColors
