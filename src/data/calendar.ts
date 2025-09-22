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
];
