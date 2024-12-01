import type { Metadata } from "next";
import localFont from "next/font/local";
import {Baloo_Bhai_2} from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";

const yeonSung = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeon-sung",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${yeonSung.className} bg-cyan-100`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
