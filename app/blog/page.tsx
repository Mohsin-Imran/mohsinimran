import type { Metadata } from "next"
import BlogIndex from "@/components/blog-index"
import Header from "@/components/header"
import { blogPages } from "@/lib/seo-pages"

export const metadata: Metadata = {
  title: {
    absolute: "Blog | Laravel, Next.js, AI & Technical SEO | Mohsin Imran",
  },
  description:
    "Guides on Laravel, Next.js, SaaS product development, AI API integration, Core Web Vitals and technical SEO for startups.",
  alternates: {
    canonical: "https://mohsinimran.online/blog",
  },
  openGraph: {
    title: "Blog | Laravel, Next.js, AI & Technical SEO",
    description:
      "Guides on Laravel, Next.js, SaaS product development, AI API integration, Core Web Vitals and technical SEO for startups.",
    url: "https://mohsinimran.online/blog",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogIndex posts={blogPages} />
    </>
  )
}
