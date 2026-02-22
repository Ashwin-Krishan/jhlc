import Link from "next/link";
import { notFound } from "next/navigation";

import { allBeyondItems } from "@/data/beyondClassrooms";

type BeyondPageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allBeyondItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function BeyondDetailPage({ params }: BeyondPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const rawSlug = Array.isArray(resolvedParams?.slug) ? resolvedParams.slug[0] : resolvedParams?.slug ?? "";
  const normalizedSlug = decodeURIComponent(rawSlug).toLowerCase().trim();
  if (!normalizedSlug) {
    notFound();
  }

  const item = allBeyondItems.find((entry) => entry.slug === normalizedSlug);
  if (!item) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/beyond-classrooms" className="text-sm font-semibold text-green-700 hover:text-green-900">
        ← Back to Beyond Classrooms
      </Link>
      <div className="mt-6 rounded-3xl border border-green-100 bg-white p-6 shadow-sm md:p-8">
        {"name" in item ? (
          <>
            <h1 className="text-2xl font-semibold text-green-900">{item.name}</h1>
            <p className="mt-3 text-green-800">{item.objective}</p>
            <div className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-green-600">Goals</p>
              <ul className="mt-2 list-disc space-y-3 pl-6 text-green-700">
                {item.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-green-900">{item.title}</h1>
            <p className="mt-3 text-green-800">{item.description}</p>
          </>
        )}
      </div>
    </section>
  );
}
