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
    date: "25–26 Apr",
    title: "Chess Tournament",
    description: "Inter-school chess tournament.",
    category: "sports",
  },
  {
    date: "30 Apr",
    title: "Staff Meeting",
    description: "Faculty coordination and planning session for academic and co-curricular programs.",
    category: "community",
  },
  // May
  {
    date: "02–03 May",
    title: "Table Tennis Tournament",
    description: "Inter-house or inter-school table tennis tournament.",
    category: "sports",
  },
  {
    date: "05 May",
    title: "Commerce Fair",
    description: "Annual Commerce Fair showcasing student projects and business activities.",
    category: "academic",
  },
  {
    date: "09–10 May",
    title: "Badminton Tournament",
    description: "Inter-house or inter-school badminton tournament.",
    category: "sports",
  },
  {
    date: "11 May",
    title: "Thirunavukkarasar Guru Pooja",
    description: "Observance of the guru pooja of Saint Thirunavukkarasar.",
    category: "cultural",
  },
  {
    date: "16–17 May",
    title: "Netball Tournament",
    description: "Inter-house or inter-school netball tournament.",
    category: "sports",
  },
  {
    date: "20 May",
    title: "Science Day",
    description: "Celebration of science with student exhibitions and activities.",
    category: "academic",
  },
  {
    date: "21 May",
    title: "Staff Meeting",
    description: "Monthly faculty coordination and planning session.",
    category: "community",
  },
  {
    date: "23–24 May",
    title: "Cricket - Friendly Match",
    description: "Friendly cricket match for students.",
    category: "sports",
  },
  // June
  {
    date: "02 Jun",
    title: "Thirugnanasambanthar Guru Pooja",
    description: "Observance of the guru pooja of Saint Thirugnanasambanthar.",
    category: "cultural",
  },
  {
    date: "05 Jun",
    title: "Environmental Day",
    description: "Awareness activities and programs for World Environment Day.",
    category: "community",
  },
  {
    date: "07 Jun",
    title: "Rajavarothaya Vinayagar Sankapishekam",
    description: "Sankapishekam ceremony at the Rajavarothaya Vinayagar Temple.",
    category: "cultural",
  },
  {
    date: "11 Jun",
    title: "Service Club Awareness Day",
    description: "Awareness programs and activities organized by the school's service clubs.",
    category: "community",
  },
  {
    date: "20 Jun",
    title: "Maanikkavasakar Guru Pooja",
    description: "Observance of the guru pooja of Saint Maanikkavasakar.",
    category: "cultural",
  },
  {
    date: "25 Jun",
    title: "Staff Meeting",
    description: "Monthly faculty coordination and planning session.",
    category: "community",
  },
  {
    date: "26 Jun",
    title: "Anti-Drug Day",
    description: "Awareness programs promoting a drug-free lifestyle among students.",
    category: "community",
  },
  // July
  {
    date: "13 Jul",
    title: "Second Term Examinations Begin",
    description: "Commencement of second term examinations for all grades.",
    category: "academic",
  },
  {
    date: "22 Jul",
    title: "Suntharamoorthy Nayanar Guru Pooja",
    description: "Observance of the guru pooja of Saint Suntharamoorthy Nayanar.",
    category: "cultural",
  },
  {
    date: "23 Jul",
    title: "Staff Meeting",
    description: "Monthly faculty coordination and planning session.",
    category: "community",
  },
  {
    date: "24 Jul",
    title: "Second Term Break",
    description: "End of second term; students and staff commence the term break.",
    category: "academic",
  },
  {
    date: "27 Jul",
    title: "Third Term - First Phase Begins",
    description: "Start of the first phase of the third term.",
    category: "academic",
  },
  // August
  {
    date: "05 Aug",
    title: "ICT Day",
    description: "Celebration of information and communication technology with student activities.",
    category: "academic",
  },
  {
    date: "07 Aug",
    title: "Third Term - First Break",
    description: "First break of the third term for students and staff.",
    category: "academic",
  },
  // September
  {
    date: "07 Sep",
    title: "Third Term - Second Phase Begins",
    description: "Start of the second phase of the third term.",
    category: "academic",
  },
  {
    date: "10 Sep",
    title: "School Founder's Day & Prize Giving Day",
    description: "Annual celebration honoring the school's founding and recognizing student achievements.",
    category: "cultural",
  },
  {
    date: "24 Sep",
    title: "Staff Meeting",
    description: "Monthly faculty coordination and planning session.",
    category: "community",
  },
  {
    date: "29 Sep",
    title: "English Day",
    description: "Special programs and activities celebrating the English language.",
    category: "cultural",
  },
  // October
  {
    date: "01 Oct",
    title: "World Children's Day",
    description: "Celebration and awareness activities for World Children's Day.",
    category: "community",
  },
  {
    date: "06 Oct",
    title: "Teacher's Day",
    description: "Celebration honoring the dedication and contributions of teachers.",
    category: "community",
  },
  {
    date: "11 Oct",
    title: "Navarathri Pooja Begins",
    description: "Commencement of the Navarathri festival pooja celebrations.",
    category: "cultural",
  },
  {
    date: "20 Oct",
    title: "Vijayathasami",
    description: "Celebration of Vijayathasami, the auspicious tenth day of Navarathri.",
    category: "cultural",
  },
  {
    date: "21 Oct",
    title: "Tamil Day",
    description: "Special programs celebrating the Tamil language and culture.",
    category: "cultural",
  },
  {
    date: "29 Oct",
    title: "Staff Meeting",
    description: "Monthly faculty coordination and planning session.",
    category: "community",
  },
  // November
  {
    date: "08 Nov",
    title: "Deepawali",
    description: "Celebration of the festival of lights — Deepawali.",
    category: "cultural",
  },
  {
    date: "26 Nov",
    title: "Staff Meeting",
    description: "Monthly faculty coordination and planning session.",
    category: "community",
  },
  // December
  {
    date: "02 Dec",
    title: "Teachers' Farewell Function",
    description: "Farewell function honoring retiring and departing teachers.",
    category: "community",
  },
  {
    date: "04 Dec",
    title: "Third Term - Second Break",
    description: "End of the third term; students and staff commence the second break.",
    category: "academic",
  },
  {
    date: "10 Dec",
    title: "Aarumuga Navalar Guru Pooja",
    description: "Observance of the guru pooja of Aarumuga Navalar.",
    category: "cultural",
  },
];
