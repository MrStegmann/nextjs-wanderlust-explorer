"use client";

import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onClear?: () => void;
  icon?: React.ReactNode;
}

export default function Input({
  label,
  value,
  onClear,
  icon,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold uppercase tracking-wider text-[#414754]"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3.5 text-[#727785] pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          value={value}
          className={`w-full py-2.5 rounded-xl border border-[#e5e2e1] bg-white text-sm text-[#1b1c1c] placeholder:text-[#727785] focus:outline-hidden focus:border-[#0071eb] focus:ring-2 focus:ring-[#0071eb]/20 transition-all ${
            icon ? "pl-10" : "pl-3.5"
          } ${value && onClear ? "pr-10" : "pr-3.5"} ${className}`}
          {...props}
        />
        {value && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 p-1 text-[#727785] hover:text-[#1b1c1c] rounded-full hover:bg-[#f6f3f2] transition-colors"
            aria-label="Clear input"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
