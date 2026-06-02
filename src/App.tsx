import { Suspense } from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ContactDialog } from "@/components/ContactDialog"
import { CookieBanner } from "@/components/CookieBanner"
import Home from "@/pages/Home"
import ServiceDetail from "@/pages/ServiceDetail"
import Privacy from "@/pages/Privacy"

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ContactDialog />
      <CookieBanner />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Caricamento...</div>}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servizi/:slug" element={<ServiceDetail />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
