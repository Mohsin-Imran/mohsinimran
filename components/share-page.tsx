"use client"

import { useEffect, useState } from "react"
import { siteUrl } from "@/lib/seo"

const label = "Mohsin Imran, Laravel developer for hire"

export default function SharePage() {
  const [url, setUrl] = useState(siteUrl)

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const links = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${label} ${url}`)}`,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(label)}`,
    },
  ]

  return (
    <div className="mt-4">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--site-soft)]">Share this page</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--site-line)] px-3 py-1.5 text-xs text-[var(--site-nav)] transition hover:border-[var(--site-label-line)] hover:text-[var(--site-label)]"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )
}
