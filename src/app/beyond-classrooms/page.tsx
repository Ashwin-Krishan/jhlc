const clubs = [
  {
    title: "Interact Club",
    description: "Community service projects, coastal clean-ups, and leadership exchanges with Rotary partners.",
  },
  {
    title: "LEO Club",
    description: "Youth-led initiatives focusing on humanitarian outreach and entrepreneurship challenges.",
  },
  {
    title: "Girl Guides",
    description: "Guiding traditions, camping skills, and national jamboree participation.",
  },
  {
    title: "School Band",
    description: "Marching and classical ensembles supporting ceremonial parades and cultural festivals.",
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

const clubSpotlights: Spotlight[] = clubs.map((club) => ({ id: club.title.toLowerCase().replace(/[^a-z]+/g, "-"), name: club.title, summary: club.description }));

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

      <h2 className="mt-8 text-xl font-semibold text-green-800" id="clubs">Clubs</h2>
      {renderList(clubSpotlights)}

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
