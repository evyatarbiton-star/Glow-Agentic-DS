// ZoeThinkingLoader — Figma: node-id=2858:188906
import { useState, useEffect, useRef, useCallback, useId, useMemo } from 'react'
import { semanticColors as sc } from '../../../../tokens/semantic/colors'
import { typographyStyles } from '../../../../tokens/semantic/typography'
import ZoeDefaultIcon from '../../Icon/icons/line/ZoeDefault'
import type { ZoeThinkingLoaderProps } from './ZoeThinkingLoader.types'

const TEXT_COLOR = sc.neutral.text.light                      // #8a8a8a
const PARAGRAPH_M = typographyStyles['paragraph-m']           // 16px/19px

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

const DELAY_BEFORE_START = 0
const ENTRANCE_WORD_STAGGER = 150
const ENTRANCE_DURATION = 500
const EXIT_WORD_STAGGER = 70
const EXIT_DURATION = 400
const MESSAGE_VISIBLE_TIME = 2100
const FAST_EXIT_DURATION = 200
const FAST_EXIT_STAGGER = 30
const SPIN_LOOP_DURATION = 3500
const MIN_SPIN_LOOPS = 2
const MIN_DISPLAY_TIME = SPIN_LOOP_DURATION * MIN_SPIN_LOOPS

const ICON_SIZE = 40                                          // 40px
const ICON_WRAPPER = 48                                       // 48px
const FONT_SIZE = Number.parseInt(PARAGRAPH_M.fontSize)       // 16
const LINE_HEIGHT_NUM = Number.parseInt(PARAGRAPH_M.lineHeight) // 19

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
  const startedAtRef = useRef(0)

  const setIndexRef = useRef(0)
  useEffect(() => {
    if (isThinking) {
      setIndexRef.current = Math.floor(Math.random() * messageSets.length)
    }
  }, [isThinking, messageSets.length])

  const chosenSet = messageSets[setIndexRef.current] || messageSets[0]
  const currentMessage = chosenSet[messageIndex] || ''
  const words = currentMessage.split(' ')

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

  const triggerFastExit = useCallback(() => {
    setFastExit(true)
    setPhase('exiting')
  }, [])

  useEffect(() => {
    if (isThinking) {
      reset()
      startedAtRef.current = Date.now() + delay
      delayTimer.current = setTimeout(() => {
        setStarted(true)
        setPhase('entering')
      }, delay)
    } else {
      // Wait until end of current spin loop and at least MIN_SPIN_LOOPS completed before exiting
      if (started && phase !== 'idle') {
        const elapsed = Date.now() - startedAtRef.current
        // How far into the current loop are we?
        const posInLoop = elapsed % SPIN_LOOP_DURATION
        const timeToEndOfLoop = SPIN_LOOP_DURATION - posInLoop
        // How many full loops completed?
        const completedLoops = Math.floor(elapsed / SPIN_LOOP_DURATION)

        let waitTime: number
        if (completedLoops >= MIN_SPIN_LOOPS) {
          waitTime = timeToEndOfLoop
        } else {
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

  useEffect(() => {
    if (!started || phase === 'idle') return
    if (phaseTimer.current) clearTimeout(phaseTimer.current)

    if (phase === 'entering') {
      const totalEntrance = ENTRANCE_DURATION + (words.length - 1) * ENTRANCE_WORD_STAGGER
      phaseTimer.current = setTimeout(() => setPhase('visible'), totalEntrance)
    }

    if (phase === 'visible') {
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
        const next = (messageIndex + 1) % chosenSet.length
        setMessageIndex(next)
        setPhase('entering')
      }, totalExit)
    }

    return () => { if (phaseTimer.current) clearTimeout(phaseTimer.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, started, messageIndex, fastExit])

  if (!started) return null

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
    return { opacity: 1 }
  }

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
    fontFamily: PARAGRAPH_M.fontFamily,
    fontSize: FONT_SIZE,
    lineHeight: `${LINE_HEIGHT_NUM}px`,
    color: TEXT_COLOR,
    minHeight: LINE_HEIGHT_NUM,
    alignItems: 'center',
  }

  return (
    <div className={className} style={wrapperStyle}>
      <style>{animCSS}</style>

      {showIcon && (
        <div style={iconStyle}>
          <ZoeDefaultIcon size={ICON_SIZE} />
        </div>
      )}

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
