import { useState, useMemo } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { TextInput } from '../../components/TextInput/TextInput'
import { Button } from '../../components/Button/Button'
import { ICON_SIZES } from '../../components/Icon/Icon.types'
import type { IconProps } from '../../components/Icon/Icon.types'
import NetworkTierCoin from '../../components/Icon/icons/specialty/NetworkTierCoin'

// ── Dynamic icon loading ─────────────────────────────────────
// We import all generated icons eagerly via Vite's import.meta.glob.
// Each module default-exports a React component.

type IconModule = { default: React.ComponentType<IconProps> }

const lineModules = import.meta.glob<IconModule>(
  '../../components/Icon/icons/line/*.tsx',
  { eager: true }
)

const solidModules = import.meta.glob<IconModule>(
  '../../components/Icon/icons/solid/*.tsx',
  { eager: true }
)

const specialtyModules = import.meta.glob<IconModule>(
  '../../components/Icon/icons/specialty/*.tsx',
  { eager: true }
)

const profileModules = import.meta.glob<IconModule>(
  '../../components/Icon/icons/profile/*.tsx',
  { eager: true }
)

interface IconEntry {
  name: string          // PascalCase base name, e.g. "ArchiveBox"
  Component: React.ComponentType<IconProps>
}

function parseModules(modules: Record<string, IconModule>): IconEntry[] {
  return Object.entries(modules)
    .filter(([path]) => !path.endsWith('index.tsx'))
    .map(([path, mod]) => {
      const filename = path.split('/').pop()!.replace('.tsx', '')
      return { name: filename, Component: mod.default }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

// ── Search icon (inline) ─────────────────────────────────────
function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// ── Icon Card ────────────────────────────────────────────────
type IconStyle = 'line' | 'solid' | 'specialty' | 'profile' | 'network-tier'

function IconCard({
  entry,
  previewSize,
  style,
  previewColor,
}: {
  entry: IconEntry
  previewSize: keyof typeof ICON_SIZES | number
  style: IconStyle
  previewColor: string
}) {
  const [copied, setCopied] = useState(false)
  const suffixMap: Record<IconStyle, string> = { line: 'Line', solid: 'Solid', specialty: 'Specialty', profile: 'Profile' }
  const suffix = suffixMap[style]
  const importPath = `import { ${entry.name}${suffix} } from '@/components/Icon/icons/${style}/${entry.name}'`

  const handleCopy = () => {
    navigator.clipboard.writeText(importPath)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex flex-col items-center gap-xxs p-xs rounded-xs border border-neutral-border-light hover:border-primary hover:bg-primary-subtle/30 transition-all cursor-pointer group"
      title={copied ? 'Copied!' : `Click to copy import\n${importPath}`}
    >
      <div className="flex items-center justify-center" style={{ height: (style === 'specialty' || style === 'profile') ? 48 : 40 }}>
        <entry.Component size={previewSize as any} color={previewColor} />
      </div>
      <p className="font-default text-[11px] text-neutral-text-dark text-center leading-tight truncate w-full group-hover:text-primary">
        {entry.name}
      </p>
      {copied && (
        <span className="font-default text-[10px] text-success font-medium">Copied!</span>
      )}
    </button>
  )
}

// ── Main Page ────────────────────────────────────────────────
const PREVIEW_COLORS = [
  { label: 'Default',  value: 'currentColor', bg: '#000000' },
  { label: 'Orange',   value: '#fd5201',      bg: '#fd5201' },
  { label: 'Blue',     value: '#245eff',      bg: '#245eff' },
  { label: 'Green',    value: '#5bb95e',      bg: '#5bb95e' },
  { label: 'Red',      value: '#f23c3c',      bg: '#f23c3c' },
  { label: 'Grey',     value: '#949494',      bg: '#949494' },
] as const

export function IconPage() {
  const [search, setSearch] = useState('')
  const [style, setStyle] = useState<IconStyle>('line')
  const [previewSize, setPreviewSize] = useState<keyof typeof ICON_SIZES | number>('lg')
  const [previewColor, setPreviewColor] = useState<string>('currentColor')

  const lineIcons = useMemo(() => parseModules(lineModules), [])
  const solidIcons = useMemo(() => parseModules(solidModules), [])
  const specialtyIcons = useMemo(() => parseModules(specialtyModules).filter(i => i.name !== 'NetworkTierCoin'), [])
  const profileIcons = useMemo(() => parseModules(profileModules), [])

  // Network Tier Coin color variants
  const NETWORK_TIER_VARIANTS = [
    { label: 'In-Network',     back: '#C2E5C3', front: '#5BB95E' },
    { label: 'Tier 2',          back: '#FFE78F', front: '#F5C000' },
    { label: 'Tier 3',          back: '#CEB5F7', front: '#8242EB' },
    { label: 'Out-of-Network',  back: '#FAB3B3', front: '#F23C3C' },
  ] as const

  const iconsByStyle: Record<IconStyle, IconEntry[]> = { line: lineIcons, solid: solidIcons, specialty: specialtyIcons, profile: profileIcons, 'network-tier': [] }
  const icons = iconsByStyle[style]
  const totalCount = lineIcons.length + solidIcons.length + specialtyIcons.length + profileIcons.length + NETWORK_TIER_VARIANTS.length

  const filtered = useMemo(() => {
    if (!search.trim()) return icons
    const q = search.toLowerCase()
    return icons.filter(i => i.name.toLowerCase().includes(q))
  }, [icons, search])

  return (
    <DocLayout
      title="Icons"
      description={`${totalCount > 0 ? `${totalCount} icons (${lineIcons.length} Line + ${solidIcons.length} Solid${specialtyIcons.length ? ` + ${specialtyIcons.length} Specialty` : ''}${profileIcons.length ? ` + ${profileIcons.length} Profile` : ''} + ${NETWORK_TIER_VARIANTS.length} Network Tier)` : 'Icon library'} — exported from Figma as SVG React components. Click any icon to copy its import statement.`}
    >
      {totalCount === 0 ? (
        <Section title="No icons generated yet" description="Run the icon pipeline to generate components from Figma SVGs.">
          <div className="rounded-xs border border-neutral-border-light p-l bg-neutral-subtle">
            <p className="font-default text-[14px] text-neutral-text-dark mb-xs">
              Follow these steps to populate the icon library:
            </p>
            <ol className="font-mono text-[13px] text-neutral-text-dark space-y-xxs list-decimal list-inside">
              <li>Export Line icons from Figma → <code className="bg-neutral-subtle px-xxs rounded-xxxs">figma-icons/line/</code></li>
              <li>Export Solid icons from Figma → <code className="bg-neutral-subtle px-xxs rounded-xxxs">figma-icons/solid/</code></li>
              <li>Run <code className="bg-neutral-subtle px-xxs rounded-xxxs text-primary">npm run icons:scan-colors</code> to find hardcoded colors</li>
              <li>Update <code className="bg-neutral-subtle px-xxs rounded-xxxs">scripts/svgr.config.js</code> with replaceAttrValues</li>
              <li>Run <code className="bg-neutral-subtle px-xxs rounded-xxxs text-primary">npm run icons:build</code></li>
            </ol>
          </div>
        </Section>
      ) : (
        <>
          {/* Toolbar */}
          <Section title="Browse" description="Search by name. Click any icon to copy its import path.">
            <div className="flex items-center gap-xs flex-wrap mb-m">
              {/* Search */}
              <div className="flex-1 min-w-[200px]">
                <TextInput
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search icons..."
                  iconLeft={<SearchIcon />}
                  size="sm"
                />
              </div>

              {/* Style toggle */}
              <div className="flex gap-xxs">
                <Button
                  variant={style === 'line' ? 'secondary' : 'outline'}
                  size="xs"
                  onClick={() => { setStyle('line'); setPreviewSize('lg') }}
                >
                  Line ({lineIcons.length})
                </Button>
                <Button
                  variant={style === 'solid' ? 'secondary' : 'outline'}
                  size="xs"
                  onClick={() => { setStyle('solid'); setPreviewSize('lg') }}
                >
                  Solid ({solidIcons.length})
                </Button>
                {specialtyIcons.length > 0 && (
                  <Button
                    variant={style === 'specialty' ? 'secondary' : 'outline'}
                    size="xs"
                    onClick={() => { setStyle('specialty'); setPreviewSize(32) }}
                  >
                    Specialty ({specialtyIcons.length})
                  </Button>
                )}
                {profileIcons.length > 0 && (
                  <Button
                    variant={style === 'profile' ? 'secondary' : 'outline'}
                    size="xs"
                    onClick={() => { setStyle('profile'); setPreviewSize(32) }}
                  >
                    Profile ({profileIcons.length})
                  </Button>
                )}
                <Button
                  variant={style === 'network-tier' ? 'secondary' : 'outline'}
                  size="xs"
                  onClick={() => { setStyle('network-tier'); setPreviewSize(32) }}
                >
                  Network Tier ({NETWORK_TIER_VARIANTS.length})
                </Button>
              </div>

              {/* Size selector */}
              <div className="flex items-center gap-xxs">
                <span className="font-default text-[12px] text-neutral-text-light">Size:</span>
                {(style === 'specialty' || style === 'profile') ? (
                  <>
                    <Button variant={previewSize === 32 ? 'secondary' : 'ghost'} size="xs" onClick={() => setPreviewSize(32)}>32</Button>
                    <Button variant={previewSize === 40 ? 'secondary' : 'ghost'} size="xs" onClick={() => setPreviewSize(40)}>40</Button>
                  </>
                ) : (
                  (Object.keys(ICON_SIZES) as Array<keyof typeof ICON_SIZES>).map((s) => (
                    <Button
                      key={s}
                      variant={previewSize === s ? 'secondary' : 'ghost'}
                      size="xs"
                      onClick={() => setPreviewSize(s)}
                    >
                      {s}
                    </Button>
                  ))
                )}
              </div>

              {/* Color selector */}
              {(style === 'line' || style === 'solid') && (
                <div className="flex items-center gap-xxs">
                  <span className="font-default text-[12px] text-neutral-text-light">Color:</span>
                  {PREVIEW_COLORS.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setPreviewColor(c.value)}
                      title={`${c.label} (${c.value})`}
                      className="relative w-[22px] h-[22px] rounded-full border-2 transition-all cursor-pointer flex items-center justify-center"
                      style={{
                        backgroundColor: c.bg,
                        borderColor: previewColor === c.value ? '#fd5201' : '#e0e0e0',
                        transform: previewColor === c.value ? 'scale(1.15)' : 'scale(1)',
                      }}
                    >
                      {c.value === 'currentColor' && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <line x1="0" y1="10" x2="10" y2="0" stroke="white" strokeWidth="1.5" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Results count — hide for network-tier (has its own count) */}
            {style !== 'network-tier' && (
              <p className="font-default text-[13px] text-neutral-text-light mb-xs">
                {filtered.length} of {icons.length} icons
                {search && ` matching "${search}"`}
              </p>
            )}

            {/* Icon grid — standard styles */}
            {style !== 'network-tier' && (
              <>
                {filtered.length > 0 ? (
                  <div className="grid gap-xxs" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))' }}>
                    {filtered.map(entry => (
                      <IconCard
                        key={entry.name}
                        entry={entry}
                        previewSize={previewSize}
                        style={style}
                        previewColor={(style === 'line' || style === 'solid') ? previewColor : 'currentColor'}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center py-xxl">
                    <p className="font-default text-[14px] text-neutral-text-light">
                      No icons match "{search}"
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Icon grid — Network Tier Coins (own category) */}
            {style === 'network-tier' && (
              <>
                <p className="font-default text-[12px] text-neutral-text-light mb-xs">
                  Dual-color coin icon used inside Chip for network tier badges. Requires <code className="bg-neutral-subtle px-xxs rounded-xxxs">backColor</code> and <code className="bg-neutral-subtle px-xxs rounded-xxxs">frontColor</code> props instead of the standard <code className="bg-neutral-subtle px-xxs rounded-xxxs">color</code> prop.
                </p>
                <p className="font-default text-[13px] text-neutral-text-light mb-xs">
                  {NETWORK_TIER_VARIANTS.length} variants
                </p>
                <div className="grid gap-xxs" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))' }}>
                  {NETWORK_TIER_VARIANTS.map((tier) => {
                    const importStr = `import NetworkTierCoin from '@/components/Icon/icons/specialty/NetworkTierCoin'\n<NetworkTierCoin backColor="${tier.back}" frontColor="${tier.front}" />`
                    return (
                      <button
                        key={tier.label}
                        onClick={() => { navigator.clipboard.writeText(importStr) }}
                        className="flex flex-col items-center gap-xxs p-xs rounded-xs border border-neutral-border-light hover:border-primary hover:bg-primary-subtle/30 transition-all cursor-pointer group"
                        title={`Click to copy import\n${importStr}`}
                      >
                        <div className="flex items-center justify-center" style={{ height: 48 }}>
                          <NetworkTierCoin backColor={tier.back} frontColor={tier.front} size={previewSize as any} />
                        </div>
                        <p className="font-default text-[11px] text-neutral-text-dark text-center leading-tight truncate w-full group-hover:text-primary">
                          {tier.label}
                        </p>
                      </button>
                    )
                  })}
                </div>
              </>
            )}
          </Section>

          {/* Usage guide */}
          <Section title="Usage" description="How to use icons in your components.">
            <div className="rounded-xs border border-neutral-border-light overflow-hidden">
              <div className="bg-neutral-subtle px-m py-xs border-b border-neutral-border-light">
                <p className="font-default font-medium text-[13px] text-neutral-text-dark">Import pattern (tree-shakeable)</p>
              </div>
              <pre className="px-m py-s font-mono text-[13px] text-neutral-text-dark overflow-x-auto">
{`// Direct import — only this icon ships in the bundle
import { SearchLine } from '@/components/Icon/icons/line/Search'
import { SearchSolid } from '@/components/Icon/icons/solid/Search'

// Use with DS size tokens
<SearchLine size="md" />              // 20px (default)
<SearchLine size="lg" color="#fd5201" /> // 24px, custom color

// Inside Button
<Button iconLeft={<SearchLine size="md" />}>Search</Button>

// Inside TextInput
<TextInput iconLeft={<SearchLine size="md" />} />`}
              </pre>
            </div>

            <div className="rounded-xs border border-neutral-border-light overflow-hidden mt-xs">
              <div className="bg-neutral-subtle px-m py-xs border-b border-neutral-border-light">
                <p className="font-default font-medium text-[13px] text-neutral-text-dark">Size tokens</p>
              </div>
              <div className="px-m py-s">
                <div className="grid grid-cols-5 gap-xs">
                  {(Object.entries(ICON_SIZES) as [keyof typeof ICON_SIZES, number][]).map(([name, px]) => (
                    <div key={name} className="flex flex-col items-center gap-xxs">
                      <div
                        className="rounded-xxxs border border-neutral-border-light flex items-center justify-center"
                        style={{ width: px + 16, height: px + 16 }}
                      >
                        <div style={{ width: px, height: px }} className="bg-neutral-subtle rounded-xxxs" />
                      </div>
                      <p className="font-default font-medium text-[12px] text-neutral-text-dark">{name}</p>
                      <p className="font-default text-[11px] text-neutral-text-light">{px}px</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </>
      )}
    </DocLayout>
  )
}
