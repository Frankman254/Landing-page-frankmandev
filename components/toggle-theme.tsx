"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ToggleTheme() {
	const { resolvedTheme, setTheme } = useTheme()
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
	const srLabel = isDark ? "Switch to light mode" : "Switch to dark mode"

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => setTheme(nextTheme)}
			aria-label={srLabel}
			title={isDark ? "Light mode" : "Dark mode"}
		>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">{srLabel}</span>
		</Button>
	)
}
