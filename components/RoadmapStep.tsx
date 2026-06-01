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
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-blue-600/20">
          {stage.stage}
        </div>
        <div className="w-1 h-16 bg-blue-200 mt-2 hidden md:block" />
      </div>

      {/* Right card: Content */}
      <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
        <h3 className="font-black text-slate-900 text-xl mb-2">
          {stage.title}
        </h3>
        
        <p className="text-slate-500 mb-4 leading-relaxed">
          {stage.description}
        </p>

        {/* Topics section */}
        <div className="mb-4">
          <p className="text-blue-600 font-bold text-sm mb-2 uppercase tracking-wider">
            Topics
          </p>
          <div className="flex flex-wrap gap-2">
            {stage.topics.map((topic, i) => (
              <span 
                key={i} 
                className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-100 font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Tools section */}
        <div>
          <p className="text-slate-900 font-bold text-sm mb-2 mt-4 uppercase tracking-wider">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {stage.tools.map((tool, i) => (
              <span 
                key={i} 
                className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full border border-slate-200 font-medium"
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
