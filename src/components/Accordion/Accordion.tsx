import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  createElement,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type RefObject,
} from 'react'
import type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
  AccordionIndicator,
} from './Accordion.types'
import { semanticColors as sc } from '../../../tokens/semantic/colors'
import { semanticSpacing } from '../../../tokens/semantic/spacing'
import { semanticRadii } from '../../../tokens/semantic/radii'
import { typographyStyles } from '../../../tokens/semantic/typography'
import PlusLine from '../Icon/icons/line/Plus'
import MinusLine from '../Icon/icons/line/Minus'
import ChevronDownLine from '../Icon/icons/line/ChevronDown'

// ── Token constants ──────────────────────────────────────────────
const SURFACE_COLLAPSED   = sc.neutral.surface.extraSubtle      // #fafafa
const SURFACE_EXPANDED    = sc.neutral.surface.negative         // #ffffff
const BORDER_COLLAPSED    = sc.neutral.border.light             // #ededed
const BORDER_EXPANDED     = sc.neutral.border.strong            // #e0e0e0
const TEXT_TITLE          = sc.neutral.text.DEFAULT             // #000000
const TEXT_BODY           = sc.neutral.text.dark                // #404040
const TEXT_DISABLED       = sc.neutral.text.disabledDark        // #949494
const ITEM_PADDING        = semanticSpacing.s                   // 16px
const CONTENT_TOP_GAP     = semanticSpacing.xs                  // 12px
const ITEM_RADIUS         = semanticRadii.xxs                   // 8px
const STACK_GAP           = semanticSpacing.xxs                 // 8px
const ICON_SIZE           = 24
const TRANSITION_MS       = 200

// ── Contexts ─────────────────────────────────────────────────────
interface AccordionContextValue {
  openValue: string | null
  setOpenValue: (value: string | null) => void
  indicator: AccordionIndicator
  collapsible: boolean
  baseId: string
  registerTrigger: (value: string, ref: RefObject<HTMLButtonElement | null>) => () => void
  triggerOrder: () => string[]
  focusTrigger: (value: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

interface AccordionItemContextValue {
  value: string
  isOpen: boolean
  disabled: boolean
  triggerId: string
  contentId: string
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null)

function useAccordionContext(component: string): AccordionContextValue {
  const ctx = useContext(AccordionContext)
  if (!ctx) {
    throw new Error(`<${component}> must be rendered inside <Accordion>.`)
  }
  return ctx
}

function useAccordionItemContext(component: string): AccordionItemContextValue {
  const ctx = useContext(AccordionItemContext)
  if (!ctx) {
    throw new Error(`<${component}> must be rendered inside <AccordionItem>.`)
  }
  return ctx
}

// ── Reduced motion ───────────────────────────────────────────────
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mql.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])
  return reduced
}

// ── Accordion (root) ─────────────────────────────────────────────
export function Accordion({
  value,
  defaultValue = null,
  onValueChange,
  indicator = 'plus-minus',
  collapsible = true,
  children,
  style,
  ...props
}: AccordionProps) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState<string | null>(defaultValue)
  const openValue = isControlled ? value : internalValue
  const baseId = useId()

  // Keep an ordered list of registered triggers for keyboard navigation.
  const triggerRegistry = useRef<{ value: string; ref: RefObject<HTMLButtonElement | null> }[]>([])

  const setOpenValue = useCallback(
    (next: string | null) => {
      if (!isControlled) setInternalValue(next)
      onValueChange?.(next)
    },
    [isControlled, onValueChange]
  )

  const registerTrigger = useCallback(
    (val: string, ref: RefObject<HTMLButtonElement | null>) => {
      triggerRegistry.current.push({ value: val, ref })
      return () => {
        triggerRegistry.current = triggerRegistry.current.filter(t => t.value !== val)
      }
    },
    []
  )

  const triggerOrder = useCallback(() => {
    // Sort by document order so arrow nav respects DOM, not registration order.
    return triggerRegistry.current
      .filter(t => t.ref.current && !t.ref.current.disabled)
      .sort((a, b) => {
        const aEl = a.ref.current!
        const bEl = b.ref.current!
        const pos = aEl.compareDocumentPosition(bEl)
        if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1
        if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1
        return 0
      })
      .map(t => t.value)
  }, [])

  const focusTrigger = useCallback((val: string) => {
    const entry = triggerRegistry.current.find(t => t.value === val)
    entry?.ref.current?.focus()
  }, [])

  const ctx = useMemo<AccordionContextValue>(
    () => ({ openValue, setOpenValue, indicator, collapsible, baseId, registerTrigger, triggerOrder, focusTrigger }),
    [openValue, setOpenValue, indicator, collapsible, baseId, registerTrigger, triggerOrder, focusTrigger]
  )

  const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: STACK_GAP,
    ...style,
  }

  return (
    <AccordionContext.Provider value={ctx}>
      <div data-glow-accordion="" style={rootStyle} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// ── AccordionItem ────────────────────────────────────────────────
export function AccordionItem({
  value,
  headingLevel = 3,
  disabled = false,
  children,
  style,
  ...props
}: AccordionItemProps) {
  const root = useAccordionContext('AccordionItem')
  const isOpen = root.openValue === value
  const triggerId = `${root.baseId}-${value}-trigger`
  const contentId = `${root.baseId}-${value}-content`

  const itemCtx = useMemo<AccordionItemContextValue>(
    () => ({ value, isOpen, disabled, triggerId, contentId }),
    [value, isOpen, disabled, triggerId, contentId]
  )

  // Pass headingLevel to the trigger via a context-injected wrapper. Stored on the
  // item context so AccordionTrigger can read it without re-passing as a prop.
  const itemStyle: CSSProperties = {
    backgroundColor: isOpen ? SURFACE_EXPANDED : SURFACE_COLLAPSED,
    border: `1px solid ${isOpen ? BORDER_EXPANDED : BORDER_COLLAPSED}`,
    borderRadius: ITEM_RADIUS,
    transition: `background-color ${TRANSITION_MS}ms ease-out, border-color ${TRANSITION_MS}ms ease-out`,
    overflow: 'hidden',
    ...style,
  }

  return (
    <AccordionItemContext.Provider value={itemCtx}>
      <div
        data-glow-accordion-item=""
        data-state={isOpen ? 'open' : 'closed'}
        data-disabled={disabled || undefined}
        style={itemStyle}
        {...props}
      >
        <ItemHeading level={headingLevel}>{collectTrigger(children)}</ItemHeading>
        {collectContent(children)}
      </div>
    </AccordionItemContext.Provider>
  )
}

// Internal: render the trigger inside an h1-h6 element (WAI-ARIA requirement).
function ItemHeading({ level, children }: { level: number; children: React.ReactNode }) {
  return createElement(
    `h${level}`,
    { style: { margin: 0, font: 'inherit', fontWeight: 'inherit' } },
    children
  )
}

// Helpers to split children into Trigger and Content slots so we can wrap the
// trigger in a heading element while leaving content outside it.
function collectTrigger(children: React.ReactNode): React.ReactNode {
  let trigger: React.ReactNode = null
  iterateChildren(children, (child) => {
    if (isType(child, AccordionTrigger) && trigger == null) trigger = child
  })
  return trigger
}

function collectContent(children: React.ReactNode): React.ReactNode {
  const out: React.ReactNode[] = []
  iterateChildren(children, (child, i) => {
    if (!isType(child, AccordionTrigger)) out.push(typeof child === 'object' ? child : <span key={i}>{child}</span>)
  })
  return out
}

function iterateChildren(children: React.ReactNode, fn: (child: React.ReactNode, i: number) => void) {
  if (Array.isArray(children)) {
    children.forEach(fn)
  } else {
    fn(children, 0)
  }
}

function isType(child: React.ReactNode, component: React.ElementType): boolean {
  return !!child && typeof child === 'object' && 'type' in (child as object) && (child as { type: unknown }).type === component
}

// ── AccordionTrigger ─────────────────────────────────────────────
export function AccordionTrigger({
  iconLeft,
  children,
  onClick,
  onKeyDown,
  style,
  ...props
}: AccordionTriggerProps) {
  const root = useAccordionContext('AccordionTrigger')
  const item = useAccordionItemContext('AccordionTrigger')
  const ref = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    return root.registerTrigger(item.value, ref)
  }, [root, item.value])

  const handleClick = (e: ReactMouseEvent<HTMLButtonElement>) => {
    if (item.disabled) return
    onClick?.(e)
    if (e.defaultPrevented) return
    if (item.isOpen) {
      if (root.collapsible) root.setOpenValue(null)
    } else {
      root.setOpenValue(item.value)
    }
  }

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(e)
    if (e.defaultPrevented) return
    if (item.disabled) return
    const order = root.triggerOrder()
    const idx = order.indexOf(item.value)
    if (idx === -1) return

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault()
        const next = order[(idx + 1) % order.length]
        root.focusTrigger(next)
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        const prev = order[(idx - 1 + order.length) % order.length]
        root.focusTrigger(prev)
        break
      }
      case 'Home': {
        e.preventDefault()
        root.focusTrigger(order[0])
        break
      }
      case 'End': {
        e.preventDefault()
        root.focusTrigger(order[order.length - 1])
        break
      }
      // Space / Enter — let the browser fire native button click.
      // Space also scrolls by default, prevent that.
      case ' ': {
        e.preventDefault()
        ref.current?.click()
        break
      }
    }
  }

  const triggerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: semanticSpacing.s,
    width: '100%',
    padding: ITEM_PADDING,
    background: 'transparent',
    border: 'none',
    textAlign: 'left',
    color: item.disabled ? TEXT_DISABLED : TEXT_TITLE,
    cursor: item.disabled ? 'not-allowed' : 'pointer',
    ...typographyStyles['label-m'],
    ...style,
  }

  return (
    <button
      ref={ref}
      type="button"
      id={item.triggerId}
      aria-expanded={item.isOpen}
      aria-controls={item.contentId}
      aria-disabled={item.disabled || undefined}
      disabled={item.disabled}
      data-state={item.isOpen ? 'open' : 'closed'}
      style={triggerStyle}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={(e) => {
        if (!e.currentTarget.matches(':focus-visible')) return
        e.currentTarget.style.outline = `2px solid ${BORDER_EXPANDED}`
        e.currentTarget.style.outlineOffset = '2px'
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none'
        e.currentTarget.style.outlineOffset = '0px'
      }}
      {...props}
    >
      {iconLeft}
      <span style={{ flex: 1, minWidth: 0 }}>{children}</span>
      <Indicator open={item.isOpen} kind={root.indicator} disabled={item.disabled} />
    </button>
  )
}

function Indicator({ open, kind, disabled }: { open: boolean; kind: AccordionIndicator; disabled: boolean }) {
  const reduced = usePrefersReducedMotion()
  const color = disabled ? TEXT_DISABLED : TEXT_TITLE
  const wrapStyle: CSSProperties = {
    display: 'inline-flex',
    flexShrink: 0,
    width: ICON_SIZE,
    height: ICON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    color,
    transition: reduced ? 'none' : `transform ${TRANSITION_MS}ms ease-out`,
  }

  if (kind === 'chevron') {
    return (
      <span aria-hidden="true" style={{ ...wrapStyle, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
        <ChevronDownLine size="lg" />
      </span>
    )
  }

  return (
    <span aria-hidden="true" style={wrapStyle}>
      {open ? <MinusLine size="lg" /> : <PlusLine size="lg" />}
    </span>
  )
}

// ── AccordionContent ─────────────────────────────────────────────
export function AccordionContent({ children, style, ...props }: AccordionContentProps) {
  const item = useAccordionItemContext('AccordionContent')
  const reduced = usePrefersReducedMotion()
  const innerRef = useRef<HTMLDivElement | null>(null)
  // Toggle `hidden` after the collapse transition so screen readers and tab order
  // skip the content while it is animating closed but remain available while open.
  const [renderHidden, setRenderHidden] = useState(!item.isOpen)

  useEffect(() => {
    if (item.isOpen) {
      setRenderHidden(false)
      return
    }
    if (reduced) {
      setRenderHidden(true)
      return
    }
    const t = setTimeout(() => setRenderHidden(true), TRANSITION_MS)
    return () => clearTimeout(t)
  }, [item.isOpen, reduced])

  const wrapperStyle: CSSProperties = {
    display: 'grid',
    gridTemplateRows: item.isOpen ? '1fr' : '0fr',
    transition: reduced
      ? 'none'
      : `grid-template-rows ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${TRANSITION_MS}ms ease-out`,
    opacity: item.isOpen ? 1 : 0,
  }

  const innerStyle: CSSProperties = {
    overflow: 'hidden',
    minHeight: 0,
  }

  const contentStyle: CSSProperties = {
    padding: `0 ${ITEM_PADDING} ${ITEM_PADDING}`,
    paddingTop: CONTENT_TOP_GAP,
    color: TEXT_BODY,
    ...typographyStyles['paragraph-m'],
    ...style,
  }

  return (
    <div style={wrapperStyle} aria-hidden={renderHidden || undefined}>
      <div style={innerStyle} ref={innerRef}>
        <div
          role="region"
          id={item.contentId}
          aria-labelledby={item.triggerId}
          hidden={renderHidden}
          style={contentStyle}
          data-state={item.isOpen ? 'open' : 'closed'}
          {...props}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
