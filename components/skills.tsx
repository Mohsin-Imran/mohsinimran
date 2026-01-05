"use client"

import { useEffect, useRef, useState } from "react"
import {
  FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs, FaGithub, FaDatabase,
  FaLaravel, FaWordpress, FaPaypal, FaStripe, FaFire, FaLeaf, FaBolt, FaCode
} from "react-icons/fa6"

import {
  SiFigma,
  SiNextdotjs,
  SiSocketdotio,
  SiTailwindcss
} from "react-icons/si"

const skillsData = [
  { name: "PHP", icon: <FaPhp className="text-yellow-400 text-5xl" />, description: "Proficient in PHP for dynamic web applications, including Laravel for backend development." },
  { name: "Laravel", icon: <FaLaravel className="text-yellow-400 text-5xl" />, description: "Expertise in building scalable web apps using Laravel's powerful features." },
  { name: "React", icon: <FaReact className="text-yellow-400 text-5xl" />, description: "Skilled in creating dynamic SPAs with React and state management." },
  { name: "Next.js", icon: <SiNextdotjs className="text-yellow-400 text-5xl" />, description: "Experienced in building performant, server-side rendered applications with Next.js." },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-yellow-400 text-5xl" />, description: "Expert in utility-first CSS with Tailwind for rapid, responsive, and maintainable styling." },
  { name: "Socket.IO", icon: <SiSocketdotio className="text-yellow-400 text-5xl" />, description: "Proficient in real-time, bidirectional communication using Socket.IO for features like live chat and notifications." },
  { name: "Database", icon: <FaDatabase className="text-yellow-400 text-5xl" />, description: "Proficient in database design, optimization, and management." },
  { name: "Stripe", icon: <FaStripe className="text-yellow-400 text-5xl" />, description: "Experienced in integrating secure payment gateways." },
  { name: "PayPal", icon: <FaPaypal className="text-yellow-400 text-5xl" />, description: "Experienced in integrating secure payment gateways." },
  { name: "MySQL", icon: <FaDatabase className="text-yellow-400 text-5xl" />, description: "Advanced in MySQL for efficient database management and SQL queries." },
  { name: "MongoDB", icon: <FaLeaf className="text-yellow-400 text-5xl" />, description: "Proficient in NoSQL databases and integrating MongoDB with PHP and Laravel." },
  { name: "WordPress", icon: <FaWordpress className="text-yellow-400 text-5xl" />, description: "Experience in customizing WordPress themes and plugins." },
  { name: "Firebase", icon: <FaFire className="text-yellow-400 text-5xl" />, description: "Experienced with Firebase for real-time databases and authentication." },
  { name: "HTML", icon: <FaHtml5 className="text-yellow-400 text-5xl" />, description: "Expert in HTML5 for structuring modern, semantic web pages." },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" />, description: "Strong in client-side scripting, DOM manipulation, and ES6+ features." },
  { name: "Bootstrap", icon: <FaBootstrap className="text-yellow-400 text-5xl" />, description: "Proficient in Bootstrap for rapid, responsive UI development." },
  { name: "CSS", icon: <FaCss3Alt className="text-yellow-400 text-5xl" />, description: "Advanced in styling and creating responsive, mobile-first designs." },
  { name: "GitHub", icon: <FaGithub className="text-yellow-400 text-5xl" />, description: "Experienced in version control and collaboration using Git and GitHub." },
  { name: "Figma", icon: <SiFigma className="text-yellow-400 text-5xl" />, description: "Skilled in UI/UX design, prototyping, and collaboration using Figma." },
  { name: "Performance", icon: <FaBolt className="text-yellow-400 text-5xl" />, description: "Focused on optimizing web performance and load times." },
]

const skillDescriptions = [
  { title: "PHP", description: "Proficient in PHP for dynamic web applications, including Laravel for backend development." },
  { title: "Laravel", description: "Expertise in building scalable web apps using Laravel's powerful features." },
  { title: "React", description: "Skilled in creating dynamic SPAs with React and state management." },
  { title: "CSS & Bootstrap", description: "Advanced in styling and creating responsive, mobile-first designs." },
  { title: "GitHub", description: "Experienced in version control and collaboration using Git and GitHub." },
  { title: "MongoDB", description: "Proficient in NoSQL databases and integrating MongoDB with PHP and Laravel." },
  { title: "PayPal & Stripe", description: "Experienced in integrating secure payment gateways." },
  { title: "REST API", description: "Expertise in building and consuming RESTful APIs." },
  { title: "JavaScript", description: "Strong in client-side scripting, DOM manipulation, and ES6+ features." },
  { title: "WordPress", description: "Experience in customizing WordPress themes and plugins." },
  { title: "MySQL", description: "Advanced in MySQL for efficient database management and SQL queries." },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => sectionRef.current && observer.unobserve(sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen bg-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
        >
          My Skills
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />

        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/40 hover:border-yellow-400 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] cursor-pointer ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                style={{ transitionDelay: isVisible ? `${index * 50}ms` : "0ms" }}
              >
                <div className="flex items-center justify-center">{skill.icon}</div>
                <p className="text-center text-white mt-3 text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>

          {/* Right - Descriptions */}
          <div className="space-y-3">
            {skillDescriptions.map(skill => (
              <div
                key={skill.title}
                className="group bg-transparent border border-yellow-500/40 rounded-lg p-3 hover:border-yellow-400 hover:bg-yellow-500/5 transition-colors duration-200"
              >
                <p className="text-white text-sm leading-relaxed">
                  <span className="text-yellow-400 font-semibold">
                    {skill.title}:
                  </span>{" "}
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
