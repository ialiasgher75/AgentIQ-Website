"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import CategoryFilter from "@/components/CategoryFilter";
import { courses } from "@/lib/data";
import { Search } from "lucide-react";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-grow bg-slate-900 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-900 via-slate-900 to-cyan-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-black text-5xl text-white mb-4">All Courses</h1>
          <p className="text-gray-400 text-lg mb-6">
            Explore our comprehensive curriculum and start your journey towards AI mastery.
          </p>
          <span className="inline-block bg-indigo-900/50 border border-indigo-500/50 text-indigo-300 text-sm px-4 py-2 rounded-full font-medium">
            {courses.length} Professional Courses Available
          </span>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative max-w-lg mb-8">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-indigo-500 placeholder-gray-500 transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </section>

      {/* RESULTS & GRID */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <p className="text-gray-400 mb-6">
          Showing <span className="text-white font-semibold">{filteredCourses.length}</span> of {courses.length} courses
        </p>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-800/30 rounded-2xl border border-slate-800">
            <h3 className="text-xl text-white font-bold mb-2">No courses found</h3>
            <p className="text-gray-400">Try a different search or filter to find what you're looking for.</p>
            <button 
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-6 text-indigo-400 hover:text-indigo-300 font-semibold underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
