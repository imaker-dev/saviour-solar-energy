"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  TrendingDown,
  Sun,
  Zap,
  Phone,
} from "lucide-react";
import PageWrapper from "../../components/page-wrapper";
import CTASection from "../home/components/cta-section";
import SectionHeader from "../../components/section-header";
import WorkingProcess from "../home/components/working-process";
import OurProjectSection from "../home/components/our-projects-section";
import Link from "next/link";
import FAQs from "../../components/faqs";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ hero, cta }) {
  if (!hero) return null;
  return (
    <PageWrapper className="relative bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-primary-600 bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-full mb-6">
            <Sun size={11} strokeWidth={2.5} />
            {hero.badge}
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-gray-950 leading-[1.05] tracking-tight mb-4">
            {hero.title}
          </h1>

          <p className="text-[15px] leading-relaxed text-gray-500 mb-8 max-w-md">
            {hero.description}
          </p>

          {cta?.button && (
            <Link href="/contact" className="btn btn-primary ">
              {cta.button}
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          )}

          {/* Stats */}
          {hero.stats?.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4">
              {hero.stats.map((s, i) => (
                <div key={i}>
                  <p className="text-xl sm:text-2xl font-black text-gray-950 leading-none">
                    {s.value}
                  </p>
                  <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-wider mt-1.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="relative order-first lg:order-last">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl shadow-gray-200/80">
            <img
              src={hero.image}
              alt={hero.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative blob */}
          <div className="pointer-events-none absolute -bottom-8 -right-8 w-52 h-52 rounded-full bg-amber-50 blur-3xl -z-10" />
        </div>
      </div>
    </PageWrapper>
  );
}

// ─── Content / Overview ───────────────────────────────────────────────────────
function Overview({ overview }) {
  if (!overview) return null;
  return (
    <PageWrapper className="py-12 sm:py-16">
      {/* ── Header ── */}
      <SectionHeader
        badge={overview.badge}
        title={overview.heading}
        description={overview.description}
        // align="start"
      />

      {/* ── Points — large number + content, 2 col ── */}
      {overview.points?.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {overview.points.map((point, i) => (
            <div
              key={i}
              className="group relative bg-white hover:bg-amber-50/40 px-6 py-7 transition-colors duration-200 overflow-hidden"
            >
              {/* Content */}
              <div className="relative">
                <p className="text-[11px] font-black text-amber-500 uppercase tracking-[0.16em] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[15px] font-black text-gray-950 leading-snug mb-2">
                  {point.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Note ── */}
      {overview.note && (
        <div className="mt-6 flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
          <div className="mt-0.5 h-4 w-4 shrink-0 flex items-center justify-center rounded-full bg-amber-500">
            <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
              <path
                d="M6 1v5M6 9v1"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-[12.5px] leading-relaxed text-gray-500">
            {overview.note}
          </p>
        </div>
      )}
    </PageWrapper>
  );
}
// ─── Benefits ─────────────────────────────────────────────────────────────────
function Benefits({ benefits }) {
  if (!benefits?.length) return null;
  return (
    <PageWrapper className=" bg-secondary-500">
      <SectionHeader
        badge={"Benefits"}
        title={"Why go solar today"}
        description={
          "Every system we install is backed by long-term support and built for real savings."
        }
        light={true}
      />

      {/* Benefits grid */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="group flex flex-col gap-3 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.06] hover:border-primary-500/30 rounded-md px-4 py-5 transition-all duration-200"
          >
            {/* Index */}
            <span className="text-[10px] font-black text-primary-500/70 uppercase tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Amber line accent */}
            <div className="h-px w-8 bg-primary-500/40 group-hover:w-12 group-hover:bg-primary-500/70 transition-all duration-300" />

            <div>
              <p className="text-[13.5px] font-bold text-white leading-snug mb-1.5">
                {b.title}
              </p>
              <p className="text-[12px] text-white/40 leading-relaxed">
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

// ─── System Sizes ─────────────────────────────────────────────────────────────
function SystemSizes({ systemSizes }) {
  if (!systemSizes?.length) return null;
  return (
    <PageWrapper>
      {/* Header */}
      <SectionHeader
        badge={"System Sizes"}
        title={"Find your fit"}
        description={`Sized to match your home's energy needs.`}
      />

      {/* Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        {systemSizes.map((item, i) => {
          const isPopular = i === 1;
          return (
            <div
              key={i}
              className={`relative rounded-md transition-all duration-200 ${
                isPopular
                  ? "bg-secondary-500 shadow-xl shadow-gray-900/20"
                  : "bg-gray-100 border border-gray-100 hover:border-primary-200 hover:shadow-md hover:shadow-primary-50"
              }`}
            >
              {/* Popular badge */}
              {isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary-500 text-white text-[9.5px] font-black uppercase tracking-[0.16em] px-3 py-1 rounded-full shadow-md shadow-amber-500/30">
                  Most Popular
                </span>
              )}

              <div className="p-6 pt-7">
                {/* Type */}
                <p
                  className={`text-[10.5px] font-bold uppercase tracking-widest mb-3 ${isPopular ? "text-white/30" : "text-gray-400"}`}
                >
                  {item.type}
                </p>

                {/* Capacity */}
                <p
                  className={`text-[38px] font-black leading-none tracking-tight mb-1 ${isPopular ? "text-white" : "text-gray-950"}`}
                >
                  {item.size}
                </p>
                <p
                  className={`text-[11.5px] font-medium mb-6 ${isPopular ? "text-white/30" : "text-gray-400"}`}
                >
                  System capacity
                </p>

                {/* Savings */}
                <div
                  className={`flex items-center justify-between rounded-xl px-3.5 py-3 ${isPopular ? "bg-white/[0.07]" : "bg-gray-50 border border-gray-100"}`}
                >
                  <span
                    className={`text-[11px] font-semibold ${isPopular ? "text-white/30" : "text-gray-400"}`}
                  >
                    Est. savings
                  </span>
                  <div className="flex items-center gap-1.5">
                    <TrendingDown
                      size={12}
                      className="text-emerald-500"
                      strokeWidth={2.5}
                    />
                    <span
                      className={`text-[13px] font-black tabular-nums ${isPopular ? "text-emerald-400" : "text-emerald-600"}`}
                    >
                      {item.savings}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
const SolutionDetailsPage = ({ solution }) => {
  const {
    hero,
    overview,
    benefits,
    systemSizes,
    process,
    projects,
    faqs,
    cta,
  } = solution || {};

  return (
    <div className="min-h-screen bg-white">
      <Hero hero={hero} cta={cta} />

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <Overview overview={overview} />
      <Benefits benefits={benefits} />
      <SystemSizes systemSizes={systemSizes} />
      <WorkingProcess />
      <OurProjectSection />
      <FAQs faqs={faqs} />
      <CTASection
        title={cta.title}
        description={cta.description}
        light={true}
      />
    </div>
  );
};

export default SolutionDetailsPage;
