import { HiOutlineArrowRight } from "react-icons/hi";

export default function HeroSection() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-16">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text content - stacks above image on mobile, sits left on desktop */}
        <div className="flex-1 text-center md:text-left">
          <p className="inline-block text-xs font-semibold tracking-wide uppercase text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
            Day 14 of your learning streak
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-tight">
            Welcome back, Student!
          </h1>
          <p className="mt-4 text-ink-soft text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Continue learning and achieve your goals. Your next lesson is picked up
            right where you left it.
          </p>
          <div className="mt-7 flex justify-center md:justify-start">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-xl transition-colors shadow-sm shadow-primary-500/30"
            >
              Explore Courses
              <HiOutlineArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <div className="relative rounded-3xl bg-primary-500 p-8 sm:p-10 overflow-hidden">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-500/40" />
            <div className="absolute -left-6 -bottom-10 h-28 w-28 rounded-full bg-sky-500/30" />
            <div className="relative bg-white rounded-2xl p-5 shadow-lg">
              <p className="text-xs font-semibold text-ink-soft uppercase tracking-wide">Today's focus</p>
              <p className="font-display font-semibold text-ink mt-1">React State Management</p>
              <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-primary-500 rounded-full" style={{ width: "55%" }} />
              </div>
              <p className="text-xs text-ink-soft mt-2">55% complete &middot; 3 lessons left</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
