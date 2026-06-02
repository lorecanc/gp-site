import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"
import { TypingCycle } from "@/components/ui/typing-cycle"
import { useContactDialog } from "@/lib/contact-dialog"
import { hero } from "@/lib/copy"

const typingPhrases = [
  "Buste paga e contributi",
  "Sicurezza sul lavoro",
  "Consulenza giuslavoristica",
  "Audit del costo del lavoro",
  "Contrattualistica",
]

export function Hero() {
  const { openDialog } = useContactDialog()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--brand-light-blue-tint)] py-20 md:py-28 lg:py-32 scroll-mt-nav"
    >
      <img
        src="/hero-bg.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[var(--brand-light-blue-tint)] via-[var(--brand-light-blue-tint)]/95 to-[var(--brand-light-blue-tint)]/40"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <BlurFade delay={0.05} inView>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {hero.heading}
            </h1>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              {hero.subtitle}
            </p>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-base sm:text-lg">
              <span className="text-muted-foreground">Specialisti in</span>
              <TypingCycle
                phrases={typingPhrases}
                className="text-xl sm:text-2xl"
              />
            </div>
          </BlurFade>
          <BlurFade delay={0.35} inView>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={hero.primaryCtaHref}>{hero.primaryCta}</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => openDialog()}
              >
                {hero.secondaryCta}
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
