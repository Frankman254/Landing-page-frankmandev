"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function ToggleTheme() {
	const { resolvedTheme, setTheme } = useTheme()
	const { t } = useLanguage()
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<Button variant="outline" size="icon">
				<Sun className="h-[1.2rem] w-[1.2rem]" />
			</Button>
		)
	}

	const isDark = resolvedTheme === "dark"
	const nextTheme = isDark ? "light" : "dark"
	const srLabel = isDark ? t.a11y.switchToLight : t.a11y.switchToDark

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => setTheme(nextTheme)}
			aria-label={srLabel}
			title={isDark ? t.a11y.lightMode : t.a11y.darkMode}
		>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">{srLabel}</span>
		</Button>
	)
}
