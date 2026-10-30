import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Joseph Budu Larbi | Portfolio",
  description: "Welcome to my portfolio website! Explore my projects, skills, and experience in web development. Discover how I can bring your ideas to life with innovative solutions and creative designs.",
};

export default function RootLayout({
  children,}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
