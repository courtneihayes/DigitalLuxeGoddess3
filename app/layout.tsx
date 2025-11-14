import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Luxe Goddess | Wealth, Alignment & Online Business Academy",
  description:
    "Digital Luxe Goddess helps women entrepreneurs, creators, and single moms design evergreen online income with proven digital offers, automation, and empowerment coaching.",
  metadataBase: new URL("https://digitalluxegoddess.com"),
  openGraph: {
    title: "Digital Luxe Goddess | Wealth, Alignment & Online Business Academy",
    description:
      "Turn your story into a high-value digital brand. Programs, 1:1 alignment, and journals built for women ready to build wealthy, regulated lives.",
    url: "https://digitalluxegoddess.com",
    siteName: "Digital Luxe Goddess",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Luxe Goddess Brand"
      }
    ],
    type: "website"
  },
  alternates: {
    canonical: "https://digitalluxegoddess.com"
  },
  keywords: [
    "digital luxe goddess",
    "online business academy for women",
    "black women entrepreneurs",
    "feminine wealth coaching",
    "content creator systems",
    "evergreen digital products",
    "Baton Rouge women entrepreneur",
    "online coaching programs",
    "high-ticket content strategy",
    "goddess empowerment journals"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
