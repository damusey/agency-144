import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Growth Audit',
  description: 'Get a complimentary growth audit from Oktuv. We\'ll identify the biggest revenue opportunities in your digital infrastructure.',
  alternates: { canonical: '/audit' },
  openGraph: {
    title: 'Free Growth Audit — Oktuv',
    description: 'Get a complimentary audit identifying the biggest revenue opportunities in your digital infrastructure.',
  },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
