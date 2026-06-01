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
    <main className="flex-grow bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-slate-50 py-24 px-4 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-black text-5xl text-slate-900">Get In Touch</h1>
          <p className="text-slate-500 text-xl mt-4 max-w-2xl mx-auto font-medium">
            Have questions about our courses or need help with your AI learning journey? We're here to help.
          </p>
        </div>
      </section>

      {/* TWO COLUMN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT FORM COLUMN */}
        <div>
          <h2 className="font-black text-2xl text-slate-900 mb-6">Send Us a Message</h2>
          
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow-sm">
              <CheckCircle size={48} className="text-green-600 mx-auto" />
              <h3 className="font-black text-slate-900 text-xl mt-4">Message Sent</h3>
              <p className="text-slate-500 mt-2 font-medium">
                Thank you for reaching out! Our team will get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-blue-600 hover:text-blue-700 font-bold underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-slate-500 text-sm mb-1 block font-bold uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 mt-1 transition-colors shadow-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-slate-500 text-sm mb-1 block font-bold uppercase tracking-wider">Your Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 mt-1 transition-colors shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-slate-500 text-sm mb-1 block font-bold uppercase tracking-wider">Learning Goal</label>
                <select
                  required
                  className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 mt-1 transition-colors appearance-none shadow-sm font-medium"
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
                <label className="text-slate-500 text-sm mb-1 block font-bold uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 mt-1 transition-colors resize-none shadow-sm"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-black py-4 rounded-xl mt-4 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* RIGHT INFO COLUMN */}
        <div>
          <h2 className="font-black text-2xl text-slate-900 mb-6">Contact Information</h2>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-xl p-6 flex items-start gap-4 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="font-black text-slate-900 text-lg">Email Us</p>
                <p className="text-slate-500 font-medium">support@agentiq.com</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-start gap-4 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="font-black text-slate-900 text-lg">Discord Community</p>
                <p className="text-slate-500 font-medium">Join our Discord server</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-start gap-4 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <FaTwitter className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="font-black text-slate-900 text-lg">Twitter</p>
                <p className="text-slate-500 font-medium">@AgentIQ</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 flex items-start gap-4 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Clock className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="font-black text-slate-900 text-lg">Response Time</p>
                <p className="text-slate-500 font-medium">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 pb-24 pt-8">
        <h2 className="font-black text-3xl text-slate-900 text-center mb-12 uppercase tracking-widest">Frequently Asked Questions</h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <button 
                  className="w-full flex justify-between items-center p-6 text-slate-900 font-black text-left hover:bg-slate-50 transition-colors"
                  onClick={() => handleFaqToggle(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-blue-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-100 pt-4 font-medium">
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
