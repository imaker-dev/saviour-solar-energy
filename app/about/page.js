import React from "react";
import AboutPage from "../views/about/about-page";
import { seoPages } from "../lib/seo-pages";
export const metadata = seoPages.about;

const Page = () => {
  return <AboutPage />;
};

export default Page;
