export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  impact: string;
  metric: {
    value: string;
    label: string;
  };
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'clean4wheels',
    client: 'Clean4Wheels',
    industry: 'Consumer Logistics & PropTech',
    service: 'WebApp Architecture & Hyper-local SEO',
    challenge: 'High friction in the booking funnel was causing a 70% cart abandonment rate, severely limiting their ability to scale regional doorstep operations.',
    solution: 'Re-engineered the complete user booking flow using a high-performance Next.js stack, mapped dynamic geolocation routing, and launched a hyper-local SEO dominance campaign to monopolize search intent.',
    impact: 'Reduced booking friction instantly, skyrocketed customer retention to 65%, and scaled doorstep route density by 3x within a single quarter.',
    metric: {
      value: '400%',
      label: 'Increase in LTV'
    }
  },
  {
    id: 'narrativlly',
    client: 'Narrativlly',
    industry: 'B2B Marketing & Agency',
    service: 'Growth Infrastructure & Brand Positioning',
    challenge: 'Competing in a hyper-saturated agency market where generic positioning flagged them as just another commodity vendor rather than an elite partner.',
    solution: 'Ripped out legacy messaging and designed a high-trust, premium conversion funnel. We deployed highly-targeted, scalable outbound automation architecture.',
    impact: 'Completely shifted positioning from vendor to partner. Automated their entire lead-generation pipeline, producing predictable enterprise discovery calls weekly.',
    metric: {
      value: '+$1.2M',
      label: 'Pipeline Generated'
    },
    link: 'https://www.narrativlyy.com/'
  },
  {
    id: 'auraynia',
    client: 'Auraynia',
    industry: 'Premium D2C E-commerce',
    service: 'Performance Marketing & CRO',
    challenge: 'High bounce rates on storefronts and bleeding ad-spend on Meta with a declining Return on Ad Spend (ROAS).',
    solution: 'Executed a complete UI/UX teardown of the storefront to inject premium perception. Deployed AI-driven dynamic retargeting and engineered a high-converting lifecycle email matrix.',
    impact: 'Halted ad waste instantly. Scaled daily order volume by 250% while systematically slashing Customer Acquisition Cost (CAC) by over half.',
    metric: {
      value: '5.2x',
      label: 'Sustained ROAS'
    },
    link: 'https://auraynia.com/'
  },
  {
    id: 'hawaiadda',
    client: 'Hawaiadda',
    industry: 'DeepTech & Aviation Hardware',
    service: 'Enterprise B2B Go-To-Market',
    challenge: 'Possessed world-class AI/ML drone infrastructure but struggled to translate dense, highly-technical value propositions to investors and defense contractors.',
    solution: 'Abstracted their complex machine learning infrastructure into a lethal, compelling brand narrative. Built their enterprise sales foundation and digital footprint from the ground up.',
    impact: 'Secured critical early-stage defense contracts and positioned the brand as an undisputed, highly-credible category leader in domestic defense tech.',
    metric: {
      value: '10x',
      label: 'Valuation Multiplier'
    },
    link: 'https://hawaiadda.in/'
  },
  {
    id: 'knowyourcollege',
    client: 'KnowYourCollege',
    industry: 'EdTech & AI SaaS',
    service: 'Product Build & Scalable Architecture',
    challenge: 'Rapid user acquisition was crushing legacy servers; slow AI query times were bottlenecking growth and destroying user retention.',
    solution: 'Rearchitected the entire technological stack. We built a highly responsive, vector-database powered AI architecture deployed on globally distributed edge networks.',
    impact: 'Reduced AI response latency to sub-second levels and scaled the platform to handle 50,000+ concurrent traffic spikes completely effortlessly.',
    metric: {
      value: '< 200ms',
      label: 'AI Query Latency'
    },
    link: 'https://www.knowyourcolleges.com/'
  },
  {
    id: 'sariverse',
    client: 'SariVerse',
    industry: 'High-Fashion D2C',
    service: 'Omni-channel Scaling System',
    challenge: 'Relying entirely on unpredictable organic traffic with no scalable, mathematical revenue engine to push exclusive collections.',
    solution: 'Deployed high-ticket aesthetic performance marketing across visual platforms. Integrated a robust headless commerce backend to handle insane traffic spikes during festival product drops.',
    impact: 'Turned a sporadic revenue model into a predictable scaling machine, managing to completely sell out three exclusive handcrafted drops in under 12 hours.',
    metric: {
      value: '12 hrs',
      label: 'To Sold Out Drops'
    },
    link: 'https://www.sariverse.com/'
  },
  {
    id: 'maaliondoor',
    client: 'MaaliOnDoor',
    industry: 'O2O Service Marketplace',
    service: 'Marketplace Mechanics & Local SEO',
    challenge: 'Disconnected vendor management and terrible mobile UX causing huge user drop-offs before booking completion.',
    solution: 'Built an optimized, frictionless mobile journey. Automated backend vendor slot-bookings and deployed hyper-targeted localized Google Ads to monopolize local search intent.',
    impact: 'Captured massive local search volume within 90 days and fully automated the dispatch logistics of over 500+ local professionals monthly.',
    metric: {
      value: '300%',
      label: 'Booking Velocity'
    },
    link: 'https://maaliondoor.in/'
  },
  {
    id: 'sdi',
    client: 'SDI Raebareli',
    industry: 'Vocational Training / Public Sector',
    service: 'Web Development, Marketing & Outbound Automation',
    challenge: 'Struggling to efficiently mobilize grassroots youth and standardize the admission pipeline for rural, localized vocational programs without massive drop-offs.',
    solution: 'Built a high-performance central website architecture. Engineered targeted marketing campaigns and deployed aggressive outbound reach programs via WhatsApp and RCS channels to maximize local enrollment awareness.',
    impact: 'Standardized the nationwide admission pipeline, processing over fifty thousand youth applications and securing the skilled talent placement pipeline for external enterprises, supported via PSU CSR initiatives.',
    metric: {
      value: '50k+',
      label: 'Youth Mobilized'
    },
    link: 'https://sdiraebareli.org/'
  }
];
