import { TextRevealByWord } from "@/components/ui/text-reveal"

const revealText =
  "Oltre vent'anni di esperienza al servizio delle aziende italiane. Affidabilità, competenza, riservatezza e innovazione. Un metodo che mette le persone al centro e costruisce relazioni di lungo periodo."

export function TextRevealSection() {
  return (
    <section
      id="approccio"
      aria-label="Il nostro approccio"
      className="bg-[var(--brand-light-blue-tint)] py-10 md:py-14 scroll-mt-nav"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <TextRevealByWord text={revealText} />
      </div>
    </section>
  )
}
