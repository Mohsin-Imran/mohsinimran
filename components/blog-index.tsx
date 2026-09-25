import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"

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
    <main className="min-h-screen bg-[var(--site-bg)] px-4 pb-20 pt-28 text-[var(--site-ink)] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-[var(--site-label)] transition hover:text-[var(--site-label-hover)]">
          Back to homepage
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-label)]">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Laravel, Next.js, AI and technical SEO
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--site-muted)] sm:text-lg">
            Practical guides for SaaS founders, startups and businesses planning Laravel development, Next.js frontends, AI integrations, WordPress, Core Web Vitals and conversion-focused web design.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex h-full flex-col rounded-[1.4rem] border border-[var(--site-line)] bg-[var(--site-card)] p-6 transition hover:border-[var(--site-label-line)]"
            >
              <div className="pointer-events-none flex items-center justify-between gap-4">
                <span className="rounded-full border border-[var(--site-label-line)] px-3 py-1 text-xs font-medium text-[var(--site-label)]">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--site-soft)]">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                  {post.title}
                </Link>
              </h2>
              <p className="pointer-events-none mt-3 flex-1 text-sm leading-relaxed text-[var(--site-muted)]">{post.description}</p>
              <div className="pointer-events-none mt-4 flex flex-wrap gap-2">
                {post.keywords.slice(0, 3).map((keyword) => (
                  <span key={keyword} className="rounded-full border border-[var(--site-line)] px-3 py-1 text-xs text-[var(--site-chip)]">
                    {keyword}
                  </span>
                ))}
              </div>
              <span className="pointer-events-none mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--site-label)]">
                Read article
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
