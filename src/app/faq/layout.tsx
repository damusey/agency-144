import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Oktuv — pricing, timelines, ownership, tech stack, and how we\'re different from standard dev shops.',
  alternates: { canonical: '/faq/' },
  openGraph: {
    title: 'FAQ — Oktuv',
    description: 'Everything you need to know about working with Oktuv.',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
