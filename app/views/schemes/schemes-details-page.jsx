"use client";

import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import PageWrapper from "@/app/components/page-wrapper";
import { Eyebrow } from "@/app/components/section-header";

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function SchemesDetailsPage({ scheme }) {
  return (
    <>
      <HeroSection scheme={scheme} />
      <EligibilitySection scheme={scheme} />
      <DetailSection scheme={scheme} />
      <ProcessSection scheme={scheme} />
      <FaqSection scheme={scheme} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function HeroSection({ scheme }) {
  const { hero } = scheme;

  return (
    <PageWrapper
      key={`hero-${scheme.id}`}
      className="bg-white border-b border-gray-100"
      containerClassName="pt-24 lg:pt-20 grid lg:grid-cols-2 gap-12 items-end"
    >
      {/* Left */}
      <div>
        <Eyebrow>{hero.eyebrow}</Eyebrow>

        <h1 className="text-4xl sm:text-5xl xl:text-[56px] font-semibold text-gray-950 leading-[1.1] tracking-tight mb-5">
          {hero.title.prefix}{" "}
          <em className="not-italic text-primary-500">
            {hero.title.highlight}
          </em>{" "}
          {hero.title.suffix}
        </h1>

        <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md mb-8">
          {hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <SchemeAction action={hero.actions.primary} primary />
          <SchemeAction action={hero.actions.secondary} />
        </div>

        <BenefitsCard benefits={hero.benefits} />
      </div>

      {/* Right */}
      <div className="lg:pl-8">
        {hero.image?.src && (
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-50">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <Highlights highlights={hero.highlights} />
      </div>
    </PageWrapper>
  );
}

function SchemeAction({ action, primary = false }) {
  if (!action) return null;

  return (
    <a
      href={action.href}
      {...(action.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`btn btn-lg ${primary ? "btn-primary" : "btn-secondary"}`}
    >
      {action.label}
      {action.external && <ArrowUpRight size={15} />}
    </a>
  );
}

function BenefitsCard({ benefits }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
        {benefits.title}
      </p>

      <ul className="space-y-3">
        {benefits.items.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
              <Check size={11} className="text-primary-500" strokeWidth={2.5} />
            </span>
            <span className="text-sm text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Highlights({ highlights }) {
  if (!highlights?.length) return null;

  return (
    <div className="grid grid-cols-3 gap-3">
      {highlights.map(({ value, label }) => (
        <div key={label} className="bg-gray-50 rounded-xl p-4 text-center">
          <div className="text-xl font-bold text-gray-950 leading-none mb-1">
            {value}
          </div>
          <div className="text-xs text-gray-400">{label}</div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Eligibility — new section, answers "do I qualify?" up front         */
/* ------------------------------------------------------------------ */

function EligibilitySection({ scheme }) {
  const { eligibility } = scheme;
  if (!eligibility?.items?.length) return null;

  return (
    <PageWrapper
      id="eligibility"
      className="bg-gray-50 border-b border-gray-100 scroll-mt-20"
    >
      <h2 className="text-xl font-bold text-gray-950 tracking-tight mb-6">
        {eligibility.title}
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {eligibility.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100"
          >
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
              <Check size={11} className="text-primary-500" strokeWidth={2.5} />
            </span>
            <span className="text-sm text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}

/* ------------------------------------------------------------------ */
/* Details                                                             */
/* ------------------------------------------------------------------ */

function DetailSection({ scheme }) {
  const { details } = scheme;
  if (!details?.columns?.length) return null;

  return (
    <PageWrapper className="bg-white border-b border-gray-100">
      <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
        <h2 className="text-xl font-bold text-gray-950 tracking-tight">
          {details.title}
        </h2>
        {details.caption && (
          <p className="text-xs text-gray-400">{details.caption}</p>
        )}
      </div>

      <DetailColumns
        columns={details.columns}
        defaultActive={details.defaultActive}
      />

      {details.capNotice && (
        <div className="mt-4 flex items-start gap-2 bg-primary-50 border border-primary-100 rounded-xl px-4 py-3">
          <span className="text-sm text-primary-700 leading-relaxed">
            {details.capNotice}
          </span>
        </div>
      )}
    </PageWrapper>
  );
}

function DetailColumns({ columns, defaultActive }) {
  const initialIndex = Math.max(
    columns.findIndex((c) => c.value === defaultActive),
    0
  );
  const [active, setActive] = useState(initialIndex);

  const columnCount = Math.min(columns.length, 3);
  const gridColsClass =
    columnCount === 1
      ? "sm:grid-cols-1"
      : columnCount === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 ${gridColsClass} gap-4`}>
      {columns.map((column, index) => {
        const isActive = active === index;

        return (
          <button
            key={`${column.label}-${column.value}`}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={isActive}
            className={`relative text-left p-6 rounded-2xl border transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${
              isActive
                ? "border-secondary-950 bg-primary-500 text-white"
                : "border-gray-100 bg-gray-50 text-gray-950 hover:border-gray-300"
            }`}
          >
            <p
              className={`text-xs font-medium uppercase tracking-widest mb-3 ${
                isActive ? "text-white/60" : "text-gray-400"
              }`}
            >
              {column.label}
            </p>

            <p className="text-3xl font-bold mb-4 leading-none">
              {column.value}
            </p>

            {column.metric && (
              <div
                className={`border-t pt-4 ${
                  isActive ? "border-white/10" : "border-gray-200"
                }`}
              >
                <p
                  className={`text-xs mb-1 ${
                    isActive ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  {column.metric.label}
                </p>
                <p className="text-2xl font-bold">{column.metric.value}</p>
                {column.note && (
                  <p
                    className={`text-xs mt-1 ${
                      isActive ? "text-white/60" : "text-gray-500"
                    }`}
                  >
                    {column.note}
                  </p>
                )}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

function ProcessSection({ scheme }) {
  const { process } = scheme;
  if (!process?.steps?.length) return null;

  return (
    <PageWrapper className="bg-white border-b border-gray-100">
      <h2 className="text-xl font-bold text-gray-950 tracking-tight mb-8">
        {process.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {process.steps.map((step, index) => (
          <div
            key={step.title}
            className={`py-6 pr-8 ${
              index !== 0 ? "sm:pl-8 sm:border-l border-gray-100" : ""
            }`}
          >
            <p className="text-xs font-mono text-gray-300 mb-3">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="text-base font-semibold text-gray-950 mb-2">
              {step.title}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ — new section, single-open accordion                            */
/* ------------------------------------------------------------------ */

function FaqSection({ scheme }) {
  const { faq } = scheme;
  const [openIndex, setOpenIndex] = useState(null);

  if (!faq?.length) return null;

  return (
    <PageWrapper className="bg-white">
      <h2 className="text-xl font-bold text-gray-950 tracking-tight mb-8">
        Common questions
      </h2>

      <div className="divide-y divide-gray-100 border-y border-gray-100">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                <span className="text-sm sm:text-base font-semibold text-gray-950">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-gray-400 transition-transform duration-150 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <p className="pb-5 text-sm text-gray-500 leading-relaxed max-w-2xl">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
}