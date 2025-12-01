type ClubProfile = {
  name: string;
  objective: string;
  goals: string[];
};

const clubs: ClubProfile[] = [
  {
    name: "Science Club",
    objective: "To ignite curiosity and a passion for discovery in young minds.",
    goals: [
      "Make science come alive through hands-on experiments, exhibitions, and projects.",
      "Motivate students to explore, question, and innovate.",
      "Open doors to competitions and opportunities that take scientific learning beyond the classroom.",
    ],
  },
  {
    name: "Library Club",
    objective: "To cultivate a love for books and lifelong learning among students.",
    goals: [
      "Encourage regular reading through engaging activities and challenges.",
      "Help students discover new genres, authors, and ideas.",
      "Create a welcoming space where knowledge, imagination, and creativity can thrive.",
    ],
  },
  {
    name: "Arts and Culture Union",
    objective: "To nurture the creative spirit of students through dance, music, drama, literature, and visual arts.",
    goals: [
      "Inspire self-expression and foster cultural appreciation.",
      "Provide opportunities for students to showcase their artistic talents through shows and competitions.",
      "Strengthen teamwork, confidence, and community engagement through the arts.",
    ],
  },
  {
    name: "Innovation Club",
    objective: "To spark creativity, encourage problem-solving, and cultivate a forward-thinking mindset in students.",
    goals: [
      "Provide a platform to explore new ideas and embrace technology.",
      "Develop innovative solutions to real-world challenges through hands-on experiences.",
      "Inspire curiosity and equip students with skills to become confident innovators and future leaders.",
    ],
  },
  {
    name: "Commerce Union",
    objective: "To promote commercial knowledge, practical business skills, and an understanding of economic principles among students.",
    goals: [
      "Organize Commerce Awareness Day and Commerce Day celebrations.",
      "Publish books and resources to share knowledge.",
      "Conduct model market activities to give students real-world business experience.",
      "Host competitions to develop creativity, critical thinking, and entrepreneurial skills.",
    ],
  },
  {
    name: "Hindu Association",
    objective: "To preserve and promote Hindu traditions, values, and spiritual practices within the school community.",
    goals: [
      "Organize and celebrate all major Hindu festivals.",
      "Perform special rituals on significant religious occasions.",
      "Arrange poojas and other ceremonies at the school temple to encourage spiritual growth and cultural awareness.",
    ],
  },
  {
    name: "Physical Education Club",
    objective: "To promote physical fitness, sportsmanship, and a healthy lifestyle among students.",
    goals: [
      "Organize annual sports meets and athletic events at school.",
      "Train athletes and prepare them for interschool, regional, provincial, and national competitions.",
      "Encourage teamwork, discipline, and perseverance through sports activities.",
    ],
  },
  {
    name: "Interact Club",
    objective: "To develop leadership, responsibility, and a spirit of community service among students.",
    goals: [
      "Organize service projects that benefit the school and local community.",
      "Promote international understanding and goodwill through cultural exchange and awareness activities.",
      "Provide opportunities for students to build teamwork, communication, and leadership skills.",
    ],
  },
  {
    name: "Leo Club",
    objective: "To empower young people to serve their communities, develop leadership skills, and foster personal growth.",
    goals: [
      "Plan and carry out service projects that create a positive impact.",
      "Provide opportunities for leadership development and teamwork.",
      "Encourage social responsibility, compassion, and active citizenship among members.",
    ],
  },
  {
    name: "Computer Union",
    objective: "To enhance students' digital literacy, technical skills, and innovative thinking through computing and programming activities.",
    goals: [
      "Train younger students in typing and basic computer operations.",
      "Provide programming training for senior students.",
      "Organize quizzes and competitions to test and expand computer knowledge.",
      "Participate in and support innovation programs to encourage creative problem-solving using technology.",
    ],
  },
  {
    name: "English Union",
    objective: "To enhance students' proficiency in English and foster confidence in communication through diverse language and drama activities.",
    goals: [
      "Encourage student participation in English language and drama competitions from class level to national level.",
      "Conduct weekly Thursday morning assembly programs to promote English usage.",
      "Celebrate English Day and publish the annual magazine Ladies Leap.",
      "Support students in participating in external competitions to aid their professional and personal development.",
      "Improve the four key English language skills: listening, speaking, reading, and writing.",
    ],
  },
  {
    name: "A/L Union",
    objective: "To foster friendship, cooperation, and unity among Advanced Level students.",
    goals: [
      "Organize the annual get-together for Advanced Level students.",
      "Create opportunities for bonding and mutual support.",
      "Promote teamwork, collaboration, and a positive learning environment.",
    ],
  },
  {
    name: "Tamil Union",
    objective: "To promote the Tamil language, literature, and cultural values while developing students' communication and creative skills.",
    goals: [
      "Prepare students for regional and national Tamil competitions, including essay contests.",
      "Train students to lead morning prayers and share good thoughts of the day.",
      "Organize and celebrate Tamil Day at school to honor the language and its heritage.",
    ],
  },
  {
    name: "Photography Club",
    objective: "To develop students’ photography skills and create a visual record of school events and activities.",
    goals: [
      "Capture and document photographs of school functions and special moments.",
      "Participate in photography seminars to enhance technical skills and artistic vision.",
      "Encourage creativity, observation, and storytelling through images.",
    ],
  },
  {
    name: "Environmental Club",
    objective: "To nurture stewardship of the environment through awareness, action, and sustainable habits within the school community.",
    goals: [
      "Lead campus clean-up drives and tree-planting initiatives.",
      "Run awareness campaigns on recycling, waste reduction, and conservation.",
      "Organize eco-themed exhibitions, talks, and competitions to inspire responsible citizenship.",
    ],
  },
  {
    name: "Social Science Union",
    objective:
      "To deepen students’ understanding of history, geography, civics, and cultural heritage while encouraging critical thinking about society.",
    goals: [
      "Organize activities, competitions, and exhibitions related to the social sciences.",
      "Promote awareness of historical events, civic responsibilities, and global issues.",
      "Encourage research, discussion, and debate on topics that shape communities and nations.",
    ],
  },
  {
    name: "School Band",
    objective:
      "To cultivate students’ musical talents and teamwork while enhancing school spirit through performances at inter-house sports meets and key events.",
    goals: [
      "Provide rhythmic and musical support during sports meets, parades, and school ceremonies.",
      "Develop discipline, coordination, and confidence through regular practice and performance.",
      "Promote unity and pride by leading the march-past and fostering a lively atmosphere.",
      "Represent the school with excellence and uphold its traditions through quality music.",
    ],
  },
  {
    name: "Student Parliament",
    objective: "To cultivate democratic leadership and collaborative problem-solving through student-led ministries.",
    goals: [
      "Hold elections for Speaker, ministries, and class representatives to model civic processes.",
      "Operate ministries such as Education, Health & Wellbeing, Environment, Culture & Sports, and Community Relations to deliver student services.",
      "Debate school improvement proposals and implement action plans that reflect student voice.",
    ],
  },
  {
    name: "Board of Prefects",
    objective: "To uphold school values, mentor peers, and support smooth operations across events and daily routines.",
    goals: [
      "Lead assemblies, ceremonies, and key school functions with discipline and dignity.",
      "Guide younger students on conduct, study habits, and participation in school life.",
      "Coordinate with staff to maintain a respectful, safe, and inclusive campus environment.",
    ],
  },
  {
    name: "St. John’s Ambulance",
    objective: "To equip students with first-aid skills and a spirit of service in health-related emergencies.",
    goals: [
      "Train members in certified first aid and emergency response.",
      "Provide medical support at sports meets, parades, and school events.",
      "Run health-awareness sessions on safety, hygiene, and wellness for the student body.",
    ],
  },
  {
    name: "Girl Guide",
    objective: "To build character, resilience, and community-minded leadership through guiding principles.",
    goals: [
      "Develop outdoor skills, teamwork, and self-reliance through camps and challenges.",
      "Lead service projects that benefit the school and wider community.",
      "Encourage ethical decision-making, kindness, and global citizenship among members.",
    ],
  },
  {
    name: "Capital Stock Exchange Opportunities",
    objective: "To introduce students to capital markets, financial literacy, and responsible investing.",
    goals: [
      "Explore stock exchange fundamentals, personal finance, and portfolio simulations.",
      "Invite industry professionals for seminars on market trends and career pathways.",
      "Guide students to analyze companies, track economic indicators, and practice informed decision-making.",
    ],
  },
  {
    name: "Teachers Club",
    objective: "To strengthen collegiality, continuous learning, and collaborative leadership among the teaching community.",
    goals: [
      "Share best practices and innovations that enhance classroom teaching and student support.",
      "Plan professional development sessions, peer observations, and mentoring opportunities.",
      "Coordinate staff-led initiatives that enrich school culture and model lifelong learning.",
    ],
  },
];

const sports = [
  {
    title: "Netball",
    description: "Senior and junior squads train for provincial and national tournaments, holding multiple championship titles.",
  },
  {
    title: "Basketball",
    description: "Fast-paced development clinics with alumni coaches and inter-school leagues.",
  },
  {
    title: "Cricket",
    description: "Hardball and softball teams building fielding agility and team strategy.",
  },
  {
    title: "Badminton",
    description: "Technical skill sessions and ranking ladders hosted in the multipurpose hall.",
  },
];

const fineArts = [
  {
    title: "Music Society",
    description: "Carnatic vocal, veena, and choir ensembles performing at temple festivals and competitions.",
  },
  {
    title: "Dance Troupe",
    description: "Bharatanatyam, folk fusion, and contemporary showcases choreographed for island-wide stages.",
  },
  {
    title: "Drama Guild",
    description: "Tamil and English theatre productions cultivating scriptwriting, stagecraft, and elocution.",
  },
];

const academic = [
  {
    title: "Science Circle",
    description: "Innovation labs, Olympiad coaching, and environmental research competitions.",
  },
  {
    title: "English Literary Association",
    description: "Debating, creative writing workshops, and Model UN preparations.",
  },
  {
    title: "Tamil Arivuchchol",
    description: "Oratory, poetry slam, and classical literature quizzes celebrating Tamil heritage.",
  },
  {
    title: "Mathletes",
    description: "Problem-solving leagues, coding challenges, and inter-school maths relays.",
  },
];

type Spotlight = {
  id: string;
  name: string;
  summary: string;
};

const renderClubCards = (items: ClubProfile[]) => (
  <div className="mt-6 grid gap-8 md:grid-cols-2">
    {items.map((club) => (
      <div key={club.name} className="rounded-3xl border border-green-100 bg-white p-6 shadow-md md:p-8">
        <h3 className="text-2xl font-semibold text-green-900">{club.name}</h3>
        <p className="mt-3 text-base leading-relaxed text-green-700">
          <span className="font-semibold text-green-800">Objective:</span> {club.objective}
        </p>
        <div className="mt-4">
          <p className="text-base font-semibold uppercase tracking-wide text-green-600">Goals</p>
          <ul className="mt-2 list-disc space-y-3 pl-6 text-base leading-relaxed text-green-700">
            {club.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const renderList = (items: Spotlight[]) => (
  <div className="mt-4 grid gap-4 md:grid-cols-2">
    {items.map((item) => (
      <div key={item.id} id={item.id} className="rounded-2xl border border-green-100 bg-white p-4 text-green-900 shadow-sm">
        <h3 className="text-lg font-semibold text-green-800">{item.name}</h3>
        <p className="mt-2 text-sm text-green-700">{item.summary}</p>
      </div>
    ))}
  </div>
);

export default function BeyondClassrooms() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Beyond Classrooms</h1>
      <p className="text-green-800">
        Holistic education flourishes through vibrant clubs, athletic excellence, performing arts, and academic leagues.
        Explore the opportunities that shape confident, community-minded graduates.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-green-800" id="clubs">Clubs &amp; Unions</h2>
      <p className="mt-3 text-sm text-green-700">
        Student leadership, service, artistry, and scholarship thrive through our vibrant co-curricular societies.
        Each club nurtures talent while staying rooted in the ethos of Jaffna Hindu Ladies College.
      </p>
      {renderClubCards(clubs)}

      <h2 className="mt-10 text-xl font-semibold text-green-800" id="sports">Sports Teams</h2>
      {renderList(sports.map((sport) => ({
        id: sport.title.toLowerCase().replace(/[^a-z]+/g, "-"),
        name: sport.title,
        summary: sport.description,
      })))}

      <h2 className="mt-10 text-xl font-semibold text-green-800" id="fine-arts">Fine Arts</h2>
      {renderList(fineArts.map((item) => ({
        id: item.title.toLowerCase().replace(/[^a-z]+/g, "-"),
        name: item.title,
        summary: item.description,
      })))}

      <h2 className="mt-10 text-xl font-semibold text-green-800" id="academic">Academic Competitions</h2>
      {renderList(academic.map((item) => ({
        id: item.title.toLowerCase().replace(/[^a-z]+/g, "-"),
        name: item.title,
        summary: item.description,
      })))}
    </section>
  );
}
