"use client";

import React from "react";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";
import ExperienceGrid from "@/components/experiences/ExperienceGrid";

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite } = useFavorites();

  const favoriteExperiences = experiences.filter((exp) =>
    favoriteIds.includes(exp.id)
  );

  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Page Header */}
      <div className="flex items-center justify-between border-b border-[#e5e2e1] pb-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1c] tracking-tight">
            Saved Favorites
          </h1>
          <p className="text-sm text-[#414754] mt-1">
            Your personalized collection of saved travel experiences.
          </p>
        </div>

        <div className="bg-[#ff5a5f]/10 px-4 py-2 rounded-2xl text-sm font-extrabold text-[#ff5a5f] border border-[#ff5a5f]/20">
          {favoriteIds.length} Saved
        </div>
      </div>

      {/* Favorites Grid / Empty State */}
      {favoriteExperiences.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-3xl border border-[#e5e2e1] shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-[#ff5a5f]/10 text-[#ff5a5f] flex items-center justify-center mb-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#1b1c1c] mb-2">No Favorites Saved Yet</h3>
          <p className="text-sm text-[#414754] max-w-md mb-6">
            Click the heart icon on any experience card in the catalog to save your favorite adventures here.
          </p>
          <Link
            href="/experiences"
            className="px-6 py-3 bg-[#0071eb] text-white font-bold text-sm rounded-xl hover:bg-[#0059bc] transition-colors shadow-sm"
          >
            Browse Experiences Catalog
          </Link>
        </div>
      ) : (
        <ExperienceGrid
          experiences={favoriteExperiences}
          favoriteIds={favoriteIds}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
