"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function PortfolioHero() {
  const texts = [
    "Laravel & Next.js Development Specialist",
    "Custom SaaS Development Consultant",
    "Nodejs & React.js Developer",
    "AI API Integration Specialist",
    "Backend API Development Expert",
    "WordPress eCommerce Development Specialist",
    "SEO-Focused Web Development Professional",
    "eCommerce Website Development Expert",
  ];

  const [displayText, setDisplayText] = useState(texts[0])
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(texts[0].length)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (index === texts.length) setIndex(0)

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        reverse
          ? prev.substring(0, prev.length - 1)
          : texts[index].substring(0, subIndex + 1)
      )

      if (!reverse && subIndex === texts[index].length) {
        setTimeout(() => setReverse(true), 1000)
        return
      }

      if (reverse && subIndex === 0) {
        setReverse(false)
        setIndex((prev) => (prev + 1) % texts.length)
        return
      }

      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  return (
    <section id="home" className="min-h-screen bg-background text-foreground pt-24">
      <main className="container mx-auto px-6 py-12 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="animate-fade-in-left animation-delay-200 text-3xl font-bold leading-tight text-yellow-500 sm:text-5xl lg:text-5xl">
              {/* Freelance Full Stack Developer - Laravel, Next.js & AI Integration Expert */}
              Hi, I'm Mohsin M Imran
            </h1>

            <div className="animate-fade-in-left animation-delay-400 text-xl leading-snug sm:text-2xl lg:text-3xl">
              I'm Mohsin,{" "}
              <span className="text-yellow-500 font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="animate-fade-in-left animation-delay-600 text-base leading-relaxed text-white lg:text-md">
              I help startups, agencies, and business owners build SEO-optimized web applications using Laravel, Next.js, React, WordPress, WooCommerce, Shopify, and AI integrations. From MVP development and SaaS product development to AI API automation, RESTful API integration, WebSocket development, and backend architecture, I turn ideas into fast, secure, conversion-ready digital products.
            </p>

            {/* Value List */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="bg-white text-center text-black font-semibold text-sm py-3 px-10 rounded-full
        transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="https://calendly.com/mohsin-imran/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FDC700] hover:bg-[#e5b307] text-center text-gray-900 font-semibold text-sm py-3 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Book a Product Call
              </a>
              {/* <a
                href="mailto:mnmemon549@email.com"
                className="border border-yellow-400 text-yellow-400 font-semibold text-sm py-3 px-10 rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-black"
              >
                Get a Free Website Audit
              </a> */}
            </div>
            <ul className="space-y-1">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#FBC300]"></span>
                <span>
                  Laravel and Next.js architecture for scalable SaaS products, startup MVPs, and business portals.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#FBC300]"></span>
                <span>
                  AI API integrations, AI automation, backend APIs, payment gateways, and CRM workflows.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#FBC300]"></span>
                <span>
                  SEO-ready content structure, page speed optimization, schema markup, Core Web Vitals, and conversion rate optimization.
                </span>
              </li>
            </ul>

          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center order-first lg:order-last">
            <div className="relative animate-scale-in animation-delay-400">
              <div className="relative overflow-hidden rounded-3xl p-2">
                <Image
                  src="/images/profile.jpeg"
                  alt="Mohsin Imran - Full Stack Laravel and Next.js Developer"
                  width={448}
                  height={560}
                  priority
                  sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 320px"
                  className="h-auto w-full max-w-xs rounded-2xl object-cover transition-transform duration-500 hover:scale-105 sm:max-w-sm lg:max-w-md"
                />
              </div>
            </div>
          </div>

        </div>
      </main>
    </section>
  )
}
