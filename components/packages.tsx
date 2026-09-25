"use client"

import { useEffect, useState, type FormEvent } from "react"
import { createPortal } from "react-dom"
import { Code2, Layers, Sparkles, X, type LucideIcon } from "lucide-react"

type PackageOffer = {
  key: string
  label: string
  title: string
  description: string
  points: string[]
  icon: LucideIcon
  popular?: boolean
}

const packages: PackageOffer[] = [
  {
    key: "laravel",
    label: "Laravel / Next.js",
    title: "Product build",
    description: "A working product: the API, the admin, and the screens, handed over so you can run it.",
    points: ["Auth, roles, and admin", "API and database structure", "Payments only if the product needs them", "Support after launch"],
    icon: Code2,
  },
  {
    key: "saas",
    label: "SaaS",
    title: "SaaS MVP",
    description: "A first version founders can put in front of users, scoped before any build starts.",
    points: ["Dashboard and user roles", "Laravel or Next.js", "Billing hookup when you are ready", "One build through launch"],
    icon: Layers,
    popular: true,
  },
  {
    key: "ai",
    label: "AI",
    title: "AI add-on",
    description: "Chat, automation, or an AI workflow inside a product you already have.",
    points: ["OpenAI or OpenRouter", "Fits the app you already run", "The API and the screen together", "Support after it goes live"],
    icon: Sparkles,
  },
]

export default function Packages() {
  const [selected, setSelected] = useState<PackageOffer | null>(null)

  return (
    <section id="packages" className="scroll-mt-24 border-t border-[var(--site-line)] bg-[var(--site-bg)] px-4 py-20 text-[var(--site-ink)] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-label)]">Packages</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Scoped to the product</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">
            Pick a starting point. I reply with scope and timing before any work starts.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {packages.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.key}
                className={`relative flex flex-col rounded-[1.6rem] border p-6 shadow-[0_16px_40px_rgba(7,16,24,0.06)] ${
                  item.popular
                    ? "border-transparent bg-[#071018] text-[#f4f1ea] dark:bg-[#f7f6f2] dark:text-[#071018] lg:-my-3 lg:py-8"
                    : "border-[var(--site-line)] bg-[var(--site-card)]"
                }`}
              >
                {item.popular && (
                  <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#7CFFB2] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#071018]">
                    Most popular
                  </p>
                )}
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                    item.popular
                      ? "border-white/15 bg-white/5 text-[#7CFFB2] dark:border-black/10 dark:bg-black/5 dark:text-[#0c8f56]"
                      : "border-[var(--site-label-line)] bg-[var(--site-label-soft)] text-[var(--site-label)]"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className={`mt-5 text-xs font-medium uppercase tracking-[0.18em] ${item.popular ? "text-[#7CFFB2] dark:text-[#0c8f56]" : "text-[var(--site-label)]"}`}>
                  {item.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${item.popular ? "text-[#b7c3cf] dark:text-[#4d5c69]" : "text-[var(--site-muted)]"}`}>{item.description}</p>
                <ul className={`mt-5 flex-1 space-y-2 border-t pt-5 text-sm ${item.popular ? "border-white/10 dark:border-black/10" : "border-[var(--site-line)]"}`}>
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className={item.popular ? "text-[#7CFFB2] dark:text-[#0c8f56]" : "text-[var(--site-label)]"} aria-hidden="true">
                        •
                      </span>
                      <span className={item.popular ? "text-[#d5ddd4] dark:text-[#33404c]" : "text-[var(--site-nav)]"}>{point}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    item.popular
                      ? "bg-[#7CFFB2] text-[#071018] hover:bg-[#b6ffd4]"
                      : "border border-[var(--site-line-strong)] hover:border-[var(--site-label-line)] hover:text-[var(--site-label)]"
                  }`}
                >
                  Get a quote
                </button>
              </article>
            )
          })}
        </div>
      </div>

      {selected && <QuoteModal offer={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

function QuoteModal({ offer, onClose }: { offer: PackageOffer; onClose: () => void }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose])

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    setStatus("sending")
    const [firstName, ...rest] = name.trim().split(/\s+/)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName || name,
          lastName: rest.join(" ") || "-",
          email,
          phone: "",
          service: offer.title,
          message: `Quote request for ${offer.title}.`,
        }),
      })
      setStatus(response.ok ? "sent" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (typeof document === "undefined") return null

  return createPortal(
    <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto px-4 py-8">
      <button type="button" aria-label="Close quote form" className="absolute inset-0 bg-[#071018]/50 backdrop-blur-sm" onClick={onClose} />
      <form
        onSubmit={submit}
        className="relative w-full max-w-md rounded-[1.4rem] border border-black/10 bg-white p-6 text-[#071018] shadow-[0_24px_80px_rgba(7,16,24,0.28)]"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg bg-[#f3f4f6] p-1.5 text-[#071018]"
        >
          <X className="h-4 w-4" />
        </button>
        <h3 className="pr-8 text-xl font-semibold tracking-tight">Enter your details for a quote</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#5c6b78]">
          {offer.title}. I will reply with scope and timing.
        </p>
        {status === "sent" ? (
          <p className="mt-6 rounded-xl border border-[#0c8f56]/30 bg-[#e8fff3] px-4 py-3 text-sm text-[#0c8f56]">
            Sent. I will follow up on this quote.
          </p>
        ) : (
          <>
            <label className="mt-5 block text-sm">
              <span className="sr-only">Full name</span>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Full name"
                className="w-full rounded-xl border border-[#d7dee6] bg-white px-4 py-3 text-[#071018] outline-none placeholder:text-[#8ea0b3] focus:border-[#3b82f6]"
              />
            </label>
            <label className="mt-3 block text-sm">
              <span className="sr-only">Email</span>
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-xl border border-[#d7dee6] bg-white px-4 py-3 text-[#071018] outline-none placeholder:text-[#8ea0b3] focus:border-[#3b82f6]"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-4 w-full rounded-xl bg-[#071018] px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Get a quote"}
            </button>
            {status === "error" && <p className="mt-3 text-sm text-red-700">The note did not send. Email mohsinmemon5499@gmail.com.</p>}
            <p className="mt-3 text-center text-xs text-[#8ea0b3]">No spam. Just your quote.</p>
          </>
        )}
      </form>
    </div>,
    document.body,
  )
}
