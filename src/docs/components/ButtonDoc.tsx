import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Button } from '../../components/Button'
import type { ButtonVariant, ButtonSize } from '../../components/Button'

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

// ── Props Table ──────────────────────────────────────────────
const propsData = [
  { prop: 'variant',   type: '"primary" | "secondary" | "outline" | "subtle" | "ghost" | "destructive"', default: '"primary"',  description: 'Visual style — maps to Figma: Primary / Secondary / Tertiary 1 / Tertiary 2 / Link / Destructive' },
  { prop: 'size',      type: '"xs" | "sm" | "md" | "lg"',                                                default: '"md"',       description: 'Height: xs=36px, sm=40px, md=48px, lg=56px' },
  { prop: 'pill',      type: 'boolean',                                                                   default: 'false',      description: 'Round corners to 999px (pill shape)' },
  { prop: 'iconOnly',  type: 'boolean',                                                                   default: 'false',      description: 'Square icon-only button (width = height)' },
  { prop: 'disabled',  type: 'boolean',                                                                   default: 'false',      description: 'Disable all interactions — uses variant-specific disabled colors' },
  { prop: 'loading',   type: 'boolean',                                                                   default: 'false',      description: 'Show spinner, disable interaction' },
  { prop: 'fullWidth', type: 'boolean',                                                                   default: 'false',      description: 'Stretch to container width' },
  { prop: 'iconLeft',  type: 'ReactNode',                                                                 default: '—',          description: 'Icon before label' },
  { prop: 'iconRight', type: 'ReactNode',                                                                 default: '—',          description: 'Icon after label' },
  { prop: 'onClick',   type: '() => void',                                                                default: '—',          description: 'Click handler' },
  { prop: 'children',  type: 'ReactNode',                                                                 default: 'required',   description: 'Button label (or icon content when iconOnly)' },
]

// ── DS Icon imports ──────────────────────────────────────────
import ArrowRightCrFrLine from '../../components/Icon/icons/line/ArrowRightCrFr'
import PlusLine from '../../components/Icon/icons/line/Plus'
import TrashCanLine from '../../components/Icon/icons/line/TrashCan'
import SearchLine from '../../components/Icon/icons/line/Search'

// ── Page ─────────────────────────────────────────────────────
export function ButtonDoc() {
  const [loadingState, setLoadingState] = useState<Record<string, boolean>>({})

  const triggerLoad = (key: string) => {
    setLoadingState(s => ({ ...s, [key]: true }))
    setTimeout(() => setLoadingState(s => ({ ...s, [key]: false })), 2000)
  }

  const allVariants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'subtle', 'ghost', 'destructive']
  const allSizes:    ButtonSize[]    = ['xs', 'sm', 'md', 'lg']

  return (
    <DocLayout
      title="Button"
      description="The primary action element. Use Button for all user-initiated actions — never raw <button> elements."
    >

      {/* ── Variants ── */}
      <Section title="Variants" description="Six visual variants for different action hierarchies. Maps to Figma: Primary → primary, Secondary → secondary, Tertiary 1 → outline, Tertiary 2 → subtle, Link → ghost. Destructive is added for delete/irreversible actions.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Primary — Main CTAs (orange filled)">
            <Button variant="primary">Save Changes</Button>
          </Row>
          <Row label="Secondary — Strong supporting actions (black filled)">
            <Button variant="secondary">Continue</Button>
          </Row>
          <Row label="Outline — Neutral with border (Figma: Tertiary 1)">
            <Button variant="outline">Cancel</Button>
          </Row>
          <Row label="Subtle — Quiet on gray background (Figma: Tertiary 2)">
            <Button variant="subtle">Learn More</Button>
          </Row>
          <Row label="Ghost — Minimal / link-style (Figma: Link)">
            <Button variant="ghost">View Details</Button>
          </Row>
          <Row label="Destructive — Delete / irreversible (red filled)">
            <Button variant="destructive">Delete Account</Button>
          </Row>
        </div>
      </Section>

      {/* ── Sizes ── */}
      <Section title="Sizes" description="Four sizes — xs (36px) for compact, sm (40px) for secondary, md (48px) as default, lg (56px) for marketing hero CTAs only. Avoid lg in product UIs.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="All sizes">
            {allSizes.map(s => (
              <Button key={s} size={s}>
                {s === 'xs' ? 'X-Small' : s === 'sm' ? 'Small' : s === 'md' ? 'Medium' : 'Large'}
              </Button>
            ))}
          </Row>
          <Row label="All variants at default size (md)">
            {allVariants.map(v => (
              <Button key={v} variant={v}>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </Button>
            ))}
          </Row>
        </div>
      </Section>

      {/* ── States ── */}
      <Section title="States" description="Hover (try hovering), disabled, and loading states. Each variant has unique disabled colors — no opacity hack.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Disabled — each variant has its own disabled palette">
            {allVariants.map(v => (
              <Button key={v} variant={v} disabled>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </Button>
            ))}
          </Row>
          <Row label="Loading — click to trigger 2s loading">
            {allVariants.map(v => (
              <Button
                key={v}
                variant={v}
                loading={loadingState[v] ?? false}
                onClick={() => triggerLoad(v)}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </Button>
            ))}
          </Row>
        </div>
      </Section>

      {/* ── Pill ── */}
      <Section title="Pill" description="pill={true} rounds the button to 999px radius, creating a capsule shape.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Pill variants">
            {allVariants.map(v => (
              <Button key={v} variant={v} pill>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </Button>
            ))}
          </Row>
          <Row label="Pill sizes">
            {allSizes.map(s => (
              <Button key={s} size={s} pill>
                {s.toUpperCase()}
              </Button>
            ))}
          </Row>
        </div>
      </Section>

      {/* ── With Icons ── */}
      <Section title="With Icons" description="Use iconLeft or iconRight to add icons beside the label.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Icon left">
            <Button variant="primary"   iconLeft={<PlusLine size={14} />}>New Item</Button>
            <Button variant="secondary" iconLeft={<PlusLine size={14} />}>New Item</Button>
            <Button variant="outline"   iconLeft={<PlusLine size={14} />}>New Item</Button>
          </Row>
          <Row label="Icon right">
            <Button variant="primary"   iconRight={<ArrowRightCrFrLine size={14} />}>Continue</Button>
            <Button variant="secondary" iconRight={<ArrowRightCrFrLine size={14} />}>Continue</Button>
            <Button variant="ghost"     iconRight={<ArrowRightCrFrLine size={14} />}>Continue</Button>
          </Row>
        </div>
      </Section>

      {/* ── Icon Only ── */}
      <Section title="Icon Only" description="iconOnly renders a square button (width=height). Pass icon as iconLeft, iconRight, or children.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Icon-only variants">
            <Button variant="primary"     iconOnly iconLeft={<PlusLine size={14} />}>+</Button>
            <Button variant="secondary"   iconOnly iconLeft={<SearchLine size="sm" />}>S</Button>
            <Button variant="outline"     iconOnly iconLeft={<PlusLine size={14} />}>+</Button>
            <Button variant="subtle"      iconOnly iconLeft={<SearchLine size="sm" />}>S</Button>
            <Button variant="destructive" iconOnly iconLeft={<TrashCanLine size="sm" />}>D</Button>
          </Row>
          <Row label="Icon-only sizes">
            {allSizes.map(s => (
              <Button key={s} size={s} variant="primary" iconOnly iconLeft={<PlusLine size={14} />}>+</Button>
            ))}
          </Row>
          <Row label="Icon-only + pill">
            {allSizes.map(s => (
              <Button key={s} size={s} variant="secondary" iconOnly pill iconLeft={<SearchLine size="sm" />}>S</Button>
            ))}
          </Row>
        </div>
      </Section>

      {/* ── Full Width ── */}
      <Section title="Full Width" description="fullWidth stretches the button to fill its container.">
        <div className="bg-neutral-subtle rounded-xs p-l max-w-[360px] flex flex-col gap-s">
          <Button variant="primary"   fullWidth>Submit Form</Button>
          <Button variant="secondary" fullWidth>Go Back</Button>
          <Button variant="outline"   fullWidth>Cancel</Button>
        </div>
      </Section>

      {/* ── Usage ── */}
      <Section title="Usage" description="Copy-paste examples.">
        <CodeBlock code={`import { Button } from '@/components/Button'

// Primary CTA
<Button variant="primary" size="md">
  Save Changes
</Button>

// Secondary with icon
<Button variant="secondary" iconLeft={<PlusLine size={14} />}>
  Add Item
</Button>

// Outline (Figma: Tertiary 1)
<Button variant="outline">
  Cancel
</Button>

// Pill shape
<Button variant="primary" pill>
  Get Started
</Button>

// Icon-only square button
<Button variant="subtle" iconOnly iconLeft={<SearchLine size="sm" />}>
  Search
</Button>

// Loading state
<Button variant="primary" loading={isSubmitting} onClick={handleSubmit}>
  Submit
</Button>

// Destructive action
<Button variant="destructive" onClick={handleDelete}>
  Delete Account
</Button>`} />
      </Section>

      {/* ── Usage Rules ── */}
      <Section title="Usage Rules" description="Button variant selection rules derived from real product patterns. AI agents MUST follow these when generating screens.">

        {/* Rule 1 — One primary per screen */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">1. Maximum ONE primary (orange) per screen</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">Primary is reserved for the single most important action: search, submit, show results. Not every screen needs a primary.</p>
          <div className="bg-neutral-subtle rounded-xs p-m flex flex-wrap items-center gap-s">
            <Button variant="primary" iconOnly pill iconLeft={<SearchLine size="sm" />}>Search</Button>
            <span className="font-default text-[12px] text-neutral-text-light">← Only primary on the page</span>
          </div>
        </div>

        {/* Rule 2 — Never primary + secondary side by side */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">2. Never primary + secondary side by side</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">Two filled buttons compete for attention. Use: primary + outline, or secondary + outline.</p>
          <div className="flex flex-col gap-s">
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">✓ CORRECT</p>
              <div className="flex items-center gap-s">
                <Button variant="outline">Reset</Button>
                <Button variant="primary">Show 839 Results</Button>
              </div>
            </div>
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">✗ INCORRECT</p>
              <div className="flex items-center gap-s">
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Submit</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Rule 3 — Secondary for card CTAs */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">3. Secondary (black) for repeated card CTAs</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">When the same action repeats across cards (Book, Connect), always use secondary — never primary.</p>
          <div className="bg-neutral-subtle rounded-xs p-m flex flex-wrap items-center gap-s">
            <Button variant="secondary" size="sm">Book</Button>
            <Button variant="secondary" size="sm">Book</Button>
            <Button variant="secondary" size="sm">Book</Button>
            <span className="font-default text-[12px] text-neutral-text-light">← Each card's CTA</span>
          </div>
        </div>

        {/* Rule 4 — Outline for secondary actions */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">4. Outline for secondary actions, filters & toggles</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">Cancel, Reset, Edit, filter chips, toggles — everything that is not the primary CTA.</p>
          <div className="bg-neutral-subtle rounded-xs p-m flex flex-wrap items-center gap-s">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button variant="outline" size="sm">Edit</Button>
            <Button variant="outline" size="sm" pill>Medical</Button>
            <Button variant="outline" size="sm" pill>Dental</Button>
            <Button variant="outline" size="sm" pill>Vision</Button>
          </div>
        </div>

        {/* Rule 5 — Ghost for navigation */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">5. Ghost for minimal navigation and quiet actions</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">"Show all →", favorite hearts, sidebar nav items. Should not draw attention.</p>
          <div className="bg-neutral-subtle rounded-xs p-m flex flex-wrap items-center gap-s">
            <Button variant="ghost" size="sm" iconRight={<ArrowRightCrFrLine size={14} />}>Show all</Button>
            <Button variant="ghost" size="sm">Sort by distance</Button>
          </div>
        </div>

        {/* Rule 6 — Info pages without primary */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">6. Info/settings pages — no primary button</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">Profile, account settings, expenses — use outline and ghost only. A secondary may appear for informational CTAs.</p>
          <div className="bg-neutral-subtle rounded-xs p-m flex flex-wrap items-center gap-s">
            <Button variant="outline" size="sm" iconLeft={<PlusLine size={14} />}>Add family member</Button>
            <Button variant="secondary" size="sm">How coverage works</Button>
          </div>
        </div>

        {/* Rule 7 — Modal pattern */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">7. Modal pattern: primary confirm + outline cancel</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">The action that closes the modal positively is primary (right side). Cancel/reset is outline (left side).</p>
          <div className="bg-neutral-subtle rounded-xs p-m flex items-center gap-s">
            <Button variant="outline">Reset</Button>
            <Button variant="primary">Show Results</Button>
          </div>
        </div>

        {/* Rule 8 — Destructive only in confirmation */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">8. Destructive — only inside confirmation dialogs</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">Never use red for the initial delete trigger. Destructive appears only in the "Are you sure?" confirmation step.</p>
          <div className="flex flex-col gap-s">
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">✓ CORRECT — Confirmation dialog</p>
              <div className="flex items-center gap-s">
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </div>
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">✗ INCORRECT — Red button directly on page</p>
              <div className="flex items-center gap-s">
                <Button variant="destructive" size="sm">Delete</Button>
                <span className="font-default text-[12px] text-neutral-text-light">← Should be outline or ghost</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rule 9 — Icon-only hierarchy */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">9. Icon-only buttons follow the same hierarchy</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">Search = primary pill, Phone = outline, Heart/favorite = ghost, Edit = ghost.</p>
          <div className="bg-neutral-subtle rounded-xs p-m flex flex-wrap items-center gap-m">
            <div className="flex flex-col items-center gap-xxs">
              <Button variant="primary" iconOnly pill iconLeft={<SearchLine size="sm" />}>S</Button>
              <span className="font-default text-[11px] text-neutral-text-light">Search</span>
            </div>
            <div className="flex flex-col items-center gap-xxs">
              <Button variant="outline" iconOnly iconLeft={<PlusLine size={14} />}>+</Button>
              <span className="font-default text-[11px] text-neutral-text-light">Add</span>
            </div>
            <div className="flex flex-col items-center gap-xxs">
              <Button variant="ghost" iconOnly iconLeft={<TrashCanLine size="sm" />}>D</Button>
              <span className="font-default text-[11px] text-neutral-text-light">Delete trigger</span>
            </div>
          </div>
        </div>

        {/* Rule 10 — Size guidance */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">10. Reserve lg (56px) for marketing — use md (48px) as default</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">The lg size creates a bold, high-impact button suitable for landing pages and marketing hero sections. In product UIs (forms, cards, toolbars), always default to md or sm — oversized buttons break visual balance and make the interface feel heavy.</p>
          <div className="flex flex-col gap-s">
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">✓ CORRECT — lg in a marketing hero</p>
              <div className="flex items-center gap-s">
                <Button variant="primary" size="lg" iconRight={<ArrowRightCrFrLine size={14} />}>Get Started Free</Button>
                <span className="font-default text-[12px] text-neutral-text-light">← Landing page hero CTA</span>
              </div>
            </div>
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">✓ CORRECT — md in a product form</p>
              <div className="flex items-center gap-s">
                <Button variant="primary" size="md">Search Flights</Button>
                <span className="font-default text-[12px] text-neutral-text-light">← Inline with form fields</span>
              </div>
            </div>
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">✗ AVOID — lg inside a form</p>
              <div className="flex items-center gap-s">
                <Button variant="primary" size="lg">Search Flights</Button>
                <span className="font-default text-[12px] text-neutral-text-light">← Too large, dominates the form</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rule 11 — Button width */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">11. Button width: hug-content or fullWidth — never a fixed or intermediate width</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">A Button either wraps its text label (default, no width prop) or stretches to fill its container (<code className="font-mono text-[12px] text-primary">fullWidth</code>). Never set a specific pixel width, percentage width, or let a flex/grid parent stretch a button to an arbitrary intermediate width. If a button appears wider than its text, something is wrong.</p>
          <div className="flex flex-col gap-s">
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">✓ CORRECT — Button hugs its content</p>
              <div className="flex items-center gap-s">
                <Button variant="outline" size="xs">Add dependents</Button>
                <span className="font-default text-[12px] text-neutral-text-light">← Width determined by text</span>
              </div>
            </div>
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">✓ CORRECT — fullWidth fills container</p>
              <div className="max-w-[280px]">
                <Button variant="secondary" size="xs" fullWidth>Find care</Button>
              </div>
            </div>
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">✗ AVOID — Button stretched by flex parent</p>
              <div className="flex flex-col w-[280px]">
                <Button variant="outline" size="xs">Add dependents</Button>
              </div>
              <p className="font-default text-[12px] text-neutral-text-light mt-xxs">← Button is wider than its text because the flex column stretches children. Fix: add <code className="font-mono text-[11px] text-primary">items-start</code> to the parent, or <code className="font-mono text-[11px] text-primary">self-start</code> to the button.</p>
            </div>
          </div>
        </div>

        {/* Pairing matrix */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">Variant Pairing Matrix</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">Which variants can appear next to each other:</p>
          <div className="bg-white rounded-xs border border-neutral-border-light overflow-hidden">
            <div className="grid grid-cols-[1fr_80px] gap-m px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
              <p className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">Pairing</p>
              <p className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">Allowed</p>
            </div>
            {[
              { pair: 'primary + outline',     ok: true },
              { pair: 'primary + ghost',       ok: true },
              { pair: 'secondary + outline',   ok: true },
              { pair: 'secondary + ghost',     ok: true },
              { pair: 'outline + outline',     ok: true },
              { pair: 'outline + ghost',       ok: true },
              { pair: 'ghost + ghost',         ok: true },
              { pair: 'primary + secondary',   ok: false },
              { pair: 'primary + destructive', ok: false },
              { pair: 'primary + primary',     ok: false },
            ].map((row, i) => (
              <div key={row.pair} className={`grid grid-cols-[1fr_80px] gap-m px-m py-xs border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/40' : ''}`}>
                <code className="font-mono text-[12px] text-neutral-text-dark">{row.pair}</code>
                <span className={`font-default text-[12px] ${row.ok ? 'text-success-text' : 'text-error'}`}>{row.ok ? '✓ Yes' : '✗ Never'}</span>
              </div>
            ))}
          </div>
        </div>

      </Section>

      {/* ── Props ── */}
      <Section title="Props">
        <div className="bg-white rounded-xs border border-neutral-border-light overflow-hidden">
          {/* header */}
          <div className="grid grid-cols-[120px_1fr_80px_1fr] gap-m px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
            {['Prop', 'Type', 'Default', 'Description'].map(h => (
              <p key={h} className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">{h}</p>
            ))}
          </div>
          {propsData.map((row, i) => (
            <div
              key={row.prop}
              className={`grid grid-cols-[120px_1fr_80px_1fr] gap-m px-m py-s border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/40' : ''}`}
            >
              <code className="font-mono text-[12px] text-primary">{row.prop}</code>
              <code className="font-mono text-[11px] text-neutral-text-dark break-all">{row.type}</code>
              <code className="font-mono text-[11px] text-neutral-text-light">{row.default}</code>
              <p className="font-default text-[12px] text-neutral-text-dark">{row.description}</p>
            </div>
          ))}
        </div>
      </Section>

    </DocLayout>
  )
}
