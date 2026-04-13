import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FlowAI — Agentic AI Analytics Platform',
  description: 'Replace your analytics team with FlowAI. Ask data questions in plain English and get instant, accurate answers. Conversational BI powered by agentic AI.',
  keywords: ['AI analytics', 'conversational BI', 'agentic AI', 'data analytics', 'business intelligence', 'FlowAI'],
  alternates: { canonical: '/platform/flowai' },
  openGraph: {
    title: 'FlowAI — Agentic AI Analytics',
    description: 'Ask data questions in plain English. Get instant, accurate answers. Replace dashboard backlogs with AI.',
  },
};

export default function FlowAILayout({ children }: { children: React.ReactNode }) {
  return children;
}
