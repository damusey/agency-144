import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { targetIndustries } from '@/data/seo/industries';
import { coreServices } from '@/data/seo/locations';
import DynamicSEOPage from '@/components/DynamicSEOPage';

// 1. Generate Static Params for all industry + service combinations
export function generateStaticParams() {
  const params: { industry: string; service: string }[] = [];
  
  targetIndustries.forEach((industry) => {
    coreServices.forEach((service) => {
      params.push({
        industry: industry.slug,
        service: service.slug
      });
    });
  });

  return params;
}

// 2. Generate SEO Metadata dynamically
export async function generateMetadata(
  { params }: { params: Promise<{ industry: string; service: string }> }
): Promise<Metadata> {
  const { industry, service } = await params;
  const industryData = targetIndustries.find(i => i.slug === industry);
  const serviceData = coreServices.find(s => s.slug === service);

  if (!industryData || !serviceData) return { title: 'Not Found' };

  const title = `Top ${serviceData.name} Agency for ${industryData.name}`;
  const description = `Hire elite ${serviceData.name.toLowerCase()} experts for the ${industryData.name} industry. We build scalable, compliant digital products.`;

  return {
    title,
    description,
    alternates: { canonical: `/industries/${industryData.slug}/${serviceData.slug}/` },
    openGraph: {
      title: `${title} | Oktuv`,
      description,
    }
  };
}

// 3. Render the Page
export default async function IndustryServicePage({
  params
}: {
  params: Promise<{ industry: string; service: string }>
}) {
  const { industry, service } = await params;
  const industryData = targetIndustries.find(i => i.slug === industry);
  const serviceData = coreServices.find(s => s.slug === service);

  if (!industryData || !serviceData) {
    notFound();
  }

  // Generate Breadcrumbs
  const breadcrumb = [
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries/' },
    { name: industryData.name, url: '/industries/' },
    { name: serviceData.name, url: `/industries/${industryData.slug}/${serviceData.slug}/` }
  ];

  // Generate JSON-LD Schema for Service
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceData.name} for ${industryData.name}`,
    provider: {
      '@type': 'Organization',
      name: 'Oktuv',
      url: 'https://www.oktuvglobal.com'
    },
    description: serviceData.description,
    areaServed: 'Worldwide'
  };

  // Generate FAQ Schema for Google Rich Snippets
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industryData.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const title = `${serviceData.name} for ${industryData.name}`;

  // Generate Topical Cluster Links
  const relatedLinks = [
    ...coreServices.filter(s => s.slug !== service).map(s => ({
      name: `${s.name} for ${industryData.name}`,
      url: `/industries/${industryData.slug}/${s.slug}/`
    })),
    ...targetIndustries.filter(i => i.slug !== industry).map(i => ({
      name: `${serviceData.name} for ${i.name}`,
      url: `/industries/${i.slug}/${serviceData.slug}/`
    }))
  ].slice(0, 5); // Limit to 5 related links

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <DynamicSEOPage
        type="industry"
        title={title}
        subtitle={`${industryData.name} Specialists`}
        description={industryData.heroSubheadline}
        benefits={[]}
        featuresList={[
          `${industryData.name} Specific Compliance`,
          'Scalable Enterprise Architecture',
          'Data Security & Privacy Protocols',
          'Rapid Agile Delivery'
        ]}
        breadcrumb={breadcrumb}
        industryDetails={{
          painPoints: industryData.painPoints,
          caseStudyMetrics: industryData.caseStudyMetrics,
          pricingModel: industryData.pricingModel,
          faqs: industryData.faqs
        }}
        relatedLinks={relatedLinks}
      />
    </>
  );
}
