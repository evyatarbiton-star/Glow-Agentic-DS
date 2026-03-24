import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { SideNav } from '../../components/SideNav'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import ChevronDownLine from '../../components/Icon/icons/line/ChevronDown'
import UpRightArrowLine from '../../components/Icon/icons/line/UpRightArrow'
import ChatDotsLine from '../../components/Icon/icons/line/ChatDots'
import StethoscopeLine from '../../components/Icon/icons/line/Stethoscope'
import MegaphoneLine from '../../components/Icon/icons/line/Megaphone'
import ChartMaximumLine from '../../components/Icon/icons/line/ChartMaximum'
import { semanticColors as sc } from '../../../tokens/semantic/colors'

// ============================================================
// Glow DS — SideNav Documentation
// ============================================================

// ── Demo thumbnail components ────────────────────────────────

const THUMB_STYLE = {
  width: 56, height: 56, borderRadius: 8,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
} as const

function ZoeThumbnail() {
  return (
    <div style={{ ...THUMB_STYLE, backgroundColor: sc.primary.surface.extraLight }}>
      <ChatDotsLine size="md" color={sc.primary.text.DEFAULT} />
    </div>
  )
}

function TelehealthThumbnail() {
  return (
    <div style={{ ...THUMB_STYLE, backgroundColor: sc['accent-blue'].surface.light }}>
      <StethoscopeLine size="md" color={sc['accent-blue'].text.dark} />
    </div>
  )
}

function PlanComparisonThumbnail() {
  return (
    <div style={{ ...THUMB_STYLE, backgroundColor: sc['accent-blue'].surface.light }}>
      <ChartMaximumLine size="md" color={sc['accent-blue'].text.dark} />
    </div>
  )
}

function CompanyNewsThumbnail() {
  return (
    <div style={{ ...THUMB_STYLE, backgroundColor: sc['accent-yellow'].surface.light }}>
      <MegaphoneLine size="md" color={sc['accent-yellow'].text.dark} />
    </div>
  )
}

const ACME_LOGO = (
  <span style={{ fontFamily: 'serif', fontWeight: 900, fontStyle: 'italic', fontSize: 16, letterSpacing: 1 }}>
    ACME
  </span>
)

// ── Code examples ────────────────────────────────────────────

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

// ── Sub-component preview wrapper ────────────────────────────

function PreviewCard({ children }: { children: React.ReactNode }) {
  return (
    <Card variant="filled" radius="md" padding="md">
      <div style={{ maxWidth: 380 }}>
        {children}
      </div>
    </Card>
  )
}

// ── Props table component ────────────────────────────────────

function PropsTable({ props }: { props: { prop: string; type: string; default: string; description: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full font-default text-[13px]" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr className="text-left border-b border-neutral-border-light">
            <th className="py-xs pr-m font-medium text-neutral">Prop</th>
            <th className="py-xs pr-m font-medium text-neutral">Type</th>
            <th className="py-xs pr-m font-medium text-neutral">Default</th>
            <th className="py-xs font-medium text-neutral">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map(p => (
            <tr key={p.prop} className="border-b border-neutral-border-light">
              <td className="py-xs pr-m font-medium text-primary whitespace-nowrap"><code>{p.prop}</code></td>
              <td className="py-xs pr-m text-neutral-text-dark"><code className="text-[12px]">{p.type}</code></td>
              <td className="py-xs pr-m text-neutral-text-light">{p.default}</td>
              <td className="py-xs text-neutral-text-dark">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Full demo SideNav ────────────────────────────────────────

function DemoSideNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <SideNav open={open} onClose={onClose}>
      <SideNav.Profile
        name="Guy Benjamin"
        companyName="ACME"
        companyLogo={ACME_LOGO}
      />

      <SideNav.Section>
        <SideNav.NavItem label="Home" onClick={onClose} />
        <SideNav.NavItem label="Benefits" onClick={onClose} />
        <SideNav.NavItem label="Find care" onClick={onClose} />
        <SideNav.NavItem label="Healthcare profile" expandable>
          <SideNav.SubItem label="Insurance cards" onClick={onClose} />
          <SideNav.SubItem label="Plan details" onClick={onClose} />
          <SideNav.SubItem label="Medical expenses" onClick={onClose} />
          <SideNav.SubItem label="Appointments" onClick={onClose} />
          <SideNav.SubItem label="Account settings" onClick={onClose} />
        </SideNav.NavItem>
      </SideNav.Section>

      <SideNav.Section>
        <SideNav.ToolItem
          thumbnail={<ZoeThumbnail />}
          title="Ask Zoe"
          description="Get instant answers about benefits and providers"
          onClick={onClose}
        />
        <SideNav.ToolItem
          thumbnail={<TelehealthThumbnail />}
          title="24/7 telehealth"
          description="Speak to a provider anytime"
          onClick={onClose}
        />
        <SideNav.ToolItem
          thumbnail={<CompanyNewsThumbnail />}
          title="Company news"
          description="Here's what's new at Test Company"
          onClick={onClose}
        />
        <SideNav.ToolItem
          thumbnail={<PlanComparisonThumbnail />}
          title="Plan comparison"
          description="Find the right plan for your needs"
          onClick={onClose}
          trailingIcon={<UpRightArrowLine size="sm" />}
        />
      </SideNav.Section>

      <SideNav.Footer>
        <SideNav.AppDownload
          title="Download the Healthee app"
          onAppleClick={() => window.open('https://apps.apple.com', '_blank')}
          onAndroidClick={() => window.open('https://play.google.com', '_blank')}
        />
        <div>
          <SideNav.FooterItem label="Support" onClick={onClose} />
          <SideNav.FooterItem label="Share feedback" onClick={onClose} />
          <SideNav.FooterItem
            label="Language"
            right={
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, textDecoration: 'underline' }}>
                EN
                <ChevronDownLine size="sm" />
              </span>
            }
          />
          <SideNav.FooterItem label="Privacy & Policy" onClick={onClose} />
          <SideNav.FooterItem label="Terms and conditions" onClick={onClose} />
          <SideNav.FooterItem
            label="Go to Healthee Pulse"
            right={<UpRightArrowLine size="sm" />}
          />
          <SideNav.FooterItem label="Log out" onClick={onClose} />
        </div>
      </SideNav.Footer>
    </SideNav>
  )
}

// ── Main Doc ─────────────────────────────────────────────────

export function SideNavDoc() {
  const [open, setOpen] = useState(false)
  const [minimalOpen, setMinimalOpen] = useState(false)

  return (
    <DocLayout
      title="SideNav"
      description="A slide-in navigation drawer that opens from the left edge with a dark backdrop overlay. Uses compound components for flexible, reorderable content. Panel width: 400px (desktop), full-width (mobile web)."
    >
      {/* ── Interactive Demo ── */}
      <Section title="Interactive Demo" description="Click the button to open the full SideNav with all item types.">
        <Button variant="primary" size="md" onClick={() => setOpen(true)}>
          Open SideNav
        </Button>
        <DemoSideNav open={open} onClose={() => setOpen(false)} />
      </Section>

      {/* ── Minimal Example ── */}
      <Section title="Minimal Example" description="SideNav with just navigation links — no tools, no footer.">
        <Button variant="outline" size="md" onClick={() => setMinimalOpen(true)}>
          Open Minimal SideNav
        </Button>
        <SideNav open={minimalOpen} onClose={() => setMinimalOpen(false)}>
          <SideNav.Profile name="Jane Doe" companyName="Acme Corp" />
          <SideNav.Section>
            <SideNav.NavItem label="Home" onClick={() => setMinimalOpen(false)} />
            <SideNav.NavItem label="Settings" onClick={() => setMinimalOpen(false)} />
            <SideNav.NavItem label="Help" onClick={() => setMinimalOpen(false)} />
          </SideNav.Section>
        </SideNav>
      </Section>

      {/* ── Root Props ── */}
      <Section title="SideNav Props" description="Root component controls open state, backdrop, and keyboard behavior.">
        <PropsTable props={[
          { prop: 'open', type: 'boolean', default: 'false', description: 'Whether the side nav is open' },
          { prop: 'onClose', type: '() => void', default: '—', description: 'Called when the side nav should close (backdrop, Escape, close button)' },
          { prop: 'closeOnBackdropClick', type: 'boolean', default: 'true', description: 'Close when clicking the backdrop' },
          { prop: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Close when pressing Escape' },
          { prop: 'children', type: 'ReactNode', default: '—', description: 'Compound component children' },
        ]} />
      </Section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* ── Sub-Component Previews ──────────────────────────── */}
      {/* ════════════════════════════════════════════════════════ */}

      {/* ── Profile ── */}
      <Section title="SideNav.Profile" description="User greeting with name, company, and optional logo. Always the first child.">
        <div className="flex flex-col gap-m">
          <p className="font-default text-[13px] text-neutral-text-dark">With company logo:</p>
          <PreviewCard>
            <SideNav.Profile name="Guy Benjamin" companyName="ACME" companyLogo={ACME_LOGO} />
          </PreviewCard>

          <p className="font-default text-[13px] text-neutral-text-dark">Text-only company name (no logo):</p>
          <PreviewCard>
            <SideNav.Profile name="Jane Doe" companyName="Acme Corp" />
          </PreviewCard>

          <p className="font-default text-[13px] text-neutral-text-dark">Name only (no company):</p>
          <PreviewCard>
            <SideNav.Profile name="Guy Benjamin" />
          </PreviewCard>
        </div>
        <PropsTable props={[
          { prop: 'name', type: 'string', default: '—', description: "User's display name" },
          { prop: 'companyName', type: 'string?', default: '—', description: 'Company name shown below the user name' },
          { prop: 'companyLogo', type: 'ReactNode?', default: '—', description: 'Company logo element (img or SVG). If provided, replaces text company name.' },
        ]} />
      </Section>

      {/* ── NavItem ── */}
      <Section title="SideNav.NavItem" description="Main navigation link (40px height). Can be expandable with sub-items. Hover: #fafafa background with 8px radius.">
        <div className="flex flex-col gap-m">
          <p className="font-default text-[13px] text-neutral-text-dark">Simple navigation items:</p>
          <PreviewCard>
            <SideNav.NavItem label="Home" onClick={() => {}} />
            <SideNav.NavItem label="Benefits" onClick={() => {}} />
            <SideNav.NavItem label="Find care" onClick={() => {}} />
          </PreviewCard>

          <p className="font-default text-[13px] text-neutral-text-dark">Expandable with sub-items (click to expand):</p>
          <PreviewCard>
            <SideNav.NavItem label="Healthcare profile" expandable>
              <SideNav.SubItem label="Insurance cards" onClick={() => {}} />
              <SideNav.SubItem label="Plan details" onClick={() => {}} />
              <SideNav.SubItem label="Medical expenses" onClick={() => {}} />
            </SideNav.NavItem>
          </PreviewCard>
        </div>
        <PropsTable props={[
          { prop: 'label', type: 'string', default: '—', description: 'Navigation label text' },
          { prop: 'onClick', type: '() => void?', default: '—', description: 'Click handler (for non-expandable items)' },
          { prop: 'expandable', type: 'boolean?', default: 'false', description: 'Shows chevron and enables expand/collapse' },
          { prop: 'expanded', type: 'boolean?', default: '—', description: 'Controlled expanded state' },
          { prop: 'onExpandChange', type: '(expanded: boolean) => void?', default: '—', description: 'Called when expand/collapse is toggled' },
          { prop: 'children', type: 'ReactNode?', default: '—', description: 'Sub-items rendered when expanded' },
        ]} />
      </Section>

      {/* ── SubItem ── */}
      <Section title="SideNav.SubItem" description="Indented child of an expandable NavItem. Same 40px height, indented with 40px left padding. Hover: #fafafa background.">
        <PreviewCard>
          <SideNav.SubItem label="Insurance cards" onClick={() => {}} />
          <SideNav.SubItem label="Plan details" onClick={() => {}} />
          <SideNav.SubItem label="Appointments" onClick={() => {}} />
        </PreviewCard>
        <PropsTable props={[
          { prop: 'label', type: 'string', default: '—', description: 'Sub-item label text' },
          { prop: 'onClick', type: '() => void?', default: '—', description: 'Click handler' },
        ]} />
      </Section>

      {/* ── ToolItem ── */}
      <Section title="SideNav.ToolItem" description="Feature card with 56×56 thumbnail, title, and description. Hover: border appears (1px solid #ededed). Optional trailing icon for external links (visible on hover only).">
        <div className="flex flex-col gap-m">
          <p className="font-default text-[13px] text-neutral-text-dark">Standard tool (internal):</p>
          <PreviewCard>
            <SideNav.ToolItem
              thumbnail={<ZoeThumbnail />}
              title="Ask Zoe"
              description="Get instant answers about benefits and providers"
              onClick={() => {}}
            />
          </PreviewCard>

          <p className="font-default text-[13px] text-neutral-text-dark">With trailing icon (external link — hover to see the arrow):</p>
          <PreviewCard>
            <SideNav.ToolItem
              thumbnail={<PlanComparisonThumbnail />}
              title="Plan comparison"
              description="Find the right plan for your needs"
              onClick={() => {}}
              trailingIcon={<UpRightArrowLine size="sm" />}
            />
          </PreviewCard>

          <p className="font-default text-[13px] text-neutral-text-dark">Multiple tools stacked:</p>
          <PreviewCard>
            <SideNav.ToolItem
              thumbnail={<ZoeThumbnail />}
              title="Ask Zoe"
              description="Get instant answers about benefits and providers"
              onClick={() => {}}
            />
            <SideNav.ToolItem
              thumbnail={<TelehealthThumbnail />}
              title="24/7 telehealth"
              description="Speak to a provider anytime"
              onClick={() => {}}
            />
            <SideNav.ToolItem
              thumbnail={<PlanComparisonThumbnail />}
              title="Plan comparison"
              description="Find the right plan for your needs"
              onClick={() => {}}
              trailingIcon={<UpRightArrowLine size="sm" />}
            />
          </PreviewCard>
        </div>
        <PropsTable props={[
          { prop: 'thumbnail', type: 'ReactNode', default: '—', description: 'Thumbnail element (56×56, rounded 8px)' },
          { prop: 'title', type: 'string', default: '—', description: 'Tool title' },
          { prop: 'description', type: 'string', default: '—', description: 'Tool description' },
          { prop: 'onClick', type: '() => void?', default: '—', description: 'Click handler' },
          { prop: 'trailingIcon', type: 'ReactNode?', default: '—', description: 'Icon shown on hover (e.g. UpRightArrowLine for external links)' },
        ]} />
      </Section>

      {/* ── AppDownload ── */}
      <Section title="SideNav.AppDownload" description="App download banner with QR code (desktop only) and Apple/Android store buttons. QR is hidden on mobile. Shows a placeholder when no QR is provided.">
        <div className="flex flex-col gap-m">
          <p className="font-default text-[13px] text-neutral-text-dark">Default (with QR placeholder):</p>
          <PreviewCard>
            <SideNav.AppDownload
              title="Download the Healthee app"
              onAppleClick={() => window.open('https://apps.apple.com', '_blank')}
              onAndroidClick={() => window.open('https://play.google.com', '_blank')}
            />
          </PreviewCard>

          <p className="font-default text-[13px] text-neutral-text-dark">With custom QR image:</p>
          <PreviewCard>
            <SideNav.AppDownload
              title="Download the Healthee app"
              qrImageUrl="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://healthee.co"
              onAppleClick={() => window.open('https://apps.apple.com', '_blank')}
              onAndroidClick={() => window.open('https://play.google.com', '_blank')}
            />
          </PreviewCard>

          <p className="font-default text-[13px] text-neutral-text-dark">Custom title:</p>
          <PreviewCard>
            <SideNav.AppDownload
              title="Get mobile access"
              onAppleClick={() => {}}
              onAndroidClick={() => {}}
            />
          </PreviewCard>
        </div>
        <PropsTable props={[
          { prop: 'title', type: 'string?', default: '"Download the Healthee app"', description: 'Banner title text' },
          { prop: 'qrImageUrl', type: 'string?', default: '—', description: 'QR code image URL' },
          { prop: 'qrElement', type: 'ReactNode?', default: '—', description: 'Custom QR code element (overrides qrImageUrl)' },
          { prop: 'onAppleClick', type: '() => void?', default: '—', description: 'Apple store button click handler' },
          { prop: 'onAndroidClick', type: '() => void?', default: '—', description: 'Android store button click handler' },
          { prop: 'onClick', type: '() => void?', default: '—', description: 'Click handler for the entire banner' },
        ]} />
      </Section>

      {/* ── FooterItem ── */}
      <Section title="SideNav.FooterItem" description="Footer link (40px height) with optional right element. Hover: #fafafa background with 8px radius. Used for support links, language selector, external links, and logout.">
        <div className="flex flex-col gap-m">
          <p className="font-default text-[13px] text-neutral-text-dark">Simple links:</p>
          <PreviewCard>
            <SideNav.FooterItem label="Support" onClick={() => {}} />
            <SideNav.FooterItem label="Share feedback" onClick={() => {}} />
            <SideNav.FooterItem label="Log out" onClick={() => {}} />
          </PreviewCard>

          <p className="font-default text-[13px] text-neutral-text-dark">With right element — language selector:</p>
          <PreviewCard>
            <SideNav.FooterItem
              label="Language"
              right={
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, textDecoration: 'underline' }}>
                  EN
                  <ChevronDownLine size="sm" />
                </span>
              }
            />
          </PreviewCard>

          <p className="font-default text-[13px] text-neutral-text-dark">With right element — external link arrow:</p>
          <PreviewCard>
            <SideNav.FooterItem
              label="Go to Healthee Pulse"
              right={<UpRightArrowLine size="sm" />}
            />
          </PreviewCard>
        </div>
        <PropsTable props={[
          { prop: 'label', type: 'string', default: '—', description: 'Footer item label text' },
          { prop: 'onClick', type: '() => void?', default: '—', description: 'Click handler' },
          { prop: 'right', type: 'ReactNode?', default: '—', description: 'Optional right-side element (e.g. "EN ▾" for language, arrow for external link)' },
        ]} />
      </Section>

      {/* ── Section & Footer ── */}
      <Section title="SideNav.Section & SideNav.Footer" description="Structural wrappers that handle spacing and layout.">
        <div className="flex flex-col gap-m">
          <Card variant="outline" radius="sm" padding="sm">
            <div className="font-default text-[13px] text-neutral-text-dark space-y-xs">
              <p><code className="text-primary font-medium">SideNav.Section</code> — Groups related items (NavItems or ToolItems). The 24px gap between sections is handled by the scrollable container.</p>
              <p><code className="text-primary font-medium">SideNav.Footer</code> — Pushes content to the bottom with <code>marginTop: auto</code>. Contains AppDownload and FooterItems. Gap of 20px between children.</p>
            </div>
          </Card>
        </div>
        <PropsTable props={[
          { prop: 'children', type: 'ReactNode', default: '—', description: 'Content to group (Section: NavItems/ToolItems, Footer: AppDownload + FooterItems)' },
        ]} />
      </Section>

      {/* ── Hover States Reference ── */}
      <Section title="Hover States" description="Each sub-component has a specific hover behavior from Figma.">
        <div className="overflow-x-auto">
          <table className="w-full font-default text-[13px]" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr className="text-left border-b border-neutral-border-light">
                <th className="py-xs pr-m font-medium text-neutral">Component</th>
                <th className="py-xs pr-m font-medium text-neutral">Hover Effect</th>
                <th className="py-xs font-medium text-neutral">Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                { comp: 'NavItem', effect: 'Background change', detail: '#fafafa (extraSubtle), border-radius 8px' },
                { comp: 'SubItem', effect: 'Background change', detail: '#fafafa (extraSubtle), border-radius 8px' },
                { comp: 'ToolItem', effect: 'Border appears', detail: '1px solid #ededed (border.light), no background change' },
                { comp: 'FooterItem', effect: 'Background change', detail: '#fafafa (extraSubtle), border-radius 8px' },
                { comp: 'AppDownload', effect: 'None', detail: 'No hover state' },
              ].map(h => (
                <tr key={h.comp} className="border-b border-neutral-border-light">
                  <td className="py-xs pr-m font-medium text-primary whitespace-nowrap"><code>SideNav.{h.comp}</code></td>
                  <td className="py-xs pr-m text-neutral-text-dark">{h.effect}</td>
                  <td className="py-xs text-neutral-text-dark"><code className="text-[12px]">{h.detail}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Anatomy ── */}
      <Section title="Anatomy & Dimensions" description="Key dimensions from Figma.">
        <div className="overflow-x-auto">
          <table className="w-full font-default text-[13px]" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr className="text-left border-b border-neutral-border-light">
                <th className="py-xs pr-m font-medium text-neutral">Element</th>
                <th className="py-xs pr-m font-medium text-neutral">Value</th>
                <th className="py-xs font-medium text-neutral">Token / Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                { el: 'Panel width', val: '400px', note: 'Component constant (max-width: 400px)' },
                { el: 'Panel width (mobile)', val: '100vw', note: 'Full screen below 640px' },
                { el: 'Panel padding (L/R)', val: '20px', note: 'spacing.m' },
                { el: 'Header height', val: '72px', note: 'Derived: spacing.s (16) + IconButton md (40) + spacing.s (16)' },
                { el: 'Item height', val: '40px', note: 'NavItem, SubItem, FooterItem — all 40px' },
                { el: 'Thumbnail size', val: '56px', note: 'ToolItem thumbnail (spacing.xxxxl)' },
                { el: 'QR container', val: '100px', note: 'AppDownload QR code area' },
                { el: 'Section gap', val: '24px', note: 'spacing.l — between sections' },
                { el: 'Backdrop', val: 'rgba(0,0,0,0.72)', note: 'overlay.surface.DEFAULT' },
              ].map(d => (
                <tr key={d.el} className="border-b border-neutral-border-light">
                  <td className="py-xs pr-m text-neutral-text-dark whitespace-nowrap">{d.el}</td>
                  <td className="py-xs pr-m font-medium text-neutral"><code>{d.val}</code></td>
                  <td className="py-xs text-neutral-text-light text-[12px]">{d.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Usage Code ── */}
      <Section title="Usage" description="Full usage pattern with all compound components.">
        <CodeBlock code={`import { SideNav } from '@/components/SideNav'
import UpRightArrowLine from '@/components/Icon/icons/line/UpRightArrow'
import ChevronDownLine from '@/components/Icon/icons/line/ChevronDown'

<SideNav open={menuOpen} onClose={() => setMenuOpen(false)}>
  {/* 1. Profile — always first */}
  <SideNav.Profile
    name="Guy Benjamin"
    companyName="ACME"
    companyLogo={<AcmeLogo />}
  />

  {/* 2. Navigation section */}
  <SideNav.Section>
    <SideNav.NavItem label="Home" onClick={goHome} />
    <SideNav.NavItem label="Benefits" onClick={goBenefits} />
    <SideNav.NavItem label="Healthcare profile" expandable>
      <SideNav.SubItem label="Insurance cards" onClick={...} />
      <SideNav.SubItem label="Plan details" onClick={...} />
    </SideNav.NavItem>
  </SideNav.Section>

  {/* 3. Tools section */}
  <SideNav.Section>
    <SideNav.ToolItem
      thumbnail={<ZoeIcon />}
      title="Ask Zoe"
      description="Get instant answers"
      onClick={openZoe}
    />
    <SideNav.ToolItem
      thumbnail={<PctIcon />}
      title="Plan comparison"
      description="Compare your plan options"
      onClick={openPct}
      trailingIcon={<UpRightArrowLine size="sm" />}
    />
  </SideNav.Section>

  {/* 4. Footer — pinned to bottom */}
  <SideNav.Footer>
    <SideNav.AppDownload
      qrImageUrl="/qr.png"
      onAppleClick={() => window.open('https://apps.apple.com')}
      onAndroidClick={() => window.open('https://play.google.com')}
    />
    <div>
      <SideNav.FooterItem label="Support" onClick={openSupport} />
      <SideNav.FooterItem
        label="Language"
        right={<span>EN <ChevronDownLine size="sm" /></span>}
      />
      <SideNav.FooterItem
        label="Go to Healthee Pulse"
        right={<UpRightArrowLine size="sm" />}
      />
      <SideNav.FooterItem label="Log out" onClick={logout} />
    </div>
  </SideNav.Footer>
</SideNav>`} />
      </Section>
    </DocLayout>
  )
}
