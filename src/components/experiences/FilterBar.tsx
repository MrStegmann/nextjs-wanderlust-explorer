"use client";

import React from "react";
import SearchBar from "./SearchBar";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

interface FilterBarProps {
  search: string;
  category: string;
  destination: string;
  onSearchChange: (val: string) => void;
  onCategoryChange: (val: string) => void;
  onDestinationChange: (val: string) => void;
  onResetFilters: () => void;
  totalResults: number;
}

const CATEGORY_OPTIONS = [
  { value: "", label: "All Categories" },
  { value: "Adventure", label: "Adventure" },
  { value: "Culture", label: "Culture" },
  { value: "Food", label: "Food & Drink" },
  { value: "Wellness", label: "Wellness" },
  { value: "Nature", label: "Nature" },
];

export default function FilterBar({
  search,
  category,
  destination,
  onSearchChange,
  onCategoryChange,
  onDestinationChange,
  onResetFilters,
  totalResults,
}: FilterBarProps) {
  const isFiltered = Boolean(search || category || destination);

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#e5e2e1] shadow-airy mb-8 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        {/* Search Input */}
        <div className="md:col-span-1">
          <SearchBar
            value={search}
            onChange={onSearchChange}
            onClear={() => onSearchChange("")}
          />
        </div>

        {/* Category Select */}
        <div className="md:col-span-1">
          <Select
            label="Category"
            options={CATEGORY_OPTIONS}
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          />
        </div>

        {/* Destination Input */}
        <div className="md:col-span-1">
          <Input
            label="Destination"
            value={destination}
            onChange={(e) => onDestinationChange(e.target.value)}
            onClear={() => onDestinationChange("")}
            placeholder="e.g. Kyoto, Japan..."
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Filter Status & Reset */}
      <div className="flex flex-wrap items-center justify-between pt-3 border-t border-[#f0eded] text-sm text-[#414754]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#1b1c1c]">{totalResults}</span>
          <span>{totalResults === 1 ? "experience" : "experiences"} available</span>
          {isFiltered && (
            <span className="inline-flex items-center gap-1 bg-[#0071eb]/10 text-[#0071eb] text-xs font-semibold px-2.5 py-0.5 rounded-full ml-2">
              Filtered
            </span>
          )}
        </div>

        {isFiltered && (
          <button
            type="button"
            onClick={onResetFilters}
            className="text-xs font-bold text-[#ff5a5f] hover:text-[#e0484d] transition-colors flex items-center gap-1 py-1"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
}
