"use client";

import Link from "next/link";
import { useRef } from "react";

import { calendarEvents } from "@/data/calendar";

export default function Calendar() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const node = scrollerRef.current;
    if (!node) return;
    const offset = direction === "left" ? -240 : 240;
    node.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative w-full">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-green-800">Calendar of the Month</h4>
          <p className="text-sm text-green-700">
            Upcoming academic milestones, cultural observances, and community events.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="rounded-full border border-green-200 bg-white p-2 text-green-700 transition hover:bg-green-50"
            aria-label="Scroll calendar left"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="rounded-full border border-green-200 bg-white p-2 text-green-700 transition hover:bg-green-50"
            aria-label="Scroll calendar right"
          >
            ›
          </button>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto pb-3 pr-2 snap-x snap-mandatory"
        aria-label="Monthly calendar events"
      >
        {calendarEvents.map((event) => (
          <article
            key={event.title}
            className="min-w-[220px] max-w-xs flex-1 snap-start rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs uppercase tracking-wide text-green-600">{event.category}</p>
            <p className="mt-1 text-sm font-semibold text-green-900">{event.date}</p>
            <h5 className="mt-2 text-base font-bold text-green-800">{event.title}</h5>
            <p className="mt-2 text-sm text-green-700">{event.description}</p>
            {event.href ? (
              <Link
                href={event.href}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-900"
              >
                View details<span aria-hidden>→</span>
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
