import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Luxe Goddess",
  description:
    "Digital Luxe Goddess – Helping creators, coaches, and service providers build evergreen, high-ticket digital brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050816] text-white">{children}</body>
    </html>
  );
}

