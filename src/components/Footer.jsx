import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FOOTER_LINKS = ["Home", "Explore Courses", "My Learning", "Profile"];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
        {/* Brand + description */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-primary-500 text-white font-display font-bold flex items-center justify-center">
              L
            </span>
            <span className="font-display font-semibold text-lg text-ink">LearnSphere</span>
          </div>
          <p className="text-sm text-ink-soft mt-3 leading-relaxed">
            A focused space to track courses, build streaks, and keep learning momentum going.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft mb-3">Navigate</p>
          <ul className="flex flex-col gap-2 text-sm text-ink-soft">
            {FOOTER_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary-600 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft mb-3">Connect</p>
          <div className="flex items-center gap-3">
            {[FaGithub, FaTwitter, FaLinkedin, HiOutlineMail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="h-9 w-9 rounded-full bg-slate-50 text-ink-soft flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 py-5 text-center text-xs text-ink-soft">
        © 2026 LearnSphere. All Rights Reserved.
      </div>
    </footer>
  );
}
