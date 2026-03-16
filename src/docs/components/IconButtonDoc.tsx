import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { IconButton } from '../../components/IconButton'
import type { IconButtonVariant, IconButtonSize } from '../../components/IconButton'

// ── DS Icon imports ─────────────────────────────────────────
import CloseLine from '../../components/Icon/icons/line/Close'
import SearchLine from '../../components/Icon/icons/line/Search'
import BookmarkLineIcon from '../../components/Icon/icons/line/Bookmark'
import BookmarkSolidIcon from '../../components/Icon/icons/solid/Bookmark'
import HeartLine from '../../components/Icon/icons/line/Heart'
import HeartSolid from '../../components/Icon/icons/solid/Heart'
import MenuLine from '../../components/Icon/icons/line/Menu'
import ChevronLeftLine from '../../components/Icon/icons/line/ChevronLeft'
import ChevronRightLine from '../../components/Icon/icons/line/ChevronRight'
import SettingsLine from '../../components/Icon/icons/line/Settings'
import ExportLine from '../../components/Icon/icons/line/Export'
import TrashCanLine from '../../components/Icon/icons/line/TrashCan'

// ── Mini helpers ────────────────────────────────────────────
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

// ── Code block ──────────────────────────────────────────────
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

// ── Props Table ─────────────────────────────────────────────
const propsData = [
  { prop: 'icon',         type: 'ReactNode',                      default: 'required', description: 'DS Icon component to render' },
  { prop: 'aria-label',   type: 'string',                         default: 'required', description: 'Accessible label (mandatory — no visible text)' },
  { prop: 'variant',      type: '"ghost" | "outline"',            default: '"ghost"',  description: 'ghost = transparent, outline = white + border' },
  { prop: 'size',         type: '"xs" | "sm" | "md" | "lg"',     default: '"md"',     description: 'xs=28px, sm=32px, md=40px, lg=48px' },
  { prop: 'pressed',      type: 'boolean',                        default: '—',        description: 'Toggle state — maps to aria-pressed' },
  { prop: 'pill',         type: 'boolean',                        default: 'true',     description: 'Pill shape (999px radius) vs rounded corners' },
  { prop: 'loading',      type: 'boolean',                        default: 'false',    description: 'Show spinner and disable interaction' },
  { prop: 'disabled',     type: 'boolean',                        default: 'false',    description: 'Disable all interactions' },
  { prop: 'onClick',      type: '() => void',                     default: '—',        description: 'Click handler' },
]

// ── Page ────────────────────────────────────────────────────
export function IconButtonDoc() {
  const [bookmarked, setBookmarked] = useState(false)
  const [liked, setLiked] = useState(false)
  const [faved, setFaved] = useState(false)

  const allVariants: IconButtonVariant[] = ['ghost', 'outline']
  const allSizes: IconButtonSize[] = ['xs', 'sm', 'md', 'lg']

  return (
    <DocLayout
      title="Icon Button"
      description="A lightweight square button for utility icon actions — close, dismiss, bookmark, navigation arrows, hamburger menus. Use IconButton for transparent/subtle actions. Use Button iconOnly for formal actions with visible fill."
    >

      {/* ── Import ── */}
      <Section title="Import">
        <CodeBlock code={`import { IconButton } from '../components'\nimport CloseLine from '../components/Icon/icons/line/Close'`} />
      </Section>

      {/* ── Variants ── */}
      <Section title="Variants" description="Two variants optimized for utility icon actions.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Ghost — Transparent background, visible on hover">
            <IconButton icon={<CloseLine size="md" />} aria-label="Close" variant="ghost" />
            <IconButton icon={<SearchLine size="md" />} aria-label="Search" variant="ghost" />
            <IconButton icon={<MenuLine size="md" />} aria-label="Menu" variant="ghost" />
            <IconButton icon={<SettingsLine size="md" />} aria-label="Settings" variant="ghost" />
          </Row>
          <Row label="Outline — White background with border (modals, overlays)">
            <IconButton icon={<CloseLine size="md" />} aria-label="Close" variant="outline" />
            <IconButton icon={<ChevronLeftLine size="md" />} aria-label="Go back" variant="outline" />
            <IconButton icon={<ExportLine size="md" />} aria-label="Export" variant="outline" />
          </Row>
        </div>
      </Section>

      {/* ── Sizes ── */}
      <Section title="Sizes" description="Four sizes — xs (28px) for inline/compact, sm (32px) for secondary, md (40px) as default, lg (48px) for large touch targets.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Ghost — all sizes">
            {allSizes.map(s => (
              <div key={s} className="flex flex-col items-center gap-xxs">
                <IconButton
                  icon={<CloseLine size={s === 'lg' ? 'lg' : s === 'md' ? 'md' : 'sm'} />}
                  aria-label="Close"
                  variant="ghost"
                  size={s}
                />
                <span className="font-default text-[11px] text-neutral-text-light">{s}</span>
              </div>
            ))}
          </Row>
          <Row label="Outline — all sizes">
            {allSizes.map(s => (
              <div key={s} className="flex flex-col items-center gap-xxs">
                <IconButton
                  icon={<CloseLine size={s === 'lg' ? 'lg' : s === 'md' ? 'md' : 'sm'} />}
                  aria-label="Close"
                  variant="outline"
                  size={s}
                />
                <span className="font-default text-[11px] text-neutral-text-light">{s}</span>
              </div>
            ))}
          </Row>
        </div>
      </Section>

      {/* ── Toggle / Pressed ── */}
      <Section title="Toggle (pressed)" description="Use the pressed prop for toggle actions like bookmark and favorite. Both ghost and outline toggles change the icon to primary (orange) when pressed. The outline variant keeps its white background and border.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Bookmark toggle (ghost) — click to try">
            <IconButton
              icon={bookmarked ? <BookmarkSolidIcon size="md" /> : <BookmarkLineIcon size="md" />}
              aria-label={bookmarked ? 'Remove from saved' : 'Save'}
              variant="ghost"
              pressed={bookmarked}
              onClick={() => setBookmarked(!bookmarked)}
            />
            <span className="font-default text-[13px] text-neutral-text-dark">
              {bookmarked ? 'Saved' : 'Not saved'}
            </span>
          </Row>
          <Row label="Heart toggle (ghost) — click to try">
            <IconButton
              icon={liked ? <HeartSolid size="md" /> : <HeartLine size="md" />}
              aria-label={liked ? 'Unlike' : 'Like'}
              variant="ghost"
              pressed={liked}
              onClick={() => setLiked(!liked)}
            />
            <span className="font-default text-[13px] text-neutral-text-dark">
              {liked ? 'Liked' : 'Not liked'}
            </span>
          </Row>
          <Row label="Favorite toggle (outline) — card pattern, click to try">
            <IconButton
              icon={faved ? <HeartSolid size="sm" /> : <HeartLine size="sm" />}
              aria-label={faved ? 'Remove from favorites' : 'Save to favorites'}
              variant="outline"
              size="sm"
              pressed={faved}
              onClick={() => setFaved(!faved)}
            />
            <span className="font-default text-[13px] text-neutral-text-dark">
              {faved ? 'Favorited — orange icon, white bg' : 'Not favorited — dark icon, white bg'}
            </span>
          </Row>
        </div>
        <div className="mt-s">
          <CodeBlock code={`// Ghost toggle — icon turns orange when pressed
const [bookmarked, setBookmarked] = useState(false)

<IconButton
  icon={bookmarked ? <BookmarkSolid size="md" /> : <BookmarkLine size="md" />}
  aria-label={bookmarked ? 'Remove from saved' : 'Save'}
  variant="ghost"
  pressed={bookmarked}
  onClick={() => setBookmarked(!bookmarked)}
/>

// Outline toggle — icon turns orange, keeps white bg + border (card fav pattern)
const [faved, setFaved] = useState(false)

<IconButton
  icon={faved ? <HeartSolid size="sm" /> : <HeartLine size="sm" />}
  aria-label={faved ? 'Remove from favorites' : 'Save to favorites'}
  variant="outline"
  size="sm"
  pressed={faved}
  onClick={() => setFaved(!faved)}
/>`} />
        </div>
      </Section>

      {/* ── Pill vs Rounded ── */}
      <Section title="Pill vs Rounded" description="Default is pill (999px radius). Set pill={false} for squared corners — useful for navigation arrows in date pickers or toolbars.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Pill (default)">
            <IconButton icon={<ChevronLeftLine size="md" />} aria-label="Previous" variant="ghost" pill />
            <IconButton icon={<ChevronLeftLine size="md" />} aria-label="Previous" variant="outline" pill />
          </Row>
          <Row label="Rounded (pill={false})">
            <IconButton icon={<ChevronLeftLine size="md" />} aria-label="Previous" variant="ghost" pill={false} />
            <IconButton icon={<ChevronLeftLine size="md" />} aria-label="Previous" variant="outline" pill={false} />
          </Row>
        </div>
      </Section>

      {/* ── States ── */}
      <Section title="States" description="Hover to see state changes. Disabled buttons use muted colors and cursor-not-allowed.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Ghost — default, disabled">
            <IconButton icon={<CloseLine size="md" />} aria-label="Close" variant="ghost" />
            <IconButton icon={<CloseLine size="md" />} aria-label="Close" variant="ghost" disabled />
          </Row>
          <Row label="Outline — default, disabled">
            <IconButton icon={<CloseLine size="md" />} aria-label="Close" variant="outline" />
            <IconButton icon={<CloseLine size="md" />} aria-label="Close" variant="outline" disabled />
          </Row>
          <Row label="Loading">
            <IconButton icon={<CloseLine size="md" />} aria-label="Close" variant="ghost" loading />
            <IconButton icon={<CloseLine size="md" />} aria-label="Close" variant="outline" loading />
          </Row>
        </div>
      </Section>

      {/* ── Common Patterns ── */}
      <Section title="Common Patterns" description="Real-world usage examples showing how IconButton replaces bare icon buttons.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <Row label="Modal header — back + close (outline)">
            <div className="flex items-center gap-xxs bg-neutral-negative rounded-xs px-s py-xs border border-neutral-border-light">
              <IconButton icon={<ChevronLeftLine size="md" />} aria-label="Go back" variant="outline" />
              <span className="flex-1 font-default font-medium text-[16px] text-neutral text-center">Modal Title</span>
              <IconButton icon={<CloseLine size="md" />} aria-label="Close" variant="outline" />
            </div>
          </Row>
          <Row label="Card toolbar — actions (ghost)">
            <div className="flex items-center gap-xxxs">
              <IconButton icon={<ExportLine size="md" />} aria-label="Export" variant="ghost" size="sm" />
              <IconButton
                icon={bookmarked ? <BookmarkSolidIcon size="md" /> : <BookmarkLineIcon size="md" />}
                aria-label={bookmarked ? 'Remove from saved' : 'Save'}
                variant="ghost"
                size="sm"
                pressed={bookmarked}
                onClick={() => setBookmarked(!bookmarked)}
              />
              <IconButton icon={<TrashCanLine size="md" />} aria-label="Delete" variant="ghost" size="sm" />
            </div>
          </Row>
          <Row label="Navigation arrows (ghost, rounded)">
            <div className="flex items-center gap-xxs">
              <IconButton icon={<ChevronLeftLine size="sm" />} aria-label="Previous" variant="ghost" size="sm" pill={false} />
              <span className="font-default font-medium text-[14px] text-neutral px-xs">March 2026</span>
              <IconButton icon={<ChevronRightLine size="sm" />} aria-label="Next" variant="ghost" size="sm" pill={false} />
            </div>
          </Row>
        </div>
      </Section>

      {/* ── IconButton vs Button iconOnly ── */}
      <Section title="When to Use" description="Decision guide for choosing between IconButton and Button iconOnly.">
        <div className="overflow-x-auto">
          <table className="w-full font-default text-[13px] border-collapse">
            <thead>
              <tr className="border-b border-neutral-border-light">
                <th className="text-left py-xs px-s font-medium text-neutral-text-light">Scenario</th>
                <th className="text-left py-xs px-s font-medium text-neutral-text-light">Use</th>
                <th className="text-left py-xs px-s font-medium text-neutral-text-light">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Close modal, dismiss toast', 'IconButton ghost', 'Lightweight, transparent utility'],
                ['Close modal on overlay', 'IconButton outline', 'Needs visible boundary on busy backgrounds'],
                ['Bookmark / favorite toggle', 'IconButton ghost + pressed', 'Toggle state — icon turns orange'],
                ['Card favorite button', 'IconButton outline + pressed', 'Toggle — icon turns orange, keeps border'],
                ['Hamburger menu', 'IconButton ghost', 'Subtle nav trigger'],
                ['Calendar nav arrows', 'IconButton ghost sm rounded', 'Compact, embedded navigation'],
                ['Primary action (delete)', 'Button iconOnly destructive', 'Formal action needing visual weight'],
                ['Toolbar icon (bold, italic)', 'Button iconOnly subtle', 'Formal action in a toolbar context'],
              ].map(([scenario, use, why], i) => (
                <tr key={i} className="border-b border-neutral-border-light">
                  <td className="py-xs px-s text-neutral">{scenario}</td>
                  <td className="py-xs px-s text-neutral font-medium">{use}</td>
                  <td className="py-xs px-s text-neutral-text-dark">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Props Table ── */}
      <Section title="Props">
        <div className="overflow-x-auto">
          <table className="w-full font-default text-[13px] border-collapse">
            <thead>
              <tr className="border-b border-neutral-border-light">
                <th className="text-left py-xs px-s font-medium text-neutral-text-light">Prop</th>
                <th className="text-left py-xs px-s font-medium text-neutral-text-light">Type</th>
                <th className="text-left py-xs px-s font-medium text-neutral-text-light">Default</th>
                <th className="text-left py-xs px-s font-medium text-neutral-text-light">Description</th>
              </tr>
            </thead>
            <tbody>
              {propsData.map((row) => (
                <tr key={row.prop} className="border-b border-neutral-border-light">
                  <td className="py-xs px-s text-primary font-medium">{row.prop}</td>
                  <td className="py-xs px-s text-neutral-text-dark font-mono text-[12px]">{row.type}</td>
                  <td className="py-xs px-s text-neutral-text-light">{row.default}</td>
                  <td className="py-xs px-s text-neutral-text-dark">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

    </DocLayout>
  )
}
