import { roadmapStages } from "@/lib/data";
import RoadmapStep from "@/components/RoadmapStep";
import Link from "next/link";

export default function RoadmapPage() {
  const tools = [
    { name: "Python", color: "bg-indigo-500" },
    { name: "LangChain", color: "bg-cyan-500" },
    { name: "OpenAI", color: "bg-green-500" },
    { name: "AutoGen", color: "bg-amber-500" },
    { name: "CrewAI", color: "bg-purple-500" },
    { name: "HuggingFace", color: "bg-orange-500" },
    { name: "FastAPI", color: "bg-teal-500" },
    { name: "Docker", color: "bg-blue-500" },
  ];

  return (
    <main className="flex-grow bg-slate-900 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-900 via-slate-900 to-cyan-900 py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-black text-5xl md:text-6xl text-white">
            Your AI Engineer Roadmap
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            A structured path from Python basics to mastering Agentic AI systems. 
            Follow this roadmap to build a world-class career in artificial intelligence.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <span className="bg-indigo-900/50 border border-indigo-500/50 text-indigo-300 text-sm px-6 py-2 rounded-full font-bold">
              4 Stages
            </span>
            <span className="bg-cyan-900/50 border border-cyan-500/50 text-cyan-300 text-sm px-6 py-2 rounded-full font-bold">
              16+ Core Topics
            </span>
          </div>
        </div>
      </section>

      {/* ROADMAP STEPS */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="font-black text-3xl text-white text-center mb-16 uppercase tracking-widest">
          Your Learning Path
        </h2>
        <div>
          {roadmapStages.map((stage, index) => (
            <RoadmapStep key={stage.stage} stage={stage} index={index} />
          ))}
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="bg-slate-800/30 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-black text-3xl text-white text-center mb-12 uppercase tracking-widest">
            Tools and Frameworks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div 
                key={tool.name} 
                className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-700 transition cursor-pointer border border-slate-700/50 hover:border-indigo-500/30 shadow-lg group"
              >
                <div className={`w-3 h-3 rounded-full mx-auto mb-4 ${tool.color} shadow-lg shadow-${tool.color.split('-')[1]}-500/50 group-hover:scale-125 transition-transform`} />
                <p className="font-bold text-white text-lg">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4 bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-3xl text-white mb-8">
            Ready to Start Your Journey?
          </h2>
          <Link 
            href="/courses" 
            className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-black px-12 py-5 rounded-xl text-xl hover:opacity-90 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 inline-block"
          >
            Start From Stage 1
          </Link>
          <p className="text-gray-500 mt-6 text-sm">
            No prior AI experience required to begin.
          </p>
        </div>
      </section>
    </main>
  );
}
