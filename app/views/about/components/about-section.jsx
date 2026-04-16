import PageWrapper from "@/app/components/page-wrapper.jsx";

export default function AboutSection() {
  return (
    <PageWrapper className="bg-gray-50/50 relative overflow-hidden py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
        {/* Image Section */}
        <div
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] overflow-hidden 
                        rounded-2xl lg:rounded-l-none lg:rounded-r-[4rem] shadow-lg"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Images/solar-1.png"
            alt="Solar panels on modern eco-friendly house"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-5 md:gap-6 lg:pr-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left px-4 lg:px-0">
          <span className="text-primary-500 font-bold text-xs tracking-widest uppercase">
            About Us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-500 leading-tight">
            Innovating Solar Solutions for a Sustainable Tomorrow
          </h2>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
            Solvix is a leading provider of solar energy solutions, helping
            homeowners, businesses, and communities transition to clean,
            renewable power. Our cutting-edge technology and expert team ensure
            maximum energy efficiency, long-term savings, and environmental
            impact reduction.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 md:pt-6">
            <StatItem value="10k+" label="Solar Installations" />
            <StatItem value="100k+" label="CO₂ Reduced" />
            <StatItem value="70%" label="Savings" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

/* Reusable Stat Component */
function StatItem({ value, label }) {
  return (
    <div className="text-center lg:text-left">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 leading-none">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
        {label}
      </div>
    </div>
  );
}
