"use client"

import * as React from "react"
import { Language, translations } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.es
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // Inicializar siempre con "es" para que servidor y cliente coincidan
  const [language, setLanguage] = React.useState<Language>("es")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // Solo después de montar, cargar idioma guardado en localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  React.useEffect(() => {
    if (mounted) {
      // Guardar idioma en localStorage cuando cambie (solo en cliente)
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
