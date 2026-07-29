# Product Context

## Overview
Wanderlust Labs is a travel-tech startup building a platform where users can discover and save curated experiences around the world — from street-food tours in Bangkok to sailing trips in the Adriatic.

## Tech Stack & Assumptions
- **Framework**: React / Next.js (App Router or Pages Router)
- **Language**: TypeScript
- **State Management**: Local React state (`useState`) passed down via props
- **Data Source**: Static JSON / TS array file in `/data/experiences.ts`

---

## Routing & Pages Architecture
1. `/` (Home)
   - Hero section with a CTA button navigating to `/experiences`.
2. `/experiences` (Explorer)
   - Search bar: Case-insensitive regex filtering on `title` (`/term/i`).
   - Filters: `category` and `destination` inputs. Filters work independently and stack with search.
   - URL Sync: Query parameters (e.g., `?search=sky&category=Adventure&destination=Tokyo`) must reflect state and pre-fill inputs on page load.
3. `/experiences/[id]` (Detail)
   - Single experience details fetched from local dataset by `id`.
4. `/favorites` (Favorites)
   - Renders saved favorite experiences.
5. `/profile` (Profile)
   - Static mock user profile displaying a summary count of saved favorites.

---

## Global & Component Rules

* **Favorites State**: Top-level `useState<string[]>` array of experience IDs passed via props (no persistent storage/localStorage required yet).
* **Cards UI**: Include a heart icon button to toggle `in/out` of favorites.
