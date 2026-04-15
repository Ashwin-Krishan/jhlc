export type PrincipalProfile = {
  slug: string;
  name: string;
  years: string;
  qualifications?: string;
  summary: string;
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
  image: "/images/mrs-visaladchy-small.jpeg",
};

export const principals: PrincipalProfile[] = [
  {
    slug: "a-cumaraswamy",
    name: "Mr. A. Cumaraswamy",
    years: "1943",
    qualifications: "M.A., Dip. in Ed.",
    summary:
      "Mr. A. Cumaraswamy served as the Acting Principal of Jaffna Hindu Ladies' College during its early years, while concurrently holding the position of Principal at Jaffna Hindu College. He devoted himself wholeheartedly to the growth and development of JHLC, guiding the institution with dedication and commitment until a permanent principal was appointed.",
    image: "/images/principals/a-cumaraswamy.png",
  },
  {
    slug: "gayathiri-ponnuththurai",
    name: "Miss. Gayathiri Ponnuththurai (Mrs. Gayathiri Ganeshan)",
    years: "1943 - 1944",
    qualifications: "B.Sc. (Hons.), Eng. Trained 1st Class",
    summary:
      "Miss Gayathiri Ponnuththurai was the first permanent Principal of Jaffna Hindu Ladies' College. She was known for her strict discipline and firm approach toward students, placing strong emphasis on their appearance, attire, and conduct. Energetic and dynamic, she proved highly effective in her leadership. She also showed great respect for her colleagues and engaged in thoughtful discussions with them regarding the future development of the college whenever necessary.",
    image: "/images/principals/gayathiri-ponnuththurai.png",
  },
  {
    slug: "muthu-atchchiah",
    name: "Miss Muthu Atchchiah (Mrs. Muthu Somaya)",
    years: "1944 - 1945",
    qualifications: "M.A.",
    summary:
      "Miss Atchchiah (Mrs. Somaya) was appointed on a contract basis from neighboring India. During her tenure, she upgraded the academic program from Grade 8 up to the S.S.C. level. As a result of this expansion, space became limited. Recognizing this need, the Principal initiated preparations for constructing new buildings on the land donated to the college.",
    image: "/images/principals/muthu-atchchiah.png",
  },
  {
    slug: "jemmarani-sittampalam",
    name: "Mrs. Jemmarani Sittampalam",
    years: "1945 - 1946",
    qualifications: "B.A.",
    summary:
      "Mrs. Jemmarani Sittampalam, served the college for a brief period. However, her captivating English Literature classes left a lasting impression, and she is fondly remembered at the college for the impact of her teaching.",
  },
  {
    slug: "clara-motwani",
    name: "Mrs. Clara Motwani",
    years: "1946 - 1948",
    qualifications: "M.A.",
    summary:
      "Mrs. Clara Motwani, who hailed from the United States, served as the next Principal of the college. Though educated and raised in the West, she had a deep interest in Eastern culture, languages, and religions. Married to a North Indian, she embraced Eastern customs, often wearing a saree and blouse. She strongly promoted Tamil, while also emphasizing the global significance of English. She consistently highlighted the importance of English proficiency for higher education, especially in fields like medicine and science. Her focus on both written and spoken English enabled students to become fluent, leading many to achieve prestigious positions in their careers, bringing honor and recognition to their alma mater. During her tenure, she also ensured that the hostel functioned efficiently and with proper organization, which made it possible to accommodate more than 100 students. In addition, the JHLC Old Girls' Association (OGA) was founded on 1-6-1947, marking an important milestone in strengthening the bond between the college and its alumnae.",
    image: "/images/principals/clarausa.png",
  },
  {
    slug: "sarojini-rao",
    name: "Mrs. Sarojini Rao",
    years: "1948 - 1954",
    qualifications: "M.A., L.T.",
    summary:
      "The energetic young educator from India, Mrs. Rao, was a striking and memorable presence at the college. She was often seen walking throughout the school grounds, engaging with students with a whistle around her neck. Its sound became a familiar signal to both students and teachers of that era. Soon after assuming her responsibilities at Jaffna Hindu Ladies' College, she helped shape the institutional identity by selecting the school colours, green and white, and guiding the development of the college emblem, motto, and anthem.\n\nMrs. Rao greatly expanded academic and co-curricular opportunities, ensuring students had access to Tamil, English, Science, the Arts, and newly introduced external courses. She also introduced skill-based training such as handicraft, weaving, and sewing, along with fine arts subjects, thereby broadening the scope of holistic education. Recognizing the importance of scientific learning, she oversaw the establishment of a science laboratory and took a hands-on role in the construction of several new buildings and the protective boundary wall, which was built using funds collected from the 1954 carnival and lottery organized by the Board of Management.\n\nTo promote physical education and healthy competition, she formed school houses and initiated inter-house meets. She also encouraged literary and creative expression by launching the school's annual magazine, Sakthi.\n\nUnder her dynamic leadership, the college was upgraded to a Grade II institution with an enrollment of over 1,100 students, and university entrance classes were introduced. Her teaching of Health and Home Science followed the traditional Guru-Pupil model, offering students a fresh and inspiring educational experience. Through the introduction of the college motto, \"It ought to be beautiful, I live here,\" she instilled in students a deep sense of pride, discipline, and respect for their school.",
    image: "/images/principals/sarojini-rao.png",
  },
  {
    slug: "vimala-arumugam",
    name: "Mrs. Vimala Arumugam",
    years: "1954 - 1976",
    qualifications: "B.A. (Madras)",
    summary:
      "Mrs. Vimala Arumugam, who rose through the ranks from teacher to Principal, holds the distinction of being the longest-serving principal of Jaffna Hindu Ladies' College. Her deep dedication to the institution was evident-she was truly devoted to its growth and progress. Under her leadership, the college was elevated to Grade I status, and a significant number of students gained admission to the University of Peradeniya.",
    image: "/images/principals/vimala-arumugam.png",
  },
  {
    slug: "pathmawathy-ramanathan",
    name: "Ms. Pathmawathy Ramanathan",
    years: "1976 - 1986",
    qualifications: "B.A. (Hons.), Annamalai",
    summary:
      "Miss Ramanathan was yet another remarkable figure who served our college as a Teacher, Vice Principal, and eventually Principal. She began her career as a young teacher in 1950 and steadily rose through the ranks. Known for her strict discipline and leading by example, she earned the respect of students and staff alike. Her unwavering devotion and dedication greatly contributed to the comprehensive development of the college.",
    image: "/images/principals/pathmawathy-ramanathan.png",
  },
  {
    slug: "thivyasironmany-nagarajah",
    name: "Mrs. Thivyasironmany Nagarajah",
    years: "1986 - 1993",
    qualifications: "B.Sc. (Madras)",
    summary:
      "Mrs. Nagarajah was appointed Principal after serving as a teacher at the college from 1977 to 1986. During her leadership from 1986 to 1993, the student population exceeded 2,000. The college extended its support to displaced students from Pungudutivu by providing them with accommodation. Two bicycle sheds were constructed, and a beautiful flower garden was developed on the campus.",
    image: "/images/principals/thivyasironmany-nagarajah.png",
  },
  {
    slug: "saraswathy-jeyarajah",
    name: "Mrs. Saraswathy Jeyarajah",
    years: "1993 - 2006",
    qualifications: "B.A. (Hons.), Dip. in Ed., S.L.P.S. I",
    summary:
      "Mrs. Jeyarajah assumed the role of Principal at Jaffna Hindu Ladies' College on 21st October 1993, after serving at the University of Peradeniya and the University of Jaffna, as the Elalai Cluster Principal, and also with the Education Department in Jaffna. Under her leadership, students achieved excellence in both academics and extracurricular activities. Her strong focus on Science and Medicine led to an increase in university admissions, particularly in Medical and Engineering faculties.",
    image: "/images/principals/saraswathy-jeyarajah.png",
  },
  {
    slug: "vethanayaki-perinpanathan",
    name: "Mrs. Vethanayaki Perinpanathan",
    years: "2006 - 2012",
    qualifications: "B.Sc., Dip. in Edu, M.A. in P.Ad., SLPS I, SLEAS III",
    summary:
      "Mrs. V. Perinpanathan began her career at Jaffna Hindu Ladies' College in 1989 as a teacher. Through her dedication and selfless service, she steadily rose through the ranks and was promoted to Deputy Principal in 2000. On January 16, 2006, she assumed the role of Principal. Her tenure was marked by visionary leadership and an unwavering commitment to the holistic development of the institution.",
    image: "/images/principals/vethanayaki-perinpanathan.jpg",
  },
  {
    slug: "mimaladevi-vimalanathan",
    name: "Mrs. Mimaladevi Vimalanathan",
    years: "2012 - 2022",
    qualifications: "B.A. (Hons), Dip. in Education, M.Ed, SLPS I",
    summary:
      "Mrs. M. Vimalanathan, an alumna of our school, joined as Principal in 2012, bringing with her a wealth of experience as a teacher, Deputy Principal, and Principal in other institutions. Known for her warm personality and ability to connect with staff and the wider school community, she earned the full cooperation of everyone in driving the school's growth and development.",
    image: "/images/principals/mimaladevi-vimalanathan.jpg",
  },
];
