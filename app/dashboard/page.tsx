"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  Settings, 
  LogOut, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  Download,
  User as UserIcon
} from "lucide-react";
import { courses as allCourses, Course } from "@/lib/data";
import SafeImage from "@/components/SafeImage";

type Section = "overview" | "courses" | "certificates" | "profile";

interface EnrolledCourse extends Course {
  progress: number;
  enrolledAt: string;
  isCompleted: boolean;
}

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
  const [user, setUser] = useState({
    fullName: "Student",
    email: "student@example.com",
    phone: "",
    education: ""
  });

  useEffect(() => {
    // Load enrolled courses from localStorage
    const saved = localStorage.getItem("enrolledCourses");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const fullData = parsed.map((item: { slug: string, progress?: number, enrolledAt?: string }) => {
          const course = allCourses.find(c => c.slug === item.slug);
          if (!course) return null;
          return {
            ...course,
            progress: item.progress ?? 0,
            enrolledAt: item.enrolledAt ?? new Date().toISOString(),
            isCompleted: (item.progress ?? 0) >= 100
          };
        }).filter(Boolean) as EnrolledCourse[];
        setEnrolledCourses(fullData);
      } catch (e) {
        console.error("Failed to parse enrolled courses", e);
      }
    }
    
    // Load user info
    const savedUser = localStorage.getItem("userInfo");
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed.fullName) setUser(parsed);
      } catch (e) {}
    }
  }, []);

  const stats = [
    { label: "Enrolled Courses", value: enrolledCourses.length, icon: <BookOpen className="text-blue-600" /> },
    { label: "Completed Courses", value: enrolledCourses.filter(c => c.isCompleted).length, icon: <CheckCircle2 className="text-green-600" /> },
    { label: "Certificates Earned", value: enrolledCourses.filter(c => c.isCompleted).length, icon: <Award className="text-amber-600" /> },
    { label: "Hours Learned", value: enrolledCourses.length * 2, icon: <Clock className="text-purple-600" /> },
  ];

  const sidebarLinks = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={20} /> },
    { id: "courses", label: "My Courses", icon: <BookOpen size={20} /> },
    { id: "certificates", label: "Certificates", icon: <Award size={20} /> },
    { id: "profile", label: "Profile Settings", icon: <Settings size={20} /> },
  ];

  const renderOverview = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Welcome back, {user.fullName.split(' ')[0]}!</h1>
        <p className="text-slate-500 font-medium mt-1">You're making great progress. Keep it up!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[12px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4">
              {stat.icon}
            </div>
            <p className="text-2xl font-black text-slate-900">{stat.value}</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
          <Clock className="text-blue-600" /> Recently Accessed
        </h2>
        {enrolledCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.slice(0, 2).map((course) => (
              <div key={course.id} className="bg-white rounded-[12px] border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row group hover:border-blue-300 transition-colors">
                <div className="w-full md:w-40 h-32 md:h-auto overflow-hidden">
                  <SafeImage src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between text-xs font-bold text-slate-500">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                      <div className="h-full bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)] transition-all duration-1000" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                  <Link href={`/courses/${course.slug}`} className="mt-4 text-blue-600 text-sm font-black flex items-center gap-1 hover:underline">
                    Continue Learning <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[12px] border border-dashed border-slate-300 p-12 text-center">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-bold">You haven't enrolled in any courses yet.</p>
            <Link href="/courses" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-black text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
              Explore Courses
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black text-slate-900">My Courses</h1>
        <p className="text-slate-500 font-medium mt-1">Manage and track your learning journey.</p>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-[12px] border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:border-blue-300 transition-colors">
              <div className="relative h-40 overflow-hidden">
                <SafeImage src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white ${course.isCompleted ? "bg-green-500" : "bg-blue-500"}`}>
                    {course.isCompleted ? "Completed" : "In Progress"}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-slate-900 leading-tight mb-4 flex-grow">{course.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>Course Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div className="h-full bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)] transition-all duration-1000" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>
                <Link 
                  href={`/courses/${course.slug}`} 
                  className="w-full bg-blue-600 text-white text-center font-black py-2.5 rounded-lg text-sm hover:bg-blue-700 transition active:scale-95 shadow-md shadow-blue-600/10"
                >
                  Continue Learning
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[12px] border border-dashed border-slate-300 p-20 text-center">
           <BookOpen className="w-16 h-16 text-slate-200 mx-auto mb-6" />
           <h3 className="text-xl font-black text-slate-900 mb-2">No courses found</h3>
           <p className="text-slate-500 font-medium max-w-sm mx-auto mb-8">Start your AI engineering journey today by enrolling in one of our professional courses.</p>
           <Link href="/courses" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-black hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
              Browse All Courses
           </Link>
        </div>
      )}
    </div>
  );

  const renderCertificates = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Certificates</h1>
        <p className="text-slate-500 font-medium mt-1">Your hard-earned professional credentials.</p>
      </div>

      {enrolledCourses.filter(c => c.isCompleted).length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enrolledCourses.filter(c => c.isCompleted).map((course) => (
            <div key={course.id} className="bg-white rounded-[12px] border border-slate-200 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:border-amber-300 transition-colors">
              <div className="w-full sm:w-48 bg-slate-50 flex items-center justify-center p-6 border-r border-slate-100">
                <div className="w-full aspect-[4/3] border-4 border-double border-slate-200 bg-white flex flex-col items-center justify-center text-center p-2 relative shadow-inner">
                  <Award className="text-amber-500 w-8 h-8 mb-1" />
                  <p className="text-[6px] font-black uppercase text-slate-400">Certificate of Completion</p>
                  <div className="w-8 h-px bg-slate-200 my-1" />
                  <p className="text-[5px] text-slate-500">Verified by AgentIQ</p>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-slate-900 leading-tight mb-1">{course.title}</h3>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6">Issued on {new Date(course.enrolledAt).toLocaleDateString()}</p>
                <button className="mt-auto flex items-center justify-center gap-2 bg-blue-600 text-white font-black py-2.5 rounded-lg text-xs hover:bg-blue-700 transition shadow-md shadow-blue-600/10 active:scale-95">
                  <Download size={14} /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[12px] border border-slate-200 p-20 text-center flex flex-col items-center">
           <Award className="w-16 h-16 text-slate-200 mb-6" />
           <h3 className="text-xl font-black text-slate-900 mb-2">No certificates yet</h3>
           <p className="text-slate-500 font-medium max-w-sm mb-8">Complete a course with 100% progress to earn your verified professional certificate.</p>
           <button 
            onClick={() => setActiveSection("courses")}
            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-black hover:bg-slate-800 transition active:scale-95"
           >
              Check My Progress
           </button>
        </div>
      )}
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-2xl">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Profile Settings</h1>
        <p className="text-slate-500 font-medium mt-1">Manage your account information and preferences.</p>
      </div>

      <div className="bg-white rounded-[12px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-blue-600/20">
            {user.fullName.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="font-black text-slate-900 text-lg">{user.fullName}</h3>
            <p className="text-slate-500 text-sm font-medium">{user.email}</p>
          </div>
        </div>

        <form className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Full Name</label>
              <input 
                type="text" 
                defaultValue={user.fullName} 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-700 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Email Address</label>
              <input 
                type="email" 
                defaultValue={user.email} 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-700 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Phone Number</label>
              <input 
                type="tel" 
                defaultValue={user.phone} 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-700 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Education Level</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-700 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm">
                <option value="Matric" selected={user.education === "Matric"}>Matric</option>
                <option value="Intermediate" selected={user.education === "Intermediate"}>Intermediate</option>
                <option value="Bachelor's" selected={user.education === "Bachelor's"}>Bachelor's</option>
                <option value="Master's" selected={user.education === "Master's"}>Master's</option>
                <option value="Other" selected={user.education === "Other"}>Other</option>
              </select>
            </div>
          </div>

          <button type="button" className="bg-blue-600 text-white font-black px-6 py-2.5 rounded-lg text-sm hover:bg-blue-700 transition mt-2 shadow-lg shadow-blue-600/20 active:scale-95">
            Save Changes
          </button>
        </form>
      </div>

      <div className="bg-white rounded-[12px] border border-slate-200 shadow-sm overflow-hidden p-6 space-y-4">
        <h3 className="font-black text-slate-900 text-lg">Change Password</h3>
        <div className="space-y-4 max-w-sm">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Current Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-700 focus:outline-none focus:border-blue-600 focus:bg-white transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">New Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-bold text-slate-700 focus:outline-none focus:border-blue-600 focus:bg-white transition-all" />
          </div>
          <button type="button" className="text-blue-600 font-black text-sm hover:underline active:opacity-70 transition-opacity">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );

  const handleLogout = () => {
    // Clear simulation
    localStorage.removeItem("enrolledCourses");
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-[#F1F5F9] pt-[72px]">
      {/* Sidebar */}
      <aside className="w-[240px] bg-[#1E293B] fixed left-0 top-[72px] bottom-0 z-40 flex flex-col text-white shadow-2xl">
        {/* User Info */}
        <div className="p-6 border-b border-slate-700/50">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-black mb-3 shadow-lg shadow-blue-600/20">
            {user.fullName.split(' ').map(n => n[0]).join('')}
          </div>
          <p className="font-black text-sm truncate">{user.fullName}</p>
          <p className="text-[10px] font-bold text-slate-400 truncate uppercase tracking-widest">{user.email}</p>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveSection(link.id as Section)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-black transition-all ${
                activeSection === link.id 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700/50">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-black text-slate-400 hover:text-white hover:bg-red-600/20 transition-all"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[240px] p-8 min-h-full">
        <div className="max-w-6xl mx-auto">
          {activeSection === "overview" && renderOverview()}
          {activeSection === "courses" && renderCourses()}
          {activeSection === "certificates" && renderCertificates()}
          {activeSection === "profile" && renderProfile()}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
