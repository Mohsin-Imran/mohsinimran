"use client"

import { motion } from "framer-motion"

const points = ["SaaS and MVPs", "API and AI work", "Speed and SEO audits"]

export default function Call() {
  return (
    <section className="relative z-20 border-t border-white/10 bg-[#071018] px-4 py-20 text-[#f4f1ea] sm:px-6 lg:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto max-w-4xl overflow-hidden rounded-[1.8rem] border border-[#7CFFB2]/25 bg-[#0c1826] px-6 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:px-12 sm:py-16"
      >
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7CFFB2]">Let&apos;s build</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Need a technical partner for a SaaS product, MVP, or SEO audit?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#b7c3cf] sm:text-base">
          Backend architecture, API integration, page speed, payments, and a site that can rank — scoped before the build starts.
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {points.map((point) => (
            <li key={point} className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#d5ddd4]">
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://calendly.com/mohsin-imran/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-press inline-flex items-center justify-center rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[#071018] hover:bg-[#b6ffd4]"
          >
            Book a product call
          </a>
          <a
            href="mailto:mnmemon549@gmail.com?subject=Free%20Website%20Audit%20Request"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-[#7CFFB2]/50 hover:text-[#7CFFB2]"
          >
            Get a free website audit
          </a>
        </div>
      </motion.div>
    </section>
  )
}
