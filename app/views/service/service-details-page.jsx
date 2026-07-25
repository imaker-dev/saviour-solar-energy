"use client";

import { useState } from "react";
import { Play, Check, ChevronDown } from "lucide-react";
import PageWrapper from "../../components/page-wrapper";
import SectionHeader from "../../components/section-header";

// ─── Shared facet clip-path (notched corners like the reference design) ────
// Cuts the top-left and bottom-right corners diagonally.
const facetClip = (size) => ({
  clipPath: `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`,
});

// ─── Small building blocks ──────────────────────────────────────────────────

const CheckItem = ({ text }) => (
  <div className="flex items-start gap-2.5">
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500">
      <Check className="h-3 w-3 text-white" strokeWidth={3} />
    </span>
    <span className="text-[15px] leading-snug text-slate-600">{text}</span>
  </div>
);

const BenefitItem = ({ text }) => (
  <div className="flex items-center gap-3">
    <span className="relative flex h-4 w-7 shrink-0 items-center rounded-full bg-slate-800">
      <span className="absolute left-3.5 h-2.5 w-2.5 rounded-full bg-primary-500" />
    </span>
    <span className="text-[15px] leading-snug text-slate-600">{text}</span>
  </div>
);

// ─── Hero ────────────────────────────────────────────────────────────────

const HeroBanner = ({ hero }) => (
  <div
    className="relative overflow-hidden shadow-xl shadow-slate-900/10 ring-1 ring-black/5"
    style={facetClip(56)}
  >
    <img
      src={hero?.image}
      alt={hero?.alt || ""}
      className="h-72 w-full object-cover sm:h-[26rem]"
    />
    {hero?.videoUrl && (
      <button
        type="button"
        aria-label="Play video"
        className="group absolute inset-0 flex items-center justify-center bg-slate-900/10 transition hover:bg-slate-900/20"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/90 bg-white/10 backdrop-blur-sm transition group-hover:scale-105">
          <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
        </span>
      </button>
    )}
  </div>
);

// ─── About + Services Include + Gallery ────────────────────────────────────

const AboutSection = ({ about, services, gallery }) => {
  const includedItems = services?.items || [];
  const galleryImages = gallery?.slice(0, 2) || [];

  return (
    <div>
      {/* About heading + intro copy with lettered avatar */}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {about?.title}
      </h2>

      <div className="mt-6 flex items-start gap-4">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
          {about?.title?.charAt(0) || "L"}
        </span>
        <p className="text-[15px] leading-relaxed text-slate-600">
          {about?.description}
        </p>
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
        {about?.paragraphs}
      </p>

      {/* Services include checklist */}
      <h3 className="mt-12 text-2xl font-bold tracking-tight text-slate-900">
        {services?.title || "Services Include"}:
      </h3>
      <p className="mt-3  text-[15px] leading-relaxed text-slate-600">
        {services?.description}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
        {includedItems.map((item, i) => (
          <CheckItem key={i} text={item} />
        ))}
      </div>

      {/* Two supporting images, faceted like the hero */}
      {galleryImages.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden shadow-lg shadow-slate-900/10 ring-1 ring-black/5"
              style={facetClip(36)}
            >
              <img
                src={img.image}
                alt={img.alt || ""}
                className="h-56 w-full object-cover sm:h-72"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── How It Work + Benefits ────────────────────────────────────────────────

const ProcessSection = ({ process, benefits }) => (
  <div>
    <h3 className="mt-12 text-2xl font-bold tracking-tight text-slate-900">
      {process?.title}
    </h3>
    <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
      {process?.description}
    </p>

    <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-3">
      {process?.steps?.map((step) => (
        <div key={step.number}>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">
              {String(step.number).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              {step.title}
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {step.description}
          </p>
        </div>
      ))}
    </div>

    <h2 className="mt-14 text-2xl font-bold tracking-tight text-slate-900">
      {benefits?.title}
    </h2>
    <p className="mt-4  text-[15px] leading-relaxed text-slate-600">
      {benefits?.description}
    </p>

    <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4">
      {benefits?.items?.map((item, i) => (
        <BenefitItem key={i} text={item} />
      ))}
    </div>
  </div>
);

// ─── FAQ ────────────────────────────────────────────────────────────────

const FaqSection = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq?.length) return null;

  return (
    <div>
      <SectionHeader
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most often about our solar panel solutions."
        align="start"
      />

      <div className="space-y-3">
        {faq.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-slate-900/5 ring-1 ring-slate-900/5"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-slate-900">
                  {item.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-500">
                  <ChevronDown
                    className={`h-4 w-4 text-white transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>
              {isOpen && (
                <p className="px-6 pb-5 text-[15px] leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────

const ServiceDetailsPage = ({ service }) => {
  if (!service) return null;

  const { hero, about, services, gallery, process, benefits, faq } = service;

  return (
    <PageWrapper
      containerClassName="space-y-14 sm:space-y-16"
      containerWidth="max-w-6xl mx-auto"
    >
      <HeroBanner hero={hero} />
      <AboutSection about={about} services={services} gallery={gallery} />
      <ProcessSection process={process} benefits={benefits} />
      <FaqSection faq={faq} />
    </PageWrapper>
  );
};

export default ServiceDetailsPage;
