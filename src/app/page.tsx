import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center gap-6">
        <Image src="/images/logo.png" width={96} height={96} alt="School Logo" />
        <h1 className="text-4xl font-extrabold text-green-900 text-center">
          Jaffna Hindu Ladies College
        </h1>
        <p className="text-lg italic text-green-700 text-center">
          &quot;It ought to be beautiful, I live here.&quot;
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="/images/front-view.jpg" alt="Front View" width={200} height={140} className="rounded-xl shadow" />
          <Image src="/images/saraswati.jpg" alt="Saraswati Statue" width={200} height={140} className="rounded-xl shadow" />
          <Image src="/images/temple.jpg" alt="Temple" width={200} height={140} className="rounded-xl shadow" />
          <Image src="/images/gate.jpg" alt="Gate View" width={200} height={140} className="rounded-xl shadow" />
        </div>

        <div className="mt-12 bg-green-50 p-6 rounded-xl max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-2 text-green-800">Principal&apos;s Message</h2>
          <p>
            Welcome to Jaffna Hindu Ladies College—where tradition meets excellence. Our commitment to nurturing future leaders is unwavering, as we continue to inspire, empower, and guide each student towards her fullest potential.
          </p>
        </div>

        <div className="mt-8 max-w-2xl text-center text-green-900">
          <h3 className="text-xl font-semibold mb-2">Welcome Message</h3>
          <p>
            Established in 1943, Jaffna Hindu Ladies College has stood as a beacon of education, culture, and empowerment for girls in Jaffna. Join us as we celebrate a legacy of achievement and look forward to a future filled with promise.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-8 w-full justify-center">
          <div className="w-full md:w-1/2">
            <h4 className="text-lg font-bold mb-2 text-green-700">Calendar of the Month</h4>
            <div className="bg-white border border-green-100 rounded-xl p-4 shadow text-green-900">
              <p>Coming soon...</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-lg font-bold mb-2 text-green-700">Bulletin Board</h4>
            <div className="bg-white border border-green-100 rounded-xl p-4 shadow text-green-900">
              <ul className="list-disc list-inside space-y-2">
                <li>Term 3 begins July 15</li>
                <li>Annual Sports Day on August 25</li>
                <li>New library books available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
