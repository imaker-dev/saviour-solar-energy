import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";

export default function OurBenefits() {
const items = [
  {
    number: "01",
    side: "left",
    title: "Reduce Operating Costs",
    description:
      "Lower electricity expenses and improve profitability with reliable, low-maintenance solar power systems.",
  },
  {
    number: "02",
    side: "right",
    title: "Fast Return on Investment",
    description:
      "Benefit from government incentives and significant energy savings that help recover your investment in just a few years.",
  },
  {
    number: "03",
    side: "left",
    title: "Reliable Energy Independence",
    description:
      "Generate your own electricity and reduce dependence on fluctuating utility tariffs and power shortages.",
  },
  {
    number: "04",
    side: "right",
    title: "Strengthen Your Green Brand",
    description:
      "Demonstrate your commitment to sustainability while reducing your carbon footprint and building customer trust.",
  },
];

  // Desktop grid placement so 01/03 sit in the left column, 02/04 in the
  // right column, and the image spans both rows in the center — while on
  // mobile everything simply falls in numeric order (image, 01, 02, 03, 04).
  // Note: Tailwind's JIT compiler only picks up classes it can find as
  // literal strings in the source, so order + grid placement are mapped
  // explicitly here rather than built dynamically with `order-${n}`.
  const gridPlacement = {
    "01": "order-2 lg:order-none lg:col-start-1 lg:row-start-1",
    "02": "order-3 lg:order-none lg:col-start-3 lg:row-start-1",
    "03": "order-4 lg:order-none lg:col-start-1 lg:row-start-2",
    "04": "order-5 lg:order-none lg:col-start-3 lg:row-start-2",
  };

  return (
    <PageWrapper>
      <SectionHeader
        badge={"Why Go Solar"}
        title={"Power Your Future with Clean Solar Energy"}
        highlight={'Solar Energy'}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-10 sm:gap-12 lg:gap-x-10 lg:gap-y-20 items-center">
        {/* CENTER IMAGE — first on mobile, middle column spanning both rows on desktop */}
        <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 flex justify-center">
          <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-80 sm:h-96 md:h-[440px] lg:h-[520px] rounded-[120px] lg:rounded-[160px] overflow-hidden shadow-xl">
            {/* TODO: replace with your own photo (e.g. via next/image) */}
            <img
              src="/Images/benefits.webp"
              alt="Solar installation team on site"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ITEMS — rendered in numeric order (1,2,3,4) on mobile.
              On desktop each one is pinned to its grid cell via gridPlacement. */}
        {items.map((item) => (
          <div
            key={item.number}
            className={`${gridPlacement[item.number]}
                flex flex-row items-start gap-4
                lg:flex-col lg:gap-0
                ${item.side === "right" ? "lg:items-end" : "lg:items-start"}`}
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 shrink-0 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm lg:text-lg font-bold shadow-md shadow-primary-200 lg:mb-6">
              {item.number}
            </div>
            <div
              className={item.side === "right" ? "lg:text-right" : "text-left"}
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 lg:mb-2">
                {item.title}
              </h3>
              <p
                className={`text-sm text-slate-500 leading-relaxed max-w-xs ${
                  item.side === "right" ? "lg:ml-auto" : ""
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
