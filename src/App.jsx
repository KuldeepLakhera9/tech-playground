import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsCard";
import ContinueLearning from "./components/ContinueLearning";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import CourseGrid from "./components/CourseGrid";
import Footer from "./components/Footer";
import { courses } from "./data/courses";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || course.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ContinueLearning courses={courses} />

      <section id="courses" className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-5">Explore Courses</h2>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <SearchBar value={search} onChange={setSearch} />
          <div className="overflow-x-auto no-scrollbar">
            <CategoryFilter selected={category} onSelect={setCategory} />
          </div>
        </div>

        <CourseGrid courses={filteredCourses} />
      </section>

      <Footer />
    </div>
  );
}
