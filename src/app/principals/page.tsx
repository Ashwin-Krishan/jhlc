import Image from "next/image";
import Link from "next/link";

import { principals } from "@/data/principals";

export const metadata = {
  title: "Former Principals",
  description: "Honouring the former principals of Jaffna Hindu Ladies' College whose vision and leadership shaped generations of students.",
};

const getOneLiner = (summary: string) => {
  const clean = summary.replace(/\s+/g, " ").trim();
  if (clean.length <= 160) return clean;
  const truncated = clean.slice(0, 157);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${(lastSpace > 60 ? truncated.slice(0, lastSpace) : truncated).trim()}...`;
};

export default function PrincipalsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-green-600">Jaffna Hindu Ladies' College</p>
        <h1 className="text-3xl font-extrabold text-green-900 md:text-4xl">Former Principals</h1>
      </div>
      <p className="mt-4 text-center text-green-800">
        This page honours the former principals whose vision, dedication, and leadership shaped the growth, values, and academic excellence of our college.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {principals.map((principal) => (
          <article
            key={principal.slug}
            className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              {principal.image ? (
                <div className="mx-auto flex-shrink-0 sm:mx-0">
                  <Image
                    src={principal.image}
                    alt={`Portrait of ${principal.name}`}
                    width={140}
                    height={180}
                    className="h-44 w-32 rounded-2xl border border-green-100 object-cover shadow-sm"
                  />
                </div>
              ) : null}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-green-900">{principal.name}</h2>
                <p className="mt-1 text-sm uppercase tracking-wide text-green-600">{principal.years}</p>
                {principal.qualifications ? (
                  <p className="mt-1 text-xs font-medium text-green-700">{principal.qualifications}</p>
                ) : null}
                <p className="mt-3 text-sm text-green-800">{getOneLiner(principal.summary)}</p>
                <Link
                  href={`/principals/${principal.slug}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition hover:bg-green-100"
                >
                  Read more <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
