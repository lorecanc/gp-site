import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useContactDialog } from "@/lib/contact-dialog"
import { brand, footer } from "@/lib/copy"

type ContactItem = {
  key: string
  Icon: typeof footer.contactIcons.address
  value: string
  href?: string
}

const contactItems: ContactItem[] = [
  {
    key: "address",
    Icon: footer.contactIcons.address,
    value: footer.contact.address,
  },
  {
    key: "email",
    Icon: footer.contactIcons.email,
    value: footer.contact.email,
    href: `mailto:${footer.contact.email}`,
  },
  {
    key: "phone",
    Icon: footer.contactIcons.phone,
    value: footer.contact.phone,
    href: `tel:${footer.contact.phone.replace(/\s/g, "")}`,
  },
]

export function Footer() {
  const { openDialog } = useContactDialog()

  return (
    <footer className="bg-[var(--brand-dark)] text-[var(--brand-dark-foreground)]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-2xl font-extrabold text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                {brand.name}
              </span>
              <span className="text-base font-bold">{brand.fullName}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {brand.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Link Rapidi
            </h3>
            <ul className="mt-4 space-y-2">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contatti
            </h3>
            <ul className="mt-4 space-y-3">
              {contactItems.map(({ key, Icon, value, href }) => {
                const inner = (
                  <span className="flex items-start gap-3 text-sm text-white/70 transition-colors group-hover:text-white">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    <span>{value}</span>
                  </span>
                )
                return (
                  <li key={key} className="group">
                    {href ? (
                      <a href={href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                )
              })}
              <li>
                <Button
                  variant="ctaOutline"
                  size="sm"
                  className="mt-2"
                  onClick={() => openDialog()}
                >
                  Contattaci
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-white/60 sm:text-sm">
            {brand.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
