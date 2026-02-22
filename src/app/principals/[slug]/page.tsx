import Image from "next/image";
import Link from "next/link";

import { principals } from "@/data/principals";

type PrincipalPageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return principals.map((principal) => ({
    slug: principal.slug,
  }));
}

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default async function PrincipalPage({ params }: PrincipalPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const rawSlug = Array.isArray(resolvedParams?.slug) ? resolvedParams.slug[0] : resolvedParams?.slug ?? "";
  const normalizedSlug = decodeURIComponent(rawSlug).toLowerCase().trim();
  const principal = principals.find(
    (entry) => entry.slug === normalizedSlug || toSlug(entry.name) === normalizedSlug
  );

  if (!principal) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-12">
        <Link href="/about#principals" className="text-sm font-semibold text-green-700 hover:text-green-900">
          ← Back to former principals
        </Link>
        <div className="mt-6 rounded-3xl border border-green-100 bg-white p-6 text-green-900 shadow-sm md:p-8">
          <h1 className="text-2xl font-semibold text-green-900">Principal not found</h1>
          <p className="mt-3 text-green-800">
            We could not locate that profile. Please choose a principal from the list below.
          </p>
          <div className="mt-4 grid gap-2 text-sm text-green-700">
            {principals.map((entry) => (
              <Link key={entry.slug} href={`/principals/${entry.slug}`} className="hover:text-green-900">
                {entry.name} ({entry.years})
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/about#principals" className="text-sm font-semibold text-green-700 hover:text-green-900">
        ← Back to former principals
      </Link>
      <div className="mt-6 rounded-3xl border border-green-100 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          {principal.image ? (
            <div className="mx-auto flex-shrink-0 md:mx-0">
              <Image
                src={principal.image}
                alt={`Portrait of ${principal.name}`}
                width={200}
                height={260}
                className="h-64 w-48 rounded-3xl border border-green-100 object-cover shadow-sm"
              />
            </div>
          ) : null}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-green-900">{principal.name}</h1>
            <p className="mt-2 text-sm uppercase tracking-wide text-green-600">{principal.years}</p>
            {principal.qualifications ? (
              <p className="mt-2 text-sm font-medium text-green-700">{principal.qualifications}</p>
            ) : null}
            <p className="mt-4 text-green-800">{principal.summary}</p>
          </div>
        </div>
        <div className="mt-6 space-y-4 text-green-800">
          {principal.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
