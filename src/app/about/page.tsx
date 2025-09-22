import Image from "next/image";
import Link from "next/link";

import { founder, principals } from "@/data/principals";

const historyParagraphs = [
  "The Saiva Paripalana Sabhai of Jaffna, founded in 1888, established Jaffna Hindu Ladies College on 10 September 1943 to provide girls with a premier Hindu education that mirrored the excellence of Jaffna Hindu College.",
  "Classes first commenced at \"Ponnalayam\", the residence of philanthropist Mr. Sivagurunathar Ponnusamy, before moving to the shared Jaffna Hindu College grounds on 27 February 1944.",
  "Our permanent home was secured on 7 September 1945 when Mrs. Visaladchy Ammal Sivagurunathar generously donated the Naduththoddam estate at Arasady Road, laying the foundation for a campus rooted in faith, culture, and scholarship.",
];

const identityHighlights = [
  {
    title: "Motto",
    description: "“It ought to be beautiful, I live here” — a reminder to honour our environment, conduct, and relationships.",
  },
  {
    title: "School Anthem",
    description: "The anthem pays tribute to wisdom, service, and the blessings of Pillaiyar. Lyrics and audio will be published with archive verification.",
  },
  {
    title: "College Colours",
    description: "The green and gold palette represents growth, resilience, and the radiance of learning — echoed in the flag and tie introduced in the 1950s.",
  },
];

const primarySchoolNote =
  "The Jaffna Hindu Ladies’ Primary School, established in 1978 for Grades 1–5, continues to flourish next door. Mrs. S. Wickneswara served as its first Principal; today it is led by Mrs. T. A. Thuraisingam.";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-6">About Us</h1>

      <h2 className="text-xl font-semibold text-green-800" id="history">
        School History
      </h2>
      <div className="mt-4 space-y-4 text-green-900">
        {historyParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 rounded-2xl bg-green-50 p-4 text-sm text-green-800">
        {primarySchoolNote}
      </p>

      <h2 className="mt-10 text-xl font-semibold text-green-800" id="founder">
        Our Founder
      </h2>
      <div className="mt-4 flex flex-col gap-6 rounded-2xl border border-green-100 bg-white p-6 shadow-sm md:flex-row md:items-center">
        <Image
          src={founder.image ?? "/images/founder-placeholder.svg"}
          alt={`Illustrative portrait for ${founder.name}`}
          width={140}
          height={140}
          className="self-start rounded-full border border-green-200 bg-green-50 p-3"
        />
        <div className="space-y-3 text-green-900">
          <p className="font-semibold">{founder.name}</p>
          <p>{founder.summary}</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-green-800">
            {founder.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-green-800">Mission &amp; Vision</h2>
      <div className="mt-4 space-y-3 rounded-2xl border border-green-100 bg-white p-6 shadow-sm text-green-900">
        <p>
          <span className="font-semibold">Mission:</span> To nurture and empower young women to excel in scholarship,
          leadership, culture, and service to humanity.
        </p>
        <p>
          <span className="font-semibold">Vision:</span> To be a beacon of girls’ education rooted in Hindu values, Tamil
          heritage, and global citizenship.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-green-800">Identity &amp; Traditions</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {identityHighlights.map((item) => (
          <div key={item.title} className="rounded-2xl border border-green-100 bg-green-50 p-4 text-green-900">
            <h3 className="text-lg font-semibold text-green-800">{item.title}</h3>
            <p className="mt-2 text-sm text-green-700">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-green-100 bg-white p-6 shadow-sm md:flex-row md:items-center">
        <Image src="/images/temple.jpg" alt="Rajavarothaya Pillaiyar Temple" width={180} height={140} className="rounded-xl object-cover" />
        <div className="text-green-900">
          <h3 className="text-lg font-semibold text-green-800">Rajavarothaya Pillaiyar Temple</h3>
          <p className="mt-2 text-sm text-green-800">
            The temple, gifted alongside the Naduththoddam estate, has offered continuous blessings and remains the
            spiritual heart of the campus. Its Maha Kumbabishekam was renewed in 1998 following post-war restorations.
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-xl font-semibold text-green-800" id="principals">
        Former Principals
      </h2>
      <p className="mt-3 text-sm text-green-700">
        Explore the leadership legacy of the college. Select a principal to jump to detailed achievements.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {principals.map((principal) => (
          <Link
            key={principal.slug}
            href={`#${principal.slug}`}
            className="group flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-sm font-semibold text-green-700">
              {principal.years.split(" ")[0] ?? ""}
            </div>
            <div className="text-green-900">
              <p className="font-semibold group-hover:text-green-800">{principal.name}</p>
              <p className="text-xs uppercase tracking-wide text-green-600">{principal.years}</p>
              <p className="mt-1 text-sm text-green-700">{principal.summary}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        {principals.map((principal) => (
          <article key={principal.slug} id={principal.slug} className="scroll-mt-24 rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <header className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-green-900">{principal.name}</h3>
                <p className="text-sm uppercase tracking-wide text-green-600">{principal.years}</p>
              </div>
              {principal.qualifications ? (
                <p className="text-sm font-medium text-green-700">{principal.qualifications}</p>
              ) : null}
            </header>
            <p className="mt-3 text-green-800">{principal.summary}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-green-700">
              {principal.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-5 text-right text-xs">
              <Link href="#principals" className="text-green-600 hover:text-green-800">
                Back to list ↑
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
