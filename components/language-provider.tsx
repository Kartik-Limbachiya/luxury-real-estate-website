"use client"

import { createContext, useContext, useMemo, useState, ReactNode } from "react"

type Language = "en" | "hi"

type LanguageContextValue = {
  language: Language
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const value = useMemo(
    () => ({
      language,
      toggle: () => setLanguage((prev) => (prev === "en" ? "hi" : "en")),
    }),
    [language],
  )
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

