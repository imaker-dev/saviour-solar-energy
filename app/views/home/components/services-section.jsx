"use client";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { getServiceCards } from "@/data/services.js";
import ServiceCard from "../../service/service-card";

export default function OurServicesSlider() {
  const services = getServiceCards();

  return (
    <PageWrapper >
      <SectionHeader
        badge="Our Services"
        title="Services for Sustainable Energy"
        highlight="Sustainable Energy"
      />

      {/* Slider track */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {services.map((serivice) => (
          <ServiceCard key={serivice.id} service={serivice} />
        ))}
      </div>
    </PageWrapper>
  );
}
