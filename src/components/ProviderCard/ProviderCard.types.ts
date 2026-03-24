import type { ReactNode } from 'react'

// ============================================================
// GLOW DS — ProviderCard Types
// ============================================================

export type NetworkTier = 'in-network' | 'tier-2' | 'tier-3' | 'out-of-network'
export type CostLevel = 'lower' | 'typical' | 'higher' | 'unknown'
export type ProviderType = 'male' | 'female' | 'facility'
export type ProviderCardLayout = 'vertical' | 'horizontal' | 'responsive'

export interface ProviderCardProps {
  /** Card layout — 'responsive' auto-switches at 480px (default: 'responsive') */
  layout?: ProviderCardLayout
  /** Show skeleton/loading state with shimmer animation instead of real content */
  loading?: boolean
  /** Provider's full name (required) */
  name: string
  /** Medical specialty (required) */
  specialty: string

  // ── Avatar ──────────────────────────────────────────────────
  /** URL for provider photo */
  photoUrl?: string
  /** Fallback initials when photo is unavailable (deprecated — use providerType instead) */
  initials?: string
  /** Provider type for avatar fallback icon (default: 'male') */
  providerType?: ProviderType

  // ── Location & Details ──────────────────────────────────────
  /** Physical address */
  address?: string
  /** Distance string, e.g. "0.3 mi" */
  distance?: string
  /** Numeric rating, e.g. 4.5 */
  rating?: number
  /** Number of reviews */
  reviewCount?: number

  // ── Network ─────────────────────────────────────────────────
  /** Insurance network tier */
  networkTier?: NetworkTier
  /** Network name, e.g. "Aetna" */
  networkName?: string
  /** Network tier label, e.g. "In-Network" */
  networkLabel?: string

  // ── Cost ────────────────────────────────────────────────────
  /** Formatted cost string, e.g. "$1,400" */
  cost?: string
  /** Cost comparison level — controls chip color + icon */
  costLevel?: CostLevel
  /** Label under cost, e.g. "est. out-of-pocket". Accepts string or ReactNode. */
  costLabel?: React.ReactNode
  /** Override the cost chip label (e.g. "Expected cost" instead of "Typical cost") */
  costChipLabel?: string
  /** Hide the icon inside the cost chip */
  costChipHideIcon?: boolean
  /** Show the cost comparison chip (default: true) */
  showCostChip?: boolean
  /** Show the entire price section (default: true) */
  showPrice?: boolean
  /** Optional hint text below the price, e.g. "Call provider for an exact estimate" */
  costHint?: React.ReactNode

  // ── Languages ──────────────────────────────────────────────
  /** Languages the provider speaks, e.g. ["English", "Spanish", "Mandarin"] */
  languages?: string[]

  // ── Virtual ───────────────────────────────────────────────
  /** Whether the provider accepts virtual appointments */
  virtualAvailable?: boolean

  // ── Appointment ─────────────────────────────────────────────
  /** Appointment label, e.g. "Next appointment" */
  nextAppointmentLabel?: string
  /** Appointment date, e.g. "Tomorrow at 2:00 PM" */
  nextAppointmentDate?: string

  // ── Interaction ─────────────────────────────────────────────
  /** Show bookmark toggle (default: true) */
  bookmarkable?: boolean
  /** Callback when bookmark state changes */
  onBookmarkChange?: (bookmarked: boolean) => void
  /** Call button click handler — hides button if omitted */
  onCallClick?: () => void
  /** Book button click handler — hides button if omitted */
  onBookClick?: () => void
  /** Makes entire card clickable with hover effect */
  onClick?: () => void
  /** Persistent highlight — keeps shadow active (e.g., when drawer is open for this card) */
  isActive?: boolean
}
