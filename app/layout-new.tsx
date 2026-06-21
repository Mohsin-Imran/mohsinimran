import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ClientLoader from "./ClientLoader"

export const metadata: Metadata = {
  title: "Mohsin Imran | Full Stack Developer & Web Designer",
  description: "Explore Mohsin Imran's professional portfolio. Full Stack Developer specializing in web development, design, and digital solutions.",
  keywords: ["Mohsin Imran", "Developer", "Portfolio", "Web Designer", "Full Stack", "React", "Next.js", "PHP", "Laravel", "SaaS"],
  authors: [{ name: "Mohsin Imran" }],
  creator: "Mohsin Imran",
  icons: {
    icon: "/images/profile.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohsinimran.online",
    title: "Mohsin Imran | Full Stack Developer & Web Designer",
    description: "Explore Mohsin Imran's professional portfolio. Full Stack Developer specializing in web development, design, and digital solutions.",
    siteName: "Mohsin Imran Portfolio",
    images: [
      {
        url: "https://mohsinimran.online/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohsin Imran - Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohsin Imran | Full Stack Developer & Web Designer",
    description: "Explore Mohsin Imran's professional portfolio. Full Stack Developer specializing in web development, design, and digital solutions.",
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
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://mohsinimran.online",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "Technology",
  classification: "Portfolio",
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohsin Imran',
    url: 'https://mohsinimran.online',
    image: 'https://mohsinimran.online/images/profile.jpeg',
    description: 'Full Stack Developer & Web Designer - AI-Driven Full-Stack Engineer',
    jobTitle: ['Full Stack Developer', 'Web Designer', 'SaaS Developer'],
    email: 'mmnemon549@gmail.com',
    sameAs: [
      'https://linkedin.com/in/mohsin-imran',
      'https://github.com/mohsinimran',
      'https://twitter.com/mohsinimran',
    ],
    knowsAbout: ['Full Stack Development', 'PHP', 'Laravel', 'React', 'Next.js', 'MySQL', 'REST APIs', 'SaaS Development', 'WordPress', 'Web Design'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mohsin Imran Portfolio',
    url: 'https://mohsinimran.online',
    description: 'Full Stack Developer & Web Designer Portfolio',
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {jsonLd.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body
        suppressHydrationWarning
        className={`font-sans bg-black text-white ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <ClientLoader>{children}</ClientLoader>
        <Analytics />
      </body>
    </html>
  )
}
