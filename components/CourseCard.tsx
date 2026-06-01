"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Clock, BookOpen, Star, CheckCircle } from "lucide-react";
import { Course } from "@/lib/data";
import EnrollmentModal from "./EnrollmentModal";
import SafeImage from "./SafeImage";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-blue-600";
    }
  };

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleEnrollSuccess = (isPaid: boolean) => {
    setIsModalOpen(false);
    if (!isPaid) {
      setSuccessMessage("Enrollment successful! We'll contact you soon.");
    } else {
      setSuccessMessage("Payment received! Check your email for confirmation.");
    }
    setShowSuccess(true);
    
    // Redirect to dashboard after a delay
    setTimeout(() => {
      setShowSuccess(false);
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <>
      <Link 
        href={`/courses/${course.slug}`}
        className="block bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:scale-105 transition-transform duration-300 hover:shadow-blue-600/10 group relative"
      >
        <div className="relative aspect-video overflow-hidden bg-slate-100">
          <SafeImage 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover"
            fallbackText="Image Not Found"
          />
          <div className="absolute top-3 right-3">
            <span className={`${getLevelBadgeClass(course.level)} text-white text-xs font-black px-2 py-1 rounded-full uppercase tracking-tighter`}>
              {course.level}
            </span>
          </div>
        </div>

        <div className="p-5">
          <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-black uppercase tracking-wider">
            {course.category}
          </span>

          <h3 className="font-black text-slate-900 text-lg mt-3 leading-tight group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>

          <p className="text-slate-500 text-sm mt-1 font-medium">
            By {course.instructor}
          </p>

          <div className="flex gap-4 mt-3">
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-slate-400" />
              <span className="text-slate-500 text-sm font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen size={14} className="text-slate-400" />
              <span className="text-slate-500 text-sm font-medium">{course.lessons} Lessons</span>
            </div>
          </div>

          <div className="flex items-center gap-1 mt-2">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-slate-600 text-sm font-black">{course.rating}</span>
          </div>

          <div>
            {course.price === "Free" ? (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black mt-3 inline-block uppercase tracking-wider">
                Free
              </span>
            ) : (
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-black mt-3 inline-block uppercase tracking-wider">
                {course.price}
              </span>
            )}
          </div>

          <button 
            onClick={handleEnrollClick}
            className="mt-4 w-full bg-blue-600 text-white text-center font-black py-2 rounded-lg text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-600/10 active:scale-95"
          >
            Enroll Now
          </button>
        </div>
      </Link>

      <EnrollmentModal 
        course={course}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleEnrollSuccess}
      />

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle size={20} />
          <p className="font-bold text-sm md:text-base text-center">{successMessage}</p>
        </div>
      )}
    </>
  );
};

export default CourseCard;
