"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const experiences = [
  {
    id: 1,
    position: "Backend Architect",
    company: "LusionTech",
    location: "On-site / Remote",
    startDate: "June 2025",
    endDate: "Present",
    summary: "Core systems for a freelance marketplace: APIs, data, and the backend professionals and businesses run on.",
    points: [
      "Design the APIs, databases, and server logic behind the platform.",
      "Keep payments, chat, and profiles on a structure that can grow.",
      "Focus on security and speed as more users connect.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "REST API"],
  },
  {
    id: 2,
    position: "Software Engineer",
    company: "LusionTech",
    location: "On-site / Remote",
    startDate: "June 2024",
    endDate: "June 2025",
    summary: "Backend for a live chat product used on websites, built to stay fast while people talk in real time.",
    points: [
      "Built and maintained the APIs that power live chat.",
      "Tuned the database so messages stay quick under load.",
      "Kept server logic secure and reliable for sites worldwide.",
    ],
    technologies: ["PHP", "Laravel", "React", "MySQL", "JavaScript", "REST API"],
  },
  {
    id: 3,
    position: "Full Stack Developer",
    company: "iSky information Technology",
    location: "Remote",
    startDate: "Oct 2024",
    endDate: "Dec 2024",
    summary: "Laravel applications with payments and APIs, from the database through the interface.",
    points: [
      "Shipped web apps in Laravel, PHP, and MySQL.",
      "Integrated PayPal and Stripe for secure checkout.",
      "Built REST APIs for third-party tools and faster screens.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "REST API"],
  },
  {
    id: 4,
    position: "Full Stack Developer",
    company: "Mindflare.Tech",
    location: "On-site",
    startDate: "Sep 2023",
    endDate: "Sep 2024",
    summary: "A year of product work across Laravel backends, interfaces, and payment flows.",
    points: [
      "Developed and maintained Laravel applications.",
      "Worked both sides: screens and the API behind them.",
      "Added PayPal, Stripe, and REST integrations.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    id: 5,
    position: "PHP Laravel Developer",
    company: "Brainwave Technologies",
    location: "On-site",
    startDate: "Mar 2023",
    endDate: "Aug 2023",
    summary: "Laravel apps, database design, and APIs for web and mobile.",
    points: [
      "Built dynamic applications on Laravel.",
      "Designed schemas so queries stayed fast.",
      "Shipped REST APIs and payment integrations.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    id: 6,
    position: "PHP Laravel Developer",
    company: "CentoSquare",
    location: "On-site",
    startDate: "Nov 2022",
    endDate: "Feb 2023",
    summary: "Backend systems and the interfaces designers handed over.",
    points: [
      "Developed Laravel and PHP backends.",
      "Built responsive UI in HTML, CSS, and JavaScript.",
      "Reviewed code and matched the design closely.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
  },
]

function ExperienceCard({
  job,
  index,
}: {
  job: (typeof experiences)[number]
  index: number
}) {
  const cardRef = useRef<HTMLLIElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const current = job.endDate === "Present"

  return (
    <li
      ref={cardRef}
      className={`sticky top-24 ${index === experiences.length - 1 ? "" : "mb-[22vh]"}`}
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale }}
        className={`rounded-[1.4rem] border bg-[var(--site-card)] p-5 shadow-[0_16px_40px_rgba(7,16,24,0.06)] transition-colors duration-300 hover:border-[var(--site-label-line)] sm:p-6 ${
          current ? "border-[var(--site-label-line)]" : "border-[var(--site-line)]"
        }`}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="text-sm text-[var(--site-soft)]">
            {job.startDate} — {job.endDate}
          </p>
          {current && (
            <span className="rounded-full bg-[#7CFFB2] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--site-on-mint)]">
              Now
            </span>
          )}
          <span className="text-sm text-[var(--site-soft)]">{job.location}</span>
        </div>
        <p className="mt-3 text-2xl font-semibold tracking-tight">{job.position}</p>
        <p className="mt-1 text-base text-[var(--site-label)]">{job.company}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">{job.summary}</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-3">
          {job.points.map((point) => (
            <li key={point} className="rounded-xl border border-[var(--site-line)] bg-[var(--site-bg)] px-3 py-3 text-sm leading-relaxed text-[var(--site-nav)]">
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {job.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-[var(--site-line)] px-2.5 py-1 text-xs text-[var(--site-chip)]">
              {tech}
            </span>
          ))}
        </div>
      </motion.article>
    </li>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-stack relative scroll-mt-24 border-t border-[var(--site-line)] bg-[var(--site-bg)] px-4 py-20 text-[var(--site-ink)] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--site-label)]">Career</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Experience</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--site-muted)]">
            From Laravel products to live chat and marketplace backends. Six roles, newest first.
          </p>
        </div>

        <ol className="space-y-6 pb-8">
          {experiences.map((job, index) => (
            <ExperienceCard key={job.id} job={job} index={index} />
          ))}
        </ol>
      </div>
    </section>
  )
}
