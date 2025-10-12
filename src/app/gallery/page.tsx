import Image from "next/image";

const photos = [
  "/images/PhotoGallery/54ad4fb3-7f77-4f9b-aa05-e4c9f9188a25.jpg",
  "/images/PhotoGallery/6e7a4538-b122-4ece-8e70-a6fd0a86cbe9.jpg",
  "/images/PhotoGallery/IMG-20251007-WA0005.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0020.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0021.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0024.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0025.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0026.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0027.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0029.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0030.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0031.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0032.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0034.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0042.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0043.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0044.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0047.jpg",
  "/images/PhotoGallery/IMG-20251010-WA0048.jpg",
  "/images/PhotoGallery/f57f6b5e-e7af-4a04-b642-5bce699800f0.jpg",
];

export default function Gallery() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-8">Photo Gallery</h1>
      <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {photos.map((src, idx) => (
          <div key={src} className="break-inside-avoid rounded-2xl bg-green-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Image
              src={src}
              alt={`Jaffna Hindu Ladies College photo ${idx + 1}`}
              width={900}
              height={1200}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
