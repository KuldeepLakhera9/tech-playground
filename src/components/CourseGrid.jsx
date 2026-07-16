import CourseCard from "./CourseCard";

export default function CourseGrid({ courses, emptyMessage = "No courses found." }) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl">
        <p className="text-ink-soft">{emptyMessage}</p>
      </div>
    );
  }

  return (
    // Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
