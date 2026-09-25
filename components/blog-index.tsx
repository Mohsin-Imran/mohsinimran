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
    <main className="min-h-screen bg-[#071018] px-4 pb-20 pt-28 text-[#f4f1ea] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-[#7CFFB2] transition hover:text-[#b6ffd4]">
          Back to homepage
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7CFFB2]">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Laravel, Next.js, AI and technical SEO
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#b7c3cf] sm:text-lg">
            Practical guides for SaaS founders, startups and businesses planning Laravel development, Next.js frontends, AI integrations, WordPress, Core Web Vitals and conversion-focused web design.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-[1.4rem] border border-white/10 bg-[#0c1826] p-6 transition hover:border-[#7CFFB2]/40"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-[#7CFFB2]/30 px-3 py-1 text-xs font-medium text-[#7CFFB2]">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[#8ea0b3]">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#b7c3cf]">{post.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.keywords.slice(0, 3).map((keyword) => (
                  <span key={keyword} className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#d5ddd4]">
                    {keyword}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7CFFB2]">
                Read article
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
