import { useState, useEffect, useRef, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import ChevronSmallDownLine from '../../components/Icon/icons/line/ChevronSmallDown'
import SearchLine from '../../components/Icon/icons/line/Search'
import { usePlatform, type Platform } from '../context/PlatformContext'

// ── Types ────────────────────────────────────────────────────
type LabStatus = 'draft' | 'review' | 'ready'

interface SidebarItem {
  label: string
  path: string
  status?: LabStatus
  platforms?: Platform[]
}

interface SidebarSubGroup {
  title: string
  items: SidebarItem[]
}

interface SidebarSection {
  title: string
  items?: SidebarItem[]
  groups?: SidebarSubGroup[]
  defaultOpen?: boolean
}

// ── Status Badge Config ──────────────────────────────────────
const STATUS_CONFIG: Record<LabStatus, { label: string; bg: string; color: string }> = {
  draft:  { label: 'Draft',  bg: '#f0f0f0', color: '#666666' },
  review: { label: 'Review', bg: '#fff3e6', color: '#d4710a' },
  ready:  { label: 'Ready',  bg: '#e8f5e8', color: '#317233' },
}

const PLATFORM_BADGE_CONFIG: Record<Platform, { label: string; bg: string; color: string }> = {
  web:    { label: 'Web',    bg: '#e8f0fe', color: '#1a5fb4' },
  native: { label: 'Native', bg: '#f3e8ff', color: '#7c3aed' },
}

// ── Sections Data ────────────────────────────────────────────
const sections: SidebarSection[] = [
  {
    title: 'Foundation',
    defaultOpen: true,
    items: [
      { label: 'Colors',      path: '/foundation/colors' },
      { label: 'Typography',  path: '/foundation/typography' },
      { label: 'Spacing',     path: '/foundation/spacing' },
      { label: 'Radii',       path: '/foundation/radii' },
      { label: 'Shadows',     path: '/foundation/shadows' },
      { label: 'Icons',       path: '/foundation/icons' },
    ],
  },
  {
    title: 'Components',
    defaultOpen: true,
    groups: [
      {
        title: 'Actions',
        items: [
          { label: 'Button',      path: '/components/button',      platforms: ['web'] },
          { label: 'Icon Button', path: '/components/icon-button', platforms: ['web'] },
        ],
      },
      {
        title: 'Forms & Input',
        items: [
          { label: 'Checkbox',     path: '/components/selection-controls', platforms: ['web'] },
          { label: 'Radio Button', path: '/components/selection-controls', platforms: ['web'] },
          { label: 'Toggle',       path: '/components/selection-controls', platforms: ['web'] },
          { label: 'Text Input',   path: '/components/forms',             platforms: ['web'] },
          { label: 'Select',       path: '/components/forms',             platforms: ['web'] },
          { label: 'Date Picker',  path: '/components/forms',             platforms: ['web'] },
        ],
      },
      {
        title: 'Data Display',
        items: [
          { label: 'Avatar',        path: '/components/navbar',         platforms: ['web'] },
          { label: 'Card',          path: '/components/card',           platforms: ['web'] },
          { label: 'Chip',          path: '/components/chip',           platforms: ['web'] },
          { label: 'Star Rating',    path: '/components/star-rating',    platforms: ['web'] },
          { label: 'Provider Card',  path: '/components/provider-card',  platforms: ['web'] },
          { label: 'Network Badge',  path: '/components/network-badge',  platforms: ['web'] },
          { label: 'Scroll Area',    path: '/components/scroll-area',    platforms: ['web'] },
        ],
      },
      {
        title: 'Feedback & Overlay',
        items: [
          { label: 'Tooltip', path: '/components/tooltip', platforms: ['web'] },
          { label: 'Modal',   path: '/components/modal',   platforms: ['web'] },
        ],
      },
      {
        title: 'Navigation',
        items: [
          { label: 'NavBar', path: '/components/navbar', platforms: ['web'] },
          { label: 'SideNav', path: '/components/sidenav', platforms: ['web'] },
        ],
      },
    ],
  },
  {
    title: 'Patterns',
    defaultOpen: true,
    items: [
      { label: 'Healthee Home',           path: '/examples/healthee-home',             platforms: ['web'] },
      { label: 'Provider Search Results', path: '/examples/provider-search-results',   platforms: ['web'] },
      { label: 'Login',                   path: '/examples/login',                     platforms: ['web'] },
    ],
  },
  {
    title: 'Lab',
    defaultOpen: true,
    items: [
      { label: 'ZoeInput', path: '/lab/zoe-input', status: 'ready', platforms: ['web'] },
      { label: 'ZoeThinkingLoader', path: '/lab/zoe-thinking-loader', status: 'ready', platforms: ['web'] },
      { label: 'ZoeUserBubble', path: '/lab/zoe-user-bubble', status: 'ready', platforms: ['web'] },
      { label: 'ZoeResponseBubble', path: '/lab/zoe-response-bubble', status: 'ready', platforms: ['web'] },
      { label: 'ZoeBenefitCard', path: '/lab/zoe-benefit-card', status: 'ready', platforms: ['web'] },
      { label: 'ZoePromptChip', path: '/lab/zoe-prompt-chip', status: 'ready', platforms: ['web'] },
      { label: 'ZoeChatHeader', path: '/lab/zoe-chat-header', status: 'ready', platforms: ['web'] },
      { label: 'ZoeDrawer', path: '/lab/zoe-drawer', status: 'ready', platforms: ['web'] },
      { label: 'ZoeProviderCard', path: '/lab/zoe-provider-card', status: 'ready', platforms: ['web'] },
      { label: 'Zoe Chat Demo', path: '/lab/zoe-chat-demo', status: 'ready', platforms: ['web'] },
    ],
  },
]

// ── localStorage Persistence ─────────────────────────────────
const STORAGE_KEY = 'glow-ds-sidebar-state'

function getInitialOpenState(): Record<string, boolean> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch { /* ignore */ }
  return Object.fromEntries(sections.map(s => [s.title, s.defaultOpen ?? true]))
}

// ── Helper: check if item is available on current platform ───
function isAvailableOnPlatform(item: SidebarItem, platform: Platform): boolean {
  if (!item.platforms) return true // no restriction = both platforms
  return item.platforms.includes(platform)
}

function getOtherPlatform(item: SidebarItem, platform: Platform): Platform | null {
  if (!item.platforms || item.platforms.includes(platform)) return null
  return item.platforms[0]
}

// ── Sub-Components ───────────────────────────────────────────

function StatusBadge({ status }: { status: LabStatus }) {
  const cfg = STATUS_CONFIG[status]
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 9,
        fontWeight: 500,
        lineHeight: '14px',
        padding: '0 5px',
        borderRadius: 999,
        backgroundColor: cfg.bg,
        color: cfg.color,
        marginLeft: 4,
        verticalAlign: 'middle',
        letterSpacing: '0.02em',
      }}
    >
      {cfg.label}
    </span>
  )
}

function PlatformBadge({ platform }: { platform: Platform }) {
  const cfg = PLATFORM_BADGE_CONFIG[platform]
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 9,
        fontWeight: 500,
        lineHeight: '14px',
        padding: '0 5px',
        borderRadius: 999,
        backgroundColor: cfg.bg,
        color: cfg.color,
        marginLeft: 4,
        verticalAlign: 'middle',
        letterSpacing: '0.02em',
      }}
    >
      {cfg.label}
    </span>
  )
}

function SidebarNavItem({ item, indent, currentPlatform }: { item: SidebarItem; indent?: boolean; currentPlatform: Platform }) {
  const available = isAvailableOnPlatform(item, currentPlatform)
  const otherPlatform = getOtherPlatform(item, currentPlatform)

  return (
    <li>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `block py-xxs rounded-xxxs font-default text-[13px] transition-colors ${
            indent ? 'pl-m pr-xs' : 'px-xs'
          } ${
            !available
              ? 'opacity-40 pointer-events-none'
              : isActive
                ? 'bg-primary-subtle text-primary font-medium'
                : 'text-neutral-text-dark hover:bg-neutral-subtle hover:text-neutral'
          }`
        }
        tabIndex={available ? undefined : -1}
      >
        {item.label}
        {item.status && <StatusBadge status={item.status} />}
        {otherPlatform && <PlatformBadge platform={otherPlatform} />}
      </NavLink>
    </li>
  )
}

function SectionHeader({
  title,
  isOpen,
  onToggle,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full flex items-center justify-between px-xs mb-xxs cursor-pointer group"
      style={{ background: 'none', border: 'none', padding: '4px 12px' }}
    >
      <span className="font-default font-medium text-[10px] text-neutral-text-light uppercase tracking-widest">
        {title}
      </span>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
          transition: 'transform 150ms ease',
          opacity: 0.5,
        }}
      >
        <ChevronSmallDownLine size="xs" />
      </span>
    </button>
  )
}

function SubGroupHeader({ title }: { title: string }) {
  return (
    <p
      className="font-default font-medium text-neutral-text-light"
      style={{ fontSize: 11, padding: '0 12px', margin: '10px 0 2px 0' }}
    >
      {title}
    </p>
  )
}

// ── Main Sidebar ─────────────────────────────────────────────

// ── Search helpers ───────────────────────────────────────────
interface SearchResult {
  item: SidebarItem
  sectionTitle: string
}

function collectSearchResults(query: string, platform: Platform): SearchResult[] {
  const q = query.toLowerCase().trim()
  if (!q) return []

  const results: SearchResult[] = []
  for (const section of sections) {
    // Flat items
    if (section.items) {
      for (const item of section.items) {
        if (!isAvailableOnPlatform(item, platform)) continue
        if (item.label.toLowerCase().includes(q)) {
          results.push({ item, sectionTitle: section.title })
        }
      }
    }
    // Grouped items
    if (section.groups) {
      for (const group of section.groups) {
        for (const item of group.items) {
          if (!isAvailableOnPlatform(item, platform)) continue
          if (item.label.toLowerCase().includes(q)) {
            results.push({ item, sectionTitle: section.title })
          }
        }
      }
    }
  }
  return results
}

export function Sidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(getInitialOpenState)
  const { platform } = usePlatform()
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  // Persist open state
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(openSections))
  }, [openSections])

  // Cmd+K / Ctrl+K to focus search
  const handleGlobalKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      searchRef.current?.focus()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeyDown)
    return () => document.removeEventListener('keydown', handleGlobalKeyDown)
  }, [handleGlobalKeyDown])

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }))
  }

  // Filter out sections with no content
  const visibleSections = sections.filter(s =>
    (s.items && s.items.length > 0) || (s.groups && s.groups.length > 0)
  )

  const isSearching = searchQuery.trim().length > 0
  const searchResults = isSearching ? collectSearchResults(searchQuery, platform) : []

  // Group search results by section for display
  const resultsBySection: Record<string, SidebarItem[]> = {}
  for (const r of searchResults) {
    if (!resultsBySection[r.sectionTitle]) resultsBySection[r.sectionTitle] = []
    resultsBySection[r.sectionTitle].push(r.item)
  }

  return (
    <aside className="w-[220px] shrink-0 h-screen sticky top-0 bg-neutral-negative border-r border-neutral-border-light overflow-y-auto flex flex-col">
      {/* Logo */}
      <div className="px-s py-m border-b border-neutral-border-light">
        <div className="flex items-center gap-xxs">
          <div className="w-[28px] h-[28px] rounded-xxs bg-primary flex items-center justify-center">
            <span className="text-white font-default font-medium text-[13px]">G</span>
          </div>
          <div>
            <p className="font-default font-medium text-[13px] text-neutral leading-none">Glow DS</p>
            <p className="font-default text-[11px] text-neutral-text-light leading-none mt-[3px]">Design System</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div style={{ padding: '12px 12px 4px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 10px',
            borderRadius: 999,
            border: '1px solid #ededed',
            background: '#fafafa',
            transition: 'border-color 150ms',
          }}
        >
          <SearchLine size="sm" style={{ color: '#8a8a8a', flexShrink: 0 }} />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={e => { if (e.key === 'Escape') { setSearchQuery(''); searchRef.current?.blur() } }}
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              fontFamily: 'Founders Grotesk, sans-serif',
              fontSize: 13,
              lineHeight: '18px',
              color: '#000',
              width: '100%',
            }}
          />
          {isSearching && (
            <button
              onClick={() => { setSearchQuery(''); searchRef.current?.focus() }}
              style={{
                background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                fontFamily: 'Founders Grotesk, sans-serif', fontSize: 11, color: '#8a8a8a',
                flexShrink: 0, lineHeight: 1,
              }}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Overview Link (hidden during search) */}
      {!isSearching && (
        <div className="pt-xxs px-xs pb-xxs">
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              `block px-xs py-xxs rounded-xxxs font-default text-[13px] font-medium transition-colors ${
                isActive
                  ? 'bg-primary-subtle text-primary'
                  : 'text-neutral hover:bg-neutral-subtle'
              }`
            }
          >
            Overview
          </NavLink>
        </div>
      )}

      {/* ── Search results ── */}
      {isSearching ? (
        <nav className="flex-1 py-xxs px-xs">
          {searchResults.length === 0 ? (
            <p className="font-default text-[13px] text-neutral-text-light px-xs py-m text-center">
              No results for &ldquo;{searchQuery}&rdquo;
            </p>
          ) : (
            Object.entries(resultsBySection).map(([sectionTitle, items]) => (
              <div key={sectionTitle} className="mb-xs">
                <p className="font-default font-medium text-[10px] text-neutral-text-light uppercase tracking-widest" style={{ padding: '4px 12px' }}>
                  {sectionTitle}
                </p>
                <ul className="space-y-[2px]">
                  {items.map(item => (
                    <SidebarNavItem key={item.label + item.path} item={item} currentPlatform={platform} />
                  ))}
                </ul>
              </div>
            ))
          )}
        </nav>
      ) : (
        /* ── Normal sections ── */
        <nav className="flex-1 py-xxs px-xs">
          {visibleSections.map((section) => {
            const isOpen = openSections[section.title] ?? true

            return (
              <div key={section.title} className="mb-xs">
                <SectionHeader
                  title={section.title}
                  isOpen={isOpen}
                  onToggle={() => toggleSection(section.title)}
                />

                {isOpen && (
                  <>
                    {/* Flat items (Foundation, Patterns, Lab) */}
                    {section.items && (
                      <ul className="space-y-[2px]">
                        {section.items.map(item => (
                          <SidebarNavItem key={item.label} item={item} currentPlatform={platform} />
                        ))}
                      </ul>
                    )}

                    {/* Grouped items (Components) */}
                    {section.groups && section.groups.map((group, gi) => (
                      <div key={group.title} style={{ marginTop: gi === 0 ? 0 : 4 }}>
                        <SubGroupHeader title={group.title} />
                        <ul className="space-y-[2px]">
                          {group.items.map(item => (
                            <SidebarNavItem key={item.label} item={item} indent currentPlatform={platform} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )
          })}
        </nav>
      )}

      {/* Footer */}
      <div className="px-s py-xs border-t border-neutral-border-light">
        <p className="font-default text-[11px] text-neutral-text-light">v1.0.0</p>
      </div>
    </aside>
  )
}
