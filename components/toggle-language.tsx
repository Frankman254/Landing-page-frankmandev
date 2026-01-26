"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ToggleLanguage() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("es")}>
          <span className={language === "es" ? "font-bold" : ""}>🇪🇸 Español</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          <span className={language === "en" ? "font-bold" : ""}>🇺🇸 English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
