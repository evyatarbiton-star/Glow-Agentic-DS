import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Modal } from '../../components/Modal'
import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'

// ── Mini helpers (match existing doc pattern) ─────────────────

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

// ── Props Table Data ────────────────────────────────────────

const propsData = [
  { prop: 'open',                type: 'boolean',     default: '—',      required: true,  description: 'Whether the modal is visible.' },
  { prop: 'onClose',             type: '() => void',  default: '—',      required: true,  description: 'Called when the modal should close (X, backdrop, Escape).' },
  { prop: 'title',               type: 'string',      default: '—',      required: true,  description: 'Header title text.' },
  { prop: 'size',                type: '"sm" | "md" | "lg"', default: '"md"', required: false, description: 'Width preset — sm (480px), md (600px), lg (708px).' },
  { prop: 'showBackButton',      type: 'boolean',     default: 'false',  required: false, description: 'Show a chevron-left back button in the header.' },
  { prop: 'onBack',              type: '() => void',  default: 'undefined', required: false, description: 'Called when back button is clicked. Falls back to onClose.' },
  { prop: 'closeOnBackdropClick',type: 'boolean',     default: 'true',   required: false, description: 'Close when clicking the backdrop overlay.' },
  { prop: 'closeOnEscape',       type: 'boolean',     default: 'true',   required: false, description: 'Close when pressing the Escape key.' },
  { prop: 'children',            type: 'ReactNode',   default: '—',      required: true,  description: 'Modal body content (scrollable area).' },
  { prop: 'footer',              type: 'ReactNode',   default: 'undefined', required: false, description: 'Fully custom footer — overrides footerActions/footerLeft.' },
  { prop: 'footerActions',       type: 'ReactNode',   default: 'undefined', required: false, description: 'Buttons rendered right-aligned in the footer.' },
  { prop: 'footerLeft',          type: 'ReactNode',   default: 'undefined', required: false, description: 'Optional left content in the footer (checkbox, text).' },
]

// ── Sample Content ──────────────────────────────────────────

function SampleContent({ lines = 4 }: { lines?: number }) {
  return (
    <div style={{ padding: 24 }}>
      {Array.from({ length: lines }).map((_, i) => (
        <p key={i} className="font-default text-[15px] text-neutral-text-dark leading-relaxed mb-xs">
          {i === 0
            ? 'This is the modal body content. It scrolls independently when the content exceeds the available height.'
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        </p>
      ))}
    </div>
  )
}

function LongContent() {
  return (
    <div style={{ padding: 24 }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} style={{
          padding: '12px 0',
          borderBottom: i < 11 ? '1px solid #ededed' : undefined,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <div style={{ width: 40, height: 40, borderRadius: 999, backgroundColor: '#f2f2f2', flexShrink: 0 }} />
          <div>
            <p className="font-default text-[15px] text-neutral font-medium">Item {i + 1}</p>
            <p className="font-default text-[13px] text-neutral-text-light">Description for item {i + 1}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Main Doc Page ───────────────────────────────────────────

export function ModalDoc() {
  const [basicOpen, setBasicOpen] = useState(false)
  const [sizeOpen, setSizeOpen] = useState<'sm' | 'md' | 'lg' | null>(null)
  const [noFooterOpen, setNoFooterOpen] = useState(false)
  const [singleActionOpen, setSingleActionOpen] = useState(false)
  const [twoActionsOpen, setTwoActionsOpen] = useState(false)
  const [leftContentOpen, setLeftContentOpen] = useState(false)
  const [customFooterOpen, setCustomFooterOpen] = useState(false)
  const [backOpen, setBackOpen] = useState(false)
  const [scrollOpen, setScrollOpen] = useState(false)

  return (
    <DocLayout
      title="Modal"
      description="A dialog overlay that focuses user attention on a specific task or information. Renders above the page with a dark backdrop. Supports configurable header, scrollable body, and flexible footer."
    >
      {/* ── Basic ──────────────────────────────────────────── */}
      <Section title="Basic" description="A simple modal with title, body content, and two action buttons.">
        <Button onClick={() => setBasicOpen(true)}>Open Modal</Button>
        <Modal
          open={basicOpen}
          onClose={() => setBasicOpen(false)}
          title="Confirm Action"
          footerActions={
            <>
              <Button variant="outline" onClick={() => setBasicOpen(false)}>Cancel</Button>
              <Button onClick={() => setBasicOpen(false)}>Confirm</Button>
            </>
          }
        >
          <SampleContent lines={2} />
        </Modal>
      </Section>

      {/* ── Sizes ──────────────────────────────────────────── */}
      <Section title="Sizes" description="Three width presets: sm (480px), md (600px), lg (708px).">
        <div className="flex gap-xxs flex-wrap">
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <Button key={s} variant="outline" onClick={() => setSizeOpen(s)}>
              {s.toUpperCase()} ({s === 'sm' ? '480px' : s === 'md' ? '600px' : '708px'})
            </Button>
          ))}
        </div>
        <Modal
          open={sizeOpen !== null}
          onClose={() => setSizeOpen(null)}
          title={`Size: ${sizeOpen?.toUpperCase()}`}
          size={sizeOpen ?? 'md'}
          footerActions={<Button onClick={() => setSizeOpen(null)}>Done</Button>}
        >
          <SampleContent lines={3} />
        </Modal>
      </Section>

      {/* ── Scrollable Content ─────────────────────────────── */}
      <Section title="Scrollable Content" description="Body area scrolls independently when content exceeds the viewport.">
        <Button variant="outline" onClick={() => setScrollOpen(true)}>Open Long Content</Button>
        <Modal
          open={scrollOpen}
          onClose={() => setScrollOpen(false)}
          title="Scrollable List"
          size="md"
          footerActions={
            <>
              <Button variant="outline" onClick={() => setScrollOpen(false)}>Cancel</Button>
              <Button onClick={() => setScrollOpen(false)}>Save</Button>
            </>
          }
        >
          <LongContent />
        </Modal>
      </Section>

      {/* ── Footer Variants ───────────────────────────────── */}
      <Section title="Footer Variants" description="The footer is fully flexible — no footer, single action, two actions, left+right content, or fully custom.">
        <div className="flex gap-xxs flex-wrap">
          <Button variant="outline" onClick={() => setNoFooterOpen(true)}>No Footer</Button>
          <Button variant="outline" onClick={() => setSingleActionOpen(true)}>Single Action</Button>
          <Button variant="outline" onClick={() => setTwoActionsOpen(true)}>Two Actions</Button>
          <Button variant="outline" onClick={() => setLeftContentOpen(true)}>Left + Right</Button>
          <Button variant="outline" onClick={() => setCustomFooterOpen(true)}>Custom Footer</Button>
        </div>

        {/* No footer */}
        <Modal open={noFooterOpen} onClose={() => setNoFooterOpen(false)} title="Information">
          <SampleContent lines={3} />
        </Modal>

        {/* Single action */}
        <Modal
          open={singleActionOpen}
          onClose={() => setSingleActionOpen(false)}
          title="Notice"
          footerActions={<Button onClick={() => setSingleActionOpen(false)}>Got it</Button>}
        >
          <SampleContent lines={2} />
        </Modal>

        {/* Two actions */}
        <Modal
          open={twoActionsOpen}
          onClose={() => setTwoActionsOpen(false)}
          title="Delete Item"
          footerActions={
            <>
              <Button variant="outline" onClick={() => setTwoActionsOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={() => setTwoActionsOpen(false)}>Delete</Button>
            </>
          }
        >
          <SampleContent lines={2} />
        </Modal>

        {/* Left + Right */}
        <Modal
          open={leftContentOpen}
          onClose={() => setLeftContentOpen(false)}
          title="Filters"
          size="lg"
          showBackButton
          onBack={() => setLeftContentOpen(false)}
          footerLeft={
            <Checkbox label="Save filter preferences" />
          }
          footerActions={
            <>
              <Button variant="outline" onClick={() => setLeftContentOpen(false)}>Reset All</Button>
              <Button onClick={() => setLeftContentOpen(false)}>Show Results</Button>
            </>
          }
        >
          <SampleContent lines={4} />
        </Modal>

        {/* Custom footer */}
        <Modal
          open={customFooterOpen}
          onClose={() => setCustomFooterOpen(false)}
          title="Custom Footer"
          footerLeft={
            <span className="font-default text-[13px] text-neutral-text-light">Step 2 of 3</span>
          }
          footerActions={
            <>
              <Button variant="outline" size="md" onClick={() => setCustomFooterOpen(false)}>Previous</Button>
              <Button size="md" onClick={() => setCustomFooterOpen(false)}>Next</Button>
            </>
          }
        >
          <SampleContent lines={3} />
        </Modal>
      </Section>

      {/* ── Back Button ───────────────────────────────────── */}
      <Section title="Back Button" description="Optional left-side chevron for multi-step flows or nested modals.">
        <Button variant="outline" onClick={() => setBackOpen(true)}>Open with Back</Button>
        <Modal
          open={backOpen}
          onClose={() => setBackOpen(false)}
          title="Location"
          showBackButton
          onBack={() => setBackOpen(false)}
          footerActions={
            <>
              <Button variant="outline" onClick={() => setBackOpen(false)}>Cancel</Button>
              <Button onClick={() => setBackOpen(false)}>Save</Button>
            </>
          }
        >
          <SampleContent lines={3} />
        </Modal>
      </Section>

      {/* ── Props Table ───────────────────────────────────── */}
      <Section title="Props" description="All available props for the Modal component.">
        <div className="rounded-xs border border-neutral-border-light overflow-hidden">
          <table className="w-full font-default text-[13px]">
            <thead>
              <tr className="bg-neutral-subtle text-left">
                <th className="px-m py-xs font-medium text-neutral">Prop</th>
                <th className="px-m py-xs font-medium text-neutral">Type</th>
                <th className="px-m py-xs font-medium text-neutral">Default</th>
                <th className="px-m py-xs font-medium text-neutral">Description</th>
              </tr>
            </thead>
            <tbody>
              {propsData.map((row) => (
                <tr key={row.prop} className="border-t border-neutral-border-light">
                  <td className="px-m py-xs text-primary font-medium whitespace-nowrap">
                    {row.prop}{row.required && <span className="text-error">*</span>}
                  </td>
                  <td className="px-m py-xs text-neutral-text-dark font-mono text-[12px]">{row.type}</td>
                  <td className="px-m py-xs text-neutral-text-light">{row.default}</td>
                  <td className="px-m py-xs text-neutral-text-dark">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Usage Rules ──────────────────────────────────── */}
      <Section title="Usage Rules" description="Mandatory rules for consistent modal behavior across the product.">
        <div className="font-default text-[14px] text-neutral-text-dark space-y-xs">
          <p><strong>Footer buttons are ALWAYS right-aligned</strong> — use <code>footerActions</code>, never center or left-align buttons.</p>
          <p><strong>Button size is ALWAYS md (48px)</strong> — all modal footer buttons must use <code>size="md"</code>. Never use sm or lg buttons in modal footers.</p>
          <p><strong>Never use pill-shaped buttons in footers</strong> — all footer buttons use default rounded corners, never <code>pill</code>. Pill shape is reserved for in-page CTAs.</p>
          <p><strong>Primary action on the RIGHT</strong> — in two-button footers: Cancel (outline) on left, Confirm (primary) on right.</p>
          <p><strong>Compact form inputs</strong> — sm/md modals use <code>size="sm"</code> inputs, lg modals use <code>size="md"</code> inputs. Never use <code>size="lg"</code> inputs inside modals.</p>
          <p><strong>DS components only</strong> — every element inside Modal must use DS components. No native HTML checkboxes, inputs, or radio buttons.</p>
        </div>
      </Section>

      {/* ── Code Examples ─────────────────────────────────── */}
      <Section title="Code Examples" description="Common usage patterns.">
        <Label>Import</Label>
        <CodeBlock code={`import { Modal } from '@/components/Modal'
import { Button } from '@/components/Button'`} />

        <div className="mt-l" />
        <Label>Simple Confirm</Label>
        <CodeBlock code={`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  footerActions={
    <>
      <Button variant="outline" size="md" onClick={() => setOpen(false)}>Cancel</Button>
      <Button size="md" onClick={handleConfirm}>Confirm</Button>
    </>
  }
>
  <div style={{ padding: 24 }}>
    <p>Are you sure you want to proceed?</p>
  </div>
</Modal>`} />

        <div className="mt-l" />
        <Label>Filters with Back + Footer Left</Label>
        <CodeBlock code={`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Filters"
  size="lg"
  showBackButton
  onBack={handleBack}
  footerLeft={<Checkbox label="Save filter preferences" />}
  footerActions={
    <>
      <Button variant="outline" size="md" onClick={handleReset}>Reset All</Button>
      <Button size="md" onClick={handleApply}>Show Results</Button>
    </>
  }
>
  {/* filter content */}
</Modal>`} />
      </Section>
    </DocLayout>
  )
}
