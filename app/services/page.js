import React from "react";
import ServicePage from "../views/service/service-page";
import { seoPages } from "../lib/seo-pages";
export const metadata = seoPages.services;

const Page = () => {
  return <ServicePage />;
};

export default Page;
