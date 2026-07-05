import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { servicePages } from "@/lib/seo-pages"

export const metadata: Metadata = {
  title: {
    absolute: "Services | Laravel, Next.js, AI, SEO & UI/UX Developer",
  },
  description:
    "Explore Mohsin Imran's freelance services for Laravel, Next.js, AI web apps, WordPress, eCommerce, technical SEO and UI/UX design.",
  alternates: {
    canonical: "https://mohsinimran.online/services",
  },
  openGraph: {
    title: "Services | Laravel, Next.js, AI, SEO & UI/UX Developer",
    description:
      "Dedicated service pages for Laravel development, Next.js development, AI web app development, WordPress, eCommerce, technical SEO and UI/UX design.",
    url: "https://mohsinimran.online/services",
    type: "website",
  },
  twitter: {
    title: "Services | Laravel, Next.js, AI, SEO & UI/UX Developer",
    description:
      "Explore freelance full stack development, AI integration, WordPress, eCommerce, SEO and UI/UX services by Mohsin Imran.",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-4 py-24 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-yellow-400 hover:text-yellow-300">
          Back to homepage
        </Link>

        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-bold leading-tight text-yellow-400 md:text-6xl">
            Freelance Web Development Services
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-200">
            Choose a focused service page for Laravel development, Next.js and React development, AI web app development, WordPress and eCommerce, technical SEO or UI/UX design. Each page explains the content, stack and outcomes for that keyword cluster.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-yellow-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              aria-label={`Open ${service.title} service page`}
            >
              <span className="absolute right-5 top-5 flex h-10 w-10 translate-x-2 -translate-y-2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-yellow-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
              <p className="mt-4 flex-1 leading-relaxed text-gray-300">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-400 transition-colors group-hover:text-yellow-300">
                View service
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-14 border-t border-yellow-500/30 pt-8">
          <h2 className="text-2xl font-bold text-white">Need help choosing?</h2>
          <p className="mt-3 max-w-3xl text-gray-300">
            Share your project goals, current website or app, timeline and budget. I can recommend the right service path for full-stack development, AI integration, technical SEO or a startup MVP.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://calendly.com/mohsin-imran/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black"
            >
              Book a Product Call
            </a>
            <a
              href="mailto:mnmemon549@email.com?subject=Service%20Inquiry"
              className="rounded-full border border-yellow-400 px-8 py-3 font-semibold text-yellow-400"
            >
              Ask About Services
            </a>
          </div>
        </section>
      </section>
    </main>
  )
}
