import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogArticle from "@/components/blog-article"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { blogPages } from "@/lib/seo-pages"
import { buildPageMetadata, seoKeywords } from "@/lib/seo"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = blogPages.find((item) => item.slug === slug)

  if (!page) return {}

  return buildPageMetadata({
    title: `${page.title} | Mohsin Imran`,
    description: page.description,
    path: `/blog/${page.slug}`,
    keywords: [...page.keywords, ...seoKeywords],
    type: "article",
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const page = blogPages.find((item) => item.slug === slug)

  if (!page) notFound()

  return (
    <>
      <Header />
      <BlogArticle post={page} />
      <Footer />
    </>
  )
}
