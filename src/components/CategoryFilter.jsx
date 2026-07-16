import { categories, categoryStyles } from "../data/courses";

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-2.5">
      {categories.map((cat) => {
        const isActive = selected === cat;
        
        // Define active style classes
        const activeClasses = 
          cat === "All" 
            ? "bg-ink text-white dark:bg-white dark:text-slate-950" 
            : categoryStyles[cat]?.active || "bg-primary-500 text-white";

        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border cursor-pointer ${
              isActive
                ? `${activeClasses} border-transparent shadow-sm`
                : "bg-white text-ink-soft border-slate-200 hover:border-primary-300 hover:text-primary-600 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800/80 dark:hover:border-primary-500/50 dark:hover:text-primary-400"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
