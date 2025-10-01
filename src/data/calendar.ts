export type CalendarEvent = {
  date: string;
  title: string;
  description: string;
  category: "academic" | "cultural" | "sports" | "community";
  href?: string;
};

export const calendarEvents: CalendarEvent[] = [
  {
    date: "15 Jul",
    title: "Term 3 Commences",
    description:
      "Students return for the new term with assemblies focused on goal-setting and wellbeing.",
    category: "academic",
    href: "/news#term-3",
  },
  {
    date: "25 Jul",
    title: "Founder's Tribute",
    description:
      "Morning puja and floral tributes at the Naduthodda Rajavarothaya Pillaiyar Temple.",
    category: "community",
    href: "/about#founder",
  },
  {
    date: "02 Aug",
    title: "Inter-House Netball",
    description:
      "Senior and junior teams compete for the Founder’s Shield at the college grounds.",
    category: "sports",
    href: "/beyond-classrooms#sports",
  },
  {
    date: "16 Aug",
    title: "Science Society Exhibition",
    description:
      "Showcase of student research, robotics demos, and environmental stewardship projects.",
    category: "academic",
    href: "/beyond-classrooms#academic",
  },
  {
    date: "25 Aug",
    title: "Annual Sports Day",
    description:
      "Community celebration featuring marching bands, athletic meets, and cultural performances.",
    category: "sports",
    href: "/news#sports-day",
  },
  {
    date: "02 Oct",
    title: "Vijayadashami Special Event",
    description:
      "Cultural programmes, devotional music, and student performances honour the triumph of good over evil and the blessings of learning.",
    category: "cultural",
  },
  {
    date: "08 Oct",
    title: "Teacher’s Day Celebration",
    description:
      "Students express gratitude with tributes, songs, and cultural showcases celebrating the mentors who shape their journeys.",
    category: "community",
  },
  {
    date: "17 Oct",
    title: "English Day",
    description:
      "Debates, drama, storytelling, and competitions in English build fluency and confidence across every grade.",
    category: "academic",
  },
];
