import React from "react";
import { getSectorById } from "../../../data/sectors";
import SectorDetailsPage from "../../views/sector/sector-details-page";

const Page = async ({ params }) => {
  const { slug } = await params;
  const sector = getSectorById(slug);
  return <SectorDetailsPage sector={sector} />;
};

export default Page;
