import Image from "next/image";

const staff = [
  {
    name: "Mrs. V. Perinpanathan",
    role: "Principal",
    image: "/images/principal.jpg",
    details: "B.Sc., Dip in Edu, SLPS 1. Joined in 1989, principal since 2006.",
  },
  {
    name: "Mrs. T. A. Thuraisingam",
    role: "Deputy Principal",
    image: "/images/deputy-principal.jpg",
    details: "",
  },
  {
    name: "Mrs. [Name]",
    role: "Vice Principal",
    image: "/images/vice-principal.jpg",
    details: "",
  },
  // ...add admin, academic staff, non-academic staff
];

export default function Staff() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Staff Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {staff.map((member, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl p-4 flex flex-col items-center shadow hover:shadow-lg transition"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="rounded-full object-cover mb-2"
            />
            <h2 className="font-semibold text-lg text-gray-800">{member.name}</h2>
            <p className="text-blue-700">{member.role}</p>
            <p className="text-sm text-gray-600 mt-2 text-center">{member.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
