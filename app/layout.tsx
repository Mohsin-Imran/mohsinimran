import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { generateOrganizationSchema, generatePersonSchema, generateWebsiteSchema, generateFAQSchema } from "./schema"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mohsinimran.online"),
  title: "Mohsin Imran | Full Stack Developer & SEO Specialist",
  description:
    "Full Stack Developer building SEO-optimized Laravel, Next.js, React and Figma digital products for startups and growth teams.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "Figma Designer",
    "SEO Specialist",
    "SaaS Product Development",
    "Digital Product Design",
  ],
  authors: [{ name: "Mohsin Imran", url: "https://www.mohsinimran.online" }],
  creator: "Mohsin Imran",
  publisher: "Mohsin Imran",
  icons: {
    icon: "/images/profile.jpeg",
    apple: "/images/profile.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mohsinimran.online",
    siteName: "Mohsin Imran Portfolio",
    title: "Mohsin Imran | Full Stack Developer & SEO Specialist",
    description:
      "Full Stack Developer building SEO-optimized Laravel, Next.js, React and Figma digital products for startups and growth teams.",
    images: [
      {
        url: "https://www.mohsinimran.online/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohsin Imran Portfolio | Full Stack Developer & SEO Specialist",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohsin Imran | Full Stack Developer & SEO Specialist",
    description:
      "Full Stack Developer building SEO-optimized Laravel, Next.js, React and Figma digital products for startups and growth teams.",
    images: ["https://www.mohsinimran.online/images/profile.jpeg"],
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
    canonical: "https://www.mohsinimran.online",
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
  generateFAQSchema([
    {
      question: "Who is Mohsin Imran?",
      answer:
        "Mohsin Imran is a Full Stack Developer and UX-focused digital product builder who delivers Laravel, Next.js, React, WordPress and SEO-ready website solutions.",
    },
    {
      question: "What services does Mohsin Imran offer?",
      answer:
        "Services include Full Stack Development, UI/UX design, technical SEO, SaaS development, e-commerce, WordPress, and custom web solutions.",
    },
    {
      question: "How can I book a call?",
      answer:
        "Book a consultation on Calendly or email mmnemon549@gmail.com to discuss your web development project.",
    },
  ]),
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mohsin Imran Portfolio" />
        <meta name="application-name" content="Mohsin Imran Portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="canonical" href="https://www.mohsinimran.online" />
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
