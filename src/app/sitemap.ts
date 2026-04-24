import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://competition2026.innovateconnectalliance.org',
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}