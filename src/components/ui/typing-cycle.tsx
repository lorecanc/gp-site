import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface TypingCycleProps {
  phrases: string[]
  className?: string
  typeSpeed?: number
  deleteSpeed?: number
  holdDelay?: number
  as?: React.ElementType
}

export function TypingCycle({
  phrases,
  className,
  typeSpeed = 90,
  deleteSpeed = 45,
  holdDelay = 1600,
  as: Tag = "span",
}: TypingCycleProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex] ?? ""
    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), holdDelay)
      return () => clearTimeout(timeout)
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }
    const delay = isDeleting ? deleteSpeed : typeSpeed
    const timeout = setTimeout(() => {
      setDisplayed((prev) =>
        isDeleting
          ? current.slice(0, Math.max(0, prev.length - 1))
          : current.slice(0, prev.length + 1),
      )
    }, delay)
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, holdDelay])

  return (
    <Tag
      className={cn(
        "inline-flex items-baseline gap-1 font-semibold text-primary",
        className,
      )}
      aria-live="polite"
    >
      <span>{displayed || "\u00A0"}</span>
      <span
        aria-hidden
        className="inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary motion-safe:animate-pulse"
      />
    </Tag>
  )
}
