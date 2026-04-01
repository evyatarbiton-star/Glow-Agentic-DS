import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Toast } from '../../components/Toast'
import type { ToastVariant } from '../../components/Toast'
import { Button } from '../../components/Button'
import { semanticColors as sc } from '../../../tokens/semantic/colors'

// ── Mini helpers ──────────────────────────────────────────────

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

// ── Props Table ──────────────────────────────────────────────
const propsData = [
  { prop: 'message',   type: 'string',                                              default: '—',         required: true,  description: 'The notification text' },
  { prop: 'variant',   type: '"default" | "success" | "error" | "warning" | "info"', default: '"default"', required: false, description: 'Controls the left icon style' },
  { prop: 'iconLeft',  type: 'ReactNode',                                           default: 'undefined', required: false, description: 'Custom left icon — overrides variant default' },
  { prop: 'hideIcon',  type: 'boolean',                                             default: 'false',     required: false, description: 'Hide the left icon entirely' },
  { prop: 'action',    type: '{ label: string; onClick: () => void }',              default: 'undefined', required: false, description: 'Action button (e.g. "Retry", "Undo")' },
  { prop: 'showClose', type: 'boolean',                                             default: 'true',      required: false, description: 'Show the dismiss X button' },
  { prop: 'onClose',   type: '() => void',                                          default: 'undefined', required: false, description: 'Called when toast is dismissed' },
  { prop: 'duration',  type: 'number',                                              default: '5000',      required: false, description: 'Auto-dismiss in ms. 0 = no auto-dismiss' },
  { prop: 'open',      type: 'boolean',                                             default: 'true',      required: false, description: 'Controlled visibility' },
]

// ── Demo wrapper to show toast in context ────────────────────
function ToastDemo({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-m">
      <Label>{label}</Label>
      <div
        className="rounded-xs overflow-hidden p-l flex items-center justify-center"
        style={{ backgroundColor: '#f8f8f8' }}
      >
        {children}
      </div>
    </div>
  )
}

// ── Trigger button demo ──────────────────────────────────────
function ToastTriggerDemo() {
  const [toasts, setToasts] = useState<Array<{ id: number; variant: ToastVariant; message: string; action?: { label: string; onClick: () => void } }>>([])
  let counter = 0

  const showToast = (variant: ToastVariant, message: string, action?: { label: string; onClick: () => void }) => {
    const id = ++counter
    setToasts(prev => [...prev, { id, variant, message, action }])
  }

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div>
      <Label>Interactive — Click to trigger</Label>
      <div className="flex flex-wrap gap-xs mb-m">
        <Button
          variant="primary"
          size="sm"
          onClick={() => showToast('default', 'Failed to save to favorites. Check your connection and try again.', { label: 'Retry', onClick: () => {} })}
        >
          Show with Action
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => showToast('success', 'Provider added to your favorites successfully.')}
        >
          Show Success
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => showToast('error', 'Something went wrong. Please try again later.')}
        >
          Show Error
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => showToast('info', 'Your search results have been updated.')}
        >
          Show Info
        </Button>
      </div>

      {/* Toast stack — bottom center */}
      <div className="fixed bottom-l left-1/2 -translate-x-1/2 z-[2000] flex flex-col-reverse gap-xs items-center" style={{ pointerEvents: 'none' }}>
        {toasts.map(t => (
          <div key={t.id} style={{ pointerEvents: 'auto' }}>
            <Toast
              message={t.message}
              variant={t.variant}
              action={t.action}
              duration={5000}
              onClose={() => removeToast(t.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main doc page ────────────────────────────────────────────
export default function ToastDoc() {
  return (
    <DocLayout
      title="Toast"
      description="Toast notifications appear at the bottom center of the screen to provide brief, non-intrusive feedback about an action or system event. They auto-dismiss after 5 seconds by default."
    >
      {/* Variants */}
      <Section title="Variants">
        <ToastDemo label="Default (Warning) — with action + close">
          <Toast
            message="Failed to save to favorites. Check your connection and try again."
            variant="default"
            action={{ label: 'Retry', onClick: () => {} }}
            duration={0}
          />
        </ToastDemo>

        <ToastDemo label="Default (Warning) — without action">
          <Toast
            message="Failed to save to favorites. Check your connection and try again."
            variant="default"
            duration={0}
          />
        </ToastDemo>

        <ToastDemo label="Success">
          <Toast
            message="Provider added to your favorites successfully."
            variant="success"
            duration={0}
          />
        </ToastDemo>

        <ToastDemo label="Error">
          <Toast
            message="Something went wrong. Please try again later."
            variant="error"
            action={{ label: 'Retry', onClick: () => {} }}
            duration={0}
          />
        </ToastDemo>

        <ToastDemo label="Info">
          <Toast
            message="Your search results have been updated."
            variant="info"
            duration={0}
          />
        </ToastDemo>
      </Section>

      {/* Without icon */}
      <Section title="Without Icon">
        <ToastDemo label="No icon — message only with close">
          <Toast
            message="Your preferences have been saved."
            hideIcon
            duration={0}
          />
        </ToastDemo>

        <ToastDemo label="No icon — with action">
          <Toast
            message="Message deleted."
            hideIcon
            action={{ label: 'Undo', onClick: () => {} }}
            duration={0}
          />
        </ToastDemo>
      </Section>

      {/* Without close */}
      <Section title="Without Close Button">
        <ToastDemo label="No close button — auto-dismiss only">
          <Toast
            message="Copied to clipboard."
            variant="success"
            showClose={false}
            duration={0}
          />
        </ToastDemo>
      </Section>

      {/* Interactive */}
      <Section title="Interactive Demo">
        <ToastTriggerDemo />
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <CodeBlock code={`// Basic toast
<Toast
  message="Saved successfully."
  variant="success"
  onClose={() => setShow(false)}
/>

// With action button
<Toast
  message="Failed to save. Check your connection."
  variant="default"
  action={{ label: 'Retry', onClick: handleRetry }}
  onClose={() => setShow(false)}
/>

// No icon, no auto-dismiss
<Toast
  message="3 items selected."
  hideIcon
  duration={0}
  action={{ label: 'Delete', onClick: handleDelete }}
/>`} />
      </Section>

      {/* Props table */}
      <Section title="Props">
        <div className="overflow-x-auto rounded-xs border border-neutral-border-light">
          <table className="w-full font-default text-[13px]">
            <thead>
              <tr className="bg-neutral-extra-subtle">
                <th className="text-left p-xs font-medium text-neutral">Prop</th>
                <th className="text-left p-xs font-medium text-neutral">Type</th>
                <th className="text-left p-xs font-medium text-neutral">Default</th>
                <th className="text-left p-xs font-medium text-neutral">Description</th>
              </tr>
            </thead>
            <tbody>
              {propsData.map(row => (
                <tr key={row.prop} className="border-t border-neutral-border-light">
                  <td className="p-xs text-neutral whitespace-nowrap">
                    <code className="text-primary">{row.prop}</code>
                    {row.required && <span className="text-error ml-xxxs">*</span>}
                  </td>
                  <td className="p-xs text-neutral-text-light"><code>{row.type}</code></td>
                  <td className="p-xs text-neutral-text-light"><code>{row.default}</code></td>
                  <td className="p-xs text-neutral-text-dark">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Position */}
      <Section title="Positioning">
        <p className="font-default text-[15px] text-neutral-text-dark leading-relaxed mb-m">
          Toast should be positioned at the <strong>bottom center</strong> of the viewport using fixed positioning.
          Use a max-width of <code className="text-primary">709px</code> as defined in the Figma spec.
          Multiple toasts stack upward with a <code className="text-primary">12px</code> gap.
        </p>
        <CodeBlock code={`// Toast container (place once in your app root)
<div className="fixed bottom-l left-1/2 -translate-x-1/2 z-[2000]
  flex flex-col-reverse gap-xs items-center pointer-events-none">
  {toasts.map(t => (
    <div key={t.id} className="pointer-events-auto">
      <Toast {...t} onClose={() => removeToast(t.id)} />
    </div>
  ))}
</div>`} />
      </Section>
    </DocLayout>
  )
}
