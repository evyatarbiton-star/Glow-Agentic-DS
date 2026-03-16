import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { TextInput } from '../../components/TextInput'
import { Select } from '../../components/Select'
import type { SelectOption } from '../../components/Select'
import { DatePicker } from '../../components/DatePicker'

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
      <div className="flex flex-wrap items-end gap-m">{children}</div>
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
const textInputPropsData = [
  { prop: 'label',       type: 'string',                                      default: '—',         description: 'Field label displayed above the input' },
  { prop: 'placeholder', type: 'string',                                      default: '—',         description: 'Placeholder text when empty' },
  { prop: 'value',       type: 'string',                                      default: '—',         description: 'Current input value' },
  { prop: 'onChange',    type: '(e: ChangeEvent<HTMLInputElement>) => void',  default: '—',         description: 'Callback when value changes' },
  { prop: 'disabled',   type: 'boolean',                                     default: 'false',     description: 'Disable all interactions — grey background' },
  { prop: 'error',      type: 'boolean',                                     default: 'false',     description: 'Error state — red border + red helper text' },
  { prop: 'helperText', type: 'string',                                      default: '—',         description: 'Helper text displayed below the input' },
  { prop: 'required',   type: 'boolean',                                     default: 'false',     description: 'Show red asterisk (*) next to label' },
  { prop: 'size',       type: "'sm' | 'md' | 'lg'",                          default: "'md'",      description: 'Input height — sm (40px) | md (48px) | lg (56px)' },
  { prop: 'shape',      type: "'default' | 'rounded'",                       default: "'default'", description: 'Border shape — default (8px) | rounded (999px pill)' },
  { prop: 'iconLeft',   type: 'ReactNode',                                   default: '—',         description: 'Icon on the left side of the input' },
  { prop: 'iconRight',  type: 'ReactNode',                                   default: '—',         description: 'Icon on the right side of the input' },
  { prop: 'showInfoIcon', type: 'boolean',                                   default: 'false',     description: 'Show info (ⓘ) icon next to label' },
  { prop: 'name',       type: 'string',                                      default: '—',         description: 'Form field name attribute' },
]

const selectPropsData = [
  { prop: 'options',          type: 'SelectOption[]',                default: '—',         description: 'Array of options to display in the dropdown' },
  { prop: 'value',            type: 'string',                        default: '—',         description: 'Currently selected value' },
  { prop: 'onChange',         type: '(value: string) => void',       default: '—',         description: 'Callback when selection changes — receives selected value string' },
  { prop: 'placeholder',     type: 'string',                        default: '—',         description: 'Placeholder text when nothing is selected' },
  { prop: 'label',           type: 'string',                        default: '—',         description: 'Field label displayed above the trigger' },
  { prop: 'helperText',      type: 'string',                        default: '—',         description: 'Helper text displayed below the trigger' },
  { prop: 'required',        type: 'boolean',                       default: 'false',     description: 'Show red asterisk (*) next to label' },
  { prop: 'disabled',        type: 'boolean',                       default: 'false',     description: 'Disabled state — grey background, no interaction' },
  { prop: 'error',           type: 'boolean',                       default: 'false',     description: 'Error state — red border + red helper text' },
  { prop: 'size',            type: "'sm' | 'md' | 'lg'",            default: "'md'",      description: 'Trigger height — sm (40px) | md (48px) | lg (56px)' },
  { prop: 'shape',           type: "'default' | 'rounded'",         default: "'default'", description: 'Border shape — default (8px) | rounded (999px pill)' },
  { prop: 'iconLeft',        type: 'ReactNode',                     default: '—',         description: 'Icon on the left side of the trigger' },
  { prop: 'showInfoIcon',    type: 'boolean',                       default: 'false',     description: 'Show info (ⓘ) icon next to label' },
  { prop: 'name',            type: 'string',                        default: '—',         description: 'Form field name attribute' },
  { prop: 'maxVisibleOptions', type: 'number',                      default: '6',         description: 'Max visible options before scroll' },
  { prop: 'searchable',       type: 'boolean',                       default: 'false',     description: 'Enable search/filter input in the dropdown' },
  { prop: 'searchPlaceholder', type: 'string',                       default: "'Search...'", description: 'Placeholder for the search input' },
  { prop: 'multiple',         type: 'boolean',                       default: 'false',     description: 'Enable multi-select mode — selections shown as tag chips' },
  { prop: 'multiValue',       type: 'string[]',                      default: '[]',        description: 'Currently selected values (multi-select mode)' },
  { prop: 'onMultiChange',    type: '(values: string[]) => void',    default: '—',         description: 'Callback when multi-selection changes' },
  { prop: 'renderTrigger',    type: '(selected) => ReactNode',       default: '—',         description: 'Custom render for trigger content (chevron still rendered by Select)' },
]

const datePickerPropsData = [
  { prop: 'label',         type: 'string',                          default: '—',         description: 'Field label displayed above the input' },
  { prop: 'helperText',    type: 'string',                          default: '—',         description: 'Helper text displayed below the input' },
  { prop: 'required',      type: 'boolean',                         default: 'false',     description: 'Show red asterisk (*) next to label' },
  { prop: 'showInfoIcon',  type: 'boolean',                         default: 'false',     description: 'Show info (ⓘ) icon next to label' },
  { prop: 'disabled',      type: 'boolean',                         default: 'false',     description: 'Disable all interactions — grey background' },
  { prop: 'error',         type: 'boolean',                         default: 'false',     description: 'Error state — red border + red helper text' },
  { prop: 'size',          type: "'sm' | 'md' | 'lg'",              default: "'md'",      description: 'Input height — sm (40px) | md (48px) | lg (56px)' },
  { prop: 'shape',         type: "'default' | 'rounded'",           default: "'default'", description: 'Border shape — default (8px) | rounded (999px pill)' },
  { prop: 'value',         type: 'string',                          default: '—',         description: 'Display value in MM/DD/YYYY format' },
  { prop: 'onChange',      type: '(displayValue: string) => void',  default: '—',         description: 'Callback when display string changes (fires on every keystroke)' },
  { prop: 'onDateChange',  type: '(date: Date | null) => void',     default: '—',         description: 'Callback with parsed Date when a complete valid date is entered' },
  { prop: 'minDate',       type: 'Date',                            default: '—',         description: 'Earliest selectable date' },
  { prop: 'maxDate',       type: 'Date',                            default: '—',         description: 'Latest selectable date' },
  { prop: 'name',          type: 'string',                          default: '—',         description: 'Form field name attribute (renders hidden input with ISO value)' },
]

function PropsTable({ data }: { data: typeof textInputPropsData }) {
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

// ── Search Icon (for demo) ───────────────────────────────────
function SearchIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.167 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333ZM17.5 17.5l-3.625-3.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Close Icon (for demo) ────────────────────────────────────
function CloseIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5 5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Globe Icon (for Select demo) ─────────────────────────────
function GlobeIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 10h15M10 2.5c-2.5 3-2.5 12 0 15M10 2.5c2.5 3 2.5 12 0 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Demo Options ─────────────────────────────────────────────
const countryOptions: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
]

const planOptions: SelectOption[] = [
  { value: 'free',       label: 'Free',         additionalInfo: '$0/mo' },
  { value: 'starter',    label: 'Starter',       additionalInfo: '$9/mo' },
  { value: 'pro',        label: 'Professional',  additionalInfo: '$29/mo' },
  { value: 'enterprise', label: 'Enterprise',    additionalInfo: 'Custom' },
]

const languageOptions: SelectOption[] = [
  { value: 'en', label: 'English',    iconLeft: <GlobeIcon /> },
  { value: 'es', label: 'Español',    iconLeft: <GlobeIcon /> },
  { value: 'fr', label: 'Français',   iconLeft: <GlobeIcon /> },
  { value: 'de', label: 'Deutsch',    iconLeft: <GlobeIcon /> },
  { value: 'ja', label: '日本語',     iconLeft: <GlobeIcon /> },
]

const disabledOptions: SelectOption[] = [
  { value: 'active',     label: 'Active' },
  { value: 'inactive',   label: 'Inactive' },
  { value: 'archived',   label: 'Archived', disabled: true },
  { value: 'deleted',    label: 'Deleted',  disabled: true },
]

// ── Main Doc ─────────────────────────────────────────────────
export function FormsDoc() {
  const [interactiveValue, setInteractiveValue] = useState('')
  const [errorValue, setErrorValue] = useState('Invalid email')
  const [selectValue, setSelectValue] = useState('')
  const [selectErrorValue, setSelectErrorValue] = useState('')
  const [searchSelectValue, setSearchSelectValue] = useState('')
  const [multiSelectValues, setMultiSelectValues] = useState<string[]>(['en'])
  const [comboValues, setComboValues] = useState<string[]>([])
  const [dateValue, setDateValue] = useState('')

  return (
    <DocLayout
      title="Forms"
      description="Text inputs, selects, and form controls for building forms. Built on native HTML inputs for full accessibility and form compatibility."
    >
      {/* ── Text Input — Interactive ──────────────────── */}
      <Section title="Text Input" description="Single-line text entry with label, helper text, icons, and validation states. Supports 3 sizes and 2 shapes.">
        <Row label="Interactive">
          <div className="w-[320px]">
            <TextInput
              label="Email address"
              placeholder="Enter your email"
              helperText="We'll never share your email."
              required
              value={interactiveValue}
              onChange={(e) => setInteractiveValue(e.target.value)}
            />
          </div>
        </Row>

        {/* ── Sizes ── */}
        <Row label="Sizes">
          <div className="w-[240px]">
            <TextInput
              label="Small"
              placeholder="Height 40px"
              size="sm"
            />
          </div>
          <div className="w-[240px]">
            <TextInput
              label="Medium (default)"
              placeholder="Height 48px"
              size="md"
            />
          </div>
          <div className="w-[240px]">
            <TextInput
              label="Large"
              placeholder="Height 56px"
              size="lg"
            />
          </div>
        </Row>

        {/* ── Shapes ── */}
        <Row label="Shapes">
          <div className="w-[280px]">
            <TextInput
              label="Default (8px radius)"
              placeholder="Placeholder text"
              shape="default"
            />
          </div>
          <div className="w-[280px]">
            <TextInput
              label="Rounded (pill)"
              placeholder="Placeholder text"
              shape="rounded"
            />
          </div>
        </Row>

        {/* ── With Icons ── */}
        <Row label="With icons">
          <div className="w-[260px]">
            <TextInput
              label="Left icon"
              placeholder="Search..."
              iconLeft={<SearchIcon />}
            />
          </div>
          <div className="w-[260px]">
            <TextInput
              label="Right icon"
              placeholder="Type here"
              iconRight={<CloseIcon />}
            />
          </div>
          <div className="w-[260px]">
            <TextInput
              label="Both icons"
              placeholder="Search..."
              iconLeft={<SearchIcon />}
              iconRight={<CloseIcon />}
            />
          </div>
        </Row>

        {/* ── With info icon ── */}
        <Row label="Header variations">
          <div className="w-[260px]">
            <TextInput
              label="With info icon"
              placeholder="Placeholder"
              showInfoIcon
            />
          </div>
          <div className="w-[260px]">
            <TextInput
              label="Required + info"
              placeholder="Placeholder"
              required
              showInfoIcon
            />
          </div>
          <div className="w-[260px]">
            <TextInput
              placeholder="No label, no helper"
            />
          </div>
        </Row>
      </Section>

      {/* ── States ──────────────────────────────────── */}
      <Section title="States" description="All visual states: default, hover (interactive), focus (click to see), disabled, and error.">
        <Row label="Default">
          <div className="w-[280px]">
            <TextInput
              label="Label"
              placeholder="Placeholder text"
              helperText="Helper text"
            />
          </div>
        </Row>

        <Row label="Typed">
          <div className="w-[280px]">
            <TextInput
              label="Label"
              value="Entered text"
              helperText="Helper text"
              onChange={() => {}}
            />
          </div>
        </Row>

        <Row label="Disabled">
          <div className="w-[280px]">
            <TextInput
              label="Label"
              placeholder="Cannot interact"
              helperText="Helper text"
              disabled
            />
          </div>
          <div className="w-[280px]">
            <TextInput
              label="Disabled with value"
              value="Locked value"
              helperText="Helper text"
              disabled
              onChange={() => {}}
            />
          </div>
        </Row>

        <Row label="Error">
          <div className="w-[280px]">
            <TextInput
              label="Email"
              value={errorValue}
              helperText="Please enter a valid email address."
              error
              required
              onChange={(e) => setErrorValue(e.target.value)}
            />
          </div>
          <div className="w-[280px]">
            <TextInput
              label="Error with icon"
              value="Bad input"
              helperText="This field is required."
              error
              iconRight={<CloseIcon />}
              onChange={() => {}}
            />
          </div>
        </Row>

        <Row label="Rounded + states">
          <div className="w-[240px]">
            <TextInput placeholder="Default" shape="rounded" />
          </div>
          <div className="w-[240px]">
            <TextInput placeholder="Disabled" shape="rounded" disabled />
          </div>
          <div className="w-[240px]">
            <TextInput placeholder="Error" shape="rounded" error helperText="Error" />
          </div>
        </Row>
      </Section>

      {/* ── Size Comparison ────────────────────────── */}
      <Section title="Size Comparison" description="Side-by-side sizing to match Button sm/md/lg heights.">
        <div className="flex items-end gap-m">
          <div className="w-[200px]">
            <TextInput label="Small (40px)" placeholder="sm" size="sm" />
          </div>
          <div className="w-[200px]">
            <TextInput label="Medium (48px)" placeholder="md" size="md" />
          </div>
          <div className="w-[200px]">
            <TextInput label="Large (56px)" placeholder="lg" size="lg" />
          </div>
        </div>
      </Section>

      {/* ── Usage ──────────────────────────────────── */}
      <Section title="Usage" description="Copy-paste code examples.">
        <Label>Basic</Label>
        <CodeBlock code={`import { TextInput } from '@/components/TextInput'

// Basic with label + helper text
<TextInput
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email."
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>`} />

        <div className="mt-m" />
        <Label>Sizes &amp; Shapes</Label>
        <CodeBlock code={`// Small (40px height)
<TextInput label="Name" placeholder="John Doe" size="sm" />

// Large (56px height)
<TextInput label="Search" placeholder="Type to search..." size="lg" />

// Rounded pill shape
<TextInput placeholder="Search..." shape="rounded" iconLeft={<SearchIcon />} />`} />

        <div className="mt-m" />
        <Label>With Icons</Label>
        <CodeBlock code={`// Left icon
<TextInput label="Search" placeholder="Search..." iconLeft={<SearchIcon />} />

// Right icon (e.g., clear button)
<TextInput label="Name" value={name} iconRight={<CloseIcon />} />

// Both icons
<TextInput label="Search" iconLeft={<SearchIcon />} iconRight={<CloseIcon />} />`} />

        <div className="mt-m" />
        <Label>Error State</Label>
        <CodeBlock code={`// Error with red border + red helper text
<TextInput
  label="Email"
  value={email}
  error
  helperText="Please enter a valid email address."
  onChange={(e) => setEmail(e.target.value)}
/>`} />

        <div className="mt-m" />
        <Label>Disabled</Label>
        <CodeBlock code={`// Disabled — grey background, no interaction
<TextInput label="Name" value="Locked value" disabled />`} />
      </Section>

      {/* ── Usage Rules ────────────────────────────── */}
      <Section title="Usage Rules" description="Guidance for AI agents and developers.">
        <RuleCard
          number={1}
          title="Always provide a label"
          description="Every TextInput should have a visible label above it for accessibility and clarity. The label describes what the user should enter. Only omit the label in search bars or other contexts where the purpose is obvious from surrounding UI."
        />
        <RuleCard
          number={2}
          title="Use helper text for guidance"
          description="Helper text provides additional context below the input: format hints, character limits, or validation rules. In error state, helper text turns red and explains the error."
        />
        <RuleCard
          number={3}
          title="Match size to adjacent buttons"
          description="TextInput sizes (sm=40px, md=48px, lg=56px) match Button sizes. When placing an input next to a button, use the same size for visual alignment."
        />
        <RuleCard
          number={4}
          title="Use rounded shape for search bars"
          description="The rounded (pill) shape is designed for search bars and standalone inputs. Use the default shape (8px radius) for standard form fields."
        />
        <RuleCard
          number={5}
          title="Red asterisk for required fields"
          description="Set required={true} to show a red asterisk (*) next to the label. This is a visual indicator only — combine with form validation logic."
        />
        <RuleCard
          number={6}
          title="Error state = red border + red helper"
          description="When error={true}, the border turns red and the helper text turns red. The error border persists on hover and focus. Always provide a helperText explaining the error."
        />
      </Section>

      {/* ── Props ───────────────────────────────────── */}
      <Section title="TextInput Props">
        <PropsTable data={textInputPropsData} />
      </Section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* ══ SELECT ════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* ── Select — Interactive ───────────────────────── */}
      <Section title="Select" description="Dropdown selector for picking one option from a list. Built on the same visual foundation as TextInput — same sizes, shapes, and states.">
        <Row label="Interactive">
          <div className="w-[320px]">
            <Select
              label="Country"
              placeholder="Select a country"
              helperText="Choose your country of residence."
              required
              options={countryOptions}
              value={selectValue}
              onChange={setSelectValue}
            />
          </div>
        </Row>

        {/* ── Rich Options ── */}
        <Row label="With additional info">
          <div className="w-[320px]">
            <Select
              label="Plan"
              placeholder="Choose a plan"
              options={planOptions}
            />
          </div>
        </Row>

        <Row label="With icons">
          <div className="w-[320px]">
            <Select
              label="Language"
              placeholder="Select language"
              options={languageOptions}
              iconLeft={<GlobeIcon />}
            />
          </div>
        </Row>

        <Row label="With disabled options">
          <div className="w-[320px]">
            <Select
              label="Status"
              placeholder="Select status"
              options={disabledOptions}
              helperText="Archived and Deleted are disabled."
            />
          </div>
        </Row>

        {/* ── Sizes ── */}
        <Row label="Sizes">
          <div className="w-[240px]">
            <Select
              label="Small"
              placeholder="Height 40px"
              size="sm"
              options={countryOptions}
            />
          </div>
          <div className="w-[240px]">
            <Select
              label="Medium (default)"
              placeholder="Height 48px"
              size="md"
              options={countryOptions}
            />
          </div>
          <div className="w-[240px]">
            <Select
              label="Large"
              placeholder="Height 56px"
              size="lg"
              options={countryOptions}
            />
          </div>
        </Row>

        {/* ── Shapes ── */}
        <Row label="Shapes">
          <div className="w-[280px]">
            <Select
              label="Default (8px radius)"
              placeholder="Select option"
              shape="default"
              options={countryOptions}
            />
          </div>
          <div className="w-[280px]">
            <Select
              label="Rounded (pill)"
              placeholder="Select option"
              shape="rounded"
              options={countryOptions}
            />
          </div>
        </Row>

        {/* ── Without label / without helper ── */}
        <Row label="Header variations">
          <div className="w-[260px]">
            <Select
              label="With info icon"
              placeholder="Select..."
              showInfoIcon
              options={countryOptions}
            />
          </div>
          <div className="w-[260px]">
            <Select
              label="Required + info"
              placeholder="Select..."
              required
              showInfoIcon
              options={countryOptions}
            />
          </div>
          <div className="w-[260px]">
            <Select
              placeholder="No label, no helper"
              options={countryOptions}
            />
          </div>
        </Row>
      </Section>

      {/* ── Select States ──────────────────────────────── */}
      <Section title="Select States" description="All visual states: default, with value, disabled, and error.">
        <Row label="Default (placeholder)">
          <div className="w-[280px]">
            <Select
              label="Country"
              placeholder="Select a country"
              helperText="Helper text"
              options={countryOptions}
            />
          </div>
        </Row>

        <Row label="With value selected">
          <div className="w-[280px]">
            <Select
              label="Country"
              value="us"
              helperText="Helper text"
              options={countryOptions}
              onChange={() => {}}
            />
          </div>
        </Row>

        <Row label="Disabled">
          <div className="w-[280px]">
            <Select
              label="Country"
              placeholder="Cannot interact"
              helperText="Helper text"
              disabled
              options={countryOptions}
            />
          </div>
          <div className="w-[280px]">
            <Select
              label="Disabled with value"
              value="uk"
              helperText="Helper text"
              disabled
              options={countryOptions}
              onChange={() => {}}
            />
          </div>
        </Row>

        <Row label="Error">
          <div className="w-[280px]">
            <Select
              label="Country"
              placeholder="Select a country"
              helperText="Please select a country."
              error
              required
              options={countryOptions}
              value={selectErrorValue}
              onChange={setSelectErrorValue}
            />
          </div>
          <div className="w-[280px]">
            <Select
              label="Error with icon"
              placeholder="Select..."
              helperText="This field is required."
              error
              iconLeft={<GlobeIcon />}
              options={countryOptions}
            />
          </div>
        </Row>

        <Row label="Rounded + states">
          <div className="w-[240px]">
            <Select placeholder="Default" shape="rounded" options={countryOptions} />
          </div>
          <div className="w-[240px]">
            <Select placeholder="Disabled" shape="rounded" disabled options={countryOptions} />
          </div>
          <div className="w-[240px]">
            <Select placeholder="Error" shape="rounded" error helperText="Error" options={countryOptions} />
          </div>
        </Row>
      </Section>

      {/* ── Searchable Select ────────────────────────────── */}
      <Section title="Searchable Select" description="Add a search/filter input at the top of the dropdown with the searchable prop.">
        <Row label="Interactive">
          <div className="w-[320px]">
            <Select
              label="Language"
              placeholder="Select language"
              options={languageOptions}
              searchable
              searchPlaceholder="Search languages..."
              value={searchSelectValue}
              onChange={setSearchSelectValue}
              iconLeft={<GlobeIcon />}
            />
          </div>
        </Row>

        <Row label="With many options">
          <div className="w-[320px]">
            <Select
              label="Country"
              placeholder="Search and select..."
              options={[
                { value: 'us', label: 'United States' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'ca', label: 'Canada' },
                { value: 'au', label: 'Australia' },
                { value: 'de', label: 'Germany' },
                { value: 'fr', label: 'France' },
                { value: 'jp', label: 'Japan' },
                { value: 'kr', label: 'South Korea' },
                { value: 'br', label: 'Brazil' },
                { value: 'in', label: 'India' },
                { value: 'mx', label: 'Mexico' },
                { value: 'it', label: 'Italy' },
              ]}
              searchable
            />
          </div>
        </Row>
      </Section>

      {/* ── Multi-Select with Tags ───────────────────────── */}
      <Section title="Multi-Select with Tags" description="Enable multiple selections shown as tag chips in the trigger with the multiple prop.">
        <Row label="Interactive">
          <div className="w-[320px]">
            <Select
              label="Languages"
              placeholder="Select languages"
              options={languageOptions}
              multiple
              multiValue={multiSelectValues}
              onMultiChange={setMultiSelectValues}
            />
          </div>
        </Row>
      </Section>

      {/* ── Combined: Searchable Multi-Select ────────────── */}
      <Section title="Searchable Multi-Select" description="Combine searchable and multiple for a filterable multi-select — the full Languages pattern from the Find Care example.">
        <Row label="Interactive">
          <div className="w-[320px]">
            <Select
              label="Languages"
              placeholder="Search and select..."
              options={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
                { value: 'de', label: 'German' },
                { value: 'zh', label: 'Mandarin' },
                { value: 'ar', label: 'Arabic' },
                { value: 'hi', label: 'Hindi' },
                { value: 'pt', label: 'Portuguese' },
                { value: 'ru', label: 'Russian' },
                { value: 'ja', label: 'Japanese' },
              ]}
              multiple
              multiValue={comboValues}
              onMultiChange={setComboValues}
              searchable
              searchPlaceholder="Search for a language..."
              size="sm"
            />
          </div>
        </Row>
      </Section>

      {/* ── Select Usage ────────────────────────────────── */}
      <Section title="Select Usage" description="Copy-paste code examples.">
        <Label>Basic</Label>
        <CodeBlock code={`import { Select } from '@/components/Select'

// Basic with label + helper text
<Select
  label="Country"
  placeholder="Select a country"
  helperText="Choose your country of residence."
  required
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ]}
  value={country}
  onChange={setCountry}
/>`} />

        <div className="mt-m" />
        <Label>Rich Options (icons + additional info)</Label>
        <CodeBlock code={`// Options with left icon
const options = [
  { value: 'en', label: 'English', iconLeft: <GlobeIcon /> },
  { value: 'es', label: 'Español', iconLeft: <GlobeIcon /> },
]

// Options with additional info (right-aligned)
const plans = [
  { value: 'free', label: 'Free', additionalInfo: '$0/mo' },
  { value: 'pro',  label: 'Pro',  additionalInfo: '$29/mo' },
]

// Disabled individual options
const statuses = [
  { value: 'active',   label: 'Active' },
  { value: 'archived', label: 'Archived', disabled: true },
]`} />

        <div className="mt-m" />
        <Label>Sizes &amp; Shapes</Label>
        <CodeBlock code={`// Small (40px height)
<Select label="Size" placeholder="Pick..." size="sm" options={options} />

// Large (56px height)
<Select label="Size" placeholder="Pick..." size="lg" options={options} />

// Rounded pill shape
<Select placeholder="Select..." shape="rounded" options={options} />`} />

        <div className="mt-m" />
        <Label>Error State</Label>
        <CodeBlock code={`// Error with red border + red helper text
<Select
  label="Country"
  placeholder="Select a country"
  error
  helperText="Please select a country."
  options={countries}
  value={country}
  onChange={setCountry}
/>`} />

        <div className="mt-m" />
        <Label>Disabled</Label>
        <CodeBlock code={`// Disabled — grey background, no interaction
<Select
  label="Country"
  value="us"
  disabled
  options={countries}
/>`} />

        <div className="mt-m" />
        <Label>Searchable</Label>
        <CodeBlock code={`// Searchable dropdown — filter options by typing
<Select
  label="Language"
  placeholder="Select language"
  options={languages}
  searchable
  searchPlaceholder="Search languages..."
  value={language}
  onChange={setLanguage}
/>`} />

        <div className="mt-m" />
        <Label>Multi-Select with Tags</Label>
        <CodeBlock code={`// Multi-select — selections shown as tag chips
<Select
  label="Languages"
  placeholder="Select languages"
  options={languages}
  multiple
  multiValue={selectedLanguages}
  onMultiChange={setSelectedLanguages}
/>`} />

        <div className="mt-m" />
        <Label>Searchable Multi-Select (combined)</Label>
        <CodeBlock code={`// Combined search + multi-select
<Select
  label="Languages"
  placeholder="Search and select..."
  options={languages}
  multiple
  multiValue={selectedLanguages}
  onMultiChange={setSelectedLanguages}
  searchable
  searchPlaceholder="Search for a language..."
/>`} />

        <div className="mt-m" />
        <Label>Custom Trigger</Label>
        <CodeBlock code={`// Custom trigger rendering (e.g., logo + text)
<Select
  options={plans}
  value={plan}
  onChange={setPlan}
  renderTrigger={(selected) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <img src={selected?.iconUrl} alt="" width={20} />
      <span>{selected?.label}</span>
    </div>
  )}
/>`} />
      </Section>

      {/* ── Select Usage Rules ──────────────────────────── */}
      <Section title="Select Usage Rules" description="Guidance for AI agents and developers.">
        <RuleCard
          number={1}
          title="Use Select for 5+ mutually exclusive options"
          description="Select is ideal when users must pick exactly one option from 5 or more choices. For fewer options (2–4), prefer RadioButton for better visibility. For binary choices, use Toggle or Checkbox."
        />
        <RuleCard
          number={2}
          title="Always provide a placeholder"
          description="The placeholder (e.g., 'Select a country') tells users what to expect. Without it, the trigger appears empty and confusing. The placeholder text should describe what the user is selecting."
        />
        <RuleCard
          number={3}
          title="Match size to adjacent form fields"
          description="Select sizes (sm=40px, md=48px, lg=56px) match TextInput and Button sizes. When placing a Select next to other form elements, use the same size for visual alignment."
        />
        <RuleCard
          number={4}
          title="Use additionalInfo for context"
          description="Each option can include right-aligned additional info (e.g., price, count, status). Use this to help users make informed choices without needing a separate lookup."
        />
        <RuleCard
          number={5}
          title="Keyboard accessible"
          description="Select supports full keyboard navigation: Arrow keys to navigate options, Enter/Space to select, Escape to close. Tab moves focus away. This is built-in — no extra setup needed."
        />
      </Section>

      {/* ── Select Props ───────────────────────────────── */}
      <Section title="Select Props">
        <PropsTable data={selectPropsData} />
      </Section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* ══ DATE PICKER ═══════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {/* ── DatePicker — Interactive ──────────────────── */}
      <Section title="Date Picker" description="Date input with typing (auto-formatted MM/DD/YYYY) and a calendar popup. Built on the same visual foundation as TextInput — same sizes, shapes, and states.">
        <Row label="Interactive">
          <div className="w-[320px]">
            <DatePicker
              label="Date of birth"
              helperText="Enter your date of birth."
              required
              value={dateValue}
              onChange={setDateValue}
            />
          </div>
        </Row>

        {/* ── Sizes ── */}
        <Row label="Sizes">
          <div className="w-[240px]">
            <DatePicker
              label="Small"
              size="sm"
            />
          </div>
          <div className="w-[240px]">
            <DatePicker
              label="Medium (default)"
              size="md"
            />
          </div>
          <div className="w-[240px]">
            <DatePicker
              label="Large"
              size="lg"
            />
          </div>
        </Row>

        {/* ── Shapes ── */}
        <Row label="Shapes">
          <div className="w-[280px]">
            <DatePicker
              label="Default (8px radius)"
              shape="default"
            />
          </div>
          <div className="w-[280px]">
            <DatePicker
              label="Rounded (pill)"
              shape="rounded"
            />
          </div>
        </Row>

        {/* ── Header variations ── */}
        <Row label="Header variations">
          <div className="w-[260px]">
            <DatePicker
              label="With info icon"
              showInfoIcon
            />
          </div>
          <div className="w-[260px]">
            <DatePicker
              label="Required + info"
              required
              showInfoIcon
            />
          </div>
          <div className="w-[260px]">
            <DatePicker />
          </div>
        </Row>
      </Section>

      {/* ── DatePicker States ─────────────────────────── */}
      <Section title="Date Picker States" description="All visual states: default, with value, disabled, and error.">
        <Row label="Default (placeholder)">
          <div className="w-[280px]">
            <DatePicker
              label="Date of birth"
              helperText="Helper text"
            />
          </div>
        </Row>

        <Row label="With value">
          <div className="w-[280px]">
            <DatePicker
              label="Date of birth"
              value="01 / 15 / 1990"
              helperText="Helper text"
              onChange={() => {}}
            />
          </div>
        </Row>

        <Row label="Disabled">
          <div className="w-[280px]">
            <DatePicker
              label="Date of birth"
              helperText="Helper text"
              disabled
            />
          </div>
          <div className="w-[280px]">
            <DatePicker
              label="Disabled with value"
              value="01 / 15 / 1990"
              helperText="Helper text"
              disabled
              onChange={() => {}}
            />
          </div>
        </Row>

        <Row label="Error">
          <div className="w-[280px]">
            <DatePicker
              label="Date of birth"
              helperText="Please enter a valid date."
              error
              required
            />
          </div>
          <div className="w-[280px]">
            <DatePicker
              label="Date of birth"
              value="13 / 45 / 2020"
              helperText="Invalid date format."
              error
            />
          </div>
        </Row>
      </Section>

      {/* ── DatePicker Usage ──────────────────────────── */}
      <Section title="Date Picker Usage" description="Copy-paste code examples.">
        <Label>Basic</Label>
        <CodeBlock code={`import { DatePicker } from '@/components/DatePicker'

// Basic with label + helper text
<DatePicker
  label="Date of birth"
  helperText="Enter your date of birth."
  required
  value={dateValue}
  onChange={setDateValue}
/>`} />

        <div className="mt-m" />
        <Label>With parsed Date callback</Label>
        <CodeBlock code={`// Get a Date object when a complete valid date is typed
<DatePicker
  label="Appointment date"
  value={dateStr}
  onChange={setDateStr}
  onDateChange={(date) => {
    if (date) console.log('Parsed date:', date)
  }}
/>`} />

        <div className="mt-m" />
        <Label>With min/max date constraints</Label>
        <CodeBlock code={`// Restrict selectable dates
<DatePicker
  label="Date of birth"
  value={dob}
  onChange={setDob}
  minDate={new Date(1900, 0, 1)}
  maxDate={new Date()}
/>`} />

        <div className="mt-m" />
        <Label>Error State</Label>
        <CodeBlock code={`// Error with red border + red helper text
<DatePicker
  label="Date of birth"
  value={dob}
  onChange={setDob}
  error
  helperText="Please enter a valid date."
/>`} />

        <div className="mt-m" />
        <Label>Disabled</Label>
        <CodeBlock code={`// Disabled — grey background, no interaction
<DatePicker
  label="Date of birth"
  value="01 / 15 / 1990"
  disabled
/>`} />
      </Section>

      {/* ── DatePicker Usage Rules ────────────────────── */}
      <Section title="Date Picker Usage Rules" description="Guidance for AI agents and developers.">
        <RuleCard
          number={1}
          title="Use for date entry, not time"
          description="DatePicker is for calendar dates (MM/DD/YYYY). It does not support time input. For combined date + time, pair it with a separate time input."
        />
        <RuleCard
          number={2}
          title="Auto-formatting handles slashes"
          description="Users type only digits — slashes are inserted automatically as they type. Backspace removes digits and slashes naturally. Do not add extra validation for slash placement."
        />
        <RuleCard
          number={3}
          title="Use minDate/maxDate for constraints"
          description="Set minDate and maxDate to restrict the calendar picker. Disabled dates appear greyed out and are not clickable. The typed input is not restricted — validate on submit."
        />
        <RuleCard
          number={4}
          title="Use onDateChange for parsed Date objects"
          description="onChange fires on every keystroke with the display string. onDateChange fires only when a complete, valid date is entered — use this for form state that needs a Date object."
        />
        <RuleCard
          number={5}
          title="Calendar closes on selection"
          description="Clicking a day in the calendar fills the input with the formatted date and closes the popup. Users can also type dates directly without opening the calendar."
        />
      </Section>

      {/* ── DatePicker Props ──────────────────────────── */}
      <Section title="Date Picker Props">
        <PropsTable data={datePickerPropsData} />
      </Section>
    </DocLayout>
  )
}
