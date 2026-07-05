"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Calendar, CheckCircle2, Mail, Sparkles } from "lucide-react"

type ServiceDetailPage = {
  slug: string
  title: string
  h1: string
  summary: string
  sections: string[]
}

type ServiceDetailProps = {
  page: ServiceDetailPage
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
}

const MotionLink = motion(Link)

export default function ServiceDetail({ page }: ServiceDetailProps) {
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 180])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 70])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070707] px-4 py-24 text-white sm:px-6 lg:px-8">
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-yellow-400/10 to-transparent" />

      <section ref={heroRef} className="relative z-10 mx-auto max-w-6xl">
        <MotionLink
          href="/services"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-yellow-400 transition-colors hover:border-yellow-400/40 hover:bg-yellow-400/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </MotionLink>

        <motion.div style={{ y: textY }} className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
              <Sparkles className="h-4 w-4" />
              SEO service detail page
            </div>
            <h1 className="text-4xl font-bold leading-tight text-yellow-400 md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-200">{page.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/mohsin-imran/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 font-semibold text-black transition-transform hover:scale-105 active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                Book a Product Call
              </a>
              <a
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 bg-white/5 px-7 py-3 font-semibold text-yellow-400 transition-all hover:scale-105 hover:bg-yellow-400 hover:text-black active:scale-95"
              >
                View Live Work
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.03] p-6 shadow-2xl shadow-yellow-400/10"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-yellow-400/20 blur-2xl" />
            <h2 className="text-2xl font-bold text-white">What this service includes</h2>
            <div className="mt-6 space-y-4">
              {["Strategy and scope planning", "Clean development workflow", "SEO-ready structure", "Performance-focused delivery"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-none text-yellow-400" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto mt-28 max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {page.sections.map((section, index) => (
            <motion.article
              key={section}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/[0.07]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-lg font-bold text-yellow-400">
                0{index + 1}
              </div>
              <p className="leading-relaxed text-gray-300">{section}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        className="relative z-10 mx-auto mt-16 max-w-6xl rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-8"
      >
        <h2 className="text-3xl font-bold text-white">Book this service</h2>
        <p className="mt-3 max-w-3xl text-gray-300">
          Share your goals, current stack, timeline and budget. I can help with planning, build work, SEO, API integration and technical consulting.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://calendly.com/mohsin-imran/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition-transform hover:scale-105 active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            Book a Product Call
          </a>
          <a
            href="mailto:mnmemon549@email.com?subject=Free%20Website%20Audit%20Request"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400 px-8 py-3 font-semibold text-yellow-400 transition-all hover:bg-yellow-400 hover:text-black"
          >
            <Mail className="h-4 w-4" />
            Get a Free Website Audit
          </a>
        </div>
      </motion.section>
    </main>
  )
}
