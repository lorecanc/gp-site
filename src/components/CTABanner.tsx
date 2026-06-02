import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"
import { useContactDialog } from "@/lib/contact-dialog"
import { cta } from "@/lib/copy"

export function CTABanner() {
  const { openDialog } = useContactDialog()

  return (
    <section id="contatti" className="scroll-mt-nav">
      <div className="bg-[var(--brand-blue)] py-20 text-white md:py-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <BlurFade delay={0.05} inView>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {cta.heading}
            </h2>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
              {cta.subtext}
            </p>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <Button
              variant="ctaOutline"
              size="xl"
              className="mt-8"
              onClick={() => openDialog()}
            >
              {cta.button}
            </Button>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
