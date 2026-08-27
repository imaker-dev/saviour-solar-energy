import React from "react";
import { getSectorBySlug } from "../../../data/sectors";
import SectorDetailsPage from "../../views/sector/sector-details-page";

const Page = async ({ params }) => {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  return <SectorDetailsPage sector={sector} />;
};

export default Page;
