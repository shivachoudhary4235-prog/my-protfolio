import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vibeforge.cloud";

  const staticPages = [
    '',
    '/about-us',
    '/contact',
    '/privacy',
    '/terms'
  ];

  const sitemapEntries = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
