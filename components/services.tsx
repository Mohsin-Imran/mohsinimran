"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion"
import {
  ArrowUpRight,
  Monitor,
  Palette,
  Search,
  ShoppingCart,
  Sparkles,
  Users,
} from "lucide-react"

const SERVICES = [
  {
    key: "laravel",
    slug: "laravel-development-services",
    title: "Laravel Developer for Hire",
    description:
      "Laravel web app development, Laravel API development, Laravel SaaS development, custom backend architecture and Laravel MySQL projects.",
    icon: Monitor,
    tags: ["Laravel", "SaaS", "REST API", "MySQL"],
    color: "#F59E0B",
  },
  {
    key: "nextjs",
    slug: "nextjs-react-development",
    title: "Next.js Developer for Hire",
    description:
      "Next.js SaaS development, React frontend development, fast-loading Next.js websites and SEO optimization for modern web apps.",
    icon: Sparkles,
    tags: ["Next.js", "React", "Frontend", "SEO"],
    color: "#3B82F6",
  },
  {
    key: "ai",
    slug: "ai-web-app-development",
    title: "AI Web App Developer",
    description:
      "AI API integration, OpenAI and OpenRouter integrations, AI SaaS development, AI chatbots and AI-powered web applications.",
    icon: Users,
    tags: ["OpenAI API", "AI", "AI SaaS", "Chatbot"],
    color: "#8B5CF6",
  },
  {
    key: "wordpress",
    slug: "wordpress-ecommerce-development",
    title: "WordPress Developer for Hire",
    description:
      "WooCommerce store development, Shopify websites, WordPress landing page design, eCommerce development and Magento support.",
    icon: ShoppingCart,
    tags: ["WordPress", "WooCommerce", "Shopify", "Magento"],
    color: "#EF4444",
  },
  {
    key: "seo",
    slug: "technical-seo-services",
    title: "Technical SEO Expert",
    description:
      "Core Web Vitals optimization, website speed optimization, Lighthouse performance audits, schema markup and technical SEO audits.",
    icon: Search,
    tags: ["Schema", "Lighthouse", "Core Web Vitals"],
    color: "#10B981",
  },
  {
    key: "design",
    slug: "ui-ux-design-services",
    title: "UI/UX Designer for Web Apps",
    description:
      "Figma design services, conversion-focused UI design, SaaS UI design, landing page design and website redesign for web apps.",
    icon: Palette,
    tags: ["UI/UX", "Figma", "SaaS UI", "Landing Page"],
    color: "#6366F1",
  },
]

const MotionLink = motion(Link)

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filteredServices =
    activeFilter === "all"
      ? SERVICES
      : SERVICES.filter((service) =>
          service.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase())),
        )

  const allTags = Array.from(new Set(SERVICES.flatMap((service) => service.tags)))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-yellow-500/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-yellow-500/[0.02] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Full Stack <span className="text-yellow-400">Development Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Dedicated Laravel, Next.js, AI web app, WordPress, eCommerce, technical SEO and UI/UX service pages built for stronger keyword targeting, speed and business growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-yellow-400 text-black"
                : "border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            All Services
          </motion.button>
          {allTags.slice(0, 6).map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tag)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-yellow-400 text-black"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon
              const isHovered = hoveredIndex === idx

              return (
                <MotionLink
                  key={service.key}
                  href={`/services/${service.slug}`}
                  variants={itemVariants}
                  layout
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="group relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  aria-label={`Open ${service.title} service page`}
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/5">
                    <motion.div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.color}10, transparent 40%)`,
                      }}
                    />

                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <Icon
                        className="h-7 w-7 transition-colors duration-300"
                        style={{ color: service.color }}
                      />
                      <motion.div
                        animate={isHovered ? { scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: `${service.color}20` }}
                      />
                    </motion.div>

                    <motion.div
                      aria-hidden="true"
                      className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white opacity-0 transition-colors duration-300 group-hover:border-yellow-400/40 group-hover:text-yellow-400"
                      animate={isHovered ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 8, y: -8 }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>

                    <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-400">{service.description}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400 transition-all duration-300 hover:border-yellow-400/20 hover:bg-yellow-400/10 hover:text-yellow-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: service.color }}
                    >
                      <span>Open service page</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </MotionLink>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
