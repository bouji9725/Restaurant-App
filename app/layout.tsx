import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Lemon Restaurant",
  description:
    "Little Lemon is a family-owned Mediterranean restaurant in Chicago offering traditional recipes with a modern twist. Reserve your table online today.",
  openGraph: {
    title: "Little Lemon Restaurant",
    description:
      "Enjoy authentic Mediterranean cuisine in Chicago. Reserve your table at Little Lemon today.",
    //Replace it later with the real one
     url: "https://your-domain.com",
    siteName: "Little Lemon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Little Lemon Restaurant dishes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Lemon Restaurant",
    description:
      "Reserve your table at Little Lemon and enjoy Mediterranean cuisine in Chicago.",
    //Replace it later the image
      images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}