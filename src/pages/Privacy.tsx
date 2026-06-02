import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { privacy } from "@/lib/copy"

export default function Privacy() {
  return (
    <div className="py-20 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.05} inView>
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {privacy.heading}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Ultimo aggiornamento: {privacy.lastUpdated}
          </p>
        </BlurFade>

        <div className="mt-12 space-y-10">
          {privacy.sections.map((section, index) => (
            <BlurFade key={index} delay={0.15 + index * 0.08} inView>
              <section>
                <h2 className="text-xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </section>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  )
}
