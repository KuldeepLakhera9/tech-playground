import { useState } from "react";
import { HiOutlineSearch, HiOutlineMenu, HiOutlineX, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import NotificationButton from "./NotificationButton";
import NotificationPanel from "./NotificationPanel";

const NAV_LINKS = ["Home", "Explore Courses", "My Learning", "Profile"];

export default function Navbar({
  isDarkMode,
  onToggleDarkMode,
  notifications = [],
  onMarkAsRead,
  onMarkAllAsRead,
}) {
  const [open, setOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 dark:bg-slate-900/90 dark:border-slate-800/80 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl">
          <span className="h-9 w-9 rounded-xl bg-primary-500 text-white font-display font-bold flex items-center justify-center shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform duration-200">
            L
          </span>
          <span className="font-display font-bold text-lg text-ink dark:text-white tracking-tight">
            Learn<span className="text-primary-500">Sphere</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft dark:text-slate-400">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a 
                href={link === "Explore Courses" ? "#courses" : "#"} 
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-500 dark:after:bg-primary-400 after:transition-all after:duration-250"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Notification Center */}
          <div className="relative">
            <NotificationButton
              unreadCount={unreadCount}
              isOpen={showNotifications}
              onClick={() => setShowNotifications((v) => !v)}
            />
            <NotificationPanel
              notifications={notifications}
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
              onMarkAsRead={onMarkAsRead}
              onMarkAllAsRead={onMarkAllAsRead}
            />
          </div>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="h-10 w-10 rounded-xl flex items-center justify-center text-ink-soft dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 border border-slate-100 dark:border-slate-800 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            {isDarkMode ? <HiOutlineSun className="h-5 w-5 text-amber-400" /> : <HiOutlineMoon className="h-5 w-5" />}
          </button>

          {/* Search Button Mock */}
          <a
            href="#courses"
            aria-label="Search"
            className="h-10 w-10 rounded-xl flex items-center justify-center text-ink-soft dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <HiOutlineSearch className="h-5 w-5" />
          </a>

          {/* User Profile Avatar with custom ring */}
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-500 to-primary-500 text-white flex items-center justify-center font-display text-sm font-bold shadow-md shadow-violet-500/20 cursor-pointer hover:scale-105 active:scale-95 transition-transform">
            LK
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Notification Button */}
          <div className="relative">
            <NotificationButton
              unreadCount={unreadCount}
              isOpen={showNotifications}
              onClick={() => setShowNotifications((v) => !v)}
            />
            <NotificationPanel
              notifications={notifications}
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
              onMarkAsRead={onMarkAsRead}
              onMarkAllAsRead={onMarkAllAsRead}
            />
          </div>

          {/* Mobile Dark Mode Toggle */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="h-9 w-9 rounded-lg flex items-center justify-center text-ink-soft dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            {isDarkMode ? <HiOutlineSun className="h-5 w-5 text-amber-400" /> : <HiOutlineMoon className="h-5 w-5" />}
          </button>

          {/* Mobile Hamburger toggle */}
          <button
            type="button"
            className="h-9 w-9 flex items-center justify-center text-ink dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 pb-6 pt-3 animate-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={link === "Explore Courses" ? "#courses" : "#"}
                  className="block py-2.5 px-3 text-sm font-medium text-ink-soft dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary-500 dark:hover:text-primary-400 rounded-xl transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <a 
              href="#courses" 
              className="flex items-center gap-2 text-sm text-ink-soft dark:text-slate-400 font-medium py-1 px-3 hover:text-primary-500"
              onClick={() => setOpen(false)}
            >
              <HiOutlineSearch className="h-5 w-5" /> Search Courses
            </a>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-500 to-primary-500 text-white flex items-center justify-center font-display text-xs font-bold shadow-md shadow-violet-500/20 ml-auto">
              LK
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
