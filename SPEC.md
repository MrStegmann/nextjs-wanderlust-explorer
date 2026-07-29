# SPEC.md: Wanderlust Labs Platform

## 1. Project Overview & Tech Stack

* **Framework**: Next.js (App Router, TypeScript)
* **State Management**: React `useState`, `useEffect`, custom React hooks (No Redux/Zustand)
* **Navigation**: `next/navigation` (`useRouter`, `useSearchParams`, `usePathname`, `<Link>`)
* **Data Layer**: Static JSON / TS array at `src/data/experiences.ts`
* **Icons**: Standard SVG icons (heart, search, clear) with zero emoji usage

---

## 2. Architecture & File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  # Home (/)
│   ├── experiences/
│   │   ├── page.tsx              # Explorer (/experiences)
│   │   └── [id]/
│   │       └── page.tsx          # Detail (/experiences/[id])
│   ├── favorites/
│   │   └── page.tsx              # Favorites (/favorites)
│   └── profile/
│       └── page.tsx              # Profile (/profile)
├── components/
│   ├── ui/
│   │   ├── HeartToggle.tsx
│   │   ├── Input.tsx
│   │   └── Select.tsx
│   ├── layout/
│   │   └── Navbar.tsx
│   └── experiences/
│       ├── ExperienceCard.tsx
│       ├── ExperienceGrid.tsx
│       ├── SearchBar.tsx
│       └── FilterBar.tsx
├── hooks/
│   ├── useExperiences.ts
│   └── useExperienceFilters.ts
├── types/
│   └── experience.ts
└── data/
    └── experiences.ts

```

---

## 3. Data Models (`src/types/experience.ts`)

```typescript
export type Category = 'Adventure' | 'Cultural' | 'Food & Drink' | 'Nature' | 'Urban';

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: Category;
  destinationCity: string;
  destinationCountry: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export interface ExperienceFilters {
  search: string;
  category: string;
  destination: string;
}

```

---

## 4. Routing & Page Specifications

### `app/layout.tsx`

* Renders `Navbar` persistently across all routes.
* Root state for favorites managed at appropriate client context/layout level if needed, or initialized in root wrapper.

### `app/page.tsx` (Home)

* **Hero Section**: Title, subtitle, and primary CTA button navigating via Next.js `<Link>` to `/experiences`.

### `app/experiences/page.tsx` (Explorer)

* Displays total 100 experience cards in a responsive grid.
* Integrates `SearchBar` and `FilterBar`.
* Displays "No results found" message when current filter combination yields 0 matches.

### `app/experiences/[id]/page.tsx` (Detail)

* Reads `id` parameter from URL route params.
* Fetches single matching experience from `src/data/experiences.ts`.
* Uses `useEffect` to sync document title (e.g., `document.title = experience.title`).
* Renders full experience details, pricing, location, and `HeartToggle`.

### `app/favorites/page.tsx` (Favorites)

* Filters global experience dataset against `favorites` ID array (`favoriteIds.includes(exp.id)`).
* Renders matching experiences in a grid layout.
* Displays empty state text if no favorites are saved.

### `app/profile/page.tsx` (Profile)

* Mock user information (Name, Email, Joined Date).
* Dynamic count metric showing total saved favorite experiences (`favoriteIds.length`).

---

## 5. Search & Filter Requirements

### Business Logic

* **Title Search**: Match title using `new RegExp(term, 'i').test(experience.title)`.
* **Category Filter**: Match exact selected category string across 5 defined categories.
* **Destination Filter**: Match term against `destinationCity` or `destinationCountry` (case-insensitive).
* **Filter Stacking**: Logical AND condition applied across Search, Category, and Destination.

### URL State Synchronization (`useExperienceFilters`)

* **Write**: Modifying search, category, or destination updates URL query parameters via `usePathname` and `useRouter.push` (`?search=...&category=...&destination=...`).
* **Read**: On initial page load, extract URL query parameters using `useSearchParams` to populate initial filter state and pre-fill form controls.

---

## 6. Components & Custom Hooks

### Custom Hook: `useExperienceFilters.ts`

Encapsulates search/filter logic and URL query parameter sync.

```typescript
// Interface contract
export function useExperienceFilters(experiences: Experience[]) {
  // Parses URL params on load
  // Exposes filteredExperiences, search, category, destination, setFilter, resetFilters
}

```

### Navbar Component (`components/layout/Navbar.tsx`)

* Active link state highlighted by matching `usePathname()` against target route.
* Links: Home (`/`), Explorer (`/experiences`), Favorites (`/favorites`), Profile (`/profile`).

### ExperienceCard Component (`components/experiences/ExperienceCard.tsx`)

* Props: `experience: Experience`, `isFavorite: boolean`, `onToggleFavorite: (id: string) => void`.
* Renders image, category badge, title, destination, price, rating, and SVG `HeartToggle`.

---

## 7. Implementation Rules & Quality Assurance

1. **Strict Client Navigation**: Use `<Link href="...">` or `useRouter()`. Native HTML `<a>` tags are prohibited.
2. **Hook Dependencies**: All `useEffect` hooks must explicitly declare all dependencies. No missing variables or infinite re-render loops.
3. **No External State Libraries**: Rely strictly on standard React hooks (`useState`, `useEffect`, `useMemo`).
4. **Types Safety**: Zero use of `any`. All props, functions, and datasets must strictly adhere to TypeScript definitions.
5. **Responsiveness**: Grid components must implement mobile-first breakpoints (1 column on mobile, 2 on tablet, 3-4 on desktop).