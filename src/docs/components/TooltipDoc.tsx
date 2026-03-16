import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Tooltip, TooltipPanel } from '../../components/Tooltip'
import type { TooltipDirection, TooltipVariant } from '../../components/Tooltip'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { fontFamilies, fontWeights } from '../../../tokens/primitive/typography'

// ── Mini helpers (match ButtonDoc pattern) ────────────────────

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

// ── Props Table ───────────────────────────────────────────────
const propsData = [
  { prop: 'text',            type: 'string',                                                                                  default: '—',            required: true,  description: 'Main body text of the tooltip' },
  { prop: 'title',           type: 'string',                                                                                  default: 'undefined',    required: false, description: 'Optional heading above the body text. Required for variant="rich".' },
  { prop: 'variant',         type: '"default" | "rich"',                                                                      default: '"default"',    required: false, description: 'default = dark blur overlay. rich = solid #404040 with optional media.' },
  { prop: 'direction',       type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "left" | "right"',           default: '"top-left"',   required: false, description: 'Which edge the arrow appears on. Determines where the panel sits relative to the trigger.' },
  { prop: 'open',            type: 'boolean',                                                                                 default: 'undefined',    required: false, description: 'Controlled visibility. Provide with onClose for controlled mode.' },
  { prop: 'onClose',         type: '() => void',                                                                              default: 'undefined',    required: false, description: 'Providing this enables controlled mode — adds a close button, panel stays until dismissed.' },
  { prop: 'children',        type: 'ReactNode',                                                                               default: 'undefined',    required: false, description: 'Trigger element. If omitted, panel renders standalone (for doc previews).' },
  { prop: 'leftIcon',        type: 'ReactNode',                                                                               default: 'undefined',    required: false, description: '16–20px icon shown to the left of the content' },
  { prop: 'primaryAction',   type: '{ label: string; onClick?: () => void }',                                                 default: 'undefined',    required: false, description: 'CTA button (white outline pill). Use only in controlled mode.' },
  { prop: 'secondaryAction', type: '{ label: string; onClick?: () => void }',                                                 default: 'undefined',    required: false, description: 'Secondary CTA (ghost). Paired with primaryAction.' },
  { prop: 'media',           type: '{ type: "image"|"video"; src: string; alt?: string; poster?: string }',                  default: 'undefined',    required: false, description: 'Image or video preview. Used with variant="rich".' },
  { prop: 'link',            type: '{ label: string; href?: string; onClick?: () => void }',                                  default: 'undefined',    required: false, description: 'Text link at the bottom of the panel. Used with variant="rich".' },
  { prop: 'panelStyle',      type: 'CSSProperties',                                                                          default: 'undefined',    required: false, description: 'Override panel inline styles (e.g., custom width)' },
]

// ── Icons for examples ────────────────────────────────────────

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7V11M8 5.5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2L9.5 6H14L10.5 8.5L11.7 13L8 10.5L4.3 13L5.5 8.5L2 6H6.5L8 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

// ── Live demo trigger button ──────────────────────────────────

function TriggerBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 36,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 8,
        backgroundColor: sc.neutral.surface.DEFAULT,
        color: sc.neutral.text.negative,
        fontFamily: fontFamilies.default,
        fontSize: 14,
        fontWeight: fontWeights.medium,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  )
}

// ── Direction grid ────────────────────────────────────────────

const DIRECTIONS: TooltipDirection[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right']

// ── Doc Page ─────────────────────────────────────────────────

export function TooltipDoc() {
  const [controlledOpen, setControlledOpen] = useState(false)
  const [richOpen, setRichOpen] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)

  return (
    <DocLayout
      title="Tooltip"
      description="Contextual panels that appear on hover or on click. Two variants: a translucent dark overlay for quick hints, and a solid dark panel for richer educational content with media."
    >

      {/* ── Live Demo — Hover Mode ─────────────────────────── */}
      <Section
        title="Hover mode"
        description="Tooltip shows on hover, hides when the pointer leaves. No close button. Best for short supplementary labels and hints."
      >
        <div className="bg-white rounded-xs border border-neutral-border-light p-xxl flex flex-wrap gap-xxl items-center justify-center mb-m">
          {/* Minimal */}
          <Tooltip text="Hover tooltips are lightweight and disappear automatically.">
            <TriggerBtn>Text only</TriggerBtn>
          </Tooltip>

          {/* With title */}
          <Tooltip title="Pro tip" text="Keep tooltip text short and scannable — two sentences max.">
            <TriggerBtn>With title</TriggerBtn>
          </Tooltip>

          {/* With icon */}
          <Tooltip
            leftIcon={<InfoIcon />}
            title="Coverage info"
            text="Your plan covers 100% of preventive care visits."
          >
            <TriggerBtn>With icon</TriggerBtn>
          </Tooltip>

          {/* Direction bottom-left */}
          <Tooltip
            direction="bottom-left"
            title="Opens above"
            text="Use bottom-* directions when the trigger is near the bottom of the viewport."
          >
            <TriggerBtn>Opens above ↑</TriggerBtn>
          </Tooltip>

          {/* Direction right */}
          <Tooltip
            direction="right"
            text="Panel to the left, arrow pointing right."
          >
            <TriggerBtn>Opens left ←</TriggerBtn>
          </Tooltip>
        </div>

        <CodeBlock code={`// Hover mode — omit onClose
<Tooltip text="Short contextual hint.">
  <button>Trigger</button>
</Tooltip>

// With title and icon
<Tooltip
  title="Coverage info"
  text="Your plan covers 100% of preventive care visits."
  leftIcon={<InfoIcon />}
>
  <button>Trigger</button>
</Tooltip>`} />
      </Section>

      {/* ── Controlled Mode ───────────────────────────────── */}
      <Section
        title="Controlled mode"
        description="Provide onClose + open to enable controlled mode. A close button appears and the panel stays visible until dismissed. Use for onboarding tips, action tooltips, and click-triggered popovers."
      >
        <div className="bg-white rounded-xs border border-neutral-border-light p-xxl flex flex-wrap gap-xxl items-center justify-center mb-m">
          {/* Simple controlled */}
          <Tooltip
            title="New feature"
            text="You can now filter results by provider network. Try it from the search bar."
            open={controlledOpen}
            onClose={() => setControlledOpen(false)}
            primaryAction={{ label: 'Try it', onClick: () => setControlledOpen(false) }}
            secondaryAction={{ label: 'Dismiss', onClick: () => setControlledOpen(false) }}
          >
            <TriggerBtn onClick={() => setControlledOpen(true)}>
              {controlledOpen ? 'Close to dismiss' : 'Click to open'}
            </TriggerBtn>
          </Tooltip>

          {/* With icon */}
          <Tooltip
            leftIcon={<StarIcon />}
            title="You're a pro!"
            text="You've completed your benefits tour. Earn more by adding your dependents."
            direction="top-right"
            open={imageOpen}
            onClose={() => setImageOpen(false)}
            primaryAction={{ label: 'Add dependents', onClick: () => setImageOpen(false) }}
          >
            <TriggerBtn onClick={() => setImageOpen(true)}>
              Star tooltip ↑
            </TriggerBtn>
          </Tooltip>
        </div>

        <CodeBlock code={`const [open, setOpen] = useState(false)

<Tooltip
  title="New feature"
  text="You can now filter results by provider network."
  open={open}
  onClose={() => setOpen(false)}
  primaryAction={{ label: 'Try it', onClick: () => setOpen(false) }}
  secondaryAction={{ label: 'Dismiss', onClick: () => setOpen(false) }}
>
  <button onClick={() => setOpen(true)}>Open tooltip</button>
</Tooltip>`} />
      </Section>

      {/* ── Rich Variant ──────────────────────────────────── */}
      <Section
        title="Rich variant"
        description='variant="rich" uses a solid #404040 background optimised for media content. Always use controlled mode with the rich variant — media requires time to view.'
      >
        <div className="bg-white rounded-xs border border-neutral-border-light p-xxl flex flex-wrap gap-xxl items-center justify-center mb-m">
          {/* Rich with placeholder image */}
          <Tooltip
            variant="rich"
            direction="top-left"
            title="Telehealth 24/7"
            text="Connect with a doctor in minutes from anywhere. Available every day, any time."
            media={{
              type: 'image',
              src: 'https://placehold.co/450x200/333333/999999?text=Image+preview',
              alt: 'Telehealth preview',
            }}
            link={{ label: 'Learn more about telehealth', href: '#' }}
            open={richOpen}
            onClose={() => setRichOpen(false)}
          >
            <TriggerBtn onClick={() => setRichOpen(true)}>
              Rich with image
            </TriggerBtn>
          </Tooltip>

          {/* Rich text only */}
          <Tooltip
            variant="rich"
            direction="top-right"
            title="Mental health support"
            text="Your plan includes unlimited therapy sessions with licensed counselors. No referral needed."
            link={{ label: 'See covered providers', href: '#' }}
            open={false}
            onClose={() => {}}
          >
            <TriggerBtn>
              Rich text-only (static)
            </TriggerBtn>
          </Tooltip>
        </div>

        <CodeBlock code={`<Tooltip
  variant="rich"
  title="Telehealth 24/7"
  text="Connect with a doctor in minutes from anywhere."
  media={{ type: 'image', src: '/img/telehealth.jpg', alt: 'Preview' }}
  link={{ label: 'Learn more', href: '/telehealth' }}
  open={open}
  onClose={() => setOpen(false)}
>
  <button onClick={() => setOpen(true)}>Open</button>
</Tooltip>`} />
      </Section>

      {/* ── All Directions ─────────────────────────────────── */}
      <Section
        title="All directions"
        description="The direction prop controls where the arrow appears on the panel (and therefore which side of the trigger the panel is placed on). All 6 directions are shown below as standalone panels."
      >
        <div className="grid grid-cols-2 gap-m mb-m">
          {DIRECTIONS.map((dir) => (
            <div key={dir} className="bg-white rounded-xs border border-neutral-border-light p-l flex flex-col gap-s">
              <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider">
                direction="{dir}"
              </p>
              <div>
                <TooltipPanel
                  direction={dir}
                  variant="default"
                  text="Arrow points toward the trigger element."
                  title={dir}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Content Configurations ────────────────────────── */}
      <Section
        title="Content configurations"
        description="Mix and match title, leftIcon, actions, and close button. Shown as standalone panels for reference."
      >
        <div className="flex flex-col gap-m mb-m">

          <div>
            <Label>Text only (minimal)</Label>
            <TooltipPanel direction="top-left" variant="default" text="A short, standalone hint with no title or icons." />
          </div>

          <div>
            <Label>With title</Label>
            <TooltipPanel direction="top-left" variant="default" title="Provider network" text="This doctor is in-network for your Blue Cross plan." />
          </div>

          <div>
            <Label>With icon + title</Label>
            <TooltipPanel direction="top-left" variant="default" title="Coverage info" text="100% preventive care coverage, $0 copay." leftIcon={<InfoIcon />} />
          </div>

          <div>
            <Label>With close button (controlled)</Label>
            <TooltipPanel direction="top-left" variant="default" title="New feature" text="Filter by specialty and distance at the same time." onClose={() => {}} />
          </div>

          <div>
            <Label>With action buttons</Label>
            <TooltipPanel
              direction="top-left"
              variant="default"
              title="Try the new search"
              text="We've updated the search experience. Give it a try!"
              onClose={() => {}}
              primaryAction={{ label: 'Try it' }}
              secondaryAction={{ label: 'Maybe later' }}
            />
          </div>

          <div>
            <Label>Rich — image + link</Label>
            <TooltipPanel
              direction="top-left"
              variant="rich"
              title="Telehealth 24/7"
              text="Connect with a licensed doctor in minutes. No waiting rooms."
              media={{
                type: 'image',
                src: 'https://placehold.co/450x200/333333/999999?text=Image+preview',
                alt: 'Telehealth preview',
              }}
              link={{ label: 'Learn more about telehealth', href: '#' }}
              onClose={() => {}}
            />
          </div>

        </div>
      </Section>

      {/* ── Props Table ───────────────────────────────────── */}
      <Section title="Props">
        <div className="rounded-xs border border-neutral-border-light overflow-hidden">
          <table className="w-full font-default text-[13px]">
            <thead>
              <tr className="border-b border-neutral-border-light bg-neutral-extra-subtle">
                <th className="text-left px-m py-xs font-medium text-neutral">Prop</th>
                <th className="text-left px-m py-xs font-medium text-neutral">Type</th>
                <th className="text-left px-m py-xs font-medium text-neutral">Default</th>
                <th className="text-left px-m py-xs font-medium text-neutral">Description</th>
              </tr>
            </thead>
            <tbody>
              {propsData.map((row, i) => (
                <tr key={row.prop} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-extra-subtle'}>
                  <td className="px-m py-xs align-top">
                    <code className="text-primary font-medium">{row.prop}</code>
                    {row.required && <span className="ml-xxs text-error text-[11px]">*</span>}
                  </td>
                  <td className="px-m py-xs align-top">
                    <code className="text-neutral-text-dark text-[12px]">{row.type}</code>
                  </td>
                  <td className="px-m py-xs align-top text-neutral-text-light">{row.default}</td>
                  <td className="px-m py-xs align-top text-neutral-text-dark leading-relaxed">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Usage guidelines ──────────────────────────────── */}
      <Section
        title="Usage guidelines"
        description="Rules for using tooltips correctly and consistently across the product."
      >
        <div className="grid grid-cols-2 gap-m mb-m">
          <div className="bg-white rounded-xs border border-neutral-border-light p-l">
            <p className="font-default font-medium text-[13px] text-success-text-dark mb-xs">✓ Do</p>
            <ul className="font-default text-[13px] text-neutral-text-dark leading-relaxed space-y-xs list-disc list-inside">
              <li>Use hover mode for short labels, icon hints, and non-critical context</li>
              <li>Use controlled mode when the user needs time to read, click an action, or view media</li>
              <li>Keep default tooltip body text to 1–2 short sentences</li>
              <li>Choose a direction that keeps the panel inside the viewport</li>
              <li>Use variant="rich" for onboarding nudges and feature walkthroughs with visuals</li>
              <li>Always pair primaryAction with an onClose so the tooltip can be dismissed</li>
            </ul>
          </div>
          <div className="bg-white rounded-xs border border-neutral-border-light p-l">
            <p className="font-default font-medium text-[13px] text-error-text-dark mb-xs">✗ Don't</p>
            <ul className="font-default text-[13px] text-neutral-text-dark leading-relaxed space-y-xs list-disc list-inside">
              <li>Don't put required choices or form fields inside a hover tooltip</li>
              <li>Don't use tooltips for error messages — use inline errors or toasts instead</li>
              <li>Don't use action buttons in hover mode — they disappear before the user can click</li>
              <li>Don't use hover tooltips as the only way to surface important information</li>
              <li>Don't stack multiple tooltips on the same trigger</li>
              <li>Don't use hover tooltips on mobile — prefer controlled mode with a tap trigger</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xs border border-neutral-border-light p-l">
          <p className="font-default font-medium text-[13px] text-neutral mb-xs">When to choose each variant</p>
          <div className="grid grid-cols-2 gap-m">
            <div>
              <p className="font-default font-medium text-[12px] text-neutral-text-light uppercase tracking-wider mb-xs">default</p>
              <ul className="font-default text-[13px] text-neutral-text-dark leading-relaxed space-y-[6px] list-disc list-inside">
                <li>Icon button labels</li>
                <li>Truncated text hints</li>
                <li>Field / input hints</li>
                <li>Short feature callouts</li>
                <li>In-context coverage explanations</li>
              </ul>
            </div>
            <div>
              <p className="font-default font-medium text-[12px] text-neutral-text-light uppercase tracking-wider mb-xs">rich</p>
              <ul className="font-default text-[13px] text-neutral-text-dark leading-relaxed space-y-[6px] list-disc list-inside">
                <li>First-time feature introductions</li>
                <li>Benefit plan explanations with visuals</li>
                <li>Animated how-to walkthroughs (video)</li>
                <li>Deep-link to help center articles</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

    </DocLayout>
  )
}
