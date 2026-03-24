import { ProviderCard } from '../../components/ProviderCard'
import { ScrollArea } from '../../components/ScrollArea'

const providers = [
  { name: 'Dr. Emily Park', specialty: 'Dermatologist', providerType: 'female' as const, distance: '0.3 mi', address: '123 Medical Center Dr, New York, NY', rating: 4.8, reviewCount: 124, networkTier: 'in-network' as const, cost: '$180', costLevel: 'lower' as const, nextAppointmentLabel: 'Next available', nextAppointmentDate: 'Tomorrow, Mar 22', hasBook: true },
  { name: 'Dr. Robert Kim', specialty: 'Dermatologist', providerType: 'male' as const, distance: '1.2 mi', address: '456 Park Ave, New York, NY', rating: 4.5, reviewCount: 89, networkTier: 'in-network' as const, cost: '$195', costLevel: 'lower' as const, nextAppointmentLabel: 'Next available', nextAppointmentDate: 'Mar 24', hasBook: true },
  { name: 'Dr. Jessica Rivera', specialty: 'Dermatologist', providerType: 'female' as const, distance: '2.1 mi', address: '789 Broadway, Suite 5, New York, NY', rating: 4.6, reviewCount: 156, networkTier: 'in-network' as const, cost: '$165', costLevel: 'lower' as const, nextAppointmentLabel: 'Next available', nextAppointmentDate: 'Mar 25', hasBook: true },
  { name: 'Dr. David Hoffman', specialty: 'Dermatologist', providerType: 'male' as const, distance: '0.8 mi', address: '555 Madison Ave, 17th Floor, New York, NY', rating: 4.7, reviewCount: 134, networkTier: 'in-network' as const, cost: '$210', costLevel: 'typical' as const, hasBook: false },
  { name: 'Manhattan Skin Center', specialty: 'Dermatology clinic', providerType: 'facility' as const, distance: '0.5 mi', address: '100 E 77th St, New York, NY', rating: 4.3, reviewCount: 67, networkTier: 'tier-2' as const, cost: '$250', costLevel: 'typical' as const, hasBook: false },
  { name: 'Dr. Sarah Chen', specialty: 'Dermatologist', providerType: 'female' as const, photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face', distance: '3.0 mi', address: '1468 Madison Ave, Suite 4B, New York, NY', rating: 4.9, reviewCount: 201, networkTier: 'in-network' as const, cost: '$140', costLevel: 'lower' as const, nextAppointmentLabel: 'Next available', nextAppointmentDate: 'Today, Mar 21', hasBook: true },
]

export default function CarouselTestPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', padding: 40 }}>
      <h1 style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 8 }}>
        ProviderCard Carousel
      </h1>
      <p style={{ fontFamily: 'Founders Grotesk, sans-serif', fontSize: 14, color: '#666', marginBottom: 24 }}>
        6 cards · 360px each · 16px gap · horizontal scroll
      </p>

      <ScrollArea direction="horizontal" gap={16} snap>
        {providers.map((p, i) => (
          <div key={i} style={{ width: 360, minWidth: 360, flexShrink: 0, scrollSnapAlign: 'start', display: 'flex' }}>
            <ProviderCard
              name={p.name}
              specialty={p.specialty}
              providerType={p.providerType}
              photoUrl={'photoUrl' in p ? (p as any).photoUrl : undefined}
              distance={p.distance}
              address={p.address}
              rating={p.rating}
              reviewCount={p.reviewCount}
              networkTier={p.networkTier}
              cost={p.cost}
              costLevel={p.costLevel}
              nextAppointmentLabel={'nextAppointmentLabel' in p ? p.nextAppointmentLabel : undefined}
              nextAppointmentDate={'nextAppointmentDate' in p ? p.nextAppointmentDate : undefined}
              onCallClick={() => {}}
              onBookClick={p.hasBook ? () => {} : undefined}
            />
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
