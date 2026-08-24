"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    if (!formData.name || !formData.email || !formData.mobile || !formData.service || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold text-emerald-900">Thank You, {formData.name}!</h4>
          <p className="text-sm text-emerald-700 leading-relaxed">
            Your message regarding <strong>{formData.service}</strong> has been received. Our team will contact you shortly.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/919890044786?text=Hello%20Saya%20Intellicall,%20Name:%20${encodeURIComponent(formData.name)},%20Service:%20${encodeURIComponent(formData.service)},%20Message:%20${encodeURIComponent(formData.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  mobile: "",
                  service: "",
                  message: "",
                });
              }}
              className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="bg-rose-50 border border-rose-200 rounded-md p-3 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Your Mobile/ Whats App"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              name="mobile"
              id="Mobile/ Whats App"
              required
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Service Requiered"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              name="service"
              id="Service"
              required
              value={formData.service}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              rows={6}
              placeholder="Message"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-y"
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div id="cf-submit">
            <input
              type="submit"
              id="contact-submit"
              className="w-full sm:w-auto px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
              value={status === "submitting" ? "Submitting..." : "Submit"}
            />
          </div>
        </form>
      )}
    </div>
  );
}
