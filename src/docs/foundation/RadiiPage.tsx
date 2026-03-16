import { DocLayout, Section } from '../layout/DocLayout'
import { semanticRadii } from '../../../tokens/semantic/radii'

function RadiusCard({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-xs">
      <div
        className="w-[80px] h-[80px] bg-primary-subtle border-2 border-primary"
        style={{ borderRadius: value }}
      />
      <div className="text-center">
        <p className="font-default font-medium text-[12px] text-neutral capitalize">{name}</p>
        <p className="font-default text-[11px] text-neutral-text-light">{value}</p>
      </div>
    </div>
  )
}

const usageGuide: Record<string, string> = {
  none:  'Sharp corners — tables, code blocks',
  xxxs:  'Very subtle — tags, chips',
  xxs:   'Subtle — small inputs, small cards',
  xs:    'Default for cards and inputs',
  sn:    'Medium components — dropdowns',
  m:     'Large components — modals',
  ln:    'Extra large — sheets',
  xl:    'Very large — panels',
  xxl:   'Extra-extra large',
  xxxl:  'Near full — large pills',
  full:  'Full pill — avatars, toggles, badges',
}

export function RadiiPage() {
  return (
    <DocLayout
      title="Radii"
      description="Corner radius scale. Use in Tailwind: rounded-xs, rounded-sn, rounded-ln, rounded-full. Note: s/l renamed to sn/ln to avoid Tailwind directional utility collision."
    >
      <Section title="Visual Scale">
        <div className="bg-white rounded-xs border border-neutral-border-light p-xl">
          <div className="flex flex-wrap gap-xl">
            {Object.entries(semanticRadii).map(([name, value]) => (
              <RadiusCard key={name} name={name} value={value} />
            ))}
          </div>
        </div>
      </Section>

      <Section title="Usage Guide" description="Recommended radius per context.">
        <div className="bg-white rounded-xs border border-neutral-border-light overflow-hidden">
          {Object.entries(usageGuide).map(([name, usage]) => (
            <div key={name} className="flex items-center gap-m px-m py-[10px] border-b border-neutral-border-light last:border-0">
              <div
                className="w-[36px] h-[36px] bg-primary-subtle border border-primary shrink-0"
                style={{ borderRadius: semanticRadii[name as keyof typeof semanticRadii] ?? '0px' }}
              />
              <span className="font-default font-medium text-[13px] text-neutral w-[60px] shrink-0 capitalize">{name}</span>
              <span className="font-default text-[12px] text-neutral-text-light">{semanticRadii[name as keyof typeof semanticRadii]}</span>
              <span className="font-default text-[12px] text-neutral-text-light ml-auto">{usage}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Usage Rules" description="Corner-radius rules that AI agents and developers MUST follow when building screens.">

        {/* Rule: Uniform corners */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">1. All corners of an element must share the same radius</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">
            Never apply border-radius to only some corners of an element. If a container uses <code className="font-mono text-[12px] text-primary">rounded-ln</code>, every visible corner must have the same radius. When placing an image or child element inside a rounded container, either: (a) remove the child's radius entirely and rely on <code className="font-mono text-[12px] text-primary">overflow-hidden</code> on the parent to clip uniformly, or (b) match the parent's radius exactly on all 4 corners.
          </p>

          <div className="flex flex-col gap-s">
            {/* Correct example */}
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">✓ CORRECT — Parent clips uniformly</p>
              <div className="flex items-center gap-m">
                <div className="w-[200px] rounded-ln overflow-hidden border border-neutral-border-strong flex">
                  <div className="w-[80px] h-[80px] shrink-0" style={{ background: 'linear-gradient(135deg, #d4e5f7, #bcd4e8)' }} />
                  <div className="p-xs">
                    <p className="font-default text-[12px] text-neutral font-medium">Card content</p>
                    <p className="font-default text-[11px] text-neutral-text-light mt-xxxs">Image has no radius — parent overflow-hidden clips all corners uniformly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Correct example 2 */}
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">✓ CORRECT — Child matches parent radius on all 4 corners</p>
              <div className="flex items-center gap-m">
                <div className="w-[200px] rounded-ln border border-neutral-border-strong flex p-xxs">
                  <div className="w-[72px] h-[72px] rounded-ln shrink-0" style={{ background: 'linear-gradient(135deg, #e8d5f0, #d4bce3)' }} />
                  <div className="p-xs">
                    <p className="font-default text-[12px] text-neutral font-medium">Card content</p>
                    <p className="font-default text-[11px] text-neutral-text-light mt-xxxs">Image has matching rounded-ln on all 4 corners.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Incorrect example */}
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">✗ INCORRECT — Mixed corners (some rounded, some sharp)</p>
              <div className="flex items-center gap-m">
                <div className="w-[200px] rounded-ln overflow-hidden border border-neutral-border-strong flex">
                  <div className="w-[80px] h-[80px] shrink-0" style={{ background: 'linear-gradient(135deg, #f5e0d3, #e8cdc0)', borderRadius: '16px 0 0 16px' }} />
                  <div className="p-xs">
                    <p className="font-default text-[12px] text-neutral font-medium">Card content</p>
                    <p className="font-default text-[11px] text-neutral-text-light mt-xxxs">Image has rounded left + sharp right = inconsistent corners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rule: Cards must have rounded corners */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">3. Cards and containers must always have rounded corners</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">
            Any card-like element — a container with a border, shadow, or elevated surface — must use a border-radius token. Sharp (0px) corners are never allowed on cards. Use <code className="font-mono text-[12px] text-primary">rounded-ln</code> (24px) for primary or large cards, and <code className="font-mono text-[12px] text-primary">rounded-xs</code> (12px) for secondary or smaller cards.
          </p>

          <div className="flex flex-col gap-s">
            {/* Correct example */}
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">✓ CORRECT — Card with rounded corners</p>
              <div className="flex items-center gap-m">
                <div className="w-[200px] rounded-ln border border-neutral-border-strong p-s">
                  <div className="w-full h-[48px] rounded-xxs mb-xs" style={{ background: 'linear-gradient(135deg, #d4e5f7, #bcd4e8)' }} />
                  <p className="font-default text-[12px] text-neutral font-medium">Card title</p>
                  <p className="font-default text-[11px] text-neutral-text-light mt-xxxs">Card uses rounded-ln (24px) — all corners are rounded.</p>
                </div>
              </div>
            </div>

            {/* Incorrect example */}
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">✗ INCORRECT — Card with sharp corners</p>
              <div className="flex items-center gap-m">
                <div className="w-[200px] border border-neutral-border-strong p-s" style={{ borderRadius: 0 }}>
                  <div className="w-full h-[48px] mb-xs" style={{ background: 'linear-gradient(135deg, #f5e0d3, #e8cdc0)', borderRadius: 0 }} />
                  <p className="font-default text-[12px] text-neutral font-medium">Card title</p>
                  <p className="font-default text-[11px] text-neutral-text-light mt-xxxs">No border-radius — sharp corners are never allowed on cards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Section>

      <Section title="Nested Radius Rule" description="When an element with padding contains a rounded child, the child's radius must follow the nested-radius formula.">

        {/* Rule: Nested radius */}
        <div className="mb-l">
          <h4 className="font-default text-[14px] font-medium text-neutral mb-xxs">2. Inner radius = Parent radius − Padding</h4>
          <p className="font-default text-[13px] text-neutral-text-dark mb-xs">
            When a rounded container has padding, a child element inside it should use a <strong>smaller</strong> radius that equals the parent's radius minus the padding. This ensures the inner and outer curves run parallel and feel visually harmonious. For example, a card with <code className="font-mono text-[12px] text-primary">rounded-ln</code> (24px) and <code className="font-mono text-[12px] text-primary">p-s</code> (16px) → child uses <code className="font-mono text-[12px] text-primary">rounded-xxs</code> (8px = 24 − 16).
          </p>

          <div className="flex flex-col gap-s">
            {/* Correct example */}
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-success-text uppercase tracking-wider mb-xs">✓ CORRECT — Nested radius (24 − 16 = 8px)</p>
              <div className="flex items-center gap-m">
                <div className="w-[200px] rounded-ln border border-neutral-border-strong flex p-s">
                  <div className="w-[72px] h-[72px] rounded-xxs shrink-0" style={{ background: 'linear-gradient(135deg, #d4e5f7, #bcd4e8)' }} />
                  <div className="p-xs">
                    <p className="font-default text-[12px] text-neutral font-medium">Card content</p>
                    <p className="font-default text-[11px] text-neutral-text-light mt-xxxs">Card rounded-ln (24px), padding p-s (16px), image rounded-xxs (8px).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Incorrect example */}
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-error uppercase tracking-wider mb-xs">✗ INCORRECT — Child radius ignores nesting (12px inside 24px with 16px pad)</p>
              <div className="flex items-center gap-m">
                <div className="w-[200px] rounded-ln border border-neutral-border-strong flex p-s">
                  <div className="w-[72px] h-[72px] rounded-xs shrink-0" style={{ background: 'linear-gradient(135deg, #f5e0d3, #e8cdc0)' }} />
                  <div className="p-xs">
                    <p className="font-default text-[12px] text-neutral font-medium">Card content</p>
                    <p className="font-default text-[11px] text-neutral-text-light mt-xxxs">Image uses rounded-xs (12px) — doesn't follow 24 − 16 = 8px formula.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reference table */}
            <div className="bg-neutral-subtle rounded-xs p-m">
              <p className="font-default text-[11px] font-medium text-neutral-text-dark uppercase tracking-wider mb-xs">Reference — Common nested radius combos</p>
              <div className="bg-white rounded-xxs border border-neutral-border-light overflow-hidden">
                {[
                  { parent: 'rounded-ln (24px)', padding: 'p-s (16px)', child: 'rounded-xxs (8px)' },
                  { parent: 'rounded-ln (24px)', padding: 'p-xs (12px)', child: 'rounded-xs (12px)' },
                  { parent: 'rounded-m (20px)', padding: 'p-s (16px)', child: 'rounded-xxxs (4px)' },
                  { parent: 'rounded-xs (12px)', padding: 'p-xxs (8px)', child: 'rounded-xxxs (4px)' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-m px-m py-[8px] border-b border-neutral-border-light last:border-0">
                    <span className="font-default text-[12px] text-neutral w-[140px]">{row.parent}</span>
                    <span className="font-default text-[12px] text-neutral-text-light">−</span>
                    <span className="font-default text-[12px] text-neutral w-[100px]">{row.padding}</span>
                    <span className="font-default text-[12px] text-neutral-text-light">=</span>
                    <span className="font-default text-[12px] text-primary font-medium">{row.child}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </Section>
    </DocLayout>
  )
}
