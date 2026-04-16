import PageWrapper from "@/app/components/page-wrapper.jsx";

export default function AboutIntro() {
  return (
    <PageWrapper className="bg-white">
      {/* Heading Section */}
      <div
        className="flex flex-col items-center text-center gap-3 md:gap-4 mb-8 md:mb-12 px-4"
        id="intro"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-500 leading-tight">
          Powering Future a{" "}
          <span className="text-primary-500">Brighter</span>
        </h2>

        <p className="text-gray-500 max-w-md md:max-w-lg text-sm sm:text-base md:text-lg">
          Join us in building a sustainable, cost-effective future powered by
          the sun.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full h-[180px] md:h-[450px] overflow-hidden mb-10 md:mb-16 shadow-md md:shadow-lg border border-gray-100 rounded">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Images/solar-2.jpg"
          alt="Modern solar powered houses in nature"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </div>

      {/* Awards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto px-4">
        <AwardItem
          title="Best Solar Provider 2024"
          description="Recognized for excellence in solar solutions and customer service."
        />

        <AwardItem
          title="Top 10 Green Tech"
          description="Awarded for pioneering advancements in solar energy."
        />

        <AwardItem
          title="Sustainability Award"
          description="Celebrated for making a significant impact in renewable energy."
        />
      </div>
    </PageWrapper>
  );
}

/* Reusable Award Item */
function AwardItem({ title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 md:gap-4">
      <div className="text-primary-500">
        <AwardBadgeIcon />
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-500">
        {title}
      </h3>

      <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}

function AwardBadgeIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      className="w-12 h-12 md:w-16 md:h-16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 24C48 32.8366 40.8366 40 32 40C23.1634 40 16 32.8366 16 24C16 15.1634 23.1634 8 32 8C40.8366 8 48 15.1634 48 24Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M32 14L34.2 19L39.8 19.5L35.6 23.2L36.8 28.6L32 25.8L27.2 28.6L28.4 23.2L24.2 19.5L29.8 19L32 14Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M22 36L16 54L30 48L32 50L34 48L48 54L42 36"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}