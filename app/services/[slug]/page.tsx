import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServiceDetail from "@/components/service-detail"
import { servicePages } from "@/lib/seo-pages"

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

  return {
    title: {
      absolute: page.metaTitle,
    },
    description: page.description,
    alternates: {
      canonical: `https://mohsinimran.online/services/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `https://mohsinimran.online/services/${page.slug}`,
      type: "website",
    },
    twitter: {
      title: page.metaTitle,
      description: page.description,
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const page = servicePages.find((item) => item.slug === slug)

  if (!page) notFound()

  return <ServiceDetail page={page} />
}
