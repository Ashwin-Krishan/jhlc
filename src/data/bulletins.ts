export type BulletinItem = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  cta?: string;
};

export const bulletinItems: BulletinItem[] = [
  {
    id: "national-dance-drama-2025",
    title: "National Dance Drama Champions",
    excerpt:
      "21.09.2025 — JHLC secured first place at the National Level Dance Drama Competition with a spellbinding performance by the senior cultural troupe.",
    href: "/news#national-dance-drama-2025",
    cta: "Celebrate the victory",
  },
  {
    id: "term-3",
    title: "Term 3 Readiness Week",
    excerpt:
      "Orientation sessions for new students, subject selection clinics, and mentoring circles with alumnae.",
    href: "/news#term-3",
    cta: "Read schedule",
  },
  {
    id: "sports-day",
    title: "Annual Sports Day Volunteers",
    excerpt:
      "Parents and Old Girls can register online to support logistics, judging panels, and hospitality tents.",
    href: "/news#sports-day",
    cta: "Sign up",
  },
  {
    id: "scholarships",
    title: "STEM Scholarship Applications Open",
    excerpt:
      "Advanced Level students can now apply for the Visaladchy STEM grants in partnership with OGA chapters.",
    href: "/news#stem-scholarships",
    cta: "Apply today",
  },
];
