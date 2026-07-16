# LearnSphere — Responsive Learning Dashboard

A frontend-only Student Learning Dashboard built with **React + Vite + Tailwind CSS v4**.

## Setup

```bash
npm install
npm run dev       # starts dev server, usually http://localhost:5173
npm run build     # production build into /dist
npm run preview   # serve the production build locally
```

No `.env`, backend, or API keys are required — all data lives in `src/data/courses.js`.

## Tech stack

- React 19 + Vite (fast dev server, instant HMR)
- Tailwind CSS **v4** — note this project uses the newer CSS-first config:
  - `@tailwindcss/vite` plugin registered in `vite.config.js` (no `tailwind.config.js` needed)
  - Design tokens (colors, fonts) defined with `@theme { ... }` directly in `src/index.css`
  - This is "Tailwind configuration appropriate to the installed version" — v4 moved config out of JS and into CSS
- `react-icons` for the icon set

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx          - responsive nav + mobile menu
│   ├── HeroSection.jsx     - welcome banner, CTA
│   ├── StatsCard.jsx       - stat card + the 4-card stats section
│   ├── ContinueLearning.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── CourseCard.jsx      - single reusable course card
│   ├── CourseGrid.jsx      - grid + empty state
│   └── Footer.jsx
├── data/
│   └── courses.js          - course list + category/status color maps
├── App.jsx                 - page composition + search/filter state
├── main.jsx
└── index.css               - Tailwind import + @theme design tokens
```

## Design system

| Token | Value | Used for |
|---|---|---|
| primary | #4F46E5 indigo | Brand, Development category |
| violet | #7C3AED | Design category, avatar |
| sky | #0EA5E9 | Cloud category |
| amber | #F59E0B | DevOps category, "In Progress" status |
| emerald | #10B981 | "Completed" status |
| slate | #64748B | "Not Started" status |
| Display font | Space Grotesk | Headings |
| Body font | Inter | Body copy |

Every course category has one fixed color used consistently for its filter button, its chip on the card, and the card's top accent bar — defined once in `categoryStyles` (`src/data/courses.js`) so it's never redecided per-component.

## How key requirements were implemented (for the demo)

**Tailwind install & verification** — installed `tailwindcss` + `@tailwindcss/vite`, registered the plugin in `vite.config.js`, added `@import "tailwindcss";` to `index.css`. Verified by using utility classes (e.g. `bg-primary-500`) and seeing them apply.

**Mobile-first** — every component's base classes target mobile; `sm:`, `md:`, `lg:` prefixes progressively enhance the layout. Example: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` in `CourseGrid.jsx` — one column by default, two at 640px, three at 1024px.

**Flexbox vs Grid** — Flexbox is used where items are arranged in a single row/column that needs alignment (Navbar, Hero content vs image, category filter buttons, footer columns). Grid is used where items form a 2D repeating layout (stats cards, course cards) because Grid's `grid-cols-*` handles wrapping into rows automatically without manual `flex-wrap` math.

**Conditional classes** — `statusStyles` and `categoryStyles` objects map a string key to a complete, hardcoded class string (e.g. `Completed: "bg-emerald-100 text-emerald-600"`). This avoids unsafe dynamic class construction like `` `bg-${color}-500` ``, which Tailwind can't detect at build time since it scans for literal class names in source.

**Search** — controlled `<input>` in `SearchBar.jsx` lifts its value to `App.jsx` via `useState`; `filteredCourses` is derived with `.filter()` + `.toLowerCase()` for case-insensitive matching, memoized with `useMemo`.

**Category filter** — same state/filter mechanism; the active button's classes swap in based on comparing `selected === category`.

**Progress bar** — width is set via inline style (`style={{ width: \`${progress}%\` }}`), not a dynamic Tailwind class, since Tailwind needs literal, statically-analyzable class names — a percentage from data can't be one.

**Reusable components** — `CourseCard` and `CourseGrid` are used in both the "Continue Learning" section and the main "Explore Courses" grid, just with different filtered data passed in as props.

## Practice tasks likely to come up live

- 3 → 4 columns on large screens: in `CourseGrid.jsx` change `lg:grid-cols-3` → `lg:grid-cols-4`.
- Navbar mobile layout: edit the `md:hidden` panel in `Navbar.jsx`.
- Active filter style: edit `active` values inside `categoryStyles` in `src/data/courses.js`.
- New course status: add a new key to `statusStyles` in `courses.js`, then use that status string in a course object.
- Hero horizontal → vertical: in `HeroSection.jsx` change `flex-col md:flex-row` to just `flex-col`.

## Bonus ideas left as extensions

Dark mode, hamburger animation, sorting, favorites (localStorage), "Show more" pagination — the component boundaries here (CourseCard, CourseGrid, data/courses.js) are set up so any of these can be added without restructuring.
