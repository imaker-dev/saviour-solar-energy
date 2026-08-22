import React from "react";
import { getAllSchemes } from "../../../data/schemes";
import PageHeader from "../../components/page-header";
import SchemeCard from "../home/components/scheme-card";
import PageWrapper from "../../components/page-wrapper";
const SchemesPage = () => {
  const schemes = getAllSchemes();

  return (
    <>
      <PageHeader title={"Government Schemes"} />
      <PageWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </PageWrapper>
    </>
  );
};

export default SchemesPage;
