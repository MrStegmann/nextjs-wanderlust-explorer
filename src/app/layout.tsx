import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import { FavoritesProvider } from "@/hooks/useFavorites";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wanderlust Labs — Discover Curated Experiences",
  description:
    "Explore and save world-class experiences, tours, and activities across top destinations worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fcf9f8] text-[#1b1c1c]">
        <FavoritesProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>
          <footer className="border-t border-[#e5e2e1] bg-white py-8 mt-12 text-center text-sm text-[#727785]">
            <div className="max-w-7xl mx-auto px-4">
              <p>© {new Date().getFullYear()} Wanderlust Labs. All rights reserved.</p>
            </div>
          </footer>
        </FavoritesProvider>
      </body>
    </html>
  );
}
