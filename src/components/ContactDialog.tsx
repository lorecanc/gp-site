import { useState, useEffect } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X, CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useContactDialog } from "@/lib/contact-dialog"
import { contactForm } from "@/lib/copy"
import { Button } from "@/components/ui/button"

type FormStatus = "idle" | "submitting" | "success" | "error"

type FormErrors = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone: string): boolean {
  if (!phone) return true
  return /^[+]?[\d\s()-]{6,20}$/.test(phone)
}

function validateForm(data: {
  name: string
  email: string
  phone: string
  message: string
}): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = "Il nome e obbligatorio"
  if (!data.email.trim()) errors.email = "L'email e obbligatoria"
  else if (!validateEmail(data.email)) errors.email = "Email non valida"
  if (data.phone && !validatePhone(data.phone))
    errors.phone = "Numero di telefono non valido"
  if (!data.message.trim()) errors.message = "Il messaggio e obbligatorio"
  return errors
}

export function ContactDialog() {
  const { open, setOpen, preselectedService } = useContactDialog()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    if (open) {
      setService(preselectedService ?? "")
      if (status === "success" || status === "error") {
        setStatus("idle")
      }
      setErrors({})
    }
  }, [open, preselectedService])

  const handleOpenChange = (next: boolean) => {
    if (status === "submitting") return
    setOpen(next)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formErrors = validateForm({ name, email, phone, message })
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setErrors({})
    setStatus("submitting")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY",
          name,
          email,
          phone,
          service,
          message,
          subject: `Richiesta consulenza: ${service || "Generale"}`,
          from_name: "GP Consulenti del Lavoro",
        }),
      })

      if (!response.ok) throw new Error("Errore nell'invio")

      setStatus("success")
      setName("")
      setEmail("")
      setPhone("")
      setService("")
      setMessage("")
    } catch {
      setStatus("error")
    }
  }

  const handleReset = () => {
    setStatus("idle")
    setOpen(false)
  }

  const inputClasses = (hasError: boolean) =>
    cn(
      "w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20",
      hasError
        ? "border-destructive focus:border-destructive"
        : "border-input focus:border-primary",
    )

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          )}
        >
          {status === "success" ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle className="mb-4 h-14 w-14 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">
                {contactForm.success.title}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {contactForm.success.description}
              </p>
              <Button onClick={handleReset} className="mt-6" size="lg">
                Chiudi
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <DialogPrimitive.Title className="text-lg font-semibold text-foreground">
                    {contactForm.title}
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="mt-1 text-sm text-muted-foreground">
                    {contactForm.description}
                  </DialogPrimitive.Description>
                </div>
                <DialogPrimitive.Close
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  disabled={status === "submitting"}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Chiudi</span>
                </DialogPrimitive.Close>
              </div>

              {status === "error" && (
                <div className="mt-4 flex items-center gap-2 rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>Errore nell'invio. Riprova o contattaci via email.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground"
                  >
                    {contactForm.fields.name.label}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
                    }}
                    placeholder={contactForm.fields.name.placeholder}
                    className={inputClasses(!!errors.name)}
                    disabled={status === "submitting"}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground"
                  >
                    {contactForm.fields.email.label}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                    }}
                    placeholder={contactForm.fields.email.placeholder}
                    className={inputClasses(!!errors.email)}
                    disabled={status === "submitting"}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-foreground"
                  >
                    {contactForm.fields.phone.label}
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value)
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
                    }}
                    placeholder={contactForm.fields.phone.placeholder}
                    className={inputClasses(!!errors.phone)}
                    disabled={status === "submitting"}
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium text-foreground"
                  >
                    {contactForm.fields.service.label}
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    disabled={status === "submitting"}
                  >
                    <option value="">
                      {contactForm.fields.service.placeholder}
                    </option>
                    {contactForm.fields.service.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-foreground"
                  >
                    {contactForm.fields.message.label}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value)
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }))
                    }}
                    placeholder={contactForm.fields.message.placeholder}
                    className={inputClasses(!!errors.message)}
                    disabled={status === "submitting"}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {contactForm.submitting}
                    </>
                  ) : (
                    contactForm.submit
                  )}
                </Button>
              </form>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
