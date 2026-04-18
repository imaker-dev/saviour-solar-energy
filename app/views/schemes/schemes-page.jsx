"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Sun } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import PageHeader from "../../components/page-header";

const slabs = [
  { kw: "1 kW", subsidy: "₹30,000", monthly: "₹1,200" },
  { kw: "2 kW", subsidy: "₹60,000", monthly: "₹2,400" },
  { kw: "3 kW", subsidy: "₹78,000", monthly: "₹3,600" },
];

const steps = [
  {
    n: "01",
    title: "Register",
    body: "Sign up on the PM Surya Ghar portal using your electricity consumer number.",
  },
  {
    n: "02",
    title: "Apply",
    body: "Submit documents online. Choose your installer and panel capacity.",
  },
  {
    n: "03",
    title: "Install",
    body: "We complete the rooftop installation with net meter setup.",
  },
  {
    n: "04",
    title: "Receive",
    body: "Subsidy is credited directly to your bank account within 30 days.",
  },
];

const perks = [
  "300 units free electricity per month",
  "Sell surplus units back to the grid",
  "25-year manufacturer warranty",
  "No hidden charges or commissions",
];

export default function SchemesPage() {
  const [active, setActive] = useState(1);

  return (
    <>
      <PageHeader title={"Solar Subsidy Scheme"} />
      {/* Hero row */}
      <PageWrapper
        className="bg-white border-b border-gray-100"
        containerClassName="grid lg:grid-cols-2 gap-12 items-end "
      >
        {/* Left */}
        <div>
          <div className="text-xs font-semibold text-primary-500 uppercase tracking-widest mb-6">
            Solar Subsidy
          </div>

          <h1
            className="text-4xl sm:text-5xl xl:text-[56px] font-bold text-gray-950 leading-[1.1] tracking-tight mb-5"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Get up to <em className="not-italic text-primary-500">₹78,000</em>{" "}
            subsidy on rooftop solar
          </h1>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md mb-8">
            The central government covers a significant portion of your solar
            installation cost. Apply once — save on electricity for 25 years.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://consumer.pmsuryaghar.gov.in/consumer/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary "
            >
              Apply for Subsidy
              <ArrowUpRight size={15} />
            </a>
            <a
              href="https://pmsuryaghar.gov.in/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-gray-200 hover:border-gray-300 text-gray-700"
            >
              Official Scheme Info
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="lg:pl-8">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              What you get
            </p>
            <ul className="space-y-3">
              {perks.map((p) => (
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
            {[
              { val: "4 Yrs", label: "Avg. payback" },
              { val: "25 Yrs", label: "Panel warranty" },
              { val: "1 Cr+", label: "Homes targeted" },
            ].map(({ val, label }) => (
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

      {/* Subsidy slabs */}
      <PageWrapper className="bg-white border-b border-gray-100">
        <div className="flex items-baseline justify-between mb-8 gap-4 flex-wrap">
          <h2 className="text-xl font-bold text-gray-950 tracking-tight">
            Subsidy by system size
          </h2>
          <p className="text-xs text-gray-400">
            Central Govt. figures · 2024–25
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {slabs.map((s, i) => (
            <button
              key={s.kw}
              onClick={() => setActive(i)}
              className={`relative text-left  p-6 border transition-all duration-150 ${
                active === i
                  ? "border-secondary-950 bg-secondary-500 text-white"
                  : "border-gray-100 bg-gray-50 text-gray-950 hover:border-gray-300"
              }`}
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3 text-gray-400">
                System Size
              </p>
              <p className="text-3xl font-bold mb-4 leading-none">{s.kw}</p>
              <div
                className={`border-t pt-4 ${active === i ? "border-white/10" : "border-gray-200"}`}
              >
                <p className="text-xs mb-1 text-gray-400">Govt. subsidy</p>
                <p className="text-2xl font-bold">{s.subsidy}</p>
                <p
                  className={`text-xs mt-1 ${active === i ? "text-gray-400" : "text-gray-500"}`}
                >
                  Save ~{s.monthly} / month on bills
                </p>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-4 text-xs text-gray-400 leading-relaxed">
          Systems above 3 kW up to 10 kW receive ₹18,000/kW. Additional state
          subsidies may apply in Gujarat.
        </p>
      </PageWrapper>

      {/* Process */}
      <PageWrapper className="bg-white border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-950 tracking-tight mb-8">
          How it works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`py-6 pr-8 ${i !== 0 ? "sm:pl-8 sm:border-l border-gray-100" : ""}`}
            >
              <p className="text-xs font-mono text-gray-300 mb-3">{s.n}</p>
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
