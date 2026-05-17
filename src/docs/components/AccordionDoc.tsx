import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/Accordion'

// ── Mini helpers ─────────────────────────────────────────────
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

// ── Sample FAQ data (used in multiple sections) ──────────────
const faqItems = [
  {
    value: 'faq-1',
    title: 'Why do I see different prices for the same medication?',
    body: 'You may see different prices for the same medication because costs vary by pharmacy, how you pay (insurance vs. cash or discounts), and your plan’s coverage rules. Even small differences in dosage or form can change the price. Healthee shows these options so you can compare and choose what works best for you.',
  },
  {
    value: 'faq-2',
    title: 'How does Healthee find the lowest price for my medication?',
    body: 'Healthee compares all the pricing options you may qualify for, including your insurance coverage, $0 programs available through your benefits, and cash discounts from CompareMedsRx. We then show you the options side by side so you can choose what saves you the most money.',
  },
  {
    value: 'faq-3',
    title: 'Can I use discounts instead of my insurance?',
    body: 'Yes — discount cards (like GoodRx or CompareMedsRx) work independently of your insurance. Sometimes the cash price with a discount is lower than your insurance copay. You can choose whichever option costs less.',
  },
  {
    value: 'faq-4',
    title: 'Why are some medications $0 through my benefits?',
    body: 'Some preventive medications and generics are covered at no cost under your plan’s benefits. Healthee surfaces these $0 options whenever you qualify so you never overpay.',
  },
]

// ── Props tables ─────────────────────────────────────────────
const accordionProps = [
  { prop: 'value',         type: 'string | null',                    default: '—',           description: 'Controlled open value — value of the open AccordionItem, or null if all collapsed.' },
  { prop: 'defaultValue',  type: 'string | null',                    default: 'null',        description: 'Uncontrolled initial open value.' },
  { prop: 'onValueChange', type: '(value: string | null) => void',   default: '—',           description: 'Fires when the open item changes (or null when closing).' },
  { prop: 'indicator',     type: '"plus-minus" | "chevron"',         default: '"plus-minus"', description: 'Icon shown on the trigger to signal open/closed state.' },
  { prop: 'collapsible',   type: 'boolean',                          default: 'true',        description: 'When true, clicking the open item collapses it.' },
  { prop: 'children',      type: 'ReactNode',                        default: 'required',    description: 'AccordionItem children.' },
]

const accordionItemProps = [
  { prop: 'value',         type: 'string',                            default: 'required',    description: 'Unique identifier for this item within the Accordion.' },
  { prop: 'headingLevel',  type: '1 | 2 | 3 | 4 | 5 | 6',             default: '3',           description: 'Heading level the trigger is wrapped in (h1-h6) for screen-reader semantics.' },
  { prop: 'disabled',      type: 'boolean',                            default: 'false',       description: 'Disables the item — trigger ignores clicks and keys, content stays collapsed.' },
  { prop: 'children',      type: 'ReactNode',                          default: 'required',    description: 'AccordionTrigger and AccordionContent (in that order).' },
]

const accordionTriggerProps = [
  { prop: 'iconLeft',      type: 'ReactNode',                         default: '—',           description: 'Optional leading content (badge/icon) shown before the title text.' },
  { prop: 'children',      type: 'ReactNode',                         default: 'required',    description: 'The trigger label.' },
  { prop: 'onClick',       type: '(e) => void',                       default: '—',           description: 'Custom click handler — call e.preventDefault() to suppress default toggle.' },
]

const accordionContentProps = [
  { prop: 'children',      type: 'ReactNode',                         default: 'required',    description: 'The expandable content body.' },
]

function PropsTable({ rows }: { rows: { prop: string; type: string; default: string; description: string }[] }) {
  return (
    <div className="bg-white rounded-xs border border-neutral-border-light overflow-hidden">
      <div className="grid grid-cols-[140px_1fr_100px_1fr] gap-m px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
        {['Prop', 'Type', 'Default', 'Description'].map(h => (
          <p key={h} className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">{h}</p>
        ))}
      </div>
      {rows.map((row, i) => (
        <div
          key={row.prop}
          className={`grid grid-cols-[140px_1fr_100px_1fr] gap-m px-m py-s border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/40' : ''}`}
        >
          <code className="font-mono text-[12px] text-primary">{row.prop}</code>
          <code className="font-mono text-[11px] text-neutral-text-dark break-all">{row.type}</code>
          <code className="font-mono text-[11px] text-neutral-text-light">{row.default}</code>
          <p className="font-default text-[12px] text-neutral-text-dark">{row.description}</p>
        </div>
      ))}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────
export function AccordionDoc() {
  const [controlled, setControlled] = useState<string | null>('faq-1')

  return (
    <DocLayout
      title="Accordion"
      description="A collapsible disclosure for grouping related content. Single-open behavior — opening one item closes the previous."
    >

      {/* ── Basic ── */}
      <Section title="Basic" description="Plus / Minus indicator (default). One item is open by default via defaultValue.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <div className="max-w-[560px]">
            <Accordion defaultValue="faq-2">
              {faqItems.slice(0, 3).map(item => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.body}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* ── Indicator variants ── */}
      <Section title="Indicator" description="Switch between plus-minus (default) and chevron via the indicator prop.">
        <div className="bg-neutral-subtle rounded-xs p-l grid grid-cols-2 gap-l">
          <div>
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xs">plus-minus (default)</p>
            <Accordion>
              <AccordionItem value="a">
                <AccordionTrigger>Plus / minus indicator</AccordionTrigger>
                <AccordionContent>The icon swaps between Plus and Minus on toggle.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Second item</AccordionTrigger>
                <AccordionContent>Body content for the second item.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xs">chevron</p>
            <Accordion indicator="chevron">
              <AccordionItem value="a">
                <AccordionTrigger>Chevron indicator</AccordionTrigger>
                <AccordionContent>The icon rotates 180° on toggle.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Second item</AccordionTrigger>
                <AccordionContent>Body content for the second item.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* ── Single-open behavior ── */}
      <Section title="Single-open behavior" description="Only one item can be open at a time. Opening another item collapses the previous. With collapsible=true (default), re-clicking the open item collapses it to none.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <div className="max-w-[560px]">
            <Accordion>
              {faqItems.map(item => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.body}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* ── Controlled vs Uncontrolled ── */}
      <Section title="Controlled vs Uncontrolled" description="Use defaultValue for an uncontrolled component. Pass value + onValueChange to control the open state externally.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xs">
            Controlled — Open: <code className="font-mono">{controlled ?? 'null'}</code>
          </p>
          <div className="max-w-[560px]">
            <Accordion value={controlled} onValueChange={setControlled}>
              {faqItems.slice(0, 3).map(item => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.body}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex items-center gap-xs mt-m">
            <button
              onClick={() => setControlled('faq-1')}
              className="font-default text-[12px] px-xs py-xxs rounded-xxxs border border-neutral-border-light bg-neutral-negative cursor-pointer"
            >
              Open #1
            </button>
            <button
              onClick={() => setControlled('faq-3')}
              className="font-default text-[12px] px-xs py-xxs rounded-xxxs border border-neutral-border-light bg-neutral-negative cursor-pointer"
            >
              Open #3
            </button>
            <button
              onClick={() => setControlled(null)}
              className="font-default text-[12px] px-xs py-xxs rounded-xxxs border border-neutral-border-light bg-neutral-negative cursor-pointer"
            >
              Collapse all
            </button>
          </div>
        </div>
      </Section>

      {/* ── Disabled item ── */}
      <Section title="Disabled item" description="A disabled item ignores clicks and keyboard events, and stays collapsed.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <div className="max-w-[560px]">
            <Accordion>
              <AccordionItem value="a">
                <AccordionTrigger>Available item</AccordionTrigger>
                <AccordionContent>You can open and close this one.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b" disabled>
                <AccordionTrigger>Disabled item</AccordionTrigger>
                <AccordionContent>This content is unreachable.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="c">
                <AccordionTrigger>Another available item</AccordionTrigger>
                <AccordionContent>Arrow Down skips the disabled item between us.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* ── Heading levels ── */}
      <Section title="Heading levels" description="The trigger is wrapped in an h3 by default to satisfy WAI-ARIA heading semantics. Override via headingLevel when the accordion sits at a different position in your page outline (e.g. set to 2 if it sits directly under the page H1).">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <div className="max-w-[560px]">
            <Accordion>
              <AccordionItem value="a" headingLevel={2}>
                <AccordionTrigger>Wrapped in h2</AccordionTrigger>
                <AccordionContent>Inspect the DOM — the trigger is inside an &lt;h2&gt;.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b" headingLevel={4}>
                <AccordionTrigger>Wrapped in h4</AccordionTrigger>
                <AccordionContent>Inspect the DOM — the trigger is inside an &lt;h4&gt;.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* ── Accessibility ── */}
      <Section title="Accessibility" description="Implements the WAI-ARIA accordion pattern.">
        <div className="bg-neutral-subtle rounded-xs p-l">
          <ul className="font-default text-[14px] text-neutral-text-dark space-y-xxs list-disc pl-l">
            <li><strong>Trigger</strong> renders as a real <code className="font-mono text-[12px]">&lt;button&gt;</code> with <code className="font-mono text-[12px]">aria-expanded</code> and <code className="font-mono text-[12px]">aria-controls</code>, wrapped in an h1–h6 chosen via <code className="font-mono text-[12px]">headingLevel</code>.</li>
            <li><strong>Content</strong> uses <code className="font-mono text-[12px]">role="region"</code> and <code className="font-mono text-[12px]">aria-labelledby</code>; while collapsed it is set to <code className="font-mono text-[12px]">hidden</code> so it leaves the tab order and is skipped by screen readers.</li>
            <li><strong>Keyboard</strong>: <kbd>Space</kbd>/<kbd>Enter</kbd> toggle, <kbd>↑</kbd>/<kbd>↓</kbd> move focus between triggers, <kbd>Home</kbd>/<kbd>End</kbd> jump to the first/last trigger.</li>
            <li><strong>Reduced motion</strong>: respects <code className="font-mono text-[12px]">prefers-reduced-motion</code> by skipping the height/opacity transition.</li>
          </ul>
        </div>
      </Section>

      {/* ── FAQ usage example (matches the Figma reference) ── */}
      <Section title="FAQ usage example" description="The section heading and the 2-column grid are the consumer's responsibility — the Accordion only owns the items themselves.">
        <div className="bg-neutral-negative rounded-xs p-xl">
          <h3 className="font-default font-normal text-[32px] leading-[38px] text-neutral mb-xl">Some common questions</h3>
          <div className="grid grid-cols-2 gap-xl">
            <Accordion>
              {faqItems.slice(0, 2).map(item => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.body}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion>
              {faqItems.slice(2, 4).map(item => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.body}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* ── Usage ── */}
      <Section title="Usage" description="Copy-paste examples.">
        <CodeBlock code={`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/Accordion'

// Basic — uncontrolled, plus-minus indicator
<Accordion defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Glow DS?</AccordionTrigger>
    <AccordionContent>Glow DS is Healthee's design system…</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Where do I install it?</AccordionTrigger>
    <AccordionContent>npm install @healthee/glow-ds</AccordionContent>
  </AccordionItem>
</Accordion>

// Chevron indicator
<Accordion indicator="chevron">
  <AccordionItem value="a">
    <AccordionTrigger>Heading</AccordionTrigger>
    <AccordionContent>Body</AccordionContent>
  </AccordionItem>
</Accordion>

// Controlled
const [open, setOpen] = useState<string | null>('a')
<Accordion value={open} onValueChange={setOpen}>…</Accordion>

// Disabled item
<AccordionItem value="b" disabled>…</AccordionItem>`} />
      </Section>

      {/* ── Props tables ── */}
      <Section title="Props — Accordion">
        <PropsTable rows={accordionProps} />
      </Section>

      <Section title="Props — AccordionItem">
        <PropsTable rows={accordionItemProps} />
      </Section>

      <Section title="Props — AccordionTrigger">
        <PropsTable rows={accordionTriggerProps} />
      </Section>

      <Section title="Props — AccordionContent">
        <PropsTable rows={accordionContentProps} />
      </Section>

    </DocLayout>
  )
}
