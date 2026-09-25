import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { projectPages } from "@/lib/seo-pages"
import { buildPageMetadata, seoKeywords } from "@/lib/seo"

type PageProps = {
  params: Promise<{ slug: string }>
}

const projectMedia: Record<string, { image: string; link: string }> = {
  vurks: { image: "/p3.png", link: "https://vurks.com/" },
  "mann-3pl": { image: "/p1.png", link: "https://mann3pl.com" },
  "kaizer-leather": { image: "/p11.png", link: "https://www.kaizerleather.com/" },
  "bare-and-balanced-spa": { image: "/p12.png", link: "https://bareandbalancedspa.com/" },
  "zawaj-connect": { image: "/p10.png", link: "https://zawajconnect.com/" },
  marqu: { image: "/p2.png", link: "https://marquteam.com/" },
  "rice-export-website": { image: "/p5.png", link: "https://www.shafiagro.com/" },
  "247-home-rescue": { image: "/p4.png", link: "https://247homerescue.co.uk/" },
  "student-lms-platform": { image: "/p6.png", link: "https://learning.iheartlearningacademy.com" },
}

export function generateStaticParams() {
  return projectPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = projectPages.find((item) => item.slug === slug)

  if (!page) return {}

  return buildPageMetadata({
    title: `${page.title} | Case Study | Mohsin Imran`,
    description: page.description,
    path: `/portfolio/${page.slug}`,
    keywords: [page.title, ...page.stack, ...seoKeywords],
    type: "article",
  })
}

export default async function PortfolioPage({ params }: PageProps) {
  const { slug } = await params
  const page = projectPages.find((item) => item.slug === slug)

  if (!page) notFound()

  const media = projectMedia[page.slug]
  const sections = [
    {
      label: "Problem",
      body: "The project needed a dependable web platform with mobile-responsive design, clear user flows, secure data handling and enough backend architecture to support real users. The business also needed a clean structure that could support technical SEO, future improvements and conversion rate optimization.",
    },
    {
      label: "Solution",
      body: "I focused on practical full-stack development: planning the data structure, building the user-facing experience, connecting third-party services, improving page speed and keeping the code maintainable. Where needed, the work included RESTful API logic, secure payment gateway integration, real-time chat applications or WordPress content architecture.",
    },
    {
      label: "Result",
      body: page.result,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#071018] px-4 pb-20 pt-28 text-[#f4f1ea] sm:px-6 lg:px-8">
        <article className="mx-auto max-w-6xl">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#7CFFB2] transition hover:text-[#b6ffd4]">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7CFFB2]">Case study</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{page.title}</h1>
              <p className="mt-5 text-base leading-relaxed text-[#b7c3cf] sm:text-lg">{page.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {page.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-[#d5ddd4]">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {media && (
                  <a
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-press inline-flex items-center justify-center gap-2 rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[#071018] hover:bg-[#b6ffd4]"
                  >
                    Open live site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                <a
                  href="https://calendly.com/mohsin-imran/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-[#7CFFB2]/50 hover:text-[#7CFFB2]"
                >
                  Book a product call
                </a>
              </div>
            </div>

            {media && (
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0c1826] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-[#101c2c] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 truncate text-xs text-[#8ea0b3]">{media.link.replace(/^https?:\/\//, "")}</span>
                </div>
                <Image
                  src={media.image}
                  alt={`${page.title} website preview`}
                  width={1280}
                  height={800}
                  priority
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="h-auto w-full object-contain object-top"
                />
              </div>
            )}
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {sections.map((section) => (
              <section key={section.label} className="rounded-[1.4rem] border border-white/10 bg-[#0c1826] p-6">
                <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-[#7CFFB2]">{section.label}</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#b7c3cf] sm:text-base">{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
