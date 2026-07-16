import { useEffect, useState } from "react";
import { HiOutlineX, HiCheck } from "react-icons/hi";
import { categoryStyles, statusStyles } from "../data/courses";

export default function CourseModal({ course, isOpen, onClose, onUpdateProgress }) {
  // Prevent scrolling on body when modal is open
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

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen || !course) return null;

  const { id, title, description, category, image, progress, status, lessons = [] } = course;
  const catStyle = categoryStyles[category] || { bar: "bg-primary-500", chip: "bg-primary-100 text-primary-700" };

  // Calculate checked state for each lesson based on progress
  // Since we have 5 lessons, each corresponds to 20% progress.
  const totalLessons = lessons.length || 5;
  const initialCheckedCount = Math.round((progress / 100) * totalLessons);
  
  // State for which lesson indices are checked
  const [checkedState, setCheckedState] = useState(
    Array.from({ length: totalLessons }, (_, i) => i < initialCheckedCount)
  );

  // Sync state if course progress updates externally
  useEffect(() => {
    const count = Math.round((progress / 100) * totalLessons);
    setCheckedState(Array.from({ length: totalLessons }, (_, i) => i < count));
  }, [progress, totalLessons]);

  const handleCheckboxChange = (index) => {
    const updatedChecked = checkedState.map((item, i) => (i === index ? !item : item));
    setCheckedState(updatedChecked);

    // Calculate new progress
    const checkedCount = updatedChecked.filter(Boolean).length;
    const newProgress = Math.round((checkedCount / totalLessons) * 100);
    
    onUpdateProgress(id, newProgress);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden transform transition-all flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Category Header Bar */}
        <div className={`h-2 ${catStyle.bar} w-full`} />

        {/* Header Image & Close */}
        <div className="relative h-44 shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-950/40 text-white hover:bg-slate-950/60 flex items-center justify-center backdrop-blur-sm transition-colors border border-white/10"
            aria-label="Close details"
          >
            <HiOutlineX className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${catStyle.chip}`}>
              {category}
            </span>
            <h3 className="font-display font-semibold text-white mt-2 text-lg sm:text-xl line-clamp-1">
              {title}
            </h3>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-soft mb-1.5">
              Course Description
            </h4>
            <p className="text-sm text-ink-soft leading-relaxed">{description}</p>
          </div>

          {/* Progress Tracker */}
          <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50 rounded-2xl p-4">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className={`px-2.5 py-1 rounded-full font-medium ${statusStyles[status]}`}>
                {status}
              </span>
              <span className="text-ink font-mono text-sm">{progress}% Complete</span>
            </div>
            
            <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${catStyle.bar}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Modules Checklist */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                Course Syllabus & Checklist
              </h4>
              <span className="text-xs text-ink-soft">
                {checkedState.filter(Boolean).length} of {totalLessons} completed
              </span>
            </div>

            <div className="space-y-2">
              {lessons.map((lesson, idx) => {
                const isChecked = checkedState[idx];
                return (
                  <label
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? "bg-primary-500/5 border-primary-500/20 dark:bg-primary-500/10 dark:border-primary-500/30"
                        : "bg-white border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(idx)}
                        className="sr-only"
                      />
                      <div
                        className={`h-5 w-5 rounded-md border flex items-center justify-center transition-all ${
                          isChecked
                            ? `${catStyle.bar} border-transparent text-white`
                            : "border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900"
                        }`}
                      >
                        {isChecked && <HiCheck className="h-3.5 w-3.5 stroke-[3]" />}
                      </div>
                    </div>
                    <span className={`text-sm leading-tight transition-colors ${
                      isChecked ? "text-ink font-medium" : "text-ink-soft"
                    }`}>
                      {lesson}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-800 flex justify-end shrink-0 bg-slate-50 dark:bg-slate-900/40">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-ink text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
