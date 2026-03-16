import { ProviderCardV2 } from '../../components/_lab/ProviderCardV2'

// ============================================================
// LAB DOC — ProviderCard V2
// Status: Draft
// ============================================================

const MOCK_PROVIDERS = [
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Dermatologist',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    providerType: 'female' as const,
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.5 miles',
    address: '457 Broome St, New York, NY',
    rating: 3.9,
    reviewCount: 320,
    cost: '$215',
    costLevel: 'lower' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Today, May 7',
  },
  {
    name: 'Dr. Christopher Montgo Vander',
    specialty: 'Dermatologist',
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
    providerType: 'male' as const,
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.5 miles',
    address: '457 Broome St, New York, NY',
    rating: 3.9,
    reviewCount: 320,
    cost: '$330',
    costLevel: 'typical' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Today, May 7',
  },
  {
    name: 'Dr. Michael Torres',
    specialty: 'Dermatologist',
    providerType: 'male' as const,
    networkTier: 'in-network' as const,
    networkLabel: 'In-Network',
    distance: '0.5 miles',
    address: '457 Broome St, New York, NY',
    rating: 3.9,
    reviewCount: 320,
    cost: '$215',
    costLevel: 'typical' as const,
    nextAppointmentLabel: 'Next appointment',
    nextAppointmentDate: 'Today, May 7',
  },
]

export function ProviderCardV2Lab() {
  return (
    <div className="p-xxl max-w-[1000px] mx-auto">
      {/* Header */}
      <div className="mb-l">
        <div className="flex items-center gap-xxs mb-xxs">
          <h1 className="font-display font-medium text-[32px] text-neutral">ProviderCard V2</h1>
          <span
            style={{
              display: 'inline-block',
              fontSize: 11,
              fontWeight: 500,
              lineHeight: '18px',
              padding: '0 8px',
              borderRadius: 999,
              backgroundColor: '#f0f0f0',
              color: '#666666',
            }}
          >
            Draft
          </span>
        </div>
        <p className="font-default text-[15px] text-neutral-text-dark">
          Iteration on the production ProviderCard. Same data model, open for layout and visual experiments.
          This component is not yet exported from the DS.
        </p>
      </div>

      {/* Horizontal Layout */}
      <section className="mb-xxl">
        <h2 className="font-default font-medium text-[20px] text-neutral mb-xs">Horizontal Layout</h2>
        <p className="font-default text-[14px] text-neutral-text-dark mb-m">
          List view style — full-width card with all info in rows.
        </p>
        <div className="space-y-m">
          {MOCK_PROVIDERS.map((p) => (
            <ProviderCardV2
              key={p.name}
              layout="horizontal"
              {...p}
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Variations */}
      <section className="mb-xxl">
        <h2 className="font-default font-medium text-[20px] text-neutral mb-xs">Variations</h2>
        <p className="font-default text-[14px] text-neutral-text-dark mb-m">
          Different provider types, action combos, and edge cases — horizontal and vertical side-by-side.
        </p>

        {/* Facility */}
        <div className="mb-m">
          <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xs">Facility</p>
          <div className="grid grid-cols-[1fr_300px] gap-m items-start">
            <ProviderCardV2
              layout="horizontal"
              name="Manhattan Eye Center"
              specialty="Retinal imaging center"
              providerType="facility"
              networkTier="out-of-network"
              networkLabel="Out-of-Network"
              distance="0.9 miles"
              address="100 E 77th St, New York, NY"
              rating={4.3}
              reviewCount={67}
              cost="$890"
              costLevel="higher"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
            <ProviderCardV2
              layout="vertical"
              name="Manhattan Eye Center"
              specialty="Retinal imaging center"
              providerType="facility"
              networkTier="out-of-network"
              networkLabel="Out-of-Network"
              distance="0.9 miles"
              address="100 E 77th St, New York, NY"
              rating={4.3}
              reviewCount={67}
              cost="$890"
              costLevel="higher"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          </div>
        </div>

        {/* Female — fallback avatar */}
        <div className="mb-m">
          <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xs">Female provider (fallback avatar)</p>
          <div className="grid grid-cols-[1fr_300px] gap-m items-start">
            <ProviderCardV2
              layout="horizontal"
              name="Dr. Emily Park"
              specialty="Ophthalmologist"
              providerType="female"
              networkTier="in-network"
              networkLabel="In-Network"
              distance="1.2 miles"
              address="635 Madison Ave, 3rd Floor, New York, NY"
              rating={4.5}
              reviewCount={89}
              cost="$72"
              costLevel="lower"
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Wed, Mar 18"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
            <ProviderCardV2
              layout="vertical"
              name="Dr. Emily Park"
              specialty="Ophthalmologist"
              providerType="female"
              networkTier="in-network"
              networkLabel="In-Network"
              distance="1.2 miles"
              address="635 Madison Ave, 3rd Floor, New York, NY"
              rating={4.5}
              reviewCount={89}
              cost="$72"
              costLevel="lower"
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Wed, Mar 18"
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          </div>
        </div>

        {/* Call only — no Book */}
        <div className="mb-m">
          <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xs">Call only (no Book button)</p>
          <div className="grid grid-cols-[1fr_300px] gap-m items-start">
            <ProviderCardV2
              layout="horizontal"
              name="Dr. James Rivera"
              specialty="Cardiologist"
              providerType="male"
              networkTier="tier-2"
              networkName="Aetna"
              networkLabel="Tier 2"
              distance="0.8 miles"
              address="200 Broadway, Suite 1105, New York, NY"
              rating={4.7}
              reviewCount={156}
              cost="$305"
              costLevel="typical"
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Thu, Mar 19"
              onCallClick={() => {}}
            />
            <ProviderCardV2
              layout="vertical"
              name="Dr. James Rivera"
              specialty="Cardiologist"
              providerType="male"
              networkTier="tier-2"
              networkName="Aetna"
              networkLabel="Tier 2"
              distance="0.8 miles"
              address="200 Broadway, Suite 1105, New York, NY"
              rating={4.7}
              reviewCount={156}
              cost="$305"
              costLevel="typical"
              nextAppointmentLabel="Next appointment"
              nextAppointmentDate="Thu, Mar 19"
              onCallClick={() => {}}
            />
          </div>
        </div>

        {/* No actions */}
        <div className="mb-m">
          <p className="font-default text-[11px] font-medium text-neutral-text-light uppercase tracking-wider mb-xs">No action buttons</p>
          <div className="grid grid-cols-[1fr_300px] gap-m items-start">
            <ProviderCardV2
              layout="horizontal"
              name="Dr. Rachel Nguyen"
              specialty="Orthopedist"
              providerType="female"
              photoUrl="https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=200&h=200&fit=crop&crop=face"
              networkTier="in-network"
              networkLabel="In-Network"
              distance="2.1 miles"
              address="88 Lexington Ave, New York, NY"
              rating={4.9}
              reviewCount={201}
              cost="$210"
              costLevel="higher"
            />
            <ProviderCardV2
              layout="vertical"
              name="Dr. Rachel Nguyen"
              specialty="Orthopedist"
              providerType="female"
              photoUrl="https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=200&h=200&fit=crop&crop=face"
              networkTier="in-network"
              networkLabel="In-Network"
              distance="2.1 miles"
              address="88 Lexington Ave, New York, NY"
              rating={4.9}
              reviewCount={201}
              cost="$210"
              costLevel="higher"
            />
          </div>
        </div>
      </section>

      {/* Vertical Layout */}
      <section className="mb-xxl">
        <h2 className="font-default font-medium text-[20px] text-neutral mb-xs">Vertical Layout</h2>
        <p className="font-default text-[14px] text-neutral-text-dark mb-m">
          Stacked card for grids — ideal for side-by-side or mobile display.
        </p>
        <div className="grid grid-cols-2 gap-m" style={{ maxWidth: 700 }}>
          {MOCK_PROVIDERS.slice(0, 2).map((p) => (
            <ProviderCardV2
              key={p.name}
              layout="vertical"
              {...p}
              onCallClick={() => {}}
              onBookClick={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Responsive Layout */}
      <section className="mb-xxl">
        <h2 className="font-default font-medium text-[20px] text-neutral mb-xs">Responsive (auto-switch)</h2>
        <p className="font-default text-[14px] text-neutral-text-dark mb-m">
          Default behavior — switches from horizontal to vertical at 480px container width.
          Resize the browser to test.
        </p>
        <ProviderCardV2
          {...MOCK_PROVIDERS[0]}
          onCallClick={() => {}}
          onBookClick={() => {}}
        />
      </section>

      {/* Change Log */}
      <section className="mb-xxl">
        <h2 className="font-default font-medium text-[20px] text-neutral mb-xs">Change Log</h2>
        <div className="font-default text-[14px] text-neutral-text-dark space-y-xxs">
          <p><strong>v0.2</strong> — Horizontal layout redesign: two-column layout with provider info on the left, cost + actions on the right.</p>
          <p><strong>v0.1</strong> — Initial clone from production ProviderCard. No changes yet.</p>
        </div>
      </section>
    </div>
  )
}
