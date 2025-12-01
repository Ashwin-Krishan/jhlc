import Image from "next/image";

type StaffEntry = {
  file: string;
  name: string;
  roleTag?: string;
  src: string;
};

const staffPhotos = [
  "MISS.JEYANTHI SHAKTHIVEL.JPG",
  "MISS.VASUKI KANDASAMY.JPG",
  "MR. POONAMPALAM ATHEESAN.JPG",
  "MR. SELLLIAH PANNERSELVAN.JPG",
  "MR.ELAKUNATHAN SASITHARAN.JPG",
  "MR.MARIMUTHU KARUNANITHY.JPG",
  "MR.NADESAPILLAI PIRATHEEPAN.JPG",
  "MR.PATHMANATHAN THIRUKUMAR.JPG",
  "MR.PONNAIYA UTHAYARASA.JPG",
  "MR.PONNAN SHANMUHARASA.JPG",
  "MR.PREMKUMAR NIROJANAN.JPG",
  "MR.RAMALINGAM KESAVAN.JPG",
  "MR.RAMALINGAM NAJAN.JPG",
  "MR.RASIAH YOKESWARAN.JPG",
  "MR.SANMUGARAJAH PARANTHAAMAN.JPG",
  "MR.SELLAIYAH THAJEETHARAN.JPG",
  "MR.SUPPAIYA VEERAIYAH.JPG",
  "MR.THARMARAJAH SENTHILKUMARAN.JPG",
  "MR.THIRUGNANAM LINTUS-Vice Principal.JPG",
  "MR.VALLIPURAM AINKARAN.JPG",
  "MRS. GEERTHIHA RAMANAN.JPG",
  "MRS. NISHANTHINI ATHEETHAN.JPG",
  "MRS. PREMILA KALAICHELVAN.JPG",
  "MRS.AJENTHINI SUTHAHARAN.JPG",
  "MRS.ANOJAH MOHANAKRISHNAR.JPG",
  "MRS.ANUSHANTHY SUKIRTHARAJ.JPG",
  "MRS.ARUDCHELY KUHANANTHAM.JPG",
  "MRS.ARUDSELVY BERTY BENISTER.JPG",
  "MRS.BABITHA SANJEEVAN.JPG",
  "MRS.BALASAJINI BALASABESH.JPG",
  "MRS.BHANUREGA SANJEEVAN.JPG",
  "MRS.DHARSHIKA SHIYAMALARUBAN.JPG",
  "MRS.GAYATHRI SELVAKABILAN.JPG",
  "MRS.GOWRIBALINI KODEESWARAN-Vice Principal.JPG",
  "MRS.JASOTHA KULARATHINAM.JPG",
  "MRS.JASOTHARA VIGINESWARAMOORTHY.JPG",
  "MRS.JEEVAKI SAINIRUBAN.JPG",
  "MRS.JEYAMALA AYAVAN.JPG",
  "MRS.JEYARUBY KARUNANANTHAN.JPG",
  "MRS.JEYATHEVY SIVASOTHY.JPG",
  "MRS.KAVITHA KATHIRAMALAI.JPG",
  "MRS.KOSALAGINI SUHEETHAN2.JPG",
  "MRS.KUMUTHINI JEYARUBAN.JPG",
  "MRS.KUMUTHINI MAARAN.JPG",
  "MRS.KUNAVATHY SUBASKARAN.JPG",
  "MRS.LAXSHIKA INDRAJITH.JPG",
  "MRS.MALINI VASUTHEVAN.JPG",
  "MRS.MATHIVATHANI KANAGARATNAM.JPG",
  "MRS.MATHURA PARAMESWARAN.JPG",
  "MRS.MOHANA QUINTUS JEEVAN.JPG",
  "MRS.MUHILINI NAVARATNASINGAM.JPG",
  "MRS.MYTHILI SASIHARAN.JPG",
  "MRS.NIROSHINI MAURAN (1).JPG",
  "MRS.NIROSHINI MAURAN.JPG",
  "MRS.NIXSALA NITHARSAN.JPG",
  "MRS.PATHMAPIRIYA SUTHARSAN.JPG",
  "MRS.PATRICIA THEVA.JPG",
  "MRS.POORANI SIYAMALAN.JPG",
  "MRS.POORANY SATHIAN.JPG",
  "MRS.PRABALINI KRISHNAMOORTHY.JPG",
  "MRS.RAJANE RAJAMANOHARAN.JPG",
  "MRS.RATHIKA SRIHARAN.JPG",
  "MRS.ROOBAGOWRY MUGUNTHAN-Vice Principal.JPG",
  "MRS.SASILATHA JEYAKKUMAR.JPG",
  "MRS.SAYEETHRA KUGAN.JPG",
  "MRS.SEETHADEVI SELVAKUMAR.JPG",
  "MRS.SHANTHI NANTHAGOPALAN.JPG",
  "MRS.SHARMILA RAVICHANDIRAN.JPG",
  "MRS.SOTHYMALA GOWREESHAN.JPG",
  "MRS.SOTHYMALAR NAVANEETHAKRISHNAN.JPG",
  "MRS.SUBAJINI PRATHEEPAN (2).JPG",
  "MRS.SUBASINI MAYURAN.JPG",
  "MRS.SUBATHRA SIVARUBAN.JPG",
  "MRS.SUGANTHINI MATHIYANANTHAM.JPG",
  "MRS.SUGANTHY NADESARASAN.JPG",
  "MRS.SUGANTHY YOHARAJAN.JPG",
  "MRS.SUKANTHI THANABALASIGAM.JPG",
  "MRS.SUMATHY ELANGOGNANIAR.JPG",
  "MRS.SUMATHY KALATHARAN.JPG",
  "MRS.SUMITRA PRASATH.JPG",
  "MRS.SUTHARSHINI KARANSAN.JPG",
  "MRS.THARANI VASUTHEESAN.JPG",
  "MRS.THARSINI SAGATHEVAN.JPG",
  "MRS.THEVAKI SUTHAKARAN.JPG",
  "MRS.THEVATHARSHIKA SASEEKARAN.JPG",
  "MRS.VASANTHAKUMARY THAVANESAN.JPG",
  "MRS.VATHANA RAGUNATHAN.JPG",
  "MRS.VATHSALA BALAMAKINTHAN.JPG",
  "MRS.VIJI ANANTHANADARAJAN.JPG",
  "MRS.VIJITHA PARAMTHILLAIRAJAN.JPG",
  "MRS.VIMALINI RASABALAN-Vice Principal.JPG",
  "MRS.VIRUBINJA SAIRAM.JPG",
  "MRS.YATHUPPIRIYA PRASATH.JPG",
  "MS.GNANATHARSHINI THIYAGARASA.JPG",
  "MS.MATHIVATHANI KANAGARATNAM.JPG",
  "MS.SUMATHY KANDASAMY-Principal.JPG",
  "MS.THUJEEVA VIJAYARADNAM.JPG",
];

const formatName = (raw: string) => {
  const cleaned = raw
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
  const cleaned = raw.replace(/\.(jpe?g|png)$/i, "");
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

const buildStaffEntries = (): StaffEntry[] => {
  const seen = new Set<string>();
  const entries: StaffEntry[] = [];

  for (const file of staffPhotos) {
    const name = formatName(file);
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    const roleTag = extractTag(file);
    entries.push({
      file,
      name,
      roleTag,
      src: `/Staff%20Photos/${encodeURIComponent(file)}`,
    });
  }

  const priority = (tag?: string) => {
    if (!tag) return 2;
    if (/principal/i.test(tag) && !/vice/i.test(tag)) return 0;
    if (/vice\s*principal/i.test(tag)) return 1;
    return 2;
  };

  return entries.sort((a, b) => {
    const diff = priority(a.roleTag) - priority(b.roleTag);
    if (diff !== 0) return diff;
    return a.name.localeCompare(b.name);
  });
};

const staffEntries = buildStaffEntries();

export default function Staff() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Staff Directory</h1>

      <h2 className="mt-8 text-xl font-semibold text-green-800" id="staff-list">Staff Photos &amp; Names</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {staffEntries.map((staff) => (
          <div key={staff.name} className="flex flex-col items-center gap-3 rounded-2xl border border-green-100 bg-white p-4 text-center text-green-900 shadow-sm">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-green-100 bg-green-50 shadow-sm">
              <Image
                src={staff.src}
                alt={staff.name}
                fill
                sizes="128px"
                className="object-cover"
              />
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
