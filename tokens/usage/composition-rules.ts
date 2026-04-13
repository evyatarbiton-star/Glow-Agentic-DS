// ============================================================
// GLOW DS — Composition Rules
//
// How to COMPOSE multiple DS components together without hitting
// React anti-patterns. These rules do not concern visual design —
// they concern the JavaScript patterns that make the DS actually
// work at runtime.
//
// AI agents generating screens MUST read this before building
// any flow that combines a container (Modal, Popover, Drawer)
// with form inputs.
// ============================================================

export const compositionRules = {

  // ── Forms inside Modals / Popovers / Drawers ─────────────────
  // The single most common AI-generated bug: input focus lost on
  // every keystroke. Cause is always the same — a component
  // defined inside the parent's render body is re-created on
  // every re-render, so React unmounts and remounts the input,
  // and the browser focus is lost with the old DOM node.

  formsInModals: {
    goldenRule:
      'Define form components at MODULE SCOPE, never inside the parent render body. The body of the Modal should be either (a) inline JSX, or (b) a reference to a component defined outside the parent function.',

    rules: [
      {
        id: 'no-nested-component-definitions',
        rule: 'NEVER define a React component inside another component\'s render body',
        detail:
          'Every re-render creates a new function reference. React treats it as a new component type, unmounts the old tree, mounts a new one. Focused <input> loses focus. State of children resets.',
        examples: {
          incorrect: [
            `function MyPage() {
  const [name, setName] = useState('')
  // ❌ Form is RECREATED on every render of MyPage
  const Form = () => (
    <TextInput value={name} onChange={(e) => setName(e.target.value)} />
  )
  return <Modal open={open}><Form /></Modal>
}`,
          ],
          correct: [
            `// ✅ Form is stable — defined once at module scope
const BookingForm = ({ name, setName }: { name: string; setName: (v: string) => void }) => (
  <TextInput value={name} onChange={(e) => setName(e.target.value)} />
)

function MyPage() {
  const [name, setName] = useState('')
  return <Modal open={open}><BookingForm name={name} setName={setName} /></Modal>
}`,
            `// ✅ Or inline the JSX directly, no sub-component at all
function MyPage() {
  const [name, setName] = useState('')
  return (
    <Modal open={open}>
      <div className="space-y-m">
        <TextInput value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </Modal>
  )
}`,
          ],
        },
      },
      {
        id: 'form-state-in-parent',
        rule: 'Form state lives in the PARENT component that renders the Modal, not inside the form/field component',
        detail:
          'State in the parent means it survives any Modal open/close and any conditional unmount of the form body. Pass value + setter down as props.',
        examples: {
          correct: [
            `function MyPage() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <Modal open={open} onClose={() => setOpen(false)} title="Sign up" size="md"
      footerActions={<Button onClick={() => save({name, email})}>Save</Button>}>
      <div className="px-l py-m space-y-m">
        <TextInput label="Name" value={name} onChange={(e) => setName(e.target.value)} size="sm" />
        <TextInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} size="sm" />
      </div>
    </Modal>
  )
}`,
          ],
        },
      },
      {
        id: 'stable-keys',
        rule: 'When mapping form fields into JSX, use a STABLE id for key, never the array index',
        detail:
          'Array index changes when the array is reordered or items are inserted/removed. That changes which input React associates with which DOM node, triggering remounts that lose focus mid-typing.',
        examples: {
          incorrect: [
            `{fields.map((f, idx) => <TextInput key={idx} {...f} />)}`,
          ],
          correct: [
            `{fields.map((f) => <TextInput key={f.id} {...f} />)}`,
          ],
        },
      },
      {
        id: 'stable-modal-key',
        rule: 'Never put a changing value in the Modal\'s `key` prop',
        detail:
          'A key tied to `open`, form state, or any frequently-changing value will force React to unmount and remount the entire Modal subtree on every change.',
        examples: {
          incorrect: [
            `<Modal key={open ? 'open' : 'closed'} open={open}>...</Modal>`,
            `<Modal key={name} open={open}>...</Modal>`,
          ],
          correct: [
            `<Modal open={open}>...</Modal>`,
            `<Modal key="booking-modal" open={open}>...</Modal>`,
          ],
        },
      },
      {
        id: 'controlled-inputs',
        rule: 'All Glow DS form inputs are controlled — always pass BOTH `value` and `onChange`',
        detail:
          'Glow\'s TextInput, Select, DatePicker are purely controlled. Do not keep input value in internal local state and sync via useEffect — that creates double-source-of-truth bugs and can drop keystrokes.',
        examples: {
          correct: [
            `<TextInput value={name} onChange={(e) => setName(e.target.value)} />`,
          ],
          incorrect: [
            `// ❌ Duplicate state + useEffect sync
const [local, setLocal] = useState(name)
useEffect(() => setLocal(name), [name])
<TextInput value={local} onChange={(e) => setLocal(e.target.value)} />`,
          ],
        },
      },
    ],
  },

  // ── Also applies to ─────────────────────────────────────────
  // These same rules apply to any container that conditionally
  // renders children:
  //   - Modal
  //   - ZoeDrawer
  //   - SideNav (if it holds form state)
  //   - Tooltip (rich mode with inputs, rare)
  //   - Any custom Portal/Overlay you build on top of the DS

  appliesTo: [
    'Modal',
    'ZoeDrawer',
    'SideNav with forms',
    'Any portal/overlay wrapper that contains form fields',
  ],
}
