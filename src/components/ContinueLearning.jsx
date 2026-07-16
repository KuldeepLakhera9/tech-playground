import CourseGrid from "./CourseGrid";

export default function ContinueLearning({ courses }) {
  const inProgress = courses.filter((c) => c.status === "In Progress");

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">Continue Learning</h2>
        <span className="text-sm text-ink-soft">{inProgress.length} in progress</span>
      </div>
      <CourseGrid courses={inProgress} emptyMessage="Nothing in progress right now — explore a new course below." />
    </section>
  );
}
