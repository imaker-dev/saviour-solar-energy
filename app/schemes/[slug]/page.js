import React from "react";
import SchemesDetailsPage from "../../views/schemes/schemes-details-page";
import { getSchemeById } from "../../../data/schemes";
import { generateSEO } from "../../lib/seo-config";


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const scheme = getSchemeById(slug);

  if (!scheme) {
    return {};
  }

  return generateSEO({
    title: scheme.seo?.title || scheme.listing?.label,
    description:
      scheme.seo?.description || scheme.listing?.summary,
    keywords: scheme.seo?.keywords || [],
    path: `/schemes/${scheme.id}`,
  });
}

const Page = async ({ params }) => {
  const { slug } = await params;

  const scheme = getSchemeById(slug);

  if (!scheme) {
    return null;
  }

  return <SchemesDetailsPage scheme={scheme} />;
};

export default Page;