import { useState, useCallback, useRef, useEffect, useId } from 'react'
import { ZoeInput } from '../../components/_lab/ZoeInput'
import { ZoeThinkingLoader } from '../../components/_lab/ZoeThinkingLoader'
import { ZoeUserBubble } from '../../components/_lab/ZoeUserBubble'
import { ZoeResponseBubble } from '../../components/_lab/ZoeResponseBubble'
import { ZoeBenefitCard } from '../../components/_lab/ZoeBenefitCard'
import ZoeDefaultIcon from '../../components/Icon/icons/line/ZoeDefault'
import LocationLine from '../../components/Icon/icons/line/Location'
import { ZoeChatHeader } from '../../components/_lab/ZoeChatHeader'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { ZoePromptChip } from '../../components/_lab/ZoePromptChip'
import { ZoeDrawer } from '../../components/_lab/ZoeDrawer'
import { Button } from '../../components/Button/Button'
import { ZoeProviderCard } from '../../components/_lab/ZoeProviderCard'


// ============================================================
// LAB DOC — Zoe Chat Demo (Full-Screen)
// Status: Ready
// Figma: Zoe UI — "Chat" (node-id=497:28402)
//
// Full-screen Zoe chat experience matching the product layout:
// - X close button top-left
// - Welcome state: large Zoe icon + greeting + prompt chips (centered)
// - Conversation state: messages + thinking + input
// - Sticky input bar at bottom with disclaimer
// - Welcome content persists — scrolls up when conversation starts
// ============================================================

const PROMPT_CHIPS = [
  { emoji: '\u{1F380}', text: 'Check my breast health benefits' },
  { emoji: '\u{1FA79}', text: 'Find a top-rated acupuncturist' },
  { emoji: '\u{1F338}', text: 'Check my stress support coverage' },
  { emoji: '\u{1F308}', text: 'Check my mental health specialist options' },
]

// ── Benefit cards data for alternative treatments response ────
const BENEFIT_CARDS_DATA = [
  {
    title: 'Acupuncture',
    subtitle: 'Traditional needle therapy',
    imageSrc: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=200&h=200&fit=crop',
    metaText: 'At an outpatient facility',
  },
  {
    title: 'Chiropractic Care',
    subtitle: 'Spinal adjustment therapy',
    imageSrc: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop',
    metaText: 'In-network providers',
  },
  {
    title: 'Massage Therapy',
    subtitle: 'Therapeutic body massage',
    imageSrc: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=200&h=200&fit=crop',
    metaText: 'At an outpatient facility',
  },
  {
    title: 'Naturopathy',
    subtitle: 'Natural medicine approach',
    imageSrc: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop',
    metaText: 'Office visit',
  },
]

const EXTRA_BENEFIT_CARDS: BenefitCardData[] = [
  { title: 'Yoga Therapy', subtitle: 'Mind-body movement practice', imageSrc: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop', metaText: 'At an outpatient facility' },
  { title: 'Meditation Program', subtitle: 'Guided mindfulness sessions', imageSrc: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=200&fit=crop', metaText: 'Virtual or in-person' },
  { title: 'Reflexology', subtitle: 'Pressure point foot therapy', imageSrc: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200&h=200&fit=crop', metaText: 'Office visit' },
  { title: 'Reiki Healing', subtitle: 'Energy-based therapy', imageSrc: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=200&h=200&fit=crop', metaText: 'In-network providers' },
]

const EXTRA_PROVIDER_CARDS: ProviderData[] = [
  { name: 'Dr. Amy Zhao', specialty: 'Holistic Acupuncture', providerType: 'female', networkTier: 'in-network', networkLabel: 'In-Network', address: '330 Pine St', cost: '$90', costLevel: 'lower', rating: 4.4, reviewCount: 56, distance: '5.1 mi' },
  { name: 'Dr. Robert Ellis', specialty: 'Medical Acupuncture', providerType: 'male', networkTier: 'in-network', networkLabel: 'In-Network', address: '900 Cedar Blvd', cost: '$140', costLevel: 'typical', rating: 4.6, reviewCount: 112, distance: '5.8 mi' },
  { name: 'Dr. Sonia Gupta', specialty: 'Acupuncture & Wellness', providerType: 'female', networkTier: 'in-network', networkLabel: 'In-Network', address: '67 Maple Ct', cost: '$100', costLevel: 'lower', rating: 4.3, reviewCount: 41, distance: '6.4 mi' },
  { name: 'Dr. Thomas Lee', specialty: 'Pain & Acupuncture Center', providerType: 'male', networkTier: 'in-network', networkLabel: 'In-Network', address: '2100 Valley Rd', cost: '$115', costLevel: 'typical', rating: 4.8, reviewCount: 203, distance: '7.0 mi' },
]

const BENEFIT_RESPONSE = {
  text: "Based on your plan, you're covered for a few types of alternative care: Acupuncture, Chiropractic Care, Massage Therapy, and Naturopathy.\nEach one has different coverage, costs, and requirements — so let's compare them side by side and help you choose what works best for you.\nTap any card below to see more details.",
  cards: BENEFIT_CARDS_DATA,
  afterText: "Each one has different coverage, costs, and requirements — so let's compare them side by side and help you choose what works best for you.\nTap any card below to see more details.",
  seeMoreLabel: 'See more benefits',
}

const ZOE_RESPONSES = [
  "Yes! Dr. Smith is an in-network orthopedic specialist. Your copay would be $30 per visit. Would you like me to help you book an appointment?",
  "I'd be happy to help with that! Based on your plan, your children are due for annual check-ups. I can look up available pediatricians near you.",
  "Great question! Let me check your benefits. Your employer plan includes a gym membership discount through the Wellness Program. You get 50% off at participating gyms.",
  "Based on your current plan, MRI scans are covered at 80% after your deductible. At an in-network facility, your estimated out-of-pocket cost would be around $150-$300.",
  "I found 3 dermatologists in your network within 5 miles. Would you like me to show you their availability and ratings?",
]

const DISCLAIMER_TEXT = 'This AI assistant provides information about insurance coverage, costs, and network status based on your plan details. Responses may not be completely accurate. It cannot provide medical advice or recommendations.'

// ── Provider cards data for back pain response ───────────────
interface ProviderData {
  name: string
  specialty: string
  providerType: 'male' | 'female' | 'facility'
  networkTier: 'in-network' | 'out-of-network'
  networkLabel: string
  address: string
  cost: string
  costLevel: 'lower' | 'typical' | 'higher' | 'unknown'
  rating: number
  reviewCount: number
  distance: string
}

const PROVIDER_CARDS_DATA: ProviderData[] = [
  { name: 'Dr. Lin Wei', specialty: 'Licensed Acupuncturist', providerType: 'female', networkTier: 'in-network', networkLabel: 'In-Network', address: '245 Wellness Ave', cost: '$95', costLevel: 'lower', rating: 4.9, reviewCount: 215, distance: '0.4 mi' },
  { name: 'Dr. James Nakamura', specialty: 'Acupuncture & Herbal Medicine', providerType: 'male', networkTier: 'in-network', networkLabel: 'In-Network', address: '88 Harmony Blvd', cost: '$120', costLevel: 'typical', rating: 4.7, reviewCount: 89, distance: '1.1 mi' },
  { name: 'Dr. Maya Patel', specialty: 'Acupuncture & Pain Management', providerType: 'female', networkTier: 'in-network', networkLabel: 'In-Network', address: '1200 Pacific Center Dr', cost: '$110', costLevel: 'lower', rating: 4.8, reviewCount: 167, distance: '2.3 mi' },
  { name: 'Dr. Kevin Tran', specialty: 'Traditional Chinese Medicine', providerType: 'male', networkTier: 'in-network', networkLabel: 'In-Network', address: '55 Oak St, Suite 200', cost: '$85', costLevel: 'lower', rating: 4.6, reviewCount: 73, distance: '3.0 mi' },
  { name: 'Dr. Rachel Kim', specialty: 'Acupuncture & Sports Medicine', providerType: 'female', networkTier: 'in-network', networkLabel: 'In-Network', address: '410 Birch Lane', cost: '$130', costLevel: 'typical', rating: 4.5, reviewCount: 142, distance: '3.8 mi' },
  { name: 'Dr. David Okafor', specialty: 'Integrative Acupuncture', providerType: 'male', networkTier: 'in-network', networkLabel: 'In-Network', address: '720 Elm Park Dr', cost: '$105', costLevel: 'lower', rating: 4.7, reviewCount: 98, distance: '4.2 mi' },
]

// ── Chip text triggers ───────────────────────────────────────
const MENTAL_HEALTH_CHIP = 'Check my mental health specialist options'
const PROVIDER_CHIP = 'Find a top-rated acupuncturist'

interface BenefitCardData {
  title: string
  subtitle?: string
  imageSrc?: string
  metaText?: string
}

interface Message {
  id: number
  type: 'user' | 'zoe'
  text: string
  cards?: BenefitCardData[]
  providers?: ProviderData[]
  afterText?: string
  seeMoreLabel?: string
}

export default function ZoeChatDemoLab() {
  const instanceId = useId().replace(/:/g, '')
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const msgIdRef = useRef(0)

  // ── Drawer state ─────────────────────────────────────────
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerCard, setDrawerCard] = useState<BenefitCardData | null>(null)
  const [activeCardTitle, setActiveCardTitle] = useState<string | null>(null)

  // ── "See more" expansion state ──────────────────────────
  const [loadingMoreIds, setLoadingMoreIds] = useState<Set<number>>(new Set())
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

  const handleSeeMore = useCallback((msgId: number, type: 'cards' | 'providers') => {
    // Start loading skeleton phase
    setLoadingMoreIds(prev => new Set(prev).add(msgId))

    setTimeout(() => {
      const expand = (msg: Message): Message => {
        if (type === 'cards') {
          return { ...msg, cards: [...(msg.cards || []), ...EXTRA_BENEFIT_CARDS], seeMoreLabel: undefined }
        } else {
          return { ...msg, providers: [...(msg.providers || []), ...EXTRA_PROVIDER_CARDS], seeMoreLabel: undefined }
        }
      }

      // Check if it's the active response or a finalized message
      setActiveResponse(prev => {
        if (prev && prev.id === msgId) return expand(prev)
        return prev
      })
      setMessages(prev => prev.map(msg => msg.id === msgId ? expand(msg) : msg))

      setLoadingMoreIds(prev => { const next = new Set(prev); next.delete(msgId); return next })
      setExpandedIds(prev => new Set(prev).add(msgId))
    }, 3000)
  }, [])

  const handleCardClick = useCallback((card: BenefitCardData) => {
    setDrawerCard(card)
    setActiveCardTitle(card.title)
    setDrawerOpen(true)
  }, [])

  const handleDrawerClose = useCallback(() => {
    setDrawerOpen(false)
    setActiveCardTitle(null)
  }, [])

  // ── Active Zoe turn ────────────────────────────────────────
  const [isThinking, setIsThinking] = useState(false)
  const [pendingResponse, setPendingResponse] = useState<Message | null>(null)
  const [activeResponse, setActiveResponse] = useState<Message | null>(null)
  const pendingResponseRef = useRef<Message | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Auto-scroll
  const scrollToBottom = useCallback(() => {
    const el = messagesContainerRef.current
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
      })
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isThinking, activeResponse, scrollToBottom])

  // ── Finalize previous turn into message history ────────────
  const finalizeActiveTurn = useCallback(() => {
    if (activeResponse !== null) {
      setMessages(prev => [...prev, activeResponse])
      setActiveResponse(null)
    }
  }, [activeResponse])

  // ── Send message ───────────────────────────────────────────
  const sendMessage = useCallback((text: string) => {
    finalizeActiveTurn()

    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (pendingResponseRef.current !== null) {
      setMessages(prev => [...prev, pendingResponseRef.current!])
    }

    setPendingResponse(null)
    pendingResponseRef.current = null
    setActiveResponse(null)

    const userId = ++msgIdRef.current
    setMessages(prev => [...prev, { id: userId, type: 'user', text }])
    setInputValue('')

    setIsThinking(true)

    // ── Determine response type ──────────────────────────────
    const isBenefitQuery = text === MENTAL_HEALTH_CHIP
    const isProviderQuery = text === PROVIDER_CHIP
    const delay = 2000 + Math.random() * 3000

    timerRef.current = setTimeout(() => {
      let response: Message

      if (isBenefitQuery) {
        response = {
          id: ++msgIdRef.current,
          type: 'zoe',
          text: "Based on your plan, you're covered for a few types of alternative care: Acupuncture, Chiropractic Care, Massage Therapy, and Naturopathy.",
          cards: BENEFIT_RESPONSE.cards,
          afterText: BENEFIT_RESPONSE.afterText,
          seeMoreLabel: BENEFIT_RESPONSE.seeMoreLabel,
        }
      } else if (isProviderQuery) {
        response = {
          id: ++msgIdRef.current,
          type: 'zoe',
          text: "I found 6 top-rated acupuncturists in your network near you. Each one has great reviews and accepts your plan.",
          providers: PROVIDER_CARDS_DATA,
          seeMoreLabel: 'See more providers',
          afterText: "All providers are in-network with your plan. Tap any card to see full details, availability, and book an appointment.",
        }
      } else {
        response = {
          id: ++msgIdRef.current,
          type: 'zoe',
          text: ZOE_RESPONSES[Math.floor(Math.random() * ZOE_RESPONSES.length)],
        }
      }

      pendingResponseRef.current = response
      setPendingResponse(response)
      setIsThinking(false)
      timerRef.current = null
    }, delay)
  }, [finalizeActiveTurn])

  const handleLoaderExitComplete = useCallback(() => {
    const resp = pendingResponseRef.current
    if (resp !== null) {
      setActiveResponse(resp)
      setPendingResponse(null)
      pendingResponseRef.current = null
    }
  }, [])

  const handleSubmit = useCallback((text: string) => {
    sendMessage(text)
  }, [sendMessage])

  const handleChipClick = useCallback((text: string) => {
    sendMessage(text)
  }, [sendMessage])

  const hasActiveTurn = isThinking || pendingResponse !== null || activeResponse !== null
  const iconSpinning = hasActiveTurn && activeResponse === null
  const hasMessages = messages.length > 0 || hasActiveTurn
  const isWelcomeState = !hasMessages

  const spinKf = `zoe-chat-spin-${instanceId}`

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      width: '100%',
    }}>
      {/* ── Chat area (left, shrinks when drawer opens) ── */}
      <div style={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        background: sc.neutral.surface.negative,
        position: 'relative',
        transition: 'flex 250ms ease',
      }}>
      <style>{`@keyframes ${spinKf} { 0% { transform: rotate(0deg); animation-timing-function: ease-out; } 12% { transform: rotate(-180deg); animation-timing-function: cubic-bezier(0.2, 0, 0.2, 1); } 80% { transform: rotate(540deg); } 100% { transform: rotate(540deg); } }`}</style>

      {/* ── Messages area (scrolls internally, no scrollbar) ── */}
      <style>{`.zoe-chat-scroll::-webkit-scrollbar { display: none; }`}</style>
      <div
        ref={messagesContainerRef}
        className="zoe-chat-scroll"
        style={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          scrollbarWidth: 'none',
        }}
      >
        {/* ── Gradient header with close button ── */}
        <ZoeChatHeader onClose={() => alert('Close chat (demo)')} />

        {/* ── Welcome section (always rendered, scrolls up) ── */}
        <div style={{
          flex: hasMessages ? 'none' : 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: hasMessages ? 'flex-start' : 'center',
          gap: semanticSpacing.s,
          maxWidth: 748,
          width: '100%',
          margin: '0 auto',
          padding: hasMessages ? '80px 20px 40px' : '0 20px 40px',
        }}>
          <ZoeDefaultIcon size={64} />
          <h1 style={{
            fontFamily: typographyStyles['display-xxs'].fontFamily,
            fontSize: typographyStyles['display-xxs'].fontSize,
            lineHeight: typographyStyles['display-xxs'].lineHeight,
            fontWeight: typographyStyles['display-xxs'].fontWeight,
            color: sc.neutral.text.DEFAULT,
            textAlign: 'center',
            margin: 0,
          }}>
            Hi Guy, How can I help you today?
          </h1>

          {/* Prompt chips — vertical stack, left-aligned to input bar */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: semanticSpacing.xs,
            marginTop: semanticSpacing.s,
            width: '100%',
          }}>
            {PROMPT_CHIPS.map((chip, i) => (
              <ZoePromptChip
                key={i}
                emoji={chip.emoji}
                text={chip.text}
                onClick={() => handleChipClick(chip.text)}
              />
            ))}
          </div>
        </div>

        {/* ── Messages + active turn ── */}
        {hasMessages && (
          <div style={{
            maxWidth: 748,
            width: '100%',
            margin: '0 auto',
            padding: '0 20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: semanticSpacing.xxl,
          }}>
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {msg.type === 'user' ? (
                  <ZoeUserBubble text={msg.text} />
                ) : (
                  <ZoeResponseBubble>
                    {/* Main text */}
                    <span>{msg.text}</span>

                    {/* Benefit cards */}
                    {msg.cards && (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: semanticSpacing.xs,
                        marginTop: semanticSpacing.s,
                      }}>
                        {msg.cards.map((card, i) => (
                          <ZoeBenefitCard
                            key={i}
                            title={card.title}
                            subtitle={card.subtitle}
                            imageSrc={card.imageSrc}
                            metaIcon={card.metaText ? <LocationLine size={META_ICON_SIZE} /> : undefined}
                            metaText={card.metaText}
                            isActive={activeCardTitle === card.title}
                            onClick={() => handleCardClick(card)}
                          />
                        ))}
                      </div>
                    )}

                    {/* Provider cards — vertical list */}
                    {msg.providers && (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: semanticSpacing.xs,
                        marginTop: semanticSpacing.s,
                      }}>
                        {msg.providers.map((p, i) => (
                          <ZoeProviderCard
                            key={i}
                            name={p.name}
                            specialty={p.specialty}
                            providerType={p.providerType}
                            networkTier={p.networkTier}
                            cost={p.cost}
                            costLevel={p.costLevel}
                            rating={p.rating}
                            reviewCount={p.reviewCount}
                            distance={p.distance}
                            networkLabel={p.networkLabel}
                            address={p.address}
                            isActive={activeCardTitle === p.name}
                            onCallClick={() => {}}
                            onClick={() => {
                              setDrawerCard({ title: p.name, subtitle: p.specialty })
                              setActiveCardTitle(p.name)
                              setDrawerOpen(true)
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Loading skeletons for "see more" */}
                    {loadingMoreIds.has(msg.id) && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: semanticSpacing.xs, marginTop: semanticSpacing.xs }}>
                        {Array.from({ length: 4 }).map((_, i) => (
                          msg.providers
                            ? <ZoeProviderCard key={`skel-${i}`} name="" specialty="" loading />
                            : <SkeletonBenefitCard key={`skel-${i}`} />
                        ))}
                      </div>
                    )}

                    {/* "See more" link */}
                    {msg.seeMoreLabel && !loadingMoreIds.has(msg.id) && (
                      <button
                        onClick={() => handleSeeMore(msg.id, msg.providers ? 'providers' : 'cards')}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          fontFamily: typographyStyles['text-link-l'].fontFamily,
                          fontSize: typographyStyles['text-link-l'].fontSize,
                          lineHeight: typographyStyles['text-link-l'].lineHeight,
                          fontWeight: typographyStyles['text-link-l'].fontWeight,
                          textDecoration: typographyStyles['text-link-l'].textDecoration,
                          color: sc.neutral.text.DEFAULT,
                          display: 'block',
                          marginTop: semanticSpacing.xs,
                        }}
                      >
                        {msg.seeMoreLabel}
                      </button>
                    )}

                    {/* After-cards text */}
                    {msg.afterText && (
                      <span style={{ display: 'block', marginTop: semanticSpacing.s }}>
                        {msg.afterText}
                      </span>
                    )}
                  </ZoeResponseBubble>
                )}
              </div>
            ))}

            {/* ── Active Zoe turn ── */}
            {hasActiveTurn && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                <div style={{ width: '100%' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: semanticSpacing.xxs,
                    marginBottom: activeResponse !== null ? semanticSpacing.xxs : 0,
                  }}>
                    <div style={{
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: iconSpinning ? `${spinKf} 3500ms infinite` : 'none',
                    }}>
                      <ZoeDefaultIcon size={40} />
                    </div>

                    {activeResponse === null && (
                      <ZoeThinkingLoader
                        isThinking={isThinking}
                        showIcon={false}
                        onExitComplete={handleLoaderExitComplete}
                      />
                    )}
                  </div>

                  {activeResponse !== null && (
                    <div style={{
                      fontFamily: typographyStyles['paragraph-l'].fontFamily,
                      fontSize: typographyStyles['paragraph-l'].fontSize,
                      lineHeight: typographyStyles['paragraph-l'].lineHeight,
                      color: sc.neutral.text.DEFAULT,
                    }}>
                      {activeResponse.text}

                      {/* Active response benefit cards */}
                      {activeResponse.cards && (
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: semanticSpacing.xs,
                          marginTop: semanticSpacing.s,
                        }}>
                          {activeResponse.cards.map((card, i) => (
                            <ZoeBenefitCard
                              key={i}
                              title={card.title}
                              subtitle={card.subtitle}
                              imageSrc={card.imageSrc}
                              metaIcon={card.metaText ? <LocationLine size={META_ICON_SIZE} /> : undefined}
                              metaText={card.metaText}
                              isActive={activeCardTitle === card.title}
                            onClick={() => handleCardClick(card)}
                            />
                          ))}
                        </div>
                      )}

                      {/* Active response provider cards — vertical list */}
                      {activeResponse.providers && (
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: semanticSpacing.xs,
                          marginTop: semanticSpacing.s,
                        }}>
                          {activeResponse.providers.map((p, i) => (
                            <ZoeProviderCard
                              key={i}
                              name={p.name}
                              specialty={p.specialty}
                              providerType={p.providerType}
                              networkTier={p.networkTier}
                              cost={p.cost}
                              costLevel={p.costLevel}
                              rating={p.rating}
                              reviewCount={p.reviewCount}
                              distance={p.distance}
                              networkLabel={p.networkLabel}
                              address={p.address}
                              isActive={activeCardTitle === p.name}
                              onCallClick={() => {}}
                              onClick={() => {
                                setDrawerCard({ title: p.name, subtitle: p.specialty })
                                setActiveCardTitle(p.name)
                                setDrawerOpen(true)
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Active response loading skeletons */}
                      {loadingMoreIds.has(activeResponse.id) && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: semanticSpacing.xs, marginTop: semanticSpacing.xs }}>
                          {Array.from({ length: 4 }).map((_, i) => (
                            activeResponse.providers
                              ? <ZoeProviderCard key={`skel-${i}`} name="" specialty="" loading />
                              : <SkeletonBenefitCard key={`skel-${i}`} />
                          ))}
                        </div>
                      )}

                      {activeResponse.seeMoreLabel && !loadingMoreIds.has(activeResponse.id) && (
                        <button
                          onClick={() => handleSeeMore(activeResponse.id, activeResponse.providers ? 'providers' : 'cards')}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                            fontFamily: typographyStyles['text-link-l'].fontFamily,
                            fontSize: typographyStyles['text-link-l'].fontSize,
                            lineHeight: typographyStyles['text-link-l'].lineHeight,
                            fontWeight: typographyStyles['text-link-l'].fontWeight,
                            textDecoration: 'underline',
                            color: sc.neutral.text.DEFAULT,
                            marginTop: semanticSpacing.xxs,
                          }}
                        >
                          {activeResponse.seeMoreLabel}
                        </button>
                      )}

                      {activeResponse.afterText && (
                        <p style={{ marginTop: semanticSpacing.s }}>
                          {activeResponse.afterText}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Input area (sticky bottom) ─── */}
      <div style={{
        flexShrink: 0,
        paddingTop: semanticSpacing.xs,
        paddingLeft: semanticSpacing.l,
        paddingRight: semanticSpacing.l,
        paddingBottom: semanticSpacing.m,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: semanticSpacing.xxs,
        background: sc.neutral.surface.negative,
        maxWidth: 748 + 48,
        width: '100%',
        margin: '0 auto',
      }}>
        <ZoeInput
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSubmit}
          showZoeIcon={isWelcomeState}
        />
        <p style={{
          fontFamily: typographyStyles['paragraph-s'].fontFamily,
          fontSize: typographyStyles['paragraph-s'].fontSize,
          lineHeight: typographyStyles['paragraph-s'].lineHeight,
          color: sc.neutral.text.light,
          textAlign: 'center',
          margin: 0,
          width: '100%',
        }}>
          {DISCLAIMER_TEXT}
        </p>
      </div>

      </div>{/* end chat area */}

      {/* ── Benefit Drawer (push — sits beside chat) ─── */}
      <ZoeDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        title={drawerCard?.title || ''}
        subtitle={drawerCard?.subtitle}
        footer={
          <>
            <Button variant="outline" size="md" onClick={handleDrawerClose}>
              More coverage options
            </Button>
            <Button variant="primary" size="md" onClick={handleDrawerClose}>
              Find providers
            </Button>
          </>
        }
      >
        {/* Placeholder content for testing scroll */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: semanticSpacing.l,
        }}>
          <section>
            <h3 style={{
              fontFamily: typographyStyles['label-m'].fontFamily,
              fontSize: typographyStyles['label-m'].fontSize,
              lineHeight: typographyStyles['label-m'].lineHeight,
              fontWeight: typographyStyles['label-m'].fontWeight,
              color: sc.neutral.text.DEFAULT,
              margin: `0 0 ${semanticSpacing.xxs}px 0`,
            }}>
              About this benefit
            </h3>
            <p style={{
              fontFamily: typographyStyles['paragraph-l'].fontFamily,
              fontSize: typographyStyles['paragraph-l'].fontSize,
              lineHeight: typographyStyles['paragraph-l'].lineHeight,
              color: sc.neutral.text.DEFAULT,
              margin: 0,
            }}>
              This benefit covers consultations with a qualified provider to discuss and address health concerns. It provides support for stress, anxiety, relationship challenges, and overall well-being.
            </p>
          </section>

          <section>
            <h3 style={{
              fontFamily: typographyStyles['label-m'].fontFamily,
              fontSize: typographyStyles['label-m'].fontSize,
              lineHeight: typographyStyles['label-m'].lineHeight,
              fontWeight: typographyStyles['label-m'].fontWeight,
              color: sc.neutral.text.DEFAULT,
              margin: `0 0 ${semanticSpacing.xxs}px 0`,
            }}>
              What to know before you book
            </h3>
            <ul style={{
              fontFamily: typographyStyles['paragraph-l'].fontFamily,
              fontSize: typographyStyles['paragraph-l'].fontSize,
              lineHeight: typographyStyles['paragraph-l'].lineHeight,
              color: sc.neutral.text.DEFAULT,
              margin: 0,
              paddingLeft: semanticSpacing.l,
            }}>
              <li>Get a referral from your primary care doctor before booking</li>
              <li>This benefit is available for ages 18 and older</li>
              <li>Coverage may vary by provider and facility type</li>
            </ul>
          </section>

          <section>
            <h3 style={{
              fontFamily: typographyStyles['label-m'].fontFamily,
              fontSize: typographyStyles['label-m'].fontSize,
              lineHeight: typographyStyles['label-m'].lineHeight,
              fontWeight: typographyStyles['label-m'].fontWeight,
              color: sc.neutral.text.DEFAULT,
              margin: `0 0 ${semanticSpacing.xxs}px 0`,
            }}>
              How to use this benefit
            </h3>
            <ul style={{
              fontFamily: typographyStyles['paragraph-l'].fontFamily,
              fontSize: typographyStyles['paragraph-l'].fontSize,
              lineHeight: typographyStyles['paragraph-l'].lineHeight,
              color: sc.neutral.text.DEFAULT,
              margin: 0,
              paddingLeft: semanticSpacing.l,
            }}>
              <li>Find an in-network provider at an outpatient facility</li>
              <li>Schedule your appointment under your medical plan</li>
              <li>Bring your insurance ID card when you go in</li>
            </ul>
          </section>

          <section>
            <p style={{
              fontFamily: typographyStyles['paragraph-l'].fontFamily,
              fontSize: typographyStyles['paragraph-l'].fontSize,
              lineHeight: typographyStyles['paragraph-l'].lineHeight,
              color: sc.neutral.text.DEFAULT,
              margin: 0,
            }}>
              This is the best coverage option for your current situation, based on your plan, network status, and the type of facility.
            </p>
          </section>
        </div>
      </ZoeDrawer>
    </div>
  )
}

// ── Constants used in card rendering ─────────────────────────
const META_ICON_SIZE = 20

// ── Skeleton benefit card for loading state ──────────────────
function SkeletonBenefitCard() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: 12,
      borderRadius: 24,
    }}>
      {/* Image placeholder */}
      <div style={{
        width: 88, height: 88, minWidth: 88,
        borderRadius: 16,
        background: '#f2f2f2',
        animation: 'skeleton-pulse 1.5s ease-in-out infinite',
      }} />
      {/* Text placeholders */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ width: '60%', height: 20, borderRadius: 4, background: '#f2f2f2', animation: 'skeleton-pulse 1.5s ease-in-out infinite' }} />
        <div style={{ width: '80%', height: 16, borderRadius: 4, background: '#f2f2f2', animation: 'skeleton-pulse 1.5s ease-in-out infinite' }} />
      </div>
      <style>{`@keyframes skeleton-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </div>
  )
}
