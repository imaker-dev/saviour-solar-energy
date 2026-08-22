import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "./const";
import ClientProviders from "./components/client-providers";
import { seoPages } from "./lib/seo-pages";

export const metadata: Metadata = seoPages.home;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Savior Renewable Energy Pvt. Ltd.",
      description:
        "Savior Renewable Energy Pvt. Ltd. provides complete solar energy solutions including solar panels, inverters, customized solar systems, installation, maintenance and support across Gujarat.",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.svg`,
      areaServed: {
        "@type": "State",
        name: "Gujarat",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Savior Renewable Energy Pvt. Ltd.",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
  ];

  return (
    <html lang="en-IN" className={`${dmSans.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}