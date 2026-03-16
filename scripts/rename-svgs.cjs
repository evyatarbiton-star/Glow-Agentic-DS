#!/usr/bin/env node

/**
 * rename-svgs.js
 *
 * Converts Figma-exported SVG filenames from spaced names to PascalCase.
 *   "Archive Box.svg"  →  "ArchiveBox.svg"
 *   "Bell Badge.svg"   →  "BellBadge.svg"
 *   "wi-fi off.svg"    →  "WiFiOff.svg"
 *
 * Scans: figma-icons/line/ and figma-icons/solid/
 */

const fs = require('fs')
const path = require('path')

const DIRS = [
  path.resolve(__dirname, '../figma-icons/line'),
  path.resolve(__dirname, '../figma-icons/solid'),
]

function toPascalCase(filename) {
  return filename
    // Remove .svg extension
    .replace(/\.svg$/i, '')
    // Replace hyphens, underscores, dots, and multiple spaces with a single space
    .replace(/[-_.]+/g, ' ')
    // Trim whitespace
    .trim()
    // Capitalize first letter of each word and join
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
    // Handle edge cases: remove any remaining non-alphanumeric (except leading chars)
    .replace(/[^a-zA-Z0-9]/g, '')
    // Add .svg back
    + '.svg'
}

let totalRenamed = 0
let totalSkipped = 0

for (const dir of DIRS) {
  if (!fs.existsSync(dir)) {
    console.log(`⏭  Skipping ${path.relative(process.cwd(), dir)} (not found)`)
    continue
  }

  const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.svg'))
  console.log(`\n📂 ${path.relative(process.cwd(), dir)} — ${files.length} SVGs`)

  for (const file of files) {
    const newName = toPascalCase(file)

    if (file === newName) {
      totalSkipped++
      continue
    }

    const oldPath = path.join(dir, file)
    const newPath = path.join(dir, newName)

    // Check for collision
    if (fs.existsSync(newPath) && file !== newName) {
      console.warn(`  ⚠️  Collision: "${file}" → "${newName}" (already exists, skipping)`)
      totalSkipped++
      continue
    }

    fs.renameSync(oldPath, newPath)
    console.log(`  ✅ ${file} → ${newName}`)
    totalRenamed++
  }
}

console.log(`\n📊 Done: ${totalRenamed} renamed, ${totalSkipped} skipped`)
