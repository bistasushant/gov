import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import Contact from "@/components/ui/Contact";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nepal Engineering Council - NEC",
  description: "Nepal Engineering Council - Official Website",
  keywords: "engineering, nepal, council, registration, professional engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className={`${nunito.className} font-sans text-base text-black antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Contact />
        <BackToTop />
      </body>
    </html>
  );
}
