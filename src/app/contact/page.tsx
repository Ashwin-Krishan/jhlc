import Link from "next/link";

const contactDetails = [
  { label: "Email", value: "info@jhlc.lk", href: "mailto:info@jhlc.lk" },
  { label: "Phone", value: "+94 21 222 2222", href: "tel:+94212222222" },
  { label: "Address", value: "Arasady Road, Jaffna, Sri Lanka" },
  { label: "Office Hours", value: "Monday - Friday, 8:00 AM - 3:00 PM" },
];

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-green-600">Stay Connected</p>
        <h1 className="text-3xl font-extrabold text-green-900 md:text-4xl">Contact Us</h1>
        <p className="text-green-800">
          Reach out to Jaffna Hindu Ladies College for admissions, alumni inquiries, partnerships, or support.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-green-100 bg-white p-8 shadow">
        <div className="grid gap-6 md:grid-cols-2">
          {contactDetails.map(({ label, value, href }) => (
            <div key={label} className="rounded-2xl border border-green-50 bg-green-50/50 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-green-600">{label}</p>
              {href ? (
                <Link href={href} className="mt-2 block text-lg font-semibold text-green-900 hover:text-green-700">
                  {value}
                </Link>
              ) : (
                <p className="mt-2 text-lg font-semibold text-green-900">{value}</p>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-green-800">
          For detailed estimates on ongoing projects or to learn how you can contribute, please contact our school office. We look forward to hearing from you.
        </p>
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
