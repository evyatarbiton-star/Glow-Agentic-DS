import { useState, useRef, useCallback, useEffect } from 'react'
import { useStreamingText } from './useStreamingText'

// ============================================================
// useResponseSequence — orchestrates Zoe's full response flow:
//   thinking → streaming text → revealing blocks → complete
//
// Each phase waits for the previous to finish before starting.
// ============================================================

export type ResponsePhase = 'idle' | 'thinking' | 'streaming' | 'revealing' | 'complete'

export interface ResponseBlock {
  /** Block type — used by the consumer to decide which component to render */
  type: string
  /** Arbitrary data for the block */
  data: unknown
}

export interface ZoeResponse {
  /** Main text to stream */
  text: string
  /** Content blocks to reveal sequentially after text (cards, providers, etc.) */
  blocks?: ResponseBlock[]
  /** Optional follow-up text after all blocks */
  afterText?: string
}

export interface UseResponseSequenceOptions {
  /** Streaming mode: 'char' or 'word'. Default: 'char' */
  streamingMode?: 'char' | 'word'
  /** Streaming interval in ms. Default: 18 for char, 60 for word */
  streamingIntervalMs?: number
  /** Streaming speed (units per tick). Default: 1 */
  streamingSpeed?: number
  /** Delay between each block reveal in ms. Default: 300 */
  blockRevealDelayMs?: number
  /** Delay before after-text appears in ms. Default: 200 */
  afterTextDelayMs?: number
  /** Called when all phases complete */
  onComplete?: () => void
  /** Called on each phase transition */
  onPhaseChange?: (phase: ResponsePhase) => void
}

export interface UseResponseSequenceReturn {
  /** Current phase */
  phase: ResponsePhase
  /** Text to display (partial during streaming, full after) */
  visibleText: string
  /** Indices of blocks revealed so far */
  revealedBlockIndices: number[]
  /** Whether after-text is visible */
  showAfterText: boolean
  /** Whether the entire sequence is done */
  isComplete: boolean
  /** The current response being sequenced */
  response: ZoeResponse | null
  /** Signal thinking has started */
  startThinking: () => void
  /** Start streaming (call from ZoeThinkingLoader onExitComplete) */
  startStreaming: (response: ZoeResponse) => void
  /** Reset everything to idle */
  reset: () => void
  /** Skip remaining animations and reveal everything */
  skipToEnd: () => void
}

export function useResponseSequence(
  options: UseResponseSequenceOptions = {},
): UseResponseSequenceReturn {
  const {
    streamingMode = 'char',
    streamingSpeed = 1,
    blockRevealDelayMs = 300,
    afterTextDelayMs = 200,
    onComplete,
    onPhaseChange,
  } = options

  const streamingIntervalMs = options.streamingIntervalMs ?? (streamingMode === 'char' ? 18 : 60)

  const [phase, setPhase] = useState<ResponsePhase>('idle')
  const [response, setResponse] = useState<ZoeResponse | null>(null)
  const [revealedBlockIndices, setRevealedBlockIndices] = useState<number[]>([])
  const [showAfterText, setShowAfterText] = useState(false)

  // Stable refs for callbacks
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete
  const onPhaseChangeRef = useRef(onPhaseChange)
  onPhaseChangeRef.current = onPhaseChange
  const responseRef = useRef<ZoeResponse | null>(null)
  const blockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const afterTextTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Phase change side-effect
  const updatePhase = useCallback((p: ResponsePhase) => {
    setPhase(p)
    setTimeout(() => onPhaseChangeRef.current?.(p), 0)
  }, [])

  // ── Streaming text hook ──────────────────────────────────────
  const handleStreamComplete = useCallback(() => {
    const resp = responseRef.current
    if (resp?.blocks && resp.blocks.length > 0) {
      updatePhase('revealing')
    } else if (resp?.afterText) {
      // No blocks but has afterText — show it then complete
      setShowAfterText(true)
      updatePhase('complete')
      setTimeout(() => onCompleteRef.current?.(), 0)
    } else {
      updatePhase('complete')
      setTimeout(() => onCompleteRef.current?.(), 0)
    }
  }, [updatePhase])

  const streaming = useStreamingText(response?.text ?? '', {
    mode: streamingMode,
    intervalMs: streamingIntervalMs,
    speed: streamingSpeed,
    onComplete: handleStreamComplete,
  })

  // ── Block reveal sequencer ───────────────────────────────────
  useEffect(() => {
    if (phase !== 'revealing') return

    const blocks = responseRef.current?.blocks
    if (!blocks || blocks.length === 0) return

    let currentIndex = 0

    const revealNext = () => {
      if (currentIndex >= blocks.length) {
        // All blocks revealed — handle afterText
        const resp = responseRef.current
        if (resp?.afterText) {
          afterTextTimerRef.current = setTimeout(() => {
            setShowAfterText(true)
            updatePhase('complete')
            setTimeout(() => onCompleteRef.current?.(), 0)
          }, afterTextDelayMs)
        } else {
          updatePhase('complete')
          setTimeout(() => onCompleteRef.current?.(), 0)
        }
        return
      }

      blockTimerRef.current = setTimeout(() => {
        setRevealedBlockIndices(prev => [...prev, currentIndex])
        currentIndex++
        revealNext()
      }, currentIndex === 0 ? blockRevealDelayMs : blockRevealDelayMs)
    }

    revealNext()

    return () => {
      if (blockTimerRef.current) clearTimeout(blockTimerRef.current)
      if (afterTextTimerRef.current) clearTimeout(afterTextTimerRef.current)
    }
  }, [phase, blockRevealDelayMs, afterTextDelayMs, updatePhase])

  // ── Public API ───────────────────────────────────────────────
  const startThinking = useCallback(() => {
    updatePhase('thinking')
    setResponse(null)
    responseRef.current = null
    setRevealedBlockIndices([])
    setShowAfterText(false)
    streaming.reset()
  }, [updatePhase, streaming])

  const startStreaming = useCallback((resp: ZoeResponse) => {
    responseRef.current = resp
    setResponse(resp)
    setRevealedBlockIndices([])
    setShowAfterText(false)
    updatePhase('streaming')
    // Start the streaming text hook on next tick (after state updates)
    setTimeout(() => streaming.start(), 0)
  }, [updatePhase, streaming])

  const reset = useCallback(() => {
    if (blockTimerRef.current) clearTimeout(blockTimerRef.current)
    if (afterTextTimerRef.current) clearTimeout(afterTextTimerRef.current)
    streaming.reset()
    setPhase('idle')
    setResponse(null)
    responseRef.current = null
    setRevealedBlockIndices([])
    setShowAfterText(false)
  }, [streaming])

  const skipToEnd = useCallback(() => {
    if (blockTimerRef.current) clearTimeout(blockTimerRef.current)
    if (afterTextTimerRef.current) clearTimeout(afterTextTimerRef.current)

    const resp = responseRef.current
    if (resp) {
      streaming.skipToEnd()
      if (resp.blocks) {
        setRevealedBlockIndices(resp.blocks.map((_, i) => i))
      }
      if (resp.afterText) {
        setShowAfterText(true)
      }
    }
    updatePhase('complete')
    setTimeout(() => onCompleteRef.current?.(), 0)
  }, [streaming, updatePhase])

  return {
    phase,
    visibleText: phase === 'streaming' ? streaming.displayedText : (response?.text ?? ''),
    revealedBlockIndices,
    showAfterText,
    isComplete: phase === 'complete',
    response,
    startThinking,
    startStreaming,
    reset,
    skipToEnd,
  }
}
