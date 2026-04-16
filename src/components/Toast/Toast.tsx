import { useEffect, useRef, useCallback, useState, useId } from 'react'
import type { ToastProps, ToastVariant } from './Toast.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticRadii } from '../../../tokens/semantic/radii'
import { semanticShadows } from '../../../tokens/semantic/shadows'
import { fontWeights } from '../../../tokens/primitive/typography'
import type { ReactNode } from 'react'

// Icons — imported from DS icon library
import WarningSolid from '../Icon/icons/solid/Warning'
import CheckCrFrSolid from '../Icon/icons/solid/CheckCrFr'
import CloseCrFrSolid from '../Icon/icons/solid/CloseCrFr'
import InfoCrFrSolid from '../Icon/icons/solid/InfoCrFr'
import CloseLine from '../Icon/icons/line/Close'

// Toast Component — Figma node-id=149:1555
// Position: bottom-center, max-width 709px
// Background: neutral.surface.focused (#404040)
// Text: neutral.text.negative (white)
// Radius: xxs (8px), shadow: card/hover

// ── Token constants ────────────────────────────────────────
const TOAST_BG = sc.neutral.surface.focused            // #404040
const TOAST_TEXT = sc.neutral.text.negative              // #ffffff
const TOAST_RADIUS = semanticRadii.xxs                   // 8px
const TOAST_SHADOW = semanticShadows.toast                // 0px 2px 8px 0px rgba(0,0,0,0.16)
const TOAST_MAX_WIDTH = 709                              // Figma max-width
const TOAST_PADDING_X = 16                               // spacing.s
const TOAST_PADDING_Y = 12                               // spacing.xs
const TOAST_GAP = 12                                     // spacing.xs
const TOAST_CONTENT_GAP = 20                             // spacing.m

const ACTION_BG = sc.neutral.surface.negative            // #ffffff
const ACTION_TEXT = sc.neutral.text.DEFAULT               // #000000
const ACTION_BORDER = sc.neutral.border.strong           // #e0e0e0
const ACTION_RADIUS = semanticRadii.xxs                  // 8px
const ACTION_HEIGHT = 36                                 // xs button height
const ACTION_PADDING_X = 12

const ICON_SIZE = 24
const CLOSE_SIZE = 20

// ── Default icons per variant ──────────────────────────────
const variantIcons: Record<ToastVariant, ReactNode> = {
  default: <WarningSolid size="lg" />,
  warning: <WarningSolid size="lg" />,
  success: <CheckCrFrSolid size="lg" />,
  error:   <CloseCrFrSolid size="lg" />,
  info:    <InfoCrFrSolid size="lg" />,
}

// ── Variant icon colors ────────────────────────────────────
const variantIconColors: Record<ToastVariant, string> = {
  default: sc['accent-yellow'].surface.DEFAULT,  // #ffdb57
  warning: sc['accent-yellow'].surface.DEFAULT,  // #ffdb57
  success: sc.neutral.text.negative,             // #ffffff
  error:   sc.error.surface.DEFAULT,             // #ef2929
  info:    sc.neutral.text.negative,             // #ffffff
}

export default function Toast({
  message,
  variant = 'default',
  iconLeft,
  hideIcon = false,
  action,
  showClose = true,
  onClose,
  duration = 5000,
  open = true,
  className,
}: ToastProps) {
  const animId = useId()
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [visible, setVisible] = useState(open)
  const [exiting, setExiting] = useState(false)

  const dismiss = useCallback(() => {
    setExiting(true)
    setTimeout(() => {
      setVisible(false)
      onClose?.()
    }, 200) // match exit animation
  }, [onClose])

  // Auto-dismiss
  useEffect(() => {
    if (!open || duration === 0) return
    timerRef.current = setTimeout(dismiss, duration)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [open, duration, dismiss])

  // Sync open prop
  useEffect(() => {
    if (open) {
      setVisible(true)
      setExiting(false)
    }
  }, [open])

  if (!visible) return null

  const icon = hideIcon ? null : (iconLeft || variantIcons[variant])
  const iconColor = variantIconColors[variant]

  const slideInName = `toast-slide-in-${animId.replace(/:/g, '')}`
  const slideOutName = `toast-slide-out-${animId.replace(/:/g, '')}`

  return (
    <>
      <style>{`
        @keyframes ${slideInName} {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ${slideOutName} {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(16px); }
        }
      `}</style>
      <div
        role="alert"
        aria-live="polite"
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: TOAST_GAP,
          maxWidth: TOAST_MAX_WIDTH,
          width: '100%',
          paddingLeft: TOAST_PADDING_X,
          paddingRight: TOAST_PADDING_Y,
          paddingTop: TOAST_PADDING_Y,
          paddingBottom: TOAST_PADDING_Y,
          backgroundColor: TOAST_BG,
          borderRadius: TOAST_RADIUS,
          boxShadow: TOAST_SHADOW,
          animation: `${exiting ? slideOutName : slideInName} 0.2s ease-out forwards`,
          boxSizing: 'border-box',
        }}
      >
        {/* Left icon */}
        {icon && (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              width: ICON_SIZE,
              height: ICON_SIZE,
              color: iconColor,
            }}
          >
            {icon}
          </span>
        )}

        {/* Content: message + optional action */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: TOAST_CONTENT_GAP,
            flex: '1 0 0',
            minWidth: 0,
          }}
        >
          {/* Message text */}
          <p
            style={{
              flex: '1 0 0',
              margin: 0,
              fontFamily: 'var(--font-default, "Founders Grotesk", sans-serif)',
              fontSize: 14,
              lineHeight: '17px',
              fontWeight: fontWeights.regular,
              color: TOAST_TEXT,
            }}
          >
            {message}
          </p>

          {/* Action button */}
          {action && (
            <button
              onClick={action.onClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                height: ACTION_HEIGHT,
                paddingLeft: ACTION_PADDING_X,
                paddingRight: ACTION_PADDING_X,
                backgroundColor: ACTION_BG,
                color: ACTION_TEXT,
                border: `1px solid ${ACTION_BORDER}`,
                borderRadius: ACTION_RADIUS,
                fontFamily: 'var(--font-default, "Founders Grotesk", sans-serif)',
                fontSize: 14,
                lineHeight: '18px',
                fontWeight: fontWeights.medium,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {action.label}
            </button>
          )}
        </div>

        {/* Close button */}
        {showClose && (
          <button
            onClick={dismiss}
            aria-label="Close notification"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              width: CLOSE_SIZE,
              height: CLOSE_SIZE,
              padding: 0,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: TOAST_TEXT,
            }}
          >
            <CloseLine size="md" />
          </button>
        )}
      </div>
    </>
  )
}
