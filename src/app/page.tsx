"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import BulletinBoard from "@/components/BulletinBoard";
import Calendar from "@/components/Calendar";
import { founder } from "@/data/principals";
import { principalMessage } from "@/data/principalMessage";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  imageClassName?: string;
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
    alt: "Visaladchy Hall on campus",
    title: "Visaladchy Hall",
    description:
      "Visaladchy Hall hosts cultural showcases, assemblies, and celebrations that bring the entire school community together.",
  },
  {
    src: "/images/mrs-visaladchy.jpeg",
    alt: "Portrait of Mrs. Visaladchy Sivagurunathar",
    title: "Founder Mrs. Visaladchy Sivagurunathar",
    description:
      "Our beloved founder whose generosity gifted the Naduththoddam estate and temple, laying the foundation for a premier girls' institution in Jaffna.",
    imageClassName: "object-top",
  },
  {
    src: "/images/gate.jpg",
    alt: "Entrance gate of the college",
    title: "College Gates",
    description:
      "The Arasady Road entrance stands as a symbol of welcome, discipline, and the vibrant community that thrives within the campus walls.",
  },
  {
    src: "/images/school-student-houses.jpeg",
    alt: "Students of Jaffna Hindu Ladies College representing their houses",
    title: "House Colours United",
    description:
      "Students proudly carry their house flags, celebrating teamwork, sportsmanship, and the spirited traditions of inter-house events.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];
  const currentItem = galleryItems[currentSlide];
  const principalParagraphs = principalMessage.flatMap((section) =>
    section.paragraphs.map((paragraph, index) => ({
      language: section.language,
      paragraph,
      isFirstInSection: index === 0,
    }))
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % galleryItems.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    if (index < 0) {
      setCurrentSlide(galleryItems.length - 1);
      return;
    }
    if (index >= galleryItems.length) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(index);
  };

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
        <div
          className="w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-green-100 shadow">
            <button
              type="button"
              onClick={() => setActiveIndex(currentSlide)}
              className="relative block h-full w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              <Image
                key={currentItem.src}
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 70vw"
                className={`object-cover transition duration-700 ease-out ${currentItem.imageClassName ?? ""}`}
              />
              <span className="sr-only">Expand {currentItem.title}</span>
            </button>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-left text-white">
              <h3 className="text-2xl font-semibold">{currentItem.title}</h3>
              <p className="mt-2 text-sm md:text-base">{currentItem.description}</p>
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-4">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goToSlide(currentSlide - 1);
                }}
                className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white transition hover:bg-black/60"
                aria-label="View previous photo"
              >
                <span aria-hidden>&lt;</span>
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goToSlide(currentSlide + 1);
                }}
                className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white transition hover:bg-black/60"
                aria-label="View next photo"
              >
                <span aria-hidden>&gt;</span>
              </button>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {galleryItems.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => goToSlide(index)}
                className={`group relative h-16 w-24 overflow-hidden rounded-xl border transition ${
                  index === currentSlide ? "border-green-500 shadow" : "border-green-100 hover:border-green-300"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="96px"
                  className={`object-cover ${item.imageClassName ?? ""}`}
                />
                <span className="sr-only">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <div className="rounded-3xl border border-green-100 bg-white p-8 shadow">
          <h3 className="text-xl font-semibold text-green-900">Welcome Message</h3>
          <p className="mt-3 text-green-800">
            JHLC—where tradition inspires excellence. Welcome to Jaffna Hindu Ladies College, a proud institution dedicated to empowering young women through education rooted in Hindu values, Tamil heritage, and academic excellence.
          </p>
          <p className="mt-4 text-green-800">
            Since our founding in 1943, we have remained committed to nurturing the minds and spirits of generations of students, guiding them to become confident, compassionate, and capable leaders of tomorrow. We offer a holistic learning experience that blends tradition with progress, preparing our students for life beyond the classroom.
          </p>
          <p className="mt-4 text-green-800">
            We invite you to explore our website to discover more about our history, diverse programs, achievements, and the vibrant school life that makes JHLC a truly special place. Whether you are a student, parent, alumna, or visitor, we are delighted to welcome you to be part of our journey.
          </p>
          <p className="mt-4 text-sm text-green-700">
            Join us as we continue our legacy of excellence — together, we shape the future.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6 rounded-3xl border border-green-100 bg-green-50/60 p-8 text-left shadow">
            <h2 className="text-2xl font-bold text-green-900">Principal&apos;s Message</h2>
            <div className="space-y-4 rounded-2xl border border-green-100 bg-white p-6">
              <div className="mx-auto w-full max-w-[220px] lg:float-right lg:ml-6 lg:mb-4 lg:mt-6">
                <Image
                  src="/images/principal-message.jpg"
                  alt="Illustration from the principal's message"
                  width={220}
                  height={260}
                  className="h-auto w-full rounded-2xl border border-green-100 object-cover shadow"
                  priority
                />
              </div>
              <div className="space-y-4 text-justify">
                {principalParagraphs.map(({ language, paragraph, isFirstInSection }, index) => (
                  <p
                    key={`principal-paragraph-${index}`}
                    className={`text-base leading-relaxed ${
                      language === "en" ? "font-semibold italic text-green-700" : "text-green-800"
                    } ${isFirstInSection && language === "ta" ? "font-semibold" : ""}`.trim()}
                    lang={language === "ta" ? "ta" : "en"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-green-100 bg-white p-8 shadow">
              <h3 className="text-xl font-semibold text-green-900">The Heartbeat of JHLC</h3>
              <ul className="mt-4 space-y-3 text-sm text-green-800">
                <li><span className="font-semibold">Founded:</span> 10 September 1943 by the Saiva Paripalana Sabhai.</li>
                <li>
                  <span className="font-semibold">Heritage:</span> Deep cultural roots with the Naduththoddam Estate and Rajavarothaya Pillaiyar Temple, gifted by the Sivagurunathar family.
                </li>
                <li>
                  <span className="font-semibold">Academics:</span> Comprehensive education from Primary foundation to Advanced Level pathways in Science, Commerce, and Arts.
                </li>
                <li>
                  <span className="font-semibold">Technology &amp; Innovation:</span> Modern ICT laboratories, smart classrooms, and digital resources supporting advanced learning.
                </li>
                <li>
                  <span className="font-semibold">Extracurricular Excellence:</span> Wide range of sports, cultural programs, music, arts, and student clubs nurturing talent and leadership.
                </li>
                <li>
                  <span className="font-semibold">Community:</span> Currently serves [number] students with [number] dedicated staff.
                </li>
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900">
                Discover our story <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-8 shadow">
              <h3 className="text-xl font-semibold text-green-900">Honouring Our Founder</h3>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src={founder.image ?? "/images/mrs-visaladchy-small.jpeg"}
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
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className={`object-cover ${activeItem.imageClassName ?? ""}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
