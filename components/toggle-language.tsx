"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"

export function ToggleLanguage() {
  const { language, setLanguage } = useLanguage()
  const nextLanguage = language === "es" ? "en" : "es"
  const currentLanguageLabel = language.toUpperCase()
  const srLabel = nextLanguage === "es" ? "Cambiar idioma a español" : "Switch language to English"

  return (
    <Button
      variant="outline"
      size="sm"
      className="min-w-10 px-2 font-semibold tracking-[0.18em]"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={srLabel}
      title={srLabel}
    >
      <span aria-hidden="true">{currentLanguageLabel}</span>
      <span className="sr-only">{srLabel}</span>
    </Button>
  )
}
