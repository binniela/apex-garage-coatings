import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reef One | Smart Aquarium Monitoring",
  description: "Reef makes a smart attachable aquarium monitor with a calm UI for tracking tank health, water stats, and care alerts.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reef",
  url: "https://reef.example",
  description: "Smart attachable aquarium monitoring hardware and companion app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
