"use client";

import PageWrapper from "@/app/components/page-wrapper";

import Image from "next/image";
import { useState } from "react";
import PageHeader from "../../components/page-header";
import { Quote } from "lucide-react";

export const TESTIMONIALS = [
  {
    id: "testimonial-1",
    quote:
      "Replace with a real quote from this owner — ideally about one concrete part of running the restaurant that changed.",
    ownerName: "Owner name",
    ownerRole: "Owner",
    restaurantName: "Restaurant name",
    ownerImage: "/images/testimonials/owner-1.jpg",
    featured: true,
  },
  {
    id: "testimonial-2",
    quote:
      "Replace with a real quote about a specific workflow — billing, kitchen orders, staff scheduling, etc.",
    ownerName: "Owner name",
    ownerRole: "Marketing Coordinator",
    restaurantName: "Restaurant name",
    ownerImage: "/images/testimonials/owner-2.jpg",
  },
  {
    id: "testimonial-3",
    quote:
      "Replace with a real quote. Keep it in the owner's own words rather than paraphrased marketing language.",
    ownerName: "Owner name",
    ownerRole: "IT / Operations Manager",
    restaurantName: "Restaurant name",
    ownerImage: "/images/testimonials/owner-3.jpg",
  },
  {
    id: "testimonial-4",
    quote:
      "Replace with a real quote from the owner's daily use of the product — what got easier, what they no longer worry about.",
    ownerName: "Owner name",
    ownerRole: "Founder",
    restaurantName: "Restaurant name",
    ownerImage: "/images/testimonials/owner-4.jpg",
    featured: true,
  },
  {
    id: "testimonial-5",
    quote:
      "Replace with a real quote — short, specific quotes read better in a compact card than long ones.",
    ownerName: "Owner name",
    ownerRole: "HR / Staff Manager",
    restaurantName: "Restaurant name",
    ownerImage: "/images/testimonials/owner-5.jpg",
    featured: true,
  },
  {
    id: "testimonial-6",
    quote:
      "Replace with a real quote from a senior team member or co-owner, distinct in voice from the others above.",
    ownerName: "Owner name",
    ownerRole: "Senior Manager",
    restaurantName: "Restaurant name",
    ownerImage: "/images/testimonials/owner-6.jpg",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

// Cycle featured photo headers through a couple of heights so the masonry
// doesn't feel mechanical.
const PHOTO_ASPECTS = ["aspect-[4/5]", "aspect-[5/6]", "aspect-square"];

// ---------------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------------
function Avatar({ name, image, size = "h-9 w-9" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex ${size} shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-600`}
        aria-hidden="true"
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div
      className={`relative ${size} shrink-0 overflow-hidden rounded-full bg-stone-100`}
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="40px"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function FeaturedCard({ testimonial, index }) {
  const [failed, setFailed] = useState(false);
  const aspect = PHOTO_ASPECTS[index % PHOTO_ASPECTS.length];

  return (
    <figure className="group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl bg-stone-100 shadow-sm">
      <div className={`relative w-full ${aspect}`}>
        {!failed ? (
          <Image
            src={testimonial.ownerImage}
            alt={`${testimonial.ownerName}, ${testimonial.ownerRole} at ${testimonial.restaurantName}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-primary-50 text-3xl font-semibold text-primary-500"
            aria-hidden="true"
          >
            {getInitials(testimonial.ownerName)}
          </div>
        )}

        {/* Bottom overlay: quote + name/role */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-5 pb-4 pt-20">
          <span className="mb-1.5 block text-white/70">
            <Quote />
          </span>
          <blockquote className="mb-3 text-sm leading-snug text-white/95">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="text-[15px] font-semibold text-white">
            {testimonial.ownerName}
          </figcaption>
          <p className="text-xs text-white/70">
            {testimonial.ownerRole}, {testimonial.restaurantName}
          </p>
        </div>
      </div>
    </figure>
  );
}

function QuoteCard({ testimonial }) {
  return (
    <figure className="mb-6 break-inside-avoid rounded-3xl border border-stone-100 bg-white p-6 shadow-sm">
      <span className="mb-3 block text-primary-500">
        <Quote />
      </span>

      <blockquote className="text-[15px] leading-relaxed text-stone-800">
        “{testimonial.quote}”
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3">
        <Avatar name={testimonial.ownerName} image={testimonial.ownerImage} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-stone-900">
            {testimonial.ownerName}
          </p>
          <p className="truncate text-xs text-stone-500">
            {testimonial.ownerRole}, {testimonial.restaurantName}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export default function TestimonialsPage({ testimonials = TESTIMONIALS }) {
  if (testimonials.length === 0) return null;

  return (
    <>
      <PageHeader />
      <PageWrapper aria-label="What restaurant owners say about iMaker Restro">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((testimonial, index) =>
            testimonial.featured ? (
              <FeaturedCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ) : (
              <QuoteCard key={testimonial.id} testimonial={testimonial} />
            ),
          )}
        </div>
      </PageWrapper>
    </>
  );
}
