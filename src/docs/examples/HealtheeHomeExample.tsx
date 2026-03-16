import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import ArrowRightCrFrLine from '../../components/Icon/icons/line/ArrowRightCrFr'
import HeartLine from '../../components/Icon/icons/line/Heart'
import HeartSolid from '../../components/Icon/icons/solid/Heart'
import { IconButton } from '../../components/IconButton'
import { AppNavBar } from './shared/AppNavBar'

// ── SVG Icons (kept inline — no DS equivalent) ────────────
function CheckmarkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  )
}

function ZoeSparkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l1.5 4.5L16 8l-4.5 1.5L10 14l-1.5-4.5L4 8l4.5-1.5L10 2Z" fill="white" /><path d="M15 12l.75 2.25L18 15l-2.25.75L15 18l-.75-2.25L12 15l2.25-.75L15 12Z" fill="white" /></svg>
  )
}

// ── Specialty Icon (gradient circle with emoji) ────────────
const specialtyIcons: Record<string, { emoji: string; bg: string }> = {
  'Immediate care': { emoji: '🏥', bg: 'linear-gradient(135deg, #ffe0cc, #ffd1b3)' },
  'Primary care': { emoji: '👩‍⚕️', bg: 'linear-gradient(135deg, #e8d5f5, #d4b8eb)' },
  'Dentist': { emoji: '🦷', bg: 'linear-gradient(135deg, #d5eef5, #b8dfeb)' },
  'OB-GYN': { emoji: '🩺', bg: 'linear-gradient(135deg, #fce4ec, #f8bbd0)' },
  'Pediatrician': { emoji: '👶', bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' },
  'Eye doctor': { emoji: '👁️', bg: 'linear-gradient(135deg, #e3f2fd, #bbdefb)' },
  'Orthopedist': { emoji: '🦴', bg: 'linear-gradient(135deg, #fff3e0, #ffe0b2)' },
  'Psychiatrist': { emoji: '🧠', bg: 'linear-gradient(135deg, #f3e5f5, #e1bee7)' },
  'Dermatologist': { emoji: '🧴', bg: 'linear-gradient(135deg, #e0f7fa, #b2ebf2)' },
  'ENT': { emoji: '👂', bg: 'linear-gradient(135deg, #fce4ec, #f8bbd0)' },
}

// ── Placeholder images (colored gradient blocks) ──────────
function PlaceholderImage({ seed, className }: { seed: number; className?: string }) {
  const gradients = [
    'linear-gradient(135deg, #f5e6d3, #e8d5c0)',
    'linear-gradient(135deg, #d4e5f7, #bcd4e8)',
    'linear-gradient(135deg, #e8d5f0, #d4bce3)',
    'linear-gradient(135deg, #d5eed8, #bce3c0)',
    'linear-gradient(135deg, #f5e0d3, #e8cdc0)',
    'linear-gradient(135deg, #e0e8f5, #c8d4e8)',
  ]
  return (
    <div
      className={className}
      style={{ background: gradients[seed % gradients.length] }}
    />
  )
}


// ══════════════════════════════════════════════════════════
// HealtheeHomeScreen — Full-screen interactive homepage
// ══════════════════════════════════════════════════════════
export function HealtheeHomeScreen() {
  const [activeTab, setActiveTab] = useState('home')
  const [activeCategory, setActiveCategory] = useState('fully-covered')
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const toggleFav = (id: number) => {
    setFavorites(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const categories = [
    { id: 'fully-covered', label: 'Fully covered benefits' },
    { id: 'primary-care', label: 'Primary care' },
    { id: 'preventive', label: 'Preventive & wellbeing' },
    { id: 'pharmacy', label: 'Pharmacy' },
    { id: 'mental-health', label: 'Mental health' },
    { id: 'ancillary', label: 'Ancillary benefits' },
    { id: 'child', label: 'Child health' },
    { id: 'womens', label: "Women's health" },
  ]

  const specialties = [
    'Primary care', 'Dentist', 'OB-GYN', 'Pediatrician',
    'Eye doctor', 'Orthopedist', 'Psychiatrist', 'Dermatologist', 'ENT',
  ]

  const benefits = [
    { id: 1, name: 'Diabetes management - Preventive', cost: "You'll pay $40 per visit", details: 'Applies always, regardless of your deductible status' },
    { id: 2, name: 'Physical Therapy', cost: "You'll pay $40 per visit", details: 'Applies always, regardless of your deductible status' },
    { id: 3, name: 'Diabetes management - Preventive', cost: "You'll pay $40 per visit", details: 'Applies always, regardless of your deductible status' },
    { id: 4, name: 'Maternity care', cost: "You'll pay $40 per visit", details: 'Applies always, regardless of your deductible status' },
    { id: 5, name: 'Mental health', cost: "You'll pay $40 per visit", details: 'Applies always, regardless of your deductible status' },
  ]

  return (
    <div className="min-h-screen bg-neutral-negative">
      {/* ── Nav Bar (shared component) ── */}
      <AppNavBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ── Hero Greeting ── */}
      <section className="pt-xxxxl px-xxl pb-xl">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="font-display text-[40px] leading-[48px] text-neutral">
            Hi <span className="text-primary">Christina</span>, how can we help?
          </h1>
        </div>
      </section>

      {/* ── Top Picks ── */}
      <section className="px-xxl pb-xxxl">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-display text-center mb-xl text-[24px] leading-[29px] text-neutral">
            Explore top picks for you
          </h2>

          <div className="flex gap-xl items-stretch">
            {/* Left — Action Cards */}
            <div className="flex-1 flex flex-col gap-l">
              {/* Card: Add family */}
              <Card variant="outline" radius="lg" padding="sm" className="flex items-center gap-s">
                <PlaceholderImage seed={0} className="w-[116px] h-[116px] shrink-0 rounded-xxs" />
                <div className="flex flex-col gap-s items-start">
                  <div>
                    <p className="font-default font-medium text-[18px] text-neutral leading-[21px]">Add family to Healthee</p>
                    <p className="font-default text-[16px] text-neutral leading-[19px] mt-xxxs">Give your family quick access to Healthee</p>
                  </div>
                  <Button variant="outline" size="xs">Add dependents</Button>
                </div>
              </Card>

              {/* Card: Fitness journey */}
              <Card variant="outline" radius="lg" padding="sm" className="flex items-center gap-s">
                <PlaceholderImage seed={1} className="w-[116px] h-[116px] shrink-0 rounded-xxs" />
                <div className="flex flex-col gap-s items-start">
                  <div>
                    <p className="font-default font-medium text-[18px] text-neutral leading-[21px]">Start your 2025 fitness journey</p>
                    <p className="font-default text-[16px] text-neutral leading-[19px] mt-xxxs">Get free gym access at premium fitness centers near you</p>
                  </div>
                  <Button variant="outline" size="xs">Unlock benefit</Button>
                </div>
              </Card>
            </div>

            {/* Right — Telehealth Card */}
            <Card variant="outline" radius="lg" padding="none" className="flex flex-col" style={{ width: 380 }}>
              {/* Image area */}
              <div className="relative" style={{ height: 180 }}>
                <PlaceholderImage seed={2} className="w-full h-full" />
                {/* Doctegrity badge */}
                <div
                  className="absolute top-s left-s bg-neutral-negative rounded-full px-xxs py-xxxs"
                >
                  <span className="font-default font-medium text-[14px] text-neutral">by Doctegrity</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-s p-m">
                <div>
                  <p className="font-default text-[24px] text-neutral leading-[28px]">Free telehealth</p>
                  <p className="font-default text-[16px] text-neutral leading-[19px] mt-xxs">$20 per session until your deductible is met</p>
                </div>

                {/* Checkmark items */}
                <div className="flex flex-col gap-s">
                  <div className="flex items-start gap-xxs">
                    <div
                      className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0 mt-[1px] bg-accent-blue"
                    >
                      <CheckmarkIcon />
                    </div>
                    <span className="font-default text-[16px] text-neutral leading-[19px]">Primary care, mental health, and more</span>
                  </div>
                  <div className="flex items-start gap-xxs">
                    <div
                      className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0 mt-[1px] bg-accent-blue"
                    >
                      <CheckmarkIcon />
                    </div>
                    <span className="font-default text-[16px] text-neutral leading-[19px]">Get a prescription online</span>
                  </div>
                </div>

                <Button variant="secondary" size="sm" fullWidth>Speak to a provider</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Find Top Specialists ── */}
      <section className="px-xxl pb-xxxl">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-display text-center mb-xl text-[24px] leading-[29px] text-neutral">
            Find top specialists near you
          </h2>

          <div className="flex flex-col gap-l">
            {/* Row 1: Immediate care (wide) + 2 regular */}
            <div className="grid grid-cols-3 gap-l">
              {/* Immediate care — wide card */}
              <Card variant="outline" radius="sm" padding="md" interactive className="flex flex-col justify-between" style={{ height: 156 }}>
                <div
                  className="w-[40px] h-[40px] rounded-xxs flex items-center justify-center"
                  style={{ background: specialtyIcons['Immediate care'].bg }}
                >
                  <span className="text-[20px]">{specialtyIcons['Immediate care'].emoji}</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-default font-medium text-[18px] text-neutral leading-[21px]">Immediate care options</p>
                    <p className="font-default text-[14px] text-neutral-text-dark leading-[17px] mt-xxxs">
                      Access telehealth, clinics, urgent care, and emergency services quickly and easily.
                    </p>
                  </div>
                  <div className="shrink-0 ml-s">
                    <ArrowRightCrFrLine size={14} />
                  </div>
                </div>
              </Card>

              {/* Regular specialty cards */}
              {specialties.slice(0, 2).map(name => (
                <Card key={name} variant="outline" radius="sm" padding="md" interactive className="flex flex-col justify-between" style={{ height: 156 }}>
                  <div
                    className="w-[40px] h-[40px] rounded-xxs flex items-center justify-center"
                    style={{ background: specialtyIcons[name]?.bg }}
                  >
                    <span className="text-[20px]">{specialtyIcons[name]?.emoji}</span>
                  </div>
                  <p className="font-default font-medium text-[16px] text-neutral leading-[19px]">{name}</p>
                </Card>
              ))}
            </div>

            {/* Row 2: 4 cards */}
            <div className="grid grid-cols-4 gap-l">
              {specialties.slice(2, 6).map(name => (
                <Card key={name} variant="outline" radius="sm" padding="md" interactive className="flex flex-col justify-between" style={{ height: 156 }}>
                  <div
                    className="w-[40px] h-[40px] rounded-xxs flex items-center justify-center"
                    style={{ background: specialtyIcons[name]?.bg }}
                  >
                    <span className="text-[20px]">{specialtyIcons[name]?.emoji}</span>
                  </div>
                  <p className="font-default font-medium text-[16px] text-neutral leading-[19px]">{name}</p>
                </Card>
              ))}
            </div>

            {/* Row 3: 3 cards + "10k providers" */}
            <div className="grid grid-cols-4 gap-l">
              {specialties.slice(6, 9).map(name => (
                <Card key={name} variant="outline" radius="sm" padding="md" interactive className="flex flex-col justify-between" style={{ height: 156 }}>
                  <div
                    className="w-[40px] h-[40px] rounded-xxs flex items-center justify-center"
                    style={{ background: specialtyIcons[name]?.bg }}
                  >
                    <span className="text-[20px]">{specialtyIcons[name]?.emoji}</span>
                  </div>
                  <p className="font-default font-medium text-[16px] text-neutral leading-[19px]">{name}</p>
                </Card>
              ))}

              {/* +10k providers card */}
              <Card variant="outline" radius="sm" padding="md" interactive className="flex flex-col items-center justify-center" style={{ height: 156 }}>
                {/* Avatar stack */}
                <div className="flex items-center mb-xs ml-s">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className={`w-[36px] h-[36px] rounded-full border-2 border-white${i > 0 ? ' -ml-xs' : ''}`}
                      style={{ background: ['#ffdccc', '#d5eef5', '#e8d5f5'][i] }}
                    />
                  ))}
                </div>
                <p className="font-default font-medium text-[14px] text-neutral-text-dark text-center">
                  +10k provider near you
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore Your Benefits ── */}
      <section className="px-xxl pb-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-display text-center mb-xl text-[24px] leading-[29px] text-neutral">
            Explore your benefits
          </h2>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-xs mb-l">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant="outline"
                size="sm"
                pill
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className={activeCategory === cat.id ? 'text-neutral font-semibold' : ''}>
                  {cat.label}
                </span>
              </Button>
            ))}
            <Button variant="ghost" size="sm" pill iconRight={<ArrowRightCrFrLine size={14} />}>
              Explore all benefits
            </Button>
          </div>

          {/* Benefit cards grid */}
          <div className="grid grid-cols-3 gap-l">
            {benefits.map((benefit, idx) => (
              <Card key={benefit.id} variant="outline" radius="lg" padding="sm" interactive className="flex flex-col">
                {/* Image area */}
                <div className="relative rounded-xxs overflow-hidden mb-s" style={{ height: 120 }}>
                  <PlaceholderImage seed={idx + 3} className="w-full h-full" />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent)' }}
                  />
                  {/* Heart button */}
                  <div className="absolute top-xxs right-xxs">
                    <IconButton
                      icon={favorites.has(benefit.id) ? <HeartSolid size="sm" /> : <HeartLine size="sm" />}
                      aria-label={favorites.has(benefit.id) ? 'Remove from favorites' : 'Save to favorites'}
                      variant="outline"
                      size="sm"
                      pressed={favorites.has(benefit.id)}
                      onClick={() => toggleFav(benefit.id)}
                    />
                  </div>
                </div>

                {/* Benefit name */}
                <div className="border-b border-neutral-border-strong pb-xs mb-xs" style={{ minHeight: 52 }}>
                  <p
                    className="font-display font-medium text-neutral leading-[24px] text-[20px]"
                  >
                    {benefit.name}
                  </p>
                </div>

                {/* Cost info */}
                <div className="flex flex-col gap-xxxs mb-m" style={{ minHeight: 42 }}>
                  <p className="font-default font-medium text-[16px] text-neutral leading-[19px]">{benefit.cost}</p>
                  <p className="font-default text-[14px] leading-[17px] text-neutral-text-dark">
                    {benefit.details}
                  </p>
                </div>

                {/* CTA */}
                <Button variant="secondary" size="xs" fullWidth>Find care</Button>
              </Card>
            ))}

            {/* "More benefits" card */}
            <Card variant="outline" radius="lg" padding="sm" interactive className="flex flex-col items-center justify-center" style={{ minHeight: 300 }}>
              {/* Collage of thumbnails */}
              <div className="grid grid-cols-2 gap-xxs mb-m" style={{ width: 140 }}>
                {[0, 1, 2, 3].map(i => (
                  <PlaceholderImage key={i} seed={i} className="w-[64px] h-[48px] rounded-xxs" />
                ))}
              </div>
              <p className="font-default text-[16px] text-neutral-text-dark text-center leading-[19px]">
                There are 50 more benefits in this category
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Ask Zoe FAB ── */}
      <div
        className="fixed bottom-xl right-xl z-50 flex items-center gap-xxs rounded-full shadow-xl cursor-pointer bg-primary py-[10px] px-s"
      >
        <div className="w-[8px] h-[8px] rounded-full bg-accent-yellow" />
        <span className="font-default font-medium text-[14px] text-neutral-text-negative">Ask Zoe</span>
      </div>
    </div>
  )
}


// ══════════════════════════════════════════════════════════
// HealtheeHomeExample — Doc page wrapper
// ══════════════════════════════════════════════════════════
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
        className="absolute top-s right-s opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-hover text-neutral-text-negative text-[11px] font-default font-medium px-xs py-[4px] rounded-xxxs cursor-pointer"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

export function HealtheeHomeExample() {
  return (
    <DocLayout
      title="Healthee Home"
      description="The main homepage of the Healthee product — built entirely from DS components and tokens. Includes a DS audit identifying patterns that should become new components."
    >
      {/* ── Live Preview ── */}
      <Section title="Live Preview" description="Full-screen preview of the Healthee homepage.">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('/preview/healthee-home', '_blank')}
        >
          Open full-screen preview →
        </Button>
        <div
          className="mt-s rounded-xs border border-neutral-border-light overflow-hidden"
          style={{ maxHeight: 800, overflowY: 'auto' }}
        >
          <HealtheeHomeScreen />
        </div>
      </Section>

      {/* ── DS Components Used ── */}
      <Section title="DS Components Used" description="How each DS component maps to a UI element on the homepage.">
        <div className="bg-white rounded-xs border border-neutral-border-light overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-m px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
            {['UI Element', 'DS Component', 'Props'].map(h => (
              <p key={h} className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">{h}</p>
            ))}
          </div>
          {[
            { el: 'Nav tabs (Home / My Benefits / Find Care)', comp: 'Button', props: 'variant="secondary|outline" pill size="sm"' },
            { el: '"Add dependents" / "Unlock benefit"', comp: 'Button', props: 'variant="outline" size="xs"' },
            { el: '"Speak to a provider"', comp: 'Button', props: 'variant="secondary" size="sm" fullWidth' },
            { el: '"Find care" on benefit cards', comp: 'Button', props: 'variant="secondary" size="xs" fullWidth' },
            { el: 'Category filter pills', comp: 'Button', props: 'variant="outline" size="sm" pill' },
            { el: '"Explore all benefits →"', comp: 'Button', props: 'variant="ghost" size="sm" pill iconRight' },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-[1fr_1fr_1fr] gap-m px-m py-s border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/40' : ''}`}>
              <p className="font-default text-[12px] text-neutral-text-dark">{row.el}</p>
              <code className="font-mono text-[12px] text-primary">{row.comp}</code>
              <code className="font-mono text-[11px] text-neutral-text-dark break-all">{row.props}</code>
            </div>
          ))}
        </div>
      </Section>

      {/* ── DS Audit ── */}
      <Section title="DS Audit — Missing Components" description="Patterns identified on this page that appear frequently and should be considered for inclusion in the design system as reusable components.">
        <div className="bg-white rounded-xs border border-neutral-border-light overflow-hidden">
          <div className="grid grid-cols-[140px_1fr_1fr] gap-m px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
            {['Pattern', 'Where it appears', 'Recommendation'].map(h => (
              <p key={h} className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">{h}</p>
            ))}
          </div>
          {[
            { pattern: 'Card', where: 'Action cards, specialty cards, benefit cards, telehealth card — 4 distinct card types on one page', rec: 'Generic Card component with border, radius, padding, optional hover lift. Variants: default, outlined, interactive.' },
            { pattern: 'Avatar', where: 'Profile circle (nav), provider avatars (specialty card stack)', rec: 'Avatar component with sizes (sm/md/lg), optional ring/border, image or initials fallback, stack/group layout.' },
            { pattern: 'Badge / Tag', where: '"by Doctegrity" label, potential status badges on cards', rec: 'Small status label with background color, border-radius. Variants: subtle, outline, filled.' },
            { pattern: 'NavBar', where: 'Top navigation bar with logo, tab buttons, and action slots', rec: 'AppBar layout component with left/center/right slots. Handles sticky positioning and bottom border.' },
            { pattern: 'ChipGroup', where: 'Benefit category filter pills (single-select, wrapping)', rec: 'Controlled pill group — wraps multiple Button pills with active state management and single/multi select.' },
            { pattern: 'FAB', where: 'Ask Zoe floating action button (bottom-right)', rec: 'Floating Action Button — fixed position, circular, shadow-xl. Extend from Button with position prop.' },
            { pattern: 'CheckItem', where: 'Telehealth card feature list (blue checkmark + text)', rec: 'Icon + text row component for feature/benefit lists. Props: icon color, text, size.' },
            { pattern: 'IconBadge', where: 'Specialty card icons (40px circle with gradient bg + emoji/icon)', rec: 'Decorative icon container with gradient or solid background. Sizes: sm (32), md (40), lg (48).' },
            { pattern: 'MoreCard', where: '"+10k providers" card, "50 more benefits" card', rec: 'Special "see more" card variant with thumbnail collage and count text. Standardize the pattern.' },
            { pattern: 'CardGrid', where: '3-column benefit cards, 3/4-column specialty cards', rec: 'Responsive grid layout utility with consistent gap and column configuration. Consider a Layout component.' },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-[140px_1fr_1fr] gap-m px-m py-s border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/40' : ''}`}>
              <code className="font-mono text-[12px] text-primary font-medium">{row.pattern}</code>
              <p className="font-default text-[12px] text-neutral-text-dark">{row.where}</p>
              <p className="font-default text-[12px] text-neutral-text-dark">{row.rec}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Code ── */}
      <Section title="Usage" description="Import the homepage screen component.">
        <CodeBlock code={`import { HealtheeHomeScreen } from './examples/HealtheeHomeExample'

// Full-screen preview
<HealtheeHomeScreen />

// DS Components used on this page:
// - Button (6 instances across 4 variant/size combos)
//   variant="secondary" pill — nav tabs (active)
//   variant="outline" pill — nav tabs (inactive), filter pills
//   variant="outline" xs — action card CTAs
//   variant="secondary" xs fullWidth — benefit card CTAs
//   variant="secondary" sm fullWidth — telehealth CTA
//   variant="ghost" pill iconRight — "Explore all" link`} />
      </Section>
    </DocLayout>
  )
}
