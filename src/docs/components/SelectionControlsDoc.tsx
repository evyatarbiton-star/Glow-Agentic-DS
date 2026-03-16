import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Checkbox } from '../../components/Checkbox'
import { RadioButton } from '../../components/RadioButton'
import { Toggle } from '../../components/Toggle'

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
      <div className="flex flex-wrap items-center gap-m">{children}</div>
    </div>
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

// ── Rule Card ────────────────────────────────────────────────
function RuleCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xxs border border-neutral-border-light p-m mb-s">
      <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">
        Rule {number}
      </p>
      <p className="font-default text-[15px] font-medium text-neutral mb-xxs">{title}</p>
      <p className="font-default text-[13px] text-neutral-text-light leading-relaxed">{description}</p>
    </div>
  )
}

// ── Props Table ──────────────────────────────────────────────
const checkboxPropsData = [
  { prop: 'checked',       type: 'boolean',                                           default: 'false', description: 'Whether the checkbox is checked' },
  { prop: 'onChange',       type: '(e: ChangeEvent<HTMLInputElement>) => void',        default: '—',     description: 'Callback when checked state changes' },
  { prop: 'disabled',      type: 'boolean',                                           default: 'false', description: 'Disable all interactions' },
  { prop: 'label',         type: 'string',                                            default: '—',     description: 'Text label displayed to the right' },
  { prop: 'name',          type: 'string',                                            default: '—',     description: 'Input name attribute for form submission' },
  { prop: 'value',         type: 'string',                                            default: '—',     description: 'Input value attribute' },
  { prop: 'indeterminate', type: 'boolean',                                           default: 'false', description: 'Show dash icon — for "select all" patterns' },
]

const radioPropsData = [
  { prop: 'checked',  type: 'boolean',                                           default: 'false', description: 'Whether this radio is selected' },
  { prop: 'onChange',  type: '(e: ChangeEvent<HTMLInputElement>) => void',        default: '—',     description: 'Callback when selection changes' },
  { prop: 'disabled',  type: 'boolean',                                           default: 'false', description: 'Disable all interactions' },
  { prop: 'label',    type: 'string',                                            default: '—',     description: 'Text label displayed to the right' },
  { prop: 'name',     type: 'string',                                            default: '—',     description: 'Groups radios — same name = mutually exclusive' },
  { prop: 'value',    type: 'string',                                            default: '—',     description: 'Input value attribute' },
]

const togglePropsData = [
  { prop: 'checked',  type: 'boolean',                                           default: 'false', description: 'Whether the toggle is on' },
  { prop: 'onChange',  type: '(e: ChangeEvent<HTMLInputElement>) => void',        default: '—',     description: 'Callback when toggled' },
  { prop: 'disabled',  type: 'boolean',                                           default: 'false', description: 'Disable all interactions' },
  { prop: 'label',    type: 'string',                                            default: '—',     description: 'Text label displayed to the right' },
  { prop: 'name',     type: 'string',                                            default: '—',     description: 'Input name attribute for form submission' },
  { prop: 'value',    type: 'string',                                            default: '—',     description: 'Input value attribute' },
  { prop: 'size',     type: "'default' | 'large'",                               default: "'default'", description: 'Toggle size — default (44px) or large (52px)' },
]

function PropsTable({ data }: { data: typeof checkboxPropsData }) {
  return (
    <div className="overflow-x-auto rounded-xxs border border-neutral-border-light">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-neutral-extra-subtle">
            <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs">Prop</th>
            <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs">Type</th>
            <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs">Default</th>
            <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.prop} className="border-t border-neutral-border-light">
              <td className="font-default text-[13px] font-medium text-primary px-m py-xs whitespace-nowrap">{row.prop}</td>
              <td className="font-default text-[12px] text-neutral-text-light px-m py-xs"><code className="bg-neutral-subtle px-[6px] py-[2px] rounded-xxxs">{row.type}</code></td>
              <td className="font-default text-[13px] text-neutral-text-light px-m py-xs">{row.default}</td>
              <td className="font-default text-[13px] text-neutral-text-dark px-m py-xs">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Main Doc ─────────────────────────────────────────────────
export function SelectionControlsDoc() {
  // Checkbox interactive state
  const [cb1, setCb1] = useState(false)
  const [cb2, setCb2] = useState(true)
  const [cb3, setCb3] = useState(false)

  // Radio interactive state
  const [radio, setRadio] = useState('option1')

  // Toggle interactive state
  const [tg1, setTg1] = useState(false)
  const [tg2, setTg2] = useState(true)
  const [tg3, setTg3] = useState(false)

  // Multi-checkbox group
  const [filters, setFilters] = useState({ medical: true, dental: false, vision: true })
  const allChecked = Object.values(filters).every(Boolean)
  const noneChecked = Object.values(filters).every(v => !v)
  const isIndeterminate = !allChecked && !noneChecked

  return (
    <DocLayout
      title="Selection Controls"
      description="Checkbox, Radio Button, and Toggle components for multi-select, single-select, and instant on/off patterns. Built on native inputs for full accessibility."
    >
      {/* ── Checkbox ──────────────────────────────────── */}
      <Section title="Checkbox" description="Square control for independent multi-select options. Supports checked, unchecked, and indeterminate states.">
        <Row label="Interactive">
          <Checkbox label="Unchecked" checked={cb1} onChange={() => setCb1(!cb1)} />
          <Checkbox label="Checked" checked={cb2} onChange={() => setCb2(!cb2)} />
          <Checkbox label="Click me" checked={cb3} onChange={() => setCb3(!cb3)} />
        </Row>

        <Row label="States — Unchecked">
          <Checkbox label="Default" />
          <Checkbox label="Disabled" disabled />
        </Row>

        <Row label="States — Checked">
          <Checkbox label="Default" checked onChange={() => {}} />
          <Checkbox label="Disabled" checked disabled onChange={() => {}} />
        </Row>

        <Row label="Indeterminate">
          <Checkbox label="Indeterminate" indeterminate onChange={() => {}} />
          <Checkbox label="Indeterminate disabled" indeterminate disabled onChange={() => {}} />
        </Row>

        <Row label="Without label">
          <Checkbox checked={false} onChange={() => {}} />
          <Checkbox checked onChange={() => {}} />
          <Checkbox indeterminate onChange={() => {}} />
          <Checkbox disabled />
          <Checkbox checked disabled onChange={() => {}} />
        </Row>
      </Section>

      {/* ── Radio Button ──────────────────────────────── */}
      <Section title="Radio Button" description="Circular control for mutually exclusive single-select groups. Always used in groups of 2+.">
        <Row label="Interactive group">
          <RadioButton label="Option A" name="demo" value="option1" checked={radio === 'option1'} onChange={() => setRadio('option1')} />
          <RadioButton label="Option B" name="demo" value="option2" checked={radio === 'option2'} onChange={() => setRadio('option2')} />
          <RadioButton label="Option C" name="demo" value="option3" checked={radio === 'option3'} onChange={() => setRadio('option3')} />
        </Row>

        <Row label="States — Unchecked">
          <RadioButton label="Default" name="s1" />
          <RadioButton label="Disabled" name="s2" disabled />
        </Row>

        <Row label="States — Checked">
          <RadioButton label="Default" name="s3" checked onChange={() => {}} />
          <RadioButton label="Disabled" name="s4" checked disabled onChange={() => {}} />
        </Row>

        <Row label="Without label">
          <RadioButton name="nolabel1" checked={false} onChange={() => {}} />
          <RadioButton name="nolabel2" checked onChange={() => {}} />
          <RadioButton name="nolabel3" disabled />
          <RadioButton name="nolabel4" checked disabled onChange={() => {}} />
        </Row>
      </Section>

      {/* ── Toggle ─────────────────────────────────── */}
      <Section title="Toggle" description="Instant on/off switch. Effect applies immediately — no submit button needed.">
        <Row label="Interactive">
          <Toggle label="Off" checked={tg1} onChange={() => setTg1(!tg1)} />
          <Toggle label="On" checked={tg2} onChange={() => setTg2(!tg2)} />
          <Toggle label="Click me" checked={tg3} onChange={() => setTg3(!tg3)} />
        </Row>

        <Row label="Default size — States">
          <Toggle label="Off" />
          <Toggle label="On" checked onChange={() => {}} />
          <Toggle label="Disabled off" disabled />
          <Toggle label="Disabled on" checked disabled onChange={() => {}} />
        </Row>

        <Row label="Large size — States">
          <Toggle label="Off" size="large" />
          <Toggle label="On" size="large" checked onChange={() => {}} />
          <Toggle label="Disabled off" size="large" disabled />
          <Toggle label="Disabled on" size="large" checked disabled onChange={() => {}} />
        </Row>

        <Row label="Without label">
          <Toggle />
          <Toggle checked onChange={() => {}} />
          <Toggle size="large" />
          <Toggle size="large" checked onChange={() => {}} />
          <Toggle disabled />
          <Toggle checked disabled onChange={() => {}} />
        </Row>
      </Section>

      {/* ── States Grid ─────────────────────────────── */}
      <Section title="All States" description="Complete state matrix: 3 types × 3 states × 2 selections.">
        <div className="overflow-x-auto rounded-xxs border border-neutral-border-light">
          <table className="w-full text-center">
            <thead>
              <tr className="bg-neutral-extra-subtle">
                <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs text-left">State</th>
                <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs">Checkbox Off</th>
                <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs">Checkbox On</th>
                <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs">Radio Off</th>
                <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs">Radio On</th>
                <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs">Toggle Off</th>
                <th className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider px-m py-xs">Toggle On</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-border-light">
                <td className="font-default text-[13px] font-medium text-neutral px-m py-s text-left">Default</td>
                <td className="px-m py-s"><div className="flex justify-center"><Checkbox /></div></td>
                <td className="px-m py-s"><div className="flex justify-center"><Checkbox checked onChange={() => {}} /></div></td>
                <td className="px-m py-s"><div className="flex justify-center"><RadioButton name="grid1" /></div></td>
                <td className="px-m py-s"><div className="flex justify-center"><RadioButton name="grid2" checked onChange={() => {}} /></div></td>
                <td className="px-m py-s"><div className="flex justify-center"><Toggle /></div></td>
                <td className="px-m py-s"><div className="flex justify-center"><Toggle checked onChange={() => {}} /></div></td>
              </tr>
              <tr className="border-t border-neutral-border-light">
                <td className="font-default text-[13px] font-medium text-neutral px-m py-s text-left">Hover</td>
                <td className="px-m py-s font-default text-[12px] text-neutral-text-light" colSpan={6}>Hover over the controls above to see hover state</td>
              </tr>
              <tr className="border-t border-neutral-border-light">
                <td className="font-default text-[13px] font-medium text-neutral px-m py-s text-left">Disabled</td>
                <td className="px-m py-s"><div className="flex justify-center"><Checkbox disabled /></div></td>
                <td className="px-m py-s"><div className="flex justify-center"><Checkbox checked disabled onChange={() => {}} /></div></td>
                <td className="px-m py-s"><div className="flex justify-center"><RadioButton name="grid3" disabled /></div></td>
                <td className="px-m py-s"><div className="flex justify-center"><RadioButton name="grid4" checked disabled onChange={() => {}} /></div></td>
                <td className="px-m py-s"><div className="flex justify-center"><Toggle disabled /></div></td>
                <td className="px-m py-s"><div className="flex justify-center"><Toggle checked disabled onChange={() => {}} /></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Real-world Example ─────────────────────── */}
      <Section title="Real-World Example" description="A 'Select All' pattern with indeterminate parent checkbox.">
        <div className="bg-white rounded-xxs border border-neutral-border-light p-m max-w-[320px]">
          <Checkbox
            label="Select all benefits"
            checked={allChecked}
            indeterminate={isIndeterminate}
            onChange={() => {
              const newVal = !allChecked
              setFilters({ medical: newVal, dental: newVal, vision: newVal })
            }}
          />
          <div className="ml-xl mt-xs space-y-xs">
            <Checkbox label="Medical" checked={filters.medical} onChange={() => setFilters(f => ({ ...f, medical: !f.medical }))} />
            <Checkbox label="Dental" checked={filters.dental} onChange={() => setFilters(f => ({ ...f, dental: !f.dental }))} />
            <Checkbox label="Vision" checked={filters.vision} onChange={() => setFilters(f => ({ ...f, vision: !f.vision }))} />
          </div>
        </div>
      </Section>

      {/* ── When to Use Which ─────────────────────── */}
      <Section title="When to Use Which" description="Choosing between Checkbox, Radio Button, and Toggle based on the interaction pattern.">
        <div className="grid grid-cols-3 gap-m">
          <div className="bg-white rounded-xxs border border-success-border-light p-m">
            <p className="font-default text-[11px] font-medium text-success uppercase tracking-wider mb-xs">✓ Checkbox — Multi-select</p>
            <p className="font-default text-[13px] text-neutral-text-dark mb-s">User can select <strong>zero, one, or many</strong> options.</p>
            <div className="space-y-xxs">
              <Checkbox label="Medical" checked onChange={() => {}} />
              <Checkbox label="Dental" />
              <Checkbox label="Vision" checked onChange={() => {}} />
            </div>
          </div>
          <div className="bg-white rounded-xxs border border-success-border-light p-m">
            <p className="font-default text-[11px] font-medium text-success uppercase tracking-wider mb-xs">✓ Radio — Single-select</p>
            <p className="font-default text-[13px] text-neutral-text-dark mb-s">User must pick <strong>exactly one</strong> option.</p>
            <div className="space-y-xxs">
              <RadioButton label="In-person" name="when1" checked onChange={() => {}} />
              <RadioButton label="Virtual" name="when1" />
              <RadioButton label="Phone" name="when1" />
            </div>
          </div>
          <div className="bg-white rounded-xxs border border-success-border-light p-m">
            <p className="font-default text-[11px] font-medium text-success uppercase tracking-wider mb-xs">✓ Toggle — Instant effect</p>
            <p className="font-default text-[13px] text-neutral-text-dark mb-s">Binary switch, effect applies <strong>immediately</strong>.</p>
            <div className="space-y-xxs">
              <Toggle label="Dark mode" checked onChange={() => {}} />
              <Toggle label="Notifications" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-m mt-m">
          <div className="bg-white rounded-xxs border border-error-border-light p-m">
            <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">✗ Wrong — Radio for multi-select</p>
            <p className="font-default text-[13px] text-neutral-text-dark">Don't use radio buttons when the user should be able to select multiple options.</p>
          </div>
          <div className="bg-white rounded-xxs border border-error-border-light p-m">
            <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">✗ Wrong — Single radio alone</p>
            <p className="font-default text-[13px] text-neutral-text-dark">Never use a single radio button. Use a checkbox for standalone yes/no toggles.</p>
          </div>
          <div className="bg-white rounded-xxs border border-error-border-light p-m">
            <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">✗ Wrong — Toggle in a form</p>
            <p className="font-default text-[13px] text-neutral-text-dark">Don't use toggle inside forms with a Submit button. Use checkboxes instead.</p>
          </div>
        </div>
      </Section>

      {/* ── Usage ──────────────────────────────────── */}
      <Section title="Usage" description="Copy-paste code examples.">
        <Label>Checkbox</Label>
        <CodeBlock code={`import { Checkbox } from '@/components/Checkbox'

// Basic
<Checkbox label="Email notifications" checked={checked} onChange={handleChange} />

// Disabled
<Checkbox label="Cannot modify" checked disabled />

// Indeterminate (select all)
<Checkbox label="Select all" indeterminate={isIndeterminate} checked={allChecked} onChange={toggleAll} />`} />

        <div className="mt-m" />
        <Label>Radio Button</Label>
        <CodeBlock code={`import { RadioButton } from '@/components/RadioButton'

// Radio group — same name = mutually exclusive
<RadioButton label="Basic"      name="plan" value="basic"      checked={plan === 'basic'}      onChange={() => setPlan('basic')} />
<RadioButton label="Premium"    name="plan" value="premium"    checked={plan === 'premium'}    onChange={() => setPlan('premium')} />
<RadioButton label="Enterprise" name="plan" value="enterprise" checked={plan === 'enterprise'} onChange={() => setPlan('enterprise')} />`} />

        <div className="mt-m" />
        <Label>Toggle</Label>
        <CodeBlock code={`import { Toggle } from '@/components/Toggle'

// Basic — instant on/off
<Toggle label="Dark mode" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />

// Large size
<Toggle label="Notifications" size="large" checked={notifs} onChange={() => setNotifs(!notifs)} />

// Disabled
<Toggle label="Feature locked" checked disabled />`} />
      </Section>

      {/* ── Usage Rules ────────────────────────────── */}
      <Section title="Usage Rules" description="From selection-controls-rules.ts — guidance for AI agents.">
        <RuleCard number={1} title="Checkbox = Multi-select" description="Use Checkbox when the user can select multiple options independently. Each checkbox operates independently — selecting one does not deselect others." />
        <RuleCard number={2} title="Radio = Single-select" description="Use Radio Button when exactly one option must be selected from a group. Radio buttons in the same name group are mutually exclusive." />
        <RuleCard number={3} title="Radio needs a group of 2+" description="Never use a single Radio Button in isolation. For standalone yes/no toggles, use a Checkbox instead." />
        <RuleCard number={4} title="Always have a label" description="Every Checkbox and Radio Button must have a visible text label for accessibility and clarity." />
        <RuleCard number={5} title="Label position: right" description="The control appears on the left, text label immediately to the right. Standard Western reading pattern." />
        <RuleCard number={6} title="Radio groups need a default" description="Radio groups should always have one option pre-selected so the user never submits an empty value." />
        <RuleCard number={7} title="Checkboxes start unchecked" description="Don't pre-check checkboxes to trick users. Pre-check only when restoring saved preferences." />
        <RuleCard number={8} title="Max 5 radio options" description="Radio groups with more than 5 options should become a Select/Dropdown instead." />
        <RuleCard number={9} title="Group with fieldset" description="Groups of related controls should be wrapped in a <fieldset> with a <legend> for screen readers." />
        <RuleCard number={10} title="Indeterminate = parent checkbox" description="Use indeterminate state on a parent Checkbox that controls child checkboxes. Checkbox-only feature." />
        <RuleCard number={11} title="Toggle = instant effect" description="Use Toggle when the action takes effect immediately — no submit button needed. If a form needs a Save/Submit button, use Checkbox instead." />
        <RuleCard number={12} title="Toggle vs Checkbox" description="Toggle = instant effect (dark mode, notifications). Checkbox = deferred effect (form with submit). Never mix them in the same form." />
        <RuleCard number={13} title="Toggle label describes ON state" description="Label should describe what happens when toggle is ON. Avoid negative labels like 'Disable notifications' — use 'Notifications' instead." />
      </Section>

      {/* ── Props ───────────────────────────────────── */}
      <Section title="Checkbox Props">
        <PropsTable data={checkboxPropsData} />
      </Section>

      <Section title="RadioButton Props">
        <PropsTable data={radioPropsData} />
      </Section>

      <Section title="Toggle Props">
        <PropsTable data={togglePropsData} />
      </Section>
    </DocLayout>
  )
}
