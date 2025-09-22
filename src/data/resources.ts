export type ResourceLink = {
  title: string;
  description: string;
  url: string;
};

export type ResourceCategory = {
  id: string;
  name: string;
  summary: string;
  links: ResourceLink[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    id: "education",
    name: "Educational Materials",
    summary:
      "Official syllabi, exam preparation, and digital learning platforms that support classroom teaching.",
    links: [
      {
        title: "Ministry of Education, Sri Lanka",
        description: "Circulars, policy updates, and national curriculum resources.",
        url: "https://moe.gov.lk/",
      },
      {
        title: "Department of Examinations",
        description: "Timetables, past papers, and results services for national examinations.",
        url: "https://www.doenets.lk/",
      },
      {
        title: "e-Thaksalawa Digital Learning",
        description: "Interactive lessons and textbooks provided by the Ministry of Education.",
        url: "https://www.e-thaksalawa.moe.gov.lk/",
      },
    ],
  },
  {
    id: "social-awareness",
    name: "Social Awareness",
    summary:
      "Trusted organisations offering guidance on wellbeing, leadership, and community outreach.",
    links: [
      {
        title: "UNICEF Sri Lanka",
        description: "Child rights, education initiatives, and youth programmes across the island.",
        url: "https://www.unicef.org/srilanka/",
      },
      {
        title: "Sri Lanka Red Cross Society",
        description: "Disaster preparedness, first-aid training, and humanitarian volunteer opportunities.",
        url: "https://www.redcross.lk/",
      },
      {
        title: "National Child Protection Authority",
        description: "Support services, counselling, and awareness campaigns safeguarding young people.",
        url: "https://www.childprotection.gov.lk/",
      },
    ],
  },
  {
    id: "cyber-safety",
    name: "Cyber Safety",
    summary:
      "Digital citizenship guidance and safety toolkits for students and parents.",
    links: [
      {
        title: "Sri Lanka CERT",
        description: "National cyber security awareness tips and incident reporting channels.",
        url: "https://www.cert.gov.lk/",
      },
      {
        title: "Common Sense Education",
        description: "Digital citizenship lessons and family tech agreements.",
        url: "https://www.commonsense.org/education/digital-citizenship",
      },
      {
        title: "UNICEF Online Safety",
        description: "Guidance for young people to stay safe, kind, and informed online.",
        url: "https://www.unicef.org/online-safety",
      },
    ],
  },
];
