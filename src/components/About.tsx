import { BlurFade } from "@/components/ui/blur-fade"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
          <Card className="border-border bg-background shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-semibold text-foreground">
                I nostri valori
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {about.values.map(({ icon: Icon, label, description }, index) => (
                <BlurFade
                  key={label}
                  delay={0.2 + index * 0.1}
                  inView
                >
                  <div className="flex items-start gap-4 pb-6 border-b border-border last:border-b-0 last:pb-0">
                    <div className="flex-shrink-0 mt-0.5">
                      <Icon className="h-6 w-6 text-primary" aria-hidden />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {label}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </section>
  )
}
