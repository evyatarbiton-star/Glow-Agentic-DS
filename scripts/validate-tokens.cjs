#!/usr/bin/env node
// ============================================================
// Glow DS — Token Compliance Validator
//
// Scans .tsx/.ts files for hardcoded values that should use
// DS tokens. Reports violations with suggested token replacements.
//
// Usage:
//   node scripts/validate-tokens.cjs [path]         # scan a file or directory
//   node scripts/validate-tokens.cjs --changed-only  # scan git-changed .tsx files
//
// Exit codes: 0 = clean, 1 = violations found
// ============================================================

const fs = require('fs')
const path = require('path')

// ── Hex color → semantic token reverse map ──────────────────
// Built from tokens/semantic/colors.ts (103 tokens)
const HEX_TO_TOKEN = {
  // Primary (Orange)
  '#fd5201': 'sc.primary.surface.DEFAULT',
  '#fff8f5': 'sc.primary.surface.subtle',
  '#ffede5': 'sc.primary.surface.extraLight',
  '#fe9767': 'sc.primary.surface.light',
  '#fe7434': 'sc.primary.surface.hover',
  '#cb4101': 'sc.primary.surface.selected',
  '#ffb999': 'sc.primary.surface.disabled / sc.primary.border.light',
  '#983101': 'sc.primary.border.darker / sc.primary.text.dark',

  // Neutral (Grey)
  '#000000': 'sc.neutral.text.DEFAULT',
  '#ffffff': 'sc.neutral.surface.negative',
  '#fafafa': 'sc.neutral.surface.extraSubtle',
  '#f2f2f2': 'sc.neutral.surface.subtle',
  '#e0e0e0': 'sc.neutral.surface.light / sc.neutral.border.strong',
  '#ededed': 'sc.neutral.border.light',
  '#d4d4d4': 'sc.neutral.border.xstrong / sc.neutral.surface.disabled',
  '#c4c4c4': 'sc.neutral.text.medium',
  '#b3b3b3': '[no semantic token — primitive grey.500]',
  '#a1a1a1': '[no semantic token — primitive grey.600]',
  '#949494': 'sc.neutral.surface.dark / sc.neutral.text.disabledDark',
  '#8a8a8a': 'sc.neutral.text.light',
  '#6b6b6b': '[no semantic token — primitive grey.800]',
  '#404040': 'sc.neutral.text.dark',

  // Accent Yellow
  '#ffdb57': "sc['accent-yellow'].surface.DEFAULT",
  '#fff9e5': "sc['accent-yellow'].surface.subtle",
  '#fff3c7': "sc['accent-yellow'].surface.light",
  '#ffe78f': "sc['accent-yellow'].surface.hover",
  '#ffd129': "sc['accent-yellow'].surface.selected",
  '#f5c000': "sc['accent-yellow'].text.DEFAULT",
  '#947400': "sc['accent-yellow'].text.dark",

  // Accent Blue
  '#99b4ff': "sc['accent-blue'].surface.DEFAULT",
  '#f5f8ff': "sc['accent-blue'].surface.subtle",
  '#ebf0ff': "sc['accent-blue'].surface.light",
  '#d3dfff': "sc['accent-blue'].surface.hover",
  '#618bff': "sc['accent-blue'].surface.selected",
  '#245eff': "sc['accent-blue'].text.dark",

  // Accent Purple
  '#b38cf3': "sc['accent-purple'].surface.DEFAULT",
  '#f3edfd': "sc['accent-purple'].surface.subtle",
  '#e7dafb': "sc['accent-purple'].surface.light",
  '#ceb5f7': "sc['accent-purple'].surface.hover",
  '#9b67ef': "sc['accent-purple'].surface.selected",
  '#8242eb': "sc['accent-purple'].text.dark",

  // Success (Green)
  '#5bb95e': 'sc.success.surface.DEFAULT',
  '#f1f9f1': 'sc.success.surface.subtle',
  '#c2e5c3': 'sc.success.surface.light',
  '#7ec881': 'sc.success.surface.hover',
  '#429a45': 'sc.success.surface.selected',
  '#e2f3e3': 'sc.success.border.light',
  '#317233': 'sc.success.border.darker / sc.success.text.dark',

  // Error (Red)
  '#f23c3c': 'sc.error.surface.DEFAULT',
  '#feecec': 'sc.error.surface.subtle',
  '#f78c8c': 'sc.error.surface.light',
  '#f46161': 'sc.error.surface.hover',
  '#e10f0f': 'sc.error.border.DEFAULT / sc.error.text.DEFAULT',
  '#fab3b3': 'sc.error.surface.disabled / sc.error.border.light',
  '#ac0b0b': 'sc.error.border.darker / sc.error.text.dark',
  '#fcd9d9': 'sc.error.text.disabled',
}

// ── Spacing value → token map ──────────────────────────────
const PX_TO_SPACING = {
  4: 'semanticSpacing.xxxs', 8: 'semanticSpacing.xxs', 12: 'semanticSpacing.xs',
  16: 'semanticSpacing.s', 20: 'semanticSpacing.m', 24: 'semanticSpacing.l',
  32: 'semanticSpacing.xl', 40: 'semanticSpacing.xxl', 48: 'semanticSpacing.xxxl',
  56: 'semanticSpacing.xxxxl', 72: "semanticSpacing['5xl']",
}

// ── Radii value → token map ─────────────────────────────────
const PX_TO_RADII = {
  4: 'semanticRadii.xxxs', 8: 'semanticRadii.xxs', 12: 'semanticRadii.xs',
  16: 'semanticRadii.sn', 20: 'semanticRadii.m', 24: 'semanticRadii.ln',
  32: 'semanticRadii.xl', 40: 'semanticRadii.xxl', 48: 'semanticRadii.xxxl',
  999: 'semanticRadii.full',
}

// ── Excluded paths ──────────────────────────────────────────
const EXCLUDED_DIRS = [
  'tokens/primitive',
  'tokens/semantic',
  'lib/tailwind-preset',
  'node_modules',
  'dist',
  'scripts/',
  'Icon/icons/',         // SVG icon components legitimately contain hex fills
]

// ── Patterns ────────────────────────────────────────────────
const HEX_REGEX = /#([0-9a-fA-F]{3,8})\b/g
const INLINE_SVG_REGEX = /<svg[\s>]/gi

// Style property names that commonly hold spacing/size values
const STYLE_PROP_REGEX = /(?:padding|margin|gap|top|bottom|left|right|width|height|minWidth|minHeight|maxWidth|maxHeight|borderRadius|fontSize|lineHeight)\s*[:=]\s*(\d+)/g

// ── Helpers ─────────────────────────────────────────────────
function isExcluded(filePath) {
  const rel = path.relative(process.cwd(), filePath)
  return EXCLUDED_DIRS.some(d => rel.includes(d))
}

function isTokenConstantBlock(line, prevLines) {
  // Lines that define token constants (e.g., `const X = sc.primary...`) are OK
  if (/const\s+\w+\s*=\s*(sc\.|semanticColors|semanticSpacing|semanticRadii|typographyStyles|primitiveColors|primitiveShadows)/.test(line)) return true
  // Comments showing the hex value next to a token reference are OK
  if (/\/\/.*#[0-9a-fA-F]/.test(line)) return true
  return false
}

function isGlowIgnored(line) {
  return /glow-ignore/.test(line)
}

function normalizeHex(hex) {
  hex = hex.toLowerCase()
  // Expand 3-char hex: #abc → #aabbcc
  if (hex.length === 4) {
    hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }
  return hex
}

// ── Scan a single file ──────────────────────────────────────
function scanFile(filePath) {
  const violations = []
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  const rel = path.relative(process.cwd(), filePath)

  lines.forEach((line, idx) => {
    const lineNum = idx + 1

    // Skip glow-ignore lines
    if (isGlowIgnored(line)) return

    // Skip token constant definitions and comments
    if (isTokenConstantBlock(line, lines.slice(Math.max(0, idx - 2), idx))) return

    // Skip import lines
    if (/^\s*import\s/.test(line)) return

    // ── Check hardcoded hex colors ────────────────────────
    let match
    HEX_REGEX.lastIndex = 0
    while ((match = HEX_REGEX.exec(line)) !== null) {
      const hex = normalizeHex(match[0])
      // Skip rgba patterns (they're in the string, not bare hex)
      if (/rgba?\(/.test(line.slice(Math.max(0, match.index - 10), match.index))) continue
      // Skip hex in URL strings (image URLs)
      if (/['"`]https?:\/\//.test(line)) continue
      // Skip hex in keyframe/animation strings
      if (/url\(/.test(line)) continue

      const suggestion = HEX_TO_TOKEN[hex]
      if (suggestion) {
        violations.push({
          file: rel, line: lineNum, type: 'hardcoded-color',
          value: hex, suggestion: `Use ${suggestion} instead of ${hex}`,
        })
      } else if (hex.length === 7 || hex.length === 9) {
        // Unknown hex color — might be a new/unlisted color
        violations.push({
          file: rel, line: lineNum, type: 'unknown-color',
          value: hex, suggestion: `No matching DS token for ${hex} — check if this color should be added to the palette`,
        })
      }
    }

    // ── Check inline SVG ──────────────────────────────────
    INLINE_SVG_REGEX.lastIndex = 0
    if (INLINE_SVG_REGEX.test(line)) {
      // Allow in Icon component definition files
      if (!rel.includes('Icon/icons/')) {
        violations.push({
          file: rel, line: lineNum, type: 'inline-svg',
          value: '<svg>', suggestion: 'Import from DS icon library: import XyzLine from "@/components/Icon/icons/line/Xyz"',
        })
      }
    }
  })

  return violations
}

// ── Collect files ───────────────────────────────────────────
function collectFiles(targetPath) {
  const stat = fs.statSync(targetPath)
  if (stat.isFile()) {
    if (/\.(tsx?|jsx?)$/.test(targetPath)) return [targetPath]
    return []
  }
  if (stat.isDirectory()) {
    const results = []
    const entries = fs.readdirSync(targetPath, { withFileTypes: true })
    for (const entry of entries) {
      const full = path.join(targetPath, entry.name)
      if (entry.isDirectory() && !['node_modules', 'dist', '.git'].includes(entry.name)) {
        results.push(...collectFiles(full))
      } else if (entry.isFile() && /\.(tsx?|jsx?)$/.test(entry.name)) {
        results.push(full)
      }
    }
    return results
  }
  return []
}

// ── Get git-changed files ───────────────────────────────────
function getChangedFiles() {
  const { execSync } = require('child_process')
  try {
    const output = execSync('git diff --name-only HEAD', { encoding: 'utf-8' })
    return output.trim().split('\n')
      .filter(f => /\.(tsx?|jsx?)$/.test(f))
      .map(f => path.resolve(process.cwd(), f))
      .filter(f => fs.existsSync(f))
  } catch {
    return []
  }
}

// ── Main ────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2)
  let files = []

  if (args.includes('--changed-only')) {
    files = getChangedFiles()
    if (files.length === 0) {
      console.log('✅ No changed files to validate.')
      process.exit(0)
    }
  } else {
    const target = args[0] || 'src/components'
    files = collectFiles(path.resolve(process.cwd(), target))
  }

  // Filter excluded paths
  files = files.filter(f => !isExcluded(f))

  let allViolations = []

  for (const file of files) {
    const violations = scanFile(file)
    allViolations.push(...violations)
  }

  // ── Report ──────────────────────────────────────────────
  if (allViolations.length === 0) {
    console.log(`✅ Token compliance: ${files.length} files scanned, 0 violations.`)
    process.exit(0)
  }

  console.log(`\n⚠️  Token compliance: ${allViolations.length} violation(s) in ${files.length} files:\n`)

  // Group by file
  const byFile = {}
  for (const v of allViolations) {
    if (!byFile[v.file]) byFile[v.file] = []
    byFile[v.file].push(v)
  }

  for (const [file, violations] of Object.entries(byFile)) {
    console.log(`  📄 ${file}`)
    for (const v of violations) {
      const icon = v.type === 'hardcoded-color' ? '🎨' : v.type === 'inline-svg' ? '🖼️' : '❓'
      console.log(`     ${icon} Line ${v.line}: ${v.suggestion}`)
    }
    console.log()
  }

  process.exit(1)
}

main()
