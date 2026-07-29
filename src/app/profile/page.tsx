"use client";

import React from "react";
import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  const user = {
    name: "Alex Morgan",
    email: "alex.morgan@wanderlustlabs.io",
    memberSince: "March 2024",
    role: "Adventurer",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  };

  return (
    <div className="flex flex-col gap-8 py-4 max-w-4xl mx-auto">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1c] tracking-tight">
          User Profile
        </h1>
        <p className="text-sm text-[#414754] mt-1">
          Manage your account overview and view your activity metrics.
        </p>
      </div>

      {/* User Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e2e1] shadow-airy flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Avatar */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#0071eb]/20 shadow-md shrink-0">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col gap-2 text-center sm:text-left flex-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h2 className="text-2xl font-extrabold text-[#1b1c1c]">{user.name}</h2>
            <span className="px-3 py-0.5 rounded-full bg-[#0071eb]/10 text-[#0071eb] text-xs font-extrabold uppercase">
              {user.role}
            </span>
          </div>

          <p className="text-sm text-[#727785]">{user.email}</p>
          <p className="text-xs text-[#727785] mt-1">Member since {user.memberSince}</p>
        </div>
      </div>

      {/* Profile Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Favorite Metric Box */}
        <div className="bg-white p-6 rounded-2xl border border-[#e5e2e1] shadow-airy flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#727785]">
              Saved Favorites
            </span>
            <div className="w-8 h-8 rounded-full bg-[#ff5a5f]/10 text-[#ff5a5f] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </div>
          </div>
          <span className="text-4xl font-extrabold text-[#1b1c1c]">{favoriteIds.length}</span>
          <p className="text-xs text-[#414754] mt-1">Total items in your bucket list</p>

          <Link
            href="/favorites"
            className="mt-3 text-xs font-bold text-[#0071eb] hover:text-[#0059bc] flex items-center gap-1"
          >
            View Saved List →
          </Link>
        </div>

        {/* Total Catalog metric */}
        <div className="bg-white p-6 rounded-2xl border border-[#e5e2e1] shadow-airy flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#727785]">
              Total Available
            </span>
            <div className="w-8 h-8 rounded-full bg-[#0071eb]/10 text-[#0071eb] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
          <span className="text-4xl font-extrabold text-[#1b1c1c]">100</span>
          <p className="text-xs text-[#414754] mt-1">Global experiences catalog</p>

          <Link
            href="/experiences"
            className="mt-3 text-xs font-bold text-[#0071eb] hover:text-[#0059bc] flex items-center gap-1"
          >
            Explore Catalog →
          </Link>
        </div>

        {/* Account Status */}
        <div className="bg-white p-6 rounded-2xl border border-[#e5e2e1] shadow-airy flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#727785]">
              Membership Status
            </span>
            <div className="w-8 h-8 rounded-full bg-[#ebfafa] text-[#008566] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          </div>
          <span className="text-2xl font-extrabold text-[#008566]">Explorer Pro</span>
          <p className="text-xs text-[#414754] mt-1">Unlimited bucket list access</p>
        </div>
      </div>
    </div>
  );
}
