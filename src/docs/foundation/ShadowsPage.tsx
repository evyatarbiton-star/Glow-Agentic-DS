import { DocLayout, Section } from '../layout/DocLayout'
import { primitiveShadows } from '../../../tokens/primitive/shadows'
import { semanticColors as sc } from '../../../tokens/semantic/colors'

const shadowUsage: Record<string, string> = {
  none:  'No shadow',
  sm:    'Hover states, focus rings',
  card:  'Default card / panel elevation',
  md:    'Dropdowns, popovers',
  lg:    'Modals, overlays',
  xl:    'Drawers, full-screen panels',
  '2xl': 'Maximum elevation',
}

function ShadowCard({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-m">
      <div
        className="w-[120px] h-[80px] bg-white rounded-xs"
        style={{ boxShadow: value === 'none' ? 'none' : value, border: value === 'none' ? `1px solid ${sc.neutral.border.light}` : 'none' }}
      />
      <div className="text-center">
        <p className="font-default font-medium text-[13px] text-neutral">{name}</p>
        <p className="font-default text-[11px] text-neutral-text-light">{shadowUsage[name] ?? ''}</p>
      </div>
    </div>
  )
}

export function ShadowsPage() {
  return (
    <DocLayout
      title="Shadows"
      description="Box shadow scale for elevation. Use in Tailwind: shadow-card, shadow-md, shadow-xl."
    >
      <Section title="Shadow Scale">
        <div className="bg-neutral-subtle rounded-xs border border-neutral-border-light p-xxl">
          <div className="flex flex-wrap gap-xxl justify-center">
            {Object.entries(primitiveShadows).map(([name, value]) => (
              <ShadowCard key={name} name={name} value={value} />
            ))}
          </div>
        </div>
      </Section>

      <Section title="Token Values" description="Raw CSS values for each shadow token.">
        <div className="bg-white rounded-xs border border-neutral-border-light overflow-hidden">
          {Object.entries(primitiveShadows).map(([name, value]) => (
            <div key={name} className="flex items-start gap-m px-m py-[10px] border-b border-neutral-border-light last:border-0">
              <span className="font-default font-medium text-[13px] text-neutral w-[60px] shrink-0">{name}</span>
              <code className="font-mono text-[11px] text-neutral-text-dark bg-neutral-subtle px-xxs py-[3px] rounded-[3px] flex-1">{value}</code>
            </div>
          ))}
        </div>
      </Section>
    </DocLayout>
  )
}
