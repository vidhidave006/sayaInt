import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  Users,
  Award,
  Shield,
  Lightbulb,
  Target,
  AlarmClock,
  BarChart3,
  FileEdit,
  Zap,
  ArrowRight,
  Sparkles,
  Eye
} from "lucide-react";

export const metadata = {
  title: "About Us | Saya Intellicall",
  description:
    "Welcome to Saya IntelliCall, where every conversation counts. Dedicated Telecalling and BPO partner fueling growth for event management and real estate businesses.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Collaboration",
      desc: "We believe win-win partnerships are built on transparency and teamwork.",
      icon: Users,
      color: "text-sky-600 bg-sky-50 border-sky-200",
    },
    {
      title: "Excellence",
      desc: "Every call, report, and campaign reflects our commitment to quality.",
      icon: Award,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      title: "Integrity",
      desc: "We handle your data and brand reputation with the highest ethical standards.",
      icon: Shield,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      title: "Innovation",
      desc: "We continuously refine processes and leverage the latest tools to stay ahead.",
      icon: Lightbulb,
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
    {
      title: "Accountability",
      desc: "Clear KPIs and regular insights keep us focused on your success.",
      icon: Target,
      color: "text-rose-600 bg-rose-50 border-rose-200",
    },
  ];

  const whyChooseUs = [
    "Cost-Effective Operations: Leverage India’s competitive advantage without compromising quality.",
    "Scalable Teams: Scale up or down seamlessly to match seasonal demands and campaign peaks.",
    "Advanced Analytics: Real-time dashboards, call monitoring, and performance insights for continuous improvement.",
    "Dedicated Account Management: A single point of contact focused on your success and ROI.",
  ];

  const galleryImages = [
    "/images/company/gallery-1.jpg",
    "/images/company/gallery-2.jpg",
    "/images/company/gallery-3.jpg",
    "/images/company/gallery-4.jpg",
    "/images/company/gallery-5.jpg",
    "/images/about/team-hero.jpg",
  ];

  const counters = [
    { icon: AlarmClock, count: "130", label: "Happy Clients", color: "text-sky-400" },
    { icon: BarChart3, count: "130", label: "Projects completed", color: "text-emerald-400" },
    { icon: FileEdit, count: "90", label: "Positive feedback", color: "text-amber-400" },
    { icon: Zap, count: "250", label: "Cups of Coffee", color: "text-purple-400" },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Header */}
      <PageHeader
        title="About Us"
        breadcrumb={[{ name: "About Us" }]}
      />

      {/* 2. We Create technology Section with Floating Highlights */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: "9s" }} />
                <span>Our Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                We Create technology
              </h2>
              <p className="text-slate-600 text-base text-justify leading-relaxed">
                Welcome to Saya IntelliCall, where every conversation counts. We’re a dedicated Telecalling and BPO partner fuelling growth for event management and real estate businesses. By blending industry expertise with a client-centric approach, we turn leads into lasting relationships..
              </p>
              <p className="text-slate-600 text-base text-justify leading-relaxed">
                SAYA INTELLICALL is a technology services company that partners with businesses to drive growth, boost productivity, and embrace change. We combine cutting-edge solutions with a people-first philosophy to deliver measurable outcomes and lasting impact.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50 group">
                <Image
                  src="/images/company/telecalling-tech.jpg"
                  alt="Saya Intellicall Telecalling & BPO Operations"
                  width={700}
                  height={450}
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-xs font-bold bg-sky-600/90 px-3 py-1 rounded-full backdrop-blur-xs">
                    Technology & BPO Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Mission & Vision with Hover Card Depth */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 card-interactive shadow-sm space-y-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-base text-justify leading-relaxed">
                  To empower event organizers and real estate professionals with seamless Telecalling solutions that drive engagement, nurture prospects, and accelerate revenue growth..
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200 mt-4">
                <Image
                  src="/images/company/mission-strategy.jpg"
                  alt="Our Mission"
                  width={600}
                  height={350}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 card-interactive shadow-sm space-y-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-base text-justify leading-relaxed">
                  To be the most trusted Telecalling partner in our industries, renowned for delivering personalized outreach, impeccable data security, and unparalleled ROI..
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200 mt-4">
                <Image
                  src="/images/company/vision-support.jpg"
                  alt="Our Vision"
                  width={600}
                  height={350}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Get Started Today Call To Action Banner with Dark Charcoal & Cyan Highlights */}
      <section className="py-16 bg-[#111827] text-white text-center relative overflow-hidden border-y border-slate-800">
        {/* Ambient Cyan Glow */}
        <div className="absolute inset-0 bg-radial-at-c from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Transform Customer Engagement</span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Get Started Today
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Transform customer engagement & oprational efficiency with a partner who cares as much above your brand as you do.
          </p>
          <p className="text-cyan-300 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            Contact us now for a free consultation and discover how our Call Center and BPO services in india can accelerate your business growth.
          </p>
        </div>
      </section>

      {/* 5. Core Values with Interactive Staggered Hover Badges */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Core Values
            </h2>
            <div className="space-y-3 text-slate-600 text-sm sm:text-base text-center max-w-2xl mx-auto">
              {coreValues.map((v, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50/60 border border-slate-100 hover:border-sky-200 transition-all duration-300"
                >
                  <p>
                    <strong className="text-slate-900">• {v.title}:</strong> {v.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Company Gallery with Zoom & Glow Sheen */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="relative h-48 rounded-2xl overflow-hidden shadow-sm bg-slate-100 border border-slate-200 group card-interactive"
              >
                <Image
                  src={src}
                  alt={`Company Gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Clients Choose Us + Animated Counters */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why Clients Choose Us
            </h2>
            <div className="space-y-2 text-slate-300 text-sm sm:text-base text-center max-w-2xl mx-auto leading-relaxed">
              {whyChooseUs.map((point, idx) => (
                <p key={idx} className="p-1">
                  • {point}
                </p>
              ))}
            </div>
          </div>

          {/* 4 Counter Items with Floating Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {counters.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-sky-500/50 card-interactive shadow-lg flex flex-col items-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-sky-400 transition-colors">
                    {item.count}
                  </div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">
                    {item.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom Call To Action with Shimmer Effect */}
      <section className="py-20 bg-slate-950 text-white text-center border-t border-slate-800 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let's Create Something Together
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            “Our tailored solutions ensure compliance with industry regulations and align with your unique business workflows.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-xl shadow-sky-500/30 transition-all uppercase tracking-wider transform hover:-translate-y-0.5 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none" />
              <span className="relative z-10">Contact Us</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
