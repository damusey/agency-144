export interface IndustrySEO {
  slug: string;
  name: string;
  description: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: string[];
  caseStudyMetrics: { metric: string; description: string }[];
  pricingModel: { title: string; description: string };
  faqs: { question: string; answer: string }[];
}

export const targetIndustries: IndustrySEO[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare & HealthTech',
    description: 'Secure, HIPAA-compliant digital products and AI automation for modern healthcare providers.',
    heroHeadline: 'Healthcare App Development Company',
    heroSubheadline: 'We build highly secure, compliant, and scalable digital health platforms, patient portals, and diagnostic AI tools at startup-friendly rates.',
    painPoints: [
      'Strict Regulatory Compliance (HIPAA, GDPR, SOC2)',
      'Legacy EHR/EMR Integration Bottlenecks',
      'Patient Data Security and Encryption Standards'
    ],
    caseStudyMetrics: [
      { metric: '100%', description: 'HIPAA & SOC2 Compliance achieved across all deployed architectures.' },
      { metric: '40%', description: 'Reduction in patient onboarding time via automated AI workflows.' }
    ],
    pricingModel: {
      title: 'Highly Competitive, Negotiable Pricing',
      description: 'We believe in keeping development costs minimal for early-stage health startups. Our pricing is highly flexible and fully negotiable based on your specific use case. We charge competitive offshore Indian rates (starting at $25-$40/hr) even for global clients, ensuring you never overpay for enterprise-grade security.'
    },
    faqs: [
      { question: 'Do you handle HIPAA compliance for healthcare apps?', answer: 'Yes. We architect every healthcare application from the ground up with end-to-end encryption, secure AWS/Azure VPC deployments, and strict access controls to ensure complete HIPAA and GDPR compliance.' },
      { question: 'Can you integrate with existing EHR systems like Epic or Cerner?', answer: 'Absolutely. We have deep expertise in HL7 and FHIR standards, allowing us to build custom APIs that seamlessly sync patient data between your modern app and legacy EHR/EMR systems.' },
      { question: 'Are your rates affordable for early-stage HealthTech startups?', answer: 'Yes. Since we are a lean agency, we pass our operational savings directly to you. We offer highly negotiable, startup-friendly pricing models that scale with your funding stage.' }
    ]
  },
  {
    slug: 'fintech',
    name: 'Financial Technology (Fintech)',
    description: 'High-performance, secure software development for banking, crypto, and payment platforms.',
    heroHeadline: 'Fintech App Development Services',
    heroSubheadline: 'Architecting secure payment gateways, trading platforms, and AI-driven financial analytics tools with uncompromising data integrity.',
    painPoints: [
      'Sub-second Latency Requirements for Trading',
      'PCI-DSS Compliance and Payment Security',
      'Real-time Data Processing and Fraud Detection'
    ],
    caseStudyMetrics: [
      { metric: '< 50ms', description: 'Average API latency achieved for real-time financial dashboards.' },
      { metric: 'Zero', description: 'Security breaches across all deployed financial architectures.' }
    ],
    pricingModel: {
      title: 'Startup-Friendly Fintech Development',
      description: 'Building secure fintech infrastructure shouldn’t bankrupt your runway. We offer highly negotiable pricing tailored to your exact MVP requirements. Whether you are in the US or UK, we bill at highly competitive Indian offshore rates (starting at $3,000 for standard MVPs) so you can focus on user acquisition, not engineering overhead.'
    },
    faqs: [
      { question: 'How do you ensure payment security and PCI-DSS compliance?', answer: 'We never store sensitive card data on our servers. We implement robust tokenization via trusted gateways (Stripe, Plaid) and enforce strict OWASP security protocols across the entire codebase to guarantee PCI-DSS compliance.' },
      { question: 'Can you build custom AI models for financial fraud detection?', answer: 'Yes. We can deploy custom Machine Learning models and Retrieval-Augmented Generation (RAG) architectures that analyze transactional data in real-time to flag anomalies and prevent fraud.' },
      { question: 'How much does a Fintech MVP cost?', answer: 'Costs are completely negotiable based on complexity. However, because we operate with minimal overhead, we typically quote 50-70% less than traditional US/UK agencies while delivering identical or superior code quality.' }
    ]
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce & Retail',
    description: 'Lightning-fast Headless Commerce platforms designed for massive conversion rates.',
    heroHeadline: 'E-commerce Web Development Agency',
    heroSubheadline: 'Scale your D2C brand with ultra-fast Next.js Headless architectures integrated with Shopify Plus, Sanity, or Contentful.',
    painPoints: [
      'Slow Monolithic Storefronts Killing Conversions',
      'Inflexible CMS Restricting Marketing Campaigns',
      'High Customer Acquisition Costs (CAC) due to poor SEO'
    ],
    caseStudyMetrics: [
      { metric: '95+', description: 'Perfect Google Lighthouse Scores across mobile and desktop.' },
      { metric: '30%', description: 'Average increase in conversion rates post Headless migration.' }
    ],
    pricingModel: {
      title: 'Accessible Pricing for Growing Brands',
      description: 'We want to see your brand scale. Our pricing is flexible, negotiable, and tailored specifically to your exact use case. We charge low-to-medium competitive rates for all our global clients, ensuring your Headless migration yields an immediate and massive ROI.'
    },
    faqs: [
      { question: 'What is Headless Commerce and why do I need it?', answer: 'Headless commerce separates your frontend website (the head) from your backend e-commerce engine (like Shopify). This allows us to build a custom, ultra-fast frontend using Next.js, resulting in sub-second page loads, perfect SEO, and drastically higher conversion rates.' },
      { question: 'How long does a Shopify Headless migration take?', answer: 'For standard D2C brands, we can complete a full Headless migration in 6-8 weeks using our proprietary component libraries.' },
      { question: 'Is a Headless build expensive?', answer: 'Not with us. While traditional enterprise agencies charge $50k+ for a headless build, we offer highly negotiable, startup-friendly rates that make enterprise-grade infrastructure accessible to growing brands.' }
    ]
  },
  {
    slug: 'saas',
    name: 'SaaS & Enterprise Software',
    description: 'Custom B2B SaaS product development from ideation to enterprise scale.',
    heroHeadline: 'Custom SaaS Development Company',
    heroSubheadline: 'We architect and build scalable, multi-tenant SaaS products using modern frameworks like React, Next.js, and Node.js.',
    painPoints: [
      'Complex Multi-Tenant Architecture & Database Isolation',
      'High Cloud Infrastructure Costs',
      'Slow Feature Shipping Velocity'
    ],
    caseStudyMetrics: [
      { metric: '3x', description: 'Faster feature shipping velocity using our proprietary component libraries.' },
      { metric: '99.9%', description: 'Uptime achieved through robust microservices and Edge deployments.' }
    ],
    pricingModel: {
      title: 'Bootstrapper & VC-Friendly Pricing',
      description: 'We love working with SaaS founders because we are founders ourselves. Our pricing is 100% negotiable based on your exact feature set. We offer highly affordable global rates (starting around $25/hr) to ensure you have enough capital left over for marketing and sales.'
    },
    faqs: [
      { question: 'Do you build MVPs for early-stage SaaS startups?', answer: 'Yes! We specialize in Rapid MVP Development. We strip away the unnecessary bloat and focus only on your core value proposition to get you to market and generating revenue in weeks, not months.' },
      { question: 'How do you handle multi-tenant architecture?', answer: 'We architect robust Row-Level Security (RLS) policies in PostgreSQL (via Supabase or AWS RDS) to ensure complete data isolation and security between your different SaaS customers.' },
      { question: 'Can we negotiate the scope to fit our budget?', answer: 'Absolutely. Our pricing is entirely use-case dependent. We will work with you to cut non-essential features and prioritize the critical path so we can deliver a high-quality product within your exact budget constraints.' }
    ]
  }
];
