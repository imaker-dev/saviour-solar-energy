"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * Converts a YouTube / Vimeo page URL (or an already-valid embed URL) into a
 * playable embed URL with autoplay on. Returns null for anything that isn't
 * a recognized YouTube/Vimeo link — callers should fall back to treating the
 * src as a direct/local video file in that case.
 */
function toEmbedSrc(src) {
  if (!src) return null;

  // Already an embed URL (YouTube or Vimeo) — just make sure autoplay is on.
  if (src.includes("/embed/") || src.includes("player.vimeo.com")) {
    const hasQuery = src.includes("?");
    return src.includes("autoplay=1")
      ? src
      : `${src}${hasQuery ? "&" : "?"}autoplay=1`;
  }

  // youtube.com/watch?v=ID, youtu.be/ID, youtube.com/shorts/ID
  const yt = src.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([\w-]{11})/,
  );
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`;

  // vimeo.com/ID
  const vimeo = src.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;

  return null;
}

const LOCAL_VIDEO_PATTERN = /\.(mp4|webm|ogv|ogg|mov)(\?.*)?$/i;

const ANIMATION_MS = 300;

/**
 * Reusable, drop-in video overlay/modal. Works with:
 *  - YouTube or Vimeo page links       (e.g. "https://youtu.be/aqz-KE-bpKQ")
 *  - Already-built embed URLs          (e.g. "https://www.youtube.com/embed/…")
 *  - Local or directly-hosted files    (e.g. "/videos/hero.mp4", any .mp4/.webm/.mov URL)
 *
 * Usage:
 *   const [open, setOpen] = useState(false);
 *   <button onClick={() => setOpen(true)}>Play</button>
 *   <VideoOverlay
 *     isOpen={open}
 *     onClose={() => setOpen(false)}
 *     src="https://youtu.be/aqz-KE-bpKQ"
 *     title="Hero Video"
 *   />
 */
export default function VideoOverlay({
  isOpen,
  onClose,
  src,
  title = "Video",
}) {
  const [mounted, setMounted] = useState(isOpen);
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef(null);
  const rafId = useRef(null);

  // Mount immediately on open; delay unmount until the close transition ends.
  useEffect(() => {
    if (isOpen) {
      clearTimeout(closeTimer.current);
      setMounted(true);
      rafId.current = requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      closeTimer.current = setTimeout(() => setMounted(false), ANIMATION_MS);
    }
    return () => {
      clearTimeout(closeTimer.current);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isOpen]);

  // Escape to close + lock page scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const embedSrc = useMemo(
    () => (mounted ? toEmbedSrc(src) : null),
    [src, mounted],
  );
  const isLocal = useMemo(
    () => (src ? LOCAL_VIDEO_PATTERN.test(src) : false),
    [src],
  );

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose?.();
        }}
        aria-label="Close video"
        className="absolute right-5 top-5 z-10 rounded-full bg-white p-2 text-neutral-900 shadow-md transition-transform duration-200 hover:scale-105 sm:right-8 sm:top-8"
      >
        <X size={22} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[90vw] max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl transition-all duration-300 ease-out ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="aspect-video">
          {isLocal ? (
            <video
              className="h-full w-full"
              src={src}
              controls
              autoPlay
              playsInline
            />
          ) : embedSrc ? (
            <iframe
              className="h-full w-full"
              src={embedSrc}
              title={title}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
              Couldn't recognize this video source.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
