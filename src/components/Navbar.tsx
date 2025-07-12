"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Staff", href: "/staff" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Beyond Classrooms", href: "/beyond-classrooms" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="JHLC Logo" width={40} height={40} />
          <span className="font-bold text-xl text-green-700">Jaffna Hindu Ladies College</span>
        </Link>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition font-medium px-1 py-0.5 ${
                  pathname === item.href
                    ? "text-green-800 border-b-2 border-green-700"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
