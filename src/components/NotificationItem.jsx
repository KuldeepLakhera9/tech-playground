import { HiCheck } from "react-icons/hi";

export default function NotificationItem({ notification, onMarkAsRead }) {
  const { id, title, message, time, read } = notification;

  // Static conditional class strings to comply with Tailwind optimization
  const containerClasses = read
    ? "bg-white dark:bg-slate-900 border-l-4 border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/40 opacity-75 hover:opacity-100"
    : "bg-primary-50/60 dark:bg-slate-800/70 border-l-4 border-primary-500 hover:bg-primary-50/90 dark:hover:bg-slate-800";

  return (
    <div
      onClick={() => !read && onMarkAsRead(id)}
      className={`p-4 transition-all duration-200 flex items-start justify-between gap-3 ${containerClasses} ${
        !read ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className={`text-sm font-semibold leading-snug ${read ? "text-ink-soft dark:text-slate-300" : "text-ink dark:text-white"}`}>
            {title}
          </h4>
          <span className="text-[11px] font-medium text-slate-400 shrink-0">
            {time}
          </span>
        </div>
        <p className="text-xs text-ink-soft dark:text-slate-400 leading-relaxed">
          {message}
        </p>
      </div>

      {!read && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onMarkAsRead(id);
          }}
          title="Mark as read"
          className="h-7 w-7 rounded-lg bg-white dark:bg-slate-700/60 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-slate-700 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 cursor-pointer"
        >
          <HiCheck className="h-4 w-4" />
          <span className="sr-only">Mark notification as read</span>
        </button>
      )}
    </div>
  );
}
