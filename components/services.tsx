"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Monitor, Palette, Search, ShoppingCart, Sparkles, Users } from "lucide-react"

const SERVICES = [
  {
    key: "laravel",
    slug: "laravel-development-services",
    title: "Laravel Developer for Hire",
    description:
      "Web apps, APIs, SaaS backends, and MySQL systems with a structure that can grow.",
    icon: Monitor,
    tags: ["Laravel", "SaaS", "REST API", "MySQL"],
  },
  {
    key: "nextjs",
    slug: "nextjs-react-development",
    title: "Next.js Developer for Hire",
    description:
      "Fast React frontends, SaaS interfaces, and Next.js sites built to load and rank.",
    icon: Sparkles,
    tags: ["Next.js", "React", "Frontend", "SEO"],
  },
  {
    key: "ai",
    slug: "ai-web-app-development",
    title: "AI Web App Developer",
    description:
      "OpenAI and OpenRouter integrations, chatbots, and AI features inside existing products.",
    icon: Users,
    tags: ["OpenAI API", "AI", "AI SaaS", "Chatbot"],
  },
  {
    key: "wordpress",
    slug: "wordpress-ecommerce-development",
    title: "WordPress Developer for Hire",
    description:
      "WooCommerce, Shopify, landing pages, and stores that are easy to manage.",
    icon: ShoppingCart,
    tags: ["WordPress", "WooCommerce", "Shopify", "Magento"],
  },
  {
    key: "seo",
    slug: "technical-seo-services",
    title: "Technical SEO Expert",
    description:
      "Core Web Vitals, schema, speed, and audits that show what is holding a site back.",
    icon: Search,
    tags: ["Schema", "Lighthouse", "Core Web Vitals"],
  },
  {
    key: "design",
    slug: "ui-ux-design-services",
    title: "UI/UX Designer for Web Apps",
    description:
      "Figma, SaaS screens, and landing pages designed around the action you want people to take.",
    icon: Palette,
    tags: ["UI/UX", "Figma", "SaaS UI", "Landing Page"],
  },
]

const filters = ["All", "Laravel", "SaaS", "Next.js", "AI", "WordPress", "SEO"]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFilter, setActiveFilter] = useState("All")
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], [36, -36])

  const filteredServices =
    activeFilter === "All"
      ? SERVICES
      : SERVICES.filter((service) =>
          service.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase())),
        )

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-[#0a1420] px-4 py-20 text-[#f4f1ea] sm:px-6 lg:px-8 lg:py-24"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-[#7CFFB2]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7CFFB2]">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Full stack development services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#9aabba] sm:text-lg">
            Laravel, Next.js, AI, WordPress, technical SEO, and product design — each with its own service page.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const active = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[#7CFFB2] text-[#071018]"
                    : "border border-white/10 bg-white/[0.03] text-[#c9d2dc] hover:border-[#7CFFB2]/40 hover:text-[#7CFFB2]"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Open ${service.title} service page`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#7CFFB2]/35 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7CFFB2]/20 bg-[#7CFFB2]/10 text-[#7CFFB2]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#8ea0b3] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#7CFFB2]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#f4f1ea]">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#9aabba]">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-[#c9d2dc]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
