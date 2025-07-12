import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-6">About Us</h1>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-green-800">School History</h2>
      <p className="text-green-900 mb-4">
        The Saiva Paripalana Sabhai, Jaffna was established in 1888 to revive Hindu religion and Tamil
        Culture in Jaffna in particular and in the rest of Sri Lanka. In 1935, Jaffna Hindu College admitted girls,
        and on 10th September 1943, Jaffna Hindu Ladies College was established as the only girls&apos; school under
        its purview. The school moved to its permanent location in 1945 on land donated by Mrs. Visaladchy Ammal Sivagurunathar.
      </p>
      <p className="text-green-900 mb-4">
        Over the decades, the college has seen tremendous growth, adding new facilities, expanding academic programs,
        and maintaining a strong focus on culture and values.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-green-800">Mission & Vision</h2>
      <p className="text-green-900 mb-2">
        <span className="font-bold">Mission:</span> To nurture and empower young women to excel in academics, leadership, and culture.
      </p>
      <p className="text-green-900 mb-4">
        <span className="font-bold">Vision:</span> To be a beacon of excellence in girls&apos; education, grounded in Hindu values and Tamil tradition.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-green-800">Logo</h2>
      <div className="mb-4">
        <Image src="/images/logo.png" alt="School Logo" width={100} height={100} />
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-green-800">Temple</h2>
      <p className="text-green-900 mb-4">
        The Naduthodda Rajavarothaya Pillaiyar Temple is situated within the college premises, providing continuous blessings to all students and staff since the school&apos;s establishment.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-green-800">Former Principals</h2>
      <ul className="list-disc list-inside text-green-900 mb-4 space-y-2">
        <li>Mr. A. Cumaraswamy (Founder Principal)</li>
        <li>Miss. Gayathiri Ponnuththurai (1943-1944)</li>
        <li>Miss Muthu Atchchiah (1944-1945)</li>
        <li>Mrs. Jemmarani Sittampalam</li>
        <li>Mrs. Clara Motwani (1946-1948)</li>
        <li>Mrs. Sarojini Rao (1948-1954)</li>
        <li>Mrs. Vimala Arumugam (1954-1976)</li>
        <li>Ms. Pathmawathy Ramanathan (1976-1986)</li>
        <li>Mrs. Thivyasironmany Nagarajah (1986-1993)</li>
        <li>Mrs. Saraswathy Jeyarajah (1993-2006)</li>
        <li>Mrs. V. Perinpanathan (2006–present)</li>
      </ul>
    </section>
  );
}
