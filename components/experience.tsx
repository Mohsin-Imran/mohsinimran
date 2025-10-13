"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, MapPin, Calendar, Building2, ChevronDown } from "lucide-react"

interface ExperienceItem {
  id: number
  position: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    position: "Backend Architect",
    company: "Vurks",
    location: "Dubai, United Arab Emirates.On-site",
    startDate: "June 2025",
    endDate: "Present",
    description: [
      "As Backend Architect at Vurks, I design and implement the core systems that power our platform, including APIs, databases, and server-side logic. My focus is on building scalable, secure, and high-performing backend solutions that ensure seamless connectivity between businesses and professionals. By optimizing data flows and system architecture, I help create a reliable foundation for Vurks’ growing ecosystem.",
    ],
    technologies: ["PHP", "Laravel","MySQL", "JavaScript", "REST API"],
  },
  {
    id: 2,
    position: "Software Engineer",
    company: "Chatknot",
    location: "Karachi, Pakistan",
    startDate: "June 2024",
    endDate: "June 2025",
    description: [
      "I design and maintain the core infrastructure that powers our live chat platform. I develop scalable APIs, optimize database performance, and ensure seamless real-time communication between users. My focus is on building secure, efficient server-side logic to enhance system reliability and performance. By continuously improving our backend architecture, I help make ChatKnot a fast, reliable, and innovative live chat solution for websites worldwide.",
    ],
    technologies: ["PHP", "Laravel", "React", "MySQL", "JavaScript", "REST API"],
  },
  {
    id: 3,
    position: "Full Stack Developer",
    company: "iSky information Technology",
    location: "Remote Dubai",
    startDate: "Oct 2024",
    endDate: "Dec 2024",
    description: [
      "As a Full Stack PHP Laravel Developer, I specialize in designing, developing, and maintaining robust web applications using Laravel, PHP, and MySQL. With expertise in both frontend and backend development, I have successfully integrated secure payment gateways such as PayPal and Stripe to enhance user experience. I am proficient in building and optimizing RESTful APIs to facilitate seamless third-party integrations, ensuring high performance, security, and scalability of web applications. My focus is on delivering efficient, scalable, and user-friendly solutions that meet business objectives",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "REST API"],
  },
  {
    id: 4,
    position: "Full Stack Developer",
    company: "Mindflare.Tech",
    location: "A-708, Software, Saima Trade Tower, House LI Chundrigar Rd, Saddar Karachi, Karachi City, Sindh 75000",
    startDate: "Sep 2023",
    endDate: "Sep 2024",
    description: [
      "As a Full Stack PHP Laravel Developer, I developed and maintained web applications using Laravel, PHP, and MySQL. I worked on frontend and backend development, integrating secure payment gateways like PayPal and Stripe. Additionally, I built and optimized REST APIs for seamless third-party integrations, ensuring performance, security, and scalability of web applications",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    id: 5,
    position: "PHP Laravel Developer",
    company: "Brainwave Technologies",
    location: "DHA Phase Plot No. Office #1, 9-C Zamzama Blvd, Zamzama",
    startDate: "Mar 2023",
    endDate: "Aug 2023",
    description: [
      "Built dynamic web applications using Laravel framework",
      "Designed and optimized database schemas for improved performance",
      "Implemented RESTful APIs for mobile and web applications",
      "Worked on payment integration and third-party API integrations",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    id: 6,
    position: "PHP Laravel Developer",
    company: "CentoSquare",
    location: "Pakistan Karachi Shahrah-e-Faisal",
    startDate: "Nov 2022",
    endDate: "Feb 2023",
    description: [
      "Developed backend systems using Laravel and PHP",
      "Created responsive user interfaces with HTML, CSS, and JavaScript",
      "Performed code reviews and maintained code quality standards",
      "Collaborated with designers to implement pixel-perfect designs",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen bg-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
              }`}
          >
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Experience</span>
          </h2>
          <div
            className={`h-1 w-32 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-500/50 via-yellow-500/50 to-purple-500/50 hidden lg:block" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                style={{ transitionDelay: `${index * 200}ms` }}
                className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${index % 2 === 0 ? "-translate-x-20" : "translate-x-20"}`}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 hidden lg:block z-20">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-ping opacity-75" />
                  </div>
                </div>

                {/* Card */}
                <div className={`lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? "lg:mr-auto lg:pr-16" : "lg:ml-auto lg:pl-16"}`}>
                  <div
                    className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2 cursor-pointer"
                    onClick={() => toggleCard(exp.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-yellow-500/5 rounded-2xl transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{exp.position}</h3>
                          <div className="flex items-center gap-2 text-yellow-400 mb-2">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-500/20 rounded-lg px-4 py-2 border border-yellow-500/30">
                            <Briefcase className="w-6 h-6 text-yellow-400" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Calendar className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">{exp.startDate} - {exp.endDate}</span>
                          {exp.endDate === "Present" && (
                            <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-start gap-2 text-gray-300">
                          <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <div className={`overflow-hidden transition-all duration-500 ${expandedCard === exp.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="mb-4 pt-4 border-t border-yellow-500/20">
                          <ul className="space-y-2">
                            {exp.description.map((desc, i) => (
                              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-yellow-400 mt-1.5">•</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-yellow-400 mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-yellow-500/10 text-yellow-300 text-xs rounded-full border border-yellow-500/30 hover:bg-yellow-500/20 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-4 pt-4 border-t border-yellow-500/20">
                        <ChevronDown className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${expandedCard === exp.id ? "rotate-180" : ""}`} />
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100" />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
