import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { useContactDialog } from "@/lib/contact-dialog"
import { servicesDetail } from "@/lib/copy"

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { openDialog } = useContactDialog()
  const service = servicesDetail.items.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Servizio non trovato
        </h1>
        <p className="mt-4 text-muted-foreground">
          Il servizio che stai cercando non esiste o è stato rimosso.
        </p>
        <Button asChild className="mt-8" size="lg">
          <Link to="/">Torna alla Home</Link>
        </Button>
      </div>
    )
  }

  const { icon: Icon, title, longDescription, benefits } = service

  return (
    <div className="py-20 md:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.05} inView>
          <Link
            to="/#servizi"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna ai Servizi
          </Link>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-md bg-accent text-primary">
            <Icon className="h-8 w-8" aria-hidden />
          </div>
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {longDescription}
          </p>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="mt-12 rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-foreground">
              Cosa Include il Servizio
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-base text-muted-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <div className="mt-12 rounded-lg bg-[var(--brand-blue)] p-8 text-center text-white">
            <h2 className="text-2xl font-bold">
              Interessato a questo servizio?
            </h2>
            <p className="mt-2 text-lg text-white/90">
              Contattaci per una consulenza personalizzata e senza impegno.
            </p>
            <Button
              variant="ctaOutline"
              size="xl"
              className="mt-6"
              onClick={() => openDialog(title)}
            >
              Richiedi Informazioni
            </Button>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}
