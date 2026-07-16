import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FOOTER_LINKS = ["Home", "Explore Courses", "My Learning", "Profile"];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
        {/* Brand + description */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-lg bg-primary-500 text-white font-display font-bold flex items-center justify-center shadow-md shadow-primary-500/10">
              L
            </span>
            <span className="font-display font-bold text-lg text-ink dark:text-white">LearnSphere</span>
          </div>
          <p className="text-sm text-ink-soft dark:text-slate-400 mt-3 leading-relaxed">
            A focused space to track courses, build streaks, and keep learning momentum going.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-ink-soft dark:text-slate-400 mb-3">Navigate</p>
          <ul className="flex flex-col gap-2 text-sm text-ink-soft dark:text-slate-400">
            {FOOTER_LINKS.map((link) => (
              <li key={link}>
                <a 
                  href={link === "Explore Courses" ? "#courses" : "#"} 
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-ink-soft dark:text-slate-400 mb-3">Connect</p>
          <div className="flex items-center gap-3">
            {[
              { Icon: FaGithub, label: "GitHub" },
              { Icon: FaTwitter, label: "Twitter" },
              { Icon: FaLinkedin, label: "LinkedIn" },
              { Icon: HiOutlineMail, label: "Email" }
            ].map(({ Icon, label }, i) => (
              <a
                key={i}
                href="#"
                aria-label={label}
                className="h-9 w-9 rounded-xl bg-slate-50 text-ink-soft dark:bg-slate-800 dark:text-slate-400 flex items-center justify-center hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white border border-transparent dark:border-slate-800/50 hover:border-transparent transition-all duration-200"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 dark:border-slate-800/80 py-5 text-center text-xs text-ink-soft dark:text-slate-400">
        © {new Date().getFullYear()} LearnSphere. All Rights Reserved.
      </div>
    </footer>
  );
}
