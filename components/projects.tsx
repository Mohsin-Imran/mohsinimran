"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"

interface Project {
  id: number
  slug: string
  title: string
  description: string
  image?: string
  technologies: string[]
  link: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    slug: "vurks",
    title: "Vurks - Freelance Marketplace Platform",
    description:
      "Vurks is a freelance marketplace platform where professionals and businesses connect seamlessly. Users can send friend requests, chat in real-time, and manage payments using Stripe. The platform ensures secure transactions and instant communication, providing a smooth freelance collaboration experience.",
    image: "/p3.png",
    technologies: ["PHP", "Laravel", "MySQL", "Twilio", "Stripe", "WebSocket"],
    link: "https://vurks.com/",
    featured: false,
  },

   {
    id: 2,
    slug: "mann-3pl",
    title: "MANN3PL Third-Party Logistics & Warehousing Website",
    description:
      "A modern logistics and warehousing company website built to showcase third-party logistics (3PL), distribution, inventory management and transportation services with a fast, responsive and user-friendly experience.",
    image: "/p1.png",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
    link: "https://mann3pl.com",
  },
  {
    id: 8,
    slug: "kaizer-leather",
    title: "Premium Handcrafted Leather Goods",
    description:
      "Kaizer Leather is a luxury e-commerce store featuring premium handcrafted full-grain leather bags, wallets, and accessories handstitched in Dubai. The platform showcases signature collections for men and women, corporate gifting services, and a unique bespoke patina personalization service. Built with modern e-commerce capabilities, responsive design, and seamless product discovery across multiple collections.",
    image: "/p11.png",
    technologies: ["WordPress", "WooCommerce", "E-commerce", "Product Management", "SEO Optimization"],
    link: "https://www.kaizerleather.com/",
  },
  {
    id: 9,
    slug: "bare-and-balanced-spa",
    title: "Bare and Balanced Spa - GoHighLevel Website",
    description:
      "A complete spa and wellness website built in GoHighLevel for Bare and Balanced Spa with clean service pages, responsive design, lead capture forms, CRM integration and a conversion-focused appointment booking flow.",
    image: "/p12.png",
    technologies: ["GoHighLevel", "Website", "CRM", "Lead Forms", "SEO"],
    link: "https://bareandbalancedspa.com/",
  },

  {
    id: 7,
    slug: "zawaj-connect",
    title: "Zawaj Connect - Real-Time Dating App",
    description:
      "A real-time dating app where users can send friend requests and chat instantly. Premium features are available with secure Stripe payment integration.",
    image: "/p10.png",
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind", "Stripe", "WebSocket"],
    link: "https://zawajconnect.com/",
  },
  {
    id: 3,
    slug: "marqu",
    title: "Marqu - SEO-Optimized WordPress Website",
    description:
      "Created a responsive, SEO-optimized website for Marqu team with modern design, fast load times, and custom interactive features to showcase their services.",
    image: "/p2.png",
    technologies: ["WordPress", "Elementor", "Ecommerce Development Consultation"],
    link: "https://marquteam.com/",
  },
  {
    id: 4,
    slug: "rice-export-website",
    title: "Rice Export Website",
    description:
      "Designed and developed a modern, fully responsive WordPress website for an agricultural export company specializing in premium rice and sesame seeds. The site features dedicated product pages, event listings, certifications, ESG highlights, contact forms, and newsletter integration. With a clean UI, SEO-ready structure, and mobile optimization, the website delivers a professional and engaging experience for global users",
    image: "/p5.png",
    technologies: ["WordPress", "Elementor","Ecommerce Development Consultation"],
    link: "https://www.shafiagro.com/",
  },
  {
    id: 5,
    slug: "247-home-rescue",
    title: "247 Home Rescue - UK Home Services Website",
    description:
      "I designed and developed a fully responsive, SEO-optimized WordPress website for 247 Home Rescue, a UK-based company offering boiler cover, home emergency services, and appliance repair. The website ensures seamless user experience across all devices, with custom service pages, lead forms, intuitive navigation, and fast load times. Built for performance, reliability, and maximum user engagement to support their growth and online presence",
    image: "/p4.png",
    technologies: ["WordPress", "Elementor", "Ecommerce Development Consultation"],
    link: "https://247homerescue.co.uk/",
  },
  {
    id: 6,
    slug: "student-lms-platform",
    title: "Student LMS Platform",
    description:
      "Student LMS is a platform that simplifies learning management. It provides easy access to courses, assignments, and student progress tracking.",
    image: "/p6.png",
    technologies: ["PHP", "Laravel", "MySQL", "Stripe", "Real Time Chat & Video Call"],
    link: "https://learning.iheartlearningacademy.com",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-[#0A0A0A]"
    >

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold text-yellow-400 mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Featured Projects / Case Studies
          </h2>

          <div
            className={`w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          />
          <p
            className={`text-gray-400 mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Real Laravel, WordPress, WebSocket, eCommerce and SEO projects for marketplace platforms, UK service businesses, student LMS products and international business websites.
          </p>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative flex h-full overflow-hidden rounded-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                } ${project.featured ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Container */}
              <div className="relative flex h-[560px] w-full flex-col from-gray-900 to-gray-800 border-gray-700 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-yellow-400 group-hover:shadow-2xl group-hover:shadow-yellow-500/20 group-hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-40  md:h-48 overflow-hidden rounded-2xl">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Mohsin Imran - Full Stack Laravel and Next.js Developer case study screenshot for ${project.title}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top p-2 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-yellow-950/50 p-6">
                      <div className="text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
                          GoHighLevel
                        </span>
                        <p className="mt-3 text-2xl font-bold leading-tight text-white">
                          Bare and Balanced Spa
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-shimmer" />
                  </div>
                </div>


                {/* Content */}
                <div className="p-6 relative z-10 flex flex-1 flex-col">
                  <h3 className="min-h-[64px] text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 flex max-h-[72px] flex-wrap gap-2 overflow-hidden">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-yellow-400/10 text-yellow-400 rounded-full border border-yellow-400/20 transition-all duration-300 hover:bg-yellow-400/20 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50 active:scale-95"
                    >
                      View 
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-yellow-400/50 bg-white/5 px-5 py-3 font-semibold text-yellow-400 transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black active:scale-95"
                    >
                      View Live
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>


                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
