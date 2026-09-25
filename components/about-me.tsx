"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

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
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#071018] px-4 py-20 text-[#f4f1ea] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div style={{ y: photoY }} className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1826] p-2">
            <Image
              src="/images/profile.jpeg"
              alt="Mohsin Imran, full stack web application developer and AI product expert"
              width={640}
              height={760}
              sizes="(min-width: 1024px) 420px, 90vw"
              className="h-auto w-full rounded-[1.6rem] object-cover"
            />
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7CFFB2]">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              I build full stack SaaS products and AI products
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-6 space-y-4 text-base leading-relaxed text-[#b7c3cf] sm:text-lg"
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
                className="hover-card rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <p className="text-sm font-medium text-[#f4f1ea]">{fact.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#8ea0b3]">{fact.label}</p>
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
              className="hover-press inline-flex items-center justify-center rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[#071018] hover:bg-[#b6ffd4]"
            >
              View resume
            </a>
            <a
              href="https://calendly.com/mohsin-imran/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[#f4f1ea] transition hover:border-[#7CFFB2]/50 hover:text-[#7CFFB2]"
            >
              Book a product call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
