import { NumberTicker } from "@/components/ui/number-ticker"
import { stats } from "@/lib/copy"

function splitValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { number: 0, suffix: value }
  return { number: Number(match[1]), suffix: match[2] }
}

export function StatsBar() {
  return (
    <section
      aria-label="Statistiche chiave"
      className="bg-brand-blue py-12 text-brand-blue-foreground"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:divide-x sm:divide-brand-blue-foreground/20">
          {stats.items.map((stat, index) => {
            const { number, suffix } = splitValue(stat.value)
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center px-4"
              >
                <dt className="text-sm font-medium uppercase tracking-wider text-brand-blue-foreground/80 sm:order-2">
                  {stat.label}
                </dt>
                <dd className="mt-2 flex items-baseline justify-center text-4xl font-extrabold tracking-tight sm:order-1 sm:text-5xl">
                  <NumberTicker
                    value={number}
                    delay={index * 0.2}
                    className="text-brand-blue-foreground"
                  />
                  {suffix && (
                    <span aria-hidden className="ml-0.5">
                      {suffix}
                    </span>
                  )}
                  <span className="sr-only">{stat.value}</span>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
