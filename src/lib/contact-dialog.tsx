import * as React from "react"

type ContactDialogContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  preselectedService: string | undefined
  openDialog: (service?: string) => void
}

const ContactDialogContext =
  React.createContext<ContactDialogContextValue | undefined>(undefined)

export function ContactDialogProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  const [preselectedService, setPreselectedService] = React.useState<
    string | undefined
  >(undefined)

  const openDialog = React.useCallback((service?: string) => {
    setPreselectedService(service)
    setOpen(true)
  }, [])

  const value = React.useMemo(
    () => ({ open, setOpen, preselectedService, openDialog }),
    [open, preselectedService, openDialog],
  )

  return (
    <ContactDialogContext.Provider value={value}>
      {children}
    </ContactDialogContext.Provider>
  )
}

export function useContactDialog() {
  const ctx = React.useContext(ContactDialogContext)
  if (!ctx)
    throw new Error(
      "useContactDialog must be used within a ContactDialogProvider",
    )
  return ctx
}
