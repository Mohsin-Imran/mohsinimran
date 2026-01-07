"use client"

import { Mail, Phone, MapPin, Globe, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mmnemon549@gmail.com",
      link: "mailto:mmnemon549@gmail.com",
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "+923214475956",
    //   link: "tel:+923214475956",
    // },
    // { icon: Globe, label: "Country", value: "Pakistan" },
    {
      icon: Globe,
      label: "Website",
      value: "Website",
      link: "https://www.mohsinimran.online",
      isLink: true,
    },
  ]

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
              <img
                src="/images/profile.jpeg"
                alt="Mohsin Memon"
                className="w-full max-w-md rounded-2xl object-cover  transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div
            className={`w-full lg:w-[60%] space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white-400">
              Full Stack Developer
            </h3>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I'm Mohsin, a Full-Stack Developer specializing in Frontend, Backend, AI, Mobile App, and SaaS Product Development. I design robust architectures and user-friendly interfaces that deliver seamless, high-performance experiences with a focus on clean, secure, and scalable code.
              <br />
              I have hands-on experience building real-time features like notifications and live chat, integrating payment solutions, developing REST APIs, and delivering complete end-to-end applications. Passionate about technology and innovation, I stay current with the latest trends to create modern, reliable solutions that exceed expectations and drive real results.
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
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div> */}

            {/* Resume Button */}
            <div className="flex gap-4">

              {/* View Resume */}
              <button
                onClick={() =>
                  window.open("/resume/mohsinimran_resume.pdf", "_blank")
                }
                className="bg-white text-black font-semibold text-sm py-3 px-10 rounded-full
                  transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1
                  cursor-pointer"
              >
                View Resume
              </button>

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
