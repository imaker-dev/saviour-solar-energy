import React from "react";
import PageHeader from "../../components/page-header";
import { getServiceCards } from "../../../data/services";
import ServiceCard from "./service-card.jsx";
import PageWrapper from "../../components/page-wrapper";
const ServicePage = () => {
  const services = getServiceCards();

  return (
    <>
      <PageHeader title={"Our Services"} />
      <PageWrapper>
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </PageWrapper>
    </>
  );
};

export default ServicePage;
