"use client";

import Image from "next/image";
import { useState } from "react";

import { academicStaffEntries, nonAcademicStaffEntries, getInitials } from "@/data/staff";

type Tab = "academic" | "non-academic";

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState<Tab>("academic");
  const entries = activeTab === "academic" ? academicStaffEntries : nonAcademicStaffEntries;

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Staff Directory</h1>

      <div className="flex gap-2 border-b border-green-100 mb-8">
        <button
          type="button"
          onClick={() => setActiveTab("academic")}
          className={`px-5 py-2.5 text-sm font-semibold rounded-t-xl border-b-2 transition ${
            activeTab === "academic"
              ? "border-green-700 text-green-900 bg-green-50"
              : "border-transparent text-green-600 hover:text-green-800 hover:bg-green-50"
          }`}
        >
          Academic Staff
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("non-academic")}
          className={`px-5 py-2.5 text-sm font-semibold rounded-t-xl border-b-2 transition ${
            activeTab === "non-academic"
              ? "border-green-700 text-green-900 bg-green-50"
              : "border-transparent text-green-600 hover:text-green-800 hover:bg-green-50"
          }`}
        >
          Non-Academic Staff
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((staff) => (
          <div key={staff.file} className="flex flex-col items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 text-center text-green-900 shadow-sm">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-green-100 bg-green-50 shadow-sm">
              {staff.src ? (
                <Image
                  src={staff.src}
                  alt={staff.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-green-700">
                  {getInitials(staff.name)}
                </div>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold text-green-900">{staff.name}</p>
              {staff.roleTag ? (
                <span className="mt-1 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                  {staff.roleTag}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-green-100 bg-green-50 p-5 text-sm text-green-700">
        <p className="font-semibold">Directory updates</p>
        <p className="mt-2">
          Photographs are sourced from the official directory folder. If a name needs correction, please email{" "}
          <a href="mailto:office@jhindu.lk" className="text-green-700 hover:text-green-900">office@jhindu.lk</a>.
        </p>
      </div>
    </section>
  );
}
