# AGENTS.md — Developer & AI Agent Guidelines

## System Instructions
You are an expert React/TypeScript software engineer building the Wanderlust Labs platform. Your task is to implement features, components, and pages according to the specifications and quality criteria outlined below. 

Follow all code conventions, file structures, and strict acceptance criteria. Do not modify global state patterns or add unrequested external dependencies without permission.

---

## Technical Stack & Constraints
- **Framework**: React / Next.js (TypeScript)
- **State**: Standard React hooks (`useState`, `useEffect`, custom hooks). *Do not use external state managers like Redux or Zustand.*
- **Navigation**: Client-side router (`next/navigation` or `next/router`). *No full-page reloads (`<a href="...">` is forbidden; use `<Link>` instead).*
- **Data Source**: Static dataset located at `src/data/experiences.ts`.

## Design References
Use [DESIGN.md](./DESIGN.md) to understand the design guidelines.

---

## Acceptance Criteria & Requirements Checklist

### 1. Routing & Architecture
- [ ] Maintain 5 distinct routes: `/`, `/experiences`, `/experiences/[id]`, `/favorites`, and `/profile`.
- [ ] Use client-side navigation exclusively for zero full-page reloads.
- [ ] Break down the UI into clean, single-responsibility components—**never bundle the whole app or an entire page into one monolithic file.**

### 2. Search & Filtering Mechanics (`/experiences`)
- [ ] **Title Search**: Implement case-insensitive regex matching (e.g., `new RegExp(searchTerm, 'i')`).
- [ ] **Filter Stacking**: `category` and `destination` filters must work independently and combine seamlessly with the regex title search.
- [ ] **URL Query Sync**: 
  - Update URL query params (`?search=...&category=...&destination=...`) whenever filters change.
  - On initial page load, parse active query params, pre-fill form inputs, and immediately display filtered results.

### 3. State Management & Hooks
- [ ] **Favorites**: Top-level `useState<string[]>` containing experience IDs, passed down cleanly as props to components and cards.
- [ ] **Custom Hook Requirement**: Implement at least one custom hook (e.g., `useExperienceFilters` for URL/filter logic or `useFavorites` for favorite toggling) to encapsulate reusable business logic.
- [ ] **Hook Safety**: All `useEffect` hooks must include correct, explicit dependency arrays. *Zero infinite loops, zero missing dependencies, zero unnecessary re-renders.*

### 4. Data Modeling & TypeScript
- [ ] Define and export strict TypeScript interfaces in `src/types/experience.ts`.
- [ ] Ensure full type safety across all components, props, custom hooks, and mock dataset arrays.


### 5. UI, Responsiveness & UX

* [ ] Include a favorite (heart icon) button on all experience cards to toggle favorite status in real time.
* [ ] The app must be visually coherent, modern, and fully responsive across mobile, tablet, and desktop breakpoints.

---

## Agent Code Style & Behavioral Rules

1. **Types First**: Always import and apply strict TypeScript interfaces for component props and functions.
2. **Defensive Hook Dependency Management**: When creating custom hooks or side effects, double-check that dependency arrays are complete and reactive values don't produce infinite fetch/render loops.
3. **Clean Component Breakdown**:
* `components/ui/`: Atomic elements (Buttons, Inputs, HeartToggle, Badges).
* `components/experiences/`: Domain components (ExperienceCard, ExperienceGrid, FilterBar).
* `hooks/`: Custom business logic hooks (`useExperienceFilters.ts`).
* `app/` or `pages/`: Page containers handling routing and layout glue.


---

## Instructions for AI Prompts

When executed by an AI agent, prioritize tasks in this order:

1. Verify types in `src/types/` and mock dataset in `src/data/experiences.ts`.
2. Construct reusable UI components and custom hooks.
3. Implement routes and wire up state passing / query param synchronization.
4. Test against all acceptance criteria before completion.

