"use client";

import React from "react";

interface HeartToggleProps {
  isFavorite: boolean;
  onToggle: (e: React.MouseEvent) => void;
  size?: number;
  className?: string;
  ariaLabel?: string;
}

export default function HeartToggle({
  isFavorite,
  onToggle,
  size = 20,
  className = "",
  ariaLabel = "Toggle favorite",
}: HeartToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={ariaLabel}
      className={`p-2.5 rounded-full backdrop-blur-md transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#0071eb] ${
        isFavorite
          ? "bg-white/90 text-[#ff5a5f] shadow-md scale-105"
          : "bg-white/70 text-[#727785] hover:text-[#ff5a5f] hover:bg-white hover:scale-105 shadow-xs"
      } ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={isFavorite ? "0" : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200 active:scale-90"
      >
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    </button>
  );
}
