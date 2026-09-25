"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { seoFaqs } from "@/lib/seo"

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative z-20 scroll-mt-24 border-t border-white/10 bg-[#071018] px-4 py-20 text-[#f4f1ea] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7CFFB2]">Questions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">FAQ</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#9aabba]">
            Cost, timeline, support, AI, and SEO — the questions founders ask before a project starts.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {seoFaqs.map((faq, index) => {
            const selected = open === index
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpen(selected ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={selected}
                >
                  <h3 className="min-w-0 text-base font-semibold sm:text-lg">{faq.question}</h3>
                  <span className={`mt-1 shrink-0 text-lg leading-none text-[#7CFFB2] transition ${selected ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <motion.p
                  initial={false}
                  animate={{ height: selected ? "auto" : 0, opacity: selected ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden text-sm leading-relaxed text-[#b7c3cf] sm:text-base"
                >
                  <span className="block pb-5">{faq.answer}</span>
                </motion.p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
