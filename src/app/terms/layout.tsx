import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Oktuv — covering services, intellectual property, payments, confidentiality, liability, and dispute resolution.',
  alternates: { canonical: '/terms/' },
  openGraph: {
    title: 'Terms & Conditions — Oktuv',
    description: 'Read the full terms and conditions for engaging with Oktuv services.',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
