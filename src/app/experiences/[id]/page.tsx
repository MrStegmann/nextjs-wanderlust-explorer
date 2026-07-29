"use client";

import React, { useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";
import HeartToggle from "@/components/ui/HeartToggle";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ExperienceDetailPage({ params }: DetailPageProps) {
  const { id } = use(params);
  const { isFavorite, toggleFavorite } = useFavorites();

  const experience = experiences.find((exp) => exp.id === id);

  // Sync document.title dynamically when experience is loaded
  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} — Wanderlust Labs`;
    }
  }, [experience]);

  if (!experience) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-[#1b1c1c] mb-2">Experience Not Found</h2>
        <p className="text-sm text-[#414754] mb-6">
          The requested experience ID does not exist in our catalog.
        </p>
        <Link
          href="/experiences"
          className="px-6 py-2.5 bg-[#0071eb] text-white font-bold text-sm rounded-xl hover:bg-[#0059bc] transition-colors"
        >
          Back to Explorer
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(experience.id);

  return (
    <div className="flex flex-col gap-8 py-4 max-w-4xl mx-auto">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/experiences"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#0071eb] hover:text-[#0059bc] transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Explorer
        </Link>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#727785]">
          <span>ID: {experience.id}</span>
        </div>
      </div>

      {/* Main Image Header with Overlay */}
      <div className="relative aspect-16/9 w-full rounded-3xl overflow-hidden shadow-airy bg-[#f0eded]">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1b1c1c] uppercase tracking-wider shadow-sm">
          {experience.category}
        </div>

        <div className="absolute top-4 right-4 z-10">
          <HeartToggle
            isFavorite={favorited}
            onToggle={() => toggleFavorite(experience.id)}
            size={22}
            ariaLabel={`Save ${experience.title} to favorites`}
          />
        </div>

        <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#ebfafa] mb-1">
            <svg
              width="14"
              height="14"
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
            {experience.destination}
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            {experience.title}
          </h1>
        </div>
      </div>

      {/* Overview & Booking Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left 2 Cols: Details & Overview */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#e5e2e1] shadow-airy flex flex-col gap-4">
            <h2 className="text-xl font-bold text-[#1b1c1c]">Experience Description</h2>
            <p className="text-base text-[#414754] leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Highlights / Badges */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#e5e2e1] flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#ebfafa] text-[#008566] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#727785]">Free Cancellation</p>
                <p className="text-sm font-bold text-[#1b1c1c]">Up to 24h before</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#e5e2e1] flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0071eb]/10 text-[#0071eb] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#727785]">Duration</p>
                <p className="text-sm font-bold text-[#1b1c1c]">Full Day Tour</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Price & Action Box */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-white p-6 rounded-2xl border border-[#e5e2e1] shadow-airy flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-[#f0eded] pb-4">
              <div>
                <span className="text-xs text-[#727785]">Price per adult</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#1b1c1c]">${experience.price}</span>
                  <span className="text-xs text-[#727785]">USD</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-[#ebfafa] px-3 py-1.5 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#FFB400"
                  stroke="#FFB400"
                  strokeWidth="1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-sm font-bold text-[#1b1c1c]">{experience.rating.toFixed(1)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => toggleFavorite(experience.id)}
              className={`w-full py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm ${
                favorited
                  ? "bg-[#ff5a5f]/10 text-[#ff5a5f] border border-[#ff5a5f]/20"
                  : "bg-[#ff5a5f] hover:bg-[#e0484d] text-white"
              }`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={favorited ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              {favorited ? "Saved in Favorites" : "Add to Favorites"}
            </button>

            <p className="text-center text-xs text-[#727785]">
              Instant confirmation • Best Price Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
