import React from "react";
import PageHeader from "../../components/page-header";
import AboutUsSection from "@/app/views/home/components/about-us-section.jsx";
import WhyChooseUsSection from "@/app/views/home/components/why-choose-us-section.jsx";
import StatsSection from "@/app/views/home/components/stats-section.jsx";
import WorkingProcess from "@/app/views/home/components/working-process.jsx";
import TeamSection from "./components/team-section";

const AboutPage = () => {
  return (
    <div>
      <PageHeader title="About Us " />
      <AboutUsSection />
      <TeamSection />
      <WhyChooseUsSection />
      <StatsSection />
      <WorkingProcess />
    </div>
  );
};

export default AboutPage;
