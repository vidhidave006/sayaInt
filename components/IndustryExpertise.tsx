import {
  Building2,
  CalendarCheck,
  ShoppingCart,
  Landmark,
  HeartPulse,
  Plane,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function IndustryExpertise() {
  const industries = [
    {
      icon: Building2,
      name: "Real Estate & Properties",
      description: "Pre-sales lead qualification, site visit scheduling, buyer follow-ups, and developer CRM updates.",
      color: "bg-sky-50 text-sky-600 border-sky-100",
    },
    {
      icon: CalendarCheck,
      name: "Event Management & Ticketing",
      description: "Exhibition visitor invites, VIP delegate RSVP confirmations, sponsor outreach, and ticketing support.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      icon: ShoppingCart,
      name: "E-Commerce & Retail",
      description: "Cash-on-delivery (COD) order confirmations, abandoned cart recovery calls, and customer return inquiries.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      icon: Landmark,
      name: "BFSI & Fintech",
      description: "Loan eligibility verification, insurance renewal reminders, KYC assistance, and credit card sales outreach.",
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: HeartPulse,
      name: "Healthcare & Pharma",
      description: "Patient appointment scheduling, diagnostic center inquiries, diagnostic follow-ups, and feedback surveys.",
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      icon: Plane,
      name: "Travel & Hospitality",
      description: "Hotel booking confirmations, holiday tour package tele-sales, itinerary assistance, and VIP concierge.",
      color: "bg-teal-50 text-teal-600 border-teal-100",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3.5 py-1.5 rounded-full">
            Vertical Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Tailored Industry Expertise
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Our telecalling agents and process leaders bring domain-specific expertise to elevate customer experience and maximize conversion rates across key business sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color} mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  <span>Explore industry solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
