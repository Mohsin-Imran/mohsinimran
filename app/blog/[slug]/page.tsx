import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogArticle from "@/components/blog-article"
import Header from "@/components/header"
import { blogPages } from "@/lib/seo-pages"

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

  return {
    title: {
      absolute: `${page.title} | Mohsin Imran`,
    },
    description: page.description,
    alternates: {
      canonical: `https://mohsinimran.online/blog/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://mohsinimran.online/blog/${page.slug}`,
      type: "article",
    },
    twitter: {
      title: page.title,
      description: page.description,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const page = blogPages.find((item) => item.slug === slug)

  if (!page) notFound()

  return (
    <>
      <Header />
      <BlogArticle post={page} />
    </>
  )
}
