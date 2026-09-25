"use client"

import { motion } from "framer-motion"

const points = ["SaaS and MVPs", "API and AI work", "Speed and SEO audits"]

export default function Call() {
  return (
    <section className="relative z-20 border-t border-[var(--site-line)] bg-[var(--site-bg)] px-4 py-20 text-[var(--site-ink)] sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto max-w-4xl overflow-hidden rounded-[1.8rem] border border-[var(--site-label-line)] bg-[var(--site-card)] px-6 py-12 text-center shadow-[0_18px_50px_rgba(7,16,24,0.06)] sm:px-12 sm:py-16"
      >
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-label)]">Let&apos;s build</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Need a technical partner for a SaaS product, MVP, or SEO audit?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">
          Backend architecture, API integration, page speed, payments, and a site that can rank — scoped before the build starts.
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {points.map((point) => (
            <li key={point} className="rounded-full border border-[var(--site-line)] px-3 py-1 text-xs text-[var(--site-nav)]">
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://calendly.com/mohsin-imran/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-press inline-flex items-center justify-center rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[var(--site-on-mint)] hover:bg-[#b6ffd4]"
          >
            Book a product call
          </a>
          <a
            href="mailto:mnmemon549@gmail.com?subject=Free%20Website%20Audit%20Request"
            className="inline-flex items-center justify-center rounded-full border border-[var(--site-line-strong)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--site-label-line)] hover:text-[var(--site-label)]"
          >
            Get a free website audit
          </a>
        </div>
      </motion.div>
    </section>
  )
}
