import { useState, useRef, useCallback, useEffect } from 'react'

// ============================================================
// useStreamingText — reveals text progressively (char or word)
// Used by Zoe chat to simulate AI typing
// ============================================================

export interface UseStreamingTextOptions {
  /** 'char' = character-by-character, 'word' = word-by-word. Default: 'char' */
  mode?: 'char' | 'word'
  /** Interval in ms between ticks. Default: 18 for char, 60 for word */
  intervalMs?: number
  /** Units per tick (chars or words). Default: 1 */
  speed?: number
  /** Called when all text has been revealed */
  onComplete?: () => void
}

export interface UseStreamingTextReturn {
  /** The currently visible portion of the text */
  displayedText: string
  /** Whether streaming has finished */
  isComplete: boolean
  /** Start streaming (or restart from beginning) */
  start: () => void
  /** Pause streaming */
  pause: () => void
  /** Reset to empty */
  reset: () => void
  /** Jump to fully revealed */
  skipToEnd: () => void
}

export function useStreamingText(
  fullText: string,
  options: UseStreamingTextOptions = {},
): UseStreamingTextReturn {
  const {
    mode = 'char',
    speed = 1,
    onComplete,
  } = options

  const intervalMs = options.intervalMs ?? (mode === 'char' ? 18 : 60)

  // Current position (char index or word index)
  const [position, setPosition] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  // Refs for stable callbacks
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const fullTextRef = useRef(fullText)
  fullTextRef.current = fullText

  // Compute total units
  const words = fullText.split(/(\s+)/) // preserve whitespace tokens
  const totalUnits = mode === 'char' ? fullText.length : words.length

  // Derive displayed text
  const displayedText = mode === 'char'
    ? fullText.slice(0, position)
    : words.slice(0, position).join('')

  // Clear timer helper
  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  // Start / restart
  const start = useCallback(() => {
    clearTimer()
    setPosition(0)
    setIsComplete(false)
    setIsRunning(true)
  }, [clearTimer])

  // Pause
  const pause = useCallback(() => {
    clearTimer()
    setIsRunning(false)
  }, [clearTimer])

  // Reset to empty
  const reset = useCallback(() => {
    clearTimer()
    setPosition(0)
    setIsComplete(false)
    setIsRunning(false)
  }, [clearTimer])

  // Skip to end
  const skipToEnd = useCallback(() => {
    clearTimer()
    const total = mode === 'char' ? fullTextRef.current.length : fullTextRef.current.split(/(\s+)/).length
    setPosition(total)
    setIsComplete(true)
    setIsRunning(false)
    onCompleteRef.current?.()
  }, [clearTimer, mode])

  // Tick effect — runs the interval when isRunning
  useEffect(() => {
    if (!isRunning) return

    timerRef.current = setInterval(() => {
      setPosition(prev => {
        const next = prev + speed
        const total = mode === 'char'
          ? fullTextRef.current.length
          : fullTextRef.current.split(/(\s+)/).length

        if (next >= total) {
          clearTimer()
          setIsComplete(true)
          setIsRunning(false)
          // Defer callback to avoid setState-in-setState
          setTimeout(() => onCompleteRef.current?.(), 0)
          return total
        }
        return next
      })
    }, intervalMs)

    return () => { clearTimer() }
  }, [isRunning, intervalMs, speed, mode, clearTimer])

  // Cleanup on unmount
  useEffect(() => clearTimer, [clearTimer])

  return {
    displayedText,
    isComplete,
    start,
    pause,
    reset,
    skipToEnd,
  }
}
