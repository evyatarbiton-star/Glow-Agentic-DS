#!/usr/bin/env node
// ============================================================
// Glow DS — Manifest JSON Generator
//
// Transforms src/manifest.ts into src/manifest.json so the MCP
// server can load component data without parsing TypeScript at
// runtime. The .ts file remains the authoring format; the .json
// file is auto-generated and committed to git.
//
// Run:
//   node scripts/generate-manifest-json.cjs
//
// Runs automatically via `npm run prebuild`.
// ============================================================

const fs = require('fs')
const os = require('os')
const path = require('path')
const esbuild = require('esbuild')

const REPO_ROOT = path.resolve(__dirname, '..')
const MANIFEST_TS = path.join(REPO_ROOT, 'src/manifest.ts')
const OUTPUT_JSON = path.join(REPO_ROOT, 'src/manifest.json')

function transpile() {
  const result = esbuild.buildSync({
    entryPoints: [MANIFEST_TS],
    bundle: true,
    format: 'cjs',
    platform: 'node',
    target: 'node18',
    write: false,
  })
  return result.outputFiles[0].text
}

function evaluateManifest(bundledCode) {
  const tempPath = path.join(os.tmpdir(), `glow-manifest-${process.pid}-${Date.now()}.cjs`)
  fs.writeFileSync(tempPath, bundledCode)
  try {
    const mod = require(tempPath)
    return mod.manifest ?? mod.default ?? mod
  } finally {
    try { fs.unlinkSync(tempPath) } catch { /* best effort */ }
  }
}

function main() {
  const bundled = transpile()
  const manifest = evaluateManifest(bundled)

  if (!manifest || typeof manifest !== 'object') {
    console.error('❌ Expected `manifest` export from src/manifest.ts')
    process.exit(1)
  }

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(manifest, null, 2) + '\n')

  const componentCount = Array.isArray(manifest.components) ? manifest.components.length : 0
  console.log(
    `✅ Generated manifest.json ` +
    `(${componentCount} components) → ` +
    path.relative(process.cwd(), OUTPUT_JSON)
  )
}

main()
