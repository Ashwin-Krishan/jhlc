import Link from "next/link";

import { clubs, sports } from "@/data/beyondClassrooms";

const renderClubCards = () => (
  <div className="mt-6 grid gap-6 md:grid-cols-2">
    {clubs.map((club) => (
      <div key={club.slug} className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-green-900">{club.name}</h3>
        <p className="mt-2 text-sm text-green-700">{club.objective}</p>
        <Link
          href={`/beyond-classrooms/${club.slug}`}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition hover:bg-green-100"
        >
          Read more <span aria-hidden>→</span>
        </Link>
      </div>
    ))}
  </div>
);

const renderSportsCards = () => (
  <div className="mt-6 grid gap-6 md:grid-cols-2">
    {sports.map((sport) => (
      <div key={sport.slug} className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-green-900">{sport.title}</h3>
        <p className="mt-2 text-sm text-green-700">{sport.description}</p>
        <Link
          href={`/beyond-classrooms/${sport.slug}`}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition hover:bg-green-100"
        >
          Read more <span aria-hidden>→</span>
        </Link>
      </div>
    ))}
  </div>
);

export default function BeyondClassrooms() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Beyond Classrooms</h1>
      <p className="text-green-800">
        Holistic education flourishes through vibrant clubs, athletic excellence, performing arts, and academic leagues.
        Explore the opportunities that shape confident, community-minded graduates.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-green-800" id="clubs">Clubs &amp; Unions</h2>
      <p className="mt-3 text-sm text-green-700">
        Student leadership, service, artistry, and scholarship thrive through our vibrant co-curricular societies.
        Each club nurtures talent while staying rooted in the ethos of Jaffna Hindu Ladies College.
      </p>
      {renderClubCards()}

      <h2 className="mt-10 text-xl font-semibold text-green-800" id="sports">Sports Teams</h2>
      {renderSportsCards()}

    </section>
  );
}
