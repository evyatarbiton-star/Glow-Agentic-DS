// ============================================================
// GLOW DS — ZoeThinkingLoader
// Figma: Zoe UI — "Zoe Loader – Text Animation Specs"
//        (node-id=2858:188906)
//
// Animated "fake loader" shown while Zoe is thinking.
// - Spinning Zoe icon (continuous rotation)
// - Word-by-word text animation cycling through 3 messages
// - Starts immediately when isThinking=true (configurable delay)
// - Two built-in message sets, randomly chosen per cycle
//
// Entrance: words fade in one-by-one (150ms stagger, 500ms dur)
// Exit: words fade out one-by-one (70ms stagger, 400ms dur, accelerate)
// ============================================================

import { useState, useEffect, useRef, useCallback, useId, useMemo } from 'react'
import { semanticColors as sc } from '../../../../tokens/semantic/colors'
import { typographyStyles } from '../../../../tokens/semantic/typography'
import ZoeDefaultIcon from '../../Icon/icons/line/ZoeDefault'
import type { ZoeThinkingLoaderProps } from './ZoeThinkingLoader.types'

// ── Token Constants ─────────────────────────────────────────
const TEXT_COLOR = sc.neutral.text.light                      // #8a8a8a — thinking text
const PARAGRAPH_M = typographyStyles['paragraph-m']           // 16px / 19px — paragraph/medium

// ── Default Message Sets ────────────────────────────────────
const DEFAULT_MESSAGE_SETS: string[][] = [
  [
    'Assigning to AI agent...',
    'Cross-checking information...',
    'Almost there, finalizing response...',
  ],
  [
    'Reasoning through your options...',
    'Analyzing data...',
    'Finalizing your structured answer...',
  ],
]

// ── Animation Constants (from Figma spec) ───────────────────
const DELAY_BEFORE_START = 0                                   // show loader immediately
const ENTRANCE_WORD_STAGGER = 150                             // ms between each word fade-in
const ENTRANCE_DURATION = 500                                 // ms per word fade-in
const EXIT_WORD_STAGGER = 70                                  // ms between each word fade-out
const EXIT_DURATION = 400                                     // ms per word fade-out
const MESSAGE_VISIBLE_TIME = 2100                             // ms message stays fully visible
const FAST_EXIT_DURATION = 200                                // ms per word in fast exit
const FAST_EXIT_STAGGER = 30                                  // ms stagger in fast exit
const SPIN_LOOP_DURATION = 3500                                // ms per spin loop
const MIN_SPIN_LOOPS = 2                                       // minimum loops before exit allowed
const MIN_DISPLAY_TIME = SPIN_LOOP_DURATION * MIN_SPIN_LOOPS   // 7000ms

const ICON_SIZE = 40                                          // Zoe icon render size
const ICON_WRAPPER = 48                                       // wrapper with 4px padding
const FONT_SIZE = Number.parseInt(PARAGRAPH_M.fontSize)       // 16
const LINE_HEIGHT_NUM = Number.parseInt(PARAGRAPH_M.lineHeight) // 19

// ── Phase type ──────────────────────────────────────────────
type Phase = 'idle' | 'entering' | 'visible' | 'exiting'

export function ZoeThinkingLoader({
  isThinking,
  messageSets = DEFAULT_MESSAGE_SETS,
  delay = DELAY_BEFORE_START,
  showIcon = true,
  onExitComplete,
  className,
  style,
}: ZoeThinkingLoaderProps) {
  const instanceId = useId().replace(/:/g, '')
  const [started, setStarted] = useState(false)               // past delay
  const [messageIndex, setMessageIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('idle')
  const [fastExit, setFastExit] = useState(false)

  const delayTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const phaseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const minTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const startedAtRef = useRef(0)                                // timestamp when animation started

  // ── Pick random set when thinking starts ──────────────────
  const setIndexRef = useRef(0)
  useEffect(() => {
    if (isThinking) {
      setIndexRef.current = Math.floor(Math.random() * messageSets.length)
    }
  }, [isThinking, messageSets.length])

  const chosenSet = messageSets[setIndexRef.current] || messageSets[0]
  const currentMessage = chosenSet[messageIndex] || ''
  const words = currentMessage.split(' ')

  // ── Helpers ───────────────────────────────────────────────
  const clearAllTimers = useCallback(() => {
    if (delayTimer.current) { clearTimeout(delayTimer.current); delayTimer.current = null }
    if (phaseTimer.current) { clearTimeout(phaseTimer.current); phaseTimer.current = null }
    if (minTimer.current) { clearTimeout(minTimer.current); minTimer.current = null }
  }, [])

  const onExitCompleteRef = useRef(onExitComplete)
  onExitCompleteRef.current = onExitComplete

  const reset = useCallback((didFastExit = false) => {
    clearAllTimers()
    setStarted(false)
    setMessageIndex(0)
    setPhase('idle')
    setFastExit(false)
    if (didFastExit) {
      onExitCompleteRef.current?.()
    }
  }, [clearAllTimers])

  // ── Trigger fast exit (shared logic) ──────────────────────
  const triggerFastExit = useCallback(() => {
    setFastExit(true)
    setPhase('exiting')
  }, [])

  // ── React to isThinking changes ───────────────────────────
  useEffect(() => {
    if (isThinking) {
      // Start fresh
      reset()
      startedAtRef.current = Date.now() + delay
      delayTimer.current = setTimeout(() => {
        setStarted(true)
        setPhase('entering')
      }, delay)
    } else {
      // Response arrived — NEVER exit mid-loop.
      // Wait until the end of the current spin loop AND at least MIN_SPIN_LOOPS completed.
      if (started && phase !== 'idle') {
        const elapsed = Date.now() - startedAtRef.current
        // How far into the current loop are we?
        const posInLoop = elapsed % SPIN_LOOP_DURATION
        const timeToEndOfLoop = SPIN_LOOP_DURATION - posInLoop
        // How many full loops completed?
        const completedLoops = Math.floor(elapsed / SPIN_LOOP_DURATION)

        let waitTime: number
        if (completedLoops >= MIN_SPIN_LOOPS) {
          // Already past minimum — just wait for current loop to finish
          waitTime = timeToEndOfLoop
        } else {
          // Need more loops — wait for remaining full loops + end of last one
          const remainingLoops = MIN_SPIN_LOOPS - completedLoops - 1
          waitTime = timeToEndOfLoop + remainingLoops * SPIN_LOOP_DURATION
        }

        minTimer.current = setTimeout(triggerFastExit, waitTime)
      } else {
        reset()
      }
    }
    return () => clearAllTimers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isThinking])

  // ── Phase state machine ───────────────────────────────────
  useEffect(() => {
    if (!started || phase === 'idle') return
    if (phaseTimer.current) clearTimeout(phaseTimer.current)

    if (phase === 'entering') {
      const totalEntrance = ENTRANCE_DURATION + (words.length - 1) * ENTRANCE_WORD_STAGGER
      phaseTimer.current = setTimeout(() => setPhase('visible'), totalEntrance)
    }

    if (phase === 'visible') {
      // All messages exit after visible time — last message loops back to first
      phaseTimer.current = setTimeout(() => setPhase('exiting'), MESSAGE_VISIBLE_TIME)
    }

    if (phase === 'exiting') {
      const stagger = fastExit ? FAST_EXIT_STAGGER : EXIT_WORD_STAGGER
      const dur = fastExit ? FAST_EXIT_DURATION : EXIT_DURATION
      const totalExit = dur + (words.length - 1) * stagger

      phaseTimer.current = setTimeout(() => {
        if (fastExit) {
          reset(true)
          return
        }
        // Advance to next message — loop back to first after last
        const next = (messageIndex + 1) % chosenSet.length
        setMessageIndex(next)
        setPhase('entering')
      }, totalExit)
    }

    return () => { if (phaseTimer.current) clearTimeout(phaseTimer.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, started, messageIndex, fastExit])

  // ── Don't render if not active ────────────────────────────
  if (!started) return null

  // ── Build keyframes CSS ───────────────────────────────────
  const enterKf = `zoe-word-enter-${instanceId}`
  const exitKf = `zoe-word-exit-${instanceId}`
  const spinKf = `zoe-spin-${instanceId}`

  const exitEasing = fastExit ? 'ease-out' : 'cubic-bezier(1, 0, 1, 1)'
  const exitDur = fastExit ? FAST_EXIT_DURATION : EXIT_DURATION
  const exitStagger = fastExit ? FAST_EXIT_STAGGER : EXIT_WORD_STAGGER

  const animCSS = `
    @keyframes ${enterKf} {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes ${exitKf} {
      from { opacity: 1; }
      to   { opacity: 0; }
    }
    @keyframes ${spinKf} {
      0%   { transform: rotate(0deg);    animation-timing-function: ease-out; }
      12%  { transform: rotate(-180deg); animation-timing-function: cubic-bezier(0.2, 0, 0.2, 1); }
      80%  { transform: rotate(540deg); }
      100% { transform: rotate(540deg); }
    }
  `

  // ── Per-word animation style ──────────────────────────────
  const getWordAnimation = (index: number): React.CSSProperties => {
    if (phase === 'entering') {
      return {
        opacity: 0,
        animation: `${enterKf} ${ENTRANCE_DURATION}ms ease ${index * ENTRANCE_WORD_STAGGER}ms forwards`,
      }
    }
    if (phase === 'exiting') {
      return {
        opacity: 1,
        animation: `${exitKf} ${exitDur}ms ${exitEasing} ${index * exitStagger}ms forwards`,
      }
    }
    // visible
    return { opacity: 1 }
  }

  // ── Styles ────────────────────────────────────────────────
  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 0,
    ...style,
  }

  const iconStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: ICON_WRAPPER,
    height: ICON_WRAPPER,
    flexShrink: 0,
    animation: `${spinKf} ${SPIN_LOOP_DURATION}ms infinite`,
  }

  const textStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0 5px',
    fontFamily: PARAGRAPH_M.fontFamily,                        // Founders Grotesk, sans-serif
    fontSize: FONT_SIZE,
    lineHeight: `${LINE_HEIGHT_NUM}px`,
    color: TEXT_COLOR,
    minHeight: LINE_HEIGHT_NUM,
    alignItems: 'center',
  }

  return (
    <div className={className} style={wrapperStyle}>
      <style>{animCSS}</style>

      {/* Spinning Zoe icon — runs independently, unaffected by text */}
      {showIcon && (
        <div style={iconStyle}>
          <ZoeDefaultIcon size={ICON_SIZE} />
        </div>
      )}

      {/* Word-by-word animated text */}
      <div style={textStyle} key={`msg-${messageIndex}-${phase}`}>
        {words.map((word, i) => (
          <span key={i} style={getWordAnimation(i)}>
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
