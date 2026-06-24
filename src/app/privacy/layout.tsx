import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Oktuv — how we collect, use, and protect your data, including AI-specific data practices for FlowAI and FlowBot.',
  alternates: { canonical: '/privacy/' },
  openGraph: {
    title: 'Privacy Policy — Oktuv',
    description: 'Learn how Oktuv collects, uses, and safeguards your personal information.',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
