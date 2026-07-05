import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import PortfolioShell from "@/components/portfolio-shell"
import PortfolioHero from "@/components/portfolio-hero"
import SectionFrame from "@/components/section-frame"
import TrustBar from "@/components/trust-bar"
import { primarySeoDescription, primarySeoTitle } from "@/lib/seo"

const AboutMe = dynamic(() => import("@/components/about-me"))
const Services = dynamic(() => import("@/components/services"))
const Skills = dynamic(() => import("@/components/skills"))
const Experience = dynamic(() => import("@/components/experience"))
const Projects = dynamic(() => import("@/components/projects"))
const Call = dynamic(() => import("@/components/call"))
const Faq = dynamic(() => import("@/components/faq"))
const Contact = dynamic(() => import("@/components/contact"))
const Footer = dynamic(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: primarySeoTitle,
  description: primarySeoDescription,
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
    "AI Automation Developer",
    "AI Product Expert",
    "AI Product Developer",
    "AI Web App Developer Pakistan",
    "OpenAI API Developer",
    "OpenRouter Integration Developer",
    "Technical SEO Consultant",
    "Freelance Full Stack Developer",
    "Laravel + Next.js developer for hire",
    "Custom SaaS development",
    "React developer freelance",
    "WordPress developer Karachi",
    "eCommerce website developer WooCommerce Shopify",
    "AI API integration developer",
    "AI product expert Pakistan",
    "full stack developer AI product expert",
    "Full stack web application developer Pakistan",
    "Hire Laravel developer for startup",
    "Backend API developer REST GraphQL",
    "hire freelance Laravel developer for SaaS project",
    "Next.js developer for startup MVP",
    "Laravel + Next.js full stack developer for hire",
    "AI integration developer for existing web app",
    "affordable full stack developer Pakistan",
    "WordPress developer for UK small business",
    "technical SEO audit for SaaS website",
    "backend architect for marketplace platform",
  ],
  openGraph: {
    title: `Mohsin Imran | ${primarySeoTitle}`,
    description: primarySeoDescription,
    type: "website",
    url: "https://mohsinimran.online",
    siteName: "Mohsin Imran Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://mohsinimran.online/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohsin Imran full stack developer, AI developer and SEO specialist portfolio",
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
  alternates: {
    canonical: "https://mohsinimran.online",
  },
}

export default function Home() {
  return (
    <PortfolioShell>
      <Header />
      <SectionFrame stackIndex={10} size="hero">
        <PortfolioHero />
      </SectionFrame>
      <TrustBar />
      <AboutMe />
      <SectionFrame delay={0.08} stackIndex={40}>
        <Services />
      </SectionFrame>
      <SectionFrame delay={0.08} accent="white" stackIndex={50}>
        <Skills />
      </SectionFrame>
      <SectionFrame delay={0.08} stackIndex={60}>
        <Experience />
      </SectionFrame>
      <SectionFrame delay={0.08} accent="white" stackIndex={70}>
        <Projects />
      </SectionFrame>
      <SectionFrame delay={0.08} stackIndex={80} size="compact">
        <Call />
      </SectionFrame>
      <SectionFrame delay={0.08} accent="white" stackIndex={90}>
        <Faq />
      </SectionFrame>
      <SectionFrame delay={0.08} stackIndex={100}>
        <Contact />
      </SectionFrame>
      <Footer />
    </PortfolioShell>
  )
}
