// ============================================================
// GLOW DS — NetworkBadge Types
// ============================================================

export type NetworkTier = 'in-network' | 'tier-2' | 'tier-3' | 'out-of-network'

export type NetworkBadgeSize = 'sm' | 'md'

export interface NetworkBadgeProps {
  /** The network tier to display */
  tier: NetworkTier
  /** Optional network name (e.g., "Aetna") — shown before the label in multi-tier plans */
  networkName?: string
  /** The tier label text (e.g., "In-Network", "Tier 2"). Alias: networkLabel */
  label?: string
  /** Alias for `label` — for backward compatibility with ProviderCard */
  networkLabel?: string
  /** Wrap in a pill with grey border (default: true) */
  bordered?: boolean
  /** Badge size (default: "sm") */
  size?: NetworkBadgeSize
}
