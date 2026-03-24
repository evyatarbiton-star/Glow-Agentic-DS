// ============================================================
// GLOW DS — ScrollArea
// Figma: n/a (utility component)
//
// A styled scroll container with a custom scroll indicator.
// Supports horizontal, vertical, or both directions.
// Uses a div-based scrollbar for consistent cross-platform rendering
// (macOS overlay scrollbars hide native CSS-styled scrollbars).
// ============================================================

import { useRef, useState, useEffect, useCallback } from 'react'
import type { ScrollAreaProps } from './ScrollArea.types'

// ── Token Constants ─────────────────────────────────────────
const INDICATOR_SIZE = 4                                   // 4px — thin indicator bar
const INDICATOR_THUMB = '#d4d4d4'                          // neutral — visible on light backgrounds
const INDICATOR_THUMB_HOVER = '#bfbfbf'                    // darker on hover
const INDICATOR_TRACK = '#f0f0f0'                          // subtle track background
const INDICATOR_RADIUS = 2                                 // pill shape (half of 4px)
const INDICATOR_GAP = 8                                    // 8px gap between content and indicator

export function ScrollArea({
  direction = 'vertical',
  maxHeight,
  maxWidth,
  gap,
  snap = false,
  snapAlign = 'start',
  hideScrollbar = false,
  style,
  className,
  children,
}: ScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [thumbRatio, setThumbRatio] = useState(1)          // thumb size as fraction of track
  const [thumbOffset, setThumbOffset] = useState(0)         // thumb position as fraction
  const [isScrollable, setIsScrollable] = useState(false)   // whether content overflows
  const [isDragging, setIsDragging] = useState(false)

  const isHorizontal = direction === 'horizontal'

  // ── Measure scroll state ──────────────────────────────────
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    if (isHorizontal) {
      const ratio = el.clientWidth / el.scrollWidth
      setThumbRatio(Math.min(ratio, 1))
      setThumbOffset(el.scrollWidth > el.clientWidth ? el.scrollLeft / (el.scrollWidth - el.clientWidth) : 0)
      setIsScrollable(el.scrollWidth > el.clientWidth + 1)
    } else {
      const ratio = el.clientHeight / el.scrollHeight
      setThumbRatio(Math.min(ratio, 1))
      setThumbOffset(el.scrollHeight > el.clientHeight ? el.scrollTop / (el.scrollHeight - el.clientHeight) : 0)
      setIsScrollable(el.scrollHeight > el.clientHeight + 1)
    }
  }, [isHorizontal])

  // ── Listen to scroll + resize ─────────────────────────────
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollState()

    el.addEventListener('scroll', updateScrollState, { passive: true })
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    // Also observe children for size changes
    for (const child of el.children) {
      ro.observe(child)
    }

    return () => {
      el.removeEventListener('scroll', updateScrollState)
      ro.disconnect()
    }
  }, [updateScrollState])

  // ── Drag to scroll ────────────────────────────────────────
  const handleTrackClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current
    const track = e.currentTarget
    if (!el || !track) return

    const rect = track.getBoundingClientRect()

    if (isHorizontal) {
      const clickRatio = (e.clientX - rect.left) / rect.width
      const maxScroll = el.scrollWidth - el.clientWidth
      el.scrollTo({ left: clickRatio * maxScroll, behavior: 'smooth' })
    } else {
      const clickRatio = (e.clientY - rect.top) / rect.height
      const maxScroll = el.scrollHeight - el.clientHeight
      el.scrollTo({ top: clickRatio * maxScroll, behavior: 'smooth' })
    }
  }, [isHorizontal])

  const handleThumbMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)

    const el = scrollRef.current
    if (!el) return

    const startPos = isHorizontal ? e.clientX : e.clientY
    const startScroll = isHorizontal ? el.scrollLeft : el.scrollTop

    const onMouseMove = (moveEvent: MouseEvent) => {
      const delta = (isHorizontal ? moveEvent.clientX : moveEvent.clientY) - startPos
      const trackSize = isHorizontal ? el.clientWidth : el.clientHeight
      const contentSize = isHorizontal ? el.scrollWidth : el.scrollHeight
      const scrollDelta = (delta / trackSize) * contentSize

      if (isHorizontal) {
        el.scrollLeft = startScroll + scrollDelta
      } else {
        el.scrollTop = startScroll + scrollDelta
      }
    }

    const onMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }, [isHorizontal])

  // ── Snap styles ───────────────────────────────────────────
  const snapType = snap
    ? direction === 'horizontal'
      ? 'x mandatory'
      : direction === 'vertical'
        ? 'y mandatory'
        : 'both mandatory'
    : undefined

  // ── Container styles ──────────────────────────────────────
  const containerStyle: React.CSSProperties = {
    overflowX: (direction === 'horizontal' || direction === 'both' ? 'auto' : 'hidden') as any,
    overflowY: (direction === 'vertical' || direction === 'both' ? 'auto' : 'hidden') as any,
    WebkitOverflowScrolling: 'touch',
    // Hide native scrollbar — we render our own indicator
    scrollbarWidth: 'none',
    ...(maxHeight != null && { maxHeight }),
    ...(maxWidth != null && { maxWidth }),
    ...(isHorizontal && { display: 'flex', flexDirection: 'row', paddingBlock: 8 }),
    ...(gap != null && isHorizontal && { gap }),
    ...(gap != null && !isHorizontal && { display: 'flex', flexDirection: 'column', gap }),
    ...(snapType && { scrollSnapType: snapType }),
    ...style,
  }

  // ── Hide-native-scrollbar CSS (webkit) ────────────────────
  const hideNativeCSS = `
    .glow-scroll-hide::-webkit-scrollbar { display: none; }
  `

  // ── Show custom indicator? ────────────────────────────────
  const showIndicator = !hideScrollbar && isScrollable

  // ── Indicator track & thumb styles ────────────────────────
  const trackStyle: React.CSSProperties = isHorizontal
    ? {
        width: '100%',
        height: INDICATOR_SIZE,
        marginTop: INDICATOR_GAP,
        borderRadius: INDICATOR_RADIUS,
        background: INDICATOR_TRACK,
        position: 'relative',
        cursor: 'pointer',
        flexShrink: 0,
      }
    : {
        height: '100%',
        width: INDICATOR_SIZE,
        marginLeft: INDICATOR_GAP,
        borderRadius: INDICATOR_RADIUS,
        background: INDICATOR_TRACK,
        position: 'relative',
        cursor: 'pointer',
        flexShrink: 0,
      }

  const thumbPercent = thumbRatio * 100
  const thumbOffsetPercent = thumbOffset * (100 - thumbPercent)

  const thumbStyle: React.CSSProperties = isHorizontal
    ? {
        position: 'absolute',
        top: 0,
        left: `${thumbOffsetPercent}%`,
        width: `${thumbPercent}%`,
        height: '100%',
        borderRadius: INDICATOR_RADIUS,
        background: isDragging ? INDICATOR_THUMB_HOVER : INDICATOR_THUMB,
        transition: isDragging ? 'none' : 'left 0.05s ease-out',
        minWidth: 24,
      }
    : {
        position: 'absolute',
        left: 0,
        top: `${thumbOffsetPercent}%`,
        width: '100%',
        height: `${thumbPercent}%`,
        borderRadius: INDICATOR_RADIUS,
        background: isDragging ? INDICATOR_THUMB_HOVER : INDICATOR_THUMB,
        transition: isDragging ? 'none' : 'top 0.05s ease-out',
        minHeight: 24,
      }

  // ── Wrapper direction ─────────────────────────────────────
  const wrapperStyle: React.CSSProperties = isHorizontal
    ? { display: 'flex', flexDirection: 'column', marginBlock: -8 }  // compensate scroll container paddingBlock
    : { display: 'flex', flexDirection: 'row', ...(maxHeight != null && { maxHeight }) }

  return (
    <div style={wrapperStyle} className={className}>
      <style>{hideNativeCSS}</style>
      <div
        ref={scrollRef}
        className="glow-scroll-hide"
        style={containerStyle}
      >
        {children}
      </div>

      {showIndicator && (
        <div style={trackStyle} onClick={handleTrackClick}>
          <div
            style={thumbStyle}
            onMouseDown={handleThumbMouseDown}
          />
        </div>
      )}
    </div>
  )
}
