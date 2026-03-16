import type { ReactNode } from 'react'
import { PlatformToggle } from './PlatformToggle'

interface DocLayoutProps {
  title: string
  description?: string
  children: ReactNode
}

export function DocLayout({ title, description, children }: DocLayoutProps) {
  return (
    <div className="flex-1 min-h-screen bg-neutral-extra-subtle">
      {/* Page Header */}
      <div className="bg-white border-b border-neutral-border-light px-xxl py-xl flex items-start justify-between gap-xl">
        <div>
          <h1 className="font-display text-[28px] text-neutral leading-tight">
            {title}
          </h1>
          {description && (
            <p className="font-default text-[15px] text-neutral-text-light mt-xxs leading-relaxed max-w-[600px]">
              {description}
            </p>
          )}
        </div>
        <div className="pt-[6px]">
          <PlatformToggle />
        </div>
      </div>

      {/* Page Content */}
      <div className="px-xxl py-xl max-w-[1100px]">
        {children}
      </div>
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────
interface SectionProps {
  title: string
  description?: string
  children: ReactNode
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="mb-xxl">
      <div className="mb-l">
        <h2 className="font-default font-medium text-[18px] text-neutral">{title}</h2>
        {description && (
          <p className="font-default text-[14px] text-neutral-text-light mt-xxs">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}
