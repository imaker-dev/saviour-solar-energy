import { BASE_URL, SITE_CONFIG } from "../const.js";
const siteName = SITE_CONFIG.name || "Savior Renewable Energy Pvt. Ltd.";

export function generateSEO({
  title,
  description,
  keywords = [],
  path = "",
  image = "/Images/og-image.webp",
}) {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,

    keywords,

    creator: "Savior Renewable Energy Pvt. Ltd.",
    publisher: "Savior Renewable Energy Pvt. Ltd.",

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],

      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
