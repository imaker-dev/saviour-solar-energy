import React from "react";
import {
  Sun,
  BatteryCharging,
  PlugZap,
  Wrench,
  Gauge,
  ArrowRight,
  Phone,
} from "lucide-react";
import { SITE_CONFIG } from "@/app/const";
import PageWrapper from "@/app/components/page-wrapper";
import Link from "next/link";
import Image from "next/image";


const stats = [
  { value: "1500+", label: "Solar Installations" },
  { value: "750+", label: "Happy Customers" },
  { value: "99%", label: "Satisfaction Rate" },
];

const tags = [
  { label: "Solar Panels", icon: Sun },
  { label: "Solar Batteries", icon: BatteryCharging },
  { label: "Solar Inverters", icon: PlugZap },
  { label: "System Maintenance", icon: Wrench },
  { label: "Energy Monitoring", icon: Gauge },
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
      src="/images/about-us.webp"
      alt="Certified solar engineers installing rooftop solar panels for a residential property"
      width={700}
      height={850}
      className="w-full object-cover lg:h-[520px]"
    />

    {/* Subtle gradient for tag legibility */}
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

    {/* Floating capability tags */}
    <div className="hidden absolute inset-x-0 bottom-5 lg:flex flex-wrap justify-center gap-2 px-5">
      {tags.map(({ label, icon: Icon }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/15 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/25 sm:text-sm"
        >
          <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          {label}
        </span>
      ))}
    </div>
  </div>
</div>

        {/* ---------- Content column ---------- */}
        <div className="relative">
          {/* Eyebrow */}
          <p className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary-500" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              About Us
            </span>
          </p>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            Powering Homes with
            <br />
            <span className="text-primary-500">Clean Solar Energy</span>
          </h2>

          {/* Body copy */}
          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-[17px]">
            We design, install, and maintain high-efficiency solar panel systems
            that lower electricity bills and reduce your home or business's
            carbon footprint. Our certified solar installers deliver dependable
            systems backed by long-term warranties and ongoing support.
          </p>

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
            <Link href="/about" className="btn btn-primary btn-shine">
              Discover Our Story
              <div className="btn-icon">
                <ArrowRight className="h-4 w-4 text-primary-500 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-primary-500/40 flex items-center justify-center shrink-0">
                <Phone
                  size={17}
                  className="text-primary-500"
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-0.5">
                  Have any questions?
                </p>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="text-[#1a1a1a] text-base font-bold"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
