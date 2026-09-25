"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const projects = [
  {
    id: 1,
    slug: "vurks",
    title: "Vurks",
    role: "Freelance marketplace",
    description:
      "Professionals and businesses connect, chat in real time, and pay with Stripe. The backend keeps requests, messages, and transactions in one place.",
    image: "/p3.png",
    technologies: ["Laravel", "MySQL", "Stripe", "WebSocket"],
    link: "https://vurks.com/",
  },
  {
    id: 2,
    slug: "mann-3pl",
    title: "MANN3PL",
    role: "Logistics website",
    description:
      "A 3PL site for warehousing, distribution, and transport, built to stay clear on mobile and fast to scan.",
    image: "/p1.png",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
    link: "https://mann3pl.com",
  },
  {
    id: 8,
    slug: "kaizer-leather",
    title: "Kaizer Leather",
    role: "Luxury store",
    description:
      "Handcrafted leather goods from Dubai, with collections, corporate gifting, and a bespoke patina service.",
    image: "/p11.png",
    technologies: ["WordPress", "WooCommerce", "SEO"],
    link: "https://www.kaizerleather.com/",
  },
  {
    id: 9,
    slug: "bare-and-balanced-spa",
    title: "Bare and Balanced Spa",
    role: "GoHighLevel site",
    description:
      "Service pages, lead forms, and appointment booking wired into the CRM so enquiries do not sit in an inbox.",
    image: "/p12.png",
    technologies: ["GoHighLevel", "CRM", "Lead forms"],
    link: "https://bareandbalancedspa.com/",
  },
  {
    id: 7,
    slug: "zawaj-connect",
    title: "Zawaj Connect",
    role: "Realtime dating app",
    description:
      "Friend requests and instant chat, with premium access behind Stripe.",
    image: "/p10.png",
    technologies: ["Laravel", "Tailwind", "Stripe", "WebSocket"],
    link: "https://zawajconnect.com/",
  },
  {
    id: 3,
    slug: "marqu",
    title: "Marqu",
    role: "Service website",
    description:
      "A responsive WordPress site for the Marqu team, tuned for speed and for showing the work.",
    image: "/p2.png",
    technologies: ["WordPress", "Elementor", "SEO"],
    link: "https://marquteam.com/",
  },
  {
    id: 4,
    slug: "rice-export-website",
    title: "Shafi Agro",
    role: "Export company",
    description:
      "Product pages for rice and sesame, plus certifications, events, and a contact path for buyers.",
    image: "/p5.png",
    technologies: ["WordPress", "Elementor", "SEO"],
    link: "https://www.shafiagro.com/",
  },
  {
    id: 5,
    slug: "247-home-rescue",
    title: "247 Home Rescue",
    role: "UK home services",
    description:
      "Boiler cover, emergencies, and repairs, with service pages and lead forms built for a UK audience.",
    image: "/p4.png",
    technologies: ["WordPress", "Elementor", "Lead forms"],
    link: "https://247homerescue.co.uk/",
  },
  {
    id: 6,
    slug: "student-lms-platform",
    title: "Student LMS",
    role: "Learning platform",
    description:
      "Courses, assignments, and progress, with payments and live chat for students and staff.",
    image: "/p6.png",
    technologies: ["Laravel", "MySQL", "Stripe", "Realtime"],
    link: "https://aibookmaker.site",
  },
]

export default function Projects() {
  const [active, setActive] = useState(0)
  const project = projects[active]

  return (
    <section id="projects" className="relative z-20 scroll-mt-24 border-t border-white/10 bg-[#071018] px-4 py-20 text-[#f4f1ea] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7CFFB2]">Case studies</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Featured Projects</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#9aabba] sm:text-base">
            Pick a project. The preview, the story, and the live link all stay in one place.
          </p>
        </div>

        <div className="sleek-scroll mb-8 flex gap-2 overflow-x-auto pb-2">
          {projects.map((item, index) => {
            const selected = index === active
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                  selected
                    ? "bg-[#7CFFB2] font-semibold text-[#071018]"
                    : "border border-white/10 text-[#d5ddd4] hover:border-[#7CFFB2]/40"
                }`}
              >
                <span className={`tabular-nums ${selected ? "text-[#071018]/50" : "text-[#7CFFB2]"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
          >
            <div>
              <p className="text-sm font-medium tabular-nums text-[#7CFFB2]">
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">{project.title}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#9aabba]">{project.role}</p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[#b7c3cf]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#d5ddd4]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7CFFB2] px-5 py-3 text-sm font-semibold text-[#071018] transition hover:bg-[#b6ffd4]"
                >
                  View case study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-[#7CFFB2]/50 hover:text-[#7CFFB2]"
                >
                  Open live site
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[#7CFFB2]/10 blur-3xl" />
              <div className="hover-card group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0c1826] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-[#101c2c] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 truncate text-xs text-[#8ea0b3]">{project.link.replace(/^https?:\/\//, "")}</span>
                </div>
                <div className="relative bg-[#081018] sm:h-[360px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    width={1280}
                    height={800}
                    priority={active === 0}
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="h-auto w-full object-contain object-top transition duration-500 group-hover:scale-[1.02] sm:absolute sm:inset-0 sm:h-full"
                  />
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}
