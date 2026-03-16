import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import { semanticColors as sc } from '../../../tokens/semantic/colors'

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

// ── Placeholder image ────────────────────────────────────────

function ImagePlaceholder({ height = 120 }: { height?: number }) {
  return (
    <div
      style={{
        width: '100%',
        height,
        backgroundColor: sc.neutral.surface.subtle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="2" stroke={sc.neutral.text.light} strokeWidth="1.5" />
        <circle cx="12" cy="14" r="3" stroke={sc.neutral.text.light} strokeWidth="1.5" />
        <path d="M4 22l6-6 4 4 4-4 10 10" stroke={sc.neutral.text.light} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

// ── DS Icon imports ──────────────────────────────────────────
import HeartLine from '../../components/Icon/icons/line/Heart'
import StarLine from '../../components/Icon/icons/line/Star'
import ShieldLine from '../../components/Icon/icons/line/Shield'

// ── Props Data ───────────────────────────────────────────────

const propsData = [
  { prop: 'variant',     type: '"outline" | "elevated" | "filled"',       default: '"outline"', description: 'Visual style — outline (border), elevated (shadow), filled (subtle bg)' },
  { prop: 'radius',      type: '"sm" | "md" | "lg"',                      default: '"lg"',      description: 'Corner radius — sm (12px), md (16px), lg (24px)' },
  { prop: 'padding',     type: '"sm" | "md" | "lg" | "none"',            default: '"md"',      description: 'Inner padding — sm (16px), md (20px), lg (32px), none (0px)' },
  { prop: 'interactive', type: 'boolean',                                  default: 'false',     description: 'Adds hover shadow + lift effect for clickable cards' },
  { prop: 'as',          type: '"div" | "article" | "section" | "a"',    default: '"div"',     description: 'Semantic HTML element to render' },
  { prop: 'children',    type: 'ReactNode',                               default: '—',         description: 'Card content' },
  { prop: 'className',   type: 'string',                                  default: '""',        description: 'Additional Tailwind layout classes' },
  { prop: 'style',       type: 'CSSProperties',                           default: 'undefined', description: 'Override inline styles' },
]

// ── Page ─────────────────────────────────────────────────────

export function CardDoc() {
  return (
    <DocLayout
      title="Card"
      description="A container component with rounded corners, border or shadow, and optional hover-lift for interactive cards. Cards are the primary surface for grouping content."
    >

      {/* ── Variants ── */}
      <Section title="Variants" description="Three visual styles for different contexts. Outline is the default for most content.">
        <div className="flex flex-wrap gap-l">
          {(['outline', 'elevated', 'filled'] as const).map((variant) => (
            <div key={variant} className="flex flex-col items-center gap-xs">
              <Label>{variant}</Label>
              <Card variant={variant} style={{ width: 240 }}>
                <div className="flex flex-col gap-xs">
                  <p className="font-default text-[16px] font-medium" style={{ color: sc.neutral.text.DEFAULT }}>
                    Card Title
                  </p>
                  <p className="font-default text-[14px]" style={{ color: sc.neutral.text.dark }}>
                    Content inside a {variant} card with default radius and padding.
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Radius ── */}
      <Section title="Radius" description="Three radius options. Use lg (24px) for primary cards, sm (12px) for small nested cards.">
        <div className="flex flex-wrap gap-l">
          {([
            { r: 'sm' as const, label: 'sm — 12px' },
            { r: 'md' as const, label: 'md — 16px' },
            { r: 'lg' as const, label: 'lg — 24px' },
          ]).map(({ r, label }) => (
            <div key={r} className="flex flex-col items-center gap-xs">
              <Label>{label}</Label>
              <Card radius={r} style={{ width: 200 }}>
                <p className="font-default text-[14px]" style={{ color: sc.neutral.text.dark }}>
                  radius="{r}"
                </p>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Padding ── */}
      <Section title="Padding" description="Control inner spacing. Use 'none' when placing a full-bleed image at the top of a card.">
        <div className="flex flex-wrap gap-l items-start">
          {([
            { p: 'none' as const, label: 'none — 0px' },
            { p: 'sm' as const, label: 'sm — 16px' },
            { p: 'md' as const, label: 'md — 20px' },
            { p: 'lg' as const, label: 'lg — 32px' },
          ]).map(({ p, label }) => (
            <div key={p} className="flex flex-col items-center gap-xs">
              <Label>{label}</Label>
              <Card padding={p} style={{ width: 180 }}>
                <div style={{ padding: p === 'none' ? 12 : 0 }}>
                  <p className="font-default text-[14px]" style={{ color: sc.neutral.text.dark }}>
                    padding="{p}"
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Interactive ── */}
      <Section title="Interactive" description="Add interactive prop for clickable cards. Hover to see shadow lift effect.">
        <div className="flex flex-wrap gap-l">
          <div className="flex flex-col items-center gap-xs">
            <Label>interactive=false (default)</Label>
            <Card style={{ width: 240 }}>
              <div className="flex flex-col gap-xs">
                <p className="font-default text-[16px] font-medium" style={{ color: sc.neutral.text.DEFAULT }}>
                  Static Card
                </p>
                <p className="font-default text-[14px]" style={{ color: sc.neutral.text.dark }}>
                  No hover effect. Used for displaying content.
                </p>
              </div>
            </Card>
          </div>
          <div className="flex flex-col items-center gap-xs">
            <Label>interactive=true</Label>
            <Card interactive style={{ width: 240 }}>
              <div className="flex flex-col gap-xs">
                <p className="font-default text-[16px] font-medium" style={{ color: sc.neutral.text.DEFAULT }}>
                  Interactive Card
                </p>
                <p className="font-default text-[14px]" style={{ color: sc.neutral.text.dark }}>
                  Hover me — shadow and lift effect for clickable cards.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* ── Usage Examples ── */}
      <Section title="Usage Examples" description="Real-world card patterns from the Healthee app.">
        <div className="flex flex-col gap-xl">

          {/* Product Card */}
          <div>
            <Label>Product Card — image + title + CTA</Label>
            <Card padding="sm" interactive style={{ width: 320 }}>
              <div className="flex flex-col gap-s">
                <ImagePlaceholder height={136} />
                <div className="flex flex-col gap-xxs" style={{ paddingTop: 8, paddingBottom: 8 }}>
                  <h3 className="font-default text-[24px]" style={{ color: sc.neutral.text.DEFAULT, fontWeight: 400, margin: 0 }}>
                    Telehealth 24/7
                  </h3>
                  <p className="font-default text-[16px]" style={{ color: sc.neutral.text.dark, margin: 0 }}>
                    $20 per session until your deductible is met
                  </p>
                </div>
                <Button variant="secondary" size="sm" fullWidth>
                  Speak to a doctor
                </Button>
              </div>
            </Card>
          </div>

          {/* Info Card */}
          <div>
            <Label>Info Cards — icon + heading + description</Label>
            <div className="flex flex-wrap gap-m">
              {[
                { icon: <HeartLine size="md" />, title: 'Health Coverage', desc: 'Medical, dental, and vision benefits', bg: sc['accent-blue'].surface.subtle },
                { icon: <StarLine size="md" />, title: 'Wellness Programs', desc: 'Gym discounts, mental health support', bg: sc.primary.surface.subtle },
                { icon: <ShieldLine size="md" />, title: 'Family Protection', desc: 'Life insurance and disability coverage', bg: sc.success.surface.subtle },
              ].map((card) => (
                <Card key={card.title} variant="filled" radius="md" interactive style={{ width: 220, backgroundColor: card.bg }}>
                  <div className="flex flex-col gap-xs">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                        backgroundColor: sc.neutral.surface.negative,
                        color: sc.neutral.text.DEFAULT,
                      }}
                    >
                      {card.icon}
                    </div>
                    <p className="font-default text-[16px] font-medium" style={{ color: sc.neutral.text.DEFAULT }}>
                      {card.title}
                    </p>
                    <p className="font-default text-[14px]" style={{ color: sc.neutral.text.dark }}>
                      {card.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </Section>

      {/* ── Usage Rules ── */}
      <Section title="Usage Rules" description="Rules AI agents and developers MUST follow when using cards.">
        <div className="flex flex-col gap-s">
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-dark uppercase tracking-wider mb-xxs">1. Cards MUST always have rounded corners</p>
            <p className="font-default text-[13px] text-neutral-text-dark">
              Sharp (0px) corners are never allowed on cards. Use <code className="font-mono text-[12px] text-primary">radius="lg"</code> (24px) for primary cards and <code className="font-mono text-[12px] text-primary">radius="sm"</code> (12px) for smaller or nested cards. Never set border-radius to 0.
            </p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-dark uppercase tracking-wider mb-xxs">2. Choose the right variant</p>
            <p className="font-default text-[13px] text-neutral-text-dark">
              Use <code className="font-mono text-[12px] text-primary">outline</code> for most content cards (bordered, white background). Use <code className="font-mono text-[12px] text-primary">elevated</code> for floating or overlaid cards (no border, with shadow). Use <code className="font-mono text-[12px] text-primary">filled</code> for subtle grouped sections (gray background, no border).
            </p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-dark uppercase tracking-wider mb-xxs">3. Follow the nested radius rule</p>
            <p className="font-default text-[13px] text-neutral-text-dark">
              When placing rounded children inside a card, the child's radius must equal the card's radius minus the card's padding. Example: <code className="font-mono text-[12px] text-primary">radius="lg"</code> (24px) with <code className="font-mono text-[12px] text-primary">padding="sm"</code> (16px) → child uses 8px radius.
            </p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-dark uppercase tracking-wider mb-xxs">4. Use interactive prop for clickable cards</p>
            <p className="font-default text-[13px] text-neutral-text-dark">
              Always use <code className="font-mono text-[12px] text-primary">interactive</code> instead of adding custom hover shadows via Tailwind classes. This ensures consistent hover behavior (shadow lift + translateY) across all cards.
            </p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-dark uppercase tracking-wider mb-xxs">5. One card = one purpose</p>
            <p className="font-default text-[13px] text-neutral-text-dark">
              Don't overload cards with too many actions. A card should have at most one primary CTA. If more actions are needed, use a ghost or text link for the secondary action.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Props Table ── */}
      <Section title="Props" description="All available props for the Card component.">
        <div className="bg-neutral-negative rounded-xs border border-neutral-border-light overflow-hidden">
          <div className="grid grid-cols-[120px_1fr_80px_1fr] gap-xs px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
            {['Prop', 'Type', 'Default', 'Description'].map(h => (
              <p key={h} className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">{h}</p>
            ))}
          </div>
          {propsData.map((row, i) => (
            <div
              key={row.prop}
              className={`grid grid-cols-[120px_1fr_80px_1fr] gap-xs px-m py-xxs border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/40' : ''}`}
            >
              <code className="font-mono text-[12px] text-primary font-medium">{row.prop}</code>
              <code className="font-mono text-[11px] text-neutral-text-dark">{row.type}</code>
              <code className="font-mono text-[11px] text-neutral-text-light">{row.default}</code>
              <p className="font-default text-[12px] text-neutral-text-dark">{row.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Code ── */}
      <Section title="Code" description="Copy-paste ready usage examples.">
        <div className="flex flex-col gap-m">
          <div>
            <Label>Basic usage</Label>
            <CodeBlock code={`import { Card } from '@glow-ds/components'

// Outline card (default)
<Card>
  <h3>Title</h3>
  <p>Card content goes here.</p>
</Card>

// Elevated card with hover
<Card variant="elevated" interactive>
  <h3>Clickable Card</h3>
  <p>Hover to see lift effect.</p>
</Card>

// Small filled card
<Card variant="filled" radius="sm" padding="sm">
  <p>Compact info card.</p>
</Card>`} />
          </div>

          <div>
            <Label>Product card pattern</Label>
            <CodeBlock code={`<Card padding="sm" interactive>
  <div className="flex flex-col gap-s">
    {/* Full-bleed image — uses nested radius rule */}
    <div style={{ borderRadius: 8, overflow: 'hidden', height: 136 }}>
      <img src="..." alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>

    <div className="flex flex-col gap-xxs">
      <h3 style={{ fontSize: 24, fontWeight: 400 }}>Telehealth 24/7</h3>
      <p style={{ fontSize: 16, color: '#404040' }}>$20 per session</p>
    </div>

    <Button variant="secondary" size="sm" fullWidth>
      Speak to a doctor
    </Button>
  </div>
</Card>`} />
          </div>
        </div>
      </Section>

    </DocLayout>
  )
}
