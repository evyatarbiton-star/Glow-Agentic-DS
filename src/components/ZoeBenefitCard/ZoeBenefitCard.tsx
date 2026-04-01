// ZoeBenefitCard — Figma: node-id=11584:134644
import { useState } from 'react'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../tokens/semantic/radii'
import ChevronRightLine from '../Icon/icons/line/ChevronRight'
import type { ZoeBenefitCardProps } from './ZoeBenefitCard.types'

const PADDING = semanticSpacing.xs                              // 12px
const GAP = semanticSpacing.s                                   // 16px
const CARD_RADIUS = semanticRadii.ln                            // 24px
const IMAGE_RADIUS = semanticRadii.sn                           // 16px
const IMAGE_SIZE = 88                                           // 88px
const CHEVRON_SIZE = 36                                         // 36px
const CHEVRON_ICON_SIZE = 20                                    // 20px
const META_ICON_SIZE = 20                                       // 20px
const META_GAP = 4                                              // 4px

const TITLE_STYLE = typographyStyles['display-xxxxs']           // Tiempos 20px/24px
const SUBTITLE_STYLE = typographyStyles['paragraph-m']          // Founders 16px/19px
const META_TEXT_STYLE = typographyStyles['paragraph-l']         // Founders 18px/21px

const TITLE_COLOR = sc.neutral.text.DEFAULT                     // #000000
const SUBTITLE_COLOR = sc.neutral.text.dark                     // #404040
const META_TEXT_COLOR = sc.neutral.text.DEFAULT                  // #000000
const CHEVRON_BG = sc.neutral.surface.negative                  // #ffffff
const CHEVRON_BORDER = sc.neutral.border.strong                 // #e0e0e0

const HOVER_SHADOW = '0px 2px 8px rgba(0, 0, 0, 0.16)'         // Figma "Card/Hover"
const HOVER_BG = sc.neutral.surface.negative                    // #ffffff

export function ZoeBenefitCard({
  title,
  subtitle,
  imageSrc,
  imageAlt = '',
  iconElement,
  iconBgColor,
  metaIcon,
  metaText,
  isActive = false,
  onClick,
  className,
  style,
}: ZoeBenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const showHighlight = isHovered || isActive

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: GAP,
    padding: PADDING,
    borderRadius: CARD_RADIUS,
    cursor: onClick ? 'pointer' : 'default',
    transition: 'background-color 150ms ease, box-shadow 150ms ease',
    backgroundColor: showHighlight ? HOVER_BG : 'transparent',
    boxShadow: showHighlight ? HOVER_SHADOW : 'none',
    ...style,
  }

  const thumbnailStyle: React.CSSProperties = {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    minWidth: IMAGE_SIZE,
    borderRadius: IMAGE_RADIUS,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: iconBgColor || 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  }

  const contentStyle: React.CSSProperties = {
    flex: '1 1 0',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: GAP,
  }

  const titleTextStyle: React.CSSProperties = {
    fontFamily: TITLE_STYLE.fontFamily,
    fontSize: TITLE_STYLE.fontSize,
    lineHeight: TITLE_STYLE.lineHeight,
    fontWeight: TITLE_STYLE.fontWeight,
    letterSpacing: TITLE_STYLE.letterSpacing,
    color: TITLE_COLOR,
    margin: 0,
  }

  const subtitleTextStyle: React.CSSProperties = {
    fontFamily: SUBTITLE_STYLE.fontFamily,
    fontSize: SUBTITLE_STYLE.fontSize,
    lineHeight: SUBTITLE_STYLE.lineHeight,
    fontWeight: SUBTITLE_STYLE.fontWeight,
    letterSpacing: SUBTITLE_STYLE.letterSpacing,
    color: SUBTITLE_COLOR,
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }

  const titleBlockStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  }

  const metaRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: META_GAP,
  }

  const metaTextStyle: React.CSSProperties = {
    fontFamily: META_TEXT_STYLE.fontFamily,
    fontSize: META_TEXT_STYLE.fontSize,
    lineHeight: META_TEXT_STYLE.lineHeight,
    fontWeight: META_TEXT_STYLE.fontWeight,
    letterSpacing: META_TEXT_STYLE.letterSpacing,
    color: META_TEXT_COLOR,
    whiteSpace: 'nowrap',
  }

  const metaIconWrapStyle: React.CSSProperties = {
    width: META_ICON_SIZE,
    height: META_ICON_SIZE,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const chevronStyle: React.CSSProperties = {
    width: CHEVRON_SIZE,
    height: CHEVRON_SIZE,
    minWidth: CHEVRON_SIZE,
    borderRadius: '50%',
    backgroundColor: CHEVRON_BG,
    border: `1px solid ${CHEVRON_BORDER}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }

  return (
    <div
      className={className}
      style={containerStyle}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } } : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-pressed={isActive || undefined}
    >
      {/* Thumbnail */}
      <div style={thumbnailStyle}>
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} style={imgStyle} />
        ) : iconElement ? (
          iconElement
        ) : null}
      </div>

      <div style={contentStyle}>
        <div style={titleBlockStyle}>
          <p style={titleTextStyle}>{title}</p>
          {subtitle && <p style={subtitleTextStyle}>{subtitle}</p>}
        </div>

        {metaText && (
          <div style={metaRowStyle}>
            {metaIcon && <div style={metaIconWrapStyle}>{metaIcon}</div>}
            <span style={metaTextStyle}>{metaText}</span>
          </div>
        )}
      </div>

      <div style={chevronStyle}>
        <ChevronRightLine size={CHEVRON_ICON_SIZE} />
      </div>
    </div>
  )
}
