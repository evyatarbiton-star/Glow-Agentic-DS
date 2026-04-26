#!/usr/bin/env node
// ============================================================
// Glow DS — HEX → Token Map Generator
//
// Parses tokens/semantic/colors.ts and tokens/primitive/colors.ts
// and emits scripts/generated/hex-to-token.json, a reverse map
// consumed by validate-tokens.cjs to suggest the right semantic
// token for any hardcoded hex value.
//
// Run:
//   node scripts/generate-hex-map.cjs
//
// Runs automatically via `npm run prebuild`.
// ============================================================

const fs = require('fs')
const path = require('path')

const REPO_ROOT = path.resolve(__dirname, '..')
const SEMANTIC_COLORS_PATH = path.join(REPO_ROOT, 'tokens/semantic/colors.ts')
const PRIMITIVE_COLORS_PATH = path.join(REPO_ROOT, 'tokens/primitive/colors.ts')
const OUTPUT_PATH = path.join(REPO_ROOT, 'scripts/generated/hex-to-token.json')

// ── Parse semantic/colors.ts ─────────────────────────────
// Walks the file line by line. Pushes onto a path stack when it sees
// `name: {`, pops on `}`. On a leaf line of form `name: c.palette[N], // #hex`,
// records `sc.<path>.<name>` against the hex.

function parseSemanticHexes() {
  const content = fs.readFileSync(SEMANTIC_COLORS_PATH, 'utf-8')
  const hexToTokens = {}
  const pathStack = []

  for (const raw of content.split('\n')) {
    const line = raw.replace(/\r$/, '')

    if (/^\s*\},?\s*$/.test(line) && pathStack.length > 0) {
      pathStack.pop()
      continue
    }

    const openMatch = line.match(/^\s*'?([\w-]+)'?:\s*\{\s*$/)
    if (openMatch) {
      pathStack.push(openMatch[1])
      continue
    }

    const leafMatch = line.match(/^\s*(\w+):\s*c\.\w+\[\d+\],?\s*\/\/\s*(#[0-9a-fA-F]{3,8})/)
    if (leafMatch && pathStack.length > 0) {
      const hex = leafMatch[2].toLowerCase()
      const scPath = formatScPath(pathStack, leafMatch[1])
      if (!hexToTokens[hex]) hexToTokens[hex] = []
      hexToTokens[hex].push(scPath)
    }
  }

  return hexToTokens
}

function formatScPath(pathStack, leafName) {
  let out = 'sc'
  for (const part of pathStack) {
    out += /^[a-zA-Z_$][\w$]*$/.test(part) ? '.' + part : `['${part}']`
  }
  return out + '.' + leafName
}

// ── Parse primitive/colors.ts ─────────────────────────────
// For hexes not used by any semantic token, emit a
// "primitive X.N" marker so the validator can still report them.

function parsePrimitiveHexes() {
  const content = fs.readFileSync(PRIMITIVE_COLORS_PATH, 'utf-8')
  const primitiveMap = {}
  let currentPalette = null

  for (const raw of content.split('\n')) {
    const line = raw.replace(/\r$/, '')

    const paletteMatch = line.match(/^\s*(\w+):\s*\{\s*$/)
    if (paletteMatch) {
      currentPalette = paletteMatch[1]
      continue
    }
    if (/^\s*\},?\s*$/.test(line)) {
      currentPalette = null
      continue
    }

    const entryMatch = line.match(/^\s*(\d+):\s*'(#[0-9a-fA-F]{3,8})'/)
    if (entryMatch && currentPalette) {
      const hex = entryMatch[2].toLowerCase()
      primitiveMap[hex] = `${currentPalette}.${entryMatch[1]}`
    }
  }
  return primitiveMap
}

// ── Build + write ─────────────────────────────
function main() {
  const semanticHexes = parseSemanticHexes()
  const primitiveHexes = parsePrimitiveHexes()

  const combined = {}
  for (const [hex, tokens] of Object.entries(semanticHexes)) {
    combined[hex] = tokens.join(' / ')
  }
  for (const [hex, paletteShade] of Object.entries(primitiveHexes)) {
    if (!combined[hex]) {
      combined[hex] = `[no semantic token — primitive ${paletteShade}]`
    }
  }

  const sortedKeys = Object.keys(combined).sort()
  const sorted = {}
  for (const k of sortedKeys) sorted[k] = combined[k]

  const outputDir = path.dirname(OUTPUT_PATH)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(sorted, null, 2) + '\n')
  const semanticCount = Object.keys(semanticHexes).length
  const primitiveOnlyCount = sortedKeys.length - semanticCount
  console.log(
    `✅ Generated ${sortedKeys.length} hex entries ` +
    `(${semanticCount} semantic, ${primitiveOnlyCount} primitive-only) → ` +
    path.relative(process.cwd(), OUTPUT_PATH)
  )
}

main()
