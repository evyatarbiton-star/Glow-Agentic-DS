import { useState, type ReactNode } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Chip, ChipGroup } from '../../components/Chip'
import type { ChipVariant, ChipColor, ChipSize } from '../../components/Chip'
import { Toggle } from '../../components/Toggle'
import { RadioButton } from '../../components/RadioButton'
import { Select } from '../../components/Select'
import { TextInput } from '../../components/TextInput'
import CheckCrFrLine from '../../components/Icon/icons/line/CheckCrFr'
import BellLine from '../../components/Icon/icons/line/Bell'
import StarLine from '../../components/Icon/icons/line/Star'

// ── Mini helpers ─────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xs">
      {children}
    </p>
  )
}

function Row({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="mb-l last:mb-0">
      {label && <Label>{label}</Label>}
      <div className="flex flex-wrap items-center gap-s">{children}</div>
    </div>
  )
}

// ── Code block ───────────────────────────────────────────────
function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="relative group rounded-xs bg-neutral overflow-hidden">
      <pre className="p-m text-[13px] text-neutral-subtle leading-relaxed overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={copy}
        className="absolute top-s right-s opacity-0 group-hover:opacity-100 transition-opacity
                   bg-neutral-hover text-neutral-text-negative text-[11px] font-default font-medium
                   px-xs py-[4px] rounded-xxxs cursor-pointer"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

// ── Example icons ───────────────────────────────────────────
function CircleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <circle cx="5" cy="5" r="4" fill="currentColor" />
    </svg>
  )
}

// ── Network Tier Coin Icon (DS icon) ────────────────────────
import NetworkTierCoin from '../../components/Icon/icons/specialty/NetworkTierCoin'

// ── Network tier color definitions ──────────────────────────
// From Figma Web DS node 118:10794
const networkTiers = [
  { key: 'in-network',     label: 'In-Network',      back: '#C2E5C3', front: '#5BB95E' },
  { key: 'tier-2',         label: 'Tier 2',           back: '#FFE78F', front: '#F5C000' },
  { key: 'tier-3',         label: 'Tier 3',           back: '#CEB5F7', front: '#8242EB' },
  { key: 'other',          label: 'Other Network',    back: '#D3DFFF', front: '#245EFF' },
  { key: 'unknown',        label: 'Unknown',          back: '#E0E0E0', front: '#B3B3B3' },
  { key: 'out-of-network', label: 'Out-of-Network',   back: '#FAB3B3', front: '#F23C3C' },
] as const

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5l1.85 3.75L14 5.93l-2.98 2.9.7 4.12L8 10.88l-3.72 2.07.7-4.12L2 5.93l4.15-.68L8 1.5Z" fill="currentColor" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8.5L6.5 11.5L12.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Props Table ──────────────────────────────────────────────
const chipPropsData = [
  { prop: 'variant',   type: '"subtle" | "outline" | "filled"',                  default: '"subtle"',   description: 'Visual style — subtle (soft fill) | outline (border) | filled (solid)' },
  { prop: 'color',     type: '"neutral" | "success" | "error" | "info" | "warning" | "recommended" | "hsa" | "lfsa"', default: '"neutral"', description: 'Color family — maps to semantic color tokens' },
  { prop: 'size',      type: '"sm" | "md" | "lg"',                               default: '"md"',       description: 'Height: sm=28px, md=32px, lg=36px' },
  { prop: 'selected',  type: 'boolean',                                           default: 'false',      description: 'Selected/active state — inverts colors' },
  { prop: 'removable', type: 'boolean',                                           default: 'false',      description: 'Show remove (X) button' },
  { prop: 'onRemove',  type: '() => void',                                        default: '—',          description: 'Callback when remove button is clicked' },
  { prop: 'disabled',  type: 'boolean',                                           default: 'false',      description: 'Disable all interactions' },
  { prop: 'iconLeft',  type: 'ReactNode',                                         default: '—',          description: 'Icon before label' },
  { prop: 'onClick',   type: '(e) => void',                                       default: '—',          description: 'Click handler — makes chip interactive (hover/focus states)' },
  { prop: 'children',  type: 'ReactNode',                                         default: 'required',   description: 'Chip label text' },
]

const groupPropsData = [
  { prop: 'gap',      type: 'number',     default: '8',     description: 'Gap between chips in px (default: spacing.xxs)' },
  { prop: 'wrap',     type: 'boolean',    default: 'true',  description: 'Allow wrapping to multiple lines' },
  { prop: 'children', type: 'ReactNode',  default: 'required', description: 'Chip elements' },
]

// ══════════════════════════════════════════════════════════════
// ChipDoc — Documentation page
// ══════════════════════════════════════════════════════════════
export function ChipDoc() {
  // Interactive demos
  const [selectedFilter, setSelectedFilter] = useState<string | null>('React')
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set(['Medical']))
  const [tags, setTags] = useState(['React', 'TypeScript', 'Vite', 'Tailwind'])

  const toggleFilter = (name: string) => {
    setSelectedFilter(prev => prev === name ? null : name)
  }

  const toggleMulti = (name: string) => {
    setSelectedFilters(prev => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })
  }

  const removeTag = (tag: string) => {
    setTags(prev => prev.filter(t => t !== tag))
  }

  // ── Playground state ──────────────────────────────────────
  const [pgVariant, setPgVariant] = useState<ChipVariant>('subtle')
  const [pgColor, setPgColor] = useState<ChipColor>('neutral')
  const [pgSize, setPgSize] = useState<ChipSize>('md')
  const [pgSelected, setPgSelected] = useState(false)
  const [pgDisabled, setPgDisabled] = useState(false)
  const [pgRemovable, setPgRemovable] = useState(false)
  const [pgIconLeft, setPgIconLeft] = useState<string>('none')
  const [pgLabel, setPgLabel] = useState('Chip text')

  const iconOptions: { key: string; label: string; node: ReactNode | null }[] = [
    { key: 'none', label: 'None', node: null },
    { key: 'check', label: 'Check', node: <CheckCrFrLine size="sm" /> },
    { key: 'bell', label: 'Bell', node: <BellLine size="sm" /> },
    { key: 'star', label: 'Star', node: <StarLine size="sm" /> },
  ]

  const pgIconNode = iconOptions.find(o => o.key === pgIconLeft)?.node ?? null

  return (
    <DocLayout
      title="Chip"
      description="A compact label for categorization, filtering, and selection. Use Chip for tags, filters, and status indicators — not for actions (use Button for actions)."
    >
      {/* ── Playground ── */}
      <Section title="Playground" description="Configure a chip interactively. Use the controls on the right to change any prop.">
        <div className="flex rounded-xs overflow-hidden" style={{ minHeight: 360, border: '1px solid #ededed' }}>

          {/* Left — Preview */}
          <div className="flex-1 flex items-center justify-center bg-neutral-negative" style={{ borderRight: '1px dashed #d4d4d4' }}>
            <Chip
              variant={pgVariant}
              color={pgColor}
              size={pgSize}
              selected={pgSelected}
              disabled={pgDisabled}
              removable={pgRemovable}
              onRemove={pgRemovable ? () => {} : undefined}
              iconLeft={pgIconNode}
              onClick={() => {}}
            >
              {pgLabel}
            </Chip>
          </div>

          {/* Right — Controls */}
          <div className="w-[300px] shrink-0 bg-neutral-subtle p-m space-y-l overflow-y-auto" style={{ maxHeight: 440 }}>

            {/* ── Appearance ── */}
            <div className="space-y-s">
              <p className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">Appearance</p>

              <div>
                <Label>Variant</Label>
                <div className="space-y-xxs">
                  {(['subtle', 'outline', 'filled'] as ChipVariant[]).map(v => (
                    <RadioButton key={v} name="pg-variant" label={v} checked={pgVariant === v} onChange={() => setPgVariant(v)} />
                  ))}
                </div>
              </div>

              <Select
                label="Color"
                size="sm"
                value={pgColor}
                onChange={v => setPgColor(v as ChipColor)}
                options={[
                  { value: 'neutral', label: 'Neutral' },
                  { value: 'success', label: 'Success' },
                  { value: 'error', label: 'Error' },
                  { value: 'info', label: 'Info' },
                  { value: 'warning', label: 'Warning' },
                  { value: 'recommended', label: 'Recommended' },
                  { value: 'hsa', label: 'HSA' },
                  { value: 'lfsa', label: 'LFSA' },
                ]}
              />

              <div>
                <Label>Size</Label>
                <div className="space-y-xxs">
                  {(['sm', 'md', 'lg'] as ChipSize[]).map(s => (
                    <RadioButton key={s} name="pg-size" label={`${s} (${s === 'sm' ? '28px' : s === 'md' ? '32px' : '36px'})`} checked={pgSize === s} onChange={() => setPgSize(s)} />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Content ── */}
            <div className="space-y-s">
              <p className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">Content</p>

              <TextInput
                label="Label"
                size="sm"
                value={pgLabel}
                onChange={e => setPgLabel(e.target.value)}
              />

              <Select
                label="Icon Left"
                size="sm"
                value={pgIconLeft}
                onChange={v => setPgIconLeft(v)}
                options={iconOptions.map(o => ({ value: o.key, label: o.label }))}
              />
            </div>

            {/* ── State ── */}
            <div className="space-y-s">
              <p className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">State</p>
              <div className="space-y-xs">
                <Toggle label="Selected" checked={pgSelected} onChange={() => setPgSelected(!pgSelected)} />
                <Toggle label="Disabled" checked={pgDisabled} onChange={() => setPgDisabled(!pgDisabled)} />
                <Toggle label="Removable" checked={pgRemovable} onChange={() => setPgRemovable(!pgRemovable)} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Variants ── */}
      <Section title="Variants" description="Three visual variants for different contexts.">
        <Row label="Subtle — soft fill, no border (default)">
          <Chip variant="subtle">React</Chip>
          <Chip variant="subtle">TypeScript</Chip>
          <Chip variant="subtle">Vite</Chip>
        </Row>
        <Row label="Outline — border, transparent background">
          <Chip variant="outline">Medical</Chip>
          <Chip variant="outline">Dental</Chip>
          <Chip variant="outline">Vision</Chip>
        </Row>
        <Row label="Filled — solid background, white text">
          <Chip variant="filled">Active</Chip>
          <Chip variant="filled">Pending</Chip>
          <Chip variant="filled">Archived</Chip>
        </Row>
      </Section>

      {/* ── Colors ── */}
      <Section title="Colors" description="Eight color families — semantic colors for meaning, plus special purpose colors for recommendations and benefit types.">
        <Row label="Neutral (default) — general purpose">
          <Chip color="neutral">Default</Chip>
          <Chip color="neutral" variant="outline">Outline</Chip>
          <Chip color="neutral" variant="filled">Filled</Chip>
        </Row>
        <Row label="Success — positive, active, approved">
          <Chip color="success">Active</Chip>
          <Chip color="success" variant="outline">Approved</Chip>
          <Chip color="success" variant="filled">Complete</Chip>
        </Row>
        <Row label="Error — negative, failed, critical">
          <Chip color="error">Failed</Chip>
          <Chip color="error" variant="outline">Overdue</Chip>
          <Chip color="error" variant="filled">Critical</Chip>
        </Row>
        <Row label="Info — informational, context">
          <Chip color="info">New</Chip>
          <Chip color="info" variant="outline">Updated</Chip>
          <Chip color="info" variant="filled">Info</Chip>
        </Row>
        <Row label="Warning — attention, caution">
          <Chip color="warning">Review</Chip>
          <Chip color="warning" variant="outline">Pending</Chip>
          <Chip color="warning" variant="filled">Attention</Chip>
        </Row>
        <Row label="Recommended — product recommendations (subtle=gradient, outline=bordered)">
          <Chip color="recommended">Top pick</Chip>
          <Chip color="recommended" variant="outline">Also recommended</Chip>
          <Chip color="recommended" variant="filled">Best match</Chip>
        </Row>
        <Row label="HSA — HSA-eligible items">
          <Chip color="hsa">HSA eligible</Chip>
          <Chip color="hsa" variant="outline">HSA</Chip>
          <Chip color="hsa" variant="filled">HSA</Chip>
        </Row>
        <Row label="LFSA — LFSA-eligible items">
          <Chip color="lfsa">LFSA eligible</Chip>
          <Chip color="lfsa" variant="outline">LFSA</Chip>
          <Chip color="lfsa" variant="filled">LFSA</Chip>
        </Row>
      </Section>

      {/* ── Sizes ── */}
      <Section title="Sizes" description="Three sizes — sm (28px), md (32px, default), lg (36px).">
        <Row>
          <Chip size="sm">Small</Chip>
          <Chip size="md">Medium</Chip>
          <Chip size="lg">Large</Chip>
        </Row>
        <Row label="Outline sizes">
          <Chip variant="outline" size="sm">Small</Chip>
          <Chip variant="outline" size="md">Medium</Chip>
          <Chip variant="outline" size="lg">Large</Chip>
        </Row>
      </Section>

      {/* ── Colors × Variants Matrix ── */}
      <Section title="Colors × Variants" description="All 24 combinations at a glance.">
        {(['subtle', 'outline', 'filled'] as ChipVariant[]).map(variant => (
          <Row key={variant} label={variant}>
            {(['neutral', 'success', 'error', 'info', 'warning', 'recommended', 'hsa', 'lfsa'] as ChipColor[]).map(color => (
              <Chip key={color} variant={variant} color={color}>
                {color}
              </Chip>
            ))}
          </Row>
        ))}
      </Section>

      {/* ── Selected State ── */}
      <Section title="Selected State" description="Click a chip to toggle selection. Selected chips invert their colors.">
        <Row label="Single select (choice chips)">
          {['React', 'Vue', 'Svelte', 'Angular'].map(name => (
            <Chip
              key={name}
              variant="outline"
              selected={selectedFilter === name}
              onClick={() => toggleFilter(name)}
            >
              {name}
            </Chip>
          ))}
        </Row>
        <Row label="Multi select (filter chips)">
          {['Medical', 'Dental', 'Vision', 'Mental Health'].map(name => (
            <Chip
              key={name}
              variant="outline"
              selected={selectedFilters.has(name)}
              onClick={() => toggleMulti(name)}
            >
              {name}
            </Chip>
          ))}
        </Row>
        <Row label="Selected with colors">
          <Chip variant="subtle" color="neutral" selected>Neutral</Chip>
          <Chip variant="subtle" color="success" selected>Success</Chip>
          <Chip variant="subtle" color="error" selected>Error</Chip>
          <Chip variant="subtle" color="info" selected>Info</Chip>
          <Chip variant="subtle" color="warning" selected>Warning</Chip>
          <Chip variant="subtle" color="recommended" selected>Recommended</Chip>
        </Row>
      </Section>

      {/* ── Removable ── */}
      <Section title="Removable" description="Add removable prop to show a close (X) button. Use for user-added tags.">
        <Row label="Removable tags — click X to remove">
          <ChipGroup>
            {tags.map(tag => (
              <Chip key={tag} variant="subtle" removable onRemove={() => removeTag(tag)}>
                {tag}
              </Chip>
            ))}
            {tags.length === 0 && (
              <span className="font-default text-[14px] text-neutral-text-light italic">All tags removed — refresh to reset</span>
            )}
          </ChipGroup>
        </Row>
        <Row label="Removable with colors">
          <Chip color="success" removable onRemove={() => {}}>Active</Chip>
          <Chip color="error" removable onRemove={() => {}}>Failed</Chip>
          <Chip color="info" removable onRemove={() => {}}>New</Chip>
          <Chip color="warning" removable onRemove={() => {}}>Review</Chip>
        </Row>
        <Row label="Outline removable">
          <Chip variant="outline" removable onRemove={() => {}}>Filter 1</Chip>
          <Chip variant="outline" removable onRemove={() => {}}>Filter 2</Chip>
        </Row>
      </Section>

      {/* ── With Icons ── */}
      <Section title="With Icons" description="Leading icon via iconLeft prop.">
        <Row>
          <Chip iconLeft={<CircleIcon />} color="success">Active</Chip>
          <Chip iconLeft={<CircleIcon />} color="error">Offline</Chip>
          <Chip iconLeft={<StarIcon />} color="warning">Featured</Chip>
          <Chip iconLeft={<CheckIcon />} variant="outline">Verified</Chip>
          <Chip iconLeft={<CheckIcon />} color="recommended">Top pick</Chip>
        </Row>
        <Row label="Icons with sizes">
          <Chip iconLeft={<CircleIcon />} size="sm">Small</Chip>
          <Chip iconLeft={<CircleIcon />} size="md">Medium</Chip>
          <Chip iconLeft={<CircleIcon />} size="lg">Large</Chip>
        </Row>
      </Section>

      {/* ── Disabled ── */}
      <Section title="Disabled" description="Disabled chips use muted colors and block all interaction.">
        <Row>
          <Chip disabled>Subtle</Chip>
          <Chip variant="outline" disabled>Outline</Chip>
          <Chip variant="filled" disabled>Filled</Chip>
        </Row>
        <Row label="Disabled with colors">
          <Chip color="success" disabled>Success</Chip>
          <Chip color="error" disabled>Error</Chip>
          <Chip color="info" disabled>Info</Chip>
          <Chip color="warning" disabled>Warning</Chip>
          <Chip color="recommended" disabled>Recommended</Chip>
          <Chip color="hsa" disabled>HSA</Chip>
          <Chip color="lfsa" disabled>LFSA</Chip>
        </Row>
        <Row label="Disabled removable">
          <Chip removable disabled onRemove={() => {}}>Cannot remove</Chip>
        </Row>
      </Section>

      {/* ── ChipGroup ── */}
      <Section title="ChipGroup" description="Layout wrapper for groups of chips. Wraps by default.">
        <Row label="Wrapped group (default)">
          <ChipGroup>
            {['Primary care', 'Dental', 'Vision', 'Mental health', 'Pharmacy', 'Preventive', 'Ancillary', 'Maternity', 'Pediatric', 'Emergency'].map(name => (
              <Chip key={name} variant="outline">{name}</Chip>
            ))}
          </ChipGroup>
        </Row>
        <Row label="Custom gap (16px)">
          <ChipGroup gap={16}>
            <Chip variant="filled" color="info">React</Chip>
            <Chip variant="filled" color="success">Node.js</Chip>
            <Chip variant="filled" color="neutral">Docker</Chip>
          </ChipGroup>
        </Row>
      </Section>

      {/* ── Network Tier Badges ── */}
      <Section title="Network Tier Badges" description="Insurance network tiers always use Chip variant='outline' color='neutral' size='sm' with a coin icon. The coin icon color is the only thing that changes between tiers. Green is always first (best), red is always last (worst).">
        <Row label="Single network plan">
          <Chip
            variant="outline"
            color="neutral"
            size="sm"
            iconLeft={<NetworkTierCoin backColor="#C2E5C3" frontColor="#5BB95E" />}
          >
            In-Network
          </Chip>
          <Chip
            variant="outline"
            color="neutral"
            size="sm"
            iconLeft={<NetworkTierCoin backColor="#FAB3B3" frontColor="#F23C3C" />}
          >
            Out-of-Network
          </Chip>
        </Row>

        <Row label="Multi-tier network plan">
          <Chip
            variant="outline"
            color="neutral"
            size="sm"
            iconLeft={<NetworkTierCoin backColor="#C2E5C3" frontColor="#5BB95E" />}
          >
            Aetna Preferred
          </Chip>
          <Chip
            variant="outline"
            color="neutral"
            size="sm"
            iconLeft={<NetworkTierCoin backColor="#FFE78F" frontColor="#F5C000" />}
          >
            Aetna Standard
          </Chip>
          <Chip
            variant="outline"
            color="neutral"
            size="sm"
            iconLeft={<NetworkTierCoin backColor="#CEB5F7" frontColor="#8242EB" />}
          >
            Aetna Basic
          </Chip>
          <Chip
            variant="outline"
            color="neutral"
            size="sm"
            iconLeft={<NetworkTierCoin backColor="#FAB3B3" frontColor="#F23C3C" />}
          >
            Out-of-Network
          </Chip>
        </Row>

        <Row label="All available tier icon colors">
          {networkTiers.map(t => (
            <Chip
              key={t.key}
              variant="outline"
              color="neutral"
              size="sm"
              iconLeft={<NetworkTierCoin backColor={t.back} frontColor={t.front} />}
            >
              {t.label}
            </Chip>
          ))}
        </Row>
      </Section>

      {/* ── Usage Rules ── */}
      <Section title="Usage Rules" description="Guidelines for AI agents and developers.">
        <div className="space-y-m">
          {[
            { rule: '1. Chip vs Button.pill', desc: 'Chip is for labeling, categorization, and filtering. Button with pill is for actions (submit, navigate, toggle). If clicking it triggers an action, use Button. If it labels or filters content, use Chip.' },
            { rule: '2. Subtle for static labels', desc: 'Use variant="subtle" (default) for non-interactive labels, tags, and categories. This is the most common variant.' },
            { rule: '3. Outline for selectable chips', desc: 'Use variant="outline" for filter chips and choice chips — elements the user can select/deselect.' },
            { rule: '4. Filled for status indicators', desc: 'Use variant="filled" for high-emphasis status badges (Active, Failed, Pending). Use sparingly.' },
            { rule: '5. Color conveys meaning', desc: 'success = positive, error = negative, info = informational, warning = caution, recommended = product recommendations (gradient for primary, outline for secondary), hsa/lfsa = benefit type eligibility. Default to neutral.' },
            { rule: '6. Removable for user-added tags', desc: 'Use removable + onRemove for tags that the user has added and can dismiss (input chips, search filters).' },
            { rule: '7. Keep labels short', desc: 'Chip labels should be 1-3 words maximum. If the label is longer, use a different component.' },
          ].map(({ rule, desc }) => (
            <div key={rule} className="flex gap-s">
              <span className="font-default font-medium text-[14px] text-neutral whitespace-nowrap">{rule}</span>
              <p className="font-default text-[14px] text-neutral-text-dark">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Props — Chip ── */}
      <Section title="Props — Chip" description="All available props for the Chip component.">
        <div className="rounded-xs border border-neutral-border-light overflow-hidden">
          <div className="grid grid-cols-[120px_1fr_80px_1fr] gap-m px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
            {['Prop', 'Type', 'Default', 'Description'].map(h => (
              <p key={h} className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">{h}</p>
            ))}
          </div>
          {chipPropsData.map((row, i) => (
            <div key={row.prop} className={`grid grid-cols-[120px_1fr_80px_1fr] gap-m px-m py-s border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/40' : ''}`}>
              <code className="font-mono text-[12px] text-primary font-medium">{row.prop}</code>
              <code className="font-mono text-[11px] text-neutral-text-dark break-all">{row.type}</code>
              <code className="font-mono text-[11px] text-neutral-text-light">{row.default}</code>
              <p className="font-default text-[12px] text-neutral-text-dark">{row.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Props — ChipGroup ── */}
      <Section title="Props — ChipGroup" description="Layout wrapper props.">
        <div className="rounded-xs border border-neutral-border-light overflow-hidden">
          <div className="grid grid-cols-[120px_1fr_80px_1fr] gap-m px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
            {['Prop', 'Type', 'Default', 'Description'].map(h => (
              <p key={h} className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">{h}</p>
            ))}
          </div>
          {groupPropsData.map((row, i) => (
            <div key={row.prop} className={`grid grid-cols-[120px_1fr_80px_1fr] gap-m px-m py-s border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/40' : ''}`}>
              <code className="font-mono text-[12px] text-primary font-medium">{row.prop}</code>
              <code className="font-mono text-[11px] text-neutral-text-dark break-all">{row.type}</code>
              <code className="font-mono text-[11px] text-neutral-text-light">{row.default}</code>
              <p className="font-default text-[12px] text-neutral-text-dark">{row.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Code ── */}
      <Section title="Usage" description="Import and basic usage examples.">
        <CodeBlock code={`import { Chip, ChipGroup } from './components/Chip'

// Basic label
<Chip>React</Chip>

// Outline filter chip with selection
<Chip variant="outline" selected={isSelected} onClick={toggle}>
  Medical
</Chip>

// Status indicator
<Chip variant="filled" color="success">Active</Chip>
<Chip variant="filled" color="error">Failed</Chip>
<Chip color="info">Updated</Chip>
<Chip color="warning">Review needed</Chip>

// Recommendations (gradient for primary, outline for secondary)
<Chip color="recommended">Top pick</Chip>
<Chip color="recommended" variant="outline">Also recommended</Chip>

// Benefit type eligibility
<Chip color="hsa">HSA eligible</Chip>
<Chip color="lfsa">LFSA eligible</Chip>

// Removable tag
<Chip removable onRemove={() => removeTag(id)}>
  TypeScript
</Chip>

// With icon
<Chip iconLeft={<CircleIcon />} color="success">Online</Chip>

// Chip group
<ChipGroup gap={8} wrap>
  <Chip variant="outline">Filter 1</Chip>
  <Chip variant="outline">Filter 2</Chip>
  <Chip variant="outline">Filter 3</Chip>
</ChipGroup>

// Network tier badge (see tokens/usage/network-tier-rules.ts)
// Always: variant="outline" color="neutral" size="sm"
// Only the coin icon color changes per tier.
<Chip variant="outline" color="neutral" size="sm"
  iconLeft={<NetworkTierCoin backColor="#C2E5C3" frontColor="#5BB95E" />}>
  In-Network
</Chip>
<Chip variant="outline" color="neutral" size="sm"
  iconLeft={<NetworkTierCoin backColor="#FAB3B3" frontColor="#F23C3C" />}>
  Out-of-Network
</Chip>`} />
      </Section>
    </DocLayout>
  )
}
