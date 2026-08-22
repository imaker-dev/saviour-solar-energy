import React from "react";
import Hero from "./components/hero.jsx";
import ClientsSlider from "./components/clients-slider.jsx";
import OurBenefits from "./components/our-benifits.jsx";
import StatsSection from "./components/stats-section.jsx";
import ServicesSection from "./components/services-section.jsx";
import GujaratCoverageSection from "./components/gujarat-coverage-section.jsx";
import AboutUsSection from "./components/about-us-section.jsx";
import WhyChooseUsSection from "./components/why-choose-us-section.jsx";
import CtaBanner from "./components/cta-banner.jsx";
import WorkingProcess from "./components/working-process.jsx";
import OurProjectSection from "./components/our-projects-section.jsx";
import FaqSection from "./components/faq-section.jsx";
import ContactSection from "./components/contact-section.jsx";
import TestimonialSlider from "./components/testimonial-slider.jsx";
import BlogSlider from "./components/blog-slider.jsx";
import FeaturesSection from "./components/features-section.jsx";
import SocialMediaSection from "./components/social-media-section.jsx";
import GovernmentSchemesSection from "./components/government-schemes-section.jsx";
import SectorsSection from "./components/sectors-section.jsx";

const HomePage = () => {
  return (
    <>
      {/* 1. First impression + core value proposition */}
      <Hero />

      {/* 2. Brand / client trust */}
      <ClientsSlider />

      {/* 3. Who is Savior Renewable Energy? */}
      <AboutUsSection />

      {/* 4. Who do we provide solar solutions for? */}
      <SectorsSection />

      {/* 5. What do we do for our customers? */}
      <ServicesSection />

      {/* 6. Why should customers choose Savior? */}
      <WhyChooseUsSection />

      {/* 7. Solar system capabilities / components / flexibility */}
      <FeaturesSection />

      {/* 8. What benefits can customers get from going solar? */}
      <OurBenefits />

      {/* 9. Government schemes, subsidy & financial assistance */}
      <GovernmentSchemesSection />

      {/* 10. Proof of real-world experience */}
      <StatsSection />
      <OurProjectSection />

      {/* 11. What customers say about Savior */}
      <TestimonialSlider />

      {/* 12. Where Savior provides solar solutions */}
      <GujaratCoverageSection />

      {/* 13. How the solar journey works */}
      <WorkingProcess />

      {/* 14. Remove doubts before conversion */}
      <FaqSection />

      {/* 15. Final conversion */}
      <ContactSection />

      {/* 16. Educational content / SEO discovery */}
      <BlogSlider />
    </>
  );
};

export default HomePage;
