"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  { index: "01", title: "Scope", detail: "The product, the users, and what has to work in the first version." },
  { index: "02", title: "Build", detail: "Laravel or Next.js, the API, and the screens in one build." },
  { index: "03", title: "Launch", detail: "Speed, structure, and a site that can be maintained after go-live." },
]

const facts = [
  { value: "Full stack", label: "Laravel, Next.js, and React" },
  { value: "AI products", label: "APIs, chat, and automation" },
  { value: "Worldwide", label: "Startups, agencies, and stores" },
]

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], [28, -28])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-t border-[var(--site-line)] bg-[var(--site-bg)] px-4 py-20 text-[var(--site-ink)] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div style={{ y: photoY }} className="relative mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-[var(--site-line)] bg-[var(--site-card)] p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-label)]">How the work ships</p>
            <ol className="mt-5 space-y-3">
              {steps.map((step) => (
                <li key={step.index} className="rounded-2xl border border-[var(--site-line)] bg-[var(--site-bg)] px-4 py-4">
                  <p className="text-xs font-medium tracking-[0.18em] text-[var(--site-label)]">{step.index}</p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--site-ink)]">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--site-muted)]">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-label)]">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              I build full stack SaaS products and AI products
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-6 space-y-4 text-base leading-relaxed text-[var(--site-muted)] sm:text-lg"
          >
            <p>
              I am Mohsin Imran. I build full stack SaaS products and AI products for founders, startups, agencies, and service businesses.
            </p>
            <p>
              That means the product, the backend, and pages that can rank — from the first version through launch.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: 0.12 + index * 0.06 }}
                className="hover-card rounded-2xl border border-[var(--site-line)] bg-[var(--site-card)] px-4 py-3"
              >
                <p className="text-sm font-medium text-[var(--site-ink)]">{fact.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--site-soft)]">{fact.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="/resume/mohsinimran_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-press inline-flex items-center justify-center rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[var(--site-on-mint)] hover:bg-[#b6ffd4]"
            >
              View resume
            </a>
            <a
              href="https://calendly.com/mohsin-imran/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--site-line-strong)] px-6 py-3 text-sm font-semibold text-[var(--site-ink)] transition hover:border-[var(--site-label-line)] hover:text-[var(--site-label)]"
            >
              Book a product call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
