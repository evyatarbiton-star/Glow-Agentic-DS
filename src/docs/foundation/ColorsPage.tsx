import { DocLayout, Section } from '../layout/DocLayout'
import { primitiveColors } from '../../../tokens/primitive/colors'
import { semanticColors } from '../../../tokens/semantic/colors'
import { layoutRules } from '../../../tokens/usage/layout-rules'

// ── Primitive Color Swatch ─────────────────────────────────────
function ColorSwatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <div
        className="w-full h-[56px] rounded-xs border border-neutral-border-light"
        style={{ backgroundColor: value }}
      />
      <div>
        <p className="font-default font-medium text-[12px] text-neutral">{name}</p>
        <p className="font-default text-[11px] text-neutral-text-light uppercase">{value}</p>
      </div>
    </div>
  )
}

// ── Semantic Token Row ─────────────────────────────────────────
function SemanticRow({ token, value }: { token: string; value: string }) {
  return (
    <div className="flex items-center gap-m py-[6px]">
      <div
        className="w-[32px] h-[32px] rounded-xxs shrink-0 border border-neutral-border-light"
        style={{ backgroundColor: value }}
      />
      <p className="font-default font-medium text-[12px] text-neutral flex-1 min-w-0">{token}</p>
      <p className="font-default text-[11px] text-neutral-text-light uppercase shrink-0">{value}</p>
    </div>
  )
}

// ── Semantic Group (Surface / Border / Text) ──────────────────
function SemanticGroup({ title, tokens }: { title: string; tokens: Record<string, string> }) {
  return (
    <div className="mb-s last:mb-0">
      <p className="font-default text-[10px] font-medium text-neutral-text-light uppercase tracking-wider mb-xxs">{title}</p>
      {Object.entries(tokens).map(([name, value]) => (
        <SemanticRow key={name} token={name === 'DEFAULT' ? 'default' : name} value={value} />
      ))}
    </div>
  )
}

// ── Semantic Category Section ─────────────────────────────────
function SemanticCategory({ name, category }: { name: string; category: { surface: Record<string, string>; border: Record<string, string>; text: Record<string, string> } }) {
  return (
    <div className="p-m border-b border-neutral-border-light last:border-0">
      <p className="font-default font-medium text-[13px] text-neutral mb-xs capitalize">{name}</p>
      <SemanticGroup title="Surface" tokens={category.surface} />
      <SemanticGroup title="Border" tokens={category.border} />
      <SemanticGroup title="Text" tokens={category.text} />
    </div>
  )
}

// ── Palette Section ────────────────────────────────────────────
function PaletteSection({ name, colors }: { name: string; colors: Record<string | number, string> }) {
  return (
    <div className="mb-xl">
      <p className="font-default font-medium text-[13px] text-neutral-text-dark mb-xs capitalize">{name}</p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-xs">
        {Object.entries(colors).map(([step, value]) => (
          <ColorSwatch key={step} name={step === '0' ? 'White' : step === '950' ? 'Black' : step} value={value} />
        ))}
      </div>
    </div>
  )
}

// ── Category display names ─────────────────────────────────────
const categoryLabels: Record<string, string> = {
  primary: 'Primary (Orange)',
  neutral: 'Neutral (Black)',
  'accent-yellow': 'Accent Yellow',
  'accent-blue': 'Accent Blue',
  'accent-purple': 'Accent Purple',
  success: 'Success',
  error: 'Error',
}

export function ColorsPage() {
  return (
    <DocLayout
      title="Colors"
      description="103 semantic color tokens organized as Surface / Border / Text — 1:1 mapping to Figma variables. Always use semantic tokens in components — never raw hex values."
    >
      {/* Surface Color Defaults */}
      <Section
        title="Surface Color Defaults"
        description="Default background colors for product screens. White is the baseline — deviate only with a deliberate design reason."
      >
        <div className="bg-neutral-negative rounded-xs border border-neutral-border-light overflow-hidden mb-s">
          {layoutRules.surfaceDefaults.map((row, i) => (
            <div key={row.token} className={`flex items-start gap-m p-m border-b border-neutral-border-light last:border-0 ${i % 2 === 1 ? 'bg-neutral-subtle/30' : ''}`}>
              {/* Swatch */}
              <div
                className="w-[56px] h-[56px] rounded-xs border border-neutral-border-light shrink-0"
                style={{ backgroundColor: row.hex }}
              />
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-xs mb-xxxs flex-wrap">
                  <p className="font-default font-medium text-[13px] text-neutral">{row.context}</p>
                  {row.isDefault && (
                    <span className="font-default font-medium text-[10px] text-primary uppercase tracking-wider px-xxs py-[2px] bg-primary-subtle rounded-xxxs">Default</span>
                  )}
                </div>
                <div className="flex items-center gap-xs mb-xxxs">
                  <code className="font-mono text-[12px] text-primary">{row.tailwind}</code>
                  <span className="font-default text-[11px] text-neutral-text-light uppercase">→ {row.hex}</span>
                </div>
                <p className="font-default text-[12px] text-neutral-text-dark">{row.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rule callout */}
        <div className="bg-primary-subtle border border-primary-border-light rounded-xs p-m flex gap-m">
          <span className="font-default text-[18px] leading-none shrink-0">💡</span>
          <div>
            <p className="font-default font-medium text-[13px] text-neutral mb-xxxs">Never use bg-white or hardcoded hex for backgrounds</p>
            <p className="font-default text-[12px] text-neutral-text-dark">Always use a semantic token — even for white: <code className="font-mono text-primary">bg-neutral-negative</code> not <code className="font-mono text-error">bg-white</code> or <code className="font-mono text-error">bg-[#ffffff]</code>.</p>
          </div>
        </div>
      </Section>

      {/* Semantic Colors */}
      <Section
        title="Semantic Colors"
        description="6 categories × Surface/Border/Text. These are the tokens to use in components."
      >
        <div className="bg-white rounded-xs border border-neutral-border-light overflow-hidden">
          {Object.entries(semanticColors)
            .filter(([, cat]) => cat && typeof cat === 'object' && 'surface' in cat && 'border' in cat && 'text' in cat)
            .map(([name, category]) => (
            <SemanticCategory
              key={name}
              name={categoryLabels[name] ?? name}
              category={category as { surface: Record<string, string>; border: Record<string, string>; text: Record<string, string> }}
            />
          ))}
        </div>
      </Section>

      {/* Primitive Palette */}
      <Section
        title="Primitive Palette"
        description="Raw color values. Reference these through semantic tokens, not directly in components."
      >
        <div className="bg-white rounded-xs border border-neutral-border-light p-m">
          {Object.entries(primitiveColors).map(([name, colors]) => (
            <PaletteSection key={name} name={name} colors={colors as Record<string|number, string>} />
          ))}
        </div>
      </Section>
    </DocLayout>
  )
}
