const leadership = [
  {
    name: "Mrs. V. Perinpanathan",
    role: "Principal",
    credentials: "B.Sc., Dip in Edu, SLPS I",
    focus:
      "Oversees academic excellence, student wellbeing, and partnerships with alumnae chapters.",
  },
  {
    name: "Mrs. T. A. Thuraisingam",
    role: "Deputy Principal & Head of Primary",
    credentials: "Dip in Edu",
    focus: "Guides the primary section and supports transitions into the senior school.",
  },
  {
    name: "Vice Principal (Acting)",
    role: "Student Development",
    credentials: "Appointment in progress",
    focus:
      "The updated vice principal portfolio will encompass guidance counselling, clubs, and safeguarding.",
  },
];

const academicStaff = [
  {
    department: "Science & Technology",
    summary: "STEM educators, laboratory demonstrators, and ICT instructors (directory under review).",
  },
  {
    department: "Languages & Humanities",
    summary: "Tamil, English, and social science specialists fostering debate, literature, and civic awareness.",
  },
  {
    department: "Commerce & Mathematics",
    summary: "Advanced Level accounting, economics, and mathematics mentors supporting university pathways.",
  },
];

const supportStaff = [
  {
    department: "Administration",
    summary: "Registrar, finance, and admissions teams ensuring smooth operations and parent services.",
  },
  {
    department: "Student Services",
    summary: "Counsellors, librarians, and laboratory assistants providing day-to-day guidance and care.",
  },
  {
    department: "Campus & Facilities",
    summary: "Laboratory aides, groundskeepers, and security personnel safeguarding our learning environment.",
  },
];

export default function Staff() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Staff Directory</h1>
      <p className="text-green-800">
        Contact the college office at <a href="tel:+94212221234" className="text-green-700 hover:text-green-900">+94 21 222 1234</a> for appointments with staff. The full photographic directory is being digitised and will be published in phases.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-green-800" id="leadership">Leadership Team</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {leadership.map((leader) => (
          <div key={leader.name} className="rounded-2xl border border-green-100 bg-white p-4 text-green-900 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-green-600">{leader.role}</p>
            <h3 className="mt-2 text-lg font-semibold text-green-900">{leader.name}</h3>
            <p className="mt-1 text-sm text-green-700">{leader.credentials}</p>
            <p className="mt-2 text-sm text-green-700">{leader.focus}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-semibold text-green-800" id="academic-staff">Academic Staff</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {academicStaff.map((dept) => (
          <div key={dept.department} className="rounded-2xl border border-green-100 bg-green-50 p-4 text-green-900">
            <h3 className="text-lg font-semibold text-green-800">{dept.department}</h3>
            <p className="mt-2 text-sm text-green-700">{dept.summary}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-semibold text-green-800" id="support-staff">Administrative &amp; Support</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {supportStaff.map((dept) => (
          <div key={dept.department} className="rounded-2xl border border-green-100 bg-white p-4 text-green-900 shadow-sm">
            <h3 className="text-lg font-semibold text-green-800">{dept.department}</h3>
            <p className="mt-2 text-sm text-green-700">{dept.summary}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-green-100 bg-green-50 p-5 text-sm text-green-700">
        <p className="font-semibold">Directory updates</p>
        <p className="mt-2">
          Photographs and detailed biographies for teaching and non-academic teams are being compiled. Alumni and
          staff can submit corrections via <a href="mailto:office@jhindu.lk" className="text-green-700 hover:text-green-900">office@jhindu.lk</a>.
        </p>
      </div>
    </section>
  );
}
