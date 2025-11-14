import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Luxe Goddess | Link Hub & Evergreen Offers",
  description:
    "Digital Luxe Goddess helps creators, coaches, and service providers turn their gifts into evergreen digital products and income.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}

