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
    {
      icon: Phone,
      label: "Phone",
      value: "+923214475956",
      link: "tel:+923214475956",
    },
    // { icon: Globe, label: "Country", value: "Pakistan" },
    {
      icon: Globe,
      label: "Website",
      value: "portfolio.website",
      link: "https://mohsinportfolio-rust.vercel.app/",
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

          {/* Right Side - Content */}
          <div
            className={`w-full lg:w-[60%] space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white-400">
              Full Stack Developer
            </h3>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I'm Mohsin, a Full-Stack Developer with 4 years of experience in
              building dynamic and secure web applications. I specialize in PHP,
              Laravel, JavaScript, HTML, CSS, Bootstrap, MySQL, and MariaDB.
              <br />
              I’ve developed scalable backends, responsive frontends, and
              real-time features like chat and notifications. My work includes
              e-commerce, SaaS platforms, and payment gateway integrations
              (Stripe, PayPal).
              <br />
              Passionate about clean code and modern technologies, I focus on
              creating efficient, user-friendly, and future-ready web solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-yellow-400" />
                      <span className="text-white-400 font-medium">
                        {item.label}
                      </span>
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white-400 hover:text-white-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-white">
                        {item.value}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>

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
            <button
              onClick={() => window.open("/resume/Mohsin_Imran_Cv.pdf", "_blank")}
              className="w-full py-2 px-6 bg-yellow-500 text-white font-semibold rounded-lg 
             hover:bg-yellow-400 transform hover:scale-[1.03] 
             transition-all duration-300 shadow-lg hover:shadow-yellow-500/50
             cursor-pointer"
            >
              View Resume
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}
