import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { Zap, PiggyBank, Home, ShieldCheck, Wrench, Leaf } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Energy Independence",
      desc: "Reduce dependence on grid power and protect yourself from rising electricity costs with reliable solar energy.",
      icon: Zap,
    },
    {
      title: "Cost Savings",
      desc: "Lower your electricity bills with efficient solar systems designed to deliver long-term financial savings.",
      icon: PiggyBank,
    },
    {
      title: "Reliable Performance",
      desc: "High-quality solar panels and systems ensure consistent energy generation and dependable performance over time.",
      icon: ShieldCheck,
    },
    {
      title: "Expert Installation",
      desc: "Professional installation with complete support ensures your solar system operates efficiently from day one.",
      icon: Wrench,
    },
    {
      title: "Low Maintenance",
      desc: "Durable solar solutions with minimal maintenance requirements for hassle-free and long-lasting operation.",
      icon: Leaf,
    },
  ];

  return (
    <PageWrapper
      className="bg-white"
      containerClassName="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
    >
      {/* LEFT SIDE */}
      <div>
        <SectionHeader
          badge={"Why Choose Us"}
          title={"Reliable and Affordable Solar Energy Solutions"}
          align="start"
        />

        <div className="overflow-hidden">
          <img
            src="/Images/solar-3.webp"
            alt="Solar panel installation team working on rooftop system"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-6 lg:gap-10">
        {/* Top Paragraph */}
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-md">
          Savior Solar Energy delivers high-quality solar solutions designed for
          performance, savings, and long-term reliability. We combine advanced
          technology with expert service to help you switch to clean and
          efficient energy.
        </p>

        {/* Features */}
        <div className="flex flex-col gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={i} className="flex items-start gap-5">
                <div className="w-14 h-14 bg-primary-500 flex items-center justify-center shrink-0">
                  <Icon size={24} className="text-white" />
                </div>

                <div>
                  <h3 className="text-[#1f2937] font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
