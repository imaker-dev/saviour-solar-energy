import React from "react";
import SchemesDetailsPage from "../../views/schemes/schemes-details-page";
import { getSchemeById } from "../../../data/schemes";

const Page = async ({ params }) => {
  const { slug } = await params;
  const scheme = getSchemeById(slug);
  return <SchemesDetailsPage scheme={scheme} />;
};

export default Page;
