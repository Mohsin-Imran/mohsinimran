export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohsin Imran',
    url: 'https://www.mohsinimran.online',
    image: 'https://www.mohsinimran.online/images/profile.jpeg',
    description:
      'Karachi-based Full Stack Developer specializing in Laravel, Next.js, React, Figma, SEO, and conversion-focused product engineering.',
    jobTitle: ['Full Stack Developer', 'Web Developer', 'SEO Specialist'],
    email: 'mmnemon549@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    },
    sameAs: [
      'https://linkedin.com/in/mohsin-imran',
      'https://github.com/mohsinimran',
      'https://twitter.com/mohsinimran',
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
    url: 'https://www.mohsinimran.online',
    description:
      'Karachi-based Full Stack Developer portfolio showcasing Laravel, Next.js, React, and Figma product work with SEO-first performance.',
    sameAs: [
      'https://linkedin.com/in/mohsin-imran',
      'https://github.com/mohsinimran',
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
    url: 'https://www.mohsinimran.online',
    logo: 'https://www.mohsinimran.online/images/profile.jpeg',
    description: 'Full Stack Developer & Web Designer - Specializing in SaaS, AI-Driven Development, and Modern Web Solutions',
    sameAs: [
      'https://linkedin.com/in/mohsin-imran',
      'https://github.com/mohsinimran',
      'https://twitter.com/mohsinimran',
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
    description: 'Full Stack Developer & Web Designer',
    url: 'https://www.mohsinimran.online',
    image: 'https://www.mohsinimran.online/images/profile.jpeg',
    email: 'mmnemon549@gmail.com',
    priceRange: 'Negotiable',
    serviceArea: {
      '@type': 'Place',
      name: 'Pakistan',
    },
  }
}

