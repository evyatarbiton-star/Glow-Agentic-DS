import { DocLayout, Section } from '../layout/DocLayout'
import { semanticSpacing } from '../../../tokens/semantic/spacing'

function SpacingRow({ name, value }: { name: string; value: string }) {
  const px = parseInt(value)
  return (
    <div className="flex items-center gap-xl py-xxs border-b border-neutral-border-light last:border-0">
      <div className="w-[60px] shrink-0 text-right">
        <span className="font-default font-medium text-[13px] text-neutral uppercase">{name}</span>
      </div>
      <div className="flex items-center gap-m flex-1">
        <div
          className="bg-primary rounded-[2px] shrink-0"
          style={{ width: `${px}px`, height: '20px', maxWidth: '300px' }}
        />
        <span className="font-default text-[12px] text-neutral-text-light">{value}</span>
      </div>
    </div>
  )
}

export function SpacingPage() {
  return (
    <DocLayout
      title="Spacing"
      description="T-shirt size spacing scale built on a 4px grid. Use these in Tailwind: p-s, gap-m, mt-xl, etc."
    >
      <Section title="Semantic Scale" description="Use these named tokens in all components and layouts.">
        <div className="bg-white rounded-xs border border-neutral-border-light overflow-hidden px-m">
          {Object.entries(semanticSpacing).map(([name, value]) => (
            <SpacingRow key={name} name={name} value={value} />
          ))}
        </div>
      </Section>

      <Section title="How to Use" description="">
        <div className="bg-white rounded-xs border border-neutral-border-light p-m">
          <div className="grid grid-cols-2 gap-m">
            <div>
              <p className="font-default font-medium text-[13px] text-neutral mb-xs">✅ Correct</p>
              <div className="bg-neutral-subtle rounded-xxs p-xs">
                <code className="font-mono text-[12px] text-neutral-text-dark">
                  {`<div className="p-s gap-m mt-xl">`}
                </code>
              </div>
            </div>
            <div>
              <p className="font-default font-medium text-[13px] text-neutral mb-xs">❌ Avoid</p>
              <div className="bg-error-subtle rounded-xxs p-xs">
                <code className="font-mono text-[12px] text-error-text">
                  {`<div style={{ padding: '16px', gap: '20px' }}>`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DocLayout>
  )
}
