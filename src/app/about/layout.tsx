import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the elite strike team behind Oktuv. Ex-founders and domain experts from IITs, NITs building revenue engines for scaling businesses.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Oktuv',
    description: 'Meet the elite strike team building revenue engines for scaling businesses.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
