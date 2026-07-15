import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { topLocations, coreServices } from '@/data/seo/locations';
import DynamicSEOPage from '@/components/DynamicSEOPage';

// 1. Generate Static Params for all city + service combinations
export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  
  topLocations.forEach((location) => {
    coreServices.forEach((service) => {
      params.push({
        city: location.slug,
        service: service.slug
      });
    });
  });

  return params;
}

// 2. Generate SEO Metadata dynamically
export async function generateMetadata(
  { params }: { params: Promise<{ city: string; service: string }> }
): Promise<Metadata> {
  const { city, service } = await params;
  const locationData = topLocations.find(l => l.slug === city);
  const serviceData = coreServices.find(s => s.slug === service);

  if (!locationData || !serviceData) return { title: 'Not Found' };

  const title = `Top ${serviceData.name} Agency in ${locationData.city}`;
  const description = `Hire elite ${serviceData.name.toLowerCase()} experts in ${locationData.city}. We build scalable digital products for companies in ${locationData.localTechHubs[0]} and across ${locationData.region}.`;

  return {
    title,
    description,
    alternates: { canonical: `/locations/${locationData.slug}/${serviceData.slug}/` },
    openGraph: {
      title: `${title} | Oktuv`,
      description,
    }
  };
}

// 3. Render the Page
export default async function LocationServicePage({
  params
}: {
  params: Promise<{ city: string; service: string }>
}) {
  const { city, service } = await params;
  const locationData = topLocations.find(l => l.slug === city);
  const serviceData = coreServices.find(s => s.slug === service);

  if (!locationData || !serviceData) {
    notFound();
  }

  // Generate Breadcrumbs
  const breadcrumb = [
    { name: 'Locations', url: '/locations/' },
    { name: locationData.city, url: '/locations/' },
    { name: serviceData.name, url: `/locations/${locationData.slug}/${serviceData.slug}/` }
  ];

  // Generate JSON-LD Schema for LocalBusiness
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Oktuv - ${serviceData.name} in ${locationData.city}`,
    image: 'https://www.oktuvglobal.com/og-image.png',
    url: `https://www.oktuvglobal.com/locations/${locationData.slug}/${serviceData.slug}/`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationData.city,
      addressRegion: locationData.region,
      addressCountry: locationData.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: locationData.latitude,
      longitude: locationData.longitude
    },
    priceRange: '$$$$',
    description: serviceData.description
  };

  // Generate FAQ Schema for Google Rich Snippets
  const faqJsonLd = serviceData.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceData.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  // Generate Topical Cluster Links
  const relatedLinks = [
    ...coreServices.filter(s => s.slug !== service).map(s => ({
      name: `${s.name} in ${locationData.city}`,
      url: `/locations/${locationData.slug}/${s.slug}/`
    })),
    ...topLocations.filter(l => l.slug !== city).map(l => ({
      name: `${serviceData.name} in ${l.city}`,
      url: `/locations/${l.slug}/${serviceData.slug}/`
    }))
  ].slice(0, 5); // Limit to 5 related links

  const title = `Elite ${serviceData.name} Agency in ${locationData.city}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <DynamicSEOPage
        type="location"
        title={title}
        subtitle={`${locationData.city} Agency`}
        description={serviceData.description}
        benefits={[
          `Local Expertise in ${locationData.region}`,
          'Dedicated Timezone Alignment',
          'Enterprise Scalability',
          'Rapid MVP Deployment'
        ]}
        featuresList={[
          `Top ${locationData.city} Tech Talent`,
          'Agile Development Methodologies',
          'Cloud Infrastructure Setup',
          'Post-Launch Growth Strategies'
        ]}
        breadcrumb={breadcrumb}
        locationDetails={{ 
          city: locationData.city, 
          hubs: locationData.localTechHubs,
          marketLandscape: locationData.marketLandscape,
          localChallenges: locationData.localChallenges,
          faqs: serviceData.faqs
        }}
        relatedLinks={relatedLinks}
      />
    </>
  );
}
