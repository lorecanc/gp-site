import { BlurFade } from "@/components/ui/blur-fade"
import { about } from "@/lib/copy"

export function About() {
  return (
    <section
      id="chi-siamo"
      className="bg-muted/40 py-20 md:py-24 scroll-mt-nav"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <BlurFade delay={0.05} inView>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {about.heading}
            </h2>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {about.paragraph}
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} inView>
          <div className="rounded-md bg-[var(--brand-light-blue-accent)] p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-foreground">
              I nostri valori
            </h3>
            <ul className="space-y-5">
              {about.values.map(({ icon: Icon, label }, index) => (
                  <BlurFade
                    key={label}
                    delay={0.2 + index * 0.1}
                    inView
                  >
                  <li className="flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-base font-semibold text-foreground">
                      {label}
                    </span>
                  </li>
                </BlurFade>
              ))}
            </ul>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
