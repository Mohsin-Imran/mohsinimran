"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Briefcase, Code2, FolderKanban, HelpCircle, Home, Layers, Mail, Menu, Newspaper, User, X, type LucideIcon } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false)
    }
    window.addEventListener("keydown", closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [isMobileMenuOpen])

  const navItems: { label: string; icon: LucideIcon }[] = [
    { label: "Home", icon: Home },
    { label: "About", icon: User },
    { label: "Services", icon: Layers },
    { label: "Skills", icon: Code2 },
    { label: "Experience", icon: Briefcase },
    { label: "Projects", icon: FolderKanban },
    { label: "FAQ", icon: HelpCircle },
    { label: "Blog", icon: Newspaper },
    { label: "Contact", icon: Mail },
  ]
  const getNavHref = (item: string) => {
    if (item === "Home") return "/"
    if (item === "Services") return "/services"
    if (item === "Blog") return "/blog"
    return `/#${item.toLowerCase()}`
  }

  return (
    <header className={`fixed top-0 left-0 right-0 px-4 pt-4 sm:px-6 ${isMobileMenuOpen ? "z-[80]" : "z-50"}`}>
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 lg:px-5 ${
          isScrolled
            ? "border-white/10 bg-[#071018]/90 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-white/10 bg-[#071018]/55 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src="/logo.png?v=2" alt="Mohsin Stack logo" fill sizes="40px" className="object-cover" />
          </div>
          <span className="truncate text-sm font-semibold tracking-tight text-[#f4f1ea] sm:text-base">
            Mohsin Imran
          </span>
        </Link>

        <ul className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => {
            const className =
              "text-[13px] font-medium text-[#c9d2dc] transition-colors hover:text-[#7CFFB2] hover:underline hover:underline-offset-4"
            return (
              <li key={item.label}>
                {item.label === "Services" || item.label === "Blog" || item.label === "Home" ? (
                  <Link href={getNavHref(item.label)} className={className}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={getNavHref(item.label)} className={className}>
                    {item.label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://calendly.com/mohsin-imran/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-press hidden rounded-full bg-[#7CFFB2] px-4 py-2 text-sm font-semibold text-[#071018] hover:bg-[#b6ffd4] sm:inline-flex"
          >
            Book a call
          </a>
          <button
            className="rounded-full p-2 text-[#f4f1ea] xl:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[60] bg-[#050d14]/70 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-[70] flex w-[min(86vw,320px)] flex-col border-r border-white/10 bg-[#071018] px-6 pb-8 pt-6 shadow-[24px_0_70px_rgba(0,0,0,0.45)] xl:hidden"
              initial={{ x: "-105%" }}
              animate={{ x: 0 }}
              exit={{ x: "-105%" }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image src="/logo.png?v=2" alt="Mohsin Stack logo" fill sizes="40px" className="object-cover" />
                  </span>
                  <span className="text-sm font-semibold text-[#f4f1ea]">Mohsin Imran</span>
                </Link>
                <button
                  type="button"
                  className="rounded-full border border-white/10 p-2 text-[#f4f1ea] transition hover:border-[#7CFFB2]/50 hover:text-[#7CFFB2]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-[#7CFFB2]">Menu</p>

              <ul className="mt-4 flex flex-1 flex-col">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const className =
                    "flex items-center gap-4 border-b border-white/10 py-3.5 text-base font-medium text-[#f4f1ea] transition hover:text-[#7CFFB2]"
                  const content = (
                    <>
                      <Icon className="h-4 w-4 shrink-0 text-[#7CFFB2]" aria-hidden="true" />
                      {item.label}
                    </>
                  )
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.04, duration: 0.28 }}
                    >
                      {item.label === "Services" || item.label === "Blog" || item.label === "Home" ? (
                        <Link href={getNavHref(item.label)} className={className} onClick={() => setIsMobileMenuOpen(false)}>
                          {content}
                        </Link>
                      ) : (
                        <a href={getNavHref(item.label)} className={className} onClick={() => setIsMobileMenuOpen(false)}>
                          {content}
                        </a>
                      )}
                    </motion.li>
                  )
                })}
              </ul>

              <a
                href="https://calendly.com/mohsin-imran/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#7CFFB2] px-5 py-3 text-sm font-semibold text-[#071018] transition hover:bg-[#b6ffd4]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a call
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
