"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#0A0A0A] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-yellow-400 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
        >
          About Me
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
        </h2>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side - Image */}
          <div
            className={`w-full lg:w-[40%] flex justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="relative group">
              <Image
                src="/images/profile.jpeg"
                alt="Mohsin Imran - Full Stack Web Application Developer and AI Product Expert"
                width={448}
                height={448}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="w-full max-w-md rounded-2xl object-cover  transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div
            className={`w-full lg:w-[60%] space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white-400">
              Full Stack Web Application Developer & AI Product Expert
            </h3>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I am Mohsin Imran, a freelance full stack developer, AI product expert, and product engineer. I build Laravel and Next.js applications for founders, startups, agencies, and service businesses that need reliable backend architecture, polished React interfaces, AI-powered product features, SEO-friendly pages, and long-term scalability.
            </p>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              My work covers custom SaaS development, AI web app development, AI automation, backend API development with RESTful API or GraphQL, database design with MySQL or MongoDB, WordPress and eCommerce websites, WooCommerce or Shopify stores, AI API integration, OpenAI and OpenRouter integration, CRM integration with HubSpot, GoHighLevel or Zoho, cloud hosting on AWS or DigitalOcean, and technical SEO improvements for clients worldwide.
            </p>

            {/* Contact Info */}


            {/* Address */}
            {/* <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-yellow-500/20">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 font-medium block mb-1">
                    Address
                  </span>
                  <p className="text-white">
                    Alsa Chamma Homes, 606, 53 Mir Hammal Khan Rd, Garden West
                    Remote
                  </p>
                </div>
              </div>
            </div> */}

            {/* Resume Button */}
            <div className="flex flex-wrap gap-3">

              {/* View Resume */}
             <a
                href="/resume/mohsinimran_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-semibold text-sm py-3 px-10 rounded-full
                  transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1
                  cursor-pointer text-center max-[450px]:text-left"
              >
                View Resume
              </a>

              <a
                href="https://calendly.com/mohsin-imran/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FDC700] hover:bg-[#e5b307] text-white font-semibold text-sm py-3 px-10 rounded-full
                transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Book a Product Call
              </a>

            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
