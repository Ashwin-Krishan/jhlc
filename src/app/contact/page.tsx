export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>
      <div className="bg-white border rounded-xl p-6 shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">School Address</h2>
        <p className="mb-4">Jaffna Hindu Ladies College,<br/>Arasady Road, Jaffna, Sri Lanka</p>
        <h2 className="text-xl font-semibold mb-2">Phone Number</h2>
        <p className="mb-4">+94 21 222 1234</p>
        <h2 className="text-xl font-semibold mb-2">Email Address</h2>
        <p className="mb-4">info@jhindu.lk</p>
        <h2 className="text-xl font-semibold mb-2">Office Hours</h2>
        <p className="mb-4">Monday - Friday: 8:00 AM - 4:00 PM</p>
      </div>
      <div className="bg-blue-50 border rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Online Contact Form</h2>
        {/* Replace with a working form or Formspree integration */}
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border p-2 rounded" required />
          <input type="email" placeholder="Your Email" className="border p-2 rounded" required />
          <textarea placeholder="Your Message" className="border p-2 rounded" required />
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
