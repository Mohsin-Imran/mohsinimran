"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About", "Services", "Skills", "Experience", "Projects", "FAQ", "Blog", "Contact"]
  const getNavHref = (item: string) => {
    if (item === "Home") return "/"
    if (item === "Services") return "/services"
    if (item === "Blog") return "/blog"
    return `/#${item.toLowerCase()}`
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/95 backdrop-blur-md shadow-lg shadow-primary/10 border-b border-primary/20"
        : "bg-black/80 backdrop-blur-sm"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">

        {/* Profile Logo + Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-yellow-400/40 shadow-md shadow-yellow-400/15 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Mohsin Stack logo"
              fill
              sizes="48px"
              className="object-cover"
              // removed priority to avoid blocking LCP for small logo
            />
          </div>


          <span className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
            Mohsin M Imran
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              {item === "Services" || item === "Blog" || item === "Home" ? (
                <Link
                  href={getNavHref(item)}
                  className="group relative text-sm font-medium transition-colors hover:text-yellow-400 lg:text-base"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                href={getNavHref(item)}
                className="group relative text-sm font-medium transition-colors hover:text-yellow-400 lg:text-base"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-yellow-400 transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-fade-in-down bg-black/95 backdrop-blur-md border-t border-yellow-400/20">
          <ul className="container mx-auto flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <li key={item}>
                {item === "Services" || item === "Blog" || item === "Home" ? (
                  <Link
                    href={getNavHref(item)}
                    className="block py-3 text-base font-medium transition-colors hover:text-yellow-400 border-b border-border/50 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                  href={getNavHref(item)}
                  className="block py-3 text-base font-medium transition-colors hover:text-yellow-400 border-b border-border/50 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
