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
  title: "Mohsin Imran | Full Stack Developer & SEO Specialist",
  description:
    "Full Stack Developer creating SEO-optimized Laravel, Next.js, React, and Figma digital products for startups and recruiters.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "Figma Designer",
    "SEO Specialist",
    "SaaS Development",
    "Web Design",
  ],
  openGraph: {
    title: "Mohsin Imran | Full Stack Developer & SEO Specialist",
    description:
      "Full Stack Developer creating SEO-optimized Laravel, Next.js, React, and Figma digital products for startups and recruiters.",
    type: "website",
    url: "https://www.mohsinimran.online",
    siteName: "Mohsin Imran Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://www.mohsinimran.online/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohsin Imran Portfolio | Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohsin Imran | Full Stack Developer & SEO Specialist",
    description:
      "Karachi-based Full Stack Developer creating SEO-optimized Laravel, Next.js, React, and Figma digital products for startups and recruiters.",
    images: ["https://www.mohsinimran.online/images/profile.jpeg"],
    creator: "@mohsinimran",
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
