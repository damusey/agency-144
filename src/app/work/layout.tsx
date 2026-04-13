import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'See how Oktuv has helped brands scale with web development, AI automation, and performance marketing. Real results, real clients.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Our Work — Oktuv',
    description: 'Real results from real clients. See how we build revenue engines.',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
