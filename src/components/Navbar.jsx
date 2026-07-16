import { useState } from "react";
import { HiOutlineSearch, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NAV_LINKS = ["Home", "Explore Courses", "My Learning", "Profile"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="h-8 w-8 rounded-lg bg-primary-500 text-white font-display font-bold flex items-center justify-center">
            L
          </span>
          <span className="font-display font-semibold text-lg text-ink">LearnSphere</span>
        </a>

        {/* Desktop links: hidden on mobile, flex row from md up */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-primary-600 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Search"
            className="h-9 w-9 rounded-full flex items-center justify-center text-ink-soft hover:bg-slate-100 transition-colors"
          >
            <HiOutlineSearch className="h-5 w-5" />
          </button>
          <div className="h-9 w-9 rounded-full bg-violet-500 text-white flex items-center justify-center font-display text-sm font-semibold">
            RS
          </div>
        </div>

        {/* Mobile: hamburger toggle, hidden from md up */}
        <button
          className="md:hidden h-9 w-9 flex items-center justify-center text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 pb-5 pt-3">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block py-2.5 text-sm font-medium text-ink-soft hover:text-primary-600"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-100">
            <button className="flex items-center gap-2 text-sm text-ink-soft">
              <HiOutlineSearch className="h-5 w-5" /> Search
            </button>
            <div className="h-8 w-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-display text-xs font-semibold ml-auto">
              RS
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
