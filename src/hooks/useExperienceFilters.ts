"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Experience } from "@/types/experience";

export interface FilterState {
  search: string;
  category: string;
  destination: string;
}

export function useExperienceFilters(experiences: Experience[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(() => searchParams.get("search") || "");
  const [category, setCategory] = useState(() => searchParams.get("category") || "");
  const [destination, setDestination] = useState(() => searchParams.get("destination") || "");

  // Sync state if URL query params change externally
  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    const urlCategory = searchParams.get("category") || "";
    const urlDestination = searchParams.get("destination") || "";

    setSearch((prev) => (prev !== urlSearch ? urlSearch : prev));
    setCategory((prev) => (prev !== urlCategory ? urlCategory : prev));
    setDestination((prev) => (prev !== urlDestination ? urlDestination : prev));
  }, [searchParams]);

  // Update URL search params when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (category) params.set("category", category);
    if (destination.trim()) params.set("destination", destination.trim());

    const queryString = params.toString();
    const currentQueryString = searchParams.toString();

    if (queryString !== currentQueryString) {
      const target = queryString ? `${pathname}?${queryString}` : pathname;
      router.replace(target, { scroll: false });
    }
  }, [search, category, destination, pathname, router, searchParams]);

  const filteredExperiences = useMemo(() => {
    return experiences.filter((exp) => {
      // Title Regex Search
      if (search.trim()) {
        try {
          const regex = new RegExp(search.trim(), "i");
          if (!regex.test(exp.title)) return false;
        } catch {
          // If invalid regex pattern, fallback to simple case-insensitive includes
          if (!exp.title.toLowerCase().includes(search.trim().toLowerCase())) {
            return false;
          }
        }
      }

      // Category Filter
      if (category && exp.category.toLowerCase() !== category.toLowerCase()) {
        return false;
      }

      // Destination Filter
      if (destination.trim()) {
        const destLower = destination.trim().toLowerCase();
        if (!exp.destination.toLowerCase().includes(destLower)) {
          return false;
        }
      }

      return true;
    });
  }, [experiences, search, category, destination]);

  const setFilter = useCallback((key: keyof FilterState, value: string) => {
    if (key === "search") setSearch(value);
    if (key === "category") setCategory(value);
    if (key === "destination") setDestination(value);
  }, []);

  const resetFilters = useCallback(() => {
    setSearch("");
    setCategory("");
    setDestination("");
  }, []);

  return {
    filteredExperiences,
    search,
    category,
    destination,
    setSearch,
    setCategory,
    setDestination,
    setFilter,
    resetFilters,
  };
}
