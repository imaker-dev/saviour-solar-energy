'use client'
import { useState } from "react";
import PageWrapper from "./page-wrapper";
import SectionHeader from "./section-header";

// ─── FAQs ─────────────────────────────────────────────────────────────────────
function FAQs({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  if (!faqs?.length) return null;

  return (
    <PageWrapper className="py-12 sm:py-14">
      <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
        {/* ── Left sticky label ── */}
        <div className="lg:sticky lg:top-10">
          <SectionHeader
            badge={"FAQs"}
            title={"Common questions"}
            description={
              "Everything you need to know before making the switch to solar."
            }
            align="start"
          />

          {/* Progress indicator */}
          <div className="flex gap-1.5">
            {faqs.map((_, i) => (
              <button
                key={i}
                onClick={() => setOpenIndex(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  openIndex === i
                    ? "w-6 bg-amber-500"
                    : "w-2 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Right accordion ── */}
        <div className="divide-y divide-gray-100">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="group py-1">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-4 text-left"
                >
                  <p
                    className={`text-[14px] font-semibold leading-snug transition-colors duration-150 ${
                      isOpen
                        ? "text-gray-950"
                        : "text-gray-500 group-hover:text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </p>

                  {/* +/− */}
                  <div
                    className={`mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center rounded-full transition-all duration-200 ${
                      isOpen
                        ? "bg-amber-500"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    }`}
                  >
                    <span className="relative flex h-3 w-3 items-center justify-center">
                      <span
                        className={`absolute block h-px w-2.5 rounded-full transition-colors duration-200 ${isOpen ? "bg-white" : "bg-gray-500"}`}
                      />
                      <span
                        className={`absolute block w-px rounded-full transition-all duration-300 ${isOpen ? "h-0 bg-white opacity-0" : "h-2.5 bg-gray-500 opacity-100"}`}
                      />
                    </span>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[13.5px] leading-relaxed text-gray-500 max-w-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}

export default FAQs;