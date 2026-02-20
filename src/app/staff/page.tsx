import Image from "next/image";

type StaffEntry = {
  file: string;
  name: string;
  roleTag?: string;
  src?: string;
  number?: number;
};

const academicStaffPhotos = [
  "1. MS.SUMATHY KANDASAMY-Principal.JPG",
  "2. MRS.GOWRIBALINI KODEESWARAN-Vice Principal.JPG",
  "3. MRS.ROOBAGOWRY MUGUNTHAN-Vice Principal (1).JPG",
  "4. MRS.VIMALINI RASABALAN-Vice Principal.JPG",
  "5. MR.THIRUGNANAM LINTUS-Vice Principal.JPG",
  "6. MR.PONNAIYA UTHAYARASA.JPG",
  "7. MR.PATHMANATHAN THIRUKUMAR.JPG",
  "8. MRS.MATHIVATHANI SIVANANTHANATHAN.JPG",
  "9. MRS.JASOTHA KULARATHINAM.JPG",
  "10. MRS.JASOTHARA VIGINESWARAMOORTHY.JPG",
  "11. MRS.ARUDSELVY BERTY BENISTER.JPG",
  "12. MRS.SHANTHI NANTHAGOPALAN.JPG",
  "13. MRS.KUNAVATHY SUBASKARAN.JPG",
  "14. MRS.MUHILINI NAVARATNASINGAM.JPG",
  "15. MRS.JEYARUBY KARUNANANTHAN.JPG",
  "16. MRS.SUMITRA PRASATH.JPG",
  "17. MRS.SUGANTHY NADESARASAN.JPG",
  "18. MRS.ARUDCHELY KUHANANTHAM.JPG",
  "19. MS.MATHIVATHANI KANAGARATNAM.JPG",
  "20. MRS.VIJI ANANTHANADARAJAN.JPG",
  "21. MR.SANMUGARAJAH PARANTHAAMAN.JPG",
  "22. MRS.RAJANE RAJAMANOHARAN.JPG",
  "23. MR.MARIMUTHU KARUNANITHY.JPG",
  "24. MRS.SEETHADEVI SELVAKUMAR.JPG",
  "25. MRS.SUMATHY ELANGOGNANIAR.JPG",
  "27. MRS.SUBATHRA SIVARUBAN.JPG",
  "29. MRS.VASANTHAKUMARY THAVANESAN.JPG",
  "30. MRS.VATHANA RAGUNATHAN.JPG",
  "33. MRS.SOTHYMALAR NAVANEETHAKRISHNAN.JPG",
  "34. MR.RASIAH YOKESWARAN.JPG",
  "35. MRS.VIJITHA PARAMTHILLAIRAJAN.JPG",
  "36. MR.PONNAN SHANMUHARASA.JPG",
  "39. MRS.SUKANTHI THANABALASIGAM.JPG",
  "40. MRS.PATRICIA THEVA.JPG",
  "41. MR.THARMARAJAH SENTHILKUMARAN.JPG",
  "42. MRS.SUMATHY KALATHARAN.JPG",
  "43. MRS.MYTHILI SASIHARAN.JPG",
  "44. MRS.SASILATHA JEYAKKUMAR.JPG",
  "46. MRS.SHARMILA RAVICHANDIRAN.JPG",
  "47. MRS.ANUSHANTHY SUKIRTHARAJ.JPG",
  "49. MRS.MOHANA QUINTUS JEEVAN.JPG",
  "50. MR.VALLIPURAM AINKARAN.JPG",
  "52. MISS.JEYANTHI SHAKTHIVEL.JPG",
  "53. MRS.KOSALAGINI SUHEETHAN2.JPG",
  "54. MRS.SUBASINI MAYURAN.JPG",
  "57. MRS. NISHANTHINI ATHEETHAN.JPG",
  "58. MR.SELLAIYAH THAJEETHARAN.JPG",
  "59. MRS.PATHMAPIRIYA SUTHARSAN.JPG",
  "61. MRS.MALINI VASUTHEVAN.JPG",
  "62. MRS.SOTHYMALA GOWREESHAN.JPG",
  "63. MR.RAMALINGAM NAJAN.JPG",
  "64. MR. POONAMPALAM ATHEESAN.JPG",
  "65. MISS.VASUKI KANDASAMY.JPG",
  "67. MRS.SUGANTHY YOHARAJAN.JPG",
  "68. MRS.JEYATHEVY SIVASOTHY.JPG",
  "70. MRS.POORANY SATHIAN.JPG",
  "71. MRS.VATHSALA BALAMAKINTHAN.JPG",
  "73. MRS. PREMILA KALAICHELVAN.JPG",
  "74. MR. SELLLIAH PANNERSELVAN.JPG",
  "75. MRS.KAVITHA KATHIRAMALAI.JPG",
  "77. MRS.AJENTHINI SUTHAHARAN.JPG",
  "78. MRS.SUBAJINI PRATHEEPAN .JPG",
  "80. MRS.KUMUTHINI JEYARUBAN.JPG",
  "82. MR.NADESAPILLAI PIRATHEEPAN.JPG",
  "83. MRS.THARSINI SAGATHEVAN.JPG",
  "86. MRS. GEERTHIHA RAMANAN.JPG",
  "87. MRS.JEYAMALA AYAVAN.JPG",
  "89. MRS.SUTHARSHINI KARANSAN.JPG",
  "90. MRS.BALASAJINI BALASABESH.JPG",
  "91. MRS.JEEVAKI SAINIRUBAN.JPG",
  "93. MRS.DHARSHIKA SHIYAMALARUBAN.JPG",
  "94. MRS.LAXSHIKA INDRAJITH.JPG",
  "95. MS.THUJEEVA VIJAYARADNAM.JPG",
  "96. MRS.YATHUPPIRIYA PRASATH.JPG",
  "98. MRS.BHANUREGA SANJEEVAN.JPG",
  "99. MR.PREMKUMAR NIROJANAN.JPG",
  "100. MRS.MATHURA PARAMESWARAN.JPG",
  "101. MRS.THARANI VASUTHEESAN.JPG",
  "102. MS.GNANATHARSHINI THIYAGARASA.JPG",
  "104. MRS.BABITHA SANJEEVAN.JPG",
  "105. MRS.PRABALINI CHANDRAPRAKASH.JPG",
  "106. MRS.NIXSALA NITHARSAN.JPG",
  "107. MRS.THEVAKI SUTHAKARAN.JPG",
  "108. MRS.ANOJAH MOHANAKRISHNAR.JPG",
  "109. MRS.THEVATHARSHIKA SASEEKARAN.JPG",
  "110. MRS.VIRUBINJA SAIRAM.JPG",
  "111. MRS.SAYEETHRA KUGAN.JPG",
  "112. MRS.KUMUTHINI MAARAN.JPG",
  "116. MRS.POORANI SIYAMALAN.JPG",
  "117. MRS.RATHIKA SRIHARAN.JPG",
];

const nonAcademicStaffPhotos = [
  "MR.ELAKUNATHAN SASITHARAN.JPG",
  "MR.SUPPAIYA VEERAIYAH.JPG",
  "MRS.GAYATHRI SELVAKABILAN.JPG",
  "MRS.NIROSHINI MAURAN.JPG",
];

const academicMissingStaff = [
  { number: 26, name: "MS.KALA NAMASIVAYAM" },
  { number: 28, name: "MRS.SIVATHARSINI SIVAROOPAN" },
  { number: 31, name: "MRS.SHINDUJAH PRANAVANATHAN" },
  { number: 32, name: "MRS.THACHCHAYANI KANESHANATHAN" },
  { number: 37, name: "MR.SARAVANAI VASANTHARASA" },
  { number: 38, name: "MRS.UTHAYASUTHARSINI GUNANESAN" },
  { number: 45, name: "MRS.ANINTHENI SIVANADARAJAN" },
  { number: 48, name: "MRS.RAJI SURENTHIRAN" },
  { number: 51, name: "MRS.INPANITHY JENALD ANTONY" },
  { number: 55, name: "MISS.THAYALINI KUGARAJAN" },
  { number: 56, name: "MRS.BANUREKA ANTONY SUTHAKAR" },
  { number: 60, name: "MRS.SIVAKANTHY GOKULA" },
  { number: 66, name: "MR.SIVANATHAN RAJEEVAN" },
  { number: 69, name: "MRS.NAVAMANY RAJAKUMAR" },
  { number: 72, name: "MR.SIVALINGAM THAVARAJAH" },
  { number: 76, name: "MRS.GEETHA GANESHAYINI SHANMUGARAJ" },
  { number: 79, name: "MRS.PIRATHEEPA RAJASEKAR" },
  { number: 81, name: "MRS.JENANTHINY THUSHIYANTHAN" },
  { number: 84, name: "MRS.MERY ANNE TERESA ANTONY REVAL" },
  { number: 85, name: "MRS.SUMITHIRA SRITHARAMOHAN" },
  { number: 88, name: "MRS.YASOTHARA SANTHAKUMAR" },
  { number: 92, name: "MRS.SOBANA SRIJEYABHAVAN" },
  { number: 97, name: "MRS.SIVATHARSINI KEETHAMPARAN" },
  { number: 103, name: "MRS.PRIYENGAH UBENTHIRAN" },
  { number: 105, name: "MRS.PRABALINI CHANDRAPRAKASH" },
  { number: 113, name: "MR.RAGUNATHAN UMAPATHY" },
  { number: 114, name: "MR.PONNAMPALAM SATKUNASEELAN" },
  { number: 115, name: "MRS.GAYATHIRI LAGUTHAS" },
  { number: 118, name: "MRS.SANGEETHA RUBASEELAN" },
  { number: 119, name: "MRS.YOGESWARY KETHEESWARAN" },
];

const nonAcademicMissingStaff = [
  "MISS.SANUJA RAVI",
  "MRS.NAGULESWARY SIVAKUMAR",
  "MRS.KOKILA WILSON JEYAKUMAR",
  "MR.THARMARAJAH SINTHUJAN",
  "MRS.KEMAVATHY",
];

const formatName = (raw: string) => {
  const cleaned = raw
    .replace(/^\d+\.\s*/, "")
    .replace(/\.(jpe?g|png)$/i, "")
    .replace(/\s*\([^)]*\)\s*/g, "")
    .replace(/_/g, " ")
    .trim();
  const [namePart] = cleaned.split(/-+/);
  const spaced = namePart.replace(/(\b[A-Z]+\.)/g, "$1 ").replace(/\s+/g, " ").trim();
  return spaced
    .split(" ")
    .filter(Boolean)
    .map((word) => (word.match(/^[A-Z]\.?$/i) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
    .join(" ");
};

const extractTag = (raw: string) => {
  const cleaned = raw
    .replace(/^\d+\.\s*/, "")
    .replace(/\s*\([^)]*\)\s*/g, "")
    .replace(/\.(jpe?g|png)$/i, "");
  const parts = cleaned.split(/-+/);
  if (parts.length < 2) return undefined;
  const tag = parts.slice(1).join("-").replace(/_/g, " ").trim();
  if (!tag) return undefined;
  return tag
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const parseNumber = (raw: string) => {
  const match = raw.match(/^(\d+)\./);
  return match ? Number(match[1]) : undefined;
};

const getInitials = (name: string) => {
  const words = name
    .replace(/\./g, "")
    .split(" ")
    .filter(Boolean)
    .filter((word) => !["mr", "mrs", "ms", "miss"].includes(word.toLowerCase()));
  if (words.length === 0) return name.slice(0, 2).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
};

const buildStaffEntries = (files: string[], basePath: string): StaffEntry[] => {
  const seen = new Set<string>();
  const entries: StaffEntry[] = [];

  for (const file of files) {
    const name = formatName(file);
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    const roleTag = extractTag(file);
    entries.push({
      file,
      name,
      roleTag,
      src: `${basePath}/${encodeURIComponent(file)}`,
      number: parseNumber(file),
    });
  }

  return entries;
};

const academicStaffEntries = [
  ...buildStaffEntries(academicStaffPhotos, "/Updated%20Staff%20Photos"),
  ...academicMissingStaff.map((entry) => ({
    file: `${entry.number}. ${entry.name}`,
    name: formatName(`${entry.number}. ${entry.name}`),
    number: entry.number,
  })),
].sort((a, b) => (a.number ?? 0) - (b.number ?? 0));

const nonAcademicStaffEntries = [
  ...buildStaffEntries(nonAcademicStaffPhotos, "/Updated%20Staff%20Photos/Non%20academic%20staff%20"),
  ...nonAcademicMissingStaff.map((name) => ({
    file: name,
    name: formatName(name),
  })),
];

export default function Staff() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Staff Directory</h1>

      <h2 className="mt-8 text-xl font-semibold text-green-800" id="academic-staff">Academic Staff</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {academicStaffEntries.map((staff) => (
          <div key={staff.name} className="flex flex-col items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 text-center text-green-900 shadow-sm">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-green-100 bg-green-50 shadow-sm">
              {staff.src ? (
                <Image
                  src={staff.src}
                  alt={staff.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-green-700">
                  {getInitials(staff.name)}
                </div>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold text-green-900">{staff.name}</p>
              {staff.roleTag ? (
                <span className="mt-1 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                  {staff.roleTag}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold text-green-800" id="non-academic-staff">Non Academic Staff</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nonAcademicStaffEntries.map((staff) => (
          <div key={staff.name} className="flex flex-col items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 text-center text-green-900 shadow-sm">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-green-100 bg-green-50 shadow-sm">
              {staff.src ? (
                <Image
                  src={staff.src}
                  alt={staff.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-green-700">
                  {getInitials(staff.name)}
                </div>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold text-green-900">{staff.name}</p>
              {staff.roleTag ? (
                <span className="mt-1 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                  {staff.roleTag}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-green-100 bg-green-50 p-5 text-sm text-green-700">
        <p className="font-semibold">Directory updates</p>
        <p className="mt-2">
          Photographs are sourced from the official directory folder. If a name needs correction, please email{" "}
          <a href="mailto:office@jhindu.lk" className="text-green-700 hover:text-green-900">office@jhindu.lk</a>.
        </p>
      </div>
    </section>
  );
}
