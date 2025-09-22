import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://jhlc.vercel.app"),
  title: {
    default: "Jaffna Hindu Ladies College (JHLC)",
    template: "%s | Jaffna Hindu Ladies College",
  },
  description:
    "Official website of Jaffna Hindu Ladies College (JHLC), Sri Lanka. School history, staff directory, facilities, clubs, sports, alumni, contact information, and resources.",
  keywords: [
    "Jaffna Hindu Ladies College",
    "JHLC",
    "யாழ் இந்து மகளிர் கல்லூரி",
    "யாழ்ப்பாணம் இந்து மகளிர் கல்லூரி",
    "Jaffna girls school",
    "Sri Lanka schools",
    "OGA Jaffna",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jaffna Hindu Ladies College (JHLC)",
    description:
      "Official website of Jaffna Hindu Ladies College (JHLC), Sri Lanka.",
    url: "https://jhlc.vercel.app",
    siteName: "Jaffna Hindu Ladies College",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Jaffna Hindu Ladies College",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaffna Hindu Ladies College (JHLC)",
    description:
      "Official website of Jaffna Hindu Ladies College (JHLC), Sri Lanka.",
    images: ["/images/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
