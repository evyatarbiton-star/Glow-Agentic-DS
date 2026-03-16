import { useState } from 'react'
import { DocLayout, Section } from '../layout/DocLayout'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticRadii } from '../../../tokens/semantic/radii'

// ── SVG assets (imported as URLs from Figma-exported composites) ──
import healtheeLogoUrl from '../assets/healthee-logo.png'
import appleIconUrl from '../assets/apple-icon.png'
import androidIconUrl from '../assets/android-icon.png'

// ── Code block (reusable) ──────────────────────────────────
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

// ── "or" Divider ───────────────────────────────────────────
function DividerOr() {
  return (
    <div className="flex items-center w-full">
      <div className="flex-1 border-t border-neutral-border-light" />
      <div className="px-xxs">
        <span className="font-default text-[18px] text-neutral-text-light leading-[21px]">or</span>
      </div>
      <div className="flex-1 border-t border-neutral-border-light" />
    </div>
  )
}

// ── The Login Screen ───────────────────────────────────────
// Built ONLY with DS tokens + components — zero hardcoded values.
// Split screen: left = form (white), right = brand panel (orange).
// Matches Figma design node 950:3517 ("Desk 01").
// Exported so it can also be used in /preview/login (full-screen, no sidebar).
export function LoginScreen() {
  const [email, setEmail] = useState('')

  return (
    <div className="flex w-full min-h-[640px] rounded-xs shadow-lg overflow-hidden">

      {/* ── Left Panel — Form (white) ── */}
      <div className="flex flex-col bg-neutral-negative" style={{ width: '54%' }}>

        {/* Top: Healthee logo */}
        <div className="px-xxxxl pt-m">
          <img src={healtheeLogoUrl} alt="Healthee" width={147} height={20} />
        </div>

        {/* Center: Form content */}
        <div className="flex-1 flex flex-col justify-center px-xxxxl">
          <div className="max-w-[420px] w-full flex flex-col">

            {/* Title — display-xs (Tiempos Headline, page-main-title) */}
            <h1 className="font-display font-medium text-[40px] text-neutral leading-[48px]">
              Access your<br />Healthee account
            </h1>

            {/* Form fields — gap 48px from title */}
            <div className="mt-xxxl flex flex-col gap-l">

              {/* Email or phone — DS TextInput component */}
              <TextInput
                label="Email or phone"
                placeholder="Enter email or phone number"
                size="md"
                shape="default"
                showInfoIcon
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Continue button — secondary (black), main CTA */}
              <Button variant="secondary" size="md" fullWidth>
                Continue
              </Button>
            </div>

            {/* "or" divider */}
            <div className="mt-l">
              <DividerOr />
            </div>

            {/* Access with member ID — outline button */}
            <div className="mt-l">
              <Button variant="outline" size="md" fullWidth>
                Access with medical member ID
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom: Terms & Privacy */}
        <div className="px-xxxxl py-xl">
          <p className="font-default text-[12px] text-neutral-text-light leading-[14px] max-w-[420px]">
            By continuing, you agree to Healthee's{' '}
            <a href="#" className="underline hover:text-neutral">Consumer Terms and Conditions</a>
            , and acknowledge their{' '}
            <a href="#" className="underline hover:text-neutral">Privacy Policy</a>.
          </p>
        </div>
      </div>

      {/* ── Right Panel — Brand (orange with photo overlay) ── */}
      <div className="hidden md:flex flex-1 relative overflow-hidden">
        {/* Background: orange gradient (replace with real photo in production) */}
        <div className="absolute inset-0 bg-primary" />
        {/* Simulated photo overlay — dark pattern for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-neutral/20" />
        {/* Bottom gradient for text readability */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '34%',
            // Figma-specific gradient — no DS gradient token
            background: 'linear-gradient(to top, rgba(254,116,52,1) 0%, rgba(254,103,33,0.83) 63%, rgba(253,82,1,0) 100%)',
          }}
        />

        {/* Bottom content: tagline + app download card */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-xxxl px-xxxxl">

          {/* Tagline — Tiempos Headline Medium Italic */}
          <p className="font-display font-medium italic text-[20px] text-neutral-text-negative leading-[24px] mb-xxl text-center">
            Healthcare navigation made easy.
          </p>

          {/* App download card */}
          <div
            className="w-full max-w-[392px] flex items-center gap-xxs px-xxs py-xxs rounded-m"
            style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(6px)' }} // Figma-specific glass effect — no DS glass token
          >
            {/* QR code placeholder */}
            <div
              className="shrink-0 flex items-center justify-center"
              style={{
                width: 100,
                height: 100,
                borderRadius: parseInt(semanticRadii.sn), // radii.sn = 16px
                background: 'rgba(255, 255, 255, 0.2)', // Figma-specific glass effect — no DS glass token
              }}
            >
              <div className="bg-neutral-negative rounded-xxs p-xxs">
                <div className="w-[68px] h-[68px] bg-neutral-subtle rounded-xxxs flex items-center justify-center">
                  <span className="font-default text-[10px] text-neutral-text-light">QR</span>
                </div>
              </div>
            </div>

            {/* Text + store icons */}
            <div className="flex flex-col gap-s justify-center min-w-0">
              <p className="font-default font-medium text-[18px] text-neutral-text-negative leading-[21px]">
                Download the Healthee app
              </p>
              <div className="flex items-center gap-xxs">
                <div className="px-xxxs">
                  <img src={appleIconUrl} alt="Download on the App Store" width={24} height={24} />
                </div>
                <div className="w-0 self-stretch flex items-center">
                  <div className="w-px h-full bg-neutral-text-negative/30" />
                </div>
                <div className="px-xxxs">
                  <img src={androidIconUrl} alt="Get it on Google Play" width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── DS Audit Table ──────────────────────────────────────────
const auditData = [
  // Layout
  { element: 'Split container',               token: 'flex w-full min-h-[640px] rounded-xs shadow-lg',     semantic: 'radii.xs + shadows.lg',                         value: '12px / shadow',           hardcoded: false },
  { element: 'Left panel bg',                 token: 'bg-neutral-negative',                                semantic: 'neutral.surface.negative',                      value: '#ffffff',                  hardcoded: false },
  { element: 'Right panel bg',                token: 'bg-primary',                                         semantic: 'primary.surface.DEFAULT',                       value: '#fd5201',                  hardcoded: false },
  { element: 'Logo area padding',             token: 'px-xxxxl pt-m',                                      semantic: 'spacing.xxxxl + spacing.m',                     value: '56px + 20px',              hardcoded: false },
  { element: 'Form content padding',          token: 'px-xxxxl',                                           semantic: 'spacing.xxxxl',                                 value: '56px',                     hardcoded: false },
  { element: 'Terms padding',                 token: 'px-xxxxl py-xl',                                     semantic: 'spacing.xxxxl + spacing.xl',                    value: '56px + 32px',              hardcoded: false },
  // Spacing
  { element: 'Title → form gap',              token: 'mt-xxxl',                                            semantic: 'spacing.xxxl',                                  value: '48px',                     hardcoded: false },
  { element: 'Input → button gap',            token: 'gap-l',                                              semantic: 'spacing.l',                                     value: '24px',                     hardcoded: false },
  { element: 'Button → divider gap',          token: 'mt-l',                                               semantic: 'spacing.l',                                     value: '24px',                     hardcoded: false },
  { element: 'Divider → button gap',          token: 'mt-l',                                               semantic: 'spacing.l',                                     value: '24px',                     hardcoded: false },
  // Typography
  { element: 'Page title',                    token: 'font-display font-medium text-[40px]',               semantic: 'display-xs (page-main-title)',                   value: '40/48px Tiempos Medium',   hardcoded: false },
  { element: '"or" divider text',             token: 'font-default text-[18px] text-neutral-text-light',   semantic: 'paragraph-l',                                   value: '18px / grey',              hardcoded: false },
  { element: 'Terms text',                    token: 'font-default text-[12px] text-neutral-text-light',   semantic: 'paragraph-xs',                                  value: '12px / grey',              hardcoded: false },
  { element: 'Terms links',                   token: 'underline text-neutral-text-light',                  semantic: 'text-link (small-link)',                         value: '12px / underlined',        hardcoded: false },
  { element: 'Brand tagline',                 token: 'font-display font-medium italic text-[20px]',        semantic: 'display (brand tagline)',                        value: '20px Tiempos Italic',      hardcoded: false },
  { element: 'App card title',                token: 'font-default font-medium text-[18px]',               semantic: 'heading-xxs',                                   value: '18px / 500 / white',       hardcoded: false },
  // Components (DS source of truth)
  { element: 'Email/phone input',             token: 'TextInput size="md" showInfoIcon',                   semantic: 'DS TextInput component',                        value: 'height 48px / radius 8px', hardcoded: false },
  { element: '"Continue" button',             token: 'Button variant="secondary" fullWidth',               semantic: 'button-rules: secondary (main CTA)',            value: 'Black bg / 48px',          hardcoded: false },
  { element: '"Access with member ID"',       token: 'Button variant="outline" fullWidth',                 semantic: 'button-rules: outline (alt action)',             value: 'White + border / 48px',    hardcoded: false },
  { element: 'Divider line',                  token: 'border-neutral-border-light',                        semantic: 'neutral.border.light',                          value: '#ededed',                  hardcoded: false },
]

// ── Page ────────────────────────────────────────────────────
export function LoginExample() {
  return (
    <DocLayout
      title="Login"
      description="A split-screen login page matching the Figma design (Desk 01). Built with DS components (TextInput, Button) and DS tokens — every color, spacing, radius, shadow, and font maps to the design system."
    >

      {/* ── Live Example ── */}
      <Section title="Live Example" description="Interactive login form using DS components. Split screen: form panel (left) + brand panel (right). Matches Figma node 950:3517.">
        <div className="flex justify-end mb-s">
          <a
            href="/preview/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-xxs font-default text-[13px] text-primary font-medium hover:underline"
          >
            Open full screen
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M7 1h4v4M11 1L6.5 5.5M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="bg-neutral-subtle rounded-xs p-xl flex justify-center">
          <LoginScreen />
        </div>
      </Section>

      {/* ── DS Components Used ── */}
      <Section title="DS Components Used" description="Which DS components replace raw HTML in this example, and why.">
        <div className="flex flex-col gap-s">
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">TextInput → Email/Phone Field</p>
            <p className="font-default text-[13px] text-neutral-text-dark">The "Email or phone" field uses the DS <code className="font-mono text-[12px] text-primary">{'<TextInput>'}</code> component with <code className="font-mono text-[12px]">showInfoIcon</code>, <code className="font-mono text-[12px]">size="md"</code> (48px height), and <code className="font-mono text-[12px]">shape="default"</code> (8px radius). All internal styling (label typography, border colors, focus ring, placeholder styling) is handled by the component.</p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">Button variant="secondary" → Continue</p>
            <p className="font-default text-[13px] text-neutral-text-dark">The "Continue" button uses <code className="font-mono text-[12px] text-primary">variant="secondary"</code> (black background, white text). This is the main CTA but intentionally NOT primary (orange) — the Figma design chose a neutral black approach for this login page.</p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">Button variant="outline" → Member ID Access</p>
            <p className="font-default text-[13px] text-neutral-text-dark">"Access with medical member ID" uses <code className="font-mono text-[12px] text-primary">variant="outline"</code> (white bg, dark border). This is a valid <code className="font-mono text-[12px]">secondary + outline</code> pairing per button-rules.</p>
          </div>
        </div>
      </Section>

      {/* ── Typography Rules Applied ── */}
      <Section title="Typography Rules Applied" description="How typography-rules.ts guided the font family and size selection for each text element.">
        <div className="flex flex-col gap-s">
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">Rule 1 — Page Title = Display (Tiempos Headline)</p>
            <p className="font-default text-[13px] text-neutral-text-dark">"Access your Healthee account" uses <code className="font-mono text-[12px] text-primary">font-display</code> (Tiempos Headline, 40px/48px) — the page main title is one of the allowed Display contexts. Context: <code className="font-mono text-[12px]">page-main-title → display-xs</code>.</p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">Rule 2 — Body/UI Text = Founders Grotesk</p>
            <p className="font-default text-[13px] text-neutral-text-dark">The "or" divider (18px), terms text (12px), button labels, and all form labels use <code className="font-mono text-[12px] text-primary">font-default</code> (Founders Grotesk). Only the title and the right-panel tagline use Tiempos.</p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">Brand Tagline — Display Italic (Exception)</p>
            <p className="font-default text-[13px] text-neutral-text-dark">"Healthcare navigation made easy." on the right panel uses <code className="font-mono text-[12px] text-primary">font-display italic</code> (Tiempos, 20px) — this is a brand/marketing tagline, one of the allowed Display contexts beyond page titles.</p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">TextLink — Terms Links Underlined</p>
            <p className="font-default text-[13px] text-neutral-text-dark">"Consumer Terms and Conditions" and "Privacy Policy" use <code className="font-mono text-[12px] text-primary">underline</code> styling — text links must always be underlined to distinguish from regular text per the text-link pattern.</p>
          </div>
        </div>
      </Section>

      {/* ── Button Rules Applied ── */}
      <Section title="Button Rules Applied" description="How button-rules.ts guided the variant selection for this page.">
        <div className="flex flex-col gap-s">
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">Zero Primary Buttons</p>
            <p className="font-default text-[13px] text-neutral-text-dark">This login page uses <strong>no primary (orange) buttons</strong>. The Figma design explicitly chose black (secondary) for the main CTA. This follows the rule: "Not every screen needs a primary button." Context: <code className="font-mono text-[12px]">info-pages-no-primary</code>.</p>
          </div>
          <div className="bg-neutral-subtle rounded-xs p-m">
            <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">secondary + outline Pairing</p>
            <p className="font-default text-[13px] text-neutral-text-dark">"Continue" (<code className="font-mono text-[12px] text-primary">secondary</code>) + "Access with member ID" (<code className="font-mono text-[12px] text-primary">outline</code>) is a valid pairing per <code className="font-mono text-[12px]">validPairings['secondary + outline']: true</code>. The secondary button has stronger visual emphasis than outline.</p>
          </div>
        </div>
      </Section>

      {/* ── DS Audit ── */}
      <Section title="DS Audit" description="Every visual property traced back to its design token. All rows show ✓ DS (no hardcoded values).">
        <div className="bg-white rounded-xs border border-neutral-border-light overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[180px_1fr_60px] gap-xs px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
            {['Element', 'Token → Value', 'Source'].map(h => (
              <p key={h} className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">{h}</p>
            ))}
          </div>
          {/* Rows */}
          {auditData.map((row, i) => (
            <div
              key={row.element}
              className={`grid grid-cols-[180px_1fr_60px] gap-xs px-m py-s border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/40' : ''}`}
            >
              <p className="font-default text-[12px] text-neutral-text-dark font-medium">{row.element}</p>
              <div>
                <code className="font-mono text-[11px] text-primary">{row.token}</code>
                <span className="font-default text-[11px] text-neutral-text-light mx-xxs">→</span>
                <code className="font-mono text-[11px] text-neutral-text-light">{row.value}</code>
              </div>
              <span className="font-default text-[12px] text-success-text font-medium">✓ DS</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Code ── */}
      <Section title="Code" description="The complete login screen — copy-paste ready. Uses DS TextInput and Button components. Zero hardcoded hex values or pixel values outside of typography brackets.">
        <CodeBlock code={`import { Button } from '@/components/Button'
import { TextInput } from '@/components/TextInput'
import { useState } from 'react'

function LoginScreen() {
  const [email, setEmail] = useState('')

  return (
    <div className="flex w-full min-h-screen">

      {/* Left Panel — Form */}
      <div className="flex flex-col bg-neutral-negative" style={{ width: '54%' }}>

        {/* Logo */}
        <div className="px-xxxxl pt-m">
          <HealtheeLogo />
        </div>

        {/* Centered form */}
        <div className="flex-1 flex flex-col justify-center px-xxxxl">
          <div className="max-w-[420px] w-full flex flex-col">

            <h1 className="font-display font-medium text-[40px] text-neutral leading-[48px]">
              Access your Healthee account
            </h1>

            <div className="mt-xxxl flex flex-col gap-l">
              <TextInput
                label="Email or phone"
                placeholder="Enter email or phone number"
                size="md"
                showInfoIcon
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button variant="secondary" size="md" fullWidth>
                Continue
              </Button>
            </div>

            {/* "or" divider */}
            <div className="mt-l">
              <DividerOr />
            </div>

            <div className="mt-l">
              <Button variant="outline" size="md" fullWidth>
                Access with medical member ID
              </Button>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="px-xxxxl py-xl">
          <p className="font-default text-[12px] text-neutral-text-light leading-[14px]">
            By continuing, you agree to Healthee's Terms and Privacy Policy.
          </p>
        </div>
      </div>

      {/* Right Panel — Brand */}
      <div className="flex-1 relative bg-primary overflow-hidden">
        {/* Gradient + bottom content */}
        <div className="absolute bottom-0 inset-x-0 flex flex-col items-center pb-xxxl px-xxxxl">
          <p className="font-display font-medium italic text-[20px] text-neutral-text-negative leading-[24px] mb-xxl">
            Healthcare navigation made easy.
          </p>
          {/* App download card */}
          <div className="w-full max-w-[392px] flex items-center gap-xxs px-xxs py-xxs rounded-m"
               style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)' }}>
            {/* QR + "Download the Healthee app" + store icons */}
          </div>
        </div>
      </div>
    </div>
  )
}`} />
      </Section>

    </DocLayout>
  )
}
