import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { servicePages } from "@/lib/seo-pages"
import { buildPageMetadata, seoKeywords } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Laravel, Next.js & AI Services | Mohsin Imran",
  description:
    "Hire Mohsin Imran for Laravel development, full stack SaaS products, AI products, Next.js, WordPress, and technical SEO.",
  path: "/services",
  keywords: ["Laravel developer for hire", "AI product developer", "Next.js developer for hire", ...seoKeywords],
})

export default function ServicesPage() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-[var(--site-bg)] px-4 pb-20 pt-28 text-[var(--site-ink)] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-[var(--site-label)] hover:text-[var(--site-label-hover)]">
          Back to homepage
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-label)]">Services</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Freelance web development services
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--site-muted)] sm:text-lg">
            Choose a focused service page for Laravel development, Next.js and React development, AI web app development, WordPress and eCommerce, technical SEO or UI/UX design. Each page explains the content, stack and outcomes for that keyword cluster.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service) => (
            <article
              key={service.slug}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--site-line)] bg-[var(--site-card)] p-6 transition hover:border-[var(--site-label-line)]"
            >
              <span className="pointer-events-none absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--site-line)] text-[var(--site-label)]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <h2 className="pr-12 text-2xl font-semibold tracking-tight">
                <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
                  {service.title}
                </Link>
              </h2>
              <p className="pointer-events-none mt-4 flex-1 text-sm leading-relaxed text-[var(--site-muted)]">{service.description}</p>
              <span className="pointer-events-none mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--site-label)]">
                View service
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-[1.6rem] border border-[var(--site-label-line)] bg-[var(--site-card)] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Need help choosing?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">
            Share your project goals, current website or app, timeline and budget. I can recommend the right service path for full-stack development, AI integration, technical SEO or a startup MVP.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://calendly.com/mohsin-imran/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[var(--site-on-mint)] transition hover:bg-[#b6ffd4]"
            >
              Book a Product Call
            </a>
            <a
              href="mailto:mohsinmemon5499@gmail.com?subject=Service%20Inquiry"
              className="rounded-full border border-[var(--site-line-strong)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--site-label-line)] hover:text-[var(--site-label)]"
            >
              Ask About Services
            </a>
          </div>
        </section>
      </section>
    </main>
    <Footer />
    </>
  )
}
