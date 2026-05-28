import { notFound } from "next/navigation";
import { courses, instructors } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import { Clock, BookOpen, Star, ChevronRight, Award, Users as UsersIcon } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  const instructorData = instructors.find(i => i.name === course.instructor);

  return (
    <main className="bg-slate-900 min-h-screen text-gray-100">
      {/* BREADCRUMB */}
      <nav className="max-w-7xl mx-auto px-4 pt-8 flex items-center gap-2 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight size={14} />
        <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
        <ChevronRight size={14} />
        <span className="text-white font-medium truncate">{course.title}</span>
      </nav>

      {/* TWO COLUMN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full rounded-2xl object-cover h-64 md:h-96 shadow-2xl"
          />
          
          <h1 className="font-black text-3xl md:text-4xl text-white mt-8 leading-tight">
            {course.title}
          </h1>
          
          <div className="mt-4 inline-block bg-indigo-900/50 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-500/30">
            {course.category}
          </div>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            {course.description}
          </p>

          {/* Skills section */}
          <section className="mt-12">
            <h2 className="font-bold text-2xl text-white mb-6 flex items-center gap-2">
              <Award className="text-indigo-400" /> Skills You Will Learn
            </h2>
            <div className="flex flex-wrap gap-3">
              {course.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-indigo-900/40 text-indigo-300 px-4 py-2 rounded-xl text-sm font-medium border border-indigo-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Curriculum section */}
          <section className="mt-12">
            <h2 className="font-bold text-2xl text-white mb-6 flex items-center gap-2">
              <BookOpen className="text-indigo-400" /> Course Curriculum
            </h2>
            <div className="flex flex-col gap-4">
              {course.curriculum.map((module, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 flex items-center gap-5 hover:bg-slate-800 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <span className="text-gray-200 font-medium text-lg">
                    {module}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN (Sidebar) */}
        <aside className="lg:relative">
          <div className="lg:sticky lg:top-24 bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700/50">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className={`font-black text-4xl ${course.price === "Free" ? "text-green-400" : "text-white"}`}>
                  {course.price}
                </p>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-700/50 px-3 py-1.5 rounded-lg">
                <Star size={18} className="text-amber-400 fill-amber-400" />
                <span className="text-white font-bold">{course.rating}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-900/50 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                <Clock size={20} className="text-indigo-400 mb-2" />
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Duration</span>
                <span className="text-sm font-semibold text-gray-200">{course.duration}</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                <BookOpen size={20} className="text-indigo-400 mb-2" />
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Lessons</span>
                <span className="text-sm font-semibold text-gray-200">{course.lessons}</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                <Award size={20} className="text-indigo-400 mb-2" />
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Level</span>
                <span className="text-sm font-semibold text-gray-200">{course.level}</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                <UsersIcon size={20} className="text-indigo-400 mb-2" />
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Access</span>
                <span className="text-sm font-semibold text-gray-200">Lifetime</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-black py-4 rounded-xl text-lg hover:opacity-90 transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
              Enroll Now
            </button>
            
            <p className="text-center text-gray-500 text-xs mt-4">
              30-Day Money-Back Guarantee
            </p>

            {/* Instructor section */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex items-center gap-4">
                <img 
                  src={instructorData?.image || `https://picsum.photos/seed/${course.instructor}/100/100`} 
                  alt={course.instructor} 
                  className="rounded-full w-14 h-14 object-cover border-2 border-indigo-500/50" 
                />
                <div>
                  <p className="font-bold text-white leading-tight">{course.instructor}</p>
                  <p className="text-indigo-400 text-sm font-medium">Lead Instructor</p>
                </div>
              </div>
              {instructorData && (
                <p className="text-gray-400 text-sm mt-4 leading-relaxed line-clamp-3">
                  {instructorData.bio}
                </p>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* RELATED COURSES */}
      {relatedCourses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16 mt-8">
          <h2 className="font-black text-2xl md:text-3xl text-white mb-8">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCourses.map((relatedCourse) => (
              <CourseCard key={relatedCourse.id} course={relatedCourse} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
