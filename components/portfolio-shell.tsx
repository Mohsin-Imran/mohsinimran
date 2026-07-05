"use client"

import { useEffect, useState, type ReactNode } from "react"

export default function PortfolioShell({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const introTimer = window.setTimeout(() => setIntroDone(true), 650)
    let ticking = false

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setProgress(nextProgress)
      ticking = false
    }

    const requestProgressUpdate = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(updateProgress)
      }
    }

    updateProgress()
    window.addEventListener("scroll", requestProgressUpdate, { passive: true })

    return () => {
      window.clearTimeout(introTimer)
      window.removeEventListener("scroll", requestProgressUpdate)
    }
  }, [])

  return (
    <div className="portfolio-page relative overflow-hidden bg-black">
      <div
        className="fixed left-0 top-0 z-[70] h-1 bg-yellow-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-70" aria-hidden="true">
        <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-yellow-400/[0.06] blur-3xl" />
        <div className="absolute bottom-40 right-[-8rem] h-96 w-96 rounded-full bg-white/[0.035] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(253,199,0,0.08),transparent_34%),linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:auto,90px_90px,90px_90px]" />
      </div>

      {!introDone && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black">
          <div className="relative flex flex-col items-center gap-5">
            <div className="h-16 w-16 rounded-full border border-yellow-400/20 border-t-yellow-400 animate-spin" />
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
                Mohsin Imran
              </p>
              <p className="mt-2 text-sm text-gray-400">Loading portfolio</p>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10">{children}</div>

      <a
        href="https://wa.me/923214475956"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mohsin Imran on WhatsApp"
        className="fixed bottom-6 right-6 z-[75] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[#25D366]/50 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
