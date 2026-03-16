import { DocLayout, Section } from '../layout/DocLayout'
import { NetworkBadge } from '../../components/NetworkBadge'

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xs">
      {children}
    </p>
  )
}

export function NetworkBadgeDoc() {
  return (
    <DocLayout
      title="Network Badge"
      description="Displays insurance network tier status with a colored coin icon and label. Use this component everywhere network tier info appears — provider cards, modals, search results, benefit details. Never use a generic Chip for network tiers."
    >
      {/* All Tiers */}
      <Section title="Tiers">
        <Label>In-Network (best coverage)</Label>
        <div className="mb-m">
          <NetworkBadge tier="in-network" label="In-Network" />
        </div>

        <Label>Tier 2 (secondary network)</Label>
        <div className="mb-m">
          <NetworkBadge tier="tier-2" label="Tier 2" />
        </div>

        <Label>Tier 3 (tertiary network)</Label>
        <div className="mb-m">
          <NetworkBadge tier="tier-3" label="Tier 3" />
        </div>

        <Label>Out-of-Network (worst coverage)</Label>
        <div className="mb-m">
          <NetworkBadge tier="out-of-network" label="Out-of-Network" />
        </div>
      </Section>

      {/* With Network Name */}
      <Section title="With Network Name (multi-tier plans)">
        <Label>Network name prepended to label</Label>
        <div className="flex flex-wrap gap-xs">
          <NetworkBadge tier="in-network" networkName="Aetna" label="Preferred" />
          <NetworkBadge tier="tier-2" networkName="Aetna" label="Tier 2" />
          <NetworkBadge tier="out-of-network" networkName="Aetna" label="Out-of-Network" />
        </div>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <Label>Small (default) — 28px height, matches Chip sm</Label>
        <div className="flex flex-wrap gap-xs mb-m">
          <NetworkBadge tier="in-network" label="In-Network" size="sm" />
          <NetworkBadge tier="tier-2" networkName="Aetna" label="Tier 2" size="sm" />
        </div>

        <Label>Medium — 32px height, matches Chip md</Label>
        <div className="flex flex-wrap gap-xs">
          <NetworkBadge tier="in-network" label="In-Network" size="md" />
          <NetworkBadge tier="tier-2" networkName="Aetna" label="Tier 2" size="md" />
        </div>
      </Section>

      {/* Bordered vs Unbounded */}
      <Section title="Bordered vs Unbounded">
        <Label>Bordered (default) — with pill border</Label>
        <div className="mb-m">
          <NetworkBadge tier="in-network" label="In-Network" bordered />
        </div>

        <Label>Unbounded — icon + text only, no border</Label>
        <div className="mb-m">
          <NetworkBadge tier="in-network" label="In-Network" bordered={false} />
        </div>
      </Section>

      {/* Usage Rules */}
      <Section title="Usage Rules">
        <div className="font-default text-[14px] text-neutral-text-dark space-y-xs">
          <p><strong>Always use NetworkBadge</strong> — never use a generic Chip, Tag, or custom styled element for network tier display.</p>
          <p><strong>Tier ordering:</strong> green (In-Network) → yellow (Tier 2) → purple (Tier 3) → red (Out-of-Network). Best coverage first, worst last.</p>
          <p><strong>Single-network plans:</strong> Show only In-Network and Out-of-Network.</p>
          <p><strong>Multi-tier plans:</strong> Show all tiers that exist in the plan. Use <code>networkName</code> prop to prepend the network name.</p>
          <p><strong>ProviderCard handles it internally:</strong> When using ProviderCard, you pass <code>networkTier</code> and <code>networkLabel</code> props — NetworkBadge is rendered automatically. Use NetworkBadge directly in modals, detail pages, lists, and other contexts.</p>
        </div>
      </Section>
    </DocLayout>
  )
}
