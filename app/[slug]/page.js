import { notFound } from "next/navigation";
import { getLocationBySlug } from "../../data/locations";
import { generateSEO } from "../lib/seo-config";
import SolarLocationPage from "../views/solar-location/solar-location-page";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const location = getLocationBySlug(slug);

  if (!location) {
    return {};
  }

  return generateSEO({
    title: location?.seo?.title || location.city,

    description: location?.seo?.description || "",

    keywords: location?.seo?.keywords || [],

    path: `${location.slug}`,
  });
}

const Page = async ({ params }) => {
  const { slug } = await params;

  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return <SolarLocationPage location={location} />;
};

export default Page;
