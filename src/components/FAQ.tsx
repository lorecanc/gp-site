import * as Accordion from "@radix-ui/react-accordion"
import { BlurFade } from "@/components/ui/blur-fade"
import { faq } from "@/lib/copy"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  return (
    <section className="bg-muted/40 py-20 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BlurFade delay={0.05} inView>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {faq.heading}
            </h2>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <p className="mt-4 text-lg text-muted-foreground">
              {faq.subheading}
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} inView>
          <Accordion.Root
            type="single"
            collapsible
            className="mt-12 space-y-4"
          >
            {faq.items.map((item, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left text-base font-semibold text-foreground transition-colors hover:text-primary [&[data-state=open]>svg]:rotate-180">
                    {item.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-5 pb-5">
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </BlurFade>
      </div>
    </section>
  )
}
