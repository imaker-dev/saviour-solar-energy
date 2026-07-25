import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import AppLayout from "@/app/components/app-layout";
import { BASE_URL } from "./const";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "Savior Solar Energy | Solar Panels, Inverters & Installation Services",
    template: "%s | Savior Solar Energy",
  },

  description:
    "Savior Solar Energy provides complete solar power solutions including solar panels, solar inverters, rooftop solar systems, installation, and maintenance services for residential, commercial, and industrial projects.",

  keywords: [
    "solar energy company",
    "solar panels",
    "solar inverter",
    "solar installation",
    "rooftop solar",
    "solar maintenance",
    "renewable energy",
    "commercial solar",
    "industrial solar",
    "residential solar",
    "solar solutions India",
  ],

  creator: "iMaker Technology Pvt. Ltd.",
  publisher: "iMaker Technology Pvt. Ltd.",

  applicationName: "Savior Solar Energy",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Savior Solar Energy | Solar Panels, Inverters & Installation Services",

    description:
      "Complete solar energy solutions for residential, commercial, and industrial projects.",

    url: BASE_URL,

    siteName: "Savior Solar Energy",

    images: [
      {
        url: "/Images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Savior Solar Energy",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Savior Solar Energy | Solar Panels, Inverters & Installation Services",

    description:
      "Professional solar panel installation and renewable energy solutions for homes, businesses, and industries.",

    images: ["/Images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
      "@type": "WebSite",
      name: "Savior Solar Energy",
      alternateName: "Savior Solar",
      url: BASE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Savior Solar Energy",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
    },
  ];

  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
