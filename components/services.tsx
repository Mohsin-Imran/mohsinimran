"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence, Variants } from "framer-motion"
import {
  Monitor,
  ShoppingCart,
  Server,
  Search,
  Users,
  Globe,
  Cloud,
  LifeBuoy,
  Settings,
  ArrowUpRight,
  Sparkles,
  Palette,
} from "lucide-react"

const SERVICES = [
  {
    key: "web",
    title: "Web & Application Development",
    description:
      "Custom web applications, SaaS products, and marketing websites built with Laravel, Next.js, React, and WordPress for speed, reliability and conversions.",
    icon: Monitor,
    tags: ["Laravel", "Next.js", "React", "WordPress"],
    color: "#F59E0B",
  },
  {
    key: "ecom",
    title: "E‑commerce Stores",
    description:
      "Conversion-focused e‑commerce on Shopify, WooCommerce or Magento with payment gateway setup and checkout optimisation.",
    icon: ShoppingCart,
    tags: ["Shopify", "WooCommerce", "Magento", "Stripe"],
    color: "#EF4444",
  },
  {
    key: "crm",
    title: "CRM & Marketing Automation",
    description:
      "GoHighLevel, HubSpot or Zoho integrations, funnel building and email automation so leads never fall through the cracks.",
    icon: Users,
    tags: ["GoHighLevel", "HubSpot", "Zoho"],
    color: "#8B5CF6",
  },
  {
    key: "seo",
    title: "Technical SEO & Performance",
    description:
      "Site audits, schema, Core Web Vitals improvements and Lighthouse optimisation to help pages rank and convert.",
    icon: Search,
    tags: ["Schema", "Lighthouse", "Core Web Vitals"],
    color: "#10B981",
  },
  {
    key: "backend",
    title: "Backend & API Integration",
    description:
      "REST/GraphQL APIs, ERP/CRM integrations and backend logic for secure, scalable systems.",
    icon: Server,
    tags: ["Laravel", "Node.js", "PHP", "MySQL"],
    color: "#3B82F6",
  },
  {
    key: "migration",
    title: "Migration & Hosting",
    description:
      "Platform migrations, zero-downtime deploys, DNS/SSL, and hosting on AWS, DigitalOcean or managed providers.",
    icon: Globe,
    tags: ["AWS", "DigitalOcean", "cPanel"],
    color: "#06B6D4",
  },
  {
    key: "domain",
    title: "Domain & Hosting",
    description:
      "Domain registration, DNS configuration and managed hosting plans tailored to traffic and availability needs.",
    icon: Cloud,
    tags: ["Domain", "DNS", "SSL"],
    color: "#EC4899",
  },
  {
    key: "maintenance",
    title: "Maintenance & Support",
    description:
      "Ongoing security updates, backups, priority support and monitoring so your site stays healthy.",
    icon: LifeBuoy,
    tags: ["Backups", "Security", "Monitoring"],
    color: "#F97316",
  },
  {
    key: "uiux",
    title: "UI / UX & Figma Design",
    description:
      "Custom UI/UX and Figma design systems for polished interfaces, user journeys, and conversion-focused screens.",
    icon: Palette,
    tags: ["UI/UX", "Figma", "Prototyping"],
    color: "#6366F1",
  },
  {
    key: "graphic",
    title: "Graphic Design",
    description:
      "Brand assets, icons, marketing visuals and polished graphics that give your digital product a professional visual identity.",
    icon: Sparkles,
    tags: ["Branding", "Visuals", "Illustration"],
    color: "#EC4899",
  },
  {
    key: "consult",
    title: "Consulting & Strategy",
    description:
      "Technical strategy, architecture reviews and fixed-scope proposals to reduce risk and accelerate delivery.",
    icon: Settings,
    tags: ["Architecture", "Strategy", "Roadmap"],
    color: "#14B8A6",
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filteredServices = activeFilter === "all" 
    ? SERVICES 
    : SERVICES.filter(s => s.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())))

  const allTags = Array.from(new Set(SERVICES.flatMap(s => s.tags)))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="relative bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-500/[0.02] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every web development and growth service your business needs — handed over clean and built to drive results.
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-yellow-400 text-black"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-yellow-400 text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon
              const isHovered = hoveredIndex === idx

              return (
                <motion.div
                  key={service.key}
                  variants={itemVariants}
                  layout
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/5">
                    
                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.color}10, transparent 40%)`
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <Icon 
                        className="w-7 h-7 transition-colors duration-300" 
                        style={{ color: service.color }}
                      />
                      <motion.div
                        animate={isHovered ? { scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: `${service.color}20` }}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:bg-yellow-400/10 hover:text-yellow-400 hover:border-yellow-400/20 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: service.color }}
                    >
                      <span>Learn more</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>

                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div 
                        className="absolute top-4 right-4 w-2 h-2 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

