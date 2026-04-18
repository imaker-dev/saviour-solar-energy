import React from "react";
import PageHeader from "../../components/page-header";
import ServicesSection from "../home/components/services-section.jsx";
const ServicePage = () => {
  return (
    <div>
      <PageHeader title={"Our Services"} />
      <ServicesSection />
    </div>
  );
};

export default ServicePage;
