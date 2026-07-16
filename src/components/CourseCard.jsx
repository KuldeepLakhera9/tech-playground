import { categoryStyles, statusStyles } from "../data/courses";

export default function CourseCard({ course }) {
  const { title, description, category, image, progress, status } = course;
  const catStyle = categoryStyles[category];

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
      {/* Category-colored top accent bar - ties every card back to its category color */}
      <div className={`h-1.5 ${catStyle.bar}`} />

      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${catStyle.chip}`}>
          {category}
        </span>

        <h3 className="font-display font-semibold text-ink mt-3 text-base">{title}</h3>
        <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{description}</p>

        <div className="mt-4 flex items-center justify-between text-xs">
          <span className={`px-2.5 py-1 rounded-full font-medium ${statusStyles[status]}`}>{status}</span>
          <span className="text-ink-soft font-medium">{progress}%</span>
        </div>

        {/* Progress bar: width set via inline style since Tailwind can't
            generate a class for an arbitrary runtime percentage safely. */}
        <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className={`h-full rounded-full ${catStyle.bar}`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <button className="mt-4 w-full py-2.5 rounded-xl bg-slate-50 text-ink font-medium text-sm hover:bg-primary-500 hover:text-white transition-colors">
          {status === "Completed" ? "Review Course" : status === "Not Started" ? "Start Course" : "Continue Learning"}
        </button>
      </div>
    </div>
  );
}
