"use client"

import * as React from "react"
import { Language, translations } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.es
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

function getPreferredLanguage(initialLanguage: Language): Language {
  if (typeof window === "undefined") {
    return initialLanguage
  }

  let savedLanguage: string | null = null

  try {
    savedLanguage = localStorage.getItem("language")
  } catch {}

  if (savedLanguage === "es" || savedLanguage === "en") {
    return savedLanguage
  }

  const deviceLanguage = window.navigator.language?.toLowerCase()
  if (deviceLanguage?.startsWith("es")) {
    return "es"
  }

  return initialLanguage
}

export function LanguageProvider({
  initialLanguage,
  children,
}: {
  initialLanguage: Language
  children: React.ReactNode
}) {
  const [language, setLanguage] = React.useState<Language>(initialLanguage)
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setLanguage(getPreferredLanguage(initialLanguage))
    setIsReady(true)
  }, [initialLanguage])

  React.useEffect(() => {
    if (typeof window !== "undefined" && isReady) {
      try {
        localStorage.setItem("language", language)
      } catch {}

      document.cookie = `language=${language}; path=/; max-age=31536000; samesite=lax`
    }
  }, [isReady, language])

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
