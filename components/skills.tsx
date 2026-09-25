"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const groups = [
  {
    index: "01",
    title: "Backend",
    note: "APIs, apps, and the systems behind them.",
    skills: [
      {
        name: "Laravel",
        description: "Most of the products I ship start here: SaaS backends, admin panels, and business apps.",
        points: ["Auth, roles, and admin workflows", "Queues, mail, and payment hooks", "APIs that a Next.js or mobile app can use"],
        usedFor: ["SaaS", "Marketplaces", "CRMs"],
      },
      {
        name: "Node.js",
        description: "JavaScript on the server when the product needs realtime or a lighter API beside Laravel.",
        points: ["REST services and webhooks", "Realtime chat and notifications", "Tools that share types with the frontend"],
        usedFor: ["APIs", "Realtime", "Integrations"],
      },
      {
        name: "Python",
        description: "Scripts and backend jobs when data work or automation is cleaner in Python.",
        points: ["Data cleanup and exports", "Automation beside the main app", "Small services that do one job well"],
        usedFor: ["Automation", "Data", "Scripts"],
      },
      {
        name: "PHP",
        description: "The language under Laravel, and the one I use for custom business logic.",
        points: ["Laravel application code", "Legacy fixes and custom modules", "Secure form and payment handling"],
        usedFor: ["Laravel", "Business apps", "APIs"],
      },
      {
        name: "REST API",
        description: "The contract between the product, the dashboard, and anything else that needs the data.",
        points: ["Versioned endpoints and clear errors", "Auth for web and mobile clients", "Webhooks for payments and CRMs"],
        usedFor: ["Mobile", "Dashboards", "Partners"],
      },
      {
        name: "Socket.IO",
        description: "Live updates so users do not refresh to see a new message or status.",
        points: ["Chat and friend requests", "Live order or job status", "Notifications inside the product"],
        usedFor: ["Chat", "Marketplaces", "Dashboards"],
      },
    ],
  },
  {
    index: "02",
    title: "Frontend",
    note: "Interfaces that load fast and stay clear.",
    skills: [
      {
        name: "Next.js",
        description: "The frontend I use for product sites and SaaS screens that need to load fast and rank.",
        points: ["Server-rendered pages and metadata", "App routes, forms, and dashboards", "Images and fonts tuned for speed"],
        usedFor: ["SaaS", "Marketing sites", "SEO"],
      },
      {
        name: "React",
        description: "Component screens and the state those screens need, inside Next.js or on their own.",
        points: ["Reusable UI for dashboards", "Forms, filters, and tables", "Client state next to an API"],
        usedFor: ["Dashboards", "Portals", "SPAs"],
      },
      {
        name: "JavaScript",
        description: "The behavior layer: what happens after the page loads, and how it talks to the API.",
        points: ["ES6+ application code", "DOM updates and form logic", "Connecting UI events to backend calls"],
        usedFor: ["Interfaces", "APIs", "Widgets"],
      },
      {
        name: "Tailwind CSS",
        description: "How I style most new interfaces, without a large custom stylesheet to maintain.",
        points: ["Responsive layouts from mobile up", "Consistent spacing and type", "Fast iteration on product UI"],
        usedFor: ["Next.js", "Landing pages", "SaaS UI"],
      },
      {
        name: "Bootstrap",
        description: "When a project is already on Bootstrap, I extend it instead of rewriting the CSS.",
        points: ["Responsive grids and components", "Theme tweaks for existing sites", "Admin screens that need to ship fast"],
        usedFor: ["Laravel", "Admin", "Legacy sites"],
      },
      {
        name: "HTML",
        description: "The page structure search engines and screen readers actually read.",
        points: ["Semantic headings and landmarks", "Forms that stay usable", "Content that can rank"],
        usedFor: ["SEO", "Accessibility", "Content"],
      },
      {
        name: "CSS",
        description: "Layout detail when a utility class is not enough, especially on mobile.",
        points: ["Mobile-first layouts", "Custom components and motion", "Fixes for older templates"],
        usedFor: ["Responsive UI", "Polish", "Templates"],
      },
    ],
  },
  {
    index: "03",
    title: "Data",
    note: "Databases, auth, and payments.",
    skills: [
      {
        name: "MySQL",
        description: "The database behind most Laravel products: users, orders, and the reports on top of them.",
        points: ["Tables, indexes, and relations", "Queries that stay fast", "Migrations as the product changes"],
        usedFor: ["Laravel", "SaaS", "Reports"],
      },
      {
        name: "MongoDB",
        description: "Document storage when the shape of the data does not fit a strict table.",
        points: ["Flexible records for product data", "Used beside PHP or Node", "Queries scoped to what the screen needs"],
        usedFor: ["Catalogs", "Node.js", "Content"],
      },
      {
        name: "Database",
        description: "Designing the data first so the app does not slow down after launch.",
        points: ["Schema before features pile up", "Backups and safe changes", "Queries reviewed for speed"],
        usedFor: ["Architecture", "Scale", "Admin"],
      },
      {
        name: "Firebase",
        description: "Auth and live data for smaller features that should not wait on a full backend.",
        points: ["Sign-in and user sessions", "Realtime reads for light features", "A bridge until the main API is ready"],
        usedFor: ["Auth", "Realtime", "MVPs"],
      },
      {
        name: "Stripe",
        description: "Checkout and subscriptions so the product can charge without a custom payments stack.",
        points: ["One-time and recurring billing", "Webhooks for paid access", "Test mode before anything goes live"],
        usedFor: ["SaaS", "Marketplaces", "Memberships"],
      },
      {
        name: "PayPal",
        description: "A second way to pay, for stores and clients whose customers already use it.",
        points: ["Checkout beside Stripe or alone", "Order confirmation back into the app", "Clear success and failure states"],
        usedFor: ["Stores", "Invoices", "Services"],
      },
    ],
  },
  {
    index: "04",
    title: "Delivery",
    note: "Sites, design, and how the work ships.",
    skills: [
      {
        name: "WordPress",
        description: "Business sites clients can edit after launch, without calling a developer for every line of copy.",
        points: ["Custom themes and page layouts", "Plugins, forms, and SEO setup", "Speed work on existing installs"],
        usedFor: ["Company sites", "Blogs", "Lead pages"],
      },
      {
        name: "Shopify",
        description: "Stores with a clear catalog, a checkout people finish, and a theme that matches the brand.",
        points: ["Product and collection pages", "Theme sections and apps", "Checkout and shipping basics"],
        usedFor: ["eCommerce", "Catalogs", "Brands"],
      },
      {
        name: "GoHighLevel",
        description: "Funnels, sites, and CRM in one place for businesses that live on leads and follow-up.",
        points: ["Service pages and funnels", "Forms that land in the CRM", "Pipelines and appointment flows"],
        usedFor: ["Agencies", "Local business", "Funnels"],
      },
      {
        name: "Figma",
        description: "Screens agreed before build, so development is not a guess about spacing and states.",
        points: ["Page layouts and components", "Mobile and desktop frames", "Handoff the build can follow"],
        usedFor: ["SaaS UI", "Landing pages", "Redesigns"],
      },
      {
        name: "Canva",
        description: "Graphics for launches, social, and simple brand pieces that do not need a full design file.",
        points: ["Social and ad creatives", "Simple brand layouts", "Assets that match the site"],
        usedFor: ["Marketing", "Social", "Decks"],
      },
      {
        name: "Cursor",
        description: "The editor I write in. AI drafts get reviewed, then they ship like any other code.",
        points: ["Feature work across the repo", "Refactors with the project in context", "Review before anything is merged"],
        usedFor: ["Daily coding", "Refactors", "Reviews"],
      },
      {
        name: "GitHub",
        description: "Where the work is saved, reviewed, and rolled back if a release needs it.",
        points: ["Branches per feature", "History a teammate can follow", "Deployments tied to a commit"],
        usedFor: ["Collaboration", "Releases", "Backups"],
      },
      {
        name: "Performance",
        description: "Pages that feel instant: less weight, better Core Web Vitals, and a faster first load.",
        points: ["Image size and font loading", "Less JavaScript on the first view", "Lighthouse checks before launch"],
        usedFor: ["Core Web Vitals", "SEO", "Conversions"],
      },
    ],
  },
  {
    index: "05",
    title: "Automation",
    note: "AI workflows and WhatsApp follow-up.",
    skills: [
      {
        name: "AI automation",
        description: "Workflows that take a repeated job off the team: draft, sort, reply, or hand the result to the app.",
        points: ["ChatGPT and OpenRouter inside the product", "Prompts tied to real business data", "Human review before anything sends"],
        usedFor: ["Support", "Content", "Internal tools"],
      },
      {
        name: "WhatsApp automation",
        description: "WhatsApp as a working channel: leads, reminders, and replies that land in the same system as the site.",
        points: ["Inbound leads into the CRM", "Booking and payment reminders", "Replies that stay on the business number"],
        usedFor: ["Leads", "Bookings", "Follow-up"],
      },
    ],
  },
]

export default function Skills() {
  const [groupIndex, setGroupIndex] = useState(0)
  const [skillIndex, setSkillIndex] = useState(0)
  const group = groups[groupIndex]
  const skill = group.skills[skillIndex] ?? group.skills[0]

  const selectGroup = (nextGroup: number) => {
    setGroupIndex(nextGroup)
    setSkillIndex(0)
  }

  return (
    <section id="skills" className="scroll-mt-24 border-t border-white/10 bg-[#071018] px-4 py-20 text-[#f4f1ea] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7CFFB2]">Capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Skills & Tech Stack</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#8ea0b3]">
            Pick a group, then a tool. The detail on the right is the one I use most in that area.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c1826] lg:grid-cols-[280px_1fr]">
          <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
            {groups.map((item, index) => {
              const active = index === groupIndex
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => selectGroup(index)}
                  className={`flex w-full items-start gap-4 px-6 py-5 text-left transition ${
                    active ? "bg-[#7CFFB2] text-[#071018]" : "text-[#d5ddd4] hover:bg-white/[0.03]"
                  }`}
                >
                  <span className={`mt-1 text-xs font-medium tracking-[0.16em] ${active ? "text-[#071018]/70" : "text-[#7CFFB2]"}`}>
                    {item.index}
                  </span>
                  <span>
                    <span className="block text-lg font-semibold tracking-tight">{item.title}</span>
                    <span className={`mt-1 block text-sm ${active ? "text-[#071018]/75" : "text-[#8ea0b3]"}`}>{item.note}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="flex flex-col p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#7CFFB2]">{group.title}</p>
                <h3 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{skill.name}</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#b7c3cf]">{skill.description}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                  {skill.points.map((point) => (
                    <li key={point} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-[#d5ddd4]">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-[0.16em] text-[#8ea0b3]">Used for</span>
                  {skill.usedFor.map((item) => (
                    <span key={item} className="rounded-full border border-[#7CFFB2]/25 bg-[#7CFFB2]/10 px-3 py-1 text-xs text-[#7CFFB2]">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {group.skills.map((item, index) => {
                const active = index === skillIndex
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSkillIndex(index)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      active
                        ? "bg-white text-[#071018]"
                        : "border border-white/15 text-[#d5ddd4] hover:border-[#7CFFB2]/50 hover:text-[#7CFFB2]"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
