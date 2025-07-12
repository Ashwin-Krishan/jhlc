import Image from "next/image";

const facilities = [
  {
    name: "Library",
    image: "/images/library.jpg",
    description: "A well-stocked library supporting all areas of study."
  },
  {
    name: "Canteen",
    image: "/images/canteen.jpg",
    description: "Nutritious food and snacks for students and staff."
  },
  {
    name: "Sports Facilities",
    image: "/images/sports.jpg",
    description: "Facilities for netball, basketball, cricket, badminton and more."
  },
  {
    name: "Visaalachchi Mandapam",
    image: "/images/mandapam.jpg",
    description: "A beautiful hall for events and ceremonies."
  },
  {
    name: "Temple",
    image: "/images/temple.jpg",
    description: "Rajavarothaya Pillaiyar Temple inside the college premises."
  },
  {
    name: "Science Lab",
    image: "/images/science-lab.jpg",
    description: "Modern lab for science education."
  },
  {
    name: "Technology Lab",
    image: "/images/technology-lab.jpg",
    description: "Equipped for ICT and technology learning."
  },
  // Add more as needed
];

export default function Facilities() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Facilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {facilities.map((facility, idx) => (
          <div key={idx} className="bg-white border rounded-xl p-4 flex flex-col items-center shadow">
            <Image
              src={facility.image}
              alt={facility.name}
              width={180}
              height={120}
              className="rounded-xl mb-2 object-cover"
            />
            <h2 className="font-semibold text-lg text-gray-800">{facility.name}</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">{facility.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
