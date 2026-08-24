import Link from "next/link";
import PageHeader from "@/components/PageHeader";
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
  ArrowRight
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
    },
    {
      icon: PhoneOutgoing,
      title: "Outbound Services",
      desc: "Involve a company proactively reaching out to customers or prospects through channels like phone, email, or SMS.",
      colorBg: false,
    },
    {
      icon: Smartphone,
      title: "SMS Marketing",
      desc: "Involve businesses sending text (SMS) messages to customers and prospects for promotional, informational, or transactional purposes.",
      colorBg: true,
    },
    {
      icon: MessageSquare,
      title: "Whats App Marketing",
      desc: "The process and tools businesses use to connect with customers on WhatsApp for promotional activities, customer support, and personalized communication.",
      colorBg: false,
    },
    {
      icon: PhoneCall,
      title: "Multi Level IVR",
      desc: "(Interactive Voice Response) is an advanced phone system that uses structured, layered menus and submenus to guide callers through options to reach their desired destination or service.",
      colorBg: true,
    },
    {
      icon: Briefcase,
      title: "Consultancy",
      desc: "The practice where companies hire specialized external consultants or providers to manage non-core business processes, such as customer service.",
      colorBg: false,
    },
  ];

  const progressBars = [
    { name: "Inbound Call Center", percentage: "97%" },
    { name: "Outbound Telecalling", percentage: "95%" },
    { name: "SMS Marketing", percentage: "80%" },
    { name: "Whats App Marketing", percentage: "75%" },
    { name: "Multi Level IVR", percentage: "70%" },
    { name: "Consultancy", percentage: "95%" },
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
    { icon: AlarmClock, count: "150", label: "Happy Clients" },
    { icon: BarChart3, count: "130", label: "Projects completed" },
    { icon: FileEdit, count: "99", label: "Positive feedback" },
    { icon: Zap, count: "250", label: "Cups of Coffee" },
  ];

  return (
    <div className="bg-white">
      {/* 1. Header */}
      <PageHeader
        title="Our Services"
        breadcrumb={[{ name: "Our Services" }]}
      />

      {/* 2. Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl border transition-all duration-300 group text-center flex flex-col items-center justify-between ${
                    srv.colorBg
                      ? "bg-slate-900 text-white border-slate-800 shadow-lg"
                      : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-white hover:shadow-lg"
                  }`}
                >
                  <div className="space-y-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto ${
                        srv.colorBg
                          ? "bg-slate-800 text-sky-400 border border-slate-700"
                          : "bg-sky-100 text-sky-600 border border-sky-200"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
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

      {/* 3. Team Skills / Commitment to Compliance */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60" id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Commitment to Compliance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base text-justify leading-relaxed">
              We adhere to all applicable regulations, including data privacy laws and Do Not Call (DNC) standards. Your trust is non-negotiable, and every process undergoes regular audits.
            </p>
            <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
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
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-3 rounded-md font-semibold text-sm shadow-md transition-all uppercase tracking-wider"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Progress Bars */}
            <div className="md:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              {progressBars.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700">
                    <span>{item.name}</span>
                    <span>{item.percentage}</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky-500 rounded-full transition-all duration-1000"
                      style={{ width: item.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Counter / Award-Winning Agency Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Award-Winning Agency
            </h2>
            <div className="text-slate-300 text-sm sm:text-base space-y-1">
              <p className="font-semibold text-sky-400">Industry Expertise</p>
              {industryExpertise.map((ind, idx) => (
                <p key={idx}>• {ind}</p>
              ))}
            </div>
          </div>

          {/* 4 Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {counters.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-4 space-y-2 flex flex-col items-center">
                  <Icon className="w-8 h-8 text-sky-400 mb-2" />
                  <div className="text-4xl sm:text-5xl font-extrabold text-white">
                    {item.count}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
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
