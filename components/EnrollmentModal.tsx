"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, CreditCard, Smartphone, Building, Lock, Upload, ChevronLeft } from "lucide-react";
import { Course } from "@/lib/data";

interface EnrollmentModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (isPaid: boolean) => void;
}

type Step = "info" | "payment";
type PaymentMethod = "card" | "wallet" | "bank";

const EnrollmentModal = ({ course, isOpen, onClose, onSuccess }: EnrollmentModalProps) => {
  const [step, setStep] = useState<Step>("info");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    reason: "",
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
    walletNumber: "",
    receipt: null as File | null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep("info");
      setPaymentMethod("card");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        education: "",
        reason: "",
      });
      setPaymentData({
        cardNumber: "",
        expiry: "",
        cvv: "",
        cardName: "",
        walletNumber: "",
        receipt: null,
      });
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateInfo = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.education) newErrors.education = "Education level is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors: { [key: string]: string } = {};
    if (paymentMethod === "card") {
      if (!paymentData.cardNumber.trim()) newErrors.cardNumber = "Card number is required";
      if (!paymentData.expiry.trim()) newErrors.expiry = "Expiry is required";
      if (!paymentData.cvv.trim()) newErrors.cvv = "CVV is required";
      if (!paymentData.cardName.trim()) newErrors.cardName = "Cardholder name is required";
    } else if (paymentMethod === "wallet") {
      if (!paymentData.walletNumber.trim()) newErrors.walletNumber = "Mobile number is required";
    } else if (paymentMethod === "bank") {
      if (!paymentData.receipt) newErrors.receipt = "Please upload payment receipt";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEnrollmentComplete = (isPaid: boolean) => {
    // 1. Save User Info
    const userInfo = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      education: formData.education
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // 2. Save Enrolled Course
    const saved = localStorage.getItem("enrolledCourses");
    let enrolled = [];
    if (saved) {
      try {
        enrolled = JSON.parse(saved);
      } catch (e) {}
    }
    
    // Avoid duplicates
    if (!enrolled.find((c: any) => c.slug === course.slug)) {
      enrolled.push({
        slug: course.slug,
        progress: 0,
        enrolledAt: new Date().toISOString()
      });
      localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
    }

    // 3. Trigger parent success (toast etc)
    onSuccess(isPaid);
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInfo()) {
      if (course.price === "Free") {
        setIsSubmitting(true);
        setTimeout(() => {
          setIsSubmitting(false);
          handleEnrollmentComplete(false);
        }, 800);
      } else {
        setStep("payment");
        setErrors({});
      }
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePayment()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        handleEnrollmentComplete(true);
      }, 1500);
    }
  };

  const inputClass = (fieldName: string) => `
    w-full bg-white border rounded-xl px-4 py-3 focus:outline-none transition-colors shadow-sm
    ${errors[fieldName] ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-blue-600"}
  `;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 relative">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
          <div className="flex items-center gap-3">
            {step === "payment" && (
              <button 
                onClick={() => setStep("info")}
                className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-600"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            <div>
              <h2 className="text-xl font-black text-slate-900 leading-tight">
                {step === "info" ? "Enroll in Course" : "Secure Checkout"}
              </h2>
              <p className="text-blue-600 font-bold text-sm mt-0.5">
                {course.title} • <span className={course.price === "Free" ? "text-green-600" : "text-blue-600"}>{course.price}</span>
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {step === "info" ? (
          /* STEP 1: INFO FORM */
          <form onSubmit={handleInfoSubmit} className="p-6 space-y-4">
            <div>
              <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">Full Name *</label>
              <input
                type="text"
                className={inputClass("fullName")}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1 font-bold">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">Email Address *</label>
                <input
                  type="email"
                  className={inputClass("email")}
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
              </div>
              <div>
                <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">Phone Number *</label>
                <input
                  type="tel"
                  className={inputClass("phone")}
                  placeholder="e.g. +92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">Education Level *</label>
              <select
                className={inputClass("education")}
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              >
                <option value="">Select your education</option>
                <option value="Matric">Matric</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="Other">Other</option>
              </select>
              {errors.education && <p className="text-red-500 text-xs mt-1 font-bold">{errors.education}</p>}
            </div>

            <div>
              <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">Why do you want to join? (Optional)</label>
              <textarea
                rows={3}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors shadow-sm resize-none text-sm"
                placeholder="Tell us about your goals..."
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-black py-4 rounded-xl text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : null}
              {course.price === "Free" ? "Confirm Enrollment" : "Continue to Payment"}
            </button>
          </form>
        ) : (
          /* STEP 2: PAYMENT FORM */
          <form onSubmit={handlePaymentSubmit} className="p-6 space-y-6">
            {/* Method Selector */}
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`flex-1 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${paymentMethod === "card" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                <CreditCard size={14} /> Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("wallet")}
                className={`flex-1 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${paymentMethod === "wallet" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                <Smartphone size={14} /> Wallet
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("bank")}
                className={`flex-1 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${paymentMethod === "bank" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                <Building size={14} /> Bank
              </button>
            </div>

            {/* Method Forms */}
            <div className="min-h-[220px]">
              {paymentMethod === "card" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div>
                    <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-3.5 text-slate-400" size={18} />
                      <input
                        type="text"
                        className={`${inputClass("cardNumber")} pl-12`}
                        placeholder="XXXX XXXX XXXX XXXX"
                        maxLength={19}
                        value={paymentData.cardNumber}
                        onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim() })}
                      />
                    </div>
                    {errors.cardNumber && <p className="text-red-500 text-xs mt-1 font-bold">{errors.cardNumber}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">Expiry Date</label>
                      <input
                        type="text"
                        className={inputClass("expiry")}
                        placeholder="MM/YY"
                        maxLength={5}
                        value={paymentData.expiry}
                        onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value.replace(/\D/g, '').replace(/(.{2})/g, '$1/').replace(/\/$/, '') })}
                      />
                      {errors.expiry && <p className="text-red-500 text-xs mt-1 font-bold">{errors.expiry}</p>}
                    </div>
                    <div>
                      <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">CVV</label>
                      <input
                        type="password"
                        className={inputClass("cvv")}
                        placeholder="123"
                        maxLength={3}
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value.replace(/\D/g, '') })}
                      />
                      {errors.cvv && <p className="text-red-500 text-xs mt-1 font-bold">{errors.cvv}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">Cardholder Name</label>
                    <input
                      type="text"
                      className={inputClass("cardName")}
                      placeholder="Name on card"
                      value={paymentData.cardName}
                      onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                    />
                    {errors.cardName && <p className="text-red-500 text-xs mt-1 font-bold">{errors.cardName}</p>}
                  </div>
                </div>
              )}

              {paymentMethod === "wallet" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-sm text-blue-700 font-medium">
                    You will receive a payment request on your mobile number. Please approve it from your app or by dialing the USSD code.
                  </div>
                  <div>
                    <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">Mobile Number (EasyPaisa/JazzCash)</label>
                    <input
                      type="tel"
                      className={inputClass("walletNumber")}
                      placeholder="03XX XXXXXXX"
                      value={paymentData.walletNumber}
                      onChange={(e) => setPaymentData({ ...paymentData, walletNumber: e.target.value })}
                    />
                    {errors.walletNumber && <p className="text-red-500 text-xs mt-1 font-bold">{errors.walletNumber}</p>}
                  </div>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bank Account Details</p>
                    <div className="text-sm font-bold text-slate-700">
                      <p>Bank: Meezan Bank Ltd</p>
                      <p>Account: AgentIQ Education</p>
                      <p>IBAN: PK72 MEZN 0000 1234 5678 9012</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1.5 block">Upload Payment Receipt</label>
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 text-slate-400 mb-2" />
                        <p className="text-xs text-slate-500 font-bold">
                          {paymentData.receipt ? paymentData.receipt.name : "Click to upload screenshot"}
                        </p>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={(e) => setPaymentData({ ...paymentData, receipt: e.target.files?.[0] || null })}
                      />
                    </label>
                    {errors.receipt && <p className="text-red-500 text-xs mt-1 font-bold">{errors.receipt}</p>}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center text-slate-900">
                <span className="font-bold">Total Amount:</span>
                <span className="text-xl font-black">{course.price}</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-black py-4 rounded-xl text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Pay Now & Confirm</>
                )}
              </button>
              <div className="flex items-center justify-center gap-1.5 text-slate-400">
                <Lock size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Secure 256-bit SSL Payment</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnrollmentModal;
