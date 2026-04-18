import React from "react";
import Hero from "./components/hero.jsx";
import OurBenefits from "./components/our-benifits.jsx";
import StatsSection from "./components/stats-section.jsx";
import ServicesSection from "./components/services-section.jsx";
import OurIntro from "./components/our-intro.jsx";
import WhyChooseUsSection from "./components/why-choose-us-section.jsx";
import CtaBanner from "./components/cta-banner.jsx";
import WorkingProcess from "./components/working-process.jsx";
import OurProjectSection from "./components/our-projects-section.jsx";
import SolutionsSection from "./components/solutions-section.jsx";
import SolarSubsidySection from "./components/solar-subsidy-section.jsx";
import FaqSection from "./components/faq-section.jsx";
import ContactSection from "./components/contact-section.jsx";
import TestimonialSlider from "./components/testimonial-slider.jsx";
import BlogSlider from "./components/blog-slider.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurIntro />
      <ServicesSection />
      <SolutionsSection />
      <CtaBanner />
      <SolarSubsidySection />
      <OurProjectSection />
      <WhyChooseUsSection />
      <StatsSection />
      <WorkingProcess />
      <OurBenefits />
      <FaqSection />
      <ContactSection />
      <TestimonialSlider />
      <BlogSlider />
    </>
  );
};

export default HomePage;
