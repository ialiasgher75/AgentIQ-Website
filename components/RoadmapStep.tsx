import { RoadmapStage } from "@/lib/data";

interface RoadmapStepProps {
  stage: RoadmapStage;
  index: number;
}

const RoadmapStep = ({ stage, index }: RoadmapStepProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-start gap-6 mb-12 ${isEven ? "" : "md:flex-row-reverse"}`}>
      {/* Left part: Number Circle and Connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-indigo-500/20">
          {stage.stage}
        </div>
        <div className="w-1 h-16 bg-gradient-to-b from-indigo-600 to-transparent mt-2 hidden md:block" />
      </div>

      {/* Right card: Content */}
      <div className="bg-slate-800 rounded-xl p-6 flex-1 shadow-lg border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
        <h3 className="font-black text-white text-xl mb-2">
          {stage.title}
        </h3>
        
        <p className="text-gray-400 mb-4 leading-relaxed">
          {stage.description}
        </p>

        {/* Topics section */}
        <div className="mb-4">
          <p className="text-indigo-400 font-semibold text-sm mb-2 uppercase tracking-wider">
            Topics
          </p>
          <div className="flex flex-wrap gap-2">
            {stage.topics.map((topic, i) => (
              <span 
                key={i} 
                className="bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded-full border border-indigo-500/20"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Tools section */}
        <div>
          <p className="text-cyan-400 font-semibold text-sm mb-2 mt-4 uppercase tracking-wider">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {stage.tools.map((tool, i) => (
              <span 
                key={i} 
                className="bg-cyan-900/50 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-500/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapStep;
