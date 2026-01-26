"use client"

import { useEffect } from "react"
import { useLanguage } from "./language-provider"

export function LanguageScript() {
	const { language } = useLanguage()

	useEffect(() => {
		// Actualizar el atributo lang del HTML cuando cambie el idioma
		document.documentElement.lang = language
	}, [language])

	return null
}
