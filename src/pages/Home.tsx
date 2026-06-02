import { Hero } from "@/components/Hero"
import { StatsBar } from "@/components/StatsBar"
import { Services } from "@/components/Services"
import { About } from "@/components/About"
import { TextRevealSection } from "@/components/TextRevealSection"
import { Team } from "@/components/Team"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { CTABanner } from "@/components/CTABanner"

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <About />
      <TextRevealSection />
      <Team />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  )
}
