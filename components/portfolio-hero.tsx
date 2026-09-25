"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const roles = [
  "Laravel & Next.js",
  "SaaS products",
  "AI integrations",
  "Backend APIs",
  "WordPress & eCommerce",
]

export default function PortfolioHero() {
  const [displayText, setDisplayText] = useState(roles[0])
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(roles[0].length)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (index === roles.length) setIndex(0)

    const timeout = setTimeout(() => {
      setDisplayText(
        reverse ? roles[index].substring(0, subIndex - 1) : roles[index].substring(0, subIndex + 1)
      )

      if (!reverse && subIndex === roles[index].length) {
        setTimeout(() => setReverse(true), 1100)
        return
      }

      if (reverse && subIndex === 0) {
        setReverse(false)
        setIndex((prev) => (prev + 1) % roles.length)
        return
      }

      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  return (
    <section id="home" className="relative min-h-screen scroll-mt-24 overflow-hidden bg-[#071018] text-[#f4f1ea]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(124,255,178,0.16), transparent 32%), radial-gradient(circle at 82% 10%, rgba(120,150,255,0.18), transparent 28%), radial-gradient(circle at 70% 80%, rgba(124,255,178,0.08), transparent 30%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at 50% 40%, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:pb-16 lg:pt-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#7CFFB2]/30 bg-[#7CFFB2]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#7CFFB2]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7CFFB2]" />
            Available for new projects
          </p>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.95] tracking-tight text-[#f7f4ee] sm:text-6xl lg:text-7xl">
            Mohsin Imran
          </h1>

          <p className="mt-5 min-h-[2.5rem] text-xl text-[#d5ddd4] sm:text-2xl">
            Building{" "}
            <span className="font-medium text-[#7CFFB2]">
              {displayText}
              <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-[#7CFFB2] align-middle text-transparent">
                |
              </span>
            </span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#b7c3cf] sm:text-lg">
            I build full stack SaaS products and AI products. Laravel developer for hire for
            startups and businesses that need a product built to rank and convert.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="hover-press inline-flex items-center justify-center rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[#071018] hover:bg-[#b6ffd4]"
            >
              View my work
            </a>
            <a
              href="https://calendly.com/mohsin-imran/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[#f4f1ea] transition hover:border-[#7CFFB2]/50 hover:text-[#7CFFB2]"
            >
              Book a product call
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["Laravel + Next.js", "SaaS and MVPs"],
              ["AI workflows", "APIs and automation"],
              ["SEO-ready builds", "Speed and structure"],
            ].map(([title, detail]) => (
              <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-sm font-medium text-[#f4f1ea]">{title}</p>
                <p className="mt-1 text-xs text-[#8ea0b3]">{detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-[#7CFFB2]/20 blur-2xl lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1826] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/profile.jpeg"
              alt="Mohsin Imran, full stack developer"
              width={640}
              height={800}
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="h-auto w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-3 right-3 rounded-2xl border border-white/10 bg-[#0c1826]/90 px-4 py-3 backdrop-blur-md sm:left-auto sm:right-[-1rem] sm:w-56">
            <p className="text-xs uppercase tracking-[0.16em] text-[#7CFFB2]">Currently</p>
            <p className="mt-1 text-sm font-medium text-[#f4f1ea]">Product engineering for SaaS, AI, and web apps</p>
          </div>
        </div>
      </div>
    </section>
  )
}
