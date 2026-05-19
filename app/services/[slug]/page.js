import React from "react";
import { getServiceBySlug } from "../../../data/services.js";
import ServiceDetailsPage from "../../views/service/service-details-page.jsx";
import { generateSEO } from "../../lib/seo-config.js";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return generateSEO({
    title: service?.seo?.title || service.title,

    description: service?.seo?.description || service.description,

    keywords: service?.seo?.keywords || service.tags || [],

    path: `/services/${service.slug}`,

    image: service.hero.image,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return <ServiceDetailsPage service={service} />;
}
