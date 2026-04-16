import PageWrapper from "@/app/components/page-wrapper";
import React from "react";

const CtaBanner = () => {
  return (
    <PageWrapper
      className="bg-white"
      paddingY="py-0"
      containerClassName="bg-secondary-500 rounded-none mx-0 -mt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-10 py-9"
    >
      <h2 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight max-w-md">
        Smartest Way to Generate Electricity
      </h2>
      <a
        href="#"
        className="shrink-0 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-[15px] px-7 py-4 transition-colors duration-200 whitespace-nowrap"
      >
        Get in Touch
      </a>
    </PageWrapper>
  );
};

export default CtaBanner;
