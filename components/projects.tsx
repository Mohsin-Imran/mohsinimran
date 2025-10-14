"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Vurks",
    description:
      "Vurks is a freelance marketplace platform where professionals and businesses connect seamlessly. Users can send friend requests, chat in real-time, and manage payments using Stripe. The platform ensures secure transactions and instant communication, providing a smooth freelance collaboration experience.",
    image: "/p3.png",
    technologies: ["PHP", "Laravel", "MySQL", "Twilio", "Stripe", "WebSocket"],
    link: "https://vurks.com/",
  },

  {
    id: 2,
    title: "Zawaj Dating App",
    description:
      "A real-time dating app where users can send friend requests and chat instantly. Premium features are available with secure Stripe payment integration.",
    image: "/p1.png",
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind", "Stripe", "WebSocket"],
    link: "https://zawajconnect.com/",
  },
  {
    id: 3,
    title: "Marqu Team",
    description:
      "Created a responsive, SEO-optimized website for Marqu team with modern design, fast load times, and custom interactive features to showcase their services.",
    image: "/p2.png",
    technologies: ["WordPress", "Elementor", "Ecommerce Development Consultation"],
    link: "https://marquteam.com/",
  },
  {
    id: 4,
    title: "Rice & Sesame Export Website",
    description:
      "Designed and developed a modern, fully responsive WordPress website for an agricultural export company specializing in premium rice and sesame seeds. The site features dedicated product pages, event listings, certifications, ESG highlights, contact forms, and newsletter integration. With a clean UI, SEO-ready structure, and mobile optimization, the website delivers a professional and engaging experience for global users",
    image: "/p5.png",
    technologies: ["WordPress", "Elementor"],
    link: "https://www.shafiagro.com/",
  },
  {
    id: 5,
    title: "Home Emergency Services",
    description:
      "I designed and developed a fully responsive, SEO-optimized WordPress website for 247 Home Rescue, a UK-based company offering boiler cover, home emergency services, and appliance repair. The website ensures seamless user experience across all devices, with custom service pages, lead forms, intuitive navigation, and fast load times. Built for performance, reliability, and maximum user engagement to support their growth and online presence",
    image: "/p4.png",
    technologies: ["WordPress", "Elementor", "Ecommerce Development Consultation"],
    link: "https://247homerescue.co.uk/",
  },
  {
    id: 6,
    title: "Student LMS",
    description:
      "Student LMS is a platform that simplifies learning management. It provides easy access to courses, assignments, and student progress tracking.",
    image: "/p6.png",
    technologies: ["PHP", "Laravel", "MySQL", "Stripe", "Real Time Chat & Video Call"],
    link: "https://learning.iheartlearningacademy.com",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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
            Projects
          </h2>

          <div
            className={`w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          />
          <p
            className={`text-gray-400 mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
          </p>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                } ${project.featured ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative h-full min-h-[400px] from-gray-900 to-gray-800 border-gray-700 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-yellow-400 group-hover:shadow-2xl group-hover:shadow-yellow-500/20 group-hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-40  md:h-48 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top p-2 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-shimmer" />
                  </div>
                </div>


                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-yellow-400/10 text-yellow-400 rounded-full border border-yellow-400/20 transition-all duration-300 hover:bg-yellow-400/20 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    View Project
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>


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
