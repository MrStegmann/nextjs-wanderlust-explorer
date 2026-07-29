"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/hooks/useFavorites";

export default function Navbar() {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Explorer", href: "/experiences" },
    {
      label: "Favorites",
      href: "/favorites",
      badge: favoriteIds.length > 0 ? favoriteIds.length : null,
    },
    { label: "Profile", href: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e2e1] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-[#0071eb] flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
            W
          </div>
          <span className="font-extrabold text-xl tracking-tight text-[#1b1c1c]">
            Wanderlust<span className="text-[#0071eb]">Labs</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#0071eb]/10 text-[#0071eb]"
                    : "text-[#414754] hover:text-[#1b1c1c] hover:bg-[#f6f3f2]"
                }`}
              >
                {item.label}
                {item.badge !== null && (
                  <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold text-white bg-[#ff5a5f] rounded-full min-w-[20px]">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
