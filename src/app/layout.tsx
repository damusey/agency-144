import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowmatic — Web, AI & Growth Agency",
  description: "Flowmatic turns your digital presence into a 24/7 growth engine. Web development, AI automation, performance marketing, and design — all in one senior team.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
