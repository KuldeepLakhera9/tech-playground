import { useEffect, useRef } from "react";
import NotificationItem from "./NotificationItem";
import { HiOutlineBell, HiCheckCircle } from "react-icons/hi";

export default function NotificationPanel({
  notifications,
  isOpen,
  onClose,
  onMarkAsRead,
  onMarkAllAsRead,
}) {
  const panelRef = useRef(null);

  // Close panel on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close panel on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div
      ref={panelRef}
      className="fixed inset-x-4 top-16 sm:absolute sm:top-full sm:right-0 sm:left-auto sm:inset-x-auto sm:mt-2 w-auto sm:w-96 max-w-[calc(100vw-2rem)] z-40 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-200"
    >
      {/* Panel Header */}
      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/50 dark:bg-slate-900/60">
        <div className="flex items-center gap-2">
          <h3 className="font-display font-bold text-sm text-ink dark:text-white">
            Notifications
          </h3>
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-300">
              {unreadCount} new
            </span>
          )}
        </div>

        {unreadCount > 0 && (
          <button
            type="button"
            onClick={onMarkAllAsRead}
            className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md px-1 py-0.5 cursor-pointer"
          >
            <HiCheckCircle className="h-4 w-4" />
            Mark all read
          </button>
        )}
      </div>

      {/* Notification Items List with max-h and overflow scrolling */}
      <div className="max-h-80 overflow-y-auto overflow-x-hidden divide-y divide-slate-100 dark:divide-slate-800/60">
        {notifications.length === 0 ? (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-2">
            <HiOutlineBell className="h-8 w-8 text-slate-300 dark:text-slate-600" />
            <p className="text-sm font-medium text-ink-soft dark:text-slate-400">
              No notifications yet
            </p>
          </div>
        ) : (
          notifications.map((item) => (
            <NotificationItem
              key={item.id}
              notification={item}
              onMarkAsRead={onMarkAsRead}
            />
          ))
        )}
      </div>
    </div>
  );
}
