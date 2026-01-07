"use client"

import { useState, useEffect, useRef } from "react"
import { Brain as BrainIcon, Rocket, Code } from "lucide-react"


import { PopupButton } from "react-calendly";
const CodeIcon = () => (
  <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
)


const PaletteIcon = () => (
  <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
)

const CrownIcon = () => (
  <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)


const services = [
  {
    icon: BrainIcon,
    title: "AI Solutions Development",
    description:
      "I build AI-driven features and intelligent systems that enhance automation, decision-making, and user experiences, delivering smart, scalable, and future-ready applications.",
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Rocket,
    title: "SaaS Product Development",
    description:
      "I design and develop scalable SaaS products with secure architectures, subscription systems, payment integrations, and high-performance cloud-ready solutions.",
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "I deliver complete end-to-end web solutions, combining modern frontend, powerful backend systems, REST APIs, and real-time features for reliable, production-ready applications.",
    gradient: "from-yellow-400 to-yellow-600",
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="min-h-screen bg-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">My Quality Services</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />

        </div>
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index
            const delay = index * 200

            return (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative h-full group transition-transform duration-500 ${isHovered ? "scale-105 -translate-y-2" : ""
                    }`}
                  style={{ perspective: "1000px" }}
                >
                  {/* Animated gradient border */}
                  <div
                    className={`absolute inset-0 rounded-2xl  opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                  />

                  {/* Card content */}
                  <div className="relative h-full bg-[#0A0A0A] rounded-2xl p-8 border border-yellow-500/20 group-hover:border-yellow-500/50 transition-all duration-500 backdrop-blur-sm">
                    {/* Icon container */}
                    <div className="mb-6 relative">
                      <div
                        className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5 transition-transform duration-500 ${isHovered ? "rotate-12 scale-110" : ""
                          }`}
                      >
                        <div className="w-full h-full bg-[#0A0A0A] rounded-xl flex items-center justify-center">
                          <div
                            className={`text-yellow-400 transition-all duration-500 ${isHovered ? "scale-110 rotate-12" : ""
                              }`}
                          >
                            <Icon />
                          </div>
                        </div>
                      </div>

                      {/* Animated glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>


                    {/* Description */}
                    <p
                      className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Read More button */}
                    <button
                      className={`flex items-center gap-2 text-yellow-400 font-semibold group/btn transition-all duration-300 ${isHovered ? "translate-x-2" : ""
                        }`}
                    >
                      <span className="text-yellow-500">Read More</span>

                      <div className={`transition-transform duration-300 ${isHovered ? "translate-x-2" : ""}`}>
                        <ArrowRightIcon />
                      </div>

                    </button>

                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-yellow-500/30 rounded-tr-2xl group-hover:border-yellow-500/60 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-yellow-500/30 rounded-bl-2xl group-hover:border-yellow-500/60 transition-colors duration-500" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
