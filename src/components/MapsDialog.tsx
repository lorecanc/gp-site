import { MapPin, Navigation, Map } from "lucide-react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

function encodeAddress(address: string): string {
  return encodeURIComponent(
    address
      .toLowerCase()
      .replace(/\s*\([^)]*\)\s*/g, "")
      .trim(),
  )
}

const mapsOptions = [
  {
    name: "Google Maps",
    icon: MapPin,
    url: (addr: string) =>
      `https://www.google.com/maps/search/?api=1&query=${encodeAddress(addr)}`,
  },
  {
    name: "Waze",
    icon: Navigation,
    url: (addr: string) =>
      `https://www.waze.com/ul?q=${encodeAddress(addr)}`,
  },
  {
    name: "Apple Maps",
    icon: Map,
    url: (addr: string) =>
      `https://maps.apple.com/?q=${encodeAddress(addr)}`,
  },
]

export function MapsDialog({
  open,
  onOpenChange,
  address,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  address: string
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 w-full max-w-sm translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          )}
        >
          <div className="flex items-center justify-between">
            <DialogPrimitive.Title className="text-lg font-semibold text-foreground">
              Apri con...
            </DialogPrimitive.Title>
            <DialogPrimitive.Close className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <X className="h-5 w-5" />
              <span className="sr-only">Chiudi</span>
            </DialogPrimitive.Close>
          </div>

          <div className="mt-6 space-y-3">
            {mapsOptions.map((option) => {
              const Icon = option.icon
              return (
                <a
                  key={option.name}
                  href={option.url(address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onOpenChange(false)}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {option.name}
                </a>
              )
            })}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
