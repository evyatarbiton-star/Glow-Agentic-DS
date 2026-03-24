import { DocLayout, Section } from '../layout/DocLayout'
import { ScrollArea } from '../../components/ScrollArea'
import { Card } from '../../components/Card'

export function ScrollAreaDoc() {
  return (
    <DocLayout
      title="ScrollArea"
      description="A styled scroll container with a custom thin indicator. Supports horizontal, vertical, or both directions. Includes scroll-snap, drag-to-scroll indicator, and responsive hideScrollbar option."
    >
      <Section title="Horizontal carousel" description="Cards in a horizontal scroll with snap and custom indicator.">
        <div className="p-m bg-white rounded-xs border border-neutral-border-light">
          <ScrollArea direction="horizontal" gap={16} snap>
            {['Card A', 'Card B', 'Card C', 'Card D', 'Card E'].map(label => (
              <div key={label} style={{ width: 240, minWidth: 240, flexShrink: 0, scrollSnapAlign: 'start' }}>
                <Card variant="outline" radius="md" padding="md">
                  <p className="font-default text-[16px] font-medium text-neutral">{label}</p>
                  <p className="font-default text-[14px] text-neutral-text-light mt-xxs">
                    Scroll horizontally to see more cards. The indicator below tracks your position.
                  </p>
                </Card>
              </div>
            ))}
          </ScrollArea>
        </div>
      </Section>

      <Section title="Vertical scroll" description="Constrained height with vertical scroll and custom indicator.">
        <div className="p-m bg-white rounded-xs border border-neutral-border-light" style={{ maxWidth: 400 }}>
          <ScrollArea direction="vertical" maxHeight={200}>
            {Array.from({ length: 12 }).map((_, i) => (
              <p key={i} className="font-default text-[14px] text-neutral-text-dark" style={{ marginBottom: 8 }}>
                Scrollable content line {i + 1}. The custom indicator on the right shows your scroll position.
              </p>
            ))}
          </ScrollArea>
        </div>
      </Section>

      <Section title="Hidden scrollbar" description="hideScrollbar=true — content still scrollable but no indicator shown. Best for mobile/touch.">
        <div className="p-m bg-white rounded-xs border border-neutral-border-light">
          <ScrollArea direction="horizontal" gap={16} snap hideScrollbar>
            {['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'].map(label => (
              <div key={label} style={{ width: 180, minWidth: 180, flexShrink: 0, scrollSnapAlign: 'start' }}>
                <Card variant="filled" radius="sm" padding="sm">
                  <p className="font-default text-[14px] text-neutral">{label}</p>
                </Card>
              </div>
            ))}
          </ScrollArea>
        </div>
      </Section>

      <Section title="Snap alignment" description="snapAlign controls where cards snap: start (default), center, or end.">
        <div className="flex flex-col gap-m">
          {(['start', 'center', 'end'] as const).map(align => (
            <div key={align}>
              <p className="font-default text-[13px] text-neutral-text-light mb-xxs">snapAlign=&quot;{align}&quot;</p>
              <div className="p-m bg-white rounded-xs border border-neutral-border-light">
                <ScrollArea direction="horizontal" gap={12} snap snapAlign={align}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} style={{ width: 160, minWidth: 160, flexShrink: 0, scrollSnapAlign: align }}>
                      <Card variant="outline" radius="sm" padding="sm">
                        <p className="font-default text-[14px] text-neutral">Item {i + 1}</p>
                      </Card>
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </DocLayout>
  )
}
