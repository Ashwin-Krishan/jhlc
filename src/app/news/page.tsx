import Link from "next/link";

import { bulletinItems } from "@/data/bulletins";

type NewsSection = {
  title: string;
  details: string[];
  actions?: { label: string; url: string }[];
};

const sections: Record<string, NewsSection> = {
  "term-3": {
    title: "Term 3 Readiness Week",
    details: [
      "Orientation assemblies introduce student leadership teams, mentor groups, and wellbeing goals for the new term.",
      "Subject selection clinics run from 15–19 July with guidance counsellors and alumni mentors.",
      "Form tutors meet parents on 18 July for progress reviews and to share digital learning resources.",
    ],
  },
  "sports-day": {
    title: "Annual Sports Day 25 August",
    details: [
      "Founder’s Shield march-past featuring house bands and the Junior Cadet platoon.",
      "Inter-house track and field, netball skills challenge, and rhythmic gymnastics showcase.",
      "Volunteers support judging, first-aid stations, hydration points, and hospitality tents.",
    ],
    actions: [
      {
        label: "Register as a volunteer",
        url: "https://forms.gle/placeholder-volunteer",
      },
      {
        label: "Visit the OGA Facebook updates",
        url: "https://www.facebook.com",
      },
    ],
  },
  "stem-scholarships": {
    title: "Visaladchy STEM Scholarships",
    details: [
      "Open to Advanced Level science stream students demonstrating innovation and community impact.",
      "Scholarships sponsored by global Old Girls’ Association chapters for lab equipment and university application support.",
      "Application essays and references due 5 August; interviews on 12 August via hybrid format.",
    ],
    actions: [
      {
        label: "Download application guidelines",
        url: "https://moe.gov.lk/",
      },
      {
        label: "Email the scholarship committee",
        url: "mailto:scholarships@jhindu.lk",
      },
    ],
  },
};

export default function NewsPage() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900">News &amp; Highlights</h1>
      <p className="mt-3 text-green-800">
        Stay informed with the latest campus updates, community projects, and opportunities curated by the Principal’s
        office and Old Girls’ Associations. Bookmark this page for downloadable schedules and registration links.
      </p>

      <nav className="mt-6 flex flex-wrap gap-3 text-sm">
        {bulletinItems.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="rounded-full border border-green-200 bg-white px-4 py-2 font-semibold text-green-700 hover:text-green-900"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="mt-10 space-y-12">
        {bulletinItems.map((item) => {
          const section = sections[item.id];
          if (!section) return null;
          return (
            <article key={item.id} id={item.id} className="scroll-mt-28 rounded-3xl border border-green-100 bg-white p-6 shadow">
              <header>
                <h2 className="text-2xl font-semibold text-green-900">{section.title}</h2>
                <p className="mt-2 text-sm text-green-700">{item.excerpt}</p>
              </header>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-green-800">
                {section.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {section.actions ? (
                <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                  {section.actions.map((action) => (
                    <Link
                      key={action.label}
                      href={action.url}
                      target={action.url.startsWith("http") ? "_blank" : undefined}
                      rel={action.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-green-700 hover:text-green-900"
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              ) : null}
              <div className="mt-5 text-right text-xs text-green-600">
                <Link href="#top" className="hover:text-green-800">
                  Back to top ↑
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
