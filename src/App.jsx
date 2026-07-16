import { useState, useMemo, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsCard";
import ContinueLearning from "./components/ContinueLearning";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import CourseGrid from "./components/CourseGrid";
import CourseModal from "./components/CourseModal";
import Footer from "./components/Footer";
import { courses as initialCourses } from "./data/courses";

export default function App() {
  // --- Dark Mode State ---
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // --- Courses State ---
  const [coursesState, setCoursesState] = useState(() => {
    const saved = localStorage.getItem("learnsphere_courses");
    return saved ? JSON.parse(saved) : initialCourses;
  });

  // --- Search, Filter, Sort States ---
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  // --- Modal State ---
  const [selectedCourse, setSelectedCourse] = useState(null);

  // --- Show More Pagination State ---
  const [visibleCount, setVisibleCount] = useState(6);

  // Reset pagination when search queries, categories, sorting, or favorites toggle changes
  useEffect(() => {
    setVisibleCount(6);
  }, [search, category, sortBy, favoritesOnly]);

  // --- State Handlers ---
  const handleUpdateProgress = (courseId, newProgress) => {
    setCoursesState((prevCourses) => {
      const updated = prevCourses.map((c) => {
        if (c.id === courseId) {
          const status = newProgress === 100
            ? "Completed"
            : newProgress > 0
              ? "In Progress"
              : "Not Started";
          const updatedCourse = { ...c, progress: newProgress, status };
          
          // Sync open modal details
          if (selectedCourse && selectedCourse.id === courseId) {
            setSelectedCourse(updatedCourse);
          }
          return updatedCourse;
        }
        return c;
      });
      localStorage.setItem("learnsphere_courses", JSON.stringify(updated));
      return updated;
    });
  };

  const handleToggleFavorite = (courseId) => {
    setCoursesState((prevCourses) => {
      const updated = prevCourses.map((c) => {
        if (c.id === courseId) {
          const updatedCourse = { ...c, isFavorite: !c.isFavorite };
          
          // Sync open modal details
          if (selectedCourse && selectedCourse.id === courseId) {
            setSelectedCourse(updatedCourse);
          }
          return updatedCourse;
        }
        return c;
      });
      localStorage.setItem("learnsphere_courses", JSON.stringify(updated));
      return updated;
    });
  };

  // --- Filter and Sort Logic ---
  const filteredCourses = useMemo(() => {
    let result = coursesState.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || course.category === category;
      const matchesFavorites = !favoritesOnly || course.isFavorite;
      return matchesSearch && matchesCategory && matchesFavorites;
    });

    if (sortBy === "title-asc") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "progress-desc") {
      result = [...result].sort((a, b) => b.progress - a.progress);
    } else if (sortBy === "progress-asc") {
      result = [...result].sort((a, b) => a.progress - b.progress);
    }

    return result;
  }, [coursesState, search, category, favoritesOnly, sortBy]);

  const visibleCourses = useMemo(() => {
    return filteredCourses.slice(0, visibleCount);
  }, [filteredCourses, visibleCount]);

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-slate-950">
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <HeroSection />
      
      {/* Dynamics Stats from Live State */}
      <StatsSection courses={coursesState} />
      
      {/* Continue Learning */}
      <ContinueLearning 
        courses={coursesState} 
        onUpdateProgress={handleUpdateProgress}
        onToggleFavorite={handleToggleFavorite}
        onSelectCourse={setSelectedCourse}
      />

      {/* Main Course Explorer Section */}
      <section id="courses" className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-5">Explore Courses</h2>

        {/* Controls: Search, Favorites, Sorting, Categories */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <SearchBar 
              value={search} 
              onChange={setSearch} 
              sortBy={sortBy} 
              onSortChange={setSortBy}
              favoritesOnly={favoritesOnly}
              onToggleFavorites={() => setFavoritesOnly(!favoritesOnly)}
            />
            
            <div className="overflow-x-auto no-scrollbar py-1">
              <CategoryFilter selected={category} onSelect={setCategory} />
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <CourseGrid 
          courses={visibleCourses} 
          onUpdateProgress={handleUpdateProgress}
          onToggleFavorite={handleToggleFavorite}
          onSelectCourse={setSelectedCourse}
        />

        {/* Show More Button */}
        {filteredCourses.length > visibleCount && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-semibold text-ink dark:text-slate-200 transition-all hover:shadow-sm cursor-pointer hover:-translate-y-0.5 duration-200"
            >
              Show More Courses
            </button>
          </div>
        )}
      </section>

      <Footer />

      {/* Interactive Detail Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onUpdateProgress={handleUpdateProgress}
      />
    </div>
  );
}
