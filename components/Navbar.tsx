"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const linkClass = "text-gray-300 hover:text-white transition-colors duration-200";

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side: Logo */}
        <Link 
          href="/" 
          className="font-black text-2xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
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
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Start Learning
          </Link>
        </div>

        {/* Right side mobile: Toggle button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 flex flex-col gap-4">
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
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200 text-center"
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
