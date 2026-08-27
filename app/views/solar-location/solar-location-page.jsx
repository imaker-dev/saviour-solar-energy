import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../../components/page-wrapper";
import { Eyebrow } from "../../components/section-header";

const highlightCity = (title, city) => {
  if (!title || !city || !title.includes(city)) {
    return title;
  }

  const parts = title.split(city);

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <span className="text-primary-500">{city}</span>
      )}
    </React.Fragment>
  ));
};

const Hero = ({ hero, city }) => {
  const { eyebrow, title, description } = hero || {};

  if (!hero) return null;
  return (
    <PageWrapper className="bg-[#F4F5F7]" containerClassName="pt-24 lg:pt-20">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* left: copy */}
        <div className="max-w-xl lg:w-1/2">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

          {title && (
            <h1 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-tight text-[#111827] sm:text-5xl">
              {highlightCity(title, city)}
            </h1>
          )}

          {description && (
            <p className="mt-6 text-base leading-relaxed text-[#4B5563] sm:text-lg">
              {description}
            </p>
          )}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-lg btn-primary">
              Get a Free Solar Quote
            </Link>

            <Link href="/services" className="btn btn-lg btn-secondary">
              Explore Solar Solutions
            </Link>
          </div>
        </div>

        {/* right: image, 4:3 */}
        <div className="lg:w-1/2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/5">
            <Image
              src={"/Images/gujarat-solar-solutions-2.webp"}
              alt={"solar-solutions"}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const SolarLocationPage = ({ location }) => {
  const { hero, city } = location || {};

  return (
    <>
      <Hero hero={hero} city={city} />
    </>
  );
};

export default SolarLocationPage;
