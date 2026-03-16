import { DocLayout, Section } from '../layout/DocLayout'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { nativeTypographyStyles } from '../../../tokens/semantic/typography-native'
import type { TypographyStyle } from '../../../tokens/semantic/typography'
import type { NativeTypographyStyle } from '../../../tokens/semantic/typography-native'
import { typographyUsageRules } from '../../../tokens/usage/typography-rules'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { usePlatform } from '../context/PlatformContext'

type AnyTypographyStyles = typeof typographyStyles | typeof nativeTypographyStyles
type AnyTypographyKey = TypographyStyle | NativeTypographyStyle

function TypeRow({ name, style }: { name: string; style: AnyTypographyStyles[AnyTypographyKey] }) {
  const label = name.replace(/-/g, ' ')
  return (
    <div className="flex items-baseline gap-xl py-m border-b border-neutral-border-light last:border-0">
      {/* Live preview */}
      <div className="w-[280px] shrink-0 overflow-hidden">
        <p
          style={{
            fontFamily:      style.fontFamily,
            fontSize:        style.fontSize,
            lineHeight:      style.lineHeight,
            fontWeight:      style.fontWeight,
            letterSpacing:   style.letterSpacing,
            fontStyle:       style.fontStyle ?? 'normal',
            textDecoration:  style.textDecoration ?? 'none',
            color: sc.neutral.text.DEFAULT,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          The quick brown fox
        </p>
      </div>

      {/* Token name */}
      <div className="w-[180px] shrink-0">
        <p className="font-default font-medium text-[13px] text-neutral capitalize">{label}</p>
      </div>

      {/* Specs */}
      <div className="flex gap-xl flex-wrap">
        <div>
          <p className="font-default text-[10px] text-neutral-text-light uppercase tracking-wider">Size</p>
          <p className="font-default text-[12px] text-neutral-text-dark mt-[2px]">{style.fontSize}</p>
        </div>
        <div>
          <p className="font-default text-[10px] text-neutral-text-light uppercase tracking-wider">Weight</p>
          <p className="font-default text-[12px] text-neutral-text-dark mt-[2px]">{style.fontWeight}</p>
        </div>
        <div>
          <p className="font-default text-[10px] text-neutral-text-light uppercase tracking-wider">Line height</p>
          <p className="font-default text-[12px] text-neutral-text-dark mt-[2px]">{style.lineHeight}</p>
        </div>
        <div>
          <p className="font-default text-[10px] text-neutral-text-light uppercase tracking-wider">Family</p>
          <p className="font-default text-[12px] text-neutral-text-dark mt-[2px]">
            {style.fontFamily.includes('Tiempos') ? 'Tiempos Headline' : 'Founders Grotesk'}
          </p>
        </div>
        {style.fontStyle === 'italic' && (
          <div>
            <p className="font-default text-[10px] text-neutral-text-light uppercase tracking-wider">Style</p>
            <p className="font-default text-[12px] text-neutral-text-dark mt-[2px]">Italic</p>
          </div>
        )}
        {style.textDecoration === 'underline' && (
          <div>
            <p className="font-default text-[10px] text-neutral-text-light uppercase tracking-wider">Decoration</p>
            <p className="font-default text-[12px] text-neutral-text-dark mt-[2px]">Underline</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Group styles by category
const groups = {
  Display:     (k: string) => k.startsWith('display-'),
  Heading:     (k: string) => k.startsWith('heading-'),
  Label:       (k: string) => k.startsWith('label-'),
  Paragraph:   (k: string) => k.startsWith('paragraph-'),
  'Text Link': (k: string) => k.startsWith('text-link-'),
}

const groupDescriptions: Record<string, Record<string, string>> = {
  web: {
    Display:     'Tiempos Headline — Hero sections and marketing headlines only.',
    Heading:     'Founders Grotesk — Section titles, card headers, page headings. XXL→S Regular (400), XS→XXXS Medium (500).',
    Label:       'Founders Grotesk Medium — Button text, form labels, navigation, tags.',
    Paragraph:   'Founders Grotesk Regular — Body text, descriptions, long-form content.',
    'Text Link': 'Founders Grotesk Medium + underline — Inline text links, anchor text.',
  },
  native: {
    Display:     'Tiempos Headline — Hero sections and marketing headlines only. Scaled for mobile density.',
    Heading:     'Founders Grotesk Medium (500) — Section titles, card headers, screen headings. All weights are Medium on native.',
    Label:       'Founders Grotesk Medium — Button text, form labels, tab bar items, tags.',
    Paragraph:   'Founders Grotesk Regular — Body text, descriptions, long-form content.',
    'Text Link': 'Founders Grotesk Medium — Inline text links, tappable anchor text. text-link-m has underline, text-link-xm does not.',
  },
}

export function TypographyPage() {
  const { platform } = usePlatform()
  const styles = platform === 'native' ? nativeTypographyStyles : typographyStyles
  const descriptions = groupDescriptions[platform]

  return (
    <DocLayout
      title="Typography"
      description={
        platform === 'web'
          ? 'All text styles in the Glow DS. Two font families: Founders Grotesk (UI) and Tiempos Headline (display).'
          : 'Native text styles for React Native. Same token names as web, optimized for mobile density and readability.'
      }
    >
      {Object.entries(groups).map(([groupName, filter]) => {
        const entries = Object.entries(styles).filter(([k]) => filter(k))
        return (
          <Section key={groupName} title={groupName} description={descriptions[groupName]}>
            <div className="bg-neutral-negative rounded-xs border border-neutral-border-light overflow-hidden px-m">
              {entries.map(([name, style]) => (
                <TypeRow key={name} name={name} style={style} />
              ))}
            </div>
          </Section>
        )
      })}

      {/* ── Usage Rules (web only for now) ── */}
      {platform === 'web' && (
        <Section
          title="Usage Rules"
          description="Font pairing rules derived from real Healthee product patterns. AI agents MUST follow these when generating screens."
        >
          {/* Font Family Table */}
          <div className="bg-neutral-negative rounded-xs border border-neutral-border-light overflow-hidden mb-l">
            <div className="grid grid-cols-[160px_1fr_1fr] gap-m px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
              {['Font', 'Use for', 'Never for'].map(h => (
                <p key={h} className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">{h}</p>
              ))}
            </div>
            {[
              {
                font: 'Tiempos Headline',
                tailwind: 'font-display',
                use: 'H1 page title, hero headline, large price on card',
                never: 'Body text, buttons, labels, navigation, card titles, form inputs',
              },
              {
                font: 'Founders Grotesk',
                tailwind: 'font-default',
                use: 'H2/H3 section titles, card titles, modal titles, all body & UI text',
                never: 'Page-level H1 (use Tiempos there)',
              },
            ].map(row => (
              <div key={row.font} className="grid grid-cols-[160px_1fr_1fr] gap-m px-m py-s border-b border-neutral-border-light last:border-0">
                <div>
                  <p className="font-default font-medium text-[12px] text-neutral">{row.font}</p>
                  <code className="font-mono text-[11px] text-primary">{row.tailwind}</code>
                </div>
                <p className="font-default text-[12px] text-success-text">{row.use}</p>
                <p className="font-default text-[12px] text-error">{row.never}</p>
              </div>
            ))}
          </div>

          {/* Rule 1 — H1 = Tiempos */}
          <div className="mb-l">
            <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">1. H1 page title — always Tiempos Headline</h4>
            <p className="font-default text-[13px] text-neutral-text-dark mb-xs">
              {typographyUsageRules.rules.find(r => r.id === 'one-display-heading-per-page')?.detail}
            </p>
            <div className="flex flex-col gap-s">
              <div className="bg-neutral-subtle rounded-xs p-m">
                <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">CORRECT</p>
                <h1 className="font-display text-[28px] text-neutral leading-tight">Find a Doctor</h1>
                <p className="font-mono text-[11px] text-neutral-text-light mt-xxs">{'<h1 className="font-display text-[28px] text-neutral">Find a Doctor</h1>'}</p>
              </div>
              <div className="bg-neutral-subtle rounded-xs p-m">
                <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">INCORRECT</p>
                <h1 className="font-default font-medium text-[28px] text-neutral leading-tight">Find a Doctor</h1>
                <p className="font-mono text-[11px] text-neutral-text-light mt-xxs">{'<h1 className="font-default font-medium text-[28px]">Find a Doctor</h1>  \u2190 wrong font'}</p>
              </div>
            </div>
          </div>

          {/* Rule 2 — Section headings = Founders Grotesk */}
          <div className="mb-l">
            <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">2. Section headings (H2, H3) — always Founders Grotesk</h4>
            <p className="font-default text-[13px] text-neutral-text-dark mb-xs">
              {typographyUsageRules.rules.find(r => r.id === 'heading-for-structural-titles')?.detail}
            </p>
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">CORRECT</p>
              <div className="flex flex-col gap-xs">
                <h2 className="font-default font-medium text-[18px] text-neutral">Popular Specialties</h2>
                <p className="font-mono text-[11px] text-neutral-text-light">{'<h2 className="font-default font-medium text-[18px]">Popular Specialties</h2>'}</p>
              </div>
            </div>
          </div>

          {/* Rule 3 — Max one Tiempos per page */}
          <div className="mb-l">
            <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">3. Maximum ONE Tiempos heading per page</h4>
            <p className="font-default text-[13px] text-neutral-text-dark mb-xs">
              One Display (Tiempos) heading creates impact through contrast. Multiple Tiempos headings compete and dilute the brand moment. Exception: prices on cards may also use Display since they serve a different visual role than headings.
            </p>
            <div className="flex flex-col gap-s">
              <div className="bg-neutral-subtle rounded-xs p-m">
                <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">CORRECT — one Tiempos per page</p>
                <h1 className="font-display text-[28px] text-neutral">Find a Doctor</h1>
                <h2 className="font-default font-medium text-[18px] text-neutral mt-xs">Popular Specialties</h2>
                <h2 className="font-default font-medium text-[18px] text-neutral mt-xxs">Recent Visits</h2>
              </div>
              <div className="bg-neutral-subtle rounded-xs p-m">
                <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">INCORRECT — two Tiempos headings competing</p>
                <h1 className="font-display text-[28px] text-neutral">Find a Doctor</h1>
                <h2 className="font-display text-[20px] text-neutral mt-xs">Popular Specialties</h2>
              </div>
            </div>
          </div>

          {/* Pairing defaults reference */}
          <div>
            <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">Context reference</h4>
            <p className="font-default text-[13px] text-neutral-text-dark mb-xs">Quick lookup: which typography category to use per UI context.</p>
            <div className="bg-neutral-negative rounded-xs border border-neutral-border-light overflow-hidden">
              <div className="grid grid-cols-[1fr_120px_1fr] gap-m px-m py-xs bg-neutral-subtle border-b border-neutral-border-light">
                {['Context', 'Category', 'Recommended size'].map(h => (
                  <p key={h} className="font-default font-medium text-[11px] text-neutral-text-light uppercase tracking-wider">{h}</p>
                ))}
              </div>
              {Object.entries(typographyUsageRules.contextDefaults).slice(0, 10).map(([ctx, def], i) => (
                <div key={ctx} className={`grid grid-cols-[1fr_120px_1fr] gap-m px-m py-xs border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/40' : ''}`}>
                  <p className="font-default text-[12px] text-neutral-text-dark capitalize">{ctx.replace(/-/g, ' ')}</p>
                  <p className="font-default text-[12px] text-neutral capitalize">{def.category}</p>
                  <code className="font-mono text-[11px] text-primary">{def.sizeRange[0]}</code>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {platform === 'native' && (
        <Section
          title="Usage Notes"
          description="Native-specific typography guidelines."
        >
          <div className="bg-neutral-negative rounded-xs border border-neutral-border-light overflow-hidden px-m py-m">
            <div className="flex flex-col gap-m">
              <div>
                <p className="font-default font-medium text-[13px] text-neutral mb-xxs">Same token names, different values</p>
                <p className="font-default text-[13px] text-neutral-text-dark">
                  Native typography uses the same token key names as web (e.g. <code className="font-mono text-[11px] text-primary">heading-m</code>, <code className="font-mono text-[11px] text-primary">label-s</code>) but with sizes optimized for mobile screen density and readability.
                </p>
              </div>
              <div>
                <p className="font-default font-medium text-[13px] text-neutral mb-xxs">Font families</p>
                <p className="font-default text-[13px] text-neutral-text-dark">
                  Same families as web: Tiempos Headline for display, Founders Grotesk for everything else. Fonts are loaded via React Native font assets.
                </p>
              </div>
              <div>
                <p className="font-default font-medium text-[13px] text-neutral mb-xxs">Figma source</p>
                <p className="font-default text-[13px] text-neutral-text-dark">
                  Values sourced from the Native DS Figma file (node 1:394). Token keys use the same convention as web for cross-platform consistency.
                </p>
              </div>
            </div>
          </div>
        </Section>
      )}
    </DocLayout>
  )
}
