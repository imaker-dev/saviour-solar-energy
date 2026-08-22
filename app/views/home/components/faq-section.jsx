"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader, { HighlightText } from "@/app/components/section-header";

const faqs = [
  {
    id: 1,
    question: "What are the benefits of installing solar panels?",
    answer:
      "Solar panels lower your monthly electricity bills, reduce your carbon footprint, and increase your property's value. Most systems pay for themselves within a few years through energy savings alone.",
  },
  {
    id: 2,
    question: "How do wind turbines generate electricity?",
    answer:
      "Wind turbines use rotating blades to capture kinetic energy from moving air. That motion spins a generator, converting mechanical energy into electricity that can power homes or feed into the grid.",
  },
  {
    id: 3,
    question: "What maintenance is required for solar panels?",
    answer:
      "Solar systems need very little upkeep — occasional cleaning to clear dust or debris and a yearly inspection to check wiring and inverter performance are usually enough to keep them running efficiently.",
  },
  {
    id: 4,
    question: "Can I use solar panels to power my entire home?",
    answer:
      "Yes. With a properly sized system — and battery storage for nighttime or low-sun periods — solar can cover all of a home's electricity needs, not just offset a portion of the bill.",
  },
  {
    id: 5,
    question: "Why is renewable energy important?",
    answer:
      "Renewable energy reduces reliance on fossil fuels, cuts greenhouse gas emissions, and provides a more stable, sustainable power supply for the long term.",
  },
  {
    id: 6,
    question: "Do I need batteries to store solar energy?",
    answer:
      "Batteries aren't required, but they let you store excess energy for use at night or during outages instead of sending it back to the grid, giving you more independence from utility power.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl transition-colors duration-300 ${
        isOpen
          ? "bg-primary-500 shadow-lg shadow-primary-700/20"
          : "bg-white shadow-sm shadow-slate-900/5 ring-1 ring-slate-900/5 hover:ring-slate-900/10"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-4.5"
      >
        <span
          className={`text-[15px] font-semibold sm:text-base ${
            isOpen ? "text-white" : "text-slate-900"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`shrink-0 transition-colors ${
            isOpen ? "text-primary-400" : "text-slate-400"
          }`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      {/* Grid-rows trick animates smoothly to the answer's natural height,
          regardless of how long the text is. */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-white/80 sm:px-6 sm:pb-5">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [open, setOpen] = useState(faqs[0].id);

  return (
    <PageWrapper
      className="bg-gray-100"
      topEdge
      bottomEdge
      edgeClassName="text-gray-100"
    >
      <SectionHeader
        badge={"FAQ"}
        title={
          <>
            Have Any Questions? <br /> <HighlightText>Look Here.</HighlightText>
          </>
        }
      />

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={open === faq.id}
            onClick={() => setOpen(open === faq.id ? null : faq.id)}
          />
        ))}
      </div>
    </PageWrapper>
  );
}
