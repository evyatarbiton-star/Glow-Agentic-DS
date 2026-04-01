export interface ZoeBenefitCardProps {
  /** Benefit title (e.g., "Mental Health Visit") */
  title: string
  /** Short subtitle (e.g., "Home visit for individual, family") — single line, truncated */
  subtitle?: string
  /** Photo URL for image variant */
  imageSrc?: string
  /** Alt text for the image */
  imageAlt?: string
  /** Icon/logo element for icon variant (replaces imageSrc) */
  iconElement?: React.ReactNode
  /** Background color for icon variant thumbnail */
  iconBgColor?: string
  /** Icon for the metadata row (20px) */
  metaIcon?: React.ReactNode
  /** Text for the metadata row */
  metaText?: string
  /** Active state — card's drawer is open */
  isActive?: boolean
  /** Click handler — opens the benefit drawer */
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}
