// ZoeProviderCard — Zoe-context wrapper around ProviderCard
import { ProviderCard } from '../../ProviderCard'
import type { ZoeProviderCardProps } from './ZoeProviderCard.types'

export function ZoeProviderCard({ isActive, ...props }: ZoeProviderCardProps) {
  return <ProviderCard {...props} isActive={isActive} />
}
