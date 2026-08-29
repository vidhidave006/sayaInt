import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  PhoneIncoming,
  PhoneOutgoing,
  Smartphone,
  MessageSquare,
  PhoneCall,
  Briefcase,
  AlarmClock,
  BarChart3,
  FileEdit,
  Zap,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Our Services | Saya Intellicall",
  description:
    "Explore our telecalling services: Inbound Services, Outbound Services, SMS Marketing, WhatsApp Marketing, Multi Level IVR, and Consultancy.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: PhoneIncoming,
      title: "Inbound Services",
      desc: "Customers initiating contact to request support, information, or services, typically handled by an inbound call center.",
      colorBg: true,
      accent: "from-sky-500 to-blue-600",
    },
    {
      icon: PhoneOutgoing,
      title: "Outbound Services",
      desc: "Involve a company proactively reaching out to customers or prospects through channels like phone, email, or SMS.",
      colorBg: false,
      accent: "from-blue-500 to-indigo-600",
    },
    {
      icon: Smartphone,
      title: "SMS Marketing",
      desc: "Involve businesses sending text (SMS) messages to customers and prospects for promotional, informational, or transactional purposes.",
      colorBg: true,
      accent: "from-emerald-500 to-teal-600",
    },
    {
      icon: MessageSquare,
      title: "Whats App Marketing",
      desc: "The process and tools businesses use to connect with customers on WhatsApp for promotional activities, customer support, and personalized communication.",
      colorBg: false,
      accent: "from-teal-500 to-emerald-600",
    },
    {
      icon: PhoneCall,
      title: "Multi Level IVR",
      desc: "(Interactive Voice Response) is an advanced phone system that uses structured, layered menus and submenus to guide callers through options to reach their desired destination or service.",
      colorBg: true,
      accent: "from-amber-500 to-orange-600",
    },
    {
      icon: Briefcase,
      title: "Consultancy",
      desc: "The practice where companies hire specialized external consultants or providers to manage non-core business processes, such as customer service.",
      colorBg: false,
      accent: "from-indigo-500 to-purple-600",
    },
  ];

  const progressBars = [
    { name: "Inbound Call Center", percentage: "97%", color: "from-sky-400 to-blue-500" },
    { name: "Outbound Telecalling", percentage: "95%", color: "from-blue-400 to-indigo-500" },
    { name: "SMS Marketing", percentage: "80%", color: "from-emerald-400 to-teal-500" },
    { name: "Whats App Marketing", percentage: "75%", color: "from-teal-400 to-emerald-500" },
    { name: "Multi Level IVR", percentage: "70%", color: "from-amber-400 to-orange-500" },
    { name: "Consultancy", percentage: "95%", color: "from-indigo-400 to-purple-500" },
  ];

  const industryExpertise = [
    "Real Estate & Property Management",
    "Event Management & Ticketing",
    "E-commerce & Retail",
    "Banking, Financial Services & Insurance (BFSI)",
    "Healthcare & Pharmaceuticals",
    "Travel & Hospitality",
  ];

  const counters = [
    { icon: AlarmClock, count: 150, label: "Happy Clients", color: "text-sky-600", bg: "bg-sky-50 border-sky-100" },
    { icon: BarChart3, count: 130, label: "Projects completed", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
    { icon: FileEdit, count: 99, label: "Positive feedback", color: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
    { icon: Zap, count: 250, label: "Cups of Coffee", color: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Header */}
      <PageHeader
        title="Our Services"
        breadcrumb={[{ name: "Our Services" }]}
      />

      {/* 2. Services Section with Animated Cards */}
      <section className="py-20 lg:py-28 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl border card-interactive group text-center flex flex-col items-center justify-between relative overflow-hidden ${
                    srv.colorBg
                      ? "bg-slate-900 text-white border-slate-800 shadow-xl"
                      : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-white hover:border-sky-300 shadow-xs hover:shadow-xl"
                  }`}
                >
                  <div className="space-y-4 flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300 ${
                        srv.colorBg
                          ? "bg-slate-800 text-sky-400 border border-slate-700"
                          : "bg-sky-100 text-sky-600 border border-sky-200"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        srv.colorBg ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {srv.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        srv.colorBg ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Team Skills / Commitment to Compliance with Animated Progress Bars */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60" id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Audited Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Commitment to Compliance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base text-justify sm:text-center leading-relaxed">
              We adhere to all applicable regulations, including data privacy laws and Do Not Call (DNC) standards. Your trust is non-negotiable, and every process undergoes regular audits.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="md:col-span-5 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Ready to Elevate Your Outreach?
              </h2>
              <p className="text-slate-600 text-base text-justify leading-relaxed">
                Let’s discuss how tailored telecalling can spark new opportunities for your events or properties. Reach out today to schedule a free consultation.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-sky-500/25 transition-all uppercase tracking-wider transform hover:-translate-y-0.5"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Progress Bars with Glowing Bar Heads */}
            <div className="md:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
              {progressBars.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-800">
                    <span>{item.name}</span>
                    <span className="text-sky-600 font-extrabold">{item.percentage}</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 relative">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 relative shadow-sm`}
                      style={{ width: item.percentage }}
                    >
                      {/* Glowing tip */}
                      <span className="absolute right-0 top-0 bottom-0 w-2 bg-white/70 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Counter / Award-Winning Agency Section */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 relative overflow-hidden border-t border-slate-200/70">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Award-Winning Agency
            </h2>
            <div className="text-slate-600 text-sm sm:text-base space-y-1">
              <p className="font-bold text-sky-600">Industry Expertise</p>
              {industryExpertise.map((ind, idx) => (
                <p key={idx}>• {ind}</p>
              ))}
            </div>
          </div>

          {/* 4 Counters with Hover Lift */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {counters.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 card-interactive shadow-sm hover:shadow-xl flex flex-col items-center group transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg || "bg-sky-50 border-sky-100"} border flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                    <AnimatedCounter end={item.count} duration={2000} />
                  </div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2">
                    {item.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
