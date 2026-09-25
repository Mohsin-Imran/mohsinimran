import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import PortfolioShell from "@/components/portfolio-shell"
import PortfolioHero from "@/components/portfolio-hero"
import TrustBar from "@/components/trust-bar"
import { buildPageMetadata, primarySeoDescription, primarySeoTitle, seoKeywords } from "@/lib/seo"

const AboutMe = dynamic(() => import("@/components/about-me"))
const Services = dynamic(() => import("@/components/services"))
const Packages = dynamic(() => import("@/components/packages"))
const Skills = dynamic(() => import("@/components/skills"))
const Experience = dynamic(() => import("@/components/experience"))
const Projects = dynamic(() => import("@/components/projects"))
const Call = dynamic(() => import("@/components/call"))
const Faq = dynamic(() => import("@/components/faq"))
const Contact = dynamic(() => import("@/components/contact"))
const Footer = dynamic(() => import("@/components/footer"))

export const metadata: Metadata = buildPageMetadata({
  title: `${primarySeoTitle} | Mohsin Imran`,
  description: primarySeoDescription,
  path: "/",
  keywords: seoKeywords,
})

export default function Home() {
  return (
    <PortfolioShell>
      <Header />
      <PortfolioHero />
      <TrustBar />
      <AboutMe />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Packages />
      <Call />
      <Faq />
      <Contact />
      <Footer />
    </PortfolioShell>
  )
}
