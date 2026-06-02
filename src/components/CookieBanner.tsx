import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cookieBanner } from "@/lib/copy"

const STORAGE_KEY = "gp-cookie-consent"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        // Small delay to avoid layout shift on first paint
        const timer = setTimeout(() => setVisible(true), 500)
        return () => clearTimeout(timer)
      }
    } catch {
      /* ignore */
    }
  }, [])

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted")
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  const handleReject = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "rejected")
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 p-4 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {cookieBanner.message}{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {cookieBanner.policyLink}
          </a>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleReject}>
            {cookieBanner.reject}
          </Button>
          <Button size="sm" onClick={handleAccept}>
            {cookieBanner.accept}
          </Button>
        </div>
      </div>
    </div>
  )
}
