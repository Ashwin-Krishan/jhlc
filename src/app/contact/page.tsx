export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Contact Us</h1>
      <div className="bg-green-50 border border-green-100 rounded-xl p-6 shadow mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-800">School Address</h2>
        <p className="mb-4 text-green-900">Jaffna Hindu Ladies College,<br/>Arasady Road, Jaffna, Sri Lanka</p>
        <h2 className="text-xl font-semibold mb-2 text-green-800">Phone Number</h2>
        <p className="mb-4 text-green-900">+94 21 222 1234</p>
        <h2 className="text-xl font-semibold mb-2 text-green-800">Email Address</h2>
        <p className="mb-4 text-green-900">info@jhindu.lk</p>
        <h2 className="text-xl font-semibold mb-2 text-green-800">Office Hours</h2>
        <p className="mb-4 text-green-900">Monday - Friday: 8:00 AM - 4:00 PM</p>
      </div>
      <div className="bg-white border border-green-100 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-2 text-green-800">Online Contact Form</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border border-green-300 p-2 rounded" required />
          <input type="email" placeholder="Your Email" className="border border-green-300 p-2 rounded" required />
          <textarea placeholder="Your Message" className="border border-green-300 p-2 rounded" required />
          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded font-semibold hover:bg-green-800 transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
