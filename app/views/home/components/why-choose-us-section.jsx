import React from "react";
import { HandCoins, HardHat, Headphones, Trophy, Play } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import Link from "next/link";
import SectionHeader, { HighlightText } from "@/app/components/section-header";
import PlayButton from "@/app/components/play-button";
import Image from "next/image";

const features = [
  {
    icon: HandCoins,
    title: "Save Your Money",
    description:
      "Cut your monthly electricity bill with a solar system sized to your usage.",
  },
  {
    icon: HardHat,
    title: "Certified Engineer",
    description:
      "Every installation is handled by licensed, background-checked solar engineers.",
  },
  {
    icon: Headphones,
    title: "24 X 7 Support",
    description:
      "Our support team monitors your system and answers calls around the clock.",
  },
  {
    icon: Trophy,
    title: "Award Winning",
    description:
      "Recognized for installation quality and customer service across the region.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <SectionHeader
          badge="Why Choose Us"
          title={" Why Choose Our Green Energy Solutions"
          }
          highlight="Green Energy Solutions"
          
        />

        {/* Image + features */}
        <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image with play button */}
          <div className="relative w-full lg:max-w-none">
            <div className="overflow-hidden rounded-[1.75rem] shadow-2xl shadow-slate-900/15">
              <Image
                src="/Images/why-choose-us.webp"
                alt="Certified solar engineers on site reviewing a solar installation"
                width={800}
                height={900}
                className="h-auto w-full object-contain sm:h-[480px] sm:object-cover"
                priority
              />
            </div>

            <PlayButton
              // onClick={() => setPlayVideo(true)}
              className="group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 ring-1 ring-white/50 backdrop-blur-md transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 gap-x-14 gap-y-12 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group">
                <Icon
                  className="mb-6 h-12 w-12 text-secondary-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-primary-500"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2.5 max-w-[240px] text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
