import type { ReactNode, HTMLAttributes } from 'react'

export type AvatarSize = 'sm' | 'md' | 'lg'

export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Size: sm (32px) | md (40px) | lg (48px). Default: md */
  size?: AvatarSize
  /** Image URL. If omitted, shows fallback icon */
  src?: string
  /** Alt text for image */
  alt?: string
  /** Fallback content when no src (initials or icon). Defaults to user silhouette */
  fallback?: ReactNode
  /** Background color override. Default: primary.surface.subtle (#fff8f5) */
  bgColor?: string
  /** Icon/text color for fallback. Default: primary.border.DEFAULT (#fd5201) */
  color?: string
}
