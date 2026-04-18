"use client";

import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { ArrowRight, IndianRupee, Check } from "lucide-react";
import Link from "next/link";

// Static data (outside component = better performance)
const STATS = [
  {
    label: "Maximum subsidy",
    value: "78,000",
    suffix: "For 3 kW and above",
  },
  {
    label: "Subsidy rate",
    value: "30,000",
    extra: "/kW",
    suffix: "For first 2 kW",
  },
  {
    label: "Monthly savings",
    value: "3,600",
    suffix: "With 3 kW system",
  },
];

const FEATURES = [
  "300 units free electricity monthly",
  "25-year panel warranty",
  "Direct bank transfer",
];

// Reusable components
function StatCard({ label, value, extra, suffix }) {
  return (
    <div className="bg-gray-100 rounded-xl p-6 text-center">
      <p className="text-sm text-gray-500 mb-2">{label}</p>

      <div className="flex items-baseline justify-center gap-1">
        <IndianRupee size={18} className="text-gray-700" />
        <span className="text-3xl font-medium text-gray-900">{value}</span>
        {extra && <span className="text-gray-400 text-sm">{extra}</span>}
      </div>

      <p className="text-xs text-gray-400 mt-1">{suffix}</p>
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-2">
      <Check size={14} className="text-gray-400" />
      <span className="text-sm text-gray-600">{text}</span>
    </div>
  );
}

export default function SolarSubsidyTeaser() {
  return (
    <PageWrapper className="bg-white">
      <SectionHeader
        badge="Government Scheme"
        title="Solar Rooftop Subsidy"
        description="PM Surya Ghar: Muft Bijli Yojana"
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Stats */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 mb-8 sm:grid sm:grid-cols-3 sm:overflow-visible">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {FEATURES.map((feature) => (
            <FeatureItem key={feature} text={feature} />
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/schemes"
          className="btn btn-primary inline-flex items-center gap-2"
        >
          View subsidy details
          <ArrowRight size={16} />
        </Link>
      </div>
    </PageWrapper>
  );
}
