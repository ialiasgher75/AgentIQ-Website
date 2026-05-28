"use client";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilter = ({ categories, selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const isSelected = category === selected;
        
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`
              px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200
              ${isSelected 
                ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/20" 
                : "bg-slate-800 text-gray-400 border border-slate-600 hover:border-indigo-500 hover:text-white"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
