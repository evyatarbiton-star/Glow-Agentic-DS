import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { NavBar } from '../../components/NavBar'
import { Avatar } from '../../components/Avatar'

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

// ── Demo Logo ────────────────────────────────────────────────

function DemoLogo() {
  return (
    <div className="flex items-center gap-xxs">
      <div className="w-[28px] h-[28px] rounded-full bg-primary flex items-center justify-center">
        <span className="text-white font-default font-medium text-[13px]">H</span>
      </div>
      <span className="font-default font-medium text-[16px] text-neutral">healthee</span>
    </div>
  )
}

// ── Props Tables ─────────────────────────────────────────────

const navBarProps = [
  { prop: 'left',     type: 'ReactNode',  default: 'undefined', description: 'Left zone content — typically NavBar.Brand' },
  { prop: 'center',   type: 'ReactNode',  default: 'undefined', description: 'Center zone content — typically NavBar.Tabs' },
  { prop: 'right',    type: 'ReactNode',  default: 'undefined', description: 'Right zone content — free-form' },
  { prop: 'sticky',   type: 'boolean',    default: 'true',      description: 'Sticky positioning at top of viewport' },
  { prop: 'maxWidth',    type: 'number',     default: '1200',      description: 'Max width of the inner content container (px)' },
  { prop: 'responsive', type: 'boolean',    default: 'true',      description: 'Hide center & right zones below 1024px (mobile/tablet collapse)' },
  { prop: 'mobileRight', type: 'ReactNode', default: 'undefined', description: 'Right-zone content shown only on mobile/tablet (replaces right zone below 1024px)' },
]

const brandProps = [
  { prop: 'logo',        type: 'ReactNode',    default: '—',         description: 'Logo element to display' },
  { prop: 'onMenuClick', type: '() => void',   default: 'undefined', description: 'Hamburger menu click handler. If omitted, hamburger is hidden' },
]

const tabsProps = [
  { prop: 'value',    type: 'string',             default: '—',   description: 'Currently active tab value' },
  { prop: 'onChange', type: '(value: string) => void', default: '—', description: 'Called when a tab is clicked' },
  { prop: 'children', type: 'ReactNode',          default: '—',   description: 'NavBar.Tab elements' },
]

const tabProps = [
  { prop: 'value',    type: 'string',    default: '—', description: 'Unique value identifying this tab' },
  { prop: 'children', type: 'ReactNode', default: '—', description: 'Tab label text' },
]

const avatarProps = [
  { prop: 'size',     type: '"sm" | "md" | "lg"', default: '"md"',       description: 'sm = 32px, md = 40px, lg = 48px' },
  { prop: 'src',      type: 'string',             default: 'undefined',  description: 'Image URL. If omitted, shows fallback icon' },
  { prop: 'alt',      type: 'string',             default: '""',         description: 'Alt text for image' },
  { prop: 'fallback', type: 'ReactNode',          default: 'User icon',  description: 'Custom fallback content (initials, icon)' },
  { prop: 'bgColor',  type: 'string',             default: 'primary.surface.subtle', description: 'Background color override' },
  { prop: 'color',    type: 'string',             default: 'primary.border.DEFAULT', description: 'Fallback icon/text color' },
]

function PropsTable({ data }: { data: { prop: string; type: string; default: string; description: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse font-default text-[13px]">
        <thead>
          <tr className="border-b border-neutral-border-light">
            <th className="text-left py-xs pr-m font-medium text-neutral-text-light">Prop</th>
            <th className="text-left py-xs pr-m font-medium text-neutral-text-light">Type</th>
            <th className="text-left py-xs pr-m font-medium text-neutral-text-light">Default</th>
            <th className="text-left py-xs font-medium text-neutral-text-light">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.prop} className="border-b border-neutral-border-light">
              <td className="py-xs pr-m font-medium text-primary">{row.prop}</td>
              <td className="py-xs pr-m text-neutral-text-dark font-mono text-[12px]">{row.type}</td>
              <td className="py-xs pr-m text-neutral-text-light">{row.default}</td>
              <td className="py-xs text-neutral-text-dark">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Main Doc ─────────────────────────────────────────────────

export function NavBarDoc() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <DocLayout
      title="NavBar"
      description="Top navigation bar with 3-zone layout: brand, tabs, and actions. Includes Avatar sub-component."
    >
      {/* ── Full NavBar Demo ── */}
      <Section title="Default">
        <Label>Complete NavBar with Brand, Tabs, and right-zone content</Label>
        <div className="border border-neutral-border-light rounded-xs overflow-hidden">
          <NavBar
            sticky={false}
            left={<NavBar.Brand logo={<DemoLogo />} onMenuClick={() => {}} />}
            center={
              <NavBar.Tabs value={activeTab} onChange={setActiveTab}>
                <NavBar.Tab value="home">Home</NavBar.Tab>
                <NavBar.Tab value="benefits">My Benefits</NavBar.Tab>
                <NavBar.Tab value="find-care">Find Care</NavBar.Tab>
              </NavBar.Tabs>
            }
            right={
              <div className="flex items-center gap-m">
                <span className="font-default text-[14px] text-neutral-text-dark">New York 10014</span>
                <Avatar size="md" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" alt="Jane Doe" />
              </div>
            }
          />
        </div>
        <p className="font-default text-[13px] text-neutral-text-light mt-xs">
          Active tab: <span className="font-medium text-primary">{activeTab}</span>
        </p>
      </Section>

      {/* ── Brand Only ── */}
      <Section title="Brand Only">
        <Label>NavBar with only a Brand (hamburger + logo)</Label>
        <div className="border border-neutral-border-light rounded-xs overflow-hidden">
          <NavBar
            sticky={false}
            left={<NavBar.Brand logo={<DemoLogo />} onMenuClick={() => {}} />}
          />
        </div>
      </Section>

      {/* ── Without Hamburger ── */}
      <Section title="Without Hamburger">
        <Label>Omit onMenuClick to hide the hamburger button</Label>
        <div className="border border-neutral-border-light rounded-xs overflow-hidden">
          <NavBar
            sticky={false}
            left={<NavBar.Brand logo={<DemoLogo />} />}
            center={
              <NavBar.Tabs value="home" onChange={() => {}}>
                <NavBar.Tab value="home">Home</NavBar.Tab>
                <NavBar.Tab value="about">About</NavBar.Tab>
              </NavBar.Tabs>
            }
          />
        </div>
      </Section>

      {/* ── Avatar Sizes ── */}
      <Section title="Avatar Sizes">
        <Label>sm (32px) | md (40px) | lg (48px)</Label>
        <div className="flex items-center gap-m">
          <div className="flex flex-col items-center gap-xxs">
            <Avatar size="sm" />
            <span className="font-default text-[11px] text-neutral-text-light">sm</span>
          </div>
          <div className="flex flex-col items-center gap-xxs">
            <Avatar size="md" />
            <span className="font-default text-[11px] text-neutral-text-light">md</span>
          </div>
          <div className="flex flex-col items-center gap-xxs">
            <Avatar size="lg" />
            <span className="font-default text-[11px] text-neutral-text-light">lg</span>
          </div>
        </div>
      </Section>

      {/* ── Avatar with Initials ── */}
      <Section title="Avatar with Initials">
        <Label>Custom fallback content</Label>
        <div className="flex items-center gap-m">
          <Avatar
            size="md"
            fallback={<span className="font-default font-medium text-[14px]">CL</span>}
          />
          <Avatar
            size="md"
            bgColor="#e0e0e0"
            fallback={<span className="font-default font-medium text-[14px] text-neutral">JD</span>}
          />
          <Avatar
            size="lg"
            bgColor="#dbeafe"
            color="#2563eb"
            fallback={<span className="font-default font-medium text-[16px]">AB</span>}
          />
        </div>
      </Section>

      {/* ── Responsive Behavior ── */}
      <Section title="Responsive Behavior">
        <Label>Below 1024px: only logo + hamburger visible</Label>
        <p className="font-default text-[14px] text-neutral-text-dark mb-m leading-relaxed">
          By default, the NavBar hides the <strong>center</strong> and <strong>right</strong> zones
          on viewports narrower than 1024px (tablet / mobile). Only the left zone — typically
          the hamburger menu and logo — remains visible. This matches the Healthee product behavior
          where navigation moves into a slide-out menu on smaller screens.
        </p>
        <p className="font-default text-[13px] text-neutral-text-light mb-m leading-relaxed">
          Set <code className="bg-neutral-subtle px-xxxs py-[2px] rounded-xxxs text-[12px]">responsive=&#123;false&#125;</code> to
          keep all three zones visible at every viewport width.
        </p>
        <div className="border border-neutral-border-light rounded-xs overflow-hidden">
          <NavBar
            sticky={false}
            responsive={false}
            left={<NavBar.Brand logo={<DemoLogo />} onMenuClick={() => {}} />}
            center={
              <NavBar.Tabs value="home" onChange={() => {}}>
                <NavBar.Tab value="home">Home</NavBar.Tab>
                <NavBar.Tab value="about">About</NavBar.Tab>
              </NavBar.Tabs>
            }
            right={<Avatar size="md" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" alt="Jane Doe" />}
          />
        </div>
        <p className="font-default text-[11px] text-neutral-text-light mt-xs">
          ↑ This demo uses <code>responsive=&#123;false&#125;</code> so all zones stay visible at any width.
        </p>
      </Section>

      {/* ── Usage Code ── */}
      <Section title="Usage">
        <Label>NavBar</Label>
        <CodeBlock
          code={`import { NavBar } from 'glow-ds'

function AppHeader() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <NavBar
      left={
        <NavBar.Brand
          logo={<Logo />}
          onMenuClick={() => setSidebarOpen(true)}
        />
      }
      center={
        <NavBar.Tabs value={activeTab} onChange={setActiveTab}>
          <NavBar.Tab value="home">Home</NavBar.Tab>
          <NavBar.Tab value="benefits">My Benefits</NavBar.Tab>
          <NavBar.Tab value="find-care">Find Care</NavBar.Tab>
        </NavBar.Tabs>
      }
      right={
        <div className="flex items-center gap-m">
          <Button variant="primary" size="sm" pill>Ask Zoe</Button>
          <Avatar size="md" />
        </div>
      }
    />
  )
}`}
        />

        <div className="mt-m" />
        <Label>Avatar</Label>
        <CodeBlock
          code={`import { Avatar } from 'glow-ds'

// Default (user silhouette)
<Avatar size="md" />

// With image
<Avatar size="lg" src="/photos/user.jpg" alt="Christina" />

// With initials fallback
<Avatar size="md" fallback={<span>CL</span>} />`}
        />
      </Section>

      {/* ── Props: NavBar ── */}
      <Section title="NavBar Props">
        <PropsTable data={navBarProps} />
      </Section>

      {/* ── Props: NavBar.Brand ── */}
      <Section title="NavBar.Brand Props">
        <PropsTable data={brandProps} />
      </Section>

      {/* ── Props: NavBar.Tabs ── */}
      <Section title="NavBar.Tabs Props">
        <PropsTable data={tabsProps} />
      </Section>

      {/* ── Props: NavBar.Tab ── */}
      <Section title="NavBar.Tab Props">
        <PropsTable data={tabProps} />
      </Section>

      {/* ── Props: Avatar ── */}
      <Section title="Avatar Props">
        <PropsTable data={avatarProps} />
      </Section>
    </DocLayout>
  )
}
