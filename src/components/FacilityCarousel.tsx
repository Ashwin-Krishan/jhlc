"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const photos = [
  "Badminton court1.jpg",
  "Badminton court2.jpg",
  "Basketball court 1.jpg",
  "Basketball court 2.jpg",
  "Biological lab.png",
  "Canteen 1.jpg",
  "Canteen 2.jpg",
  "Canteen 3.png",
  "Chemistry lab 1 .png",
  "Library 1.jpg",
  "Library 2.png",
  "Physics lab .png",
  "School grounds 1.jpg",
  "School grounds 2.jpg",
  "Secondary science lab .jpg",
  "Temple 4.jpeg",
  "Temple.jpeg",
];

const toLabel = (filename: string) =>
  filename
    .replace(/\.[^.]+$/, "")
    .replace(/\s*\d+\s*$/, "")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

export default function FacilityCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + photos.length) % photos.length), []);
  const next = useCallback(() => setCurrent((i) => (i + 1) % photos.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const src = `/FacilityPhotos/${encodeURIComponent(photos[current])}`;
  const label = toLabel(photos[current]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/7] w-full bg-green-50">
        <Image
          key={src}
          src={src}
          alt={label}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover transition-opacity duration-500"
          priority={current === 0}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-5">
          <p className="text-base font-semibold text-white">{label}</p>
          <p className="text-xs text-white/70">{current + 1} / {photos.length}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white transition hover:bg-black/60"
        aria-label="Previous photo"
      >
        ←
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white transition hover:bg-black/60"
        aria-label="Next photo"
      >
        →
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-5 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
