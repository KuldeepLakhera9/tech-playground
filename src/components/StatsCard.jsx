import { HiOutlineBookOpen, HiOutlineCheckCircle, HiOutlineClock, HiOutlineBadgeCheck } from "react-icons/hi";

const STATS = [
  { label: "Total Courses", value: 9, icon: HiOutlineBookOpen, accent: "bg-primary-500" },
  { label: "Completed Courses", value: 2, icon: HiOutlineCheckCircle, accent: "bg-emerald-500" },
  { label: "Courses In Progress", value: 5, icon: HiOutlineClock, accent: "bg-amber-500" },
  { label: "Certificates Earned", value: 2, icon: HiOutlineBadgeCheck, accent: "bg-violet-500" },
];

function StatsCard({ icon: Icon, value, label, accent }) {
  return (
    <div className="relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow pt-8 pb-5 px-5">
      {/* Icon badge overlaps the top edge of the card - the section's signature detail */}
      <div
        className={`absolute -top-4 left-5 h-9 w-9 rounded-xl ${accent} text-white flex items-center justify-center shadow-md`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-display text-3xl font-semibold text-ink">{value}</p>
      <p className="text-sm text-ink-soft mt-1">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
      <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-5">Learning Statistics</h2>
      {/* Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
