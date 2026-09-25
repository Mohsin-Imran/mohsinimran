import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"

type ServiceDetailPage = {
  slug: string
  title: string
  h1: string
  summary: string
  sections: string[]
}

type ServiceDetailProps = {
  page: ServiceDetailPage
}

const included = ["Strategy and scope planning", "Clean development workflow", "SEO-ready structure", "Performance-focused delivery"]

export default function ServiceDetail({ page }: ServiceDetailProps) {
  return (
    <main className="min-h-screen bg-[var(--site-bg)] px-4 pb-20 pt-28 text-[var(--site-ink)] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--site-label)] transition hover:text-[var(--site-label-hover)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </Link>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-label)]">{page.title}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--site-muted)] sm:text-lg">{page.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://calendly.com/mohsin-imran/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[var(--site-on-mint)] transition hover:bg-[#b6ffd4]"
              >
                Book a product call
              </a>
              <a
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--site-line-strong)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--site-label-line)] hover:text-[var(--site-label)]"
              >
                View live work
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-[var(--site-line)] bg-[var(--site-card)] p-6">
            <h2 className="text-xl font-semibold">What this service includes</h2>
            <ul className="mt-5 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-[var(--site-line)] bg-[var(--site-well)] px-4 py-3 text-sm text-[var(--site-chip)]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--site-label)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-4 lg:grid-cols-3">
        {page.sections.map((section, index) => (
          <article key={section} className="rounded-[1.4rem] border border-[var(--site-line)] bg-[var(--site-card)] p-6">
            <p className="text-sm font-medium tabular-nums text-[var(--site-label)]">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">{section}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-14 max-w-6xl rounded-[1.6rem] border border-[var(--site-label-line)] bg-[var(--site-card)] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Book this service</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">
          Share your goals, current stack, timeline and budget. I can help with planning, build work, SEO, API integration and technical consulting.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://calendly.com/mohsin-imran/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[var(--site-on-mint)] transition hover:bg-[#b6ffd4]"
          >
            Book a product call
          </a>
          <a
            href="mailto:mohsinmemon5499@gmail.com?subject=Free%20Website%20Audit%20Request"
            className="inline-flex items-center justify-center rounded-full border border-[var(--site-line-strong)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--site-label-line)] hover:text-[var(--site-label)]"
          >
            Get a free website audit
          </a>
        </div>
      </section>
    </main>
  )
}
