import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { courses, stats, testimonials } from "@/lib/data";
import { Star, Users, BookOpen, Zap, ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <main className="flex-grow">
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden px-4">
        {/* Subtle Background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-blue-50 border border-blue-200 text-blue-600 text-sm px-4 py-2 rounded-full mb-6 font-bold uppercase tracking-wider">
            🚀 #1 Agentic AI Learning Platform
          </span>
          
          <h1 className="font-black text-5xl md:text-7xl text-slate-900 leading-tight mb-6">
            Learn AI. Build Agents.<br />
            <span className="text-blue-600">
              Shape the Future.
            </span>
          </h1>
          
          <p className="text-slate-500 text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Master the most in-demand skills in tech. From LLM engineering to multi-agent orchestration, we provide the path to becoming a world-class AI Engineer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses" 
              className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition flex items-center gap-2 justify-center shadow-lg shadow-blue-600/20"
            >
              Explore Courses <ArrowRight size={20} />
            </Link>
            <Link 
              href="/roadmap" 
              className="border-2 border-blue-600 text-blue-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition text-center"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <section className="bg-slate-50 py-16 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm">
              <p className="font-black text-4xl text-blue-600">
                {stat.value}
              </p>
              <p className="text-slate-500 mt-2 font-bold uppercase text-xs tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FEATURED COURSES */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-black text-4xl text-slate-900 mb-4">Featured Courses</h2>
          <p className="text-slate-500 text-lg font-medium">Accelerate your learning with our top-rated tracks.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/courses" 
            className="inline-block bg-white hover:bg-slate-50 text-blue-600 font-bold px-8 py-3 rounded-xl border-2 border-blue-600 transition"
          >
            View All Courses
          </Link>
        </div>
      </section>

      {/* SECTION 4: LEARNING TRACKS */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-black text-4xl text-slate-900 mb-12 text-center">Your Learning Track</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Track 1 */}
            <div className="bg-white rounded-xl p-8 border-t-4 border-blue-600 shadow-sm border-x border-b border-slate-200">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">AI Engineer Track</h3>
              <p className="text-slate-500 mb-6 font-medium">Master the foundations of machine learning and modern AI systems.</p>
              <span className="bg-blue-100 text-blue-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                4 Courses
              </span>
            </div>

            {/* Track 2 */}
            <div className="bg-white rounded-xl p-8 border-t-4 border-blue-400 shadow-sm border-x border-b border-slate-200">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-blue-500" />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">Agentic AI Track</h3>
              <p className="text-slate-500 mb-6 font-medium">Learn to build autonomous agents and multi-agent collaborative systems.</p>
              <span className="bg-blue-100 text-blue-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                3 Courses
              </span>
            </div>

            {/* Track 3 */}
            <div className="bg-white rounded-xl p-8 border-t-4 border-slate-300 shadow-sm border-x border-b border-slate-200">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="text-slate-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-4">LLM Engineer Track</h3>
              <p className="text-slate-500 mb-6 font-medium">Dive deep into RAG, fine-tuning, and prompt engineering at scale.</p>
              <span className="bg-slate-100 text-slate-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                5 Courses
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="font-black text-4xl text-slate-900 mb-12 text-center">Student Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 italic mt-4 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              <div className="mt-6">
                <p className="font-black text-slate-900">{testimonial.name}</p>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CTA BANNER */}
      <section className="bg-blue-600 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-4xl text-white">Start Your AI Journey Today</h2>
          <p className="text-white/90 mt-4 text-xl font-medium">
            Join thousands of students and start building the next generation of AI systems.
          </p>
          <Link 
            href="/courses" 
            className="mt-8 inline-block bg-white text-blue-600 font-black px-10 py-4 rounded-xl text-lg hover:bg-slate-50 transition shadow-xl active:scale-95"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </main>
  );
}
