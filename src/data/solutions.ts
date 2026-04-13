import { Code2, Link2, MessageSquare, TrendingUp, Palette, Sparkles, type LucideIcon } from 'lucide-react';

/* ────────────────────────────────────────────────
   TYPES
   ──────────────────────────────────────────────── */
export interface SubService {
  name: string;
  slug: string;
  desc: string;
  bullets: string[];
  useCases: string[];
}

export interface SolutionCategory {
  key: string;
  label: string;
  subtitle: string;
  iconName: string;
  heading: string;
  heroTitle: string;
  intro: string;
  services: SubService[];
}

/* ────────────────────────────────────────────────
   ICON MAP (avoid serialization issues with Next.js)
   ──────────────────────────────────────────────── */
export const iconMap: Record<string, LucideIcon> = {
  Code2, Link2, MessageSquare, TrendingUp, Palette, Sparkles,
};

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */
export const solutionCategories: SolutionCategory[] = [
  {
    key: 'build',
    label: 'Build',
    subtitle: 'Websites, apps, and digital products',
    iconName: 'Code2',
    heading: 'Build',
    heroTitle: 'Build Digital Products That Scale',
    intro: 'Create websites, apps, and scalable digital products tailored to your business.',
    services: [
      {
        name: 'Web Development',
        slug: 'web-development',
        desc: 'High-performance websites built for speed, scale, and conversion.',
        bullets: [
          'Custom Next.js / React architectures optimized for Core Web Vitals',
          'Headless CMS integration (Sanity, Strapi, Contentful)',
          'Progressive Web Apps with offline-first capabilities',
          'SEO-optimized server-side rendering and static generation',
        ],
        useCases: ['Brand websites', 'Landing pages', 'Multi-page marketing sites', 'Content platforms'],
      },
      {
        name: 'App Development',
        slug: 'app-development',
        desc: 'Mobile and web apps designed for modern user experiences.',
        bullets: [
          'Native iOS and Android development (Swift, Kotlin)',
          'Cross-platform builds with React Native and Flutter',
          'Real-time features: chat, notifications, live updates',
          'App Store optimization and launch strategy',
        ],
        useCases: ['Consumer apps', 'Internal business tools', 'On-demand service platforms', 'IoT dashboards'],
      },
      {
        name: 'eCommerce Solutions',
        slug: 'ecommerce-solutions',
        desc: 'Scalable storefronts and commerce systems that drive revenue.',
        bullets: [
          'Shopify Plus, WooCommerce, and headless commerce stacks',
          'Custom checkout flows and payment gateway integrations',
          'Inventory management and multi-channel selling',
          'Conversion rate optimization and A/B testing',
        ],
        useCases: ['D2C brands', 'Marketplace platforms', 'Subscription commerce', 'Omni-channel retail'],
      },
      {
        name: 'SaaS & Product Engineering',
        slug: 'saas-product-engineering',
        desc: 'End-to-end product development for startups and growing businesses.',
        bullets: [
          'MVP design and rapid prototyping',
          'Scalable microservices architecture',
          'Multi-tenant SaaS infrastructure',
          'CI/CD pipelines and DevOps automation',
        ],
        useCases: ['Early-stage startups', 'Enterprise software products', 'API-first platforms', 'Internal tools'],
      },
    ],
  },
  {
    key: 'integrate',
    label: 'Integrate',
    subtitle: 'APIs, systems, and automation',
    iconName: 'Link2',
    heading: 'Integrate',
    heroTitle: 'Connect Your Systems. Automate Everything.',
    intro: 'For businesses that want systems, tools, and workflows to work together seamlessly.',
    services: [
      {
        name: 'API & System Integration',
        slug: 'api-system-integration',
        desc: 'Connect platforms, CRMs, ERPs, payment systems, and internal tools.',
        bullets: [
          'RESTful and GraphQL API design and development',
          'CRM integrations (Salesforce, HubSpot, Zoho)',
          'ERP and accounting system bridging',
          'Custom middleware and data transformation layers',
        ],
        useCases: ['Enterprise data unification', 'Multi-tool workflow sync', 'Legacy system modernization'],
      },
      {
        name: 'Workflow Automation',
        slug: 'workflow-automation',
        desc: 'Reduce manual work with intelligent process automation.',
        bullets: [
          'Business process mapping and optimization',
          'No-code/low-code automation (Zapier, Make, n8n)',
          'Custom automation scripts and scheduled pipelines',
          'Automated reporting and alert systems',
        ],
        useCases: ['Operations teams', 'Sales pipeline automation', 'HR onboarding flows', 'Finance reconciliation'],
      },
      {
        name: 'WhatsApp Services',
        slug: 'whatsapp-services',
        desc: 'Integrate WhatsApp into support, sales, notifications, and engagement journeys.',
        bullets: [
          'WhatsApp Business API setup and management',
          'Automated customer support flows',
          'Broadcast messaging, RCS, and campaign drips',
          'Order tracking and transactional notifications',
        ],
        useCases: ['D2C customer support', 'Lead nurturing', 'Appointment booking', 'Mass outreach campaigns'],
      },
    ],
  },
  {
    key: 'engage',
    label: 'Engage',
    subtitle: 'Chatbots, voice bots, and AI interactions',
    iconName: 'MessageSquare',
    heading: 'Engage',
    heroTitle: 'Smarter Conversations. Always On.',
    intro: 'Build AI-powered customer interactions that scale without scaling your team.',
    services: [
      {
        name: 'Chatbots',
        slug: 'chatbots',
        desc: 'AI-driven assistants for support, lead qualification, and engagement.',
        bullets: [
          'GPT-powered conversational AI with custom training',
          'Multi-platform deployment (website, WhatsApp, Slack)',
          'Lead qualification and CRM handoff automation',
          'Analytics dashboards for conversation insights',
        ],
        useCases: ['24/7 customer support', 'Lead generation', 'FAQ automation', 'Internal helpdesk'],
      },
      {
        name: 'Voice Bots',
        slug: 'voice-bots',
        desc: 'Human-like automated voice experiences for calls, support, and campaigns.',
        bullets: [
          'Natural language understanding and speech synthesis',
          'IVR replacement with intelligent voice routing',
          'Outbound call campaigns with personalization',
          'Multi-language support and accent handling',
        ],
        useCases: ['Call center automation', 'Appointment reminders', 'Survey collection', 'Payment follow-ups'],
      },
      {
        name: 'Generative AI Integration',
        slug: 'generative-ai-integration',
        desc: 'Bring GenAI into your customer journeys and digital products.',
        bullets: [
          'Custom LLM fine-tuning on your business data',
          'RAG (Retrieval-Augmented Generation) pipelines',
          'AI-powered content generation and summarization',
          'Intelligent document processing and extraction',
        ],
        useCases: ['Knowledge base automation', 'Content creation tools', 'Smart search', 'Document analysis'],
      },
    ],
  },
  {
    key: 'grow',
    label: 'Grow',
    subtitle: 'SEO, paid media, and social growth',
    iconName: 'TrendingUp',
    heading: 'Grow',
    heroTitle: 'Dominate Search. Scale Revenue.',
    intro: 'For companies focused on traffic, leads, and brand visibility at scale.',
    services: [
      {
        name: 'AI-Powered SEO',
        slug: 'ai-powered-seo',
        desc: 'Smarter search optimization driven by AI-led content and strategy.',
        bullets: [
          'Technical SEO audits and Core Web Vitals optimization',
          'AI-driven keyword research and content clustering',
          'Programmatic SEO for large-scale page generation',
          'Link building and domain authority growth',
        ],
        useCases: ['Organic traffic growth', 'Content-led acquisition', 'Local SEO dominance', 'Enterprise SEO'],
      },
      {
        name: 'Performance Marketing',
        slug: 'performance-marketing',
        desc: 'Paid campaigns optimized for reach, conversions, and ROI.',
        bullets: [
          'Google Ads, Meta Ads, and LinkedIn campaign management',
          'Creative strategy and ad copy development',
          'Conversion tracking and attribution modeling',
          'Budget optimization and bid strategy automation',
        ],
        useCases: ['Lead generation', 'eCommerce ROAS scaling', 'App install campaigns', 'B2B demand gen'],
      },
      {
        name: 'Social Media Management',
        slug: 'social-media-management',
        desc: 'Consistent content, engagement, and brand growth across social platforms.',
        bullets: [
          'Content calendar planning and production',
          'Community management and engagement monitoring',
          'Influencer identification and campaign management',
          'Analytics reporting and growth strategy',
        ],
        useCases: ['Brand awareness', 'Community building', 'Product launches', 'Employer branding'],
      },
    ],
  },
  {
    key: 'design',
    label: 'Design',
    subtitle: 'UI/UX, branding, and creative assets',
    iconName: 'Palette',
    heading: 'Design',
    heroTitle: 'Design That Converts. Identity That Lasts.',
    intro: 'A strong identity and better product experiences for your brand.',
    services: [
      {
        name: 'UI/UX Design',
        slug: 'ui-ux-design',
        desc: 'Seamless digital experiences designed around user behavior.',
        bullets: [
          'User research, personas, and journey mapping',
          'Wireframing and high-fidelity prototyping (Figma)',
          'Design systems and component libraries',
          'Usability testing and iterative refinement',
        ],
        useCases: ['Product redesigns', 'New product launches', 'Dashboard design', 'Mobile app UX'],
      },
      {
        name: 'Branding & Identity',
        slug: 'branding-identity',
        desc: 'Strategic visual identity systems that build trust and recall.',
        bullets: [
          'Logo design and brand mark development',
          'Color, typography, and visual language systems',
          'Brand guidelines and usage documentation',
          'Brand strategy and positioning workshops',
        ],
        useCases: ['Startups launching brands', 'Rebranding initiatives', 'Sub-brand creation', 'Franchise systems'],
      },
      {
        name: 'Graphic & Motion Design',
        slug: 'graphic-motion-design',
        desc: 'Visual assets and motion creatives that make your brand stand out.',
        bullets: [
          'Social media creative design and templates',
          'Presentation and pitch deck design',
          'Motion graphics and explainer videos',
          'Illustration and icon systems',
        ],
        useCases: ['Marketing campaigns', 'Product demos', 'Event visuals', 'Ad creative production'],
      },
    ],
  },
  {
    key: 'transform',
    label: 'Transform',
    subtitle: 'AI solutions and business modernization',
    iconName: 'Sparkles',
    heading: 'Transform',
    heroTitle: 'Become AI-First. Become Future-Ready.',
    intro: 'For businesses looking to modernize operations and unlock AI-driven growth.',
    services: [
      {
        name: 'In-house GenAI Analytics',
        slug: 'genai-analytics',
        desc: 'Proprietary analytics built to unlock insights, efficiency, and smarter decisions.',
        bullets: [
          'Custom AI dashboards with natural language querying',
          'Predictive analytics and forecasting models',
          'Automated report generation and anomaly detection',
          'Data pipeline architecture and warehouse design',
        ],
        useCases: ['Executive decision support', 'Sales forecasting', 'Operational efficiency', 'Customer insights'],
      },
      {
        name: 'Digital Transformation Consulting',
        slug: 'digital-transformation-consulting',
        desc: 'Strategy-led modernization of operations, customer journeys, and systems.',
        bullets: [
          'Digital maturity assessment and roadmapping',
          'Legacy system migration and cloud adoption',
          'Process re-engineering and workflow optimization',
          'Change management and team enablement',
        ],
        useCases: ['Enterprise modernization', 'Cloud migration', 'Operational overhaul', 'Customer experience redesign'],
      },
      {
        name: 'AI Strategy & Automation Advisory',
        slug: 'ai-strategy-automation',
        desc: 'Identify the right AI opportunities and implement them with clarity.',
        bullets: [
          'AI readiness assessment and opportunity mapping',
          'Use case prioritization and ROI modeling',
          'Vendor evaluation and technology selection',
          'Implementation roadmap and governance framework',
        ],
        useCases: ['C-suite AI strategy', 'Department-level automation', 'AI governance', 'Build vs buy decisions'],
      },
    ],
  },
];
