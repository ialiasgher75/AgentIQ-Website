import { notFound } from "next/navigation";
import { courses, instructors } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import { Clock, BookOpen, Star, ChevronRight, Award, Users as UsersIcon } from "lucide-react";
import Link from "next/link";
import EnrollmentButton from "@/components/EnrollmentButton";
import SafeImage from "@/components/SafeImage";

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
    <main className="bg-white min-h-screen text-slate-900">
      {/* BREADCRUMB */}
      <nav className="max-w-7xl mx-auto px-4 pt-8 flex items-center gap-2 text-sm text-slate-500 font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <ChevronRight size={14} />
        <Link href="/courses" className="hover:text-blue-600 transition-colors">Courses</Link>
        <ChevronRight size={14} />
        <span className="text-slate-900 truncate">{course.title}</span>
      </nav>

      {/* TWO COLUMN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-xl border border-slate-200">
            <SafeImage 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover"
              fallbackText="Course Image Unavailable"
            />
          </div>
          
          <h1 className="font-black text-3xl md:text-4xl text-slate-900 mt-8 leading-tight">
            {course.title}
          </h1>
          
          <div className="mt-4 inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100 uppercase tracking-wider">
            {course.category}
          </div>

          <p className="text-slate-500 mt-6 text-lg leading-relaxed font-medium">
            {course.description}
          </p>

          {/* Skills section */}
          <section className="mt-12">
            <h2 className="font-bold text-2xl text-slate-900 mb-6 flex items-center gap-2">
              <Award className="text-blue-600" /> Skills You Will Learn
            </h2>
            <div className="flex flex-wrap gap-3">
              {course.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-slate-50 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Curriculum section */}
          <section className="mt-12">
            <h2 className="font-bold text-2xl text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen className="text-blue-600" /> Course Curriculum
            </h2>
            <div className="flex flex-col gap-4">
              {course.curriculum.map((module, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-5 hover:border-blue-300 transition-colors group shadow-sm"
                >
                  <span className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-blue-600/20">
                    {index + 1}
                  </span>
                  <span className="text-slate-700 font-bold text-lg">
                    {module}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN (Sidebar) */}
        <aside className="lg:relative">
          <div className="lg:sticky lg:top-24 bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className={`font-black text-4xl ${course.price === "Free" ? "text-green-600" : "text-slate-900"}`}>
                  {course.price}
                </p>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <Star size={18} className="text-amber-400 fill-amber-400" />
                <span className="text-slate-900 font-black">{course.rating}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl flex flex-col items-center justify-center text-center border border-slate-100">
                <Clock size={20} className="text-blue-600 mb-2" />
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Duration</span>
                <span className="text-sm font-bold text-slate-700">{course.duration}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex flex-col items-center justify-center text-center border border-slate-100">
                <BookOpen size={20} className="text-blue-600 mb-2" />
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Lessons</span>
                <span className="text-sm font-bold text-slate-700">{course.lessons}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex flex-col items-center justify-center text-center border border-slate-100">
                <Award size={20} className="text-blue-600 mb-2" />
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Level</span>
                <span className="text-sm font-bold text-slate-700">{course.level}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl flex flex-col items-center justify-center text-center border border-slate-100">
                <UsersIcon size={20} className="text-blue-600 mb-2" />
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Access</span>
                <span className="text-sm font-bold text-slate-700">Lifetime</span>
              </div>
            </div>

            <EnrollmentButton course={course} />
            
            <p className="text-center text-slate-400 text-xs mt-4 font-medium">
              30-Day Money-Back Guarantee
            </p>

            {/* Instructor section */}
            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <img 
                  src={instructorData?.image || `https://picsum.photos/seed/${course.instructor}/100/100`} 
                  alt={course.instructor} 
                  className="rounded-full w-14 h-14 object-cover border-2 border-blue-600/20" 
                />
                <div>
                  <p className="font-black text-slate-900 leading-tight">{course.instructor}</p>
                  <p className="text-blue-600 text-sm font-bold">Lead Instructor</p>
                </div>
              </div>
              {instructorData && (
                <p className="text-slate-500 text-sm mt-4 leading-relaxed line-clamp-3 font-medium">
                  {instructorData.bio}
                </p>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* RELATED COURSES */}
      {relatedCourses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16 mt-8 border-t border-slate-100">
          <h2 className="font-black text-2xl md:text-3xl text-slate-900 mb-8">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedCourses.map((relatedCourse) => (
              <CourseCard key={relatedCourse.id} course={relatedCourse} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
