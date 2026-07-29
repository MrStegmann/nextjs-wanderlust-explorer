import Link from "next/link";
import Image from "next/image";
import { experiences } from "@/data/experiences";

export default function HomePage() {
  const featured = experiences.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 py-6 sm:py-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0071eb] via-[#0059bc] to-[#001a41] text-white p-8 sm:p-14 lg:p-20 shadow-xl">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#ff5a5f]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-[#ebfafa] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#ff5a5f] animate-pulse" />
            Curated World Travel
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Unforgettable <span className="text-[#ff5a5f]">Journeys</span> Start Here
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal">
            Discover over 100 handpicked travel experiences across 50+ countries. From high-altitude mountain climbs to authentic culinary masterclasses.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/experiences"
              className="px-8 py-4 bg-[#ff5a5f] hover:bg-[#e0484d] text-white font-extrabold text-base rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              Explore Experiences
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <Link
              href="/favorites"
              className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-2xl border border-white/20 backdrop-blur-md transition-all duration-200"
            >
              View Saved Favorites
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#e5e2e1] shadow-airy flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#0071eb]/10 flex items-center justify-center text-[#0071eb]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#1b1c1c]">Instant Regex Search</h3>
          <p className="text-sm text-[#414754]">
            Find your dream trip in seconds with regex title search and real-time category filtering.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#e5e2e1] shadow-airy flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#ff5a5f]/10 flex items-center justify-center text-[#ff5a5f]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#1b1c1c]">Seamless Favorites</h3>
          <p className="text-sm text-[#414754]">
            Bookmark your bucket-list adventures across device sessions with zero extra sign-ins.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#e5e2e1] shadow-airy flex flex-col gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#008566]/10 flex items-center justify-center text-[#008566]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-[#1b1c1c]">Verified Quality</h3>
          <p className="text-sm text-[#414754]">
            All 100 experiences are vetted by local experts to ensure top ratings and safety standards.
          </p>
        </div>
      </section>

      {/* Featured Preview Section */}
      <section className="flex flex-col gap-8">
        <div className="flex items-end justify-between border-b border-[#e5e2e1] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0071eb]">Preview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b1c1c]">Featured Experiences</h2>
          </div>

          <Link
            href="/experiences"
            className="text-sm font-bold text-[#0071eb] hover:text-[#0059bc] flex items-center gap-1"
          >
            View All 100 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((exp) => (
            <div key={exp.id} className="bg-white rounded-2xl border border-[#e5e2e1] overflow-hidden shadow-airy">
              <div className="relative aspect-16/9 w-full">
                <Image src={exp.imageUrl} alt={exp.title} fill className="object-cover" />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <span className="text-xs font-bold text-[#0071eb] uppercase">{exp.category}</span>
                <h4 className="font-bold text-base text-[#1b1c1c]">{exp.title}</h4>
                <p className="text-xs text-[#727785]">{exp.destination}</p>
                <div className="mt-2 pt-2 border-t border-[#f0eded] flex items-center justify-between text-xs">
                  <span className="font-extrabold text-[#1b1c1c]">${exp.price} / person</span>
                  <Link href={`/experiences/${exp.id}`} className="font-bold text-[#0071eb]">
                    View →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
