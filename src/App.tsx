import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PlatformProvider } from './docs/context/PlatformContext'
import { Sidebar }        from './docs/layout/Sidebar'
import { ColorsPage }     from './docs/foundation/ColorsPage'
import { TypographyPage } from './docs/foundation/TypographyPage'
import { SpacingPage }    from './docs/foundation/SpacingPage'
import { RadiiPage }      from './docs/foundation/RadiiPage'
import { ShadowsPage }    from './docs/foundation/ShadowsPage'
import { ButtonDoc }      from './docs/components/ButtonDoc'
import { SelectionControlsDoc } from './docs/components/SelectionControlsDoc'
import { FormsDoc }            from './docs/components/FormsDoc'
import { TooltipDoc }         from './docs/components/TooltipDoc'
import { NavBarDoc }          from './docs/components/NavBarDoc'
import { CardDoc }            from './docs/components/CardDoc'
import { ChipDoc }            from './docs/components/ChipDoc'
import { ModalDoc }           from './docs/components/ModalDoc'
import { ProviderCardDoc }    from './docs/components/ProviderCardDoc'
import { IconButtonDoc }      from './docs/components/IconButtonDoc'
import { StarRatingDoc }     from './docs/components/StarRatingDoc'
import { SideNavDoc }        from './docs/components/SideNavDoc'
import { ScrollAreaDoc }     from './docs/components/ScrollAreaDoc'
import { NetworkBadgeDoc }   from './docs/components/NetworkBadgeDoc'
import ToastDoc              from './docs/components/ToastDoc'

// Zoe component docs
import ZoeInputDoc            from './docs/components/ZoeInputDoc'
import ZoeThinkingLoaderDoc   from './docs/components/ZoeThinkingLoaderDoc'
import ZoeUserBubbleDoc       from './docs/components/ZoeUserBubbleDoc'
import ZoeResponseBubbleDoc   from './docs/components/ZoeResponseBubbleDoc'
import ZoeBenefitCardDoc      from './docs/components/ZoeBenefitCardDoc'
import ZoePromptChipDoc       from './docs/components/ZoePromptChipDoc'
import ZoeChatHeaderDoc       from './docs/components/ZoeChatHeaderDoc'
import ZoeDrawerDoc           from './docs/components/ZoeDrawerDoc'
import ZoeProviderCardDoc     from './docs/components/ZoeProviderCardDoc'
import ZoeStreamingTextDoc    from './docs/components/ZoeStreamingTextDoc'

// Examples / Patterns
import { LoginExample, LoginScreen }   from './docs/examples/LoginExample'
import { ProviderSearchResultsExample, ProviderSearchResultsScreen } from './docs/examples/ProviderSearchResultsExample'
import { HealtheeHomeExample, HealtheeHomeScreen } from './docs/examples/HealtheeHomeExample'
import ZoeChatExample from './docs/examples/ZoeChatExample'

import { IconPage } from './docs/pages/IconPage'
import { OverviewPage } from './docs/pages/OverviewPage'
import CarouselTestPage from './docs/pages/CarouselTestPage'

function App() {
  return (
    <BrowserRouter>
      <PlatformProvider>
      <Routes>

        {/* ── Carousel test (full-screen, no sidebar) ── */}
        <Route path="/preview/carousel" element={<CarouselTestPage />} />

        {/* ── Zoe Chat (full-screen, no sidebar) ── */}
        <Route path="/preview/zoe-chat" element={<ZoeChatExample />} />

        {/* ── Full-screen previews (no sidebar) ── */}
        <Route path="/preview/healthee-home" element={
          <div className="flex min-h-screen">
            <div className="w-full">
              <HealtheeHomeScreen />
            </div>
          </div>
        } />

<Route path="/preview/provider-search-results" element={
          <div className="flex min-h-screen">
            <div className="w-full">
              <ProviderSearchResultsScreen />
            </div>
          </div>
        } />

        <Route path="/preview/login" element={
          <div className="flex min-h-screen bg-neutral-subtle items-center justify-center">
            <div className="w-full max-w-[1440px] min-h-screen flex">
              <LoginScreen />
            </div>
          </div>
        } />

        {/* ── Main docs (with sidebar) ── */}
        <Route path="/*" element={
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <Routes>
                {/* Default redirect */}
                <Route path="/" element={<Navigate to="/overview" replace />} />
                <Route path="/overview" element={<OverviewPage />} />

                {/* Foundation */}
                <Route path="/foundation/colors"     element={<ColorsPage />} />
                <Route path="/foundation/typography" element={<TypographyPage />} />
                <Route path="/foundation/spacing"    element={<SpacingPage />} />
                <Route path="/foundation/radii"      element={<RadiiPage />} />
                <Route path="/foundation/shadows"    element={<ShadowsPage />} />
                <Route path="/foundation/icons"      element={<IconPage />} />

                {/* Components */}
                <Route path="/components/button" element={<ButtonDoc />} />
                <Route path="/components/icon-button" element={<IconButtonDoc />} />
                <Route path="/components/selection-controls" element={<SelectionControlsDoc />} />
                <Route path="/components/forms"    element={<FormsDoc />} />
                <Route path="/components/tooltip" element={<TooltipDoc />} />
                <Route path="/components/navbar" element={<NavBarDoc />} />
                <Route path="/components/card" element={<CardDoc />} />
                <Route path="/components/chip" element={<ChipDoc />} />
                <Route path="/components/modal" element={<ModalDoc />} />
                <Route path="/components/provider-card" element={<ProviderCardDoc />} />
                <Route path="/components/star-rating" element={<StarRatingDoc />} />
                <Route path="/components/sidenav" element={<SideNavDoc />} />
                <Route path="/components/scroll-area" element={<ScrollAreaDoc />} />
                <Route path="/components/network-badge" element={<NetworkBadgeDoc />} />
                <Route path="/components/toast" element={<ToastDoc />} />

                {/* Zoe AI Components */}
                <Route path="/components/zoe-input" element={<ZoeInputDoc />} />
                <Route path="/components/zoe-thinking-loader" element={<ZoeThinkingLoaderDoc />} />
                <Route path="/components/zoe-user-bubble" element={<ZoeUserBubbleDoc />} />
                <Route path="/components/zoe-response-bubble" element={<ZoeResponseBubbleDoc />} />
                <Route path="/components/zoe-benefit-card" element={<ZoeBenefitCardDoc />} />
                <Route path="/components/zoe-prompt-chip" element={<ZoePromptChipDoc />} />
                <Route path="/components/zoe-chat-header" element={<ZoeChatHeaderDoc />} />
                <Route path="/components/zoe-drawer" element={<ZoeDrawerDoc />} />
                <Route path="/components/zoe-provider-card" element={<ZoeProviderCardDoc />} />
                <Route path="/components/zoe-streaming-text" element={<ZoeStreamingTextDoc />} />

                {/* Patterns / Examples */}
                <Route path="/examples/login" element={<LoginExample />} />
                <Route path="/examples/provider-search-results" element={<ProviderSearchResultsExample />} />
                <Route path="/examples/healthee-home" element={<HealtheeHomeExample />} />
                <Route path="/examples/zoe-chat" element={<ZoeChatExample />} />
                <Route path="/examples/*" element={
                  <div className="flex items-center justify-center h-full p-xxl">
                    <p className="font-default text-neutral-text-light text-[15px]">Example coming soon...</p>
                  </div>
                } />

                {/* Lab — empty now */}
                <Route path="/lab/*" element={
                  <div className="flex items-center justify-center h-full p-xxl">
                    <div className="text-center">
                      <p className="font-default font-medium text-[18px] text-neutral mb-xxs">Lab</p>
                      <p className="font-default text-neutral-text-light text-[14px]">Work-in-progress components will appear here.</p>
                    </div>
                  </div>
                } />

                {/* Catch-all */}
                <Route path="/components/*" element={
                  <div className="flex items-center justify-center h-full p-xxl">
                    <p className="font-default text-neutral-text-light text-[15px]">Component documentation coming soon...</p>
                  </div>
                } />
              </Routes>
            </main>
          </div>
        } />

      </Routes>
      </PlatformProvider>
    </BrowserRouter>
  )
}

export default App
