export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohsin Imran',
    url: 'https://mohsinimran.online',
    image: 'https://mohsinimran.online/images/profile.jpeg',
    description:
      'Full Stack Web Application Developer and AI Product Expert in Pakistan specializing in Laravel, Next.js, React, custom SaaS development, AI integrations, WordPress, eCommerce and SEO-optimized web development.',
    jobTitle: ['Full Stack Web Application Developer', 'AI Product Expert', 'Freelance Full Stack Developer', 'Laravel Developer', 'Next.js Developer', 'AI Developer'],
    email: 'mmnemon549@gmail.com',
    sameAs: [
      'https://www.linkedin.com/in/mohsinimran-fullstack/',
      'https://github.com/Mohsin-Imran',
    ],
    knowsAbout: [
      'Full Stack Development',
      'PHP',
      'Laravel',
      'React',
      'Next.js',
      'MySQL',
      'REST APIs',
      'SaaS Development',
      'WordPress',
      'UI/UX Design',
      'SEO',
      'Web Performance',
      'AI Integration',
      'AI Product Development',
      'AI Web App Development',
      'ChatGPT API Integration',
      'OpenAI API',
      'OpenRouter Integration',
      'eCommerce Development',
      'Backend API Development',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Independent Developer',
    },
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mohsin Imran Portfolio',
    url: 'https://mohsinimran.online',
    description:
      'Full Stack Web Application Developer and AI Product Expert portfolio for Laravel, Next.js, React, custom SaaS development, AI integrations, WordPress, eCommerce and SEO-optimized web development.',
    sameAs: [
      'https://www.linkedin.com/in/mohsinimran-fullstack/',
      'https://github.com/Mohsin-Imran',
    ],
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateProjectSchema(project: {
  name: string
  description: string
  image: string
  url: string
  technologies: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: project.name,
    description: project.description,
    image: project.image,
    url: project.url,
    applicationCategory: 'WebApplication',
    author: {
      '@type': 'Person',
      name: 'Mohsin Imran',
    },
    programmingLanguage: project.technologies,
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  provider?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Person',
      name: service.provider || 'Mohsin Imran',
    },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mohsin Imran Portfolio',
    url: 'https://mohsinimran.online',
    logo: 'https://mohsinimran.online/images/profile.jpeg',
    description: 'Full Stack Web Application Developer and AI Product Expert in Pakistan for Laravel, Next.js, React, custom SaaS, AI integration, WordPress, eCommerce and technical SEO projects.',
    sameAs: [
      'https://www.linkedin.com/in/mohsinimran-fullstack/',
      'https://github.com/Mohsin-Imran',
    ],
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'mmnemon549@gmail.com',
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mohsin Imran',
    description: 'Full Stack Web Application Developer, Laravel Developer, Next.js Developer and AI Product Expert in Karachi, Pakistan.',
    url: 'https://mohsinimran.online',
    image: 'https://mohsinimran.online/images/profile.jpeg',
    email: 'mmnemon549@gmail.com',
    priceRange: 'Negotiable',
    serviceArea: {
      '@type': 'Place',
      name: 'Karachi, Pakistan',
    },
  }
}

