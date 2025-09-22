import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-extrabold text-green-900">404</h1>
      <p className="mt-4 text-lg text-green-900">Page not found.</p>
      <p className="mt-2 text-green-700">
        The page you are looking for may have been moved or does not exist.
      </p>
      <Link
        href="/"
        className="inline-block mt-6 bg-green-700 text-white px-6 py-2 rounded font-semibold hover:bg-green-800 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}