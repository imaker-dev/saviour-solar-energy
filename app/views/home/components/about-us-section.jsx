import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/app/const";
import PageWrapper from "@/app/components/page-wrapper";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/app/components/section-header";

const stats = [
  { value: "1500+", label: "Solar Installations" },
  { value: "750+", label: "Happy Customers" },
  { value: "99%", label: "Satisfaction Rate" },
];

export default function AboutUsSection() {
  return (
    <PageWrapper>
      <div className="relative mx-auto grid  grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* ---------- Image column ---------- */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none lg:max-w-none">
          {/* Frame */}
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-900/10">
            <Image
              src="/Images/about.webp"
              alt="Certified solar engineers installing rooftop solar panels for a residential property"
              width={700}
              height={850}
              className="w-full object-cover lg:h-[520px]"
            />
          </div>
        </div>

        {/* ---------- Content column ---------- */}
        <div className="relative">
          <SectionHeader
            badge={"About Us"}
            title={"Powering Homes with Clean Solar Energy"}
            highlight={"Clean Solar Energy"}
            description={` We design, install, and maintain high-efficiency solar panel systems
            that lower electricity bills and reduce your home or business's
            carbon footprint. Our certified solar installers deliver dependable
            systems backed by long-term warranties and ongoing support.`}
            align={"start"}
          />

          {/* Stats */}
          <div className="mt-10 flex divide-x divide-slate-200">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex-1 ${i === 0 ? "pl-0" : "pl-6"} pr-6`}
              >
                <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA + trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-8">
            <Link href="/about" className="btn btn-lg btn-primary btn-shine">
              Discover Our Story
              <div className="btn-icon">
                <ArrowRight className="h-4 w-4 text-primary-500 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* Phone */}
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary-500/40">
                <Phone
                  size={17}
                  className="text-primary-500"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="mb-0.5 text-xs text-gray-400">
                  Have any questions?
                </p>

                <p className="text-base font-bold text-[#1a1a1a]">
                  {SITE_CONFIG.contact.phone}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
