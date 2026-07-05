import Link from "next/link"
import { ArrowUpRight, BookOpen, Clock } from "lucide-react"

type BlogPost = {
  slug: string
  title: string
  category: string
  readTime: string
  description: string
  keywords: string[]
}

type BlogIndexProps = {
  posts: BlogPost[]
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070707] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <section className="relative z-10 mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-yellow-400 transition-colors hover:border-yellow-400/40 hover:bg-yellow-400/10"
        >
          Back to homepage
        </Link>

        <div className="mt-8 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            <BookOpen className="h-4 w-4" />
            SEO learning hub
          </div>
          <h1 className="text-4xl font-bold leading-tight text-yellow-400 md:text-6xl">
            Laravel, Next.js, AI & Technical SEO Blog
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-200">
            Practical guides for SaaS founders, startups and businesses planning Laravel development, Next.js frontends, AI integrations, WordPress, Core Web Vitals and conversion-focused web design.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex h-full min-h-[310px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-yellow-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-yellow-400">
                {post.title}
              </h2>
              <p className="mt-4 flex-1 leading-relaxed text-gray-300">{post.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {post.keywords.slice(0, 3).map((keyword) => (
                  <span key={keyword} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300">
                    {keyword}
                  </span>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-400">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
