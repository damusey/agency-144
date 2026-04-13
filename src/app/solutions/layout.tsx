import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Explore Oktuv solutions — web development, AI automation, performance marketing, and design. Tailored strategies for scaling businesses.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions — Oktuv',
    description: 'Web, AI, marketing, design — tailored strategies for scaling businesses.',
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
