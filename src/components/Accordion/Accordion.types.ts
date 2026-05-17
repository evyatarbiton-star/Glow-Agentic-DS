import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react'

export type AccordionIndicator = 'plus-minus' | 'chevron'
export type AccordionHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** Controlled open value — the `value` of the currently open AccordionItem, or `null` if all collapsed. */
  value?: string | null
  /** Uncontrolled initial open value. Default: `null` (all collapsed). */
  defaultValue?: string | null
  /** Fires when the open item changes. Receives the new value or `null` when closing. */
  onValueChange?: (value: string | null) => void
  /** Indicator icon style. Default: `'plus-minus'` */
  indicator?: AccordionIndicator
  /** When true, clicking the open item collapses it. When false, the open item can only be replaced by another. Default: `true` */
  collapsible?: boolean
  children: ReactNode
}

export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Required, unique within an Accordion. Identifies this item in `value` / `defaultValue`. */
  value: string
  /** Heading level the trigger is wrapped in. Default: `3` */
  headingLevel?: AccordionHeadingLevel
  /** Disables this item — trigger ignores clicks/keys, content stays collapsed. */
  disabled?: boolean
  children: ReactNode
}

export interface AccordionTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Optional leading content (badge/icon) shown before the title text. */
  iconLeft?: ReactNode
  children: ReactNode
}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
