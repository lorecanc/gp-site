import { BlurFade } from "@/components/ui/blur-fade"
import { testimonials } from "@/lib/copy"

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <BlurFade delay={0.05} inView>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {testimonials.heading}
            </h2>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <p className="mt-4 text-lg text-muted-foreground">
              {testimonials.subheading}
            </p>
          </BlurFade>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.items.map((item, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.1} inView>
              <blockquote className="h-full rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 text-primary">
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 28 22"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 12.2222V22H10.8889V12.2222H4.35556C5.13333 7.82222 7.77778 5.13333 12.4444 3.66667L11.6667 0C5.44444 1.95556 0 6.35556 0 12.2222ZM16.3333 12.2222V22H27.2222V12.2222H20.6889C21.4667 7.82222 24.1111 5.13333 28.7778 3.66667L28 0C21.7778 1.95556 16.3333 6.35556 16.3333 12.2222Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-card-foreground">
                  {item.quote}
                </p>
                <footer className="mt-4 border-t border-border pt-4">
                  <cite className="block text-sm font-semibold not-italic text-foreground">
                    {item.author}
                  </cite>
                  <span className="block text-sm text-muted-foreground">
                    {item.role}, {item.company}
                  </span>
                </footer>
              </blockquote>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
