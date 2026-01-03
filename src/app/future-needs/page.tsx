import Link from "next/link";

const needs = [
  "For students' learning activities, additional classroom spaces with proper facilities are needed",
  "The college's main hall - Visalaadchi mandabam needs to be renovated with all necessary facilities.",
  "Smart classrooms need to be renovated",
  "Science laboratories for advanced level need to be upgraded and repaired.",
  "An indoor sports arena must be constructed, and the necessary equipment must be provided.",
  "The basketball court must be improved to a better standard.",
  "The sports pavilion construction needs to be completed",
  "More solar panels need to be installed",
  "The school library needs to be expanded and upgraded.",
];

export default function FutureNeeds() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-green-600">Supporting Progress</p>
        <h1 className="text-3xl font-extrabold text-green-900 md:text-4xl">Future Needs of the College</h1>
        <p className="text-green-800">
          Your generosity helps us create inspiring spaces, modernize learning, and nurture every student&apos;s potential.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-green-100 bg-white p-8 shadow">
        <ol className="list-decimal space-y-3 pl-5 text-green-900">
          {needs.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
        <div className="mt-8 space-y-3 text-green-800">
          <p>
            We kindly invite all donors to contact our school office for detailed estimates, project requirements, and available ways to contribute.
          </p>
          <p>Your support will greatly help us improve our facilities and provide a better learning environment for our students.</p>
        </div>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-100"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
