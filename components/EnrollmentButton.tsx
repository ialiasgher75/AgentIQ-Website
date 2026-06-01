"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Course } from "@/lib/data";
import EnrollmentModal from "./EnrollmentModal";

interface EnrollmentButtonProps {
  course: Course;
}

const EnrollmentButton = ({ course }: EnrollmentButtonProps) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
      <button 
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-blue-600 text-white font-black py-4 rounded-xl text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
      >
        Enroll Now
      </button>

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

export default EnrollmentButton;
