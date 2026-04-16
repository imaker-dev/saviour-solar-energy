import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import {
  PiggyBank,
  Clock,
  Settings,
  Zap,
  ShieldCheck,
  IndianRupee,
} from "lucide-react";

const leftBenefits = [
  {
    icon: PiggyBank,
    title: "Reduced Electricity Costs",
    desc: "Lower your monthly electricity bills with efficient solar systems designed to deliver consistent savings and long-term value.",
  },
  {
    icon: Clock,
    title: "End-to-End Support",
    desc: "From planning and approvals to installation and setup, our team guides you through every step of your solar journey.",
  },
  {
    icon: Settings,
    title: "Professional Installation",
    desc: "Our experienced team ensures safe and efficient installation, delivering optimal system performance and reliable energy output.",
  },
];

const rightBenefits = [
  {
    icon: Zap,
    title: "Clean Renewable Energy",
    desc: "Reduce carbon emissions and switch to sustainable solar energy that supports a cleaner environment and a greener future.",
  },
  {
    icon: IndianRupee,
    title: "Flexible Investment Plans",
    desc: "Affordable solar solutions with flexible payment options help you switch to solar energy without heavy upfront investment costs.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Warranty",
    desc: "High-quality solar systems backed by long-term warranty ensure peace of mind and dependable performance for many years ahead.",
  },
];

function BenefitItem({ icon: Icon, title, desc, align = "left" }) {
  const isRight = align === "right";

  return (
    <div
      className={`flex items-start gap-4 
      ${
        isRight
          ? "flex-row lg:flex-row-reverse text-left lg:text-right"
          : "flex-row text-left"
      }`}
    >
      {/* Icon */}
      <div className="w-[56px] h-[56px] rounded-full bg-primary-500 flex items-center justify-center shrink-0 shadow-md shadow-primary-500/20">
        <Icon size={22} color="white" strokeWidth={1.8} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[#1a2332] text-[17px] font-extrabold leading-snug">
          {title}
        </h3>
        <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function OurBenefits() {
  return (
    <PageWrapper className="bg-white">
      {/* Header */}
      <SectionHeader
        badge={"Our Benefits"}
        title={"Benefits of Switching to Solar Energy"}
        description={
          "Savior Solar Energy helps you reduce electricity costs, gain energy independence, and switch to clean, sustainable power with reliable solar solutions."
        }
      />

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-6 items-center">
        {/* Left */}
        <div className="order-3 lg:order-1 flex flex-col gap-10">
          {leftBenefits.map((b, i) => (
            <BenefitItem key={i} {...b} align="left" />
          ))}
        </div>

        {/* Center Image */}
        <div className="order-2 lg:order-2 flex items-end justify-center w-full lg:w-[340px] xl:w-[400px] shrink-0">
          <img
            src="/Images/solar-4.png"
            alt="Wind turbines and solar panels"
            className="w-full max-w-[450px]"
            style={{ maxHeight: "480px" }}
          />
        </div>

        {/* Right */}
        <div className="order-1 lg:order-3 flex flex-col gap-10">
          {rightBenefits.map((b, i) => (
            <BenefitItem key={i} {...b} align="right" />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
