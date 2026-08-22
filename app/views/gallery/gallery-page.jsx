"use client";

import { useState } from "react";
import { Expand, ImageOff } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";

const images = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=1150&q=80&auto=format&fit=crop",
    alt: "Solar panels installed on a rooftop",
  },
  {
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=900&h=650&q=80&auto=format&fit=crop",
    alt: "Large solar panel installation under blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&h=1200&q=80&auto=format&fit=crop",
    alt: "Solar panels generating renewable energy",
  },
  {
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&h=900&q=80&auto=format&fit=crop",
    alt: "Solar energy panels in a renewable energy field",
  },
  {
    src: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=900&h=700&q=80&auto=format&fit=crop",
    alt: "Solar panels on a modern building",
  },
  {
    src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=900&h=1100&q=80&auto=format&fit=crop",
    alt: "Rooftop solar panel system",
  },
  {
    src: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=900&h=950&q=80&auto=format&fit=crop",
    alt: "Solar panels in a green energy installation",
  },
  {
    src: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=900&h=680&q=80&auto=format&fit=crop",
    alt: "Solar panels viewed from above",
  },
];

function ImageCard({ image, onOpen }) {
  const [broken, setBroken] = useState(false);

  return (
    <button
      onClick={onOpen}
      className="group relative mb-5 block w-full break-inside-avoid rounded-[24px] text-left focus:outline-none"
      aria-label={image.alt || "View image"}
    >
      <div className="relative overflow-hidden rounded-[24px] bg-[#EDE7F6] shadow-[0_1px_2px_rgba(24,20,32,0.06)] ring-1 ring-black/5 transition-shadow duration-500 group-hover:shadow-[0_20px_45px_-15px_rgba(24,20,32,0.35)]">
        {!broken ? (
          <img
            src={image.src}
            alt={image.alt || ""}
            loading="lazy"
            onError={() => setBroken(true)}
            className="block w-full transform-gpu object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-[#FDE2E4] via-[#E7E0F9] to-[#D7F5EC] text-[#6B6478]">
            <ImageOff className="h-6 w-6 opacity-40" />
          </div>
        )}

        {image.alt && (
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#161019]/80 via-[#161019]/0 to-[#161019]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-sm font-medium leading-snug text-white">
                {image.alt}
              </p>
            </div>
          </div>
        )}

      </div>
    </button>
  );
}

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.alt,
  }));

  return (
    <div>
      {/* ambient background glow */}
      <PageHeader title={"Gallery"} />

      <PageWrapper>
        {/* masonry grid */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {images.map((image, idx) => (
            <ImageCard
              key={idx}
              image={image}
              onOpen={() => setLightboxIndex(idx)}
            />
          ))}
        </div>
      </PageWrapper>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom, Thumbnails, Fullscreen]}
        captions={{
          descriptionTextAlign: "center",
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        thumbnails={{
          position: "bottom",
          width: 100,
          height: 70,
          border: 0,
          borderRadius: 8,
          padding: 0,
          gap: 8,
        }}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.86)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          },
        }}
      />
    </div>
  );
}
