import Image from "next/image";
import Link from "next/link";

const facilities = [
  {
    name: "Library",
    image: "/images/library.jpg",
    description: "Well-curated Tamil, English, and reference collections with digital cataloguing underway.",
  },
  {
    name: "Canteen",
    image: "/images/canteen.jpg",
    description: "Nutritious meals, seasonal fruits, and hygienic refreshments for students and staff.",
  },
  {
    name: "Sports Complex",
    image: "/images/sports.jpg",
    description: "Netball courts, basketball arena, cricket nets, and a fitness pavilion for year-round training.",
  },
  {
    name: "Visaalachchi Mandapam",
    image: "/images/temple.jpg",
    description: "Heritage hall hosting assemblies, cultural showcases, and milestone celebrations.",
  },
  {
    name: "Rajavarothaya Temple",
    image: "/images/rajavarothaya.jpg",
    description: "A sacred sanctuary for daily puja and spiritual guidance, central to college life.",
  },
  {
    name: "Science Laboratories",
    image: "/images/science-lab.jpg",
    description: "Senior labs for physics, chemistry, and biology with new instrumentation provided by OGA chapters.",
  },
  {
    name: "Technology Studio",
    image: "/images/technology-lab.jpg",
    description: "ICT hubs with robotics, multimedia editing, and coding workstations.",
  },
  {
    name: "Learning Resources Hub",
    image: "/images/gallery2.jpg",
    description: "Digital kiosks linking to educational materials, social awareness programmes, and cyber safety guides.",
    href: "/resources",
  },
];

export default function Facilities() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Facilities</h1>
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
            {facility.href ? (
              <Link href={facility.href} className="mt-3 text-sm font-semibold text-green-700 hover:text-green-900">
                Explore resources →
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
