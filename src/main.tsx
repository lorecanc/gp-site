import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import { ThemeProvider } from "@/lib/theme"
import { ContactDialogProvider } from "@/lib/contact-dialog"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ContactDialogProvider>
          <App />
        </ContactDialogProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
