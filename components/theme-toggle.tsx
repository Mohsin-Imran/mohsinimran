"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const dark = !mounted || resolvedTheme !== "light"

  return (
    <div className="flex items-center rounded-full border border-[var(--site-line)] bg-[var(--site-card)] p-0.5">
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        aria-pressed={dark}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
          dark ? "bg-[#7CFFB2] text-[var(--site-on-mint)]" : "text-[var(--site-nav)]"
        }`}
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        aria-pressed={!dark}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
          !dark ? "bg-[#7CFFB2] text-[var(--site-on-mint)]" : "text-[var(--site-nav)]"
        }`}
      >
        <Sun className="h-4 w-4" />
      </button>
    </div>
  )
}
