"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CalendarEvent = {
  date: string;
  title: string;
  details?: string;
};

type CalendarMonth = {
  name: string;
  monthIndex: number;
  events: CalendarEvent[];
};

const year = 2026;

const months: CalendarMonth[] = [
  {
    name: "January",
    monthIndex: 0,
    events: [
      { date: "2026-01-01", title: "First term - first phase begins" },
      { date: "2026-01-09", title: "Road race" },
      { date: "2026-01-14", title: "Thai Pongal" },
      { date: "2026-01-16", title: "School - level Tamil day competitions begin" },
      { date: "2026-01-22", title: "Staff meeting" },
    ],
  },
  {
    name: "February",
    monthIndex: 1,
    events: [
      { date: "2026-02-02", title: "School - level English day competitions begin" },
      { date: "2026-02-04", title: "National Independence Day" },
      { date: "2026-02-05", title: "Staff meeting" },
      { date: "2026-02-10", title: "Update the list of Special need students" },
      { date: "2026-02-12", title: "Inter house sports meet" },
      { date: "2026-02-13", title: "First term - first break" },
      { date: "2026-02-15", title: "Maha Sivaratri" },
    ],
  },
  {
    name: "March",
    monthIndex: 2,
    events: [
      { date: "2026-03-02", title: "Course selection guidance for G.C.E (O/L) students" },
      { date: "2026-03-03", title: "First term - second phase begins" },
      { date: "2026-03-06", title: "Secondary Language Day" },
      { date: "2026-03-26", title: "Staff meeting" },
      { date: "2026-03-27", title: "First term examinations begin" },
    ],
  },
  {
    name: "April",
    monthIndex: 3,
    events: [
      { date: "2026-04-10", title: "First term - second break" },
      { date: "2026-04-14", title: "New Year" },
      { date: "2026-04-20", title: "Second term begins" },
      { date: "2026-04-24", title: "Advance Level students Social" },
      { date: "2026-04-25", title: "Chess tournament" },
      { date: "2026-04-26", title: "Chess tournament" },
      { date: "2026-04-30", title: "Staff meeting" },
    ],
  },
  {
    name: "May",
    monthIndex: 4,
    events: [
      { date: "2026-05-02", title: "Table tennis tournament" },
      { date: "2026-05-03", title: "Table tennis tournament" },
      { date: "2026-05-05", title: "Commerce Fair" },
      { date: "2026-05-09", title: "Badminton tournament" },
      { date: "2026-05-10", title: "Badminton tournament" },
      { date: "2026-05-11", title: "Thirunavukkarasar guru pooja" },
      { date: "2026-05-16", title: "Netball tournament" },
      { date: "2026-05-17", title: "Netball tournament" },
      { date: "2026-05-20", title: "Science Day" },
      { date: "2026-05-21", title: "Staff meeting" },
      { date: "2026-05-23", title: "Cricket - friendly match" },
      { date: "2026-05-24", title: "Cricket - friendly match" },
    ],
  },
  {
    name: "June",
    monthIndex: 5,
    events: [
      { date: "2026-06-02", title: "Thirugnanasambanthar guru pooja" },
      { date: "2026-06-05", title: "Environmental Day" },
      { date: "2026-06-07", title: "Rajavarothaya vinayagar sankapishekam" },
      { date: "2026-06-11", title: "Service club awareness day" },
      { date: "2026-06-20", title: "Maanikavasakar guru pooja" },
      { date: "2026-06-25", title: "Staff meeting" },
      { date: "2026-06-26", title: "Anti-drug Day" },
    ],
  },
];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const toKey = (date: Date) => {
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
};

const getMonthCells = (monthIndex: number) => {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
  const cells: (Date | null)[] = [];
  for (let i = 0; i < totalCells; i += 1) {
    const dayNumber = i - firstDay + 1;
    if (dayNumber <= 0 || dayNumber > daysInMonth) {
      cells.push(null);
    } else {
      cells.push(new Date(year, monthIndex, dayNumber));
    }
  }
  return cells;
};

export default function CalendarPage() {
  const [activeMonthIndex, setActiveMonthIndex] = useState(3);
  const [activeEvent, setActiveEvent] = useState<CalendarEvent | null>(null);
  const activeMonth = months[activeMonthIndex];
  const eventsByDate = useMemo(() => {
    const map = new Map<string, string[]>();
    activeMonth.events.forEach((event) => {
      const list = map.get(event.date) ?? [];
      list.push(event.title);
      map.set(event.date, list);
    });
    return map;
  }, [activeMonth]);

  const cells = useMemo(() => getMonthCells(activeMonth.monthIndex), [activeMonth.monthIndex]);
  const canGoPrev = activeMonthIndex > 0;
  const canGoNext = activeMonthIndex < months.length - 1;
  const activeDate = activeEvent ? new Date(activeEvent.date) : null;
  const formattedDate = activeDate
    ? activeDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-green-900">School Calendar 2026</h1>
        </div>
      </div>

      <section className="mt-10 space-y-4">
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveMonthIndex((prev) => Math.max(0, prev - 1))}
            disabled={!canGoPrev}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition ${
              canGoPrev
                ? "border-green-200 bg-white text-green-700 hover:bg-green-50"
                : "cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400"
            }`}
            aria-label="Previous month"
          >
            ←
          </button>
          <h2 className="text-2xl font-semibold text-center text-green-900">{activeMonth.name}</h2>
          <button
            type="button"
            onClick={() => setActiveMonthIndex((prev) => Math.min(months.length - 1, prev + 1))}
            disabled={!canGoNext}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition ${
              canGoNext
                ? "border-green-200 bg-white text-green-700 hover:bg-green-50"
                : "cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400"
            }`}
            aria-label="Next month"
          >
            →
          </button>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-rose-900/30 bg-white p-4 shadow-sm">
          <div className="min-w-[820px]">
            <div className="grid grid-cols-7 border-b border-rose-900/30 text-sm font-semibold text-green-900">
              {weekdays.map((day) => (
                <div key={day} className="px-3 py-2 text-center">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 auto-rows-[7.5rem] text-sm text-green-900">
              {cells.map((date, index) => {
                const dateKey = date ? toKey(date) : "";
                const events = date ? eventsByDate.get(dateKey) ?? [] : [];
                return (
                  <div
                    key={`${activeMonth.name}-${index}`}
                    className={`border border-rose-900/30 p-2 ${date ? "bg-white" : "bg-rose-50/40"}`}
                  >
                    {date ? (
                      <>
                        <div className="text-xs font-semibold text-green-900">{date.getDate()}</div>
                        <div className="mt-1 space-y-1">
                          {events.map((event) => (
                            <button
                              key={event}
                              type="button"
                              onClick={() => setActiveEvent({ date: dateKey, title: event })}
                              className="flex w-full items-start gap-1 text-left text-xs text-green-800 transition hover:text-green-900"
                            >
                              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                              <span className="leading-snug">{event}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {activeEvent ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="w-full max-w-2xl rounded-3xl border border-rose-900/30 bg-white shadow-xl">
            <div className="flex items-start justify-between border-b border-rose-900/20 px-6 py-5">
              <div>
                <h3 className="text-2xl font-semibold text-green-900">{activeEvent.title}</h3>
                <p className="mt-2 text-sm text-green-700">{formattedDate}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveEvent(null)}
                className="rounded-full border border-green-200 p-2 text-green-700 transition hover:bg-green-50"
                aria-label="Close event details"
              >
                ✕
              </button>
            </div>
            <div className="px-6 py-5 text-green-900">
              <p className="text-base leading-relaxed">
                {activeEvent.details ?? "More details will be shared closer to the event."}
              </p>
            </div>
            <div className="flex items-center justify-end border-t border-rose-900/20 px-6 py-4">
              <button
                type="button"
                onClick={() => setActiveEvent(null)}
                className="inline-flex items-center justify-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
