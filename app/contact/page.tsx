"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { Mail, MessageCircle, Clock, ChevronDown, CheckCircle } from "lucide-react";
import { FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const handleFaqToggle = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="flex-grow bg-slate-900 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-900 via-slate-900 to-cyan-900 py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-black text-5xl text-white">Get In Touch</h1>
          <p className="text-gray-400 text-xl mt-4 max-w-2xl mx-auto">
            Have questions about our courses or need help with your AI learning journey? We're here to help.
          </p>
        </div>
      </section>

      {/* TWO COLUMN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT FORM COLUMN */}
        <div>
          <h2 className="font-black text-2xl text-white mb-6">Send Us a Message</h2>
          
          {submitted ? (
            <div className="bg-green-900/50 border border-green-500 rounded-xl p-8 text-center shadow-xl shadow-green-500/10">
              <CheckCircle size={48} className="text-green-400 mx-auto" />
              <h3 className="font-bold text-white text-xl mt-4">Message Sent</h3>
              <p className="text-gray-400 mt-2">
                Thank you for reaching out! Our team will get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-indigo-400 hover:text-indigo-300 font-semibold underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 mt-1 transition-colors"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-1 block">Your Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 mt-1 transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-1 block">Learning Goal</label>
                <select
                  required
                  className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 mt-1 transition-colors appearance-none"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                >
                  <option value="">Select your goal</option>
                  <option value="Beginner AI">Beginner AI</option>
                  <option value="ML Engineer">ML Engineer</option>
                  <option value="LLM Engineer">LLM Engineer</option>
                  <option value="Agentic AI Engineer">Agentic AI Engineer</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-1 block">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 mt-1 transition-colors resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold py-3 rounded-xl mt-4 hover:opacity-90 transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* RIGHT INFO COLUMN */}
        <div>
          <h2 className="font-black text-2xl text-white mb-6">Contact Information</h2>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-slate-800 rounded-xl p-6 flex items-start gap-4 border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
                <Mail className="text-indigo-400" size={24} />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Email Us</p>
                <p className="text-gray-400">support@agentiq.com</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 flex items-start gap-4 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-900/50 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-cyan-400" size={24} />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Discord Community</p>
                <p className="text-gray-400">Join our Discord server</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 flex items-start gap-4 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                <FaTwitter className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Twitter</p>
                <p className="text-gray-400">@AgentIQ</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 flex items-start gap-4 border border-slate-700/50 hover:border-amber-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-900/50 flex items-center justify-center flex-shrink-0">
                <Clock className="text-amber-400" size={24} />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Response Time</p>
                <p className="text-gray-400">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 pb-24 pt-8">
        <h2 className="font-black text-3xl text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700/50">
                <button 
                  className="w-full flex justify-between items-center p-5 text-white font-semibold text-left hover:bg-slate-700/50 transition-colors"
                  onClick={() => handleFaqToggle(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-indigo-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-slate-700/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
