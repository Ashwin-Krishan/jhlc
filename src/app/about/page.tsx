import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { principals } from "@/data/principals";

type IdentityHighlight = {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  content?: ReactNode;
  className?: string;
};

const historyParagraphs = [
  "Established in 1943, founded by Mrs. Visaladchi Sivakurunathar, Jaffna Hindu Ladies' College stands as a beacon of education, culture, and empowerment in the Northern Province. As a leading girls' secondary school, our institution is dedicated to nurturing confident, compassionate, and capable young women who are prepared to shape the future with knowledge and integrity. We nurture and empower young women to excel in scholarship, leadership, culture, and service to humanity while remaining a beacon of girls' education rooted in Hindu values, Tamil heritage, and global citizenship.",
];

const identityHighlights: IdentityHighlight[] = [
  {
    title: "Motto",
    description: "“It ought to be beautiful, I live here.” Our motto reflects our belief that education is not only about acquiring knowledge but also about creating beauty — in thought, action, and community. Each student is encouraged to make her environment, and the world she lives in, more meaningful and beautiful through her deeds.",
  },
  {
    title: "College Colours",
    description: "The green and white palette represents growth, resilience, and the radiance of learning — echoed in the flag and tie introduced in the 1950s.",
  },
];

const anthemVerses: string[][] = [
  [
    "திருமிகு மெங்கள் யாழ்நகர்க் கணியாய்த்",
    "திகழ்ந்திடும் கல்லூரி - எங்கள்",
    "பெரு வரு மிந்துப் பெண்களுக் கொளியாய்ப்",
    "பிறங்கிடுங் கல்லூரி - உயர்",
    "மருவுறு கலைகள் யாவையும் மின்பாய்",
    "வழங்கிடுங் கல்லூரி - உனைப்",
    "பெருகிடும் அன்பால் புந்தியில் வைத்துன்",
    "புகழினை வாழ்த்ததோமோ - உனை",
    "வந்தே மாதரம் வந்தே மாதரம்",
    "என்று வணங்கோமோ.",
  ],
  [
    "இந்து மதப் புகழ் எங்கும் விளங்கிட",
    "இசைந்திடுங் கல்லூரி - இயல்",
    "சிந்தை வளம் பெற மெய்ப் பொருளறிவைச்",
    "சேர்த்திடுங் கல்லூரி - வளர்",
    "செந்தமிழ் ஆங்கில வடமொழி அறிவைச்",
    "சுரந்திடுங் கல்லூரி - உனை",
    "வந்தனை செய்து பைந்தமிழ் மாலை",
    "வாழ்த் தொடுசூ டோமோ - உனை",
    "வந்தே மாதரம் வந்தே மாதரம்",
    "என்று வணங்கோமோ.",
  ],
  [
    "மங்கையர் மாண்பை மன்பதை அறிய",
    "முழங்கிடுங் கல்லூரி - ஒளி",
    "பொங்குயர் அறிவுச் சுடரினை யுளத்திற்",
    "பொறித்திடுங் கல்லூரி - இந்து",
    "நங்கையர் வாழ்வின் லட்சிய மனைத்தும்",
    "நல்கிடுங் கல்லூரி - உனை",
    "அங்கையில் மலர்கொண் டன்புடன் பாடி",
    "அனுதினம் ஏத்தோமோ - உனை",
    "வந்தே மாதரம் வந்தே மாதரம்",
    "என்று வணங்கோமோ.",
  ],
  [
    "கலைமகள் உலவக் களிநடம் புரியக்",
    "கண்டிடுங் கல்லூரி - என்றும்",
    "மலைமகள் கொழுநன் மலரடி போற்றி",
    "மாண்புறுங் கல்லூரி - நித்தம்",
    "நிலமகள் நெற்றித் திலகமென் றேத்த",
    "நிலைத்திடுங் கல்லூரி - உனைத்",
    "தலைமுறையாகத் தொழு துளங் குளிரத்",
    "துதி சொல்லிப் பாடோமோ - உனை",
    "வந்தே மாதரம் வந்தே மாதரம்",
    "என்று வணங்கோமோ.",
  ],
];

const flagshipHighlight: IdentityHighlight = {
  title: "School Flag & Anthem",
  description:
    "Our flag and anthem stand as enduring symbols of Jaffna Hindu Ladies College, uniting generations through shared colours, melody, and devotion.",
  className: "bg-white text-center md:p-12 shadow-lg",
  content: (
    <div className="mt-6 space-y-8">
      <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
        <Image
          src="/school-flag.jpg"
          alt="School flag of Jaffna Hindu Ladies College featuring sacred lamp and Veena emblems"
          width={880}
          height={520}
          className="mx-auto rounded-2xl object-contain shadow-md"
        />
        <p className="mt-4 text-base leading-relaxed text-green-700">
          The flag of Jaffna Hindu Ladies College, proudly adorned in green and white, embodies the spirit and values of our institution. It serves as a reminder of unity and pride, inspiring every student to uphold the honour of Jaffna Hindu Ladies’ College in all her endeavours.
        </p>
      </div>
      <div className="rounded-3xl border border-green-200 bg-white p-6 text-center">
        <h4 className="text-lg font-semibold text-green-900">கல்லூரி கீதம்</h4>
        <div className="mt-4 space-y-3 text-green-900 mx-auto max-w-2xl">
          {anthemVerses.map((lines, verseIndex) => (
            <div key={verseIndex} className="space-y-0.5">
              {lines.map((line, lineIndex) => (
                <p
                  key={`${verseIndex}-${lineIndex}`}
                  className={`leading-snug whitespace-pre-line text-left ${
                    lineIndex % 2 === 0 ? "pl-50" : "pl-60"
                  }`}
                  lang="ta"
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

const primarySchoolNote =
  "The Jaffna Hindu Ladies' Primary School, established in 1978 for Grades 1–5, continues to flourish next door. Mrs. S. Wickneswara served as its first Principal; today it is led by Mrs. T. A. Thuraisingam.";

function HighlightCard({ item }: { item: IdentityHighlight }) {
  return (
    <div
      className={`rounded-3xl border border-green-100 bg-green-50 p-5 text-green-900 shadow-sm md:p-6 ${item.className ?? ""}`}
    >
      <h3 className="text-2xl font-semibold text-green-900">{item.title}</h3>
      {item.image ? (
        <div className="mt-5 flex justify-center">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
            className="rounded-2xl object-contain shadow"
          />
        </div>
      ) : null}
      {item.description ? (
        <p className="mt-3 text-base leading-relaxed text-green-700">
          {item.description}
          {item.href ? (
            <span className="mt-2 block">
              <Link href={item.href} className="font-semibold text-green-700 underline underline-offset-4 hover:text-green-900">
                {item.linkLabel ?? "Learn more"}
              </Link>
            </span>
          ) : null}
        </p>
      ) : null}
      {item.content}
    </div>
  );
}

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center gap-8 text-center">
        <Image src="/images/logo.png" width={104} height={104} alt="Jaffna Hindu Ladies College crest" priority />
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.35em] text-green-600">Jaffna Hindu Ladies College</p>
          <h1 className="text-3xl font-extrabold text-green-900 md:text-4xl">“It ought to be beautiful, I live here.”</h1>
        </div>
      </div>

      <h2 className="mt-12 text-xl font-semibold text-green-800" id="history">
        Our Legacy
      </h2>
      <div className="mt-4 space-y-4 text-green-900">
        {historyParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 rounded-2xl bg-green-50 p-4 text-sm text-green-800">
        {primarySchoolNote}
      </p>

      <h2 className="mt-10 text-xl font-semibold text-green-800">Identity &amp; Traditions</h2>
      <div className="mt-6 space-y-8">
        <HighlightCard item={flagshipHighlight} />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {identityHighlights.map((item) => (
          <HighlightCard key={item.title} item={item} />
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold text-green-800" id="principals">
        Former Principals
      </h2>
      <div className="mt-10 space-y-10">
        {principals.map((principal) => (
          <article key={principal.slug} id={principal.slug} className="scroll-mt-24 rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row">
              {principal.image ? (
                <div className="mx-auto flex-shrink-0 md:mx-0">
                  <Image
                    src={principal.image}
                    alt={`Portrait of ${principal.name}`}
                    width={180}
                    height={220}
                    className="h-56 w-40 rounded-2xl border border-green-100 object-cover shadow-sm"
                  />
                </div>
              ) : null}
              <div className="flex-1">
                <header className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-green-900">{principal.name}</h3>
                    <p className="text-sm uppercase tracking-wide text-green-600">{principal.years}</p>
                  </div>
                  {principal.qualifications ? (
                    <p className="text-sm font-medium text-green-700 md:text-right">{principal.qualifications}</p>
                  ) : null}
                </header>
                <div className="mt-4 space-y-3 text-green-800">
                  {principal.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-5 text-right text-xs">
                  <Link href="#principals" className="text-green-600 hover:text-green-800">
                    Back to list ↑
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
