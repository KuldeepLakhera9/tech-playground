import { HiOutlineBell } from "react-icons/hi";

export default function NotificationButton({ unreadCount, isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-haspopup="true"
      className="relative h-10 w-10 rounded-xl flex items-center justify-center text-ink-soft dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 border border-slate-100 dark:border-slate-800 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
    >
      <HiOutlineBell className="h-5 w-5" aria-hidden="true" />
      
      {/* Absolutely positioned unread badge using standard scale */}
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm border-2 border-white dark:border-slate-900 animate-in zoom-in duration-200">
          {unreadCount > 9 ? "9+" : unreadCount}
        </span>
      )}

      {/* Accessible sr-only text for screen readers */}
      <span className="sr-only">Open notifications</span>
    </button>
  );
}
