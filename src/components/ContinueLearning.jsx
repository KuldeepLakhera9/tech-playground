import CourseGrid from "./CourseGrid";

export default function ContinueLearning({ 
  courses, 
  onToggleFavorite, 
  onSelectCourse 
}) {
  // Filter for "In Progress" courses
  const inProgress = courses.filter((c) => c.status === "In Progress");
  
  // Sort in-progress courses by progress descending, and take the top 3
  const topInProgress = [...inProgress]
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-ink dark:text-white transition-colors">
          Continue Learning
        </h2>
        <span className="text-sm font-semibold text-ink-soft dark:text-slate-400">
          {inProgress.length} in progress
        </span>
      </div>
      
      <CourseGrid 
        courses={topInProgress} 
        onToggleFavorite={onToggleFavorite}
        onSelectCourse={onSelectCourse}
        emptyMessage="Nothing in progress right now — explore a new course below." 
      />
    </section>
  );
}
