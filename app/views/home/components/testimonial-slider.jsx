"use client";

import { Quote, Star, MapPin } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";

const rowOne = [
  {
    id: 1,
    quote:
      "Our electricity bill dropped to almost zero within the first month. The whole install was clean and finished ahead of schedule.",
    name: "Ramesh Patel",
    location: "Ahmedabad, Gujarat",
  },
  {
    id: 2,
    quote:
      "They sized the system perfectly for our usage and walked us through every subsidy we qualified for. No guesswork at all.",
    name: "Sneha Iyer",
    location: "Pune, Maharashtra",
  },
  {
    id: 3,
    quote:
      "Six months in and the panels are still outperforming what they promised.",
    name: "Arjun Mehta",
    location: "Surat, Gujarat",
  },
  {
    id: 4,
    quote:
      "Honest team from the first site visit to commissioning. They flagged issues our previous quote from another vendor missed.",
    name: "Priya Nair",
    location: "Kochi, Kerala",
  },
  {
    id: 5,
    quote:
      "Rooftop was tricky because of shading, but their design accounted for it. Output has matched projections every month.",
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
  },
  {
    id: 6,
    quote:
      "Clean rooftop work, no debris left behind, and the inverter setup was explained to us in plain language.",
    name: "Farhan Sheikh",
    location: "Bhopal, Madhya Pradesh",
  },
];

const rowTwo = [
  {
    id: 7,
    quote:
      "Support after installation has been just as good as the sales process. They resolved an inverter fault the same day.",
    name: "Anjali Desai",
    location: "Vadodara, Gujarat",
  },
  {
    id: 8,
    quote:
      "Paid back faster than we expected. Our society now points to our terrace as the reason to finally go solar.",
    name: "Karthik Reddy",
    location: "Hyderabad, Telangana",
  },
  {
    id: 9,
    quote:
      "Transparent pricing, no hidden charges, and the paperwork for net metering was handled entirely by their team.",
    name: "Meera Joshi",
    location: "Nagpur, Maharashtra",
  },
  {
    id: 10,
    quote:
      "Best decision for our factory's overheads. The commercial system they designed cut our peak-hour costs significantly.",
    name: "Rohit Verma",
    location: "Indore, Madhya Pradesh",
  },
  {
    id: 11,
    quote:
      "From consultation to commissioning took under three weeks. Every technician who visited was punctual and courteous.",
    name: "Divya Krishnan",
    location: "Coimbatore, Tamil Nadu",
  },
  {
    id: 12,
    quote:
      "Two years on, the panels still perform at spec. Their annual maintenance visit caught a wiring issue early.",
    name: "Sanjay Kapoor",
    location: "Lucknow, Uttar Pradesh",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex h-[240px] w-[360px] flex-col gap-4 rounded-2xl border border-primary-50 bg-white p-6 shadow-[0_1px_2px_rgba(26,15,0,0.04)]">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50">
          <Quote
            className="h-4 w-4 fill-primary-500 text-primary-500"
            strokeWidth={0}
          />
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-primary-500 text-primary-500"
              strokeWidth={0}
            />
          ))}
        </div>
      </div>

      <p className="line-clamp-4 text-[15px] leading-relaxed text-ink/80">
        {testimonial.quote}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-primary-50 pt-4">
        <span className="text-sm font-semibold text-ink">
          {testimonial.name}
        </span>
        <span className="flex items-center gap-1 text-xs text-ink/50">
          <MapPin className="h-3 w-3" />
          {testimonial.location}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({ testimonials, reverse = false }) {
  const slides = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-5 ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        }`}
      >
        {slides.map((testimonial, i) => (
          <div key={`${testimonial.id}-${i}`} className="w-[360px] shrink-0">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialSlider() {
  return (
    <>
      <style>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
      `}</style>

      <PageWrapper className="relative overflow-hidden bg-[#FAFAF9]">
        <SectionHeader
          badge={" Loved by our customers"}
          title={"Happy customers. Smarter energy choices."}
          highlight={"Smarter energy choices."}
          description={
            "From the first consultation to powering their homes with clean energy, our customers choose us for a solar experience they can trust."
          }
        />

        <div className="relative flex flex-col gap-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FAFAF9] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FAFAF9] to-transparent" />

          <MarqueeRow testimonials={rowOne} />
          <MarqueeRow testimonials={rowTwo} reverse />
        </div>
      </PageWrapper>
    </>
  );
}
