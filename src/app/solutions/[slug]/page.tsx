import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { solutionCategories } from '@/data/solutions';
import SolutionPageClient from './SolutionPageClient';

/* ── Pre-render all valid solution slugs at build time ── */
export function generateStaticParams() {
  return solutionCategories.map(c => ({ slug: c.key }));
}

/* ── Unique metadata per solution page (title, description, canonical, OG) ── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const category = solutionCategories.find(c => c.key === slug);

  if (!category) {
    return { title: 'Not Found' };
  }

  return {
    title: category.heroTitle,
    description: category.intro,
    alternates: { canonical: `/solutions/${category.key}/` },
    openGraph: {
      title: `${category.label} Solutions — Oktuv`,
      description: category.intro,
    },
  };
}

/* ── Server component: resolves data, delegates rendering to client ── */
export default async function SolutionPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const category = solutionCategories.find(c => c.key === slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: category.heroTitle,
            description: category.intro,
            provider: {
              "@type": "Organization",
              name: "Oktuv",
              url: "https://www.oktuvglobal.com"
            },
            serviceType: category.label,
            areaServed: "Worldwide",
            url: `https://www.oktuvglobal.com/solutions/${category.key}/`,
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${category.label} Services`,
              itemListElement: category.services.map((s) => ({
                "@type": "OfferCatalog",
                name: s.name,
                description: s.desc
              }))
            }
          })
        }}
      />
      <SolutionPageClient category={category} />
    </>
  );
}
