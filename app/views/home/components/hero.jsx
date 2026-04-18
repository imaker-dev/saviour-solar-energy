import { ArrowUpRight } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper.jsx";

const Hero = () => {
  const stats = [
    {
      value: "7+",
      label: "Years of Experience",
    },
    {
      value: "100+",
      label: "Projects Completed",
    },
    {
      value: "50+",
      label: "Expert Team Members",
    },
  ];
  return (
    <PageWrapper>
      {/* <div className="min-h-[calc(100vh-80px)] flex items-center"> */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-center w-full">
        {/* LEFT */}
        <div className="flex flex-col space-y-5 lg:space-y-6 items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <div className="text-xs font-semibold text-primary-500">
            The Energy of Tomorrow
          </div>

          {/* Heading */}
          <h1 className="text-[2.2rem] sm:text-5xl lg:text-[3.6rem] font-bold text-secondary-500 leading-[1.1]">
            <span className="text-primary-500">Smart</span> Solar Solutions for
            a Sustainable <span className="text-primary-500">Future</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-500  leading-relaxed">
            Savior Solar Energy provides complete solar solutions, including
            high-efficiency panels, advanced inverters, and expert installation
            and maintenance for homes and businesses.
          </p>

          {/* CTA */}
          <button className="group inline-flex items-center gap-3 rounded-full bg-primary-500 pl-5 pr-[6px] py-[6px] text-white hover:bg-primary-600 transition">
            <span className="text-sm font-semibold">Get Free Consultation</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary-500">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </button>

          {/* Stats */}
          <div className="w-full pt-8 mt-2 lg:mt-6 border-t border-gray-100">
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  {/* Stat */}
                  <div className="text-center lg:text-left">
                    <div className="text-3xl sm:text-[2.8rem] font-bold text-primary-500 mb-1 sm:mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-[14px] font-medium text-gray-400">
                      {stat.label}
                    </div>
                  </div>

                  {/* Divider (only between items) */}
                  {index !== stats.length - 1 && (
                    <div className="w-px h-10 bg-gray-100 mx-4 sm:mx-6 lg:hidden hidden sm:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[550px]">
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop"
            alt="Wind turbines"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Floating Card (smaller & safer) */}
          <div className="absolute bottom-[-20px] right-0 w-[240px] rounded-2xl bg-white p-3 shadow-xl hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop"
              alt="Solar panels"
              className="w-full h-[120px] object-cover rounded-xl mb-2"
            />
            <p className="text-xs text-gray-600 font-medium">
              Complete Solar Panels, Inverters & Installation Solutions
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </PageWrapper>
  );
};

export default Hero;
