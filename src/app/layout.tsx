import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammedinshad.dev"),
  title: "Muhammed Inshad | Flutter Developer",
  description:
    "Flutter Developer with 1.5+ years of experience building secure, scalable fintech and business applications using Flutter, Riverpod, Firebase, REST APIs, and Clean Architecture.",
  keywords: [
    "Muhammed Inshad",
    "Flutter Developer",
    "Mobile Engineer",
    "Riverpod",
    "Fintech Apps",
    "Clean Architecture",
    "Dubai Flutter Developer",
    "Cross Platform Developer",
  ],
  authors: [{ name: "Muhammed Inshad" }],
  openGraph: {
    title: "Muhammed Inshad | Flutter Developer",
    description:
      "Building premium cross-platform mobile applications with Flutter, Riverpod, Firebase, & Clean Architecture.",
    url: "https://muhammedinshad.dev",
    siteName: "Muhammed Inshad Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 800,
        alt: "Muhammed Inshad - Flutter Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Inshad | Flutter Developer",
    description:
      "Building premium cross-platform mobile applications with Flutter.",
    images: ["/avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="bg-[#0B0B0B] text-[#F5F5F7] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0B0B0B] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}

