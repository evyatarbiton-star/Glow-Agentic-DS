import { useState, useRef, useCallback, useEffect } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { ProviderCard } from '../../components/ProviderCard'
import { Select } from '../../components/Select'
import { Toggle } from '../../components/Toggle'
import { TextInput } from '../../components/TextInput'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'

// ── Helpers ──────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xs">
      {children}
    </p>
  )
}

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

function PropsTable({ data }: { data: { prop: string; type: string; default: string; description: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-xs border border-neutral-border-light">
      <table className="w-full font-default text-[13px]">
        <thead>
          <tr className="bg-neutral-subtle text-left">
            <th className="px-s py-xxs font-medium text-neutral">Prop</th>
            <th className="px-s py-xxs font-medium text-neutral">Type</th>
            <th className="px-s py-xxs font-medium text-neutral">Default</th>
            <th className="px-s py-xxs font-medium text-neutral">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.prop} className="border-t border-neutral-border-light">
              <td className="px-s py-xxs font-medium text-accent-blue-text-dark">{row.prop}</td>
              <td className="px-s py-xxs text-neutral-text-dark font-mono text-[12px]">{row.type}</td>
              <td className="px-s py-xxs text-neutral-text-light">{row.default}</td>
              <td className="px-s py-xxs text-neutral-text-dark">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RuleCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-xs p-s rounded-xs bg-neutral-subtle">
      <div className="w-[24px] h-[24px] rounded-full bg-neutral flex items-center justify-center shrink-0">
        <span className="font-default font-medium text-[12px] text-neutral-text-negative">{number}</span>
      </div>
      <div>
        <p className="font-default font-medium text-[14px] text-neutral">{title}</p>
        <p className="font-default text-[13px] text-neutral-text-dark mt-xxxs">{description}</p>
      </div>
    </div>
  )
}

// ── Demo Wrapper (constrains card width) ──────────────────────

function CardDemo({ children, width = 343 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ maxWidth: width }}>
      {children}
    </div>
  )
}

function Row({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="mb-l">
      {label && <Label>{label}</Label>}
      <div className="flex flex-wrap gap-l items-start">
        {children}
      </div>
    </div>
  )
}

// ── Props Data ───────────────────────────────────────────────

const propsData = [
  { prop: 'loading',               type: 'boolean',                         default: 'false',                description: 'Show skeleton/loading state with shimmer animation' },
  { prop: 'name',                  type: 'string',                          default: '—',                    description: 'Provider full name (required)' },
  { prop: 'specialty',             type: 'string',                          default: '—',                    description: 'Medical specialty (required)' },
  { prop: 'photoUrl',              type: 'string',                          default: 'undefined',            description: 'URL for provider photo' },
  { prop: 'initials',             type: 'string',                          default: 'auto from name',       description: 'Fallback initials when photo unavailable' },
  { prop: 'address',              type: 'string',                          default: 'undefined',            description: 'Physical address' },
  { prop: 'distance',             type: 'string',                          default: 'undefined',            description: 'Distance string, e.g. "0.3 mi"' },
  { prop: 'rating',               type: 'number',                          default: 'undefined',            description: 'Numeric rating, e.g. 4.5' },
  { prop: 'reviewCount',          type: 'number',                          default: 'undefined',            description: 'Number of reviews' },
  { prop: 'networkTier',          type: '"in-network" | "tier-2" | "tier-3" | "out-of-network"', default: 'undefined', description: 'Insurance network tier — controls badge color' },
  { prop: 'networkName',          type: 'string',                          default: 'undefined',            description: 'Network name, e.g. "Aetna"' },
  { prop: 'networkLabel',         type: 'string',                          default: 'undefined',            description: 'Network tier label, e.g. "In-Network"' },
  { prop: 'cost',                 type: 'string',                          default: 'undefined',            description: 'Formatted cost, e.g. "$1,400"' },
  { prop: 'costLevel',            type: '"lower" | "typical" | "higher"',  default: 'undefined',            description: 'Cost comparison level — controls chip color + icon' },
  { prop: 'costLabel',            type: 'string',                          default: '"est. out-of-pocket"', description: 'Label under the cost amount' },
  { prop: 'showCostChip',         type: 'boolean',                         default: 'true',                 description: 'Show the cost comparison chip' },
  { prop: 'showPrice',            type: 'boolean',                         default: 'true',                 description: 'Show entire price section' },
  { prop: 'languages',            type: 'string[]',                        default: 'undefined',            description: 'Languages spoken, e.g. ["English", "Spanish"]. Shows first 2 + count.' },
  { prop: 'virtualAvailable',     type: 'boolean',                         default: 'undefined',            description: 'Show "Accept virtual appointment" row' },
  { prop: 'nextAppointmentLabel', type: 'string',                          default: 'undefined',            description: 'Appointment label, e.g. "Next appointment"' },
  { prop: 'nextAppointmentDate',  type: 'string',                          default: 'undefined',            description: 'Appointment date, e.g. "Tomorrow at 2:00 PM"' },
  { prop: 'bookmarkable',         type: 'boolean',                         default: 'true',                 description: 'Show bookmark toggle button' },
  { prop: 'onBookmarkChange',     type: '(bookmarked: boolean) => void',   default: 'undefined',            description: 'Callback when bookmark state changes' },
  { prop: 'onCallClick',          type: '() => void',                      default: 'undefined',            description: 'Call button handler — hides button if omitted' },
  { prop: 'onBookClick',          type: '() => void',                      default: 'undefined',            description: 'Book button handler — hides button if omitted' },
  { prop: 'onClick',              type: '() => void',                      default: 'undefined',            description: 'Makes card clickable with hover effect' },
]

// ── Responsive Resize Demo ───────────────────────────────

function ResponsiveDemo() {
  const [width, setWidth] = useState(700)
  const layoutLabel = width >= 480 ? 'Horizontal' : 'Vertical'

  return (
    <div className="flex flex-col gap-s">
      {/* Slider controls */}
      <div className="flex items-center gap-m">
        <input
          type="range"
          min={300}
          max={800}
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          className="flex-1 accent-primary cursor-pointer"
        />
        <span className="font-default font-medium text-[13px] text-neutral-text-dark tabular-nums" style={{ minWidth: 120 }}>
          {width}px · {layoutLabel}
        </span>
      </div>

      {/* Resizable container */}
      <div
        style={{
          width,
          transition: 'width 0.05s ease-out',
          border: '1px dashed #e0e0e0',
          borderRadius: 8,
          padding: 2,
        }}
      >
        <ProviderCard
          name="Dr. Sarah Chen"
          specialty="Primary Care Doctor"
          photoUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face"
          distance="0.3 mi"
          address="1468 Madison Ave, Suite 4B, New York, NY 10029"
          rating={4.8}
          reviewCount={128}
          networkTier="in-network"
          networkLabel="In-Network"
          cost="$1,400"
          costLevel="lower"
          nextAppointmentLabel="Next appointment"
          nextAppointmentDate="Tomorrow at 2:00 PM"
          onCallClick={() => {}}
          onBookClick={() => {}}
        />
      </div>
    </div>
  )
}

// ── Interactive Playground ────────────────────────────────────

const PHOTO_URL = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face'

const DEFAULTS = {
  layout: 'responsive' as const,
  providerType: 'female' as const,
  loading: false,
  name: 'Dr. Sarah Chen',
  specialty: 'Primary Care Doctor',
  networkTier: 'in-network' as const,
  networkLabel: 'In-Network',
  networkName: '',
  distance: '0.3 mi',
  address: '1468 Madison Ave, Suite 4B, New York, NY 10029',
  rating: '4.8',
  reviewCount: '128',
  cost: '$1,400',
  costLevel: 'lower' as const,
  nextAppointmentLabel: 'Next appointment',
  nextAppointmentDate: 'Today, May 7',
  languages: 'English, Spanish',
  showLanguages: false,
  virtualAvailable: false,
  showPrice: true,
  showCostChip: true,
  bookmarkable: true,
  showPhoto: true,
  showAppointment: true,
  actions: 'book-call' as 'book-call' | 'call' | 'none',
}

const LAYOUT_OPTIONS = [
  { value: 'responsive', label: 'Responsive' },
  { value: 'horizontal', label: 'Horizontal' },
  { value: 'vertical', label: 'Vertical' },
]

const PROVIDER_TYPE_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'facility', label: 'Facility' },
]

const NETWORK_TIER_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'in-network', label: 'In-Network' },
  { value: 'tier-2', label: 'Tier 2' },
  { value: 'tier-3', label: 'Tier 3' },
  { value: 'out-of-network', label: 'Out-of-Network' },
]

const ACTIONS_OPTIONS = [
  { value: 'book-call', label: 'Book & Call' },
  { value: 'call', label: 'Call only' },
  { value: 'none', label: 'None' },
]

const COST_LEVEL_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'lower', label: 'Lower' },
  { value: 'typical', label: 'Typical' },
  { value: 'higher', label: 'Higher' },
]

function Playground() {
  const [s, setS] = useState(DEFAULTS)
  const [width, setWidth] = useState(700)
  const previewRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(700)
  const set = useCallback(<K extends keyof typeof DEFAULTS>(k: K, v: typeof DEFAULTS[K]) => {
    setS(prev => ({ ...prev, [k]: v }))
  }, [])

  // Track preview area width so responsive slider stays within bounds
  useEffect(() => {
    const el = previewRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const layoutLabel = s.layout === 'responsive'
    ? (width >= 480 ? 'Horizontal' : 'Vertical')
    : s.layout

  return (
    <div className="flex gap-l" style={{ alignItems: 'flex-start' }}>
      {/* ── Left: Preview ── */}
      <div ref={previewRef} className="flex-1 min-w-0">
        <div className="flex flex-col gap-s">
          {s.layout === 'responsive' && (
            <div className="flex items-center gap-m">
              <input
                type="range" min={300} max={Math.max(300, containerWidth)} value={Math.min(width, containerWidth)}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="flex-1 accent-primary cursor-pointer"
              />
              <span className="font-default font-medium text-[13px] text-neutral-text-dark tabular-nums" style={{ minWidth: 120 }}>
                {width}px · {layoutLabel}
              </span>
            </div>
          )}
          <div
            style={{
              width: s.layout === 'responsive' ? Math.min(width, containerWidth) : s.layout === 'horizontal' ? '100%' : 343,
              maxWidth: '100%',
              transition: 'width 0.05s ease-out',
              border: '1px dashed #e0e0e0',
              borderRadius: 8,
              padding: 2,
            }}
          >
            <ProviderCard
              layout={s.layout}
              loading={s.loading}
              name={s.name}
              specialty={s.specialty}
              providerType={s.providerType}
              photoUrl={s.showPhoto ? PHOTO_URL : undefined}
              distance={s.distance || undefined}
              address={s.address || undefined}
              rating={s.rating ? Number(s.rating) : undefined}
              reviewCount={s.reviewCount ? Number(s.reviewCount) : undefined}
              networkTier={s.networkTier === 'none' ? undefined : s.networkTier as any}
              networkLabel={s.networkTier === 'none' ? undefined : s.networkLabel || undefined}
              networkName={s.networkName || undefined}
              cost={s.cost || undefined}
              costLevel={s.costLevel === 'none' ? undefined : s.costLevel as any}
              showPrice={s.showPrice}
              showCostChip={s.showCostChip}
              bookmarkable={s.bookmarkable}
              languages={s.showLanguages && s.languages ? s.languages.split(',').map(l => l.trim()).filter(Boolean) : undefined}
              virtualAvailable={s.virtualAvailable}
              nextAppointmentLabel={s.showAppointment ? (s.nextAppointmentLabel || undefined) : undefined}
              nextAppointmentDate={s.showAppointment ? (s.nextAppointmentDate || undefined) : undefined}
              onCallClick={s.actions !== 'none' ? () => {} : undefined}
              onBookClick={s.actions === 'book-call' ? () => {} : undefined}
            />
          </div>
        </div>
      </div>

      {/* ── Right: Controls (scrollable, sticky) ── */}
      <div style={{ width: 260, flexShrink: 0, position: 'sticky', top: 24, maxHeight: 'calc(100vh - 48px)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <Card variant="filled" radius="md" padding="md" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '100%' }}>
          <div className="flex items-center justify-between mb-s" style={{ flexShrink: 0 }}>
            <span className="font-default font-medium text-[14px] text-neutral">Controls</span>
            <Button variant="ghost" size="xs" onClick={() => setS(DEFAULTS)}>Reset</Button>
          </div>

          <div style={{ overflowY: 'auto', flex: 1, marginRight: -8, paddingRight: 8 }}>
            {/* Toggles — most useful controls first */}
            <div className="flex flex-col gap-s">
              <Toggle checked={s.loading} onChange={() => set('loading', !s.loading)} label="Loading" />
              <Toggle checked={s.showPhoto} onChange={() => set('showPhoto', !s.showPhoto)} label="Photo" />
              <Toggle checked={s.showPrice} onChange={() => set('showPrice', !s.showPrice)} label="Price" />
              <Toggle checked={s.showCostChip} onChange={() => set('showCostChip', !s.showCostChip)} label="Cost chip" />
              <Toggle checked={s.bookmarkable} onChange={() => set('bookmarkable', !s.bookmarkable)} label="Bookmark" />
              <Toggle checked={s.showAppointment} onChange={() => set('showAppointment', !s.showAppointment)} label="Appointment" />
              <Toggle checked={s.showLanguages} onChange={() => set('showLanguages', !s.showLanguages)} label="Languages" />
              <Toggle checked={s.virtualAvailable} onChange={() => set('virtualAvailable', !s.virtualAvailable)} label="Virtual visit" />
            </div>

            {/* Selects */}
            <div className="flex flex-col gap-s mt-s pt-s border-t border-neutral-border-light">
              <Select label="layout" size="sm" options={LAYOUT_OPTIONS} value={s.layout} onChange={(v) => set('layout', v as typeof s.layout)} />
              <Select label="providerType" size="sm" options={PROVIDER_TYPE_OPTIONS} value={s.providerType} onChange={(v) => set('providerType', v as typeof s.providerType)} />
              <Select label="networkTier" size="sm" options={NETWORK_TIER_OPTIONS} value={s.networkTier === 'none' ? 'none' : s.networkTier} onChange={(v) => {
                const tier = v as string
                set('networkTier', tier as any)
                if (tier === 'in-network') set('networkLabel', 'In-Network')
                else if (tier === 'tier-2') set('networkLabel', 'Tier 2')
                else if (tier === 'tier-3') set('networkLabel', 'Tier 3')
                else if (tier === 'out-of-network') set('networkLabel', 'Out-of-Network')
                else set('networkLabel', '')
              }} />
              <Select label="costLevel" size="sm" options={COST_LEVEL_OPTIONS} value={s.costLevel === 'none' ? 'none' : s.costLevel} onChange={(v) => set('costLevel', v as typeof s.costLevel)} />
              <Select label="actions" size="sm" options={ACTIONS_OPTIONS} value={s.actions} onChange={(v) => set('actions', v as typeof s.actions)} />
            </div>

            {/* Text fields */}
            <div className="flex flex-col gap-s mt-s pt-s border-t border-neutral-border-light">
              <TextInput label="name" size="sm" value={s.name} onChange={(e) => set('name', e.target.value)} />
              <TextInput label="specialty" size="sm" value={s.specialty} onChange={(e) => set('specialty', e.target.value)} />
              <TextInput label="networkLabel" size="sm" value={s.networkLabel} onChange={(e) => set('networkLabel', e.target.value)} />
              <TextInput label="distance" size="sm" value={s.distance} onChange={(e) => set('distance', e.target.value)} />
              <TextInput label="address" size="sm" value={s.address} onChange={(e) => set('address', e.target.value)} />
              <TextInput label="rating" size="sm" value={s.rating} onChange={(e) => set('rating', e.target.value)} />
              <TextInput label="reviewCount" size="sm" value={s.reviewCount} onChange={(e) => set('reviewCount', e.target.value)} />
              <TextInput label="cost" size="sm" value={s.cost} onChange={(e) => set('cost', e.target.value)} />
              <TextInput label="languages" size="sm" value={s.languages} onChange={(e) => set('languages', e.target.value)} helperText="Comma-separated" />
              <TextInput label="nextAppointmentLabel" size="sm" value={s.nextAppointmentLabel} onChange={(e) => set('nextAppointmentLabel', e.target.value)} />
              <TextInput label="nextAppointmentDate" size="sm" value={s.nextAppointmentDate} onChange={(e) => set('nextAppointmentDate', e.target.value)} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

// ── Main Doc Component ───────────────────────────────────────

export function ProviderCardDoc() {
  return (
    <DocLayout
      title="Provider Card"
      description="A card displaying healthcare provider information — avatar, specialty, network tier, cost comparison, and action buttons. Built on top of Card, Button, and DS icons."
    >

      {/* ── Playground ──────────────────────────────────────────── */}
      <Section title="Playground" description="Experiment with every prop in real-time. Toggle features, change layouts, and see the card update live.">
        <Playground />
      </Section>

      {/* ── Responsive (default) ────────────────────────────────── */}
      <Section title="Responsive (Default)" description="The default layout auto-switches between horizontal (≥480px) and vertical (<480px) based on container width. Drag the slider to see the transition live.">
        <ResponsiveDemo />
      </Section>

      {/* ── Horizontal Layout ──────────────────────────────────── */}
      <Section title="Horizontal Layout" description="Force horizontal layout regardless of container width. Set layout='horizontal'.">
        <div style={{ maxWidth: 720 }}>
          <ProviderCard
            layout="horizontal"
            name="Dr. Sarah Chen"
            specialty="Primary Care Doctor"
            photoUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face"
            distance="0.3 mi"
            address="1468 Madison Ave, Suite 4B, New York, NY 10029"
            rating={4.8}
            reviewCount={128}
            networkTier="in-network"
            networkLabel="In-Network"
            cost="$1,400"
            costLevel="lower"
            languages={['English', 'Spanish']}
            virtualAvailable
            nextAppointmentLabel="Next appointment"
            nextAppointmentDate="Today, May 7"
            onCallClick={() => {}}
            onBookClick={() => {}}
          />
        </div>

        <div style={{ maxWidth: 720, marginTop: 16 }}>
          <ProviderCard
            layout="horizontal"
            name="Dr. Jessica Rivera"
            specialty="Ophthalmologist"
            providerType="female"
            distance="0.8 mi"
            address="200 Broadway, Suite 1105, New York, NY 10038"
            rating={4.7}
            reviewCount={156}
            networkTier="tier-2"
            networkName="Aetna"
            networkLabel="Tier 2"
            cost="$155"
            costLevel="typical"
            languages={['English', 'Spanish', 'Mandarin']}
            nextAppointmentLabel="Next appointment"
            nextAppointmentDate="Thu, Mar 19"
            onCallClick={() => {}}
            onBookClick={() => {}}
          />
        </div>

        <div style={{ maxWidth: 720, marginTop: 16 }}>
          <ProviderCard
            layout="horizontal"
            name="Manhattan Eye Center"
            specialty="Retinal imaging center"
            providerType="facility"
            distance="0.9 mi"
            address="100 E 77th St, Lower Level, New York, NY 10075"
            rating={4.3}
            reviewCount={67}
            networkTier="out-of-network"
            networkLabel="Out-of-Network"
            cost="$890"
            costLevel="higher"
            onCallClick={() => {}}
          />
        </div>
      </Section>

      {/* ── Default (full card) ──────────────────────────────── */}
      <Section title="Default (Vertical)" description="Full card with all fields populated. This is the most common usage in search results.">
        <CardDemo>
          <ProviderCard
            name="Dr. Sarah Chen"
            specialty="Primary Care Doctor"
            photoUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face"
            distance="0.3 mi"
            address="1468 Madison Ave, Suite 4B, New York, NY 10029"
            rating={4.8}
            reviewCount={128}
            networkTier="in-network"
            networkLabel="In-Network"
            cost="$1,400"
            costLevel="lower"
            languages={['English', 'Spanish']}
            virtualAvailable
            nextAppointmentLabel="Next appointment"
            nextAppointmentDate="Today, May 7"
            onCallClick={() => {}}
            onBookClick={() => {}}
          />
        </CardDemo>
      </Section>

      {/* ── Cost Chip Levels ─────────────────────────────────── */}
      <Section title="Cost Chip Levels" description="Three cost comparison levels with distinct colors and icons. Lower and higher include directional arrow icons.">
        <Row>
          <CardDemo>
            <Label>Lower cost</Label>
            <ProviderCard
              name="Dr. Emily Park"
              specialty="Ophthalmologist"
              providerType="female"
              distance="1.2 mi"
              address="635 Madison Ave, 3rd Floor, New York, NY 10022"
              rating={4.5}
              reviewCount={89}
              networkTier="in-network"
              networkLabel="In-Network"
              cost="$72"
              costLevel="lower"
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Wed, Mar 18"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>Typical cost</Label>
            <ProviderCard
              name="Dr. Michael Torres"
              specialty="Ophthalmologist"
              initials="MT"
              distance="0.8 mi"
              address="200 Broadway, Suite 1105, New York, NY 10038"
              rating={4.7}
              reviewCount={156}
              networkTier="in-network"
              networkLabel="In-Network"
              cost="$155"
              costLevel="typical"
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Thu, Mar 19"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>Higher cost</Label>
            <ProviderCard
              name="Dr. Robert Kim"
              specialty="Ophthalmologist"
              initials="RK"
              distance="2.1 mi"
              address="88 Lexington Ave, Apt 12C, New York, NY 10016"
              rating={4.9}
              reviewCount={201}
              networkTier="in-network"
              networkLabel="In-Network"
              cost="$210"
              costLevel="higher"
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Mon, Mar 23"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          </CardDemo>
        </Row>
      </Section>

      {/* ── Network Tiers ────────────────────────────────────── */}
      <Section title="Network Tiers" description="Four network tier badges with distinct color-coded coin icons.">
        <Row>
          <CardDemo>
            <Label>In-Network</Label>
            <ProviderCard
              name="Dr. Lisa Wang"
              specialty="Dermatologist"
              initials="LW"
              networkTier="in-network"
              networkLabel="In-Network"
              cost="$185"
              costLevel="typical"
            />
          </CardDemo>

          <CardDemo>
            <Label>Tier 2</Label>
            <ProviderCard
              name="Dr. James Rivera"
              specialty="Cardiologist"
              initials="JR"
              networkTier="tier-2"
              networkName="Aetna"
              networkLabel="Tier 2"
              cost="$305"
              costLevel="typical"
            />
          </CardDemo>

          <CardDemo>
            <Label>Tier 3</Label>
            <ProviderCard
              name="Dr. Kevin Patel"
              specialty="Neurologist"
              initials="KP"
              networkTier="tier-3"
              networkName="BlueCross"
              networkLabel="Tier 3"
              cost="$450"
              costLevel="higher"
            />
          </CardDemo>

          <CardDemo>
            <Label>Out-of-Network</Label>
            <ProviderCard
              name="Dr. Rachel Nguyen"
              specialty="Orthopedist"
              initials="RN"
              networkTier="out-of-network"
              networkLabel="Out-of-Network"
              cost="$890"
              costLevel="higher"
            />
          </CardDemo>
        </Row>
      </Section>

      {/* ── Without Price ────────────────────────────────────── */}
      <Section title="Without Price" description="When the plan is not connected or cost data is unavailable, hide the price section entirely.">
        <CardDemo>
          <ProviderCard
            name="Dr. Anthony Brooks"
            specialty="Orthopedist"
            initials="AB"
            distance="0.5 mi"
            address="350 5th Ave, Suite 7700, New York, NY 10118"
            rating={4.6}
            reviewCount={92}
            networkTier="in-network"
            networkLabel="In-Network"
            showPrice={false}
            nextAppointmentLabel="Next appointment"
            nextAppointmentDate="Friday at 10:00 AM"
            onCallClick={() => {}}
            onBookClick={() => {}}
          />
        </CardDemo>
      </Section>

      {/* ── Without Cost Chip ────────────────────────────────── */}
      <Section title="Without Cost Chip" description="Show cost inline with label but no comparison chip. Used when cost comparison data is not available.">
        <CardDemo>
          <ProviderCard
            name="Manhattan Eye Center"
            specialty="Retinal imaging center"
            initials="ME"
            distance="0.9 mi"
            address="100 E 77th St, Lower Level, New York, NY 10075"
            rating={4.3}
            reviewCount={67}
            networkTier="in-network"
            networkLabel="In-Network"
            cost="$95"
            showCostChip={false}
            costLabel="est. provider charge"
            nextAppointmentLabel="Next appointment"
            nextAppointmentDate="Today at 4:30 PM"
            onCallClick={() => {}}
            onBookClick={() => {}}
          />
        </CardDemo>
      </Section>

      {/* ── Minimal Card ─────────────────────────────────────── */}
      <Section title="Minimal Card" description="Only name and specialty — no cost, details, network, or actions.">
        <CardDemo>
          <ProviderCard
            name="Dr. Maria Santos"
            specialty="Psychiatrist"
            initials="MS"
            bookmarkable={false}
          />
        </CardDemo>
      </Section>

      {/* ── Loading / Skeleton ────────────────────────────────── */}
      <Section title="Loading (Skeleton)" description="Use loading={true} to show a shimmer skeleton while data is being fetched. The skeleton matches the full card structure to prevent layout shift.">
        <Row>
          <CardDemo>
            <Label>Vertical</Label>
            <ProviderCard
              loading
              name=""
              specialty=""
            />
          </CardDemo>
          <div style={{ maxWidth: 720, flex: 1 }}>
            <Label>Horizontal</Label>
            <ProviderCard
              loading
              layout="horizontal"
              name=""
              specialty=""
            />
          </div>
        </Row>
      </Section>

      {/* ── Copay Variant ────────────────────────────────────── */}
      <Section title="Copay Variant" description="For copay plans, all providers show the same flat cost. Use costLabel to show 'copay per visit'.">
        <Row>
          <CardDemo>
            <ProviderCard
              name="Dr. David Hoffman"
              specialty="Orthopedist"
              initials="DH"
              distance="0.4 mi"
              address="555 Madison Ave, 17th Floor, New York, NY 10022"
              rating={4.7}
              reviewCount={134}
              networkTier="in-network"
              networkLabel="In-Network"
              cost="$45"
              costLabel="copay per visit"
              showCostChip={false}
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Tomorrow at 11:00 AM"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          </CardDemo>
        </Row>
      </Section>

      {/* ── Interactive (clickable) ──────────────────────────── */}
      <Section title="Interactive Card" description="With onClick handler — card gets hover shadow lift effect. Useful for navigating to provider detail page.">
        <CardDemo>
          <ProviderCard
            name="Dr. Sarah Chen"
            specialty="Primary Care Doctor"
            photoUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face"
            distance="0.3 mi"
            address="1468 Madison Ave, Suite 4B, New York, NY 10029"
            rating={4.8}
            reviewCount={128}
            networkTier="in-network"
            networkLabel="In-Network"
            cost="$1,400"
            costLevel="lower"
            nextAppointmentLabel="Next appointment"
            nextAppointmentDate="Tomorrow at 2:00 PM"
            onClick={() => alert('Navigate to provider detail')}
            onCallClick={() => {}}
            onBookClick={() => {}}
          />
        </CardDemo>
      </Section>

      {/* ── Props Table ──────────────────────────────────────── */}
      <Section title="Props">
        <PropsTable data={propsData} />
      </Section>

      {/* ── Code Examples ────────────────────────────────────── */}
      <Section title="Usage" description="Import and use ProviderCard with your provider data.">
        <CodeBlock code={`import { ProviderCard } from '../components/ProviderCard'

// Full card with all features
<ProviderCard
  name="Dr. Sarah Chen"
  specialty="Primary Care Doctor"
  photoUrl="/photos/dr-chen.jpg"
  distance="0.3 mi"
  address="123 Main St, New York, NY"
  rating={4.8}
  reviewCount={128}
  networkTier="in-network"
  networkLabel="In-Network"
  cost="$1,400"
  costLevel="lower"
  costLabel="est. out-of-pocket"
  nextAppointmentLabel="Next appointment"
  nextAppointmentDate="Tomorrow at 2:00 PM"
  onCallClick={() => handleCall(provider)}
  onBookClick={() => handleBook(provider)}
  onClick={() => navigate(\`/provider/\${provider.id}\`)}
/>

// Copay plan — flat cost, no chip
<ProviderCard
  name="Dr. David Hoffman"
  specialty="Orthopedist"
  cost="$45"
  costLabel="copay per visit"
  showCostChip={false}
  networkTier="in-network"
  networkLabel="In-Network"
  onCallClick={() => {}}
  onBookClick={() => {}}
/>

// Not connected — no price
<ProviderCard
  name="Dr. Anthony Brooks"
  specialty="Orthopedist"
  showPrice={false}
  networkTier="in-network"
  networkLabel="In-Network"
  onCallClick={() => {}}
  onBookClick={() => {}}
/>`} />
      </Section>

      {/* ── Usage Rules ──────────────────────────────────────── */}
      <Section title="Usage Rules">
        <div className="flex flex-col gap-xs">
          <RuleCard
            number={1}
            title="Always show name and specialty"
            description="These are the only required props. All other sections are optional and conditionally rendered."
          />
          <RuleCard
            number={2}
            title="Use costLevel for comparison chips"
            description="Set costLevel to 'lower', 'typical', or 'higher' to show the colored chip. Omit or set showCostChip={false} when comparison data isn't available."
          />
          <RuleCard
            number={3}
            title="Network tier colors are semantic"
            description="In-network (green), Tier 2 (gold), Tier 3 (purple), Out-of-network (red). Always pair networkTier with networkLabel."
          />
          <RuleCard
            number={4}
            title="Action buttons require handlers"
            description="Call and Book buttons only appear when their respective onClick handlers are provided. Omit both for a read-only card."
          />
          <RuleCard
            number={5}
            title="Copay vs Coinsurance"
            description="For copay plans, set showCostChip={false} and use costLabel='copay per visit'. For coinsurance, use costLevel to show the comparison chip."
          />
          <RuleCard
            number={6}
            title="Interactive cards need onClick"
            description="Pass onClick to make the card hoverable (shadow lift). Stop propagation is handled internally for bookmark and action buttons."
          />
        </div>
      </Section>

    </DocLayout>
  )
}
