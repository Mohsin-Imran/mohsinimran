import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projectPages } from "@/lib/seo-pages"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projectPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = projectPages.find((item) => item.slug === slug)

  if (!page) return {}

  return {
    title: {
      absolute: `${page.title} | Case Study | Mohsin Imran`,
    },
    description: page.description,
    alternates: {
      canonical: `https://mohsinimran.online/portfolio/${page.slug}`,
    },
    openGraph: {
      title: `${page.title} | Case Study`,
      description: page.description,
      url: `https://mohsinimran.online/portfolio/${page.slug}`,
      type: "article",
    },
    twitter: {
      title: `${page.title} | Case Study`,
      description: page.description,
    },
  }
}

export default async function PortfolioPage({ params }: PageProps) {
  const { slug } = await params
  const page = projectPages.find((item) => item.slug === slug)

  if (!page) notFound()

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-4 py-24 text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-yellow-400 hover:text-yellow-300">
          Back to homepage
        </Link>
        <h1 className="mt-8 text-4xl font-bold leading-tight text-yellow-400 md:text-5xl">
          {page.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-gray-200">{page.description}</p>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-white">Problem</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            The project needed a dependable web platform with mobile-responsive design, clear user flows, secure data handling and enough backend architecture to support real users. The business also needed a clean structure that could support technical SEO, future improvements and conversion rate optimization.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-white">Solution</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I focused on practical full-stack development: planning the data structure, building the user-facing experience, connecting third-party services, improving page speed and keeping the code maintainable. Where needed, the work included RESTful API logic, secure payment gateway integration, real-time chat applications or WordPress content architecture.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {page.stack.map((item) => (
              <span key={item} className="rounded-full border border-yellow-400/30 px-3 py-1 text-yellow-300">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-white">Result</h2>
          <p className="text-lg leading-relaxed text-gray-300">{page.result}</p>
        </section>
      </article>
    </main>
  )
}
