"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi, I am AgentBot! Ask me anything about AI, machine learning, or becoming an Agentic AI engineer.",
    sender: "bot",
  },
];

const getDummyResponse = (userMessage: string): string => {
  const input = userMessage.toLowerCase();

  if (input.includes("course") || input.includes("learn")) {
    return "We have 8 courses from AI Fundamentals to Agentic AI. Check the Courses page to find your perfect starting point!";
  }
  if (input.includes("roadmap") || input.includes("path") || input.includes("start")) {
    return "Our roadmap goes AI Beginner to ML Engineer to LLM Engineer to Agentic AI Engineer. Visit the Roadmap page for the full guide!";
  }
  if (input.includes("agentic") || input.includes("agent")) {
    return "Agentic AI is the hottest skill of 2026. Agents can plan, use tools, and act autonomously. We have dedicated courses just for this!";
  }
  if (input.includes("llm") || input.includes("gpt") || input.includes("openai")) {
    return "Our LLM Engineering course covers OpenAI, prompt engineering, RAG, and fine-tuning!";
  }
  if (input.includes("price") || input.includes("free") || input.includes("cost")) {
    return "We have both free and paid courses. Several fundamentals courses are completely free to get you started!";
  }

  return "Great question! I recommend starting with AI Fundamentals and following the Roadmap. Our instructors are always here to help!";
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

    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getDummyResponse(userMessage.text),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 500);
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
        <div className="w-80 h-96 bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 p-4 flex items-center justify-between shadow-lg">
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
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.map((m) => (
              <div 
                key={m.id} 
                className={`flex ${m.sender === "bot" ? "justify-start" : "justify-end"}`}
              >
                <span 
                  className={`px-4 py-2 text-sm max-w-[85%] shadow-sm ${
                    m.sender === "bot" 
                      ? "bg-slate-800 text-gray-300 rounded-2xl rounded-tl-sm border border-slate-700" 
                      : "bg-indigo-600 text-white rounded-2xl rounded-tr-sm"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-gray-300 rounded-2xl rounded-tl-sm px-4 py-3 text-sm border border-slate-700">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input bar */}
          <div className="border-t border-slate-700 p-3 flex gap-2 bg-slate-900/50">
            <input
              type="text"
              className="flex-1 bg-slate-800 text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 border border-slate-700 placeholder-gray-500 transition-colors"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
            />
            <button 
              onClick={handleSend}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl p-2 transition shadow-lg shadow-indigo-600/20 active:scale-90 flex-shrink-0"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 shadow-indigo-600/30"
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
