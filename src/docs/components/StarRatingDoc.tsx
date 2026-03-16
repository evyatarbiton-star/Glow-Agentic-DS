import { DocLayout, Section } from '../layout/DocLayout'
import { StarRating } from '../../components/StarRating'

export function StarRatingDoc() {
  return (
    <DocLayout
      title="Star Rating"
      description="Displays a visual star rating with optional numeric value and review count. Uses StarSolid icons from the DS icon library."
    >
      <Section title="Default" description="Basic star rating — filled stars based on rounded rating value.">
        <div className="flex flex-col gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <StarRating rating={5} />
          <StarRating rating={4} />
          <StarRating rating={3} />
          <StarRating rating={2} />
          <StarRating rating={1} />
          <StarRating rating={0} />
        </div>
      </Section>

      <Section title="With Value & Review Count" description="Show numeric rating and review count alongside the stars.">
        <div className="flex flex-col gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <StarRating rating={4.8} showValue reviewCount={124} />
          <StarRating rating={3.9} showValue reviewCount={320} />
          <StarRating rating={2.1} showValue reviewCount={15} />
        </div>
      </Section>

      <Section title="Sizes" description="Star icons scale with the standard icon size tokens.">
        <div className="flex flex-col gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <div className="flex items-center gap-m">
            <span className="font-default text-[13px] text-neutral-text-light w-[32px]">xs</span>
            <StarRating rating={4} size="xs" showValue />
          </div>
          <div className="flex items-center gap-m">
            <span className="font-default text-[13px] text-neutral-text-light w-[32px]">sm</span>
            <StarRating rating={4} size="sm" showValue />
          </div>
          <div className="flex items-center gap-m">
            <span className="font-default text-[13px] text-neutral-text-light w-[32px]">md</span>
            <StarRating rating={4} size="md" showValue />
          </div>
          <div className="flex items-center gap-m">
            <span className="font-default text-[13px] text-neutral-text-light w-[32px]">lg</span>
            <StarRating rating={4} size="lg" showValue />
          </div>
        </div>
      </Section>

      <Section title="Decimal Rounding" description="Decimal ratings round to the nearest integer for star display, while the numeric text shows the exact value.">
        <div className="flex flex-col gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <StarRating rating={4.2} showValue />
          <StarRating rating={4.5} showValue />
          <StarRating rating={4.8} showValue />
        </div>
      </Section>

      <Section title="Usage" description="">
        <div className="bg-white rounded-xs border border-neutral-border-light p-m">
          <div className="bg-neutral-subtle rounded-xxs p-xs">
            <code className="font-mono text-[12px] text-neutral-text-dark whitespace-pre">{`import { StarRating } from '../components/StarRating'

<StarRating rating={4.8} showValue reviewCount={124} />
<StarRating rating={3} size="md" />
<StarRating rating={5} />`}</code>
          </div>
        </div>
      </Section>
    </DocLayout>
  )
}
