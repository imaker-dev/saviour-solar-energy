"use client";
import { ArrowLeft, Leaf, CheckCircle2, Star, PlayCircle } from "lucide-react";
import PageWrapper from "../../components/page-wrapper";
import { useRouter } from "next/navigation";

const ProjectDetailsPage = ({ project }) => {
  const router = useRouter();
  if (!project) return null;

  const {
    hero,
    details,
    about,
    gallery = [],
    challenges,
    solution,
    results,
    testimonial,
  } = project;

  const detailRows = [
    { label: "Client Name", value: details?.clientName },
    { label: "Service", value: details?.service },
    { label: "Duration", value: details?.duration },
    { label: "Location", value: details?.location },
    { label: "Year", value: details?.year },
  ].filter((row) => row.value);

  return (
    <PageWrapper
      className="bg-white"
      containerClassName="space-y-8 lg:space-y-12 pt-16"
    >
      <div className="">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </button>
      </div>

      {/* Hero image */}
      <div className="">
        <div className="relative h-72 w-full overflow-hidden rounded-b-[64px] sm:h-96">
          <img
            src={hero?.image}
            alt={hero?.alt || hero?.title}
            className="h-full w-full object-cover"
          />
          {hero?.videoUrl && (
            <button
              type="button"
              className="absolute inset-0 flex items-center justify-center bg-slate-950/10 transition-colors hover:bg-slate-950/20"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg ring-1 ring-white">
                <PlayCircle className="h-7 w-7" strokeWidth={1.75} />
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Title + intro + floating detail card */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {hero?.title}
          </h1>

          {about?.description && (
            <div className="mt-6 flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Leaf className="h-4 w-4" strokeWidth={2.25} />
              </span>
              <p className="text-base leading-relaxed text-slate-600">
                {about.description}
              </p>
            </div>
          )}

          {about?.content && (
            <p className="mt-5 leading-relaxed text-slate-500">
              {about.content}
            </p>
          )}
        </div>

        {detailRows.length > 0 && (
          <div className="rounded-3xl bg-primary-500 p-7 text-white md:col-span-1">
            <div className="divide-y divide-white/10">
              {detailRows.map(({ label, value }) => (
                <div key={label} className="py-3.5 first:pt-0 last:pb-0 ">
                  <p className="text-xs font-medium text-slate-300">
                    {label} :
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Gallery */}
      {gallery.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-rows-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-3xl">
              <img
                src={item.image}
                alt={item.alt || `Project image ${index + 2}`}
                className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-full"
              />
            </div>
          ))}
        </div>
      )}

      {/* Challenge */}
      {challenges && (
        <section>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {challenges.title}
          </h2>
          <p className="mt-3  leading-relaxed text-slate-500">
            {challenges.description}
          </p>
        </section>
      )}

      {/* Solution */}
      {solution && (
        <section>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {solution.title}
          </h2>

          {solution.description && (
            <p className="mt-3  leading-relaxed text-slate-500">
              {solution.description}
            </p>
          )}

          {solution.items?.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 lg:grid-cols-4">
              {solution.items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-emerald-500"
                    strokeWidth={2.25}
                  />

                  <span className=" text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Results */}
      {results && (
        <section>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {results.title}
          </h2>
          <p className="mt-3 leading-relaxed text-slate-500">
            {results.description}
          </p>
        </section>
      )}

      {/* Testimonial */}
      {testimonial && (
        <section className="">
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-3xl">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
              {testimonial.videoUrl && (
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center bg-slate-950/10 transition-colors hover:bg-slate-950/20"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg">
                    <PlayCircle className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                </button>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < (testimonial.rating || 0)
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-900">
                  {testimonial.rating?.toFixed(1)}
                </span>
              </div>

              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
                {testimonial.review}
              </p>

              <p className="mt-5 font-bold text-slate-900">
                {testimonial.name}
              </p>
              <p className="text-xs text-slate-400">
                {testimonial.designation}
              </p>
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
};

export default ProjectDetailsPage;
