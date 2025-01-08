import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Farrel Najib Anshary - Software Engineer",
  description: "4+ years of experience as a Software Engineer, highly skilled in Golang and TypeScript. Gained my Bachelor of Comp. Science degree from Bina Nusantara University, and currently honing my skills at GovTech Procurement Indonesia.",
  keywords: ["fullstack", "software", "engineer", "go", "golang", "typescript", "laravel", "portfolio"],
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
