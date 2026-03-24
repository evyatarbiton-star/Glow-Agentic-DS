import type { ProviderCardProps } from '../../ProviderCard'

export interface ZoeProviderCardProps extends ProviderCardProps {
  /** Persistent highlight — keeps shadow active when this card's drawer is open */
  isActive?: boolean
}
