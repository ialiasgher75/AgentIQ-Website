"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, ExternalLink } from "lucide-react";
import Link from "next/link";
import { courses } from "@/lib/data";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  link?: { label: string; href: string };
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi! I'm your Course Assistant. Ask me about any course or tell me your interest and I'll suggest the best one for you!",
    sender: "bot",
  },
];

const getBotResponse = (userMessage: string): { text: string; link?: { label: string; href: string } } => {
  const input = userMessage.toLowerCase();
  
  // 1. List all courses
  if (input.includes("all courses") || input.includes("list") || input.includes("what courses")) {
    const list = courses.map(c => `• ${c.title}`).join("\n");
    return { 
      text: `We have ${courses.length} courses available:\n${list}\n\nWhich one would you like to know more about?` 
    };
  }

  // 2. Beginner specific
  if (input.includes("beginner") || input.includes("start") || input.includes("easy")) {
    const beginnerCourse = courses.find(c => c.level === "Beginner");
    if (beginnerCourse) {
      return {
        text: `For beginners, I highly recommend "${beginnerCourse.title}". It's ${beginnerCourse.price} and perfect for getting started.`,
        link: { label: "View Course", href: `/courses/${beginnerCourse.slug}` }
      };
    }
  }

  // 3. Fee / Price
  if (input.includes("fee") || input.includes("price") || input.includes("cost") || input.includes("how much")) {
    return { text: "We have both free and paid courses. For example, our 'Introduction to AI' is completely Free! Other professional courses range from $29 to $99." };
  }

  // 4. Recommendation based on interest
  const interests = [
    { keys: ["python", "programming", "code"], slug: "python-for-ml" },
    { keys: ["agent", "autonomous", "orchestration"], slug: "build-ai-agents-with-langchain" },
    { keys: ["llm", "gpt", "prompt", "chatgpt"], slug: "prompt-engineering-mastery" },
    { keys: ["data", "rag", "vector"], slug: "vector-databases-and-rag" },
    { keys: ["deploy", "api", "fastapi", "docker"], slug: "ai-deployment-with-fastapi" },
  ];

  for (const item of interests) {
    if (item.keys.some(k => input.includes(k))) {
      const suggested = courses.find(c => c.slug === item.slug);
      if (suggested) {
        return {
          text: `Based on your interest, you should check out "${suggested.title}". It covers ${suggested.skills.slice(0, 3).join(", ")}.`,
          link: { label: "Learn More", href: `/courses/${suggested.slug}` }
        };
      }
    }
  }

  // 5. Specific course details
  for (const course of courses) {
    if (input.includes(course.title.toLowerCase()) || input.includes(course.slug.replace(/-/g, " "))) {
      return {
        text: `"${course.title}" is an ${course.level} level course that takes ${course.duration}. You'll learn: ${course.curriculum.slice(0, 3).join(", ")} and more.`,
        link: { label: "Enroll Now", href: `/courses/${course.slug}` }
      };
    }
  }

  // 6. Background/Goal helper
  if (input.includes("help me decide") || input.includes("recommend")) {
    return { text: "I'd love to help! To suggest the best path, what is your current background (e.g., student, developer) and what is your main goal?" };
  }

  // 7. Unrelated fallback
  return { text: "I can only help you with course-related questions. Ask me about our courses or tell me what you want to learn!" };
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userMsg.text);
      const botMsg: Message = {
        id: Date.now() + 1,
        text: response.text,
        sender: "bot",
        link: response.link,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">AgentBot</p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-white text-[10px] uppercase font-bold tracking-tighter">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-1 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
            {messages.map((m) => (
              <div 
                key={m.id} 
                className={`flex ${m.sender === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div 
                  className={`flex flex-col gap-2 max-w-[85%] ${m.sender === "bot" ? "items-start" : "items-end"}`}
                >
                  <span 
                    className={`px-4 py-2 text-sm shadow-sm whitespace-pre-wrap ${
                      m.sender === "bot" 
                        ? "bg-slate-100 text-slate-700 rounded-2xl rounded-tl-sm border border-slate-200" 
                        : "bg-blue-600 text-white rounded-2xl rounded-tr-sm"
                    }`}
                  >
                    {m.text}
                  </span>
                  {m.link && (
                    <Link 
                      href={m.link.href}
                      className="flex items-center gap-1.5 text-xs font-black text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 transition-colors"
                    >
                      {m.link.label} <ExternalLink size={12} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-700 rounded-2xl rounded-tl-sm px-4 py-3 text-sm border border-slate-200">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input bar */}
          <div className="border-t border-slate-200 p-3 flex gap-2 bg-slate-50">
            <input
              type="text"
              className="flex-1 bg-white text-slate-900 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-blue-600 border border-slate-200 placeholder-slate-400 transition-colors"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-2 transition shadow-lg shadow-blue-600/20 active:scale-90 flex-shrink-0"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 shadow-blue-600/30"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Bot size={24} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
