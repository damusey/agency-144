import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { techStacks } from '@/data/seo/tech-stacks';
import DynamicSEOPage from '@/components/DynamicSEOPage';

// 1. Generate Static Params for all tech stacks
export function generateStaticParams() {
  return techStacks.map((tech) => ({ tech: `${tech.slug}-developers` }));
}

// 2. Generate SEO Metadata dynamically
export async function generateMetadata(
  { params }: { params: Promise<{ tech: string }> }
): Promise<Metadata> {
  const { tech } = await params;
  const baseTech = tech.replace('-developers', '');
  const stack = techStacks.find(t => t.slug === baseTech);

  if (!stack) return { title: 'Not Found' };

  return {
    title: `${stack.name} Development Agency`,
    description: stack.description,
    alternates: { canonical: `/hire/${stack.slug}-developers/` },
    openGraph: {
      title: `${stack.heroHeadline} | Oktuv`,
      description: stack.description,
    }
  };
}

// 3. Render the Page
export default async function HireTechPage({
  params
}: {
  params: Promise<{ tech: string }>
}) {
  const { tech } = await params;
  const baseTech = tech.replace('-developers', '');
  const stack = techStacks.find(t => t.slug === baseTech);

  if (!stack) {
    notFound();
  }

  // Generate Breadcrumbs
  const breadcrumb = [
    { name: 'Home', url: '/' },
    { name: 'Hire Experts', url: '/hire/' },
    { name: `${stack.name} Developers`, url: `/hire/${stack.slug}-developers/` }
  ];

  // Generate JSON-LD Schema for Service
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${stack.name} Development Services`,
    provider: {
      '@type': 'Organization',
      name: 'Oktuv',
      url: 'https://www.oktuvglobal.com'
    },
    description: stack.description,
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: stack.category,
      itemListElement: stack.useCases.map((useCase, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: useCase
        },
        position: index + 1
      }))
    }
  };

  // Generate FAQ Schema for Google Rich Snippets
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: stack.faqs?.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    })) || []
  };

  // Generate Topical Cluster Links
  const relatedLinks = techStacks.filter(t => t.slug !== baseTech).map(t => ({
    name: `Hire ${t.name} Developers`,
    url: `/hire/${t.slug}-developers/`
  })).slice(0, 5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {stack.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <DynamicSEOPage
        type="tech"
        title={stack.heroHeadline}
        subtitle={stack.name}
        description={stack.heroSubheadline}
        benefits={stack.benefits}
        featuresList={stack.useCases}
        breadcrumb={breadcrumb}
        techDetails={{
          slug: stack.slug,
          longDescription: stack.longDescription,
          faqs: stack.faqs,
          developmentProcess: stack.developmentProcess
        }}
        relatedLinks={relatedLinks}
      />
    </>
  );
}
