import PageWrapper from "@/app/components/page-wrapper";
import { Settings, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/app/const.js";
import SectionHeader from "@/app/components/section-header";

const features = [
  "High-quality solar panels and advanced inverter solutions.",
  "Expert installation with complete project support.",
  "Reliable maintenance and long-term performance assurance.",
];

export default function OurIntro() {
  return (
    <PageWrapper
      className="bg-white"
      containerClassName="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
    >
      {/* LEFT — Image block */}
      <div className="relative w-full lg:w-[48%] shrink-0">
        {/* Background accent rectangle */}
        <div className="absolute -bottom-3 lg:-bottom-6 -right-3 lg:-right-6 w-[92%] h-[92%] bg-primary-50 rounded-sm z-0" />

        {/* Main image */}
        <div className="relative z-10 rounded-sm overflow-hidden aspect-[4/3] bg-gray-200">
          <img
            src="/Images/intro.webp"
            alt="Solar technician"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Experience badge */}
        <div className="absolute bottom-0 left-0 z-20 bg-primary-500 px-7 py-6 w-[140px]">
          <p className="text-white font-extrabold text-4xl leading-none">
            7<sup className="text-2xl">+</sup>
          </p>
          <p className="text-white text-sm font-medium mt-2 leading-snug">
            Years of <br /> Experience
          </p>
        </div>
      </div>

      {/* RIGHT — Content */}
      <div className="w-full lg:w-[52%]">
        {/* Label */}
        <SectionHeader
          badge={"Our Introduction"}
          title={"Complete Solar Solutions for a Better Future"}
          description={
            "Savior Solar Energy provides solar panels, inverters, installation, and maintenance for homes, businesses, and industries."
          }
          align="start"
        />

        {/* Divider */}
        <div className="border-t border-gray-200 mb-6" />

        {/* Feature list */}
        <ul className="flex flex-col gap-3 mb-8">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <Settings
                size={17}
                className="text-primary-500 shrink-0"
                strokeWidth={1.8}
              />
              <span className="text-[#1a1a1a] text-sm font-bold">{f}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8" />

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Button */}
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm px-10 py-4 tracking-wide transition-colors">
            Learn More
          </button>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border border-primary-500/40 flex items-center justify-center shrink-0">
              <Phone size={17} className="text-primary-500" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-0.5">
                Have any questions?
              </p>
              <p className="text-[#1a1a1a] text-base font-bold">
                {SITE_CONFIG.contact.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
