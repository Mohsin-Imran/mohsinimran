import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ClientLoader from "./ClientLoader"

export const metadata: Metadata = {
  title: "Mohsin Imran | Full Stack Developer & Web Designer - Portfolio",
  description: "Mohsin Imran - Award-winning Full Stack Developer specializing in AI-Driven Development, SaaS Applications, Laravel, React, and Modern Web Solutions. View portfolio, projects, and services.",
  keywords: [
    "Mohsin Imran",
    "Mohsin Imran Developer",
    "Mohsin Imran Portfolio",
    "Full Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "SaaS Developer",
    "Web Designer",
    "PHP Developer",
    "WordPress Developer",
    "AI Developer",
    "Web Development",
    "Digital Solutions",
    "Freelance Developer",
    "Web Development Services",
    "Portfolio",
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
    siteName: "Mohsin Imran - Full Stack Developer & Web Designer",
    title: "Mohsin Imran | Full Stack Developer & Web Designer Portfolio",
    description: "Award-winning Full Stack Developer specializing in AI-Driven Development, SaaS Applications, Laravel, React, and Modern Web Solutions.",
    images: [
      {
        url: "https://www.mohsinimran.online/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohsin Imran - Professional Full Stack Developer",
        type: "image/jpeg",
      },
      {
        url: "https://www.mohsinimran.online/images/profile.jpeg",
        width: 800,
        height: 600,
        alt: "Mohsin Imran Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mohsinimran",
    creator: "@mohsinimran",
    title: "Mohsin Imran | Full Stack Developer & Web Designer",
    description: "Award-winning Full Stack Developer - AI, SaaS, Laravel, React, Web Design",
    images: ["https://www.mohsinimran.online/images/profile.jpeg"],
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
    bingbot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mohsinimran.online",
    languages: {
      "en-US": "https://www.mohsinimran.online",
      "en": "https://www.mohsinimran.online",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-msvalidate-code",
  },
  category: "Technology",
  classification: "Portfolio",
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mohsin Imran',
  url: 'https://www.mohsinimran.online',
  logo: 'https://www.mohsinimran.online/images/profile.jpeg',
  description: 'Full Stack Developer & Web Designer - Specializing in AI-Driven Development, SaaS Applications, Laravel, React, and Modern Web Solutions',
  sameAs: [
    'https://linkedin.com/in/mohsin-imran',
    'https://github.com/mohsinimran',
    'https://twitter.com/mohsinimran',
  ],
  contact: {
    '@type': 'ContactPoint',
    telephone: '+92-3214475956',
    contactType: 'Customer Support',
    email: 'mmnemon549@gmail.com',
    areaServed: ['PK', 'US', 'UK', 'AE', 'CA', 'AU'],
    availableLanguage: ['en', 'ur'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
    addressLocality: 'Remote',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohsin Imran',
  url: 'https://www.mohsinimran.online',
  image: 'https://www.mohsinimran.online/images/profile.jpeg',
  description: 'Award-winning Full Stack Developer specializing in AI-Driven Development, SaaS Applications, Laravel, React, and Web Design',
  jobTitle: ['Full Stack Developer', 'Web Designer', 'SaaS Architect', 'AI Integration Specialist'],
  email: 'mmnemon549@gmail.com',
  telephone: '+92-3214475956',
  nationality: 'Remote',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Self-Taught Developer',
  },
  sameAs: [
    'https://linkedin.com/in/mohsin-imran',
    'https://github.com/mohsinimran',
    'https://twitter.com/mohsinimran',
    'https://calendly.com/mohsin-imran/30min',
  ],
  knowsAbout: [
    'Full Stack Development',
    'PHP Development',
    'Laravel Framework',
    'React.js',
    'Next.js',
    'MySQL',
    'REST APIs',
    'SaaS Development',
    'WordPress',
    'Web Design',
    'Frontend Development',
    'Backend Development',
    'AI Integration',
    'WebSocket',
    'Real-time Applications',
    'Payment Integration',
    'E-commerce',
    'Stripe API',
    'Twilio API',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Self Employed / Freelance',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mohsin Imran Portfolio',
  url: 'https://www.mohsinimran.online',
  description: 'Full Stack Developer & Web Designer Portfolio - Specializing in SaaS, AI-Driven Development, and Modern Web Solutions',
  sameAs: [
    'https://linkedin.com/in/mohsin-imran',
    'https://github.com/mohsinimran',
  ],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.mohsinimran.online/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Mohsin Imran?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mohsin Imran is an award-winning Full Stack Developer specializing in AI-Driven Development, SaaS Applications, Laravel, React, and Modern Web Solutions with years of professional experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Mohsin Imran offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Services include Full Stack Development, SaaS Development, Web Design, AI Integration, Laravel Development, React Development, WordPress Development, and Custom Web Solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Mohsin Imran use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PHP, Laravel, React, Next.js, MySQL, JavaScript, TypeScript, WordPress, Stripe API, Twilio, WebSocket, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to hire Mohsin Imran?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book a call on Calendly at calendly.com/mohsin-imran/30min or email mmnemon549@gmail.com for consultation.',
      },
    },
  ],
}

const jsonLdScripts = [organizationSchema, personSchema, websiteSchema, faqSchema]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* JSON-LD Schemas - Advanced SEO */}
        {jsonLdScripts.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Core Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />

        {/* Mobile Web App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mohsin Imran" />
        <meta name="application-name" content="Mohsin Imran Portfolio" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/images/profile.jpeg" />

        {/* Performance & Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="prefetch" href="/images/profile.jpeg" as="image" />

        {/* SEO & Analytics Verification */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />

        {/* OpenSearch */}
        <link rel="search" type="application/opensearchdescription+xml" title="Mohsin Imran" href="/opensearch.xml" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.mohsinimran.online" />
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
