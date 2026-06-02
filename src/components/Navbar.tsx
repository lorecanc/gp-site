import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { useTheme } from "@/lib/theme"
import { useContactDialog } from "@/lib/contact-dialog"
import { brand, nav } from "@/lib/copy"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { openDialog } = useContactDialog()
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)
  const handleCTAClick = () => {
    setOpen(false)
    openDialog()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navigazione principale"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-primary"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            {brand.name}
          </span>
          <span className="hidden text-base font-bold sm:inline">
            {brand.fullName}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={cn(
                  "text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? nav.themeToggleLight : nav.themeToggleDark
            }
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button className="hidden sm:inline-flex" onClick={handleCTAClick}>
            {nav.cta}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={nav.openMenu}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-primary">
                  {brand.fullName}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {nav.links.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      to={link.href}
                      onClick={handleLinkClick}
                      className="rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    className="mt-4 w-full"
                    size="lg"
                    onClick={handleCTAClick}
                  >
                    {nav.cta}
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
