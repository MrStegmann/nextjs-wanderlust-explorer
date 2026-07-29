"use client";

import React, { Suspense } from "react";
import { experiences } from "@/data/experiences";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";
import { useFavorites } from "@/hooks/useFavorites";
import FilterBar from "@/components/experiences/FilterBar";
import ExperienceGrid from "@/components/experiences/ExperienceGrid";

function ExplorerContent() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const {
    filteredExperiences,
    search,
    category,
    destination,
    setSearch,
    setCategory,
    setDestination,
    resetFilters,
  } = useExperienceFilters(experiences);

  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b1c1c] tracking-tight">
          Explore All Experiences
        </h1>
        <p className="text-sm sm:text-base text-[#414754]">
          Search 100 curated activities, filter by category or destination, and save your favorites.
        </p>
      </div>

      {/* Filter Bar */}
      <FilterBar
        search={search}
        category={category}
        destination={destination}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onDestinationChange={setDestination}
        onResetFilters={resetFilters}
        totalResults={filteredExperiences.length}
      />

      {/* Grid Display */}
      <ExperienceGrid
        experiences={filteredExperiences}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
        onResetFilters={resetFilters}
      />
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-20 text-[#727785]">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#0071eb] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-medium">Loading experiences...</p>
          </div>
        </div>
      }
    >
      <ExplorerContent />
    </Suspense>
  );
}
