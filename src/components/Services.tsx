import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BlurFade } from "@/components/ui/blur-fade"
import { services, servicesDetail } from "@/lib/copy"

export function Services() {
  return (
    <section
      id="servizi"
      className="bg-background py-20 md:py-24 scroll-mt-nav"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <BlurFade delay={0.05} inView>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {services.heading}
            </h2>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <p className="mt-4 text-lg text-muted-foreground">
              {services.subheading}
            </p>
          </BlurFade>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map(({ icon: Icon, title, description }, index) => {
            const detail = servicesDetail.items.find(
              (s) => s.title === title,
            )
            const slug = detail?.slug

            return (
              <BlurFade key={title} delay={0.1 + index * 0.1} inView>
                <Link to={slug ? `/servizi/${slug}` : "/"} className="block h-full">
                  <Card className="h-full border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 cursor-pointer">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <CardTitle className="text-lg text-foreground">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {description}
                      </CardDescription>
                      <div className="mt-6 flex items-center justify-end gap-1.5 text-sm font-medium text-primary">
                        <span>Scopri di più</span>
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
