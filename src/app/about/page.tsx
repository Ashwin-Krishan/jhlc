import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { founder, principals } from "@/data/principals";

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

type ClubProfile = {
  name: string;
  objective: string;
  goals: string[];
};

const historyParagraphs = [
  "The Saiva Paripalana Sabhai of Jaffna, founded in 1888, established Jaffna Hindu Ladies College on 10 September 1943 to provide girls with a premier Hindu education that mirrored the excellence of Jaffna Hindu College.",
  "Classes first commenced at \"Ponnalayam\", the residence of philanthropist Mr. Sivagurunathar Ponnusamy, before moving to the shared Jaffna Hindu College grounds on 27 February 1944.",
  "Our permanent home was secured on 7 September 1945 when Mrs. Visaladchy Ammal Sivagurunathar generously donated the Naduththoddam estate at Arasady Road, laying the foundation for a campus rooted in faith, culture, and scholarship.",
];

const identityHighlights: IdentityHighlight[] = [
  {
    title: "Motto",
    description: "“It ought to be beautiful, I live here” — a reminder to honour our environment, conduct, and relationships.",
  },
  {
    title: "College Colours",
    description: "The green and gold palette represents growth, resilience, and the radiance of learning — echoed in the flag and tie introduced in the 1950s.",
  },
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
          Green and gold stripes encircle the sacred lamp and Veena, symbolising enlightenment, the arts, and unity under Saivite values. The emblem shines at assemblies, investitures, and inter-house parades as a proud reminder of our heritage.
        </p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-green-200 bg-white">
        <iframe
          src="/school-anthem.pdf#toolbar=0"
          title="Jaffna Hindu Ladies College School Anthem"
          className="h-[34rem] w-full"
          aria-label="Embedded PDF of the Jaffna Hindu Ladies College School Anthem"
        />
        <p className="px-5 pb-5 pt-3 text-sm text-green-600">
          Ensure PDF viewing is enabled in your browser to see the full lyrics and musical score, honouring Pillaiyar&apos;s blessings and the college&apos;s call to wisdom and service.
        </p>
      </div>
    </div>
  ),
};

const clubsAndUnions: ClubProfile[] = [
  {
    name: "Science Club",
    objective: "To ignite curiosity and a passion for discovery in young minds.",
    goals: [
      "Make science come alive through hands-on experiments, exhibitions, and projects.",
      "Motivate students to explore, question, and innovate.",
      "Open doors to competitions and opportunities that take scientific learning beyond the classroom.",
    ],
  },
  {
    name: "Library Club",
    objective: "To cultivate a love for books and lifelong learning among students.",
    goals: [
      "Encourage regular reading through engaging activities and challenges.",
      "Help students discover new genres, authors, and ideas.",
      "Create a welcoming space where knowledge, imagination, and creativity can thrive.",
    ],
  },
  {
    name: "Arts & Culture Union",
    objective: "To nurture the creative spirit of students through dance, music, drama, literature, and visual arts.",
    goals: [
      "Inspire self-expression and foster cultural appreciation.",
      "Provide opportunities for students to showcase their artistic talents through shows and competitions.",
      "Strengthen teamwork, confidence, and community engagement through the arts.",
    ],
  },
  {
    name: "Innovation Club",
    objective: "To spark creativity, encourage problem-solving, and cultivate a forward-thinking mindset in students.",
    goals: [
      "Provide a platform to explore new ideas and embrace technology.",
      "Develop innovative solutions to real-world challenges through hands-on experiences.",
      "Inspire curiosity and equip students with skills to become confident innovators and future leaders.",
    ],
  },
  {
    name: "Commerce Union",
    objective: "To promote commercial knowledge, practical business skills, and an understanding of economic principles among students.",
    goals: [
      "Organize Commerce Awareness Day and Commerce Day celebrations.",
      "Publish books and resources to share knowledge.",
      "Conduct model market activities to give students real-world business experience.",
      "Host competitions to develop creativity, critical thinking, and entrepreneurial skills.",
    ],
  },
  {
    name: "Hindu Association",
    objective: "To preserve and promote Hindu traditions, values, and spiritual practices within the school community.",
    goals: [
      "Organize and celebrate all major Hindu festivals.",
      "Perform special rituals on significant religious occasions.",
      "Arrange poojas and ceremonies at the school temple to encourage spiritual growth and cultural awareness.",
    ],
  },
  {
    name: "Physical Education Club",
    objective: "To promote physical fitness, sportsmanship, and a healthy lifestyle among students.",
    goals: [
      "Organize annual sports meets and athletic events at school.",
      "Train athletes and prepare them for interschool, regional, provincial, and national competitions.",
      "Encourage teamwork, discipline, and perseverance through sports activities.",
    ],
  },
  {
    name: "Interact Club",
    objective: "To develop leadership, responsibility, and a spirit of community service among students.",
    goals: [
      "Organize service projects that benefit the school and local community.",
      "Promote international understanding and goodwill through cultural exchange and awareness activities.",
      "Provide opportunities for students to build teamwork, communication, and leadership skills.",
    ],
  },
  {
    name: "Leo Club",
    objective: "To empower young people to serve their communities, develop leadership skills, and foster personal growth.",
    goals: [
      "Plan and carry out service projects that create a positive impact.",
      "Provide opportunities for leadership development and teamwork.",
      "Encourage social responsibility, compassion, and active citizenship among members.",
    ],
  },
  {
    name: "Computer Union",
    objective: "To enhance students’ digital literacy, technical skills, and innovative thinking through computing and programming activities.",
    goals: [
      "Train younger students in typing and foundational computer operations.",
      "Provide programming training for senior students.",
      "Organize quizzes and competitions to expand computer knowledge.",
      "Participate in and support innovation programmes that encourage creative problem-solving using technology.",
    ],
  },
  {
    name: "English Union",
    objective: "To enhance students’ proficiency in English and foster confidence in communication through diverse language and drama activities.",
    goals: [
      "Encourage participation in English language and drama competitions from class to national level.",
      "Conduct weekly Thursday morning assembly programmes to promote English usage.",
      "Celebrate English Day and publish the annual magazine Ladies Leap.",
      "Support participation in external competitions to aid professional and personal development.",
      "Improve listening, speaking, reading, and writing skills through immersive practice.",
    ],
  },
  {
    name: "A/L Union",
    objective: "To foster friendship, cooperation, and unity among Advanced Level students.",
    goals: [
      "Organize the annual get-together for Advanced Level students.",
      "Create opportunities for bonding and mutual support.",
      "Promote teamwork, collaboration, and a positive learning environment.",
    ],
  },
  {
    name: "Tamil Union",
    objective: "To promote the Tamil language, literature, and cultural values while developing communication and creative skills.",
    goals: [
      "Prepare students for regional and national Tamil competitions, including essay contests.",
      "Train students to lead morning prayers and share reflections for the day.",
      "Organize and celebrate Tamil Day at school to honour the language and its heritage.",
    ],
  },
  {
    name: "Photography Club",
    objective: "To develop students’ photography skills and create a visual record of school events and activities.",
    goals: [
      "Capture and document photographs of school functions and special moments.",
      "Participate in photography seminars to enhance technical skills and artistic vision.",
      "Encourage creativity, observation, and storytelling through images.",
    ],
  },
  {
    name: "Social Science Union",
    objective:
      "To deepen students’ understanding of history, geography, civics, and cultural heritage while encouraging critical thinking about society.",
    goals: [
      "Organize activities, competitions, and exhibitions related to the social sciences.",
      "Promote awareness of historical events, civic responsibilities, and global issues.",
      "Encourage research, discussion, and debate on topics that shape communities and nations.",
    ],
  },
  {
    name: "School Band",
    objective:
      "To cultivate students’ musical talents and teamwork while enhancing school spirit through performances at inter-house sports meets and key events.",
    goals: [
      "Provide rhythmic and musical support during sports meets, parades, and school ceremonies.",
      "Develop discipline, coordination, and confidence through regular practice and performance.",
      "Promote unity and pride by leading the march-past and fostering a lively atmosphere.",
      "Represent the school with excellence and uphold its traditions through quality music.",
    ],
  },
];

const primarySchoolNote =
  "The Jaffna Hindu Ladies’ Primary School, established in 1978 for Grades 1–5, continues to flourish next door. Mrs. S. Wickneswara served as its first Principal; today it is led by Mrs. T. A. Thuraisingam.";

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
      <div className="mt-6 space-y-8">
        <HighlightCard item={flagshipHighlight} />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {identityHighlights.map((item) => (
          <HighlightCard key={item.title} item={item} />
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

      <h2 className="mt-12 text-xl font-semibold text-green-800" id="clubs">
        Clubs &amp; Unions
      </h2>
      <p className="mt-3 text-sm text-green-700">
        Student leadership, service, artistry, and scholarship thrive through our vibrant co-curricular societies.
        Each club nurtures talent while staying rooted in the ethos of Jaffna Hindu Ladies College.
      </p>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {clubsAndUnions.map((group) => (
          <div key={group.name} className="rounded-3xl border border-green-100 bg-white p-6 shadow-md md:p-8">
            <h3 className="text-2xl font-semibold text-green-900">{group.name}</h3>
            <p className="mt-3 text-base leading-relaxed text-green-700">
              <span className="font-semibold text-green-800">Objective:</span> {group.objective}
            </p>
            <div className="mt-4">
              <p className="text-base font-semibold uppercase tracking-wide text-green-600">Goals</p>
              <ul className="mt-2 list-disc space-y-3 pl-6 text-base leading-relaxed text-green-700">
                {group.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
