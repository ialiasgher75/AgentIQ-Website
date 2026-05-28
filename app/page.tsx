import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { courses, stats, testimonials } from "@/lib/data";
import { Star, Users, BookOpen, Zap, ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <main className="flex-grow">
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden px-4">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-cyan-900/20 pointer-events-none" />
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-indigo-900/50 border border-indigo-500/50 text-indigo-300 text-sm px-4 py-2 rounded-full mb-6 font-medium">
            🚀 #1 Agentic AI Learning Platform
          </span>
          
          <h1 className="font-black text-5xl md:text-7xl text-white leading-tight mb-6">
            Learn AI. Build Agents.<br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Shape the Future.
            </span>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Master the most in-demand skills in tech. From LLM engineering to multi-agent orchestration, we provide the path to becoming a world-class AI Engineer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses" 
              className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition flex items-center gap-2 justify-center"
            >
              Explore Courses <ArrowRight size={20} />
            </Link>
            <Link 
              href="/roadmap" 
              className="border-2 border-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-indigo-900/30 transition text-center"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <section className="bg-slate-800/50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700/50 shadow-lg">
              <p className="font-black text-4xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-gray-400 mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FEATURED COURSES */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-black text-4xl text-white mb-4">Featured Courses</h2>
          <p className="text-gray-400 text-lg">Accelerate your learning with our top-rated tracks.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/courses" 
            className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3 rounded-xl border border-slate-600 transition"
          >
            View All Courses
          </Link>
        </div>
      </section>

      {/* SECTION 4: LEARNING TRACKS */}
      <section className="bg-slate-800/30 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-black text-4xl text-white mb-12 text-center">Your Learning Track</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Track 1 */}
            <div className="bg-slate-800 rounded-xl p-8 border-l-4 border-indigo-500 shadow-xl">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-indigo-400" />
              </div>
              <h3 className="font-bold text-white text-xl mb-4">AI Engineer Track</h3>
              <p className="text-gray-400 mb-6">Master the foundations of machine learning and modern AI systems.</p>
              <span className="bg-indigo-900/30 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
                4 Courses
              </span>
            </div>

            {/* Track 2 */}
            <div className="bg-slate-800 rounded-xl p-8 border-l-4 border-cyan-500 shadow-xl">
              <div className="w-12 h-12 bg-cyan-900/50 rounded-full flex items-center justify-center mb-6">
                <Users className="text-cyan-400" />
              </div>
              <h3 className="font-bold text-white text-xl mb-4">Agentic AI Track</h3>
              <p className="text-gray-400 mb-6">Learn to build autonomous agents and multi-agent collaborative systems.</p>
              <span className="bg-cyan-900/30 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
                3 Courses
              </span>
            </div>

            {/* Track 3 */}
            <div className="bg-slate-800 rounded-xl p-8 border-l-4 border-amber-500 shadow-xl">
              <div className="w-12 h-12 bg-amber-900/50 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-amber-400" />
              </div>
              <h3 className="font-bold text-white text-xl mb-4">LLM Engineer Track</h3>
              <p className="text-gray-400 mb-6">Dive deep into RAG, fine-tuning, and prompt engineering at scale.</p>
              <span className="bg-amber-900/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
                5 Courses
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="font-black text-4xl text-white mb-12 text-center">Student Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700/50">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mt-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="mt-6">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CTA BANNER */}
      <section className="bg-gradient-to-r from-indigo-600 to-cyan-500 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-4xl text-white">Start Your AI Journey Today</h2>
          <p className="text-white/80 mt-4 text-xl">
            Join thousands of students and start building the next generation of AI systems.
          </p>
          <Link 
            href="/courses" 
            className="mt-8 inline-block bg-white text-indigo-600 font-bold px-10 py-4 rounded-xl text-lg hover:bg-gray-100 transition shadow-xl"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </main>
  );
}
