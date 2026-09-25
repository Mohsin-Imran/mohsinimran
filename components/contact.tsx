"use client"

import type React from "react"
import { useState, type FormEvent } from "react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Backend Development",
  "Full Stack Development",
  "Free Website Audit",
  "AI Integration",
  "Technical SEO",
  "Consulting",
]

const fieldClass =
  "w-full rounded-xl border border-[var(--site-line)] bg-[var(--site-card)] px-4 py-3 text-sm text-[var(--site-ink)] outline-none transition placeholder:text-[var(--site-soft)] focus:border-[var(--site-label)] focus:ring-2 focus:ring-[var(--site-label-soft)]"

export default function Contact() {
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    } catch {
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

  return (
    <section id="contact" className="relative z-20 scroll-mt-24 border-t border-[var(--site-line)] bg-[var(--site-bg)] px-4 py-20 text-[var(--site-ink)] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-label)]">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Book a call</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">
            Share the product, the timeline, and what you need. I reply with the next move for Laravel, Next.js, AI, WordPress, or a technical SEO audit.
          </p>

          <div className="mt-8 space-y-3">
            <a href="mailto:mnmemon549@gmail.com" className="hover-card block rounded-2xl border border-[var(--site-line)] bg-[var(--site-card)] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--site-label)]">Email</p>
              <p className="mt-1 text-sm">mnmemon549@gmail.com</p>
            </a>
            <a
              href="https://calendly.com/mohsin-imran/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-card block rounded-2xl border border-[var(--site-line)] bg-[var(--site-card)] px-5 py-4"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--site-label)]">Call</p>
              <p className="mt-1 text-sm">30 minutes on Calendly</p>
            </a>
            <div className="rounded-2xl border border-[var(--site-line)] bg-[var(--site-card)] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--site-label)]">Availability</p>
              <p className="mt-1 text-sm">Remote projects worldwide</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[1.6rem] border border-[var(--site-line)] bg-[var(--site-card)] p-5 shadow-[0_16px_40px_rgba(7,16,24,0.05)] sm:p-8">
          <p className="text-2xl font-semibold tracking-tight">Tell me about the project</p>
          <p className="mt-2 text-sm text-[var(--site-muted)]">A short note is enough. I will follow up with scope and timing.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-xs text-[var(--site-muted)]">
              First name
              <input name="firstName" value={formData.firstName} onChange={handleChange} required className={`${fieldClass} mt-2`} placeholder="First name" />
            </label>
            <label className="block text-xs text-[var(--site-muted)]">
              Last name
              <input name="lastName" value={formData.lastName} onChange={handleChange} required className={`${fieldClass} mt-2`} placeholder="Last name" />
            </label>
            <label className="block text-xs text-[var(--site-muted)]">
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className={`${fieldClass} mt-2`} placeholder="Email address" />
            </label>
            <label className="block text-xs text-[var(--site-muted)]">
              Phone
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={`${fieldClass} mt-2`} placeholder="Phone number" />
            </label>
          </div>

          <label className="mt-4 block text-xs text-[var(--site-muted)]">
            Service
            <select name="service" value={formData.service} onChange={handleChange} className={`${fieldClass} mt-2`}>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-4 block text-xs text-[var(--site-muted)]">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${fieldClass} mt-2 resize-none`}
              placeholder="What are you building?"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="hover-press mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[var(--site-on-mint)] hover:bg-[#b6ffd4] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>

          {submitStatus === "success" && (
            <p className="mt-4 rounded-xl border border-[var(--site-label-line)] bg-[var(--site-label-soft)] px-4 py-3 text-sm text-[var(--site-label)]">
              Message sent. I will reply soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
              The message did not send. Try again, or email mnmemon549@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
