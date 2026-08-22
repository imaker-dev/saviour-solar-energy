"use client";

import PageWrapper from "@/app/components/page-wrapper";
import { Eyebrow } from "@/app/components/section-header";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

export default function SchemesDetailsPage({ scheme }) {
  return (
    <>
      {/* Hero row */}
      <PageWrapper
        key={`hero-${scheme.id}`}
        className="bg-white border-b border-gray-100"
        containerClassName="pt-24 lg:pt-20 grid lg:grid-cols-2 gap-12 items-end"
      >
        {/* Left */}
        <div>
          <Eyebrow>{scheme.eyebrow}</Eyebrow>

          <h1 className="text-4xl sm:text-5xl xl:text-[56px] font-semibold text-gray-950 leading-[1.1] tracking-tight mb-5">
            {scheme.headlinePrefix}{" "}
            <em className="not-italic text-primary-500">
              {scheme.headlineHighlight}
            </em>{" "}
            {scheme.headlineSuffix}
          </h1>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md mb-8">
            {scheme.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={scheme.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-primary"
            >
              {scheme.primaryCta.label}
              <ArrowUpRight size={15} />
            </a>
            <a
              href={scheme.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-secondary"
            >
              {scheme.secondaryCta.label}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="lg:pl-8">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              {scheme.perksTitle}
            </p>
            <ul className="space-y-3">
              {scheme.perks.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                    <Check
                      size={11}
                      className="text-primary-500"
                      strokeWidth={2.5}
                    />
                  </span>
                  <span className="text-sm text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {scheme.stats.map(({ val, label }) => (
              <div
                key={label}
                className="bg-gray-50 rounded-xl p-4 text-center"
              >
                <div className="text-xl font-bold text-gray-950 leading-none mb-1">
                  {val}
                </div>
                <div className="text-xs text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>

      {/* Detail slabs */}
      <DetailSlabs key={`details-${scheme.id}`} scheme={scheme} />

      {/* Process */}
      <PageWrapper
        key={`steps-${scheme.id}`}
        className="bg-white border-b border-gray-100"
      >
        <h2 className="text-xl font-bold text-gray-950 tracking-tight mb-8">
          {scheme.stepsTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {scheme.steps.map((s, i) => (
            <div
              key={s.title}
              className={`py-6 pr-8 ${
                i !== 0 ? "sm:pl-8 sm:border-l border-gray-100" : ""
              }`}
            >
              <p className="text-xs font-mono text-gray-300 mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-base font-semibold text-gray-950 mb-2">
                {s.title}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Detail slabs — an interactive comparison grid, generic over any    */
/*  scheme's detail cards (subsidy slabs, loan tiers, whatever comes   */
/*  next). Owns its own selection state so switching schemes always    */
/*  resets the active card via the `key` prop above.                   */
/* ------------------------------------------------------------------ */

function DetailSlabs({ scheme }) {
  const [active, setActive] = useState(0);
  const cols = Math.min(scheme.detailCards.length, 3);
  const gridColsClass =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 1
        ? "sm:grid-cols-1"
        : "sm:grid-cols-3";

  return (
    <PageWrapper className="bg-white border-b border-gray-100">
      <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
        <h2 className="text-xl font-bold text-gray-950 tracking-tight">
          {scheme.detailsTitle}
        </h2>
        <p className="text-xs text-gray-400">{scheme.detailsCaption}</p>
      </div>

      <div className={`grid grid-cols-1 ${gridColsClass} gap-4`}>
        {scheme.detailCards.map((c, i) => (
          <button
            key={c.tagValue}
            onClick={() => setActive(i)}
            className={`relative text-left p-6 border transition-all duration-150 ${
              active === i
                ? "border-secondary-950 bg-primary-500 text-white"
                : "border-gray-100 bg-gray-50 text-gray-950 hover:border-gray-300"
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-widest mb-3 text-gray-400">
              {c.tag}
            </p>
            <p className="text-3xl font-bold mb-4 leading-none">{c.tagValue}</p>
            <div
              className={`border-t pt-4 ${
                active === i ? "border-white/10" : "border-gray-200"
              }`}
            >
              <p className="text-xs mb-1 text-gray-400">{c.metricLabel}</p>
              <p className="text-2xl font-bold">{c.metricValue}</p>
              <p
                className={`text-xs mt-1 ${
                  active === i ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {c.note}
              </p>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-400 leading-relaxed">
        {scheme.detailsFootnote}
      </p>
    </PageWrapper>
  );
}
