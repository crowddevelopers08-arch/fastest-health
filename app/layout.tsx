import type { Metadata } from "next";
import { Geist,Outfit } from "next/font/google";
import "./globals.css";
import MobileActionBar from "@/component/mobilebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fastest Health Tech",
  description: "when good food makes you feel bad it's time to find out why",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${outfit.variable} antialiased`}
      >
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
