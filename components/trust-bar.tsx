"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const trustItems = [
  { value: "6+", label: "Featured case studies", detail: "Marketplaces, stores, and service sites" },
  { value: "Laravel", label: "Backend architecture", detail: "APIs, databases, and admin systems" },
  { value: "Next.js", label: "Fast frontend delivery", detail: "Product sites and SaaS interfaces" },
  { value: "AI + SEO", label: "Growth-focused builds", detail: "Automation, speed, and structure" },
]

const proofPoints = [
  "SaaS MVP planning",
  "Secure API integrations",
  "Payment gateway setup",
  "Technical SEO structure",
  "Performance-minded delivery",
]

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], [48, -48])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[var(--site-line)] bg-[var(--site-bg)] px-4 py-20 text-[var(--site-ink)] sm:px-6 lg:px-8 lg:py-24"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-[var(--site-label-soft)] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-label)]">How I work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Built for products that need to ship</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--site-muted)]">
            Backend, frontend, and growth work in one place — so the product, the API, and the page speed move together.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="hover-card rounded-2xl border border-[var(--site-line)] bg-[var(--site-card)] p-5"
            >
              <p className="text-3xl font-semibold tracking-tight text-[var(--site-label)]">{item.value}</p>
              <p className="mt-3 text-sm font-medium text-[var(--site-ink)]">{item.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--site-soft)]">{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--site-bg)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--site-bg)] to-transparent" />
          <motion.div
            className="flex w-max gap-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...proofPoints, ...proofPoints].map((point, index) => (
              <span
                key={`${point}-${index}`}
                className="rounded-full border border-[var(--site-line)] bg-[var(--site-card)] px-4 py-2 text-sm text-[var(--site-nav)]"
              >
                {point}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
