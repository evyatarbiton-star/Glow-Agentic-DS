#!/usr/bin/env node

/**
 * scan-svg-colors.js
 *
 * Scans all exported SVGs for hardcoded fill/stroke color values.
 * Prints a summary of which hex/rgb values appear and how often,
 * so you know exactly what to replace with currentColor in the SVGR command.
 *
 * Usage: node scripts/scan-svg-colors.js
 */

const fs = require('fs')
const path = require('path')

const DIRS = [
  path.resolve(__dirname, '../figma-icons/line'),
  path.resolve(__dirname, '../figma-icons/solid'),
]

// Match fill="..." and stroke="..." values (hex, rgb, named colors)
const COLOR_REGEX = /(?:fill|stroke)=["']([^"']+)["']/gi
// Also match inline style fill/stroke
const STYLE_COLOR_REGEX = /(?:fill|stroke)\s*:\s*([^;}"']+)/gi

const colorCounts = new Map()
let totalFiles = 0

for (const dir of DIRS) {
  if (!fs.existsSync(dir)) {
    console.log(`⏭  Skipping ${path.relative(process.cwd(), dir)} (not found)`)
    continue
  }

  const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.svg'))
  const styleName = path.basename(dir)
  console.log(`\n📂 ${styleName}/ — ${files.length} SVGs`)
  totalFiles += files.length

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8')

    // Attribute-based colors
    let match
    while ((match = COLOR_REGEX.exec(content)) !== null) {
      const value = match[1].trim().toLowerCase()
      // Skip "none", "currentColor", and URL references
      if (value === 'none' || value === 'currentcolor' || value.startsWith('url(')) continue
      colorCounts.set(value, (colorCounts.get(value) || 0) + 1)
    }

    // Inline style colors
    while ((match = STYLE_COLOR_REGEX.exec(content)) !== null) {
      const value = match[1].trim().toLowerCase()
      if (value === 'none' || value === 'currentcolor' || value.startsWith('url(')) continue
      colorCounts.set(value, (colorCounts.get(value) || 0) + 1)
    }
  }
}

// Sort by frequency
const sorted = [...colorCounts.entries()].sort((a, b) => b[1] - a[1])

console.log(`\n${'═'.repeat(50)}`)
console.log(`📊 Color scan results (${totalFiles} files)`)
console.log(`${'═'.repeat(50)}`)

if (sorted.length === 0) {
  console.log('No hardcoded colors found! All icons may already use currentColor.')
} else {
  console.log(`\n${'Color Value'.padEnd(25)} ${'Count'.padEnd(8)} SVGR Flag`)
  console.log(`${'─'.repeat(25)} ${'─'.repeat(8)} ${'─'.repeat(40)}`)

  for (const [color, count] of sorted) {
    const svgrFlag = `--replace-attr-values '${color}=currentColor'`
    console.log(`${color.padEnd(25)} ${String(count).padEnd(8)} ${svgrFlag}`)
  }

  console.log(`\n💡 Add all --replace-attr-values flags to your SVGR command.`)
  console.log(`   Example:`)

  const flags = sorted.map(([c]) => `--replace-attr-values '${c}=currentColor'`).join(' ')
  console.log(`   npx @svgr/cli --icon --typescript ${flags} ...`)
}
