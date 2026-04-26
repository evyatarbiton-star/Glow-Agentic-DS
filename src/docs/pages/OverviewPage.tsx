import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/Card'

const SECTIONS = [
  {
    title: 'Foundation',
    description: 'Colors, typography, spacing, radii, shadows, and icons — the building blocks.',
    path: '/foundation/colors',
    count: 6,
    color: '#fd5201',
  },
  {
    title: 'Components',
    description: 'Buttons, forms, cards, modals, navigation, and more — ready to use.',
    path: '/components/button',
    count: 16,
    color: '#2563eb',
  },
  {
    title: 'Patterns',
    description: 'Full-page compositions showing how components work together.',
    path: '/examples/healthee-home',
    count: 3,
    color: '#16a34a',
  },
  {
    title: 'Lab',
    description: 'Work-in-progress components being iterated on before promotion.',
    path: '/lab',
    count: 0,
    color: '#8b5cf6',
  },
]

export function OverviewPage() {
  const navigate = useNavigate()

  return (
    <div className="p-xxl max-w-[800px] mx-auto">
      {/* Header */}
      <div className="mb-xxl">
        <h1 className="font-display font-medium text-[36px] text-neutral mb-xs">
          Glow Design System
        </h1>
        <p className="font-default text-[16px] text-neutral-text-dark leading-relaxed" style={{ maxWidth: 560 }}>
          An agentic design system built for AI agent consumption. Every token, component, and
          usage rule is structured in TypeScript so agents can read and apply them programmatically.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-m">
        {SECTIONS.map(section => (
          <Card
            key={section.title}
            variant="outline"
            radius="md"
            padding="md"
            interactive
            onClick={() => navigate(section.path)}
          >
            <div className="flex items-start gap-xs">
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  backgroundColor: section.color,
                  marginTop: 7,
                  flexShrink: 0,
                }}
              />
              <div>
                <div className="flex items-center gap-xxs mb-xxxs">
                  <h3 className="font-default font-medium text-[15px] text-neutral">
                    {section.title}
                  </h3>
                  <span className="font-default text-[12px] text-neutral-text-light">
                    {section.count}
                  </span>
                </div>
                <p className="font-default text-[13px] text-neutral-text-dark leading-snug">
                  {section.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-xxl pt-l border-t border-neutral-border-light">
        <div className="flex gap-xxl">
          <div>
            <p className="font-default font-medium text-[24px] text-neutral">26</p>
            <p className="font-default text-[13px] text-neutral-text-light">Components</p>
          </div>
          <div>
            <p className="font-default font-medium text-[24px] text-neutral">1,879</p>
            <p className="font-default text-[13px] text-neutral-text-light">Icons</p>
          </div>
          <div>
            <p className="font-default font-medium text-[24px] text-neutral">103</p>
            <p className="font-default text-[13px] text-neutral-text-light">Color tokens</p>
          </div>
          <div>
            <p className="font-default font-medium text-[24px] text-neutral">40</p>
            <p className="font-default text-[13px] text-neutral-text-light">Typography tokens</p>
          </div>
        </div>
      </div>
    </div>
  )
}
