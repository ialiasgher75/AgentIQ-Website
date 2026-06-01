import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: "#", label: "Github" },
    { icon: <FaTwitter size={20} />, href: "#", label: "Twitter" },
    { icon: <FaYoutube size={20} />, href: "#", label: "Youtube" },
    { icon: <FaLinkedin size={20} />, href: "#", label: "Linkedin" },
  ];

  return (
    <footer className="bg-slate-50 text-slate-500 mt-auto">
      {/* Top blue border */}
      <div className="h-1 bg-blue-600" />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand */}
        <div>
          <Link
            href="/"
            className="font-black text-2xl text-blue-600"
          >
            AgentIQ
          </Link>
          <p className="text-slate-900 mt-2 font-bold">
            Learn AI. Build Agents. Shape the Future.
          </p>
          <p className="text-sm mt-3 leading-relaxed">
            The ultimate platform for mastering AI engineering and building the
            next generation of autonomous systems.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-bold text-slate-900 mb-4 text-lg">Quick Links</h3>
          <div className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Community */}
        <div>
          <h3 className="font-bold text-slate-900 mb-4 text-lg">Community</h3>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors duration-200 text-slate-600"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 mt-8 pt-6 pb-8 text-center text-sm">
        <p>
          &copy; {currentYear} AgentIQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
