"use client";

import { useState } from "react";
import {
  ChevronDown,
  Home,
  Gauge,
  Check,
  ArrowUpRight,
} from "lucide-react";
import PageWrapper from "../../components/page-wrapper";
import SectorHeroSection from "./components/sector-hero-section";
import Link from "next/link";

// ─── Shared facet clip-path (notched corners) as Tailwind arbitrary utilities ──
// No inline style / custom CSS — these are plain Tailwind classes.
const facetLg =
  "[clip-path:polygon(48px_0,100%_0,100%_calc(100%-48px),calc(100%-48px)_100%,0_100%,0_48px)]";
const facetMd =
  "[clip-path:polygon(32px_0,100%_0,100%_calc(100%-32px),calc(100%-32px)_100%,0_100%,0_32px)]";
const facetSm =
  "[clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]";

// ─── Stats bar — floats over the hero as a connected strip ─────────────────

const StatsBar = ({ stats }) => {
  if (!stats?.length) return null;

  return (
    <PageWrapper
      className="bg-gray-100"
      containerClassName="relative z-10 grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-4"
      topEdge
      bottomEdge
      edgeClassName="text-gray-100"
    >
      {stats.map((stat, i) => {
        return (
          <div key={i} className="flex flex-col items-center gap-3">
            <span className="text-2xl font-bold tracking-tight text-primary-500 sm:text-3xl">
              {stat.value}
            </span>
            <span className="text-sm leading-snug text-slate-500">
              {stat.label}
            </span>
          </div>
        );
      })}
    </PageWrapper>
  );
};

// ─── About ──────────────────────────────────────────────────────────────────

const AboutSection = ({ about }) => (
  <section>
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      {about?.title}
    </h2>

    <div className="mt-6 flex items-start gap-4">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500">
        <Home className="h-4 w-4 text-white" strokeWidth={2.5} />
      </span>
      <p className="text-[15px] leading-relaxed text-slate-600">
        {about?.description}
      </p>
    </div>

    <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
      {about?.paragraphs}
    </p>
  </section>
);

// ─── Solutions ──────────────────────────────────────────────────────────────

const SolutionsSection = ({ solutions }) => {
  if (!solutions?.items?.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {solutions.title}
      </h2>
      <p className="mt-4  text-[15px] leading-relaxed text-slate-600">
        {solutions.description}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.items.map((item, i) => (
          <div key={i} className="group">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-sm shadow-primary-500/30 transition-transform duration-300 group-hover:scale-105">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </div>
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Why Solar ──────────────────────────────────────────────────────────────

const WhySolarSection = ({ whySolar }) => {
  if (!whySolar?.items?.length) return null;

  return (
    <section>
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {whySolar?.title}
        </h2>
        <p className="mt-4  text-[15px] leading-relaxed text-slate-600">
          {whySolar?.description}
        </p>
      </div>

      <div className="mt-10 divide-y divide-slate-100">
        {whySolar.items.map((item, i) => (
          <div key={i} className="flex items-start gap-4 py-4 first:pt-0">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50">
              <Check className="h-3.5 w-3.5 text-primary-600" strokeWidth={3} />
            </span>
            <p className="text-[15px] leading-relaxed text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── System Options ─────────────────────────────────────────────────────────

const SystemOptionsSection = ({ systemOptions }) => {
  if (!systemOptions?.options?.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {systemOptions.title}
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {systemOptions.options.map((option, i) => (
          <div
            key={i}
            className={`relative overflow-hidden bg-primary-500 p-6 shadow-lg shadow-slate-900/15 ${facetSm}`}
          >
            <Gauge className="h-5 w-5 text-primary-400" strokeWidth={2.25} />
            <p className="mt-4 text-3xl font-bold tracking-tight text-white">
              {option.size}
            </p>
            <p className="mt-1 text-sm font-medium text-primary-400">
              {option.suitableFor}
            </p>
            <p className="mt-3 text-sm leading-snug text-slate-300">
              {option.monthlyUnits}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Process ────────────────────────────────────────────────────────────────

const ProcessSection = ({ process }) => {
  if (!process?.steps?.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {process.title}
      </h2>

      <div className="mt-9 grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <div
            key={i}
            className="relative px-0 py-6 sm:px-6 sm:py-0 sm:first:pl-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-slate-200"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 items-center rounded-full bg-primary-500 px-2.5 text-xs font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[17px] font-semibold text-slate-900">
                {step.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Gallery ────────────────────────────────────────────────────────────────

const GallerySection = ({ gallery }) => {
  if (!gallery?.length) return null;

  return (
    <section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {gallery.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden shadow-lg shadow-slate-900/10 ring-1 ring-black/5 ${facetMd}`}
          >
            <img
              src={img.image}
              alt={img.alt || ""}
              className="h-56 w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── FAQ ────────────────────────────────────────────────────────────────────

const FaqSection = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq?.length) return null;

  return (
    <section>
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-4  text-[15px] leading-relaxed text-slate-600">
          Answers to the questions we hear most often.
        </p>
      </div>
      <div className="mt-8 space-y-3">
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
    </section>
  );
};

// ─── CTA ────────────────────────────────────────────────────────────────────

const CtaSection = ({ cta }) => {
  if (!cta) return null;

  const { title, description, primaryButton, secondaryButton } = cta || {};

  return (
    <PageWrapper
      containerClassName={`relative overflow-hidden bg-primary-500 px-6 py-12 text-center sm:px-12 sm:py-16 ${facetLg}`}
    >
      {/* Soft Top Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-400/20 blur-3xl" />

      {/* Green Accent */}
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-secondary-500/10 blur-3xl" />

      {/* Orange Accent */}
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-third-500/10 blur-3xl" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 72%)",
        }}
      />

      <div className="relative z-10">
        {title && (
          <h2 className="mx-auto max-w-xs text-balance text-xl font-semibold leading-[1.25] tracking-tight text-white sm:max-w-md sm:text-2xl md:max-w-xl md:text-3xl md:leading-[1.2] lg:max-w-2xl lg:text-[2.25rem]">
            {title}
          </h2>
        )}

        {description && (
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/65 sm:max-w-lg sm:text-base md:max-w-xl">
            {description}
          </p>
        )}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
          {primaryButton && (
            <Link
              href={primaryButton.href}
              className="group btn btn-lg btn-secondary border-0 bg-white text-primary-500 shadow-lg shadow-black/10 hover:bg-gray-50"
            >
              {primaryButton.text}

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-[18px]"
              />
            </Link>
          )}

          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="btn btn-lg border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

// ─── Main Page ──────────────────────────────────────────────────────────────

const SectorDetailsPage = ({ sector }) => {
  if (!sector) return null;

  const {
    hero,
    about,
    stats,
    solutions,
    whySolar,
    systemOptions,
    process,
    gallery,
    faq,
    cta,
  } = sector;

  return (
    <>
      <SectorHeroSection hero={hero} />
      <StatsBar stats={stats} />
      <PageWrapper containerClassName="space-y-8 lg:space-y-12">
        <AboutSection about={about} />
        <SolutionsSection solutions={solutions} />
        <WhySolarSection whySolar={whySolar} />
        <SystemOptionsSection systemOptions={systemOptions} />
        <ProcessSection process={process} />
        <GallerySection gallery={gallery} />
        <FaqSection faq={faq} />
      </PageWrapper>
      <CtaSection cta={cta} />
    </>
  );
};

export default SectorDetailsPage;
