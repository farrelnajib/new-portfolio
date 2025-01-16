import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React from "react";
import {GoogleTagManager} from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Farrel Najib Anshary - Software Engineer",
  description: "4+ years of experience as a Software Engineer, highly skilled in Golang and TypeScript. Gained my Bachelor of Comp. Science degree from Bina Nusantara University, and currently honing my skills at GovTech Procurement Indonesia.",
  keywords: ["fullstack", "software", "engineer", "go", "golang", "typescript", "laravel", "portfolio"],
  robots: "index, follow",
  authors: [{name: "Farrel Najib Anshary"}],
  openGraph: {
    title: "Farrel Najib Anshary - Software Engineer",
    description: "4+ years of experience as a Software Engineer, highly skilled in Golang and TypeScript. Gained my Bachelor of Comp. Science degree from Bina Nusantara University, and currently honing my skills at GovTech Procurement Indonesia.",
    url: "https://farrelanshary.com",
    images: [
      {
        url: "https://farrelanshary.com/img/profile.jpg",
        alt: "Farrel Najib Anshary - Software Engineer"
      }
    ]
  },
  icons:{
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.GTM_ID;

  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      { gtmId && <GoogleTagManager gtmId={gtmId} /> }
      <body
        className={`${inter.className} antialiased flex flex-col h-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
