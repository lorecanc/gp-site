import { BlurFade } from "@/components/ui/blur-fade"
import { team } from "@/lib/copy"

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}

export function Team() {
  return (
    <section
      id="il-team"
      className="bg-background py-20 md:py-24 scroll-mt-nav"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <BlurFade delay={0.05} inView>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {team.heading}
            </h2>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <p className="mt-4 text-lg text-muted-foreground">
              {team.subheading}
            </p>
          </BlurFade>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member, index) => (
            <BlurFade
              key={member.name}
              delay={0.1 + index * 0.1}
              inView
            >
              <article className="group flex h-full flex-col items-center rounded-md border border-border bg-card p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div
                  aria-hidden
                  className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-accent text-2xl font-extrabold text-primary"
                >
                  {getInitials(member.name)}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
