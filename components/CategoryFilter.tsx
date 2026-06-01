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
              px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200
              ${isSelected 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                : "bg-white text-slate-500 border border-slate-200 hover:border-blue-600 hover:text-blue-600"
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
