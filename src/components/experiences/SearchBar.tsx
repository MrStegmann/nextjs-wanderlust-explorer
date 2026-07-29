"use client";

import React from "react";
import Input from "@/components/ui/Input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Search by experience title (regex supported)...",
}: SearchBarProps) {
  return (
    <Input
      label="Title Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onClear={onClear}
      placeholder={placeholder}
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
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      }
    />
  );
}
