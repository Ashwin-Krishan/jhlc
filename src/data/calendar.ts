export type CalendarEvent = {
  date: string;
  title: string;
  description: string;
  category: "academic" | "cultural" | "sports" | "community";
  href?: string;
};

export const calendarEvents: CalendarEvent[] = [
  {
    date: "02 Feb",
    title: "English Day Competitions Begin",
    description:
      "School-level English day competitions begin for students across grades.",
    category: "academic",
  },
  {
    date: "04 Feb",
    title: "National Independence Day",
    description:
      "National celebration and remembrance activities across the school community.",
    category: "community",
  },
  {
    date: "05 Feb",
    title: "Staff Meeting",
    description:
      "Faculty coordination and planning session for academic and co-curricular programs.",
    category: "community",
  },
  {
    date: "10 Feb",
    title: "Special Needs List Update",
    description:
      "Review and update the list of special needs students for support planning.",
    category: "academic",
  },
  {
    date: "12 Feb",
    title: "Inter House Sports Meet",
    description:
      "Students compete across houses in athletic and team events.",
    category: "sports",
  },
  {
    date: "13 Feb",
    title: "First Term Break",
    description:
      "First term first break for students and staff.",
    category: "academic",
  },
  {
    date: "15 Feb",
    title: "Maha Sivaratri",
    description:
      "Religious observance honoring Lord Shiva with devotion and prayer.",
    category: "cultural",
  },
];
