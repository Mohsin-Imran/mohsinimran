import type { Metadata } from "next"
import Header from "@/components/header"
import PortfolioHero from "@/components/portfolio-hero"
import AboutMe from "@/components/about-me"
import Services from "@/components/services"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Call from "@/components/call"

export const metadata: Metadata = {
  title: "Mohsin Imran | Full Stack Developer, UI/UX Designer & SEO Specialist",
  description:
    "Launch high-performance websites, SaaS products, and digital experiences with Mohsin Imran. Full Stack development, Figma UI/UX, SEO optimization, and product strategy.",
  keywords: [
    "Full Stack Developer",
    "UI UX Designer",
    "SEO Specialist",
    "Laravel Developer",
    "Next.js Developer",
    "Figma Design",
    "SaaS Development",
    "Web Performance",
  ],
  openGraph: {
    title: "Mohsin Imran | Full Stack Developer, UI/UX Designer & SEO Specialist",
    description:
      "Launch high-performance websites, SaaS products, and digital experiences with Mohsin Imran. Full Stack development, Figma UI/UX, SEO optimization, and product strategy.",
    type: "website",
    url: "https://www.mohsinimran.online",
    siteName: "Mohsin Imran Portfolio",
    images: [
      {
        url: "https://www.mohsinimran.online/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohsin Imran Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohsin Imran | Full Stack Developer, UI/UX Designer & SEO Specialist",
    description:
      "Launch high-performance websites, SaaS products, and digital experiences with Mohsin Imran. Full Stack development, Figma UI/UX, SEO optimization, and product strategy.",
    images: ["https://www.mohsinimran.online/images/profile.jpeg"],
  },
  alternates: {
    canonical: "https://www.mohsinimran.online",
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <PortfolioHero />
      <AboutMe />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Call />
      <Contact />
      <Footer />
    </>
  )
}
