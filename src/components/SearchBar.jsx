import { HiOutlineSearch, HiOutlineHeart, HiHeart, HiOutlineX } from "react-icons/hi";

export default function SearchBar({ 
  value, 
  onChange, 
  sortBy, 
  onSortChange, 
  favoritesOnly, 
  onToggleFavorites 
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:max-w-2xl">
      {/* Search Input Box */}
      <div className="relative flex-1">
        <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-soft dark:text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for courses..."
          className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-ink placeholder:text-ink-soft/70 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-950 outline-none transition-all shadow-sm"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft dark:text-slate-400 hover:text-ink dark:hover:text-white"
            aria-label="Clear search"
          >
            <HiOutlineX className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Toggle Favorites Only */}
        <button
          onClick={onToggleFavorites}
          title={favoritesOnly ? "Show All Courses" : "Show Favorites Only"}
          className={`h-10 px-4 rounded-xl border flex items-center justify-center gap-2 text-sm font-medium transition-all cursor-pointer ${
            favoritesOnly
              ? "bg-rose-500 border-transparent text-white shadow-md shadow-rose-500/20"
              : "bg-white border-slate-200 text-ink-soft hover:text-rose-500 hover:border-rose-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-rose-400"
          }`}
        >
          {favoritesOnly ? <HiHeart className="h-5 w-5" /> : <HiOutlineHeart className="h-5 w-5" />}
          <span className="hidden xs:inline">Favorites</span>
        </button>

        {/* Sort Select Dropdown */}
        <div className="relative flex-1 sm:flex-initial">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full h-10 pl-3 pr-8 rounded-xl border border-slate-200 bg-white text-sm text-ink-soft dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 focus:border-primary-500 focus:outline-none transition-all cursor-pointer appearance-none shadow-sm min-w-[145px]"
          >
            <option value="default">Sort: Default</option>
            <option value="title-asc">Title: A-Z</option>
            <option value="progress-desc">Progress: High → Low</option>
            <option value="progress-asc">Progress: Low → High</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink-soft dark:text-slate-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
