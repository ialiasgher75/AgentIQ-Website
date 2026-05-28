import Link from "next/link";
import { Clock, BookOpen, Star } from "lucide-react";
import { Course } from "@/lib/data";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-indigo-500";
    }
  };

  return (
    <Link 
      href={`/courses/${course.slug}`}
      className="block bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-indigo-500/20 group"
    >
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`${getLevelBadgeClass(course.level)} text-white text-xs font-bold px-2 py-1 rounded-full`}>
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-5">
        <span className="text-xs bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full font-medium">
          {course.category}
        </span>

        <h3 className="font-bold text-white text-lg mt-3 leading-tight group-hover:text-indigo-400 transition-colors">
          {course.title}
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          By {course.instructor}
        </p>

        <div className="flex gap-4 mt-3">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-gray-400" />
            <span className="text-gray-400 text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} className="text-gray-400" />
            <span className="text-gray-400 text-sm">{course.lessons} Lessons</span>
          </div>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <Star size={14} className="text-amber-400 fill-amber-400" />
          <span className="text-gray-300 text-sm">{course.rating}</span>
        </div>

        <div>
          {course.price === "Free" ? (
            <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-xs font-bold mt-3 inline-block">
              Free
            </span>
          ) : (
            <span className="bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold mt-3 inline-block">
              {course.price}
            </span>
          )}
        </div>

        <div className="mt-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-center font-semibold py-2 rounded-lg text-sm group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all">
          Enroll Now
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
