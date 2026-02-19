"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "History", href: "/history" },
  { label: "Staff", href: "/staff" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Calendar", href: "/calendar" },
  { label: "Beyond Classrooms", href: "/beyond-classrooms" },
  { label: "Resources", href: "/resources" },
  { label: "News", href: "/news" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="JHLC Logo" width={40} height={40} />
          <span className="font-bold text-lg text-green-700 md:text-xl">Jaffna Hindu Ladies College</span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-green-200 text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <span className="sr-only">Menu</span>
            <span className="pointer-events-none flex flex-col items-center justify-center gap-1.5">
              <span
                aria-hidden
                className={`block h-0.5 w-6 rounded bg-current transition duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                aria-hidden
                className={`block h-0.5 w-6 rounded bg-current transition duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                aria-hidden
                className={`block h-0.5 w-6 rounded bg-current transition duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          <ul className="hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`overflow-hidden border-t border-green-100 bg-white transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3 text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-green-50 text-green-800"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {item.label}
                <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
