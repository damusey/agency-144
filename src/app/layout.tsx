import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ScarcityBar from "@/components/ScarcityBar";

const SITE_URL = 'https://www.oktuvglobal.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Oktuv — Web, AI & Growth Agency',
    template: '%s | Oktuv',
  },
  description: 'Oktuv turns your digital presence into a 24/7 growth engine. Web development, AI automation, performance marketing, and design — all in one senior team.',
  keywords: ['AI agency', 'web development', 'growth agency', 'AI automation', 'performance marketing', 'digital agency', 'FlowAI', 'FlowBot', 'chatbot', 'analytics'],
  authors: [{ name: 'Oktuv' }],
  creator: 'Oktuv',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Oktuv',
    title: 'Oktuv — Web, AI & Growth Agency',
    description: 'Oktuv turns your digital presence into a 24/7 growth engine. Web development, AI automation, performance marketing, and design — all in one senior team.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oktuv — Web, AI & Growth Agency',
    description: 'Web, AI, marketing, design — all in one elite team.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'okHJ94Lq5L40TkrkiagfK1wIowMO3QoKKYCSNFPsZL8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

      {/* FAVICON START */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
      <link rel="manifest" href="/favicon_io/site.webmanifest" />
      <link rel="icon" href="/favicon_io/favicon.ico" />
      {/* FAVICON END */}

      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YVKWT6KRB0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YVKWT6KRB0');
          `}
        </Script>
        <ScarcityBar />
        <div style={{ overflowX: 'clip' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
