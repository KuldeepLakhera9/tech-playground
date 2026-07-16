import { HiOutlineBookOpen, HiOutlineCheckCircle, HiOutlineClock, HiOutlineBadgeCheck } from "react-icons/hi";

function StatsCard({ icon: Icon, value, label, accent }) {
  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 pt-8 pb-5 px-5 group">
      {/* Icon badge overlaps the top edge of the card */}
      <div
        className={`absolute -top-4 left-5 h-9 w-9 rounded-xl ${accent} text-white flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-display text-3xl font-bold text-ink dark:text-white transition-colors">{value}</p>
      <p className="text-sm text-ink-soft dark:text-slate-400 mt-1 transition-colors">{label}</p>
    </div>
  );
}

export default function StatsSection({ courses = [] }) {
  // Dynamically calculate statistics from the active courses array
  const totalCourses = courses.length;
  const completedCourses = courses.filter((c) => c.status === "Completed").length;
  const inProgressCourses = courses.filter((c) => c.status === "In Progress").length;
  const certificatesEarned = completedCourses; // A certificate is earned for each completed course

  const stats = [
    { label: "Total Courses", value: totalCourses, icon: HiOutlineBookOpen, accent: "bg-primary-500" },
    { label: "Completed Courses", value: completedCourses, icon: HiOutlineCheckCircle, accent: "bg-emerald-500" },
    { label: "Courses In Progress", value: inProgressCourses, icon: HiOutlineClock, accent: "bg-amber-500" },
    { label: "Certificates Earned", value: certificatesEarned, icon: HiOutlineBadgeCheck, accent: "bg-violet-500" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
      <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink dark:text-white mb-5 transition-colors">
        Learning Statistics
      </h2>
      
      {/* Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
