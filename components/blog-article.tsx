import Link from "next/link"
import { ArrowLeft, ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react"

type BlogArticlePost = {
  slug: string
  title: string
  category: string
  readTime: string
  description: string
  keywords: string[]
  sections: {
    heading: string
    body: string
  }[]
}

type BlogArticleProps = {
  post: BlogArticlePost
}

export default function BlogArticle({ post }: BlogArticleProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070707] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <article className="relative z-10 mx-auto max-w-5xl">
        <section>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-yellow-400 transition-colors hover:border-yellow-400/40 hover:bg-yellow-400/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-yellow-400/5 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                <BookOpen className="h-4 w-4" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-300">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight text-yellow-400 md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-200">{post.description}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span key={keyword} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-gray-300">
                  <Tag className="h-3.5 w-3.5 text-yellow-400" />
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 space-y-6">
          {post.sections.map((section, index) => (
            <div
              key={section.heading}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-yellow-400/35 hover:bg-white/[0.07] md:p-8"
            >
              <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-yellow-400/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/10 text-sm font-bold text-yellow-400">
                0{index + 1}
              </div>
              <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">{section.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-8">
          <h2 className="text-3xl font-bold text-white">Need this implemented?</h2>
          <p className="mt-3 max-w-3xl text-gray-300">
            I can help turn this strategy into Laravel, Next.js, WordPress, AI integration or technical SEO implementation for your website or SaaS product.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition-transform hover:scale-105 active:scale-95"
            >
              View Services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="https://calendly.com/mohsin-imran/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400 px-8 py-3 font-semibold text-yellow-400 transition-all hover:bg-yellow-400 hover:text-black"
            >
              Book a Call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </article>
    </main>
  )
}
