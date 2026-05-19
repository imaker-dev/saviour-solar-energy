import React from "react";
import { getSolutionBySlug } from "../../../data/solution";
import SolutionDetailsPage from "../../views/solutions/solution-details-page";
import { generateSEO } from "../../lib/seo-config";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {};
  }

  return generateSEO({
    title: solution?.seo?.metaTitle,

    description: solution?.seo?.metaDescription,

    keywords: solution?.seo?.keywords || [],

    path: `/solutions/${solution.slug}`,

    image: solution.hero.image,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  return <SolutionDetailsPage solution={solution} />;
}
