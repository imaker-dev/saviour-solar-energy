import React from "react";
import PageHeader from "../../components/page-header";
import OurIntro from "@/app/views/home/components/our-intro.jsx";
import WhyChooseUsSection from "@/app/views/home/components/why-choose-us-section.jsx";
import StatsSection from "@/app/views/home/components/stats-section.jsx";
import WorkingProcess from "@/app/views/home/components/working-process.jsx";

const AboutPage = () => {
  return (
    <div>
      <PageHeader title="About Us " />
      <OurIntro />
      <WhyChooseUsSection />
      <StatsSection />
      <WorkingProcess />
    </div>
  );
};

export default AboutPage;
