export type PrincipalProfile = {
  slug: string;
  name: string;
  years: string;
  qualifications?: string;
  summary: string;
  highlights: string[];
  image?: string;
};

export type FounderProfile = {
  name: string;
  summary: string;
  contributions: string[];
  image?: string;
};

export const founder: FounderProfile = {
  name: "Mrs. Visaladchy Ammal Sivagurunathar",
  summary:
    "Affectionately remembered as the college's 'Mother', Mrs. Sivagurunathar donated the Naduththoddam estate at Arasady Road and, together with her family, gifted the Rajavarothaya Pillaiyar Temple to establish Jaffna Hindu Ladies' College in the 1940s.",
  contributions: [
    "Donated 24 lms of Naduththoddam estate for the college campus in 1941.",
    "Partnered with Mr. Ramalingam Sivagurunathar and Mrs. Valliammal Sivaguru to gift an additional 16 lms including the temple precinct.",
    "Instilled a tradition of service, philanthropy, and Saivite values that continues to guide the college community.",
  ],
  image: "/images/mrs-visaladchy.jpeg",
};

export const principals: PrincipalProfile[] = [
  {
    slug: "v-perinpanathan",
    name: "Mrs. V. Perinpanathan",
    years: "2006 – Present",
    qualifications: "B.Sc., Dip in Edu, SLPS I",
    summary:
      "Joined the college in 1989, became Deputy Principal in 2000, and has served as Principal since January 2006, championing academic, sports, and co-curricular excellence.",
    highlights: [
      "Built strong partnerships with parents, staff, and OGA chapters to expand student opportunities.",
      "Promotes holistic education with equal emphasis on scholarship, leadership, and wellbeing.",
      "Advocates for modern learning spaces while preserving the college's cultural identity.",
    ],
  },
  {
    slug: "a-cumaraswamy",
    name: "Mr. A. Cumaraswamy",
    years: "1943",
    qualifications: "M.A., Dip. in Ed.",
    summary:
      "Former Principal of Jaffna Hindu College who shepherded the new girls' college during its formative months and laid academic foundations until a resident principal was appointed.",
    highlights: [
      "Guided the transition from the Ponnalayam residence to the shared Jaffna Hindu College grounds in early 1944.",
      "Ensured early cohorts had access to rigorous instruction and co-curricular activities.",
    ],
  },
  {
    slug: "gayathiri-ponnuththurai",
    name: "Miss. Gayathiri Ponnuththurai (Mrs. Gayathiri Ganeshan)",
    years: "1943 – 1944",
    qualifications: "B.Sc. (Hons.), Teacher Training 1st Class",
    summary:
      "A disciplined leader from India who focused on student deportment and academic standard while planning the first purpose-built campus.",
    highlights: [
      "Set clear expectations for uniform, conduct, and mutual respect across the college.",
      "Collaborated with staff to plan new classrooms on the donated Naduththoddam land.",
    ],
  },
  {
    slug: "muthu-atchchiah",
    name: "Miss. Muthu Atchchiah (Mrs. Muthu Somaya)",
    years: "1944 – 1945",
    qualifications: "M.A.",
    summary:
      "Expanded the curriculum from Grade 8 to the Senior School Certificate, preparing the college for rapid growth.",
    highlights: [
      "Secured resources for upper-form science and arts instruction.",
      "Prepared the campus plan that would support dedicated laboratories and classrooms.",
    ],
  },
  {
    slug: "jemmarani-sittampalam",
    name: "Mrs. Jemmarani Sittampalam",
    years: "1945",
    qualifications: "B.A.",
    summary:
      "Remembered for captivating English Literature lessons that inspired a lifelong love for the arts among early cohorts.",
    highlights: [
      "Mentored students in public speaking and literary appreciation.",
      "Strengthened the college's reputation for humanities education.",
    ],
  },
  {
    slug: "clara-motwani",
    name: "Mrs. Clara Motwani",
    years: "1946 – 1948",
    qualifications: "M.A.",
    summary:
      "An educator from the United States who balanced Eastern values with global outlook, prioritising fluency in Tamil and English.",
    highlights: [
      "Promoted English proficiency as a gateway to medicine, science, and university study.",
      "Encouraged bicultural identity, modeling saree attire and respect for local traditions.",
    ],
  },
  {
    slug: "sarojini-rao",
    name: "Mrs. Sarojini Rao",
    years: "1948 – 1954",
    qualifications: "M.A., L.T.",
    summary:
      "A dynamic leader who introduced the motto ‘It ought to be beautiful, I live here’ and oversaw the first major building expansions.",
    highlights: [
      "Supervised construction of new classrooms and the campus boundary wall.",
      "Launched university entrance classes and broadened science, arts, and language offerings.",
      "Fostered a vibrant extracurricular culture with carnivals and community fundraisers.",
    ],
  },
  {
    slug: "vimala-arumugam",
    name: "Mrs. Vimala Arumugam",
    years: "1954 – 1976",
    qualifications: "B.A. (Madras)",
    summary:
      "The college's longest-serving principal who guided the transition to Grade I status and Department of Education management.",
    highlights: [
      "Secured university placements for record numbers of students, especially at Peradeniya.",
      "Led fundraising drives with alumnae performances to build the Visaladchy Sivagurunathar Assembly Hall.",
      "Maintained academic excellence during governance changes in the 1960s.",
    ],
  },
  {
    slug: "pathmawathy-ramanathan",
    name: "Ms. Pathmawathy Ramanathan",
    years: "1976 – 1986",
    qualifications: "B.A. (Hons.) Annamalai",
    summary:
      "An alumna turned principal renowned for firm discipline, infrastructure growth, and national recognition in arts and sports.",
    highlights: [
      "Completed the administration block, dual science laboratories, and hostel perimeter wall.",
      "Oversaw the renovation and Maha Kumbabishekam of the Rajavarothaya Pillaiyar Temple.",
      "Led students to national laurels in dance, drama, music, and athletics.",
    ],
  },
  {
    slug: "thivyasironmany-nagarajah",
    name: "Mrs. Thivyasironmany Nagarajah",
    years: "1986 – 1993",
    qualifications: "B.Sc. (Madras)",
    summary:
      "Steered the college through years of conflict, supporting displaced learners and launching Golden Jubilee commemorations.",
    highlights: [
      "Hosted students from Pungudutivu and expanded on-campus facilities, including bicycle sheds and gardens.",
      "Established the annual Prize Day on 10 September and organised the Golden Jubilee exhibition and variety shows.",
      "Inspired the creation of Colombo and Canada Old Girls' Associations.",
    ],
  },
  {
    slug: "saraswathy-jeyarajah",
    name: "Mrs. Saraswathy Jeyarajah",
    years: "1993 – 2006",
    qualifications: "B.A. (Hons.), Dip. in Ed., S.L.P.S. I",
    summary:
      "Led recovery and renewal after the 1995 displacement, prioritising science education, temple restoration, and community care.",
    highlights: [
      "Expanded admissions to medicine and engineering faculties through focused science instruction.",
      "Coordinated reconstruction of damaged facilities with support from NGOs such as GTZ.",
      "Reinstated the Kumbabishekam in 1998 and provided shelter to families in crisis.",
    ],
  },
];
