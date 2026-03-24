// ============================================================
// GLOW DS — ZoeProviderCard
// Figma: Zoe UI — Provider answer type
//
// Thin wrapper around ProviderCard for the Zoe chat context.
// Adds active state (persistent shadow when drawer is open)
// and future Zoe-specific customizations.
//
// Use this in Zoe conversations instead of ProviderCard directly.
// ============================================================

import { ProviderCard } from '../../ProviderCard'
import type { ZoeProviderCardProps } from './ZoeProviderCard.types'

export function ZoeProviderCard({ isActive, ...props }: ZoeProviderCardProps) {
  return <ProviderCard {...props} isActive={isActive} />
}
