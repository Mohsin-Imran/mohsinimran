import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generatePersonSchema,
  generateServiceSchema,
  generateWebsiteSchema,
} from "./schema"
import { primarySeoDescription, primarySeoTitle, seoFaqs, seoKeywords, seoServices, siteUrl } from "@/lib/seo"
import SiteActions from "@/components/site-actions"
import CustomCursor from "@/components/custom-cursor"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${primarySeoTitle} | Mohsin Imran`,
    template: "%s | Mohsin Imran",
  },
  description: primarySeoDescription,
  keywords: seoKeywords,
  authors: [{ name: "Mohsin Imran", url: siteUrl }],
  creator: "Mohsin Imran",
  publisher: "Mohsin Imran",
  icons: {
    icon: "/logo.png?v=2",
    apple: "/logo.png?v=2",
    shortcut: "/logo.png?v=2",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mohsin Imran",
    title: `${primarySeoTitle} | Mohsin Imran`,
    description: primarySeoDescription,
    images: [
      {
        url: "https://mohsinimran.online/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohsin Imran, Laravel developer for hire",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${primarySeoTitle} | Mohsin Imran`,
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
  generateBreadcrumbSchema([{ name: "Home", url: siteUrl }]),
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
        <CustomCursor />
        <SiteActions />
        <Analytics />
      </body>
    </html>
  )
}
