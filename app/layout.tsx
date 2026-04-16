import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/app/components/app-layout";

export const metadata: Metadata = {
  title:
    "Savior Solar Energy | Solar Panels, Inverters & Installation Services",
  description:
    "Savior Solar Energy offers complete solar solutions including high-efficiency solar panels, advanced inverters, professional installation, and maintenance services for homes, businesses, and industries.",
  keywords:
    "solar energy company, solar panels, solar inverter, solar installation, solar maintenance, solar solutions India, residential solar, commercial solar, industrial solar, renewable energy, solar system provider",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
