"use client"

import type React from "react"

import { useState, useEffect, useRef, type FormEvent } from "react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "Web Development",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: "+923214475956",
      delay: "delay-100",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "mnmemon549@gmail.com",
      delay: "delay-200",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Address",
      value: "Dubai, United Arab Emirates",
      delay: "delay-300",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.21 0 4 4 4 8s-1.79 8-4 8-4-4-4-8 1.79-8 4-8z"
          />
        </svg>
      ),
      label: "Website",
      value: "https://mohsinportfolio-rust.vercel.app/",
      link: "https://mohsinportfolio-rust.vercel.app/",
      delay: "delay-400",
    }

  ]


  return (
    <section ref={sectionRef} id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0A]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">
            Contact <span className="text-yellow-400">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-2">Let's Work Together</h3>
              <p className="text-gray-400 mb-8">Let's collaborate to create impactful solutions together!</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all peer"
                      placeholder="First Name"
                    />
                    <label className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-sm text-yellow-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-yellow-400 peer-focus:text-sm">
                      First Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all peer"
                      placeholder="Last Name"
                    />
                    <label className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-sm text-yellow-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-yellow-400 peer-focus:text-sm">
                      Last Name
                    </label>
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all peer"
                      placeholder="Email Address"
                    />
                    <label className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-sm text-yellow-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-yellow-400 peer-focus:text-sm">
                      Email Address
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all peer"
                      placeholder="Phone Number"
                    />
                    <label className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-sm text-yellow-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-yellow-400 peer-focus:text-sm">
                      Phone Number
                    </label>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-yellow-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Consulting">Consulting</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-slate-900/50 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all resize-none peer"
                    placeholder="Type Your Message Here"
                  />
                  <label className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-sm text-yellow-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-yellow-400 peer-focus:text-sm">
                    Type Your Message Here
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-500 text-white font-semibold py-4 rounded-lg hover:from-yellow-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg animate-fadeInUp">
                    Mail sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg animate-fadeInUp">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 animate-fadeInRight ${info.delay}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/50">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-yellow-400 font-semibold mb-1">{info.label}</h4>
                    <p className="text-white text-sm leading-relaxed break-words">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
