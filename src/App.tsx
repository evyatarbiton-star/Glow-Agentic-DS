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
import { NetworkBadgeDoc }   from './docs/components/NetworkBadgeDoc'
import { LoginExample, LoginScreen }   from './docs/examples/LoginExample'
import { ProviderSearchResultsExample, ProviderSearchResultsScreen } from './docs/examples/ProviderSearchResultsExample'
import { HealtheeHomeExample, HealtheeHomeScreen } from './docs/examples/HealtheeHomeExample'
import { IconPage } from './docs/pages/IconPage'
import { OverviewPage } from './docs/pages/OverviewPage'
import { ProviderCardV2Lab } from './docs/lab/ProviderCardV2Lab'

function App() {
  return (
    <BrowserRouter>
      <PlatformProvider>
      <Routes>

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
                <Route path="/components/network-badge" element={<NetworkBadgeDoc />} />
                <Route path="/components/star-rating" element={<StarRatingDoc />} />

                {/* Examples */}
                <Route path="/examples/login" element={<LoginExample />} />
                <Route path="/examples/provider-search-results" element={<ProviderSearchResultsExample />} />
                <Route path="/examples/healthee-home" element={<HealtheeHomeExample />} />
                <Route path="/examples/*" element={
                  <div className="flex items-center justify-center h-full p-xxl">
                    <p className="font-default text-neutral-text-light text-[15px]">Example coming soon...</p>
                  </div>
                } />

                {/* Lab */}
                <Route path="/lab/provider-card-v2" element={<ProviderCardV2Lab />} />

                {/* Catch-all for lab */}
                <Route path="/lab/*" element={
                  <div className="flex items-center justify-center h-full p-xxl">
                    <div className="text-center">
                      <p className="font-default font-medium text-[18px] text-neutral mb-xxs">Lab</p>
                      <p className="font-default text-neutral-text-light text-[14px]">Work-in-progress components will appear here.</p>
                    </div>
                  </div>
                } />

                {/* Catch-all for future components */}
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
