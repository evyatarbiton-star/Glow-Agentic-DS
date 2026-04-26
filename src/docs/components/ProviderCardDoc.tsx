import { useState, useRef, useCallback, useEffect } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { ProviderCard } from '../../components/ProviderCard'
import { Select } from '../../components/Select'
import { Toggle } from '../../components/Toggle'
import { TextInput } from '../../components/TextInput'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import { ScrollArea } from '../../components/ScrollArea'

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
  { prop: 'cost',                 type: 'string',                          default: 'undefined',            description: 'Formatted cost, e.g. "$1,400" or "$900–$1,200" for ranges' },
  { prop: 'costVariant',          type: '"coinsurance" | "cost-unknown" | "cost-no-comparison" | "copay-visit" | "copay-procedure" | "not-covered" | "price-unknown" | "hidden"', default: '"coinsurance"', description: 'Primary variant — drives label, hint, chip, and typography (cost-style vs price-style)' },
  { prop: 'costLevel',            type: '"lower" | "typical" | "higher"',  default: 'undefined',            description: 'Chip color — ONLY used within coinsurance variant; ignored otherwise' },
  { prop: 'costLabel',            type: 'ReactNode',                       default: 'preset',               description: 'Override the cost label (falls back to variant preset)' },
  { prop: 'costHint',             type: 'ReactNode',                       default: 'preset',               description: 'Override the hint text below the cost (falls back to variant preset)' },
  { prop: 'showCostChip',         type: 'boolean',                         default: 'preset',               description: 'Override chip visibility (only coinsurance variant shows a chip by default)' },
  { prop: 'showPrice',            type: 'boolean',                         default: 'true',                 description: 'Show entire cost section' },
  { prop: 'languages',            type: 'string[]',                        default: 'undefined',            description: 'Languages spoken, e.g. ["English", "Spanish"]. Shows first 2 + count.' },
  { prop: 'virtualAvailable',     type: 'boolean',                         default: 'undefined',            description: 'Show "Accept virtual appointment" row' },
  { prop: 'nextAppointmentLabel', type: 'string',                          default: 'undefined',            description: 'Appointment label, e.g. "Next appointment"' },
  { prop: 'nextAppointmentDate',  type: 'string',                          default: 'undefined',            description: 'Date: "Today, May 7" or "Tomorrow, May 8". No hours. Omit if after tomorrow.' },
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
          nextAppointmentDate="Tomorrow, Mar 25"
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
  showRating: true,
  rating: '4.8',
  reviewCount: '128',
  cost: '$1,400',
  costVariant: 'coinsurance' as const,
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

const COST_VARIANT_OPTIONS = [
  { value: 'coinsurance',         label: 'Coinsurance (chip)' },
  { value: 'cost-unknown',        label: 'Cost unknown (range)' },
  { value: 'cost-no-comparison',  label: 'Cost — no comparison' },
  { value: 'copay-visit',         label: 'Copay — per visit' },
  { value: 'copay-procedure',     label: 'Copay — per procedure' },
  { value: 'not-covered',         label: 'Not covered (price)' },
  { value: 'price-unknown',       label: 'Price unknown (range)' },
  { value: 'hidden',              label: 'Hidden (no cost section)' },
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
              rating={s.showRating && s.rating ? Number(s.rating) : undefined}
              reviewCount={s.showRating && s.reviewCount ? Number(s.reviewCount) : undefined}
              networkTier={s.networkTier === 'none' ? undefined : s.networkTier as any}
              networkLabel={s.networkTier === 'none' ? undefined : s.networkLabel || undefined}
              networkName={s.networkName || undefined}
              cost={s.cost || undefined}
              costVariant={s.costVariant}
              costLevel={s.costVariant === 'coinsurance' && s.costLevel !== 'none' ? (s.costLevel as any) : undefined}
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
              <Toggle checked={s.showRating} onChange={() => set('showRating', !s.showRating)} label="Rating" />
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
              <Select label="costVariant" size="sm" options={COST_VARIANT_OPTIONS} value={s.costVariant} onChange={(v) => set('costVariant', v as typeof s.costVariant)} />
              {s.costVariant === 'coinsurance' && (
                <Select label="costLevel" size="sm" options={COST_LEVEL_OPTIONS} value={s.costLevel === 'none' ? 'none' : s.costLevel} onChange={(v) => set('costLevel', v as typeof s.costLevel)} helperText="Only used within coinsurance variant" />
              )}
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
            nextAppointmentLabel="Next appointment"
            nextAppointmentDate="Today, May 7"
            onCallClick={() => {}}
            onBookClick={() => {}}
          />
        </CardDemo>
      </Section>

      {/* ── Default Permutations ──────────────────────────────── */}
      <Section title="Default Permutations" description="The two standard card configurations. Both always show: rating, distance + address, and appointment availability. No languages or virtual visit by default.">
        <Row>
          <CardDemo>
            <Label>Book + Call</Label>
            <ProviderCard
              name="Dr. Sarah Johnson"
              specialty="Primary Care"
              providerType="female"
              rating={4.8}
              reviewCount={124}
              distance="0.3 mi"
              address="123 Medical Center Dr, New York, NY 10029"
              networkTier="in-network"
              networkLabel="In-Network"
              cost="$1,400"
              costLevel="lower"
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Today, May 7"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>Call only</Label>
            <ProviderCard
              name="Dr. Michael Chen"
              specialty="Orthopedics"
              providerType="male"
              rating={4.5}
              reviewCount={89}
              distance="1.2 mi"
              address="456 Health Plaza, New York, NY 10038"
              networkTier="in-network"
              networkLabel="In-Network"
              cost="$2,100"
              costLevel="typical"
              onCallClick={() => {}}
            />
          </CardDemo>
        </Row>
      </Section>

      {/* ── Cost Variant Gallery ──────────────────────────────── */}
      <Section title="Cost Variant Gallery" description="The 8 cost display variants from Figma. Each is a preset for label, hint, chip visibility, and typography (Tiempos for out-of-pocket cost, Founders for pre-insurance price).">
        <Row>
          <CardDemo>
            <Label>coinsurance · lower</Label>
            <ProviderCard
              name="Dr. Emily Park" specialty="Ophthalmologist" providerType="female"
              distance="1.2 mi" address="635 Madison Ave" rating={4.5} reviewCount={89}
              networkTier="in-network" networkLabel="In-Network"
              cost="$72" costVariant="coinsurance" costLevel="lower"
              nextAppointmentLabel="Next appointment" nextAppointmentDate="Wed, Mar 18"
              onCallClick={() => {}} onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>coinsurance · typical</Label>
            <ProviderCard
              name="Dr. Michael Torres" specialty="Ophthalmologist"
              distance="0.8 mi" address="200 Broadway" rating={4.7} reviewCount={156}
              networkTier="in-network" networkLabel="In-Network"
              cost="$155" costVariant="coinsurance" costLevel="typical"
              nextAppointmentLabel="Next appointment" nextAppointmentDate="Thu, Mar 19"
              onCallClick={() => {}} onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>coinsurance · higher</Label>
            <ProviderCard
              name="Dr. Robert Kim" specialty="Ophthalmologist"
              distance="2.1 mi" address="88 Lexington Ave" rating={4.9} reviewCount={201}
              networkTier="in-network" networkLabel="In-Network"
              cost="$210" costVariant="coinsurance" costLevel="higher"
              nextAppointmentLabel="Next appointment" nextAppointmentDate="Mon, Mar 23"
              onCallClick={() => {}} onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>cost-unknown</Label>
            <ProviderCard
              name="Dr. Lisa Nguyen" specialty="Ophthalmologist" providerType="female"
              distance="3.0 mi" address="500 Park Ave" rating={4.6} reviewCount={74}
              networkTier="in-network" networkLabel="In-Network"
              cost="$900–$1,200" costVariant="cost-unknown"
              nextAppointmentLabel="Next appointment" nextAppointmentDate="Fri, Mar 21"
              onCallClick={() => {}} onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>cost-no-comparison</Label>
            <ProviderCard
              name="Dr. Priya Shah" specialty="Cardiologist" providerType="female"
              distance="1.5 mi" address="160 E 34th St" rating={4.7} reviewCount={92}
              networkTier="in-network" networkLabel="In-Network"
              cost="$120" costVariant="cost-no-comparison"
              nextAppointmentLabel="Next appointment" nextAppointmentDate="Tue, Mar 19"
              onCallClick={() => {}} onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>copay-visit</Label>
            <ProviderCard
              name="Dr. David Hoffman" specialty="Orthopedist"
              distance="0.4 mi" address="555 Madison Ave" rating={4.7} reviewCount={134}
              networkTier="in-network" networkLabel="In-Network"
              cost="$30" costVariant="copay-visit"
              nextAppointmentLabel="Next appointment" nextAppointmentDate="Tomorrow, Mar 25"
              onCallClick={() => {}} onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>copay-procedure</Label>
            <ProviderCard
              name="Manhattan Imaging" specialty="Imaging center" providerType="facility"
              distance="0.9 mi" address="100 E 77th St" rating={4.3} reviewCount={67}
              networkTier="in-network" networkLabel="In-Network"
              cost="$150" costVariant="copay-procedure"
              onCallClick={() => {}} onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>not-covered</Label>
            <ProviderCard
              name="Dr. James Wright" specialty="Dermatologist"
              distance="1.8 mi" address="250 W 57th St" rating={4.4} reviewCount={63}
              networkTier="out-of-network" networkLabel="Out-of-Network"
              cost="$450" costVariant="not-covered"
              onCallClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>price-unknown</Label>
            <ProviderCard
              name="Dr. Rachel Lee" specialty="Orthopedist" providerType="female"
              distance="2.5 mi" address="500 Park Ave" rating={4.9} reviewCount={201}
              networkTier="tier-2" networkName="Aetna" networkLabel="Tier 2"
              cost="$900–$1,200" costVariant="price-unknown"
              onCallClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>hidden</Label>
            <ProviderCard
              name="Dr. Anthony Brooks" specialty="Orthopedist"
              distance="0.5 mi" address="350 5th Ave" rating={4.6} reviewCount={92}
              networkTier="in-network" networkLabel="In-Network"
              costVariant="hidden"
              nextAppointmentLabel="Next appointment" nextAppointmentDate="Today, Mar 24"
              onCallClick={() => {}} onBookClick={() => {}}
            />
          </CardDemo>
        </Row>
      </Section>

      {/* ── Chip Customization (coinsurance only) ─────────────── */}
      <Section title="Chip Customization" description="Within the coinsurance variant, override the chip label or hide the icon.">
        <Row>
          <CardDemo>
            <Label>Custom chip label</Label>
            <ProviderCard
              name="Dr. Sarah Chen" specialty="Dermatologist" providerType="female"
              distance="0.5 mi" address="100 E 77th St" rating={4.8} reviewCount={112}
              networkTier="in-network" networkLabel="In-Network"
              cost="$95" costVariant="coinsurance" costLevel="typical"
              costChipLabel="Check with insurer"
              nextAppointmentLabel="Next appointment" nextAppointmentDate="Tomorrow"
              onCallClick={() => {}} onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>Chip icon hidden</Label>
            <ProviderCard
              name="Dr. James Wright" specialty="Dermatologist"
              distance="1.8 mi" address="250 W 57th St" rating={4.4} reviewCount={63}
              networkTier="in-network" networkLabel="In-Network"
              cost="$180" costVariant="coinsurance" costLevel="higher" costChipHideIcon
              nextAppointmentLabel="Next appointment" nextAppointmentDate="Mon, Mar 23"
              onCallClick={() => {}} onBookClick={() => {}}
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
              rating={4.6}
              reviewCount={112}
              distance="0.5 mi"
              address="350 5th Ave, Suite 200, New York, NY 10118"
              networkTier="in-network"
              networkLabel="In-Network"
              cost="$185"
              costLevel="typical"
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Today, May 7"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>Tier 2</Label>
            <ProviderCard
              name="Dr. James Rivera"
              specialty="Cardiologist"
              initials="JR"
              rating={4.4}
              reviewCount={98}
              distance="1.0 mi"
              address="200 Broadway, Suite 1105, New York, NY 10038"
              networkTier="tier-2"
              networkName="Aetna"
              networkLabel="Tier 2"
              cost="$305"
              costLevel="typical"
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Tomorrow, May 8"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>Tier 3</Label>
            <ProviderCard
              name="Dr. Kevin Patel"
              specialty="Neurologist"
              initials="KP"
              rating={4.7}
              reviewCount={145}
              distance="1.8 mi"
              address="88 Lexington Ave, New York, NY 10016"
              networkTier="tier-3"
              networkName="BlueCross"
              networkLabel="Tier 3"
              cost="$450"
              costLevel="higher"
              onCallClick={() => {}}
            />
          </CardDemo>

          <CardDemo>
            <Label>Out-of-Network</Label>
            <ProviderCard
              name="Dr. Rachel Nguyen"
              specialty="Orthopedist"
              initials="RN"
              rating={4.9}
              reviewCount={201}
              distance="2.5 mi"
              address="500 Park Ave, Suite 200, New York, NY 10065"
              networkTier="out-of-network"
              networkLabel="Out-of-Network"
              cost="$890"
              costLevel="higher"
              onCallClick={() => {}}
            />
          </CardDemo>
        </Row>
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
            nextAppointmentDate="Tomorrow, Mar 25"
            onClick={() => alert('Navigate to provider detail')}
            onCallClick={() => {}}
            onBookClick={() => {}}
          />
        </CardDemo>
      </Section>

      {/* ── Horizontal Carousel ──────────────────────────────── */}
      <Section title="Horizontal Carousel" description="6 ProviderCards in a horizontal scroll. Each card is 360px wide with 16px gap. Cards 4–5 have no appointment — their height still matches.">
        <ScrollArea direction="horizontal" gap={16} snap>
          {([
            { name: 'Dr. Emily Park', specialty: 'Dermatologist', providerType: 'female' as const, distance: '0.3 mi', address: '123 Medical Center Dr, New York, NY', rating: 4.8, reviewCount: 124, networkTier: 'in-network' as const, cost: '$180', costLevel: 'lower' as const, nextAppointmentLabel: 'Next available', nextAppointmentDate: 'Tomorrow, Mar 22', hasBook: true },
            { name: 'Dr. Robert Kim', specialty: 'Dermatologist', providerType: 'male' as const, distance: '1.2 mi', address: '456 Park Ave, New York, NY', rating: 4.5, reviewCount: 89, networkTier: 'in-network' as const, cost: '$195', costLevel: 'lower' as const, nextAppointmentLabel: 'Next available', nextAppointmentDate: 'Mar 24', hasBook: true },
            { name: 'Dr. Jessica Rivera', specialty: 'Dermatologist', providerType: 'female' as const, distance: '2.1 mi', address: '789 Broadway, Suite 5, New York, NY', rating: 4.6, reviewCount: 156, networkTier: 'in-network' as const, cost: '$165', costLevel: 'lower' as const, nextAppointmentLabel: 'Next available', nextAppointmentDate: 'Mar 25', hasBook: true },
            { name: 'Dr. David Hoffman', specialty: 'Dermatologist', providerType: 'male' as const, distance: '0.8 mi', address: '555 Madison Ave, 17th Floor, New York, NY', rating: 4.7, reviewCount: 134, networkTier: 'in-network' as const, cost: '$210', costLevel: 'typical' as const, hasBook: false },
            { name: 'Manhattan Skin Center', specialty: 'Dermatology clinic', providerType: 'facility' as const, distance: '0.5 mi', address: '100 E 77th St, New York, NY', rating: 4.3, reviewCount: 67, networkTier: 'tier-2' as const, cost: '$250', costLevel: 'typical' as const, hasBook: false },
            { name: 'Dr. Sarah Chen', specialty: 'Dermatologist', providerType: 'female' as const, photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face', distance: '3.0 mi', address: '1468 Madison Ave, Suite 4B, New York, NY', rating: 4.9, reviewCount: 201, networkTier: 'in-network' as const, cost: '$140', costLevel: 'lower' as const, nextAppointmentLabel: 'Next available', nextAppointmentDate: 'Today, Mar 21', hasBook: true },
          ] as const).map((p, i) => (
            <div key={i} style={{ width: 360, minWidth: 360, flexShrink: 0, scrollSnapAlign: 'start', display: 'flex' }}>
              <ProviderCard
                name={p.name}
                specialty={p.specialty}
                providerType={p.providerType}
                photoUrl={'photoUrl' in p ? p.photoUrl : undefined}
                distance={p.distance}
                address={p.address}
                rating={p.rating}
                reviewCount={p.reviewCount}
                networkTier={p.networkTier}
                cost={p.cost}
                costLevel={p.costLevel}
                nextAppointmentLabel={'nextAppointmentLabel' in p ? p.nextAppointmentLabel : undefined}
                nextAppointmentDate={'nextAppointmentDate' in p ? p.nextAppointmentDate : undefined}
                onCallClick={() => {}}
                onBookClick={p.hasBook ? () => {} : undefined}
              />
            </div>
          ))}
        </ScrollArea>
      </Section>

      {/* ── Props Table ──────────────────────────────────────── */}
      <Section title="Props">
        <PropsTable data={propsData} />
      </Section>

      {/* ── Code Examples ────────────────────────────────────── */}
      <Section title="Usage" description="Import and use ProviderCard with your provider data. Pick the costVariant that matches the plan/coverage state; costLevel only applies within coinsurance.">
        <CodeBlock code={`import { ProviderCard } from '../components/ProviderCard'

// Coinsurance — shows cost chip (green/blue/red by costLevel)
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
  costVariant="coinsurance"
  costLevel="lower"
  nextAppointmentLabel="Next appointment"
  nextAppointmentDate="Tomorrow, Mar 25"
  onCallClick={() => handleCall(provider)}
  onBookClick={() => handleBook(provider)}
  onClick={() => navigate(\`/provider/\${provider.id}\`)}
/>

// Copay plan — flat cost, no chip, variant drives the label
<ProviderCard
  name="Dr. David Hoffman"
  specialty="Orthopedist"
  cost="$45"
  costVariant="copay-visit"
  networkTier="in-network"
  networkLabel="In-Network"
  onCallClick={() => {}}
  onBookClick={() => {}}
/>

// Service not covered — shows pre-insurance price (Founders, not Tiempos)
<ProviderCard
  name="Dr. James Wright"
  specialty="Dermatologist"
  cost="$450"
  costVariant="not-covered"
  networkTier="out-of-network"
  networkLabel="Out-of-Network"
  onCallClick={() => {}}
/>

// No cost section at all
<ProviderCard
  name="Dr. Anthony Brooks"
  specialty="Orthopedist"
  costVariant="hidden"
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
            title="costVariant is the primary cost selector"
            description="Pick one of 8 variants: coinsurance, cost-unknown, cost-no-comparison, copay-visit, copay-procedure, not-covered, price-unknown, hidden. It drives the label, hint, chip visibility, AND typography. costLevel only applies within coinsurance (to pick the chip color)."
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
            title="Cost vs Price typography"
            description="Out-of-pocket variants (coinsurance, cost-*, copay-*) use Tiempos Headline 20/24 as the hero value. Pre-insurance variants (not-covered, price-unknown) use Founders 16/19, intentionally subdued. Don't override the typography — pick the matching variant instead."
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
