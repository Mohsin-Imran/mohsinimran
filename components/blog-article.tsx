import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react"

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
    <main className="min-h-screen bg-[#071018] px-4 pb-20 pt-28 text-[#f4f1ea] sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#7CFFB2] transition hover:text-[#b6ffd4]">
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-[#7CFFB2]/30 px-3 py-1 font-medium text-[#7CFFB2]">{post.category}</span>
            <span className="inline-flex items-center gap-1 text-[#8ea0b3]">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-[#b7c3cf] sm:text-lg">{post.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#d5ddd4]">
                {keyword}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-12 space-y-10">
          {post.sections.map((section, index) => (
            <section key={section.heading}>
              <p className="text-xs font-medium tabular-nums text-[#7CFFB2]">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{section.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#b7c3cf] sm:text-base">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-[1.6rem] border border-[#7CFFB2]/25 bg-[#0c1826] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Need this implemented?</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#b7c3cf] sm:text-base">
            I can help turn this strategy into Laravel, Next.js, WordPress, AI integration or technical SEO implementation for your website or SaaS product.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7CFFB2] px-6 py-3 text-sm font-semibold text-[#071018] transition hover:bg-[#b6ffd4]"
            >
              View services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="https://calendly.com/mohsin-imran/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-[#7CFFB2]/50 hover:text-[#7CFFB2]"
            >
              Book a call
            </a>
          </div>
        </section>
      </article>
    </main>
  )
}
