"use client";

import PageWrapper from "@/app/components/page-wrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CtaBanner = () => {
  return (
    <PageWrapper
      className="relative overflow-hidden bg-secondary-500"
      topEdge
      bottomEdge
      edgeClassName="text-secondary-500"
    >
      {/* ---------------- DECORATIVE BACKGROUND ---------------- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:gap-16 lg:text-left">
        {/* Left Content */}
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6">
          <div className="hidden h-16 w-[5px] shrink-0 rounded-full bg-primary-500 sm:block sm:h-24" />

          <div className="max-w-3xl">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Let's Go Solar
            </span>
            <h2 className="text-2xl font-semibold leading-[1.2] text-white sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[1.15]">
              <span className="text-primary-500">Safest and Swiftest:</span>{" "}
              Securing
              <br className="hidden sm:block" />
              Clean, Safe, Renewable Energy
            </h2>
          </div>
        </div>

        {/* Right Button */}
        <Link href="/contact" className="btn btn-primary btn-shine group py-2">
          Get Free Quote
          <span className="btn-icon">
            <ArrowRight className="h-4 w-4 text-primary-500 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default CtaBanner;
