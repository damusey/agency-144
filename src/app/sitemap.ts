import type { MetadataRoute } from 'next';
import { solutionCategories } from '@/data/solutions';
import { getSortedPostsData } from '@/lib/markdown';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.oktuvglobal.com';

  const staticDate = new Date('2024-06-01');

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: staticDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/work/`, lastModified: staticDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog/`, lastModified: staticDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/faq/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/book/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/audit/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/platform/flowai/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/platform/flowbot/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/terms/`, lastModified: staticDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy/`, lastModified: staticDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/contact/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Dynamically pull the correct slugs from the data file
  const solutionSlugs = solutionCategories.map(c => c.key);

  const solutionPages: MetadataRoute.Sitemap = solutionSlugs.map(slug => ({
    url: `${baseUrl}/solutions/${slug}/`,
    lastModified: staticDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const posts = getSortedPostsData();

  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: post.date ? new Date(post.date) : staticDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...solutionPages, ...blogPages];
}
