import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/main.style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AT Digital",
  description: "We are a digital agency that helps businesses grow online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
