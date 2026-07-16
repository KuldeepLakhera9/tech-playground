import { categories, categoryStyles } from "../data/courses";

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((cat) => {
        const isActive = selected === cat;
        // "All" gets the neutral ink treatment when active; other categories
        // use their own mapped color so the active state always matches the
        // color that category uses everywhere else (chips, card accents).
        const activeClasses = cat === "All" ? "bg-ink text-white" : categoryStyles[cat]?.active;

        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              isActive
                ? `${activeClasses} border-transparent`
                : "bg-white text-ink-soft border-slate-200 hover:border-primary-300 hover:text-primary-600"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
