import type { MetadataRoute } from 'next';
import { solutionCategories } from '@/data/solutions';
import { getSortedPostsData } from '@/lib/markdown';
import { techStacks } from '@/data/seo/tech-stacks';
import { topLocations, coreServices } from '@/data/seo/locations';
import { targetIndustries } from '@/data/seo/industries';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.oktuvglobal.com';

  // Use the current build date to ensure AI crawlers see fresh content
  const staticDate = new Date();

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
    { url: `${baseUrl}/solutions/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/hire/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/locations/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries/`, lastModified: staticDate, changeFrequency: 'monthly', priority: 0.9 },
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

  const techPages: MetadataRoute.Sitemap = techStacks.map(tech => ({
    url: `${baseUrl}/hire/${tech.slug}-developers/`,
    lastModified: staticDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const locationPages: MetadataRoute.Sitemap = [];
  topLocations.forEach(loc => {
    coreServices.forEach(service => {
      locationPages.push({
        url: `${baseUrl}/locations/${loc.slug}/${service.slug}/`,
        lastModified: staticDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  });

  const industryPages: MetadataRoute.Sitemap = [];
  targetIndustries.forEach(ind => {
    coreServices.forEach(service => {
      industryPages.push({
        url: `${baseUrl}/industries/${ind.slug}/${service.slug}/`,
        lastModified: staticDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    });
  });

  return [...staticPages, ...solutionPages, ...blogPages, ...techPages, ...locationPages, ...industryPages];
}
