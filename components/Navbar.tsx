"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDashboard = () => {
      try {
        const saved = localStorage.getItem("enrolledCourses");
        if (saved) {
          const parsed = JSON.parse(saved);
          setIsEnrolled(parsed.length > 0);
        } else {
          setIsEnrolled(false);
        }
      } catch (e) {
        setIsEnrolled(false);
      }
    };
    
    checkDashboard();
    // Also listen for storage changes in other tabs
    window.addEventListener("storage", checkDashboard);
    return () => window.removeEventListener("storage", checkDashboard);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  if (isEnrolled) {
    navLinks.splice(1, 0, { name: "Dashboard", href: "/dashboard" });
  }

  const linkClass = "text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side: Logo */}
        <Link 
          href="/" 
          className="font-black text-2xl text-blue-600"
        >
          AgentIQ
        </Link>

        {/* Middle: Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={linkClass}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side desktop: CTA */}
        <div className="hidden md:block">
          <Link 
            href="/courses" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Start Learning
          </Link>
        </div>

        {/* Right side mobile: Toggle button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/courses" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200 text-center"
            onClick={() => setIsOpen(false)}
          >
            Start Learning
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
