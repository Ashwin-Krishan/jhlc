export type BulletinItem = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  cta?: string;
};

export const bulletinItems: BulletinItem[] = [
  {
    id: "new-year-wish-2026",
    title: "Happy New Year 2026!",
    excerpt:
      "Wishing all students, staff, parents, and the entire JHLC family a joyful and prosperous New Year. May the year ahead bring success, health, and happiness to all.",
    href: "/news#new-year-wish-2026",
    cta: "Read the message",
  },
  {
    id: "al-results-2025",
    title: "Outstanding G.C.E. (A/L) 2025 Results",
    excerpt:
      "01.04.2026 — JHLC celebrates exceptional A/L results: 9 students achieved 3As, 18 achieved 2As, and 16 achieved A with 2Bs. 305 out of 421 students (72.45%) qualified for university entrance.",
    href: "/news#al-results-2025",
    cta: "View full results",
  },
  {
    id: "al-social-2026",
    title: "Upcoming A/L Social",
    excerpt:
      "A special social gathering is being organised for Advanced Level students. Stay tuned for date and venue details. All A/L students are encouraged to participate.",
    href: "/news#al-social-2026",
    cta: "More details",
  },
  {
    id: "badminton-east-eagle-smashes-2025",
    title: "Badminton Achievements — MSR's East Eagle Smashes (UK)",
    excerpt:
      "JHLC students excelled at MSR's East Eagle Smashes (UK) tournament: U-17 Singles Champion M.Harishna, U-19 Singles Champion P.Priyakavi, and multiple champions & finalists across all age categories.",
    href: "/news#badminton-east-eagle-smashes-2025",
    cta: "See all results",
  },
];
