export default function Footer() {
  return (
    <footer className="bg-green-50 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-green-700">
        <span>&copy; {new Date().getFullYear()} Jaffna Hindu Ladies College. All rights reserved.</span>
        <span>Powered by the A/L &#39;95 Batch</span>
      </div>
    </footer>
  );
}
