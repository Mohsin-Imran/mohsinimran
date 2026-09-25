import type { Metadata } from "next"

export const siteUrl = "https://mohsinimran.online"

export const primarySeoTitle = "Laravel Developer for Hire | SaaS & AI Products"

export const primarySeoDescription =
  "Hire Mohsin Imran to build full stack SaaS products and AI products. Laravel developer for hire for Next.js, APIs, and technical SEO. Remote, worldwide."

export const seoKeywords = [
  "Laravel developer for hire",
  "hire Laravel developer",
  "freelance Laravel developer",
  "full stack SaaS developer",
  "SaaS product developer",
  "AI product developer",
  "AI web app developer",
  "Next.js developer for hire",
  "Laravel Next.js developer",
  "SaaS MVP developer",
  "technical SEO for SaaS",
  "Laravel developer Pakistan",
]

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = seoKeywords,
  type = "website",
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  type?: "website" | "article"
}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`

  return {
    title: { absolute: title },
    description,
    keywords: [...new Set(keywords)],
    authors: [{ name: "Mohsin Imran", url: siteUrl }],
    creator: "Mohsin Imran",
    publisher: "Mohsin Imran",
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: "Mohsin Imran",
      locale: "en_US",
      images: [
        {
          url: `${siteUrl}/images/profile.jpeg`,
          width: 1200,
          height: 630,
          alt: "Mohsin Imran, Laravel developer for hire",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/images/profile.jpeg`],
      creator: "@mohsinimran",
    },
  }
}

export const seoServices = [
  {
    name: "Laravel Development",
    description:
      "Laravel Developer for Hire services for Laravel web app development, Laravel API development, Laravel SaaS development, custom Laravel backend development and Laravel MySQL projects.",
  },
  {
    name: "Next.js and React Development",
    description:
      "Next.js Developer for Hire and React.js developer services for fast-loading Next.js websites, React frontend development, Next.js SaaS development and Next.js SEO optimization.",
  },
  {
    name: "AI Web App Development",
    description:
      "AI Web App Developer services for ChatGPT API integration, OpenAI and OpenRouter integration, AI SaaS development, AI chatbot development and AI-powered web applications.",
  },
  {
    name: "WordPress and eCommerce Development",
    description:
      "WordPress Developer for Hire services for WooCommerce stores, Shopify development, WordPress landing page design, eCommerce website development and Magento support.",
  },
  {
    name: "Technical SEO Services",
    description:
      "Technical SEO Expert services for Core Web Vitals optimization, website speed optimization, Lighthouse performance audits, schema markup implementation and SEO audits.",
  },
  {
    name: "UI/UX Design Services",
    description:
      "UI/UX Designer for Web Apps services including Figma design services, conversion-focused UI design, landing page design, SaaS UI design and website redesign.",
  },
]

export const seoFaqs = [
  {
    question: "How much does a Laravel developer cost?",
    answer:
      "Laravel developer cost depends on scope, timeline, integrations and design complexity. A small fix may be affordable, while SaaS product development with backend architecture, APIs and payment gateways needs a custom quote.",
  },
  {
    question: "How long does it take to build a SaaS MVP?",
    answer:
      "A focused SaaS MVP usually takes 4 to 10 weeks depending on features such as user roles, dashboard design, RESTful API integration, Stripe or PayPal billing, real-time chat and admin workflows.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes. I offer ongoing maintenance, security updates, bug fixes, page speed optimization, database support, cloud hosting help and zero-downtime deployment support for Laravel, Next.js, WordPress and SaaS products.",
  },
  {
    question: "Can I hire a freelance Laravel developer for a SaaS project?",
    answer:
      "Yes. You can hire Mohsin Imran as a freelance Laravel developer for SaaS projects, startup MVP development, marketplace platforms, backend architecture, API integration and secure payment gateway integration.",
  },
  {
    question: "Do you provide AI integration for existing web apps?",
    answer:
      "Yes. I can add AI integration to existing Laravel, Next.js, React or WordPress applications, including ChatGPT API workflows, AI assistants, content automation and internal business tools.",
  },
  {
    question: "Do you offer technical SEO audits for SaaS websites?",
    answer:
      "Yes. I review metadata, page speed, Core Web Vitals, schema, internal linking, crawlability, mobile-responsive design, conversion rate optimization and technical issues that can hold SaaS websites back.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I work with clients worldwide for full-stack development, WordPress, eCommerce, SaaS, AI integration and technical consulting projects.",
  },
]
