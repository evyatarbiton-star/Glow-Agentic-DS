import type { ReactNode } from 'react'

// ============================================================
// LAB — ProviderCard V2 Types
// Status: Draft
// ============================================================

export type NetworkTier = 'in-network' | 'tier-2' | 'tier-3' | 'out-of-network'
export type CostLevel = 'lower' | 'typical' | 'higher'
export type ProviderType = 'male' | 'female' | 'facility'
export type ProviderCardV2Layout = 'vertical' | 'horizontal' | 'responsive'

export interface ProviderCardV2Props {
  /** Card layout — 'responsive' auto-switches at 480px (default: 'responsive') */
  layout?: ProviderCardV2Layout
  /** Provider's full name (required) */
  name: string
  /** Medical specialty (required) */
  specialty: string

  // ── Avatar ──────────────────────────────────────────────────
  /** URL for provider photo */
  photoUrl?: string
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
  /** Label under cost, e.g. "est. out-of-pocket" */
  costLabel?: string
  /** Show the cost comparison chip (default: true) */
  showCostChip?: boolean
  /** Show the entire price section (default: true) */
  showPrice?: boolean

  // ── Appointment ─────────────────────────────────────────────
  /** Appointment label, e.g. "Next available:" */
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
}
