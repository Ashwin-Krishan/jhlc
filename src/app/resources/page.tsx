import Link from "next/link";

import { resourceCategories } from "@/data/resources";

const disclaimer =
  "External resources are curated for educational purposes. Jaffna Hindu Ladies College does not control third-party content and encourages families to review privacy notices before sharing personal information.";

export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900">Resources &amp; Guidance</h1>
      <p className="mt-3 text-green-800">
        A curated hub of learning platforms, social development programmes, and cyber safety toolkits that complement
        classroom teaching and family wellbeing.
      </p>

      <div className="mt-6 rounded-3xl border border-green-100 bg-green-50 p-4 text-sm text-green-700">
        {disclaimer}
      </div>

      <div className="mt-10 space-y-8">
        {resourceCategories.map((category) => (
          <article key={category.id} id={category.id} className="rounded-3xl border border-green-100 bg-white p-6 shadow">
            <header className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h2 className="text-2xl font-semibold text-green-900">{category.name}</h2>
              <Link
                href={`#${category.id}`}
                className="text-xs uppercase tracking-wide text-green-600"
                aria-label={`${category.name} section anchor`}
              >
                #{category.id}
              </Link>
            </header>
            <p className="mt-2 text-sm text-green-700">{category.summary}</p>
            <div className="mt-4 space-y-4">
              {category.links.map((link) => (
                <div
                  key={link.url}
                  className="rounded-2xl border border-green-100 bg-green-50/60 p-4 text-green-800 transition hover:border-green-300 hover:bg-green-50"
                >
                  <h3 className="text-lg font-semibold text-green-900">{link.title}</h3>
                  <p className="mt-1 text-sm">{link.description}</p>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
                  >
                    Visit resource <span aria-hidden>↗</span>
                  </Link>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-green-100 bg-white p-6 text-sm text-green-700 shadow">
        <h2 className="text-lg font-semibold text-green-900">Need additional support?</h2>
        <p className="mt-2">
          Email <a href="mailto:resources@jhindu.lk" className="font-semibold text-green-700 hover:text-green-900">resources@jhindu.lk</a> with suggestions for new learning materials or to report an inaccessible link.
        </p>
      </div>
    </section>
  );
}
