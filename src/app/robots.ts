import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly allow AI crawlers for AEO (Generative Engine Optimization)
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'GoogleOther', 'anthropic-ai'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.oktuvglobal.com/sitemap.xml',
  };
}
