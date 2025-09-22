"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import BulletinBoard from "@/components/BulletinBoard";
import Calendar from "@/components/Calendar";
import { founder } from "@/data/principals";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/front-view.jpg",
    alt: "Front view of Jaffna Hindu Ladies College",
    title: "Historic Front Facade",
    description:
      "The main frontage of Jaffna Hindu Ladies College, welcoming generations of students to a campus rich with Saivite values and academic excellence.",
  },
  {
    src: "/images/saraswati.jpg",
    alt: "Saraswati statue at the college",
    title: "Goddess Saraswati Statue",
    description:
      "Honouring the patron of knowledge, music, and arts, this statue inspires every student to pursue wisdom with humility and grace.",
  },
  {
    src: "/images/temple.jpg",
    alt: "Rajavarothaya Pillaiyar temple on campus",
    title: "Rajavarothaya Pillaiyar Temple",
    description:
      "The sacred heart of campus life, the temple provides daily blessings and spiritual grounding for staff and students alike.",
  },
  {
    src: "/images/mrs-visaladchy.jpeg",
    alt: "Portrait of Mrs. Visaladchy Sivagurunathar",
    title: "Founder Mrs. Visaladchy Sivagurunathar",
    description:
      "Our beloved founder whose generosity gifted the Naduththoddam estate and temple, laying the foundation for a premier girls' institution in Jaffna.",
  },
  {
    src: "/images/gate.jpg",
    alt: "Entrance gate of the college",
    title: "College Gates",
    description:
      "The Arasady Road entrance stands as a symbol of welcome, discipline, and the vibrant community that thrives within the campus walls.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-col items-center gap-8 text-center">
        <Image src="/images/logo.png" width={104} height={104} alt="Jaffna Hindu Ladies College crest" priority />
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.35em] text-green-600">Since 1943</p>
          <h1 className="text-4xl font-extrabold text-green-900 md:text-5xl">Jaffna Hindu Ladies College</h1>
          <p className="text-lg italic text-green-700">“It ought to be beautiful, I live here.”</p>
        </div>
        <p className="max-w-3xl text-green-900 md:text-lg">
          Guided by Saivite values, academic rigor, and community service, we cultivate confident young women who contribute to the world with compassion, scholarship, and leadership.
        </p>
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative h-40 overflow-hidden rounded-2xl border border-green-100 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 py-2 text-start text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 rounded-3xl border border-green-100 bg-green-50/60 p-8 text-left shadow">
          <h2 className="text-2xl font-bold text-green-900">Principal&apos;s Message</h2>
          <p className="text-green-800">
            “Welcome to Jaffna Hindu Ladies College, where tradition meets innovation. Every learner is nurtured to discover her voice, achieve academic distinction, and uphold the values of humility, service, and unity.”
          </p>
          <p className="text-sm font-semibold text-green-700">Mrs. V. Perinpanathan, Principal</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-green-100 bg-white p-8 shadow">
          <h3 className="text-xl font-semibold text-green-900">Campus at a Glance</h3>
          <ul className="space-y-3 text-sm text-green-800">
            <li><span className="font-semibold">Motto:</span> “It ought to be beautiful, I live here.”</li>
            <li><span className="font-semibold">Founded:</span> 10 September 1943 by the Saiva Paripalana Sabhai.</li>
            <li><span className="font-semibold">Heritage:</span> Naduththoddam estate and Rajavarothaya Pillaiyar Temple gifted by the Sivagurunathar family.</li>
            <li><span className="font-semibold">Academics:</span> From primary foundation to Advanced Level pathways in science, commerce, and arts.</li>
          </ul>
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900">
            Discover our story <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-green-100 bg-white p-8 shadow">
          <h3 className="text-xl font-semibold text-green-900">Welcome Message</h3>
          <p className="mt-3 text-green-800">
            Established amidst the cultural renaissance of Jaffna, the college continues to empower generations of students to pursue knowledge, celebrate the arts, and lead with integrity. We invite Old Girls, families, and well-wishers to walk with us as we build the next chapter of excellence.
          </p>
          <p className="mt-4 text-sm text-green-700">
            Guided by our Board of Management, temple traditions, and Old Girls&apos; Associations across the world, the campus remains a beacon for girls&apos; education in Sri Lanka.
          </p>
        </div>
        <div className="rounded-3xl border border-green-100 bg-white p-8 shadow">
          <h3 className="text-xl font-semibold text-green-900">Honouring Our Founder</h3>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src={founder.image ?? "/images/mrs-visaladchy.jpeg"}
              alt={`Portrait of ${founder.name}`}
              width={96}
              height={96}
              className="rounded-full border border-green-200 bg-green-50 p-2 object-cover"
            />
            <div className="text-sm text-green-800">
              <p className="font-semibold">{founder.name}</p>
              <p className="mt-1">
                Philanthropist and visionary who gifted the Naduththoddam estate and temple, making the college a sanctuary for learning and faith.
              </p>
            </div>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-green-700">
            {founder.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/about#founder" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900">
            Read the full tribute <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Calendar />
        <BulletinBoard />
      </div>

      <div className="mt-12 rounded-3xl border border-green-100 bg-green-50 p-8 text-center shadow">
        <h3 className="text-xl font-semibold text-green-900">Stay Connected</h3>
        <p className="mt-3 text-green-800">Explore OGA chapters, campus facilities, and resources curated for students and families.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm font-semibold">
          <Link href="/alumni" className="rounded-full border border-green-200 bg-white px-4 py-2 text-green-700 hover:text-green-900">
            Alumni Network
          </Link>
          <Link href="/facilities" className="rounded-full border border-green-200 bg-white px-4 py-2 text-green-700 hover:text-green-900">
            Campus Facilities
          </Link>
          <Link href="/resources" className="rounded-full border border-green-200 bg-white px-4 py-2 text-green-700 hover:text-green-900">
            Learning Resources
          </Link>
        </div>
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-green-200 text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Close image preview"
            >
              ×
            </button>
            <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image src={activeItem.src} alt={activeItem.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-green-900">{activeItem.title}</h3>
                <p className="text-green-700">{activeItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
