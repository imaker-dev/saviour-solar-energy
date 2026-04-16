import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";

export default function WorkingProcess() {
  const steps = [
    {
      num: "Step 1",
      title: "Get in contact with our team",
      desc: "Fill our form or contact us to answer your questions and help you understand the details of going solar.",
    },
    {
      num: "Step 2",
      title: "Book appointment",
      desc: "Book an appointment at the best time that fits your schedule with one of our solar experts.",
    },
    {
      num: "Step 3",
      title: "Solar panels installation",
      desc: "Have your Solar Panel System Install and enjoy your new lifestyle with free energy and independence.",
    },
  ];

  return (
    <PageWrapper className="bg-white ">
      <SectionHeader
        badge={"Working Process"}
        title={"How to get started with solar"}
        description={
          "Our Company redefines your relationship with energy. Minimize your carbon footprint. Take control of your power costs today!"
        }
      />
      {/* Steps */}
      <div className="flex flex-col md:flex-row items-center justify-between relative gap-12">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center relative"
          >
            {/* Circle */}
            <div className="w-[80px] h-[80px] rounded-full bg-primary-500 flex items-center justify-center text-white font-bold shadow mb-6">
              {step.num}
            </div>

            {/* Arrow (SVG Image) */}
            {i < steps.length - 1 && (
              <img
                src="/Images/arrow.svg"
                alt="arrow"
                className="hidden md:block absolute top-[40px] left-[80%] xl:left-[120%] xl:w-48"
              />
            )}

            {/* Text */}
            <div className="max-w-[240px]">
              <h3 className="text-[#1a2332] font-extrabold text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
