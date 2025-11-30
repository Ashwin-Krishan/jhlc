import Image from "next/image";

type Facility = {
  name: string;
  image: string;
  description: string;
  details?: string[];
};

const facilities: Facility[] = [
  {
    name: "Library",
    image: "/images/library.jpg",
    description:
      "A calm, vibrant hub with textbooks, references, storybooks, journals, and digital resources that nurture curiosity and independent learning.",
  },
  {
    name: "Sports Complex",
    image: "/images/sports.jpg",
    description:
      "Netball and basketball courts, table tennis, cricket grounds, and track-and-field spaces that promote discipline, teamwork, and lifelong fitness.",
  },
  {
    name: "Visaladchi Mandapam",
    image: "/images/temple.jpg",
    description:
      "Our modern auditorium for assemblies, cultural showcases, debates, competitions, and milestone celebrations with professional seating and acoustics.",
  },
  {
    name: "Rajavarothayar Temple",
    image: "/images/rajavarothaya.jpg",
    description:
      "A serene sanctuary where daily prayers and observances deepen the college's cultural roots and encourage reflection, respect, and harmony.",
  },
  {
    name: "Science Laboratories",
    image: "/images/science-lab.jpg",
    description:
      "Hands-on spaces that support experimentation and discovery across the life and physical sciences for every stage of study.",
    details: [
      "Junior Science Lab for foundational experiments and observation.",
      "Physics Lab exploring mechanics, electricity, light, and energy.",
      "Chemistry Lab for studying reactions, compounds, and analysis.",
      "Botany Lab dedicated to plant science and ecological study.",
      "Zoology Lab examining animal biology, anatomy, and classification.",
    ],
  },
  {
    name: "Technology Laboratories",
    image: "/images/technology-lab.jpg",
    description:
      "ICT suites with modern computers, digital learning tools, and collaborative workstations that foster coding, design thinking, and real-world problem solving.",
  },
  {
    name: "Co-operative Distribution Centre",
    image: "/images/canteen.jpg",
    description:
      "Serving the community since 1951 with affordable food, uniforms, and classroom essentials, reinvesting proceeds to enhance school facilities.",
  },
];

export default function Facilities() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-8 text-center">JHLC Facilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {facilities.map((facility) => (
          <div key={facility.name} className="bg-green-50 border border-green-100 rounded-xl p-4 flex flex-col items-center shadow">
            <Image
              src={facility.image}
              alt={facility.name}
              width={180}
              height={120}
              className="rounded-xl mb-2 object-cover"
            />
            <h2 className="font-semibold text-lg text-green-800">{facility.name}</h2>
            <p className="text-sm text-green-900 mt-2 text-center">{facility.description}</p>
            {(() => {
              const details = facility.details;
              if (!details || details.length === 0) return null;
              return (
                <ul className="mt-3 list-disc space-y-1 text-left text-sm text-green-800">
                  {details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            })()}
          </div>
        ))}
      </div>
    </section>
  );
}
