export type CalendarEvent = {
  date: string;
  title: string;
  description: string;
  category: "academic" | "cultural" | "sports" | "community";
  href?: string;
};

export const calendarEvents: CalendarEvent[] = [
  {
    date: "10 Apr",
    title: "First Term - Second Break",
    description: "Second break of the first term for students and staff.",
    category: "academic",
  },
  {
    date: "14 Apr",
    title: "New Year",
    description: "Tamil and Sinhala New Year celebration and public holiday.",
    category: "cultural",
  },
  {
    date: "20 Apr",
    title: "Second Term Begins",
    description: "Start of the second term for the 2026 academic year.",
    category: "academic",
  },
  {
    date: "24 Apr",
    title: "Advanced Level Students Social",
    description: "Social gathering for Advanced Level students across the school.",
    category: "community",
  },
  {
    date: "25 Apr",
    title: "Chess Tournament - Day 1",
    description: "Inter-school chess tournament commences.",
    category: "sports",
  },
  {
    date: "26 Apr",
    title: "Chess Tournament - Day 2",
    description: "Continuation of the inter-school chess tournament.",
    category: "sports",
  },
  {
    date: "30 Apr",
    title: "Staff Meeting",
    description: "Faculty coordination and planning session for academic and co-curricular programs.",
    category: "community",
  },
];
