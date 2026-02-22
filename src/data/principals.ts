export type PrincipalProfile = {
  slug: string;
  name: string;
  years: string;
  qualifications?: string;
  summary: string;
  bio: string[];
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
      "The first principal of Jaffna Hindu Ladies' College was Mr. A. Cumaraswamy, who had previously served as the Principal of Jaffna Hindu College. He dedicated himself wholeheartedly to the growth and progress of the college, leading it with great commitment until a permanent principal was appointed.",
    bio: [
      "Mr. A. Cumaraswamy served as the Acting Principal of Jaffna Hindu Ladies’ College during its early years, while concurrently holding the position of Principal at Jaffna Hindu College. He devoted himself wholeheartedly to the growth and development of JHLC, guiding the institution with dedication and commitment until a permanent principal was appointed.",
    ],
    image: "/images/principals/a-cumaraswamy.png",
  },
  {
    slug: "gayathiri-ponnuththurai",
    name: "Miss. Gayathiri Ponnuththurai (Mrs. Gayathiri Ganeshan)",
    years: "1943 - 1944",
    qualifications: "B.Sc. (Hons.), Eng. Trained 1st Class",
    summary:
      "Ms. Gayathiri was known for her strict discipline and firm approach with students. She placed strong emphasis on their appearance, attire, and conduct. Energetic and dynamic, she was highly effective in her role. She also showed respect for her colleagues and engaged in thoughtful discussions with them about the college's future when needed.",
    bio: [
      "Miss Gayathiri Ponnuththurai was the first permanent Principal of Jaffna Hindu Ladies’ College. She was known for her strict discipline and firm approach toward students, placing strong emphasis on their appearance, attire, and conduct. Energetic and dynamic, she proved highly effective in her leadership. She also showed great respect for her colleagues and engaged in thoughtful discussions with them regarding the future development of the college whenever necessary.",
    ],
    image: "/images/principals/gayathiri-ponnuththurai.png",
  },
  {
    slug: "muthu-atchchiah",
    name: "Miss Muthu Atchchiah (Mrs. Muthu Somaya)",
    years: "1944 - 1945",
    qualifications: "M.A.",
    summary:
      "Miss Atchchiah (Mrs. Somaya) was appointed on a contract basis from neighboring India. During her tenure, she upgraded the academic program from Grade 8 up to the S.S.C. level. As a result of this expansion, space became limited. Recognizing this need, the Principal initiated preparations for constructing new buildings on the land donated to the college.",
    bio: [
      "Miss Atchchiah (Mrs. Somaya) was appointed on a contract basis from neighboring India. During her tenure, she upgraded the academic program from Grade 8 up to the S.S.C. level. As a result of this expansion, space became limited. Recognizing this need, the Principal initiated preparations for constructing new buildings on the land donated to the college.",
    ],
    image: "/images/principals/muthu-atchchiah.png",
  },
  {
    slug: "jemmarani-sittampalam",
    name: "Mrs. Jemmarani Sittampalam",
    years: "1945 - 1946",
    qualifications: "B.A.",
    summary:
      "Mrs. Jemmarani Sittampalam, served the college for a brief period. However, her captivating English Literature classes left a lasting impression, and she is fondly remembered at the college for the impact of her teaching.",
    bio: [
      "Mrs. Jemmarani Sittampalam, our fourth Principal, served the college for a brief period. However, her captivating English Literature classes left a lasting impression, and she is fondly remembered at the college for the impact of her teaching.",
    ],
  },
  {
    slug: "clara-motwani",
    name: "Mrs. Clara Motwani",
    years: "1946 - 1948",
    qualifications: "M.A.",
    summary:
      "Mrs. Clara Motwani, who hailed from the United States, served as the next Principal of the college. Though educated and raised in the West, she had a deep interest in Eastern culture, languages, and religions. Married to a North Indian, she embraced Eastern customs, often wearing a saree and blouse. She strongly promoted Tamil, while also emphasizing the global significance of English. She consistently highlighted the importance of English proficiency for higher education, especially in fields like medicine and science. Her focus on both written and spoken English enabled students to become fluent, leading many to achieve prestigious positions in their careers, bringing honor and recognition to their alma mater.",
    bio: [
      "Mrs. Clara Motwani, who hailed from the United States, served as the next Principal of the college. Though educated and raised in the West, she had a deep interest in Eastern culture, languages, and religions. Married to a North Indian, she embraced Eastern customs, often wearing a saree and blouse. She strongly promoted Tamil, while also emphasizing the global significance of English. She consistently highlighted the importance of English proficiency for higher education, especially in fields like medicine and science. Her focus on both written and spoken English enabled students to become fluent, leading many to achieve prestigious positions in their careers, bringing honor and recognition to their alma mater.",
      "During her tenure, she also ensured that the hostel functioned efficiently and with proper organization, which made it possible to accommodate more than 100 students. In addition, the JHLC Old Girls' Association (OGA) was founded on 1-6-1947, marking an important milestone in strengthening the bond between the college and its alumnae.",
    ],
    image: "/images/principals/jemmarani-sittampalam.png",
  },
  {
    slug: "sarojini-rao",
    name: "Mrs. Sarojini Rao",
    years: "1948 - 1954",
    qualifications: "M.A., L.T.",
    summary:
      "The energetic young educator from India, Mrs. Rao, was a striking and memorable presence at the college. She helped shape the institutional identity by selecting the school colours, green and white, and guiding the development of the college emblem, motto, and anthem.",
    bio: [
      "The energetic young educator from India, Mrs. Rao, was a striking and memorable presence at the college. She was often seen walking throughout the school grounds, engaging with students with a whistle around her neck. Its sound became a familiar signal to both students and teachers of that era. Soon after assuming her responsibilities at Jaffna Hindu Ladies' College, she helped shape the institutional identity by selecting the school colours, green and white, and guiding the development of the college emblem, motto, and anthem.",
      "Mrs. Rao greatly expanded academic and co-curricular opportunities, ensuring students had access to Tamil, English, Science, the Arts, and newly introduced external courses. She also introduced skill-based training such as handicraft, weaving, and sewing, along with fine arts subjects, thereby broadening the scope of holistic education. Recognizing the importance of scientific learning, she oversaw the establishment of a science laboratory and took a hands-on role in the construction of several new buildings and the protective boundary wall, which was built using funds collected from the 1954 carnival and lottery organized by the Board of Management.",
      "To promote physical education and healthy competition, she formed school houses and initiated inter-house meets. She also encouraged literary and creative expression by launching the school's annual magazine, Sakthi.",
      "Under her dynamic leadership, the college was upgraded to a Grade II institution with an enrollment of over 1,100 students, and university entrance classes were introduced. Her teaching of Health and Home Science followed the traditional Guru-Pupil model, offering students a fresh and inspiring educational experience. Through the introduction of the college motto, \"It ought to be beautiful, I live here,\" she instilled in students a deep sense of pride, discipline, and respect for their school.",
    ],
    image: "/images/principals/clara-motwani.png",
  },
  {
    slug: "vimala-arumugam",
    name: "Mrs. Vimala Arumugam",
    years: "1954 - 1976",
    qualifications: "B.A. (Madras)",
    summary:
      "Mrs. Vimala Arumugam, who rose through the ranks from teacher to Principal, holds the distinction of being the longest-serving principal of Jaffna Hindu Ladies' College. Her deep dedication to the institution was evident-she was truly devoted to its growth and progress. Under her leadership, the college was elevated to Grade I status, and a significant number of students gained admission to the University of Peradeniya.",
    bio: [
      "Mrs. Vimala Arumugam, who rose through the ranks from teacher to Principal, holds the distinction of being the longest-serving principal of Jaffna Hindu Ladies' College. Her deep dedication to the institution was evident-she was truly devoted to its growth and progress. Under her leadership, the college was elevated to Grade I status, and a significant number of students gained admission to the University of Peradeniya.",
      "She played a key role during a crucial period in the early 1960s, successfully guiding the college through its transition from being Board-managed to coming under the administration of the Education Department.",
      "Mrs. Arumugam also spearheaded major fundraising initiatives, including organizing a special dance performance by Mrs. Karthika Ganeshan, a renowned artist and distinguished alumna of the college. Additionally, she encouraged students to stage the dramas \"Katpukkanal\" at the Jaffna Town Hall and \"Nala-Thamayanthi\" at the college to further support fundraising efforts. These contributions, combined with government funding, made it possible to construct the college's Assembly Hall, which was named in honor of the founder, Visaladchy Sivagurunathar.",
    ],
    image: "/images/principals/sarojini-rao.png",
  },
  {
    slug: "pathmawathy-ramanathan",
    name: "Ms. Pathmawathy Ramanathan",
    years: "1976 - 1986",
    qualifications: "B.A. (Hons.), Annamalai",
    summary:
      "Miss Ramanathan was yet another remarkable figure who served our college as a Teacher, Vice Principal, and eventually Principal. She began her career as a young teacher in 1950 and steadily rose through the ranks. Known for her strict discipline and leading by example, she earned the respect of students and staff alike. Her unwavering devotion and dedication greatly contributed to the comprehensive development of the college.",
    bio: [
      "Miss Ramanathan was yet another remarkable figure who served our college as a Teacher, Vice Principal, and eventually Principal. She began her career as a young teacher in 1950 and steadily rose through the ranks. Known for her strict discipline and leading by example, she earned the respect of students and staff alike. Her unwavering devotion and dedication greatly contributed to the comprehensive development of the college.",
      "Several key infrastructure projects were completed during her tenure, including the administration block, a new science laboratory, another science facility with 10 classrooms, and the boundary wall around the college hostel. She also oversaw the renovation of the Pillaiyar Temple and the successful Maha Kumbabishekam ceremony.",
      "Her leadership led to notable achievements in academics, with increased university admissions, as well as excellence in dance, drama, music, and sports-earning the college national recognition in Sri Lanka. Many who studied under her or worked with her fondly refer to her as the \"Uncrowned Queen\" of the college, and her time in office is often celebrated as its \"Golden Era.\"",
    ],
    image: "/images/principals/vimala-arumugam.png",
  },
  {
    slug: "thivyasironmany-nagarajah",
    name: "Mrs. Thivyasironmany Nagarajah",
    years: "1986 - 1993",
    qualifications: "B.Sc. (Madras)",
    summary:
      "Mrs. Nagarajah was appointed Principal after serving as a teacher at the college from 1977 to 1986. During her leadership from 1986 to 1993, the student population exceeded 2,000. The college extended its support to displaced students from Pungudutivu by providing them with accommodation. Two bicycle sheds were constructed, and a beautiful flower garden was developed on the campus.",
    bio: [
      "Mrs. Nagarajah was appointed Principal after serving as a teacher at the college from 1977 to 1986. During her leadership from 1986 to 1993, the student population exceeded 2,000. The college extended its support to displaced students from Pungudutivu by providing them with accommodation. Two bicycle sheds were constructed, and a beautiful flower garden was developed on the campus.",
      "She established a Prize Day Committee, which set September 10th as the official date for the event. The first Prize Day was held on September 10, 1991. Despite the challenging period of conflict, teachers, students, and parents actively supported the college's initiatives.",
      "The Golden Jubilee of the college was celebrated on a grand scale, featuring a four-day exhibition and two days of cultural performances by students and alumnae. Mrs. Nagarajah also laid the foundation stone for a Golden Jubilee Block. The wide publicity surrounding the celebrations inspired former students in Colombo and Canada to establish Old Girls' Associations in their regions.",
    ],
    image: "/images/principals/pathmawathy-ramanathan.png",
  },
  {
    slug: "saraswathy-jeyarajah",
    name: "Mrs. Saraswathy Jeyarajah",
    years: "1993 - 2006",
    qualifications: "B.A. (Hons.), Dip. in Ed., S.L.P.S. I",
    summary:
      "Mrs. Jeyarajah assumed the role of Principal at Jaffna Hindu Ladies' College on 21st October 1993, after serving at the University of Peradeniya and the University of Jaffna, as the Elalai Cluster Principal, and also with the Education Department in Jaffna. Under her leadership, students achieved excellence in both academics and extracurricular activities. Her strong focus on Science and Medicine led to an increase in university admissions, particularly in Medical and Engineering faculties.",
    bio: [
      "Mrs. Jeyarajah assumed the role of Principal at Jaffna Hindu Ladies' College on 21st October 1993, after serving at the University of Peradeniya and the University of Jaffna, as the Elalai Cluster Principal, and also with the Education Department in Jaffna. Under her leadership, students achieved excellence in both academics and extracurricular activities. Her strong focus on Science and Medicine led to an increase in university admissions, particularly in Medical and Engineering faculties.",
      "However, the mass displacement in 1995 severely affected the college, causing damage to buildings and the loss of valuable equipment and books from laboratories and libraries. Once the college resumed operations at its original location, Mrs. Jeyarajah, along with teachers, students, and well-wishers, worked tirelessly to restore and rebuild the institution. Support from non-governmental organizations, such as GTZ, played a vital role in this recovery.",
      "Religious life at the college was also revitalized. After renovations, the Kumbabishekam ceremony was held in 1998 at the Naduthodda Rajavarothaya Pillaiyar Temple. From 1995 onwards, the school saw steady progress in both academic and extracurricular spheres.",
      "Mrs. Jeyarajah also undertook management training in Delhi and, in recognition of her committed service, was elected Senior Vice President of the All Ceylon Tamil Teachers Union. She and the college extended compassion to those in need by offering shelter and support during difficult times.",
      "During her tenure, she led students to Colombo twice to showcase their talents through dance performances. She retired on 15th January 2006, leaving behind a legacy of resilience, leadership, and progress.",
    ],
    image: "/images/principals/thivyasironmany-nagarajah.png",
  },
  {
    slug: "vethanayaki-perinpanathan",
    name: "Mrs. Vethanayaki Perinpanathan",
    years: "2006 - 2012",
    qualifications: "B.Sc., Dip. in Edu, M.A. in P.Ad., SLPS I, SLEAS III",
    summary:
      "Mrs. V. Perinpanathan began her career at Jaffna Hindu Ladies' College in 1989 as a teacher. Through her dedication and selfless service, she steadily rose through the ranks and was promoted to Deputy Principal in 2000. On January 16, 2006, she assumed the role of Principal. Her tenure was marked by visionary leadership and an unwavering commitment to the holistic development of the institution.",
    bio: [
      "Mrs. V. Perinpanathan began her career at Jaffna Hindu Ladies' College in 1989 as a teacher. Through her dedication and selfless service, she steadily rose through the ranks and was promoted to Deputy Principal in 2000. On January 16, 2006, she assumed the role of Principal. Her tenure was marked by visionary leadership and an unwavering commitment to the holistic development of the institution.",
      "Under her guidance, the college witnessed remarkable improvements in both infrastructure and the overall school environment. She spearheaded the renovation of the main hall, sports grounds, science laboratories, health facilities, and several other significant buildings that had been in a deteriorated condition, thereby restoring them to functional and dignified standards. A new water tank was constructed to enhance essential facilities, the college temple was renovated to preserve its spiritual and cultural importance, and a spacious cafeteria measuring 20' by 50' was built. She also established a new basketball court, contributing greatly to the development of sports on campus. In addition, an English Activity Room was constructed above the canteen, and the old hostel building was revived and transformed into a vibrant space for dance and music activities. She took special initiatives to sanitize and maintain a clean and healthy school environment, ensuring a safe and pleasant atmosphere for students and staff.",
      "Beyond physical development, Mrs. Perinpanathan placed strong emphasis on nurturing student potential in academics, sports, and fine arts. She revived indoor sports such as table tennis, carrom and chess, encouraged wider student participation, and arranged professional coaching to enable students to compete at national-level competitions. Her continuous efforts were also directed towards elevating the status of the institution, and she worked tirelessly with the vision of making the school a National School. To achieve these developments, she approached multiple sources to secure funding for various school projects, with her foremost priority always being the future and well-being of the students.",
      "From 2012 to 2016, she served as Deputy Director in the Valikamam Education Zone, extending her expertise beyond the school and contributing significantly to the broader advancement of education. Even after her retirement, her deep affection for the college remains evident, as she continues to support and assist the school in any way possible. Her invaluable service has earned her the lasting respect and admiration of students, staff, parents, the Old Girls' Association, and the wider community.",
    ],
    image: "/images/principals/vethanayaki-perinpanathan.jpg",
  },
  {
    slug: "mimaladevi-vimalanathan",
    name: "Mrs. Mimaladevi Vimalanathan",
    years: "2012 - 2022",
    qualifications: "B.A. (Hons), Dip. in Education, M.Ed, SLPS I",
    summary:
      "Mrs. M. Vimalanathan, an alumna of our school, joined as Principal in 2012, bringing with her a wealth of experience as a teacher, Deputy Principal, and Principal in other institutions. Known for her warm personality and ability to connect with staff and the wider school community, she earned the full cooperation of everyone in driving the school's growth and development.",
    bio: [
      "Mrs. M. Vimalanathan, an alumna of our school, joined as Principal in 2012, bringing with her a wealth of experience as a teacher, Deputy Principal, and Principal in other institutions. Known for her warm personality and ability to connect with staff and the wider school community, she earned the full cooperation of everyone in driving the school's growth and development.",
      "She placed particular emphasis on maintaining a clean and beautiful environment within the school premises. During her tenure, she worked closely with the Education Department and the Old Girls' Associations to enhance facilities and infrastructure. Notable achievements include the establishment of the Technology Lab, the construction of a three-storey building with the support of the United States Pacific Command (USPACOM), the addition of a washroom unit, and the opening of the Diamond Jubilee Hall sponsored by all the OGAs of JHLC",
      "She also introduced intercom facilities to improve communication, pioneered the development of smart classrooms, and initiated several key renovation projects across the campus. Her leadership left a lasting impact, strengthening both the physical and academic environment of the school.",
    ],
    image: "/images/principals/mimaladevi-vimalanathan.jpg",
  },
];
