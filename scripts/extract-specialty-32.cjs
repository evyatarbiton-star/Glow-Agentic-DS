#!/usr/bin/env node

/**
 * extract-specialty-32.cjs
 *
 * Extracts the 32px variant from Figma-exported specialty icon SVGs.
 *
 * Figma exports the component set as a single 80×140 SVG containing both
 * Size=L (40px) and Size=S (32px) variants stacked vertically, plus a
 * purple dashed border rect.
 *
 * This script:
 * 1. Reads each SVG from figma-icons/specialty/
 * 2. Finds the <g clip-path> that contains the 32×32 variant
 *    (identified by a clip-path rect with width="32" height="32")
 * 3. Extracts that group and offsets coordinates to 0,0
 * 4. Writes a clean 32×32 SVG
 */

const fs = require('fs')
const path = require('path')

const INPUT_DIR = path.resolve(__dirname, '../figma-icons/specialty')
const OUTPUT_DIR = INPUT_DIR // overwrite in place

function extractSmallVariant(svgContent, filename) {
  // Find all top-level <g clip-path="..."> groups
  // The 32px variant is the second clip-path group (after the 40px one)

  // Strategy: find the clipPath def that has width="32" height="32"
  // Then find the <g> that references it, and extract its contents

  // Step 1: Find the clip-path ID for the 32px variant
  const clipPathRegex = /<clipPath id="([^"]+)">\s*<rect[^>]*width="32"[^>]*height="32"[^>]*/g
  const clipMatch = clipPathRegex.exec(svgContent)

  if (!clipMatch) {
    console.log(`  ⚠️  ${filename}: no 32×32 clip-path found, skipping`)
    return null
  }

  const clipId32 = clipMatch[1]

  // Step 2: Find the transform on the 32px clip-path rect to know the offset
  const clipDefRegex = new RegExp(
    `<clipPath id="${clipId32}">\\s*<rect[^>]*?(?:transform="translate\\(([^)]+)\\)")?[^>]*/>`,
    's'
  )
  const clipDefMatch = clipDefRegex.exec(svgContent)

  // Get the offset from the clip-path rect's transform or position
  let offsetX = 0, offsetY = 0

  if (clipDefMatch) {
    const rectStr = clipDefMatch[0]

    // Check for transform="translate(x y)"
    const transformMatch = rectStr.match(/transform="translate\(([^)]+)\)"/)
    if (transformMatch) {
      const parts = transformMatch[1].split(/[\s,]+/)
      offsetX = parseFloat(parts[0]) || 0
      offsetY = parseFloat(parts[1]) || 0
    }

    // Also check for x= and y= attributes on the rect
    if (offsetX === 0 && offsetY === 0) {
      const xMatch = rectStr.match(/\bx="([^"]+)"/)
      const yMatch = rectStr.match(/\by="([^"]+)"/)
      if (xMatch) offsetX = parseFloat(xMatch[1]) || 0
      if (yMatch) offsetY = parseFloat(yMatch[1]) || 0
    }
  }

  // Step 3: Find the <g clip-path="url(#clipId32)"> and extract its content
  // The structure is: <g clip-path="url(#outer)"> <g clip-path="url(#inner)"> ... </g> </g>
  // We need to find the outermost <g> that eventually references our 32px clip

  // Find the group that uses this clip-path
  const groupRegex = new RegExp(
    `<g clip-path="url\\(#${clipId32}\\)">[\\s\\S]*?</g>`,
    'g'
  )
  const groupMatch = groupRegex.exec(svgContent)

  if (!groupMatch) {
    console.log(`  ⚠️  ${filename}: couldn't find group for clip ${clipId32}, skipping`)
    return null
  }

  // Step 4: Find the parent <g> that wraps this one (the outer clip-path group)
  // We need to go up one level to get the full 32px variant content
  // Look for a <g clip-path="url(#something)"> that contains our match

  // Actually, let's find ALL defs clip-paths and identify the 32px hierarchy
  // The pattern is: outer clip 32x32 > inner clip (actual bounds) > icon paths

  // Find all clip-path defs
  const allClipPaths = []
  const clipDefRegexAll = /<clipPath id="([^"]+)">\s*<rect([^/]*)\/>/g
  let m
  while ((m = clipDefRegexAll.exec(svgContent)) !== null) {
    const id = m[1]
    const attrs = m[2]
    const w = attrs.match(/width="([^"]+)"/)
    const h = attrs.match(/height="([^"]+)"/)
    const transform = attrs.match(/transform="translate\(([^)]+)\)"/)
    allClipPaths.push({
      id,
      width: w ? parseFloat(w[1]) : 0,
      height: h ? parseFloat(h[1]) : 0,
      transform: transform ? transform[1] : null,
    })
  }

  // Find the 32×32 clip and its associated inner clip
  // They appear in pairs in the defs section
  const clip32Idx = allClipPaths.findIndex(c => c.width === 32 && c.height === 32)
  if (clip32Idx === -1) {
    console.log(`  ⚠️  ${filename}: no 32×32 clip found in defs`)
    return null
  }

  const clip32 = allClipPaths[clip32Idx]
  const clipInner = allClipPaths[clip32Idx + 1] // the next one is the inner bounds

  // Parse the offset from the 32×32 clip's transform
  let tx = 0, ty = 0
  if (clip32.transform) {
    const parts = clip32.transform.split(/[\s,]+/)
    tx = parseFloat(parts[0]) || 0
    ty = parseFloat(parts[1]) || 0
  }

  // Step 5: Extract the second top-level <g clip-path> (the 32px variant)
  // Split the SVG to find top-level g groups after the first rect (purple border)
  const topGroups = []
  const topGroupRegex = /<g clip-path="url\(#[^"]+\)"[\s\S]*?<\/g>\s*<\/g>/g
  let gm
  while ((gm = topGroupRegex.exec(svgContent)) !== null) {
    topGroups.push(gm[0])
  }

  if (topGroups.length < 2) {
    console.log(`  ⚠️  ${filename}: expected 2 top-level groups, found ${topGroups.length}`)
    return null
  }

  const smallGroup = topGroups[1] // second group is the 32px variant

  // Step 6: Extract the inner content (paths) and adjust coordinates
  // Get everything inside the inner clip-path group
  const innerContentRegex = /<g clip-path="url\(#[^"]+\)">\s*<g clip-path="url\(#[^"]+\)">([\s\S]*?)<\/g>\s*<\/g>/
  const innerMatch = innerContentRegex.exec(smallGroup)

  if (!innerMatch) {
    console.log(`  ⚠️  ${filename}: couldn't extract inner content`)
    return null
  }

  let innerContent = innerMatch[1].trim()

  // We need the inner clip-path's transform to know the actual offset
  let innerTx = 0, innerTy = 0
  if (clipInner && clipInner.transform) {
    const parts = clipInner.transform.split(/[\s,]+/)
    innerTx = parseFloat(parts[0]) || 0
    innerTy = parseFloat(parts[1]) || 0
  }

  // The content coordinates are absolute in the 80×140 frame
  // We need to subtract the offset to normalize to 0,0
  // The 32px variant starts at approximately x=24, y=84 (or x=56, y=84 for mirrored ones)

  // Check if the outer clip has a matrix transform (for mirrored icons)
  const matrixMatch = smallGroup.match(/transform="matrix\(([^)]+)\)"/)
  let isMirrored = false
  if (matrixMatch) {
    const vals = matrixMatch[1].split(/[\s,]+/).map(Number)
    if (vals[0] === -1) isMirrored = true
  }

  // Build a clean 32×32 SVG
  // We'll use a viewBox that matches the clip-path bounds
  // The 32px clip is at transform translate(tx, ty)
  // So viewBox should be "tx ty 32 32"

  // For the inner clip, the content offset is (innerTx, innerTy)
  // But the actual viewBox of the icon is the 32×32 region

  // Simplest approach: use the 32×32 clip-path's position as viewBox origin
  const vbX = tx
  const vbY = ty

  // Collect defs we need (only the clip-paths used by the 32px variant)
  const usedClipIds = []
  const clipRefRegex = /clip-path="url\(#([^)]+)\)"/g
  let cr
  while ((cr = clipRefRegex.exec(smallGroup)) !== null) {
    usedClipIds.push(cr[1])
  }

  let defsContent = ''
  for (const id of usedClipIds) {
    const defRegex = new RegExp(`<clipPath id="${id}">[\\s\\S]*?</clipPath>`, 'g')
    const defMatch = defRegex.exec(svgContent)
    if (defMatch) {
      defsContent += '  ' + defMatch[0] + '\n'
    }
  }

  const newSvg = `<svg width="32" height="32" viewBox="${vbX} ${vbY} 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
${smallGroup}
${defsContent ? `<defs>\n${defsContent}</defs>\n` : ''}</svg>
`

  return newSvg
}

// ── Main ──

const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.svg'))
console.log(`📂 ${INPUT_DIR}`)
console.log(`   Found ${files.length} SVGs\n`)

let extracted = 0
let skipped = 0

for (const file of files) {
  const filePath = path.join(INPUT_DIR, file)
  const content = fs.readFileSync(filePath, 'utf-8')

  // Check if this is already a clean 32×32 SVG (e.g., PrimaryCare.svg we made earlier)
  const viewBoxMatch = content.match(/viewBox="([^"]+)"/)
  if (viewBoxMatch) {
    const [, vb] = viewBoxMatch
    const parts = vb.split(/\s+/)
    const w = parseFloat(parts[2])
    const h = parseFloat(parts[3])
    if (w <= 40 && h <= 40) {
      console.log(`  ✅ ${file}: already clean (${w}×${h}), keeping`)
      skipped++
      continue
    }
  }

  const result = extractSmallVariant(content, file)
  if (result) {
    fs.writeFileSync(filePath, result)
    console.log(`  ✅ ${file}: extracted 32px variant`)
    extracted++
  } else {
    skipped++
  }
}

console.log(`\n📊 Done: ${extracted} extracted, ${skipped} skipped`)
