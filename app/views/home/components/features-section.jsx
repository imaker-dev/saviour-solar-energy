import React from "react";
import { Headphones, Package, Wrench } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";

const FEATURES = [
  {
    icon: Package,
    title: "Eco Friendly",
    copy: "Environment Sustainable Products",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    copy: "Effortless upkeep solution.",
  },
  {
    icon: Headphones,
    title: "Affordable Price",
    copy: "Budget-Friendly Cost",
  },
];

const FeaturesSection = () => {
  return (
    <PageWrapper
      className="bg-gray-100"
      topEdge
      bottomEdge
      edgeClassName="text-gray-100"
      paddingY="py-8 sm:py-10 lg:py-16"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-16">
        {FEATURES.map(({ icon: Icon, title, copy }) => (
          <div key={title} className="flex items-center gap-3 sm:gap-4">
            {/* Icon */}
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14 lg:h-16 lg:w-16">
              <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full bg-secondary-500 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />

              <Icon
                className="relative z-10 h-8 w-8 text-primary-500 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                strokeWidth={1.8}
              />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold leading-tight text-primary-500 sm:text-xl lg:text-2xl lg:leading-none">
                {title}
              </h3>

              <p className="mt-1 text-sm leading-relaxed text-gray-600 sm:text-[15px] lg:text-lg">
                {copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default FeaturesSection;
