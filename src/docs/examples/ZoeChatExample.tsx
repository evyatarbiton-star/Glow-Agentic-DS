import { useState, useCallback, useRef, useEffect, useId } from 'react'
import { ZoeInput } from '../../components/ZoeInput'
import { ZoeThinkingLoader } from '../../components/ZoeThinkingLoader'
import { ZoeUserBubble } from '../../components/ZoeUserBubble'
import { ZoeResponseBubble } from '../../components/ZoeResponseBubble'
import { ZoeBenefitCard } from '../../components/ZoeBenefitCard'
import ZoeDefaultIcon from '../../components/Icon/icons/line/ZoeDefault'
import LocationLine from '../../components/Icon/icons/line/Location'
import { ZoeChatHeader } from '../../components/ZoeChatHeader'
import { typographyStyles } from '../../../tokens/semantic/typography'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { ZoePromptChip } from '../../components/ZoePromptChip'
import { ZoeDrawer } from '../../components/ZoeDrawer'
import { Button } from '../../components/Button/Button'
import { ZoeProviderCard } from '../../components/ZoeProviderCard'
import { ZoeStreamingText } from '../../components/ZoeStreamingText'
import { useResponseSequence } from '../../hooks'
import type { ResponseBlock } from '../../hooks'


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
  "Great question! Let me break down your coverage for orthopedic care. Based on your current Aetna PPO plan, you have full access to in-network orthopedic specialists with a $30 copay per visit. This includes initial consultations, follow-up appointments, and any in-office procedures that fall under your specialist benefit.\n\nFor imaging services like X-rays and MRIs, your plan covers 80% of the cost after your deductible has been met. Your current deductible status shows you've already met $1,200 out of your $1,500 annual deductible, so you're very close to hitting that threshold. Once met, your coinsurance kicks in at 80/20 for most services.\n\nI'd recommend scheduling an initial consultation first — Dr. Smith at Pacific Orthopedic Center has excellent reviews (4.9 stars, 312 reviews) and is currently accepting new patients. His next available appointment is this Thursday at 2:30 PM. Would you like me to help you book that, or would you prefer to see a few more provider options?",
  "Absolutely, I'd love to help you understand your mental health benefits! Your plan includes comprehensive behavioral health coverage through Optum, which is your plan's mental health network. You're entitled to unlimited outpatient therapy sessions with an in-network provider, and your copay is just $20 per session — one of the lowest I've seen for your plan tier.\n\nHere's what's really helpful to know: your plan does not require a referral or prior authorization for outpatient mental health visits. That means you can go directly to any in-network therapist, psychologist, or psychiatrist without needing approval from your primary care doctor first. For psychiatry specifically, your first visit (evaluation) is covered at the same $20 copay, and medication management follow-ups are also $20.\n\nI also want to mention that your plan includes access to Talkspace for virtual therapy sessions at no additional cost — it's part of your digital wellness benefits. This can be a great option if you prefer the flexibility of texting or video sessions from home. Would you like me to find in-network therapists near you, or would you prefer to explore the virtual options first?",
  "Let me walk you through your preventive care benefits — this is actually one of the strongest parts of your plan! Under the Affordable Care Act, your plan covers a wide range of preventive services at 100% with no copay, no coinsurance, and no deductible required. This includes annual wellness exams, immunizations, cancer screenings, and routine lab work.\n\nFor your specific situation, here's what you and your family are eligible for this year: You're due for an annual physical (last one was 14 months ago), your flu shot and updated COVID booster, and based on your age, a cholesterol screening and diabetes screening are recommended. Your spouse is eligible for all of the above plus a mammogram, which is covered annually starting at age 40.\n\nFor your children, annual well-child visits are covered through age 18, including all CDC-recommended vaccinations. I can see that your daughter's last well-child visit was in January, so she's up to date. However, your son is due for his annual check-up and his 11-year immunization series. Would you like me to find pediatricians near you to schedule those appointments?",
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
  const [activeResponse, setActiveResponse] = useState<Message | null>(null)
  const pendingResponseRef = useRef<Message | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Response sequence orchestrator ───────────────────────────
  const sequence = useResponseSequence({
    streamingMode: 'char',
    streamingIntervalMs: 18,
    streamingSpeed: 2,
    blockRevealDelayMs: 300,
    afterTextDelayMs: 200,
  })

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
  }, [messages, isThinking, activeResponse, sequence.visibleText, sequence.revealedBlockIndices.length, scrollToBottom])

  // ── Finalize previous turn into message history ────────────
  const finalizeActiveTurn = useCallback(() => {
    if (activeResponse !== null) {
      setMessages(prev => [...prev, activeResponse])
      setActiveResponse(null)
      sequence.reset()
    }
  }, [activeResponse, sequence])

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

    pendingResponseRef.current = null
    setActiveResponse(null)
    sequence.reset()

    const userId = ++msgIdRef.current
    setMessages(prev => [...prev, { id: userId, type: 'user', text }])
    setInputValue('')

    setIsThinking(true)
    sequence.startThinking()

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
        const longCards: BenefitCardData[] = [
          { title: 'Physical Therapy', subtitle: 'Movement & rehabilitation', imageSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop', metaText: 'In-network providers' },
          { title: 'Urgent Care Visit', subtitle: 'Walk-in medical attention', imageSrc: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=200&fit=crop', metaText: '$35 copay' },
          { title: 'Lab Work & Blood Tests', subtitle: 'Diagnostic screenings', imageSrc: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=200&h=200&fit=crop', metaText: 'Covered at 100%' },
          { title: 'Vision Exam', subtitle: 'Annual eye check-up', imageSrc: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=200&h=200&fit=crop', metaText: 'VSP network' },
          { title: 'Dental Cleaning', subtitle: 'Preventive oral care', imageSrc: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=200&h=200&fit=crop', metaText: 'Twice per year' },
        ]
        response = {
          id: ++msgIdRef.current,
          type: 'zoe',
          text: ZOE_RESPONSES[Math.floor(Math.random() * ZOE_RESPONSES.length)],
          cards: longCards,
          afterText: "These are the most relevant benefits based on your question. Tap any card to see full coverage details, copay amounts, and find nearby providers.",
          seeMoreLabel: 'See all benefits',
        }
      }

      pendingResponseRef.current = response
      setIsThinking(false)
      timerRef.current = null
    }, delay)
  }, [finalizeActiveTurn, sequence])

  const handleLoaderExitComplete = useCallback(() => {
    const resp = pendingResponseRef.current
    if (resp !== null) {
      setActiveResponse(resp)
      pendingResponseRef.current = null

      // Build blocks array for the sequence orchestrator
      const blocks: ResponseBlock[] = []
      if (resp.cards) {
        resp.cards.forEach((card, i) => blocks.push({ type: 'card', data: { ...card, index: i } }))
      }
      if (resp.providers) {
        resp.providers.forEach((p, i) => blocks.push({ type: 'provider', data: { ...p, index: i } }))
      }

      // Start streaming text → then reveal blocks sequentially
      sequence.startStreaming({
        text: resp.text,
        blocks: blocks.length > 0 ? blocks : undefined,
        afterText: resp.afterText,
      })
    }
  }, [sequence])

  const handleSubmit = useCallback((text: string) => {
    sendMessage(text)
  }, [sendMessage])

  const handleChipClick = useCallback((text: string) => {
    sendMessage(text)
  }, [sendMessage])

  const hasActiveTurn = isThinking || sequence.phase !== 'idle' || activeResponse !== null
  const iconSpinning = hasActiveTurn && sequence.phase !== 'streaming' && sequence.phase !== 'revealing' && sequence.phase !== 'complete'
  const hasMessages = messages.length > 0 || hasActiveTurn
  const isWelcomeState = !hasMessages

  const spinKf = `zoe-chat-spin-${instanceId}`
  const fadeInKf = `zoe-fade-in-${instanceId}`

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
      <style>{`@keyframes ${fadeInKf} { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>

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

                  {activeResponse !== null && (sequence.phase === 'streaming' || sequence.phase === 'revealing' || sequence.phase === 'complete') && (
                    <div style={{
                      fontFamily: typographyStyles['paragraph-l'].fontFamily,
                      fontSize: typographyStyles['paragraph-l'].fontSize,
                      lineHeight: typographyStyles['paragraph-l'].lineHeight,
                      color: sc.neutral.text.DEFAULT,
                    }}>
                      {/* Streaming text with blinking cursor */}
                      <ZoeStreamingText
                        text={sequence.visibleText}
                        isStreaming={sequence.phase === 'streaming'}
                      />

                      {/* Active response benefit cards — revealed sequentially */}
                      {activeResponse.cards && (
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: semanticSpacing.xs,
                          marginTop: semanticSpacing.s,
                        }}>
                          {activeResponse.cards.map((card, i) => (
                            sequence.revealedBlockIndices.includes(i) && (
                              <div key={i} style={{
                                animation: `${fadeInKf} 400ms ease forwards`,
                              }}>
                                <ZoeBenefitCard
                                  title={card.title}
                                  subtitle={card.subtitle}
                                  imageSrc={card.imageSrc}
                                  metaIcon={card.metaText ? <LocationLine size={META_ICON_SIZE} /> : undefined}
                                  metaText={card.metaText}
                                  isActive={activeCardTitle === card.title}
                                  onClick={() => handleCardClick(card)}
                                />
                              </div>
                            )
                          ))}
                        </div>
                      )}

                      {/* Active response provider cards — revealed sequentially */}
                      {activeResponse.providers && (
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: semanticSpacing.xs,
                          marginTop: semanticSpacing.s,
                        }}>
                          {activeResponse.providers.map((p, i) => {
                            // Provider block indices start after card blocks
                            const blockIndex = (activeResponse.cards?.length ?? 0) + i
                            return sequence.revealedBlockIndices.includes(blockIndex) && (
                              <div key={i} style={{
                                animation: `${fadeInKf} 400ms ease forwards`,
                              }}>
                                <ZoeProviderCard
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
                              </div>
                            )
                          })}
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

                      {/* "See more" — only after sequence complete */}
                      {sequence.isComplete && activeResponse.seeMoreLabel && !loadingMoreIds.has(activeResponse.id) && (
                        <div style={{ animation: `${fadeInKf} 400ms ease forwards` }}>
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
                        </div>
                      )}

                      {/* After-text — only when sequence says so */}
                      {sequence.showAfterText && activeResponse.afterText && (
                        <p style={{ marginTop: semanticSpacing.s, animation: `${fadeInKf} 400ms ease forwards` }}>
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
