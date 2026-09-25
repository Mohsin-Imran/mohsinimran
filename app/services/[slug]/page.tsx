import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServiceDetail from "@/components/service-detail"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { servicePages } from "@/lib/seo-pages"
import { buildPageMetadata, seoKeywords } from "@/lib/seo"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = servicePages.find((item) => item.slug === slug)

  if (!page) return {}

  return buildPageMetadata({
    title: page.metaTitle,
    description: page.description,
    path: `/services/${page.slug}`,
    keywords: [page.title, page.h1, ...seoKeywords],
  })
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const page = servicePages.find((item) => item.slug === slug)

  if (!page) notFound()

  return (
    <>
      <Header />
      <ServiceDetail page={page} />
      <Footer />
    </>
  )
}
