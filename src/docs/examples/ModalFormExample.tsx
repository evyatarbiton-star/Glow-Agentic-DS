import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'
import { Select } from '../../components/Select'
import { Modal } from '../../components/Modal'

// ============================================================
// MODAL + FORM — Canonical Composition Pattern
//
// This file demonstrates the CORRECT way to build a Modal with
// a form inside it, so that AI-generated screens don't fall
// into the classic "input loses focus on every keystroke" bug.
//
// Read tokens/usage/composition-rules.ts before editing.
// ============================================================

// ── Field schema (stable, defined at module scope) ───────────
// Stable IDs used as React keys when mapping fields. Never use
// the array index — see composition-rules.ts (stable-keys).
const REASON_OPTIONS = [
  { value: 'annual',     label: 'Annual checkup' },
  { value: 'follow-up',  label: 'Follow-up visit' },
  { value: 'new-issue',  label: 'New health concern' },
  { value: 'specialist', label: 'Specialist referral' },
]

// ── BookingForm — defined at MODULE SCOPE ────────────────────
// CRITICAL: this component is intentionally defined OUTSIDE the
// parent. If you move it inside ModalFormScreen's body, every
// keystroke will re-create it, React will remount the inputs,
// and every input will lose focus after one character.
//
// State stays in the parent; values + setters come down as props.
type BookingFormProps = {
  fullName: string
  setFullName: (v: string) => void
  email: string
  setEmail: (v: string) => void
  reason: string
  setReason: (v: string) => void
}

function BookingForm({ fullName, setFullName, email, setEmail, reason, setReason }: BookingFormProps) {
  return (
    <div className="px-l py-m space-y-m">
      <TextInput
        label="Full name"
        placeholder="Enter your full name"
        size="sm"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextInput
        label="Email"
        placeholder="you@example.com"
        size="sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Select
        label="Reason for visit"
        placeholder="Select a reason"
        size="sm"
        options={REASON_OPTIONS}
        value={reason}
        onChange={setReason}
      />
    </div>
  )
}

// ── ModalFormScreen — the parent that owns form state ────────
// All form state lives here, in the parent. The Modal's open/close
// state lives here too. The Modal itself is given a stable key
// (none, which is fine — React uses a stable position-based key).
export function ModalFormScreen() {
  const [open, setOpen] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')

  const reset = () => {
    setFullName('')
    setEmail('')
    setReason('')
  }

  const close = () => {
    setOpen(false)
    reset()
  }

  const submit = () => {
    // In a real app: call your API here.
    // For the example, just close the modal.
    close()
  }

  return (
    <div className="flex flex-col items-center gap-m">
      <Button variant="primary" size="md" onClick={() => setOpen(true)}>
        Book appointment
      </Button>

      <Modal
        open={open}
        onClose={close}
        title="Book appointment"
        size="sm"
        footerActions={
          <>
            <Button variant="outline" size="md" onClick={close}>Cancel</Button>
            <Button variant="primary" size="md" onClick={submit}>Confirm</Button>
          </>
        }
      >
        <BookingForm
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          reason={reason}
          setReason={setReason}
        />
      </Modal>
    </div>
  )
}

// ── Page wrapper for the docs site ───────────────────────────
export function ModalFormExample() {
  return (
    <DocLayout
      title="Modal + Form"
      description="The canonical pattern for building a Modal with form inputs in the Glow DS. Demonstrates module-scope component definitions, parent-owned state, and stable keys — the rules that prevent the classic 'input loses focus on every keystroke' bug when AI generates this kind of screen."
    >

      {/* ── Live Example ── */}
      <Section
        title="Live Example"
        description="Click 'Book appointment' to open the modal. Type in each field — focus stays on the input as you type. This is the behavior every Modal+Form should have."
      >
        <div className="bg-neutral-subtle rounded-xs p-xl flex justify-center">
          <ModalFormScreen />
        </div>
      </Section>

      {/* ── The pattern ── */}
      <Section
        title="The pattern"
        description="Three rules that keep this working. AI agents must follow all three."
      >
        <div className="flex flex-col gap-s">
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">Rule 1 — Module scope</p>
            <p className="font-default text-[14px] text-neutral-text-dark">
              <code className="font-mono text-[12px] text-primary">BookingForm</code> is defined at <strong>module scope</strong>, not inside <code className="font-mono text-[12px]">ModalFormScreen</code>. If it were nested, every keystroke would recreate it and React would remount every input — losing focus on each character.
            </p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">Rule 2 — State in the parent</p>
            <p className="font-default text-[14px] text-neutral-text-dark">
              <code className="font-mono text-[12px] text-primary">fullName</code>, <code className="font-mono text-[12px] text-primary">email</code>, and <code className="font-mono text-[12px] text-primary">reason</code> all live in <code className="font-mono text-[12px]">ModalFormScreen</code>. Values + setters are passed down. The form is purely presentational.
            </p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">Rule 3 — Stable identifiers</p>
            <p className="font-default text-[14px] text-neutral-text-dark">
              When mapping options/fields, use a stable id (<code className="font-mono text-[12px] text-primary">option.value</code>), never the array index. The Modal itself does not get a changing <code className="font-mono text-[12px]">key</code> prop.
            </p>
          </div>
        </div>
      </Section>

      {/* ── The anti-pattern ── */}
      <Section
        title="The anti-pattern (what AI usually generates)"
        description="If you see this shape in generated code, fix it before shipping."
      >
        <pre className="rounded-xs bg-neutral overflow-x-auto p-m text-[12px] text-neutral-subtle leading-relaxed">
          <code>{`function ModalFormScreen() {
  const [name, setName] = useState('')

  // ❌ Form is RECREATED on every render.
  //    React sees a new component type each time and
  //    unmounts the old <input>, mounting a fresh one.
  //    Browser focus dies with the old DOM node.
  const Form = () => (
    <TextInput value={name} onChange={(e) => setName(e.target.value)} />
  )

  return <Modal open={open}><Form /></Modal>
}`}</code>
        </pre>
      </Section>

      {/* ── The fix ── */}
      <Section
        title="The fix"
        description="Move the form component out of the parent's body, or inline the JSX directly inside the Modal."
      >
        <pre className="rounded-xs bg-neutral overflow-x-auto p-m text-[12px] text-neutral-subtle leading-relaxed">
          <code>{`// ✅ Module scope — defined once, stable identity
const Form = ({ name, setName }: { name: string; setName: (v: string) => void }) => (
  <TextInput value={name} onChange={(e) => setName(e.target.value)} />
)

function ModalFormScreen() {
  const [name, setName] = useState('')
  return (
    <Modal open={open}>
      <Form name={name} setName={setName} />
    </Modal>
  )
}

// ✅ Or inline JSX, no sub-component at all
function ModalFormScreen() {
  const [name, setName] = useState('')
  return (
    <Modal open={open}>
      <TextInput value={name} onChange={(e) => setName(e.target.value)} />
    </Modal>
  )
}`}</code>
        </pre>
      </Section>

      {/* ── Related rules ── */}
      <Section
        title="Related rules"
        description="Files an AI agent should read alongside this example."
      >
        <div className="flex flex-col gap-s">
          <div className="bg-neutral-subtle rounded-xs p-m">
            <code className="font-mono text-[12px] text-primary">tokens/usage/composition-rules.ts</code>
            <p className="font-default text-[13px] text-neutral-text-dark mt-xxs">React composition rules: nested components, parent-owned state, stable keys, controlled inputs.</p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <code className="font-mono text-[12px] text-primary">tokens/usage/modal-rules.ts</code>
            <p className="font-default text-[13px] text-neutral-text-dark mt-xxs">Modal-specific rules: input sizes, footer alignment, mobile bottom-sheet behavior.</p>
          </div>
        </div>
      </Section>

    </DocLayout>
  )
}
