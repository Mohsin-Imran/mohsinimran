"use client"

import { useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

export default function PortfolioShell({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const introTimer = window.setTimeout(() => setIntroDone(true), 1400)
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
    <div className="portfolio-page relative bg-black">
      <div
        className="fixed left-0 top-0 z-[70] h-1 bg-[#7CFFB2] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-70" aria-hidden="true">
        <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-yellow-400/[0.06] blur-3xl" />
        <div className="absolute bottom-40 right-[-8rem] h-96 w-96 rounded-full bg-white/[0.035] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(253,199,0,0.08),transparent_34%),linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:auto,90px_90px,90px_90px]" />
      </div>

      <AnimatePresence>
        {!introDone && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#071018]"
          >
            <div className="flex w-[min(16rem,78vw)] flex-col items-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-[#7CFFB2]/50">
                <Image src="/logo.png?v=2" alt="" fill sizes="64px" className="object-cover" priority />
              </div>
              <p className="mt-5 text-lg font-semibold tracking-tight text-[#f4f1ea]">Mohsin Imran</p>
              <p className="mt-1 text-xs text-[#9aabba]">Laravel, Next.js, and AI</p>
              <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[#7CFFB2]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
