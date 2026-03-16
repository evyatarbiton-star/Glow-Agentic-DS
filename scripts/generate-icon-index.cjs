#!/usr/bin/env node

/**
 * generate-icon-index.js
 *
 * Generates barrel index.ts files for the icon library.
 *
 * For each style directory (line/, solid/), creates an index.ts that
 * re-exports every icon component with the style suffix:
 *   export { default as ArchiveBoxLine } from './ArchiveBox'
 *   export { default as BellLine } from './Bell'
 *
 * Also generates a unified icons/index.ts that re-exports from both.
 *
 * Suffix convention (future-proof):
 *   Line    — outline/stroke style
 *   Solid   — filled style
 *   Duotone — reserved for future
 */

const fs = require('fs')
const path = require('path')

const ICON_BASE = path.resolve(__dirname, '../src/components/Icon/icons')

const STYLES = [
  { dir: 'line', suffix: 'Line' },
  { dir: 'solid', suffix: 'Solid' },
  { dir: 'specialty', suffix: 'Specialty' },
  { dir: 'profile', suffix: 'Profile' },
  // { dir: 'duotone', suffix: 'Duotone' },  // Future
]

const HEADER = `// ⚠️  AUTO-GENERATED — do not edit manually.
// Run: npm run icons:index
\n`

let totalExports = 0

for (const { dir, suffix } of STYLES) {
  const styleDir = path.join(ICON_BASE, dir)

  if (!fs.existsSync(styleDir)) {
    console.log(`⏭  Skipping ${dir}/ (not found)`)
    continue
  }

  const files = fs.readdirSync(styleDir)
    .filter(f => f.endsWith('.tsx') && f !== 'index.tsx')
    .sort()

  if (files.length === 0) {
    console.log(`⏭  Skipping ${dir}/ (no .tsx files)`)
    continue
  }

  const exports = files.map(f => {
    const name = f.replace(/\.tsx$/, '')
    return `export { default as ${name}${suffix} } from './${name}'`
  })

  const content = HEADER + exports.join('\n') + '\n'
  const indexPath = path.join(styleDir, 'index.ts')

  fs.writeFileSync(indexPath, content)
  console.log(`✅ ${dir}/index.ts — ${exports.length} exports (${suffix} suffix)`)
  totalExports += exports.length
}

// Generate unified icons/index.ts
const unifiedExports = []
for (const { dir, suffix } of STYLES) {
  const styleDir = path.join(ICON_BASE, dir)
  if (!fs.existsSync(styleDir)) continue

  const files = fs.readdirSync(styleDir)
    .filter(f => f.endsWith('.tsx') && f !== 'index.tsx')

  if (files.length > 0) {
    unifiedExports.push(`export * from './${dir}'`)
  }
}

if (unifiedExports.length > 0) {
  const unifiedContent = HEADER + unifiedExports.join('\n') + '\n'
  fs.writeFileSync(path.join(ICON_BASE, 'index.ts'), unifiedContent)
  console.log(`✅ icons/index.ts — unified barrel (${unifiedExports.length} style dirs)`)
}

// Generate top-level Icon/index.ts
const topLevelPath = path.resolve(__dirname, '../src/components/Icon/index.ts')
const topLevelContent = HEADER +
  `export type { IconProps } from './Icon.types'\n` +
  `export { ICON_SIZES } from './Icon.types'\n` +
  `\n// ⚠️  For tree-shaking, prefer direct imports:\n` +
  `//   import { SearchLine } from '@/components/Icon/icons/line/Search'\n` +
  `// The barrel re-export below is for the doc page only.\n` +
  `export * from './icons'\n`

fs.writeFileSync(topLevelPath, topLevelContent)
console.log(`✅ Icon/index.ts — top-level public API`)

console.log(`\n📊 Total: ${totalExports} icon exports generated`)
