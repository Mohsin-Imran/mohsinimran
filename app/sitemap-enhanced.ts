import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mohsinimran.online'
  
  // Homepage - highest priority
  const homePage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }

  // Main sections - high priority
  const sections = [
    { path: '#about', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '#services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '#skills', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '#experience', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '#projects', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '#contact', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  const sectionUrls = sections.map(section => ({
    url: `${baseUrl}${section.path}`,
    lastModified: new Date(),
    changeFrequency: section.changeFrequency,
    priority: section.priority,
  }))

  // Project details - medium priority
  const projects = [
    { id: 'vurks', priority: 0.85 },
    { id: 'zawaj', priority: 0.85 },
    { id: 'marqu-team', priority: 0.8 },
    { id: 'rice-export', priority: 0.8 },
    { id: 'home-rescue', priority: 0.8 },
  ]

  const projectUrls = projects.map(project => ({
    url: `${baseUrl}#projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: project.priority,
  }))

  // Service pages - medium priority
  const services = [
    'full-stack-development',
    'saas-development',
    'web-design',
    'laravel-development',
    'react-development',
    'wordpress-development',
    'ai-integration',
    'mobile-development',
  ]

  const serviceUrls = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Blog/Resources (when added)
  const resourceUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Combine all URLs
  return [
    homePage,
    ...sectionUrls,
    ...projectUrls,
    ...serviceUrls,
    ...resourceUrls,
  ]
}
