"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { bulletinItems } from "@/data/bulletins";

const ROTATION_MS = 6500;

export default function BulletinBoard() {
  const [activeId, setActiveId] = useState(bulletinItems[0]?.id ?? "");

  useEffect(() => {
    if (!activeId) return;
    const index = bulletinItems.findIndex((item) => item.id === activeId);
    if (index === -1) return;
    const handle = window.setInterval(() => {
      const next = bulletinItems[(index + 1) % bulletinItems.length];
      setActiveId(next.id);
    }, ROTATION_MS);
    return () => window.clearInterval(handle);
  }, [activeId]);

  const active = bulletinItems.find((item) => item.id === activeId) ?? bulletinItems[0];

  if (!active) return null;

  return (
    <section className="w-full">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h4 className="text-lg font-semibold text-green-800">Bulletin Board</h4>
          <p className="text-sm text-green-700">
            Highlights from classrooms, clubs, and Old Girls’ Association initiatives.
          </p>
        </div>
        <div className="flex gap-2">
          {bulletinItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              aria-label={`Show bulletin: ${item.title}`}
              className={`h-2 w-6 rounded-full transition ${
                item.id === active?.id ? "bg-green-700" : "bg-green-200 hover:bg-green-400"
              }`}
            />
          ))}
        </div>
      </div>
      <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <p className="text-xs uppercase tracking-[0.2em] text-green-500">Now highlighting</p>
        <h5 className="mt-2 text-xl font-bold text-green-900">{active.title}</h5>
        <p className="mt-3 text-green-700">{active.excerpt}</p>
        <Link
          href={active.href}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-900"
        >
          {active.cta ?? "Learn more"}
          <span aria-hidden>→</span>
        </Link>
      </article>
    </section>
  );
}
