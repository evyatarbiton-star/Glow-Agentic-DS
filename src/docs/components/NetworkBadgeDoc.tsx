import { DocLayout, Section } from '../layout/DocLayout'
import { NetworkBadge } from '../../components/NetworkBadge'

export function NetworkBadgeDoc() {
  return (
    <DocLayout
      title="NetworkBadge"
      description="Displays a dual-color coin icon + network tier label. Wraps <Chip variant='outline'> for consistent sizing. Use everywhere network tier info is shown: provider cards, modals, search results."
    >
      <Section title="All tiers" description="Four network tiers with distinct color coding.">
        <div className="flex flex-col gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <div className="flex items-center gap-m">
            <span className="font-default text-[13px] text-neutral-text-light w-[120px]">In-Network</span>
            <NetworkBadge tier="in-network" label="In-Network" />
          </div>
          <div className="flex items-center gap-m">
            <span className="font-default text-[13px] text-neutral-text-light w-[120px]">Tier 2</span>
            <NetworkBadge tier="tier-2" label="Tier 2" />
          </div>
          <div className="flex items-center gap-m">
            <span className="font-default text-[13px] text-neutral-text-light w-[120px]">Tier 3</span>
            <NetworkBadge tier="tier-3" label="Tier 3" />
          </div>
          <div className="flex items-center gap-m">
            <span className="font-default text-[13px] text-neutral-text-light w-[120px]">Out-of-Network</span>
            <NetworkBadge tier="out-of-network" label="Out-of-Network" />
          </div>
        </div>
      </Section>

      <Section title="With network name" description="Multi-network plans show 'NetworkName · Tier' format.">
        <div className="flex flex-col gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <NetworkBadge tier="in-network" networkName="Aetna" label="In-Network" />
          <NetworkBadge tier="tier-2" networkName="Anthem" label="Tier 2" />
          <NetworkBadge tier="out-of-network" networkName="Cigna" label="Out-of-Network" />
        </div>
      </Section>

      <Section title="Sizes" description="sm (28px) and md (32px) — matches Chip sizing.">
        <div className="flex flex-col gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <div className="flex items-center gap-m">
            <span className="font-default text-[13px] text-neutral-text-light w-[32px]">sm</span>
            <NetworkBadge tier="in-network" label="In-Network" size="sm" />
          </div>
          <div className="flex items-center gap-m">
            <span className="font-default text-[13px] text-neutral-text-light w-[32px]">md</span>
            <NetworkBadge tier="in-network" label="In-Network" size="md" />
          </div>
        </div>
      </Section>

      <Section title="Unbordered" description="bordered=false — just icon + text, no chip wrapper. Used inline in compact layouts.">
        <div className="flex flex-col gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <NetworkBadge tier="in-network" label="In-Network" bordered={false} />
          <NetworkBadge tier="out-of-network" label="Out-of-Network" bordered={false} />
          <NetworkBadge tier="tier-2" networkName="Anthem" label="Tier 2" bordered={false} />
        </div>
      </Section>
    </DocLayout>
  )
}
