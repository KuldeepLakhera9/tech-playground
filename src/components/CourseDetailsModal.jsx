import { useEffect } from "react";
import { HiOutlineX, HiCheck } from "react-icons/hi";
import { categoryStyles, statusStyles } from "../data/courses";

export default function CourseDetailsModal({ course, isOpen, onClose }) {
  // Prevent scrolling on body when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const { title, description, category, image, progress, status, lessons = [] } = course;
  const catStyle = categoryStyles[category] || {
    bar: "bg-primary-500",
    chip: "bg-primary-100 text-primary-700 dark:bg-primary-500/10 dark:text-primary-400",
  };

  return (
    /* Full-screen fixed overlay with high z-index (z-50) */
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Container: Relative positioning, max height with internal scrolling */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg sm:max-w-xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-2xl overflow-hidden flex flex-col transform transition-all animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Category Accent Top Bar */}
        <div className={`h-2 ${catStyle.bar} w-full shrink-0`} />

        {/* Absolute Positioning Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-slate-950/40 text-white hover:bg-slate-950/70 active:scale-95 flex items-center justify-center backdrop-blur-sm transition-all border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 cursor-pointer"
        >
          <HiOutlineX className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Close course details</span>
        </button>

        {/* Course Banner Image Header */}
        <div className="relative h-48 sm:h-52 shrink-0 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          <div className="absolute bottom-4 left-5 right-5">
            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${catStyle.chip}`}>
              {category}
            </span>
            <h2
              id="modal-title"
              className="font-display font-bold text-white mt-2 text-xl sm:text-2xl leading-tight drop-shadow-sm"
            >
              {title}
            </h2>
          </div>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="p-6 overflow-y-auto overflow-x-hidden flex-1 space-y-6">
          {/* Status & Progress Info */}
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className={`px-2.5 py-1 rounded-full font-medium ${statusStyles[status] || ""}`}>
                {status}
              </span>
              <span className="text-ink dark:text-slate-200 font-mono text-sm">
                {progress}% Completed
              </span>
            </div>

            <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${catStyle.bar}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Description Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-soft dark:text-slate-400 mb-2">
              Course Description
            </h3>
            <p className="text-sm text-ink-soft dark:text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Syllabus / Lessons Preview */}
          {lessons.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-soft dark:text-slate-400 mb-3">
                Course Syllabus ({lessons.length} Lessons)
              </h3>
              <ul className="space-y-2">
                {lessons.map((lesson, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 text-sm text-ink dark:text-slate-200"
                  >
                    <div className={`h-5 w-5 rounded-md flex items-center justify-center text-white shrink-0 ${catStyle.bar}`}>
                      <HiCheck className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="font-medium">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/60">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 active:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-600 text-ink dark:text-slate-200 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
