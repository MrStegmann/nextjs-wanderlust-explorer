"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Experience } from "@/types/experience";
import HeartToggle from "@/components/ui/HeartToggle";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  const [imgSrc, setImgSrc] = useState(experience.imageUrl);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(experience.id);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-[#e5e2e1] shadow-airy shadow-airy-hover overflow-hidden transition-all duration-300">
      {/* Top Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#f0eded]">
        <Image
          src={imgSrc}
          alt={experience.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => {
            // Fallback image if unsplash link fails
            setImgSrc("https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80");
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Pill Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#1b1c1c] uppercase tracking-wider shadow-xs">
          {experience.category}
        </div>

        {/* Heart Toggle Button */}
        <div className="absolute top-3 right-3 z-10">
          <HeartToggle
            isFavorite={isFavorite}
            onToggle={handleHeartClick}
            size={18}
            ariaLabel={`Favorite ${experience.title}`}
          />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Rating and Location */}
        <div className="flex items-center justify-between text-xs text-[#414754]">
          <div className="flex items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#FFB400"
              stroke="#FFB400"
              strokeWidth="1"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="font-bold text-[#1b1c1c]">{experience.rating.toFixed(1)}</span>
          </div>

          <div className="flex items-center gap-1 font-medium truncate max-w-[160px]">
            <svg
              width="12"
              height="12"
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
            <span className="truncate">{experience.destination}</span>
          </div>
        </div>

        {/* Title */}
        <Link
          href={`/experiences/${experience.id}`}
          className="font-bold text-lg text-[#1b1c1c] hover:text-[#0071eb] transition-colors line-clamp-2 leading-snug"
        >
          {experience.title}
        </Link>

        {/* Description Snippet */}
        <p className="text-xs text-[#414754] line-clamp-2 leading-relaxed">
          {experience.description}
        </p>

        {/* Footer: Price & Details Button */}
        <div className="mt-auto pt-3 border-t border-[#f0eded] flex items-baseline justify-between">
          <div>
            <span className="text-xs text-[#727785]">from </span>
            <span className="text-xl font-extrabold text-[#1b1c1c]">${experience.price}</span>
            <span className="text-xs text-[#727785]"> / person</span>
          </div>

          <Link
            href={`/experiences/${experience.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0071eb] group-hover:translate-x-1 transition-transform"
          >
            Details
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
