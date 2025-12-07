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
      {
        title: "DP Education",
        description: "Free online learning platform with Sinhala and Tamil content across core subjects.",
        url: "https://www.dpeducation.lk/en/",
      },
      {
        title: "Noolaham: யாழ்ப்பாணம் இந்து மகளிர் கல்லூரி",
        description: "Digitised archives, publications, and references related to Jaffna Hindu Ladies College.",
        url: "https://www.noolaham.org/wiki/index.php/%E0%AE%B5%E0%AE%B2%E0%AF%88%E0%AE%B5%E0%AE%BE%E0%AE%9A%E0%AE%B2%E0%AF%8D:%E0%AE%AF%E0%AE%BE%E0%AE%B4%E0%AF%8D%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%BE%E0%AE%A3%E0%AE%AE%E0%AF%8D_%E0%AE%87%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AF%81_%E0%AE%AE%E0%AE%95%E0%AE%B3%E0%AE%BF%E0%AE%B0%E0%AF%8D_%E0%AE%95%E0%AE%B2%E0%AF%8D%E0%AE%B2%E0%AF%82%E0%AE%B0%E0%AE%BF",
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
