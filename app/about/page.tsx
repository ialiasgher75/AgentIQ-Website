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
    <main className="flex-grow bg-slate-900 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-900 to-slate-900 py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-black text-5xl text-white">About AgentIQ</h1>
          <p className="text-gray-400 text-xl mt-6 leading-relaxed">
            We are on a mission to democratize AI education and empower the next generation of Agentic AI Engineers.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-slate-800 rounded-2xl p-10 border-l-4 border-indigo-500 shadow-xl">
          <p className="text-sm text-indigo-400 font-semibold uppercase tracking-wider mb-4">
            Our Mission
          </p>
          <p className="text-2xl text-gray-300 italic leading-relaxed">
            Empower people to become AI and Agentic AI engineers through structured, modern, and accessible learning.
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 mt-6 border-l-4 border-cyan-500 shadow-xl">
          <p className="text-sm text-cyan-400 font-semibold uppercase mb-4">
            Our Vision
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            To be the global standard for AI engineering education, where anyone with a passion for technology can master the tools needed to shape an autonomous future.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-slate-800/30 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-black text-3xl text-white text-center mb-12 uppercase tracking-widest">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700/50 shadow-lg hover:border-indigo-500/30 transition-colors">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${value.color} shadow-lg shadow-${value.color.split('-')[1]}-500/20 text-white`}>
                  {value.icon}
                </div>
                <h3 className="font-bold text-white text-lg">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="font-black text-3xl text-white text-center mb-12 uppercase tracking-widest">
          Meet Our Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-slate-800 rounded-xl p-8 text-center border border-slate-700/50 shadow-xl group hover:bg-slate-800/80 transition-all">
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="rounded-full w-24 h-24 mx-auto object-cover border-4 border-indigo-500/30 group-hover:scale-110 transition-transform" 
              />
              <h3 className="font-bold text-white text-xl mt-6">
                {instructor.name}
              </h3>
              <p className="text-indigo-400 font-medium text-sm">
                {instructor.role}
              </p>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {instructor.bio}
              </p>
              <span className="bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded-full mt-6 inline-block font-bold border border-indigo-500/20">
                {instructor.experience} Experience
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-indigo-900 to-cyan-900 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-black text-4xl text-white mb-2">
                {stat.value}
              </p>
              <p className="text-indigo-200 font-medium uppercase text-xs tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-black text-3xl text-white mb-8">
            Start Learning Today
          </h2>
          <Link 
            href="/courses" 
            className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-black px-12 py-5 rounded-xl text-xl hover:opacity-90 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 inline-block"
          >
            Explore Courses
          </Link>
        </div>
      </section>
    </main>
  );
}
