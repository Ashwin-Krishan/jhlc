export type ClubProfile = {
  name: string;
  objective: string;
  goals: string[];
  slug: string;
  type: "club";
};

export type SportProfile = {
  title: string;
  description: string;
  slug: string;
  type: "sport";
};

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const clubs: ClubProfile[] = [
  {
    name: "Science Club",
    objective: "To ignite curiosity and a passion for discovery in young minds.",
    goals: [
      "Make science come alive through hands-on experiments, exhibitions, and projects.",
      "Motivate students to explore, question, and innovate.",
      "Open doors to competitions and opportunities that take scientific learning beyond the classroom.",
    ],
    slug: toSlug("Science Club"),
    type: "club",
  },
  {
    name: "Library Club",
    objective: "To cultivate a love for books and lifelong learning among students.",
    goals: [
      "Encourage regular reading through engaging activities and challenges.",
      "Help students discover new genres, authors, and ideas.",
      "Create a welcoming space where knowledge, imagination, and creativity can thrive.",
    ],
    slug: toSlug("Library Club"),
    type: "club",
  },
  {
    name: "Arts and Culture Union",
    objective: "To nurture the creative spirit of students through dance, music, drama, literature, and visual arts.",
    goals: [
      "Inspire self-expression and foster cultural appreciation.",
      "Provide opportunities for students to showcase their artistic talents through shows and competitions.",
      "Strengthen teamwork, confidence, and community engagement through the arts.",
    ],
    slug: toSlug("Arts and Culture Union"),
    type: "club",
  },
  {
    name: "Innovation Club",
    objective: "To spark creativity, encourage problem-solving, and cultivate a forward-thinking mindset in students.",
    goals: [
      "Provide a platform to explore new ideas and embrace technology.",
      "Develop innovative solutions to real-world challenges through hands-on experiences.",
      "Inspire curiosity and equip students with skills to become confident innovators and future leaders.",
    ],
    slug: toSlug("Innovation Club"),
    type: "club",
  },
  {
    name: "Robotics Club",
    objective:
      "To foster interest in robotics, coding, and engineering while developing teamwork and problem-solving skills through hands-on technological exploration.",
    goals: [
      "Provide opportunities to design, build, and program robots using modern tools and technologies.",
      "Encourage critical thinking and creativity through robotics challenges and competitions.",
      "Develop technical skills and collaboration to prepare students for future careers in STEM fields.",
    ],
    slug: toSlug("Robotics Club"),
    type: "club",
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
    slug: toSlug("Commerce Union"),
    type: "club",
  },
  {
    name: "Hindu Association",
    objective: "To preserve and promote Hindu traditions, values, and spiritual practices within the school community.",
    goals: [
      "Organize and celebrate all major Hindu festivals.",
      "Perform special rituals on significant religious occasions.",
      "Arrange poojas and other ceremonies at the school temple to encourage spiritual growth and cultural awareness.",
    ],
    slug: toSlug("Hindu Association"),
    type: "club",
  },
  {
    name: "Physical Education Club",
    objective: "To promote physical fitness, sportsmanship, and a healthy lifestyle among students.",
    goals: [
      "Organize annual sports meets and athletic events at school.",
      "Train athletes and prepare them for interschool, regional, provincial, and national competitions.",
      "Encourage teamwork, discipline, and perseverance through sports activities.",
    ],
    slug: toSlug("Physical Education Club"),
    type: "club",
  },
  {
    name: "Interact Club",
    objective: "To develop leadership, responsibility, and a spirit of community service among students.",
    goals: [
      "Organize service projects that benefit the school and local community.",
      "Promote international understanding and goodwill through cultural exchange and awareness activities.",
      "Provide opportunities for students to build teamwork, communication, and leadership skills.",
    ],
    slug: toSlug("Interact Club"),
    type: "club",
  },
  {
    name: "Service Club",
    objective: "To nurture compassion, social responsibility, and leadership by engaging students in meaningful community service initiatives.",
    goals: [
      "Promote a spirit of empathy and volunteerism through community outreach activities.",
      "Encourage students to identify and respond to the needs of society.",
      "Develop leadership, teamwork, and a strong sense of civic responsibility.",
    ],
    slug: toSlug("Service Club"),
    type: "club",
  },
  {
    name: "Leo Club",
    objective: "To empower young people to serve their communities, develop leadership skills, and foster personal growth.",
    goals: [
      "Plan and carry out service projects that create a positive impact.",
      "Provide opportunities for leadership development and teamwork.",
      "Encourage social responsibility, compassion, and active citizenship among members.",
    ],
    slug: toSlug("Leo Club"),
    type: "club",
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
    slug: toSlug("Computer Union"),
    type: "club",
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
    slug: toSlug("English Union"),
    type: "club",
  },
  {
    name: "A/L Union",
    objective: "To foster friendship, cooperation, and unity among Advanced Level students.",
    goals: [
      "Organize the annual get-together for Advanced Level students.",
      "Create opportunities for bonding and mutual support.",
      "Promote teamwork, collaboration, and a positive learning environment.",
    ],
    slug: toSlug("A/L Union"),
    type: "club",
  },
  {
    name: "Tamil Union",
    objective: "To promote the Tamil language, literature, and cultural values while developing students' communication and creative skills.",
    goals: [
      "Prepare students for regional and national Tamil competitions, including essay contests.",
      "Train students to lead morning prayers and share good thoughts of the day.",
      "Organize and celebrate Tamil Day at school to honor the language and its heritage.",
    ],
    slug: toSlug("Tamil Union"),
    type: "club",
  },
  {
    name: "Photography Club",
    objective: "To develop students’ photography skills and create a visual record of school events and activities.",
    goals: [
      "Capture and document photographs of school functions and special moments.",
      "Participate in photography seminars to enhance technical skills and artistic vision.",
      "Encourage creativity, observation, and storytelling through images.",
    ],
    slug: toSlug("Photography Club"),
    type: "club",
  },
  {
    name: "Environmental Club",
    objective: "To nurture stewardship of the environment through awareness, action, and sustainable habits within the school community.",
    goals: [
      "Lead campus clean-up drives and tree-planting initiatives.",
      "Run awareness campaigns on recycling, waste reduction, and conservation.",
      "Organize eco-themed exhibitions, talks, and competitions to inspire responsible citizenship.",
    ],
    slug: toSlug("Environmental Club"),
    type: "club",
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
    slug: toSlug("Social Science Union"),
    type: "club",
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
    slug: toSlug("School Band"),
    type: "club",
  },
  {
    name: "Student Parliament",
    objective: "To cultivate democratic leadership and collaborative problem-solving through student-led ministries.",
    goals: [
      "Hold elections for Speaker, ministries, and class representatives to model civic processes.",
      "Operate ministries such as Education, Health & Wellbeing, Environment, Culture & Sports, and Community Relations to deliver student services.",
      "Debate school improvement proposals and implement action plans that reflect student voice.",
    ],
    slug: toSlug("Student Parliament"),
    type: "club",
  },
  {
    name: "Board of Prefects",
    objective: "To uphold school values, mentor peers, and support smooth operations across events and daily routines.",
    goals: [
      "Lead assemblies, ceremonies, and key school functions with discipline and dignity.",
      "Guide younger students on conduct, study habits, and participation in school life.",
      "Coordinate with staff to maintain a respectful, safe, and inclusive campus environment.",
    ],
    slug: toSlug("Board of Prefects"),
    type: "club",
  },
  {
    name: "Student Cadet",
    objective:
      "To instill discipline, leadership, and a sense of duty while promoting physical fitness and character development among students.",
    goals: [
      "Build leadership qualities, confidence, and teamwork through structured training and activities.",
      "Promote discipline, responsibility, and respect for community and nation.",
      "Encourage physical fitness, resilience, and preparedness through drills and skill-building exercises.",
    ],
    slug: toSlug("Student Cadet"),
    type: "club",
  },
  {
    name: "St. John’s Ambulance",
    objective: "To equip students with first-aid skills and a spirit of service in health-related emergencies.",
    goals: [
      "Train members in certified first aid and emergency response.",
      "Provide medical support at sports meets, parades, and school events.",
      "Run health-awareness sessions on safety, hygiene, and wellness for the student body.",
    ],
    slug: toSlug("St. John’s Ambulance"),
    type: "club",
  },
  {
    name: "Girl Guide",
    objective: "To build character, resilience, and community-minded leadership through guiding principles.",
    goals: [
      "Develop outdoor skills, teamwork, and self-reliance through camps and challenges.",
      "Lead service projects that benefit the school and wider community.",
      "Encourage ethical decision-making, kindness, and global citizenship among members.",
    ],
    slug: toSlug("Girl Guide"),
    type: "club",
  },
  {
    name: "Capital Stock Exchange Opportunities",
    objective: "To introduce students to capital markets, financial literacy, and responsible investing.",
    goals: [
      "Explore stock exchange fundamentals, personal finance, and portfolio simulations.",
      "Invite industry professionals for seminars on market trends and career pathways.",
      "Guide students to analyze companies, track economic indicators, and practice informed decision-making.",
    ],
    slug: toSlug("Capital Stock Exchange Opportunities"),
    type: "club",
  },
  {
    name: "Teachers Club",
    objective: "To strengthen collegiality, continuous learning, and collaborative leadership among the teaching community.",
    goals: [
      "Share best practices and innovations that enhance classroom teaching and student support.",
      "Plan professional development sessions, peer observations, and mentoring opportunities.",
      "Coordinate staff-led initiatives that enrich school culture and model lifelong learning.",
    ],
    slug: toSlug("Teachers Club"),
    type: "club",
  },
];

export const sports: SportProfile[] = [
  {
    title: "Netball",
    description: "Senior and junior squads train for provincial and national tournaments, holding multiple championship titles.",
    slug: toSlug("Netball"),
    type: "sport",
  },
  {
    title: "Basketball",
    description: "Fast-paced development clinics with alumni coaches and inter-school leagues.",
    slug: toSlug("Basketball"),
    type: "sport",
  },
  {
    title: "Cricket",
    description: "Hardball and softball teams building fielding agility and team strategy.",
    slug: toSlug("Cricket"),
    type: "sport",
  },
  {
    title: "Badminton",
    description: "Technical skill sessions and ranking ladders hosted in the multipurpose hall.",
    slug: toSlug("Badminton"),
    type: "sport",
  },
  {
    title: "Elle Team",
    description:
      "Elite squad focusing on discipline, teamwork, and competitive excellence across inter-school and invitational events.",
    slug: toSlug("Elle Team"),
    type: "sport",
  },
  {
    title: "Table Tennis",
    description: "Skill-building drills and competitive matches that enhance reflexes, precision, and tactical play.",
    slug: toSlug("Table Tennis"),
    type: "sport",
  },
  {
    title: "Tennis",
    description: "Structured coaching sessions with singles and doubles practice to develop technique, stamina, and match strategy.",
    slug: toSlug("Tennis"),
    type: "sport",
  },
  {
    title: "Chess",
    description: "Strategic training sessions and tournaments that sharpen critical thinking, planning, and problem-solving skills.",
    slug: toSlug("Chess"),
    type: "sport",
  },
  {
    title: "Carrom",
    description: "Recreational and competitive play fostering focus, accuracy, and fine motor coordination.",
    slug: toSlug("Carrom"),
    type: "sport",
  },
  {
    title: "Swimming",
    description: "Professional coaching in strokes and endurance, preparing students for meets and aquatic competitions.",
    slug: toSlug("Swimming"),
    type: "sport",
  },
];

export const allBeyondItems = [
  ...clubs,
  ...sports,
];
