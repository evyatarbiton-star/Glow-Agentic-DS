import { DocLayout, Section } from '../layout/DocLayout'
import { Avatar } from '../../components/Avatar'

export function AvatarDoc() {
  return (
    <DocLayout
      title="Avatar"
      description="Displays a user profile image, initials, or fallback icon in a circular container. Supports three sizes with optional color overrides."
    >
      <Section title="Sizes" description="sm (32px), md (40px, default), lg (48px).">
        <div className="flex items-center gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <div className="flex items-center gap-xxs">
            <span className="font-default text-[13px] text-neutral-text-light w-[24px]">sm</span>
            <Avatar size="sm" />
          </div>
          <div className="flex items-center gap-xxs">
            <span className="font-default text-[13px] text-neutral-text-light w-[28px]">md</span>
            <Avatar size="md" />
          </div>
          <div className="flex items-center gap-xxs">
            <span className="font-default text-[13px] text-neutral-text-light w-[24px]">lg</span>
            <Avatar size="lg" />
          </div>
        </div>
      </Section>

      <Section title="With Image" description="Pass a src URL to show a profile photo. The image fills the circle with object-fit: cover.">
        <div className="flex items-center gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <Avatar size="sm" src="https://i.pravatar.cc/64?img=1" alt="User 1" />
          <Avatar size="md" src="https://i.pravatar.cc/80?img=2" alt="User 2" />
          <Avatar size="lg" src="https://i.pravatar.cc/96?img=3" alt="User 3" />
        </div>
      </Section>

      <Section title="With Initials" description="Use the fallback prop to show custom content like initials when no image is available.">
        <div className="flex items-center gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <Avatar size="sm" fallback={<span style={{ fontSize: 12, fontWeight: 500, color: '#fd5201' }}>AB</span>} />
          <Avatar size="md" fallback={<span style={{ fontSize: 14, fontWeight: 500, color: '#fd5201' }}>CD</span>} />
          <Avatar size="lg" fallback={<span style={{ fontSize: 18, fontWeight: 500, color: '#fd5201' }}>EF</span>} />
        </div>
      </Section>

      <Section title="Custom Colors" description="Override bgColor and color to match any context — profile badges, team indicators, etc.">
        <div className="flex items-center gap-m p-m bg-white rounded-xs border border-neutral-border-light">
          <Avatar size="md" bgColor="#e8f5e9" color="#2e7d32" />
          <Avatar size="md" bgColor="#e3f2fd" color="#1565c0" />
          <Avatar size="md" bgColor="#fce4ec" color="#c62828" />
          <Avatar size="md" bgColor="#f3e5f5" color="#6a1b9a" />
        </div>
      </Section>

      <Section title="Usage" description="">
        <div className="bg-white rounded-xs border border-neutral-border-light p-m">
          <div className="bg-neutral-subtle rounded-xxs p-xs">
            <code className="font-mono text-[12px] text-neutral-text-dark whitespace-pre">{`import { Avatar } from 'glow-ds'

{/* Default — shows user icon fallback */}
<Avatar size="md" />

{/* With image */}
<Avatar src="https://example.com/photo.jpg" alt="Jane Doe" />

{/* With initials */}
<Avatar fallback={<span>JD</span>} />

{/* Custom colors */}
<Avatar bgColor="#e3f2fd" color="#1565c0" />`}</code>
          </div>
        </div>
      </Section>
    </DocLayout>
  )
}
