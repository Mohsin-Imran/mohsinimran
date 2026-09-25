import type { Metadata } from "next"
import BlogIndex from "@/components/blog-index"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { blogPages } from "@/lib/seo-pages"
import { buildPageMetadata, seoKeywords } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Laravel, SaaS & AI Blog | Mohsin Imran",
  description:
    "Guides on Laravel, full stack SaaS products, AI products, Next.js, and technical SEO for startups.",
  path: "/blog",
  keywords: ["Laravel SaaS guide", "AI product development", "technical SEO for SaaS", ...seoKeywords],
})

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogIndex posts={blogPages} />
      <Footer />
    </>
  )
}
