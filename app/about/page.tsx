import { instructors, stats } from "@/lib/data";
import { Target, Zap, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={24} />,
      title: "Student First",
      description: "Every decision we make is focused on the success and learning experience of our students.",
      color: "bg-indigo-600",
    },
    {
      icon: <Zap size={24} />,
      title: "Learn by Doing",
      description: "We prioritize practical projects and real-world implementation over abstract theory.",
      color: "bg-cyan-600",
    },
    {
      icon: <Users size={24} />,
      title: "Community Driven",
      description: "A collaborative environment where students and experts grow and solve problems together.",
      color: "bg-amber-600",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Always Updated",
      description: "Our curriculum evolves as fast as the AI field to ensure you stay at the cutting edge.",
      color: "bg-green-600",
    },
  ];

  return (
    <main className="flex-grow bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-slate-50 py-24 px-4 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-black text-5xl text-slate-900">About AgentIQ</h1>
          <p className="text-slate-500 text-xl mt-6 leading-relaxed font-medium">
            We are on a mission to democratize AI education and empower the next generation of Agentic AI Engineers.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl p-10 border-l-8 border-blue-600 shadow-sm border-y border-r border-slate-200">
          <p className="text-sm text-blue-600 font-black uppercase tracking-widest mb-4">
            Our Mission
          </p>
          <p className="text-2xl text-slate-700 italic leading-relaxed font-medium">
            Empower people to become AI and Agentic AI engineers through structured, modern, and accessible learning.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 mt-6 border-l-8 border-blue-400 shadow-sm border-y border-r border-slate-200">
          <p className="text-sm text-blue-500 font-black uppercase tracking-widest mb-4">
            Our Vision
          </p>
          <p className="text-xl text-slate-700 leading-relaxed font-medium">
            To be the global standard for AI engineering education, where anyone with a passion for technology can master the tools needed to shape an autonomous future.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-black text-3xl text-slate-900 text-center mb-12 uppercase tracking-widest">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-600 shadow-lg shadow-blue-600/20 text-white`}>
                  {value.icon}
                </div>
                <h3 className="font-black text-slate-900 text-lg">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-black text-3xl text-slate-900 text-center mb-12 uppercase tracking-widest">
          Meet Our Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-xl p-8 text-center border border-slate-200 shadow-sm group hover:border-blue-300 transition-all">
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="rounded-full w-24 h-24 mx-auto object-cover border-4 border-blue-50 group-hover:scale-110 transition-transform shadow-md" 
              />
              <h3 className="font-black text-slate-900 text-xl mt-6">
                {instructor.name}
              </h3>
              <p className="text-blue-600 font-bold text-sm">
                {instructor.role}
              </p>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed font-medium">
                {instructor.bio}
              </p>
              <span className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full mt-6 inline-block font-black border border-slate-200 uppercase tracking-wider">
                {instructor.experience} Experience
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-black text-4xl text-white mb-2">
                {stat.value}
              </p>
              <p className="text-blue-100 font-bold uppercase text-xs tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-black text-3xl text-slate-900 mb-8">
            Start Learning Today
          </h2>
          <Link 
            href="/courses" 
            className="bg-blue-600 text-white font-black px-12 py-5 rounded-xl text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 inline-block"
          >
            Explore Courses
          </Link>
        </div>
      </section>
    </main>
  );
}
