"use client";

import React from "react";
import { Experience } from "@/types/experience";
import ExperienceCard from "./ExperienceCard";

interface ExperienceGridProps {
  experiences: Experience[];
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  emptyTitle?: string;
  emptyDescription?: string;
  onResetFilters?: () => void;
}

export default function ExperienceGrid({
  experiences,
  favoriteIds,
  onToggleFavorite,
  emptyTitle = "No experiences found",
  emptyDescription = "Try adjusting your search keywords, category, or destination filters.",
  onResetFilters,
}: ExperienceGridProps) {
  if (experiences.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white rounded-3xl border border-[#e5e2e1] shadow-xs my-6">
        <div className="w-16 h-16 rounded-2xl bg-[#0071eb]/10 flex items-center justify-center text-[#0071eb] mb-4">
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
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1b1c1c] mb-2">{emptyTitle}</h3>
        <p className="text-sm text-[#414754] max-w-md mb-6">{emptyDescription}</p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="px-5 py-2.5 bg-[#0071eb] text-white font-bold text-sm rounded-xl hover:bg-[#0059bc] transition-colors shadow-sm"
          >
            Reset All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
          isFavorite={favoriteIds.includes(exp.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
