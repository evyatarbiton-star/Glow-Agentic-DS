import type { AvatarProps, AvatarSize } from './Avatar.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import UserLine from '../Icon/icons/line/User'

// ============================================================
// GLOW DS — Avatar Component
// Source: Figma Web DS — node-id=149-7867 (Profile button)
// URL: https://www.figma.com/design/ke9Y1BHl3xvX8UMRRAMQ9T/Web-DS?node-id=149-7867
//
// Sizes:    sm (32px) | md (40px) | lg (48px)
// Features: image, fallback icon, custom fallback (initials)
// ============================================================

// ── Size Definitions ────────────────────────────────────────
const sizes: Record<AvatarSize, { box: number; icon: number }> = {
  sm: { box: 32, icon: 14 },  // spacing.xl
  md: { box: 40, icon: 16 },  // spacing.xxl
  lg: { box: 48, icon: 20 },  // spacing.xxxl
}

// ── Token Constants ─────────────────────────────────────────
const RADIUS     = 999                           // radii.full
const DEFAULT_BG = sc.primary.surface.subtle     // #fff8f5
const DEFAULT_FG = sc.primary.border.DEFAULT     // #fd5201

// ── DS Icon (inline SVG replaced) ───────────────────────────

// ── Component ───────────────────────────────────────────────
export function Avatar({
  size     = 'md',
  src,
  alt      = '',
  fallback,
  bgColor,
  color,
  className = '',
  style: styleProp,
  ...props
}: AvatarProps) {
  const s   = sizes[size]
  const bg  = bgColor ?? DEFAULT_BG
  const fg  = color   ?? DEFAULT_FG

  const baseStyle: React.CSSProperties = {
    width:           s.box,
    height:          s.box,
    borderRadius:    RADIUS,
    backgroundColor: src ? 'transparent' : bg,
    overflow:        'hidden',
    ...styleProp,
  }

  return (
    <div
      className={['inline-flex items-center justify-center shrink-0', className]
        .filter(Boolean)
        .join(' ')}
      style={baseStyle}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{
            width:     '100%',
            height:    '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        fallback ?? <UserLine size={s.icon} style={{ color: fg }} />
      )}
    </div>
  )
}
