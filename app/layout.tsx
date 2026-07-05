import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import {
  generateFAQSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generatePersonSchema,
  generateServiceSchema,
  generateWebsiteSchema,
} from "./schema"
import { primarySeoDescription, primarySeoTitle, seoFaqs, seoServices, siteUrl } from "@/lib/seo"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Mohsin Imran | ${primarySeoTitle}`,
    template: "%s | Mohsin Imran",
  },
  description: primarySeoDescription,
  keywords: [
    "Mohsin Imran",
    "AI Developer",
    "AI Engineer",
    "AI Integration Developer",
    "AI Developer",
    "OpenAI API Developer",
    "AI Automation",
    "AI Agent Developer",
    "AI Product Expert",
    "AI Product Developer",
    "AI Web App Developer Pakistan",
    "Full Stack Developer Pakistan",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "SEO Specialist",
    "Web Developer Pakistan",
    "Full Stack Developer Karachi",
    "Laravel Developer Pakistan",
    "Next.js SEO Developer",
    "SaaS Developer",
    "WordPress SEO Developer",
    "Laravel + Next.js developer for hire",
    "Custom SaaS development",
    "React developer freelance",
    "WordPress developer Karachi",
    "eCommerce website developer",
    "ChatGPT API integration developer",
    "OpenRouter integration developer",
    "AI product expert Pakistan",
    "full stack developer AI product expert",
    "SEO-optimized web development",
    "Backend API developer",
    "full-stack development",
    "backend architecture",
    "API integration",
    "RESTful API",
    "scalable web applications",
    "MVP development",
    "SaaS product development",
    "page speed optimization",
    "mobile-responsive design",
    "Stripe PayPal payment integration",
    "AWS DigitalOcean hosting",
    "zero-downtime deployment",
    "CRM integration",
    "WebSocket development",
    "technical consultant",
  ],
  authors: [{ name: "Mohsin Imran", url: siteUrl }],
  creator: "Mohsin Imran",
  publisher: "Mohsin Imran",
  icons: {
    icon: "/images/profile.jpeg",
    apple: "/images/profile.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mohsin Imran Portfolio",
    title: `Mohsin Imran | ${primarySeoTitle}`,
    description: primarySeoDescription,
    images: [
      {
        url: "https://mohsinimran.online/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohsin Imran - Full Stack Laravel and Next.js Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Mohsin Imran | ${primarySeoTitle}`,
    description: primarySeoDescription,
    images: ["https://mohsinimran.online/images/profile.jpeg"],
    creator: "@mohsinimran",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  applicationName: "Mohsin Imran Portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Mohsin Imran Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
}

const jsonLdScripts = [
  generateOrganizationSchema(),
  generatePersonSchema(),
  generateWebsiteSchema(),
  generateLocalBusinessSchema(),
  ...seoServices.map((service) => generateServiceSchema(service)),
  generateFAQSchema(seoFaqs),
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {jsonLdScripts.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <meta name="theme-color" content="#000000" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body
        suppressHydrationWarning
        className={`font-sans bg-black text-white ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
