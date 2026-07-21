import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { categoryStyles, statusStyles } from "../data/courses";

export default function CourseCard({ course, onToggleFavorite, onSelectCourse }) {
  const { id, title, description, category, image, progress, status, isFavorite } = course;
  const catStyle = categoryStyles[category] || { bar: "bg-primary-500", chip: "bg-primary-100 text-primary-700" };

  return (
    <div 
      onClick={() => onSelectCourse(course)}
      className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-slate-200 dark:hover:border-slate-700/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer relative"
    >
      {/* Category-colored top accent bar */}
      <div className={`h-1.5 ${catStyle.bar} w-full`} />

      {/* Course Image & Favorite button */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/10" />

        {/* Favorite Icon Toggle */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // prevent opening the modal
            onToggleFavorite(id);
          }}
          className="absolute top-3 right-3 h-8 w-8 rounded-lg bg-white/95 dark:bg-slate-900/90 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 active:scale-95 flex items-center justify-center shadow-sm border border-slate-100/50 dark:border-slate-800 transition-all z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <HiHeart className="h-5 w-5 text-rose-500 dark:text-rose-400" />
          ) : (
            <HiOutlineHeart className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className={`self-start text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full ${catStyle.chip}`}>
          {category}
        </span>

        <h3 className="font-display font-semibold text-ink dark:text-white mt-3 text-base group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-250">
          {title}
        </h3>
        <p className="text-sm text-ink-soft dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Status and percentage */}
        <div className="mt-5 flex items-center justify-between text-xs font-semibold">
          <span className={`px-2.5 py-1 rounded-full font-medium ${statusStyles[status] || ""}`}>
            {status}
          </span>
          <span className="text-ink dark:text-slate-300 font-mono text-sm">{progress}%</span>
        </div>

        {/* Visual Progress Bar */}
        <div className="mt-2.5 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${catStyle.bar}`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* View Details Button */}
        <button 
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // prevent modal opening twice
            onSelectCourse(course);
          }}
          className="mt-4 w-full py-2.5 rounded-xl bg-slate-50 hover:bg-primary-500 dark:bg-slate-800/80 dark:hover:bg-primary-500 text-ink dark:text-slate-200 dark:hover:text-white font-semibold text-sm hover:shadow-sm active:scale-[0.99] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
