"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";

const faqs = [
  {
    id: 1,
    question: "How do solar panels work?",
    answer:
      "Solar panels convert sunlight into electricity using photovoltaic (PV) cells. These cells generate direct current (DC), which is then converted into usable alternating current (AC) for your home or business.",
  },
  {
    id: 2,
    question: "How much can I save with solar energy?",
    answer:
      "Savings depend on your energy usage and system size, but most customers reduce their electricity bills by 50–90%. Over time, solar can pay for itself through energy savings.",
  },
  {
    id: 3,
    question: "What is the lifespan of a solar panel system?",
    answer:
      "Most solar panels last 25–30 years with minimal maintenance. Inverters may need replacement after 10–15 years depending on usage.",
  },
  {
    id: 4,
    question: "Do solar panels work during cloudy days or at night?",
    answer:
      "Solar panels still generate electricity on cloudy days, though at reduced efficiency. At night, systems rely on grid power or battery storage if installed.",
  },
  {
    id: 5,
    question: "Is maintenance required for solar panels?",
    answer:
      "Solar systems require very little maintenance. Occasional cleaning and periodic inspections are enough to ensure optimal performance.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div
      onClick={onClick}
      className={` cursor-pointer transition-all
        ${
          isOpen
            ? "bg-secondary-600 border border-primary-500/30"
            : "bg-secondary-700 hover:bg-secondary-600"
        }`}
    >
      <div className="flex items-center justify-between px-5 py-3.5">
        <p className="text-[15px] text-white font-medium">{faq.question}</p>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 text-primary-400 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-5 pb-4">
          <p className="text-sm text-secondary-300 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [open, setOpen] = useState(1);

  return (
    <PageWrapper className="bg-secondary-500">
      <SectionHeader
        badge={"Got Questions?"}
        title={"Frequently Asked Questions"}
        description={
          "Everything you need to know about Wood Academy — answered clearly."
        }
        light
      />
      {/* Equal height layout */}
      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-[50%]">
          <div className="h-[250px] lg:h-[400px] overflow-hidden">
            <img
              src="/Images/panel-1.webp"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div className="w-full lg:w-[50%] flex flex-col">
          <div className="space-y-2.5 flex-1">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={open === faq.id}
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
