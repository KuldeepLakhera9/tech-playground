import { HiOutlineArrowRight } from "react-icons/hi";

export default function HeroSection() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-16">
      {/* Decorative gradient blur background - glow behind hero section */}
      <div className="absolute top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-500/5" />
      <div className="absolute top-40 right-1/4 -z-10 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/5" />

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text content - stacks above image on mobile, sits left on desktop */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse" />
            Day 14 of your learning streak
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink dark:text-white leading-tight">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-violet-500 dark:from-primary-400 dark:to-violet-400">Student!</span>
          </h1>
          
          <p className="text-ink-soft dark:text-slate-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Continue learning and achieve your goals. Your next lesson is picked up
            right where you left it. Keep the momentum going!
          </p>
          
          <div className="flex justify-center lg:justify-start pt-2">
            <a
              href="#courses"
              className="inline-flex items-center gap-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-primary-500/20 dark:shadow-primary-500/10 hover:shadow-primary-500/35 hover:-translate-y-0.5 active:translate-y-0 duration-200"
            >
              Explore Courses
              <HiOutlineArrowRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Illustration - Floating glassmorphic design */}
        <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-gradient-to-br from-primary-500 to-violet-600 p-8 sm:p-10 overflow-hidden shadow-xl shadow-primary-500/15 hover:shadow-primary-500/25 dark:shadow-slate-950/40 transition-all duration-300 hover:scale-[1.02] group">
            {/* Background patterns */}
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/10 blur-xl group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -left-6 -bottom-10 h-32 w-32 rounded-full bg-violet-400/20 blur-xl" />

            <div className="relative bg-white/10 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-white/10 shadow-lg text-white">
              <span className="text-[10px] font-bold text-primary-200 uppercase tracking-widest">
                Today's focus
              </span>
              <p className="font-display font-semibold text-lg sm:text-xl text-white mt-1">
                React State Management
              </p>
              
              {/* Progress bar */}
              <div className="mt-4 h-2.5 rounded-full bg-white/20 overflow-hidden">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: "55%" }} 
                />
              </div>
              
              <div className="flex justify-between text-xs text-primary-100 mt-2.5 font-medium">
                <span>55% complete</span>
                <span>3 lessons left</span>
              </div>
            </div>

            {/* Floating micro-card badge */}
            <div className="absolute -bottom-4 right-4 sm:right-6 bg-white dark:bg-slate-800 text-ink dark:text-white rounded-2xl p-3 border border-slate-100 dark:border-slate-700 shadow-xl flex items-center gap-3 animate-bounce duration-1000" style={{ animationDuration: '3s' }}>
              <div className="h-9 w-9 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-display font-bold">
                ✓
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft dark:text-slate-400">Daily Goal</p>
                <p className="text-xs font-semibold">Completed!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
