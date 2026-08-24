"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Inbound Call Center",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Form validation check
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setTimeout(() => {
      setStatus("success");
      // Optional trigger WhatsApp link
      const text = `New Inquiry from ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${encodeURIComponent(formData.message)}`;
      const whatsappUrl = `https://wa.me/919890044786?text=${text}`;
      
      // We can offer user option or keep them on the thank you view
    }, 800);
  };

  const servicesList = [
    "Inbound Call Center",
    "Outbound Telecalling",
    "SMS Marketing",
    "WhatsApp Marketing",
    "Multi Level IVR",
    "BPO & Consultancy",
    "Other / Custom Solution"
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 relative">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
      <p className="text-slate-500 text-sm mb-6">
        Fill in the details below and our team will get back to you within 2 business hours.
      </p>

      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold text-emerald-900">Thank You, {formData.name}!</h4>
          <p className="text-sm text-emerald-700 leading-relaxed">
            Your message regarding <strong>{formData.service}</strong> has been received. Our team will contact you at <strong>{formData.phone}</strong> shortly.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/919890044786?text=Hello%20Saya%20Intellicall,%20I%20just%20submitted%20a%20form%20on%20your%20website%20for%20${encodeURIComponent(formData.service)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect Instantly on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  service: "Inbound Call Center",
                  message: "",
                });
              }}
              className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl text-sm font-medium transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="name">
              Your Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="email">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="e.g. rahul@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="phone">
                Mobile / WhatsApp Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="service">
              Service Required *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            >
              {servicesList.map((srv) => (
                <option key={srv} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="message">
              Your Requirements / Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell us about your business goals, target audience, volume of calls or campaign timeline..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-y"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            {status === "submitting" ? (
              <span>Sending Inquiry...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
