import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Free Call',
  description: 'Schedule a free strategy consultation with Oktuv. Get a personalized growth roadmap for your business.',
  alternates: { canonical: '/book/' },
  openGraph: {
    title: 'Book a Free Call — Oktuv',
    description: 'Schedule a free strategy consultation and get a personalized growth roadmap.',
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
