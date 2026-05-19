"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Zap,
  Shield,
  Star,
  Phone,
  Calendar,
  BarChart3,
  Image as ImageIcon,
} from "lucide-react";
import PageWrapper from "../../components/page-wrapper";
import Link from "next/link";
import SectionHeader from "../../components/section-header";
import CTASection from "../home/components/cta-section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import FAQs from "../../components/faqs";
import OurProjectSection from "../home/components/our-projects-section";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ hero }) {
  if (!hero) return null;
  return (
    <PageWrapper className="relative bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Copy */}
        <div className="order-2 lg:order-1">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-full mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            {hero.badge}
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-gray-950 leading-[1.06] tracking-tight mb-3">
            {hero.title}
          </h1>

          {/* Description */}
          <p className="text-[15px] leading-relaxed text-gray-500 mb-8 max-w-lg">
            {hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            {hero.primaryCTA && (
              <Link href={hero.primaryCTA.href} className="btn btn-primary">
                {hero.primaryCTA.label}
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            )}
            {hero.secondaryCTA && (
              <a
                href={hero.secondaryCTA.href}
                className="btn  border border-gray-200 hover:border-gray-400 text-gray-700 hover:text-gray-900"
              >
                <Calendar size={14} strokeWidth={2} />
                {hero.secondaryCTA.label}
              </a>
            )}
          </div>

          {/* Stats */}
          {hero.stats?.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4">
              {hero.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl sm:text-3xl font-black text-gray-950 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right — Image */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl shadow-gray-200">
            <img
              src={hero.image}
              alt={hero.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.parentNode.classList.add(
                  "flex",
                  "items-center",
                  "justify-center",
                );
                e.target.remove();
                const el = document.createElement("div");
                el.className = "text-gray-300";
                e.target.parentNode.appendChild(el);
              }}
            />
          </div>
          {/* Decorative blob */}
          <div className="pointer-events-none absolute -bottom-6 -right-6 w-48 h-48 bg-amber-50 rounded-full blur-3xl opacity-60 -z-10" />
        </div>
      </div>
    </PageWrapper>
  );
}

// ─── Overview ─────────────────────────────────────────────────────────────────
function Overview({ overview }) {
  if (!overview) return null;
  return (
    <PageWrapper className="bg-secondary-500">
      <SectionHeader
        badge={"Overview"}
        title={overview.title}
        className="mb-4 lg:mb-6"
        align="start"
        light={true}
      />

      <p className="text-[15px] leading-relaxed text-gray-400 max-w-3xl">
        {overview.description}
      </p>
    </PageWrapper>
  );
}

function Features({ features }) {
  if (!features?.length) return null;

  return (
    <PageWrapper>
      {/* Header */}
      <SectionHeader
        badge={"Features"}
        title={`What's Included`}
        align="start"
      />

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden">
        {features.map((f, i) => (
          <div
            key={i}
            className="group bg-white hover:bg-gray-50 transition-colors duration-150 cursor-default p-7 flex flex-col gap-8 justify-between"
          >
            {/* Top row — index + icon placeholder */}
            <div className="flex items-start justify-between">
              <span className="text-[10.5px] font-semibold tracking-widest uppercase text-gray-200 group-hover:text-primary-300 transition-colors duration-150">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-[13.5px] font-semibold text-gray-900 leading-snug">
                {f.title}
              </h3>
              <p className="text-[12.5px] text-gray-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

function Benefits({ benefits }) {
  if (!benefits?.length) return null;

  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
        {/* Left */}
        <div className="lg:sticky lg:top-8">
          <SectionHeader
            badge={"Benefits"}
            title={"Why Choose Our Solution"}
            description={"Built around real savings and long-term reliability."}
            align="start"
          />
        </div>

        {/* Right */}
        <div className="divide-y divide-gray-100">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group flex items-start gap-5 py-5 first:pt-0 last:pb-0 hover:bg-gray-50 px-3 -mx-3 rounded-xl transition-colors duration-150 cursor-default"
            >
              {/* Index */}
              <div className="shrink-0 flex flex-col items-center gap-1 pt-0.5">
                <span className="text-[11px] font-bold tabular-nums text-gray-200 group-hover:text-primary-400 transition-colors duration-150">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-1">
                <p className="text-[13.5px] font-semibold text-gray-900 leading-snug">
                  {b.title}
                </p>
                <p className="text-[12.5px] text-gray-400 leading-relaxed">
                  {b.description}
                </p>
              </div>

              {/* Check */}
              <div className="shrink-0 w-5 h-5 rounded-full bg-gray-100 group-hover:bg-primary-50 flex items-center justify-center transition-colors duration-150 mt-0.5">
                <svg
                  className="w-2.5 h-2.5 text-gray-300 group-hover:text-primary-400 transition-colors duration-150"
                  viewBox="0 0 10 8"
                  fill="none"
                >
                  <path
                    d="M1 4l2.5 2.5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

// ─── Specifications ───────────────────────────────────────────────────────────
function Specifications({ specifications }) {
  if (!specifications?.length) return null;

  return (
    <PageWrapper>
      <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">
        {/* Left — Label + heading */}
        <SectionHeader
          badge={"Specifications"}
          title={"Technical Details"}
          description={
            "Every system we deploy meets strict quality benchmarks and industry standards for long-term reliability."
          }
          align="start"
        />

        {/* Right — Spec cards */}
        <div className="grid sm:grid-cols-2 gap-3">
          {specifications.map((spec, i) => (
            <div
              key={i}
              className="group relative bg-white rounded border border-gray-100 hover:border-primary-200 hover:shadow-md hover:shadow-primary-50/80 px-5 py-5 transition-all duration-200 overflow-hidden"
            >
              {/* Index watermark */}
              <span className="pointer-events-none absolute top-3 right-4 text-5xl font-black text-gray-50 group-hover:text-primary-50 leading-none select-none transition-colors duration-200">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Dot accent */}
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-primary-400 group-hover:bg-primary-500 transition-colors" />
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-gray-400">
                  {spec.label}
                </p>
              </div>

              {/* Value */}
              <p className="text-[22px] font-black text-gray-950 leading-none tracking-tight">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

function UseCases({ useCases }) {
  if (!useCases?.length) return null;

  return (
    <PageWrapper>
      {/* Header */}
      <SectionHeader
        badge={"Use Cases"}
        title={`Who It's Built For`}
        align="start"
      />

      {/* List */}
      <div className="space-y-0">
        {useCases.map((uc, i) => (
          <div
            key={i}
            className="group grid grid-cols-[44px_1fr_auto] items-start gap-6 py-6 border-t border-gray-100 last:border-b hover:bg-gray-50 px-2 -mx-2 rounded-lg transition-colors duration-150 cursor-default"
          >
            {/* Index */}
            <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-300 group-hover:text-primary-400 transition-colors duration-150 pt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="space-y-1">
              <h3 className="text-[14px] font-semibold text-gray-900 leading-snug">
                {uc.title}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed max-w-xl">
                {uc.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
// ─── Main Page ────────────────────────────────────────────────────────────────
const ServiceDetailsPage = ({ service }) => {
  const { hero, overview, features, benefits, specifications, useCases, faqs } =
    service || {};

  return (
    <>
      <Hero hero={hero} />

      {/* Thin accent divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <Overview overview={overview} />
      <Features features={features} />
      <Benefits benefits={benefits} />
      <Specifications specifications={specifications} />
      <UseCases useCases={useCases} />
      <OurProjectSection />
      <FAQs faqs={faqs} />
      <CTASection
        title="Ready to go solar?"
        description="Get a free quote and site survey within 24 hours."
        light={true}
      />
    </>
  );
};

export default ServiceDetailsPage;
