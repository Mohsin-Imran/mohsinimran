"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhp, faReact, faLaravel } from "@fortawesome/free-brands-svg-icons"
export default function PortfolioHero() {
  const texts = [
    "Full-Stack Developer",
    "PHP & Laravel Expert",
    "Backend Developer",
    "React Developer",
    "WordPress Developer",
    "Frontend Developer",
    "Web Expert",
  ]

  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (index === texts.length) setIndex(0)

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        reverse
          ? prev.substring(0, prev.length - 1)
          : texts[index].substring(0, subIndex + 1)
      )

      if (!reverse && subIndex === texts[index].length) {
        setTimeout(() => setReverse(true), 1000)
        return
      }

      if (reverse && subIndex === 0) {
        setReverse(false)
        setIndex((prev) => (prev + 1) % texts.length)
        return
      }

      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])
  return (
    <section id="home" className="min-h-screen bg-background text-foreground pt-24 lg:pt-15">
      <main className="container mx-auto px-6 py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="animate-fade-in-left animation-delay-200 text-4xl font-bold leading-tight lg:text-5xl xl:text-1xl text-yellow-500">
              Hi, I'm Mohsin M Imran
            </h1>

            <div className="animate-fade-in-left animation-delay-400 text-2xl lg:text-3xl">
              I'm{" "}
              <span className="text-yellow-500 font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="animate-fade-in-left animation-delay-600 text-base leading-relaxed text-white lg:text-md">
              I'm Mohsin, a Full-Stack Developer skilled in building dynamic, secure, and scalable web applications. I specialize in PHP, Laravel, Next.js, Node.js, HTML, CSS, Bootstrap, JavaScript, Ajax, MySQL, and MariaDB. I’ve developed robust backends, intuitive frontends, real-time features like chats and notifications, and fully optimized user experiences.
              I’m experienced in API development, third-party integrations, payment gateways, and end-to-end e-commerce solutions. With a strong focus on clean architecture, maintainable code, and high performance, I build modern, reliable, and user-centric applications. Passionate about innovation, I always aim to deliver solutions that truly create impact.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {/* PHP */}
              <span className="group flex items-center gap-2 rounded-full border-2 border-yellow-500 bg-yellow-100 px-5 py-1 text-sm font-semibold text-yellow-600 transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 cursor-pointer">
                <FontAwesomeIcon icon={faPhp} className="text-lg transition-transform duration-300 group-hover:scale-110" />
                PHP
              </span>

              {/* React */}
              <span className="group flex items-center gap-2 rounded-full border-2 border-yellow-500 bg-yellow-100 px-5 py-1 text-sm font-semibold text-yellow-600 transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 cursor-pointer">
                <FontAwesomeIcon icon={faReact} className="text-lg transition-transform duration-300 group-hover:scale-110" />
                React
              </span>

              {/* Laravel */}
              <span className="group flex items-center gap-2 rounded-full border-2 border-yellow-500 bg-yellow-100 px-5 py-1 text-sm font-semibold text-yellow-600 transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 cursor-pointer">
                <FontAwesomeIcon icon={faLaravel} className="text-lg transition-transform duration-300 group-hover:scale-110" />
                Laravel
              </span>
            </div>

          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center order-first lg:order-last">
            <div className="relative animate-scale-in animation-delay-400">
              <div className="relative overflow-hidden rounded-3xl p-2">
                <img
                  src="/images/profile.jpeg"
                  alt="Mohsin M Imran"
                  className="h-auto w-full max-w-md rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </main>
    </section>
  )
}
