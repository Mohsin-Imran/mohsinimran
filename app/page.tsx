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
  title: "Mohsin Imran | Full Stack Developer, AI Developer, Laravel, Next.js & React Expert",
  description:
    "Mohsin Imran is a Full Stack Developer and AI Developer specializing in Laravel, Next.js, React, PHP, AI integrations, ChatGPT APIs, SaaS applications, SEO, WordPress, eCommerce, and custom web development services.",
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
    title: "Mohsin Imran | Full Stack Developer, AI Developer, Laravel, Next.js & React Expert",
    description:
      "Mohsin Imran is a Full Stack Developer and AI Developer specializing in Laravel, Next.js, React, PHP, AI integrations, ChatGPT APIs, SaaS applications, SEO, WordPress, eCommerce, and custom web development services.",
    type: "website",
    url: "https://mohsinimran.online",
    siteName: "Mohsin Imran Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://mohsinimran.online/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohsin Imran Portfolio | Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohsin Imran | Full Stack Developer, AI Developer, Laravel, Next.js & React Expert",
    description:
      "Karachi-based Mohsin Imran is a Full Stack Developer and AI Developer specializing in Laravel, Next.js, React, PHP, AI integrations, ChatGPT APIs, SaaS applications, SEO, WordPress, eCommerce, and custom web development services.",
    images: ["https://mohsinimran.online/images/profile.jpeg"],
    creator: "@mohsinimran",
  },
  alternates: {
    canonical: "https://mohsinimran.online",
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
