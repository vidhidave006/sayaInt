import Image from "next/image";
import Link from "next/link";
import FuturisticHero from "@/components/FuturisticHero";
import SpotlightCard from "@/components/SpotlightCard";
import MagneticButton from "@/components/MagneticButton";
import {
  PhoneIncoming,
  PhoneOutgoing,
  MessageSquare,
  Smartphone,
  PhoneCall,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Headphones,
  Sparkles,
  Zap,
  Activity
} from "lucide-react";

export const metadata = {
  title: "Saya Intellicall | Inbound & Outbound Telecalling Solutions",
  description:
    "Delivering exceptional inbound and outbound Telecalling solutions across India to boost your customer engagement, drive sales, and elevate brand loyalty.",
};

export default function Home() {
  const services = [
    {
      icon: PhoneIncoming,
      title: "Inbound Call Center",
      desc: "Expert inbound and outbound calling to enhance customer engagement.",
      href: "/service",
      accent: "from-sky-500/10 to-blue-500/5",
      iconColor: "text-sky-600",
      borderColor: "hover:border-sky-500",
    },
    {
      icon: PhoneOutgoing,
      title: "Outbound Services",
      desc: "Innovative strategies to elevate your brand and promote your products effectively.",
      href: "/service",
      accent: "from-blue-500/10 to-indigo-500/5",
      iconColor: "text-blue-600",
      borderColor: "hover:border-blue-500",
    },
    {
      icon: Smartphone,
      title: "SMS Marketing",
      desc: "Innovative strategies to elevate your brand and promote your products effectively.",
      href: "/service",
      accent: "from-emerald-500/10 to-teal-500/5",
      iconColor: "text-emerald-600",
      borderColor: "hover:border-emerald-500",
    },
    {
      icon: MessageSquare,
      title: "Whats App Marketing",
      desc: "Innovative strategies to elevate your brand and promote your products effectively.",
      href: "/service",
      accent: "from-teal-500/10 to-emerald-500/5",
      iconColor: "text-teal-600",
      borderColor: "hover:border-teal-500",
    },
    {
      icon: PhoneCall,
      title: "Multi Level IVR",
      desc: "Innovative strategies to elevate your brand and promote your products effectively.",
      href: "/service",
      accent: "from-amber-500/10 to-orange-500/5",
      iconColor: "text-amber-600",
      borderColor: "hover:border-amber-500",
    },
    {
      icon: Briefcase,
      title: "Consultancy",
      desc: "Innovative strategies to elevate your brand and promote your products effectively.",
      href: "/service",
      accent: "from-indigo-500/10 to-purple-500/5",
      iconColor: "text-indigo-600",
      borderColor: "hover:border-indigo-500",
    },
  ];

  const checklist = [
    "Industry expertise in events, real estate, and customer engagement.",
    "Multilingual support and region-specific telecalling.",
    "Customized scripts and CRM integration.",
    "Performance metrics tracked in real time for full transparency.",
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Futuristic 3D Fluid Hero Section (Matching NeuroVision Reference) */}
      <FuturisticHero />

      {/* 2. What We Offer Section with Floating Badges & Card Hover Animations */}
      <section className="py-20 lg:py-28 bg-white relative" id="services">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: "8s" }} />
              <span>Comprehensive Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What We Offer
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              • Inbound & Outbound Telecalling
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Member Image with Animated Floating Live Badge */}
            <div className="md:col-span-4 hidden md:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50 group">
                <Image
                  src="/images/about/telecalling-member.jpg"
                  alt="Saya Intellicall Telecalling Specialist"
                  width={400}
                  height={500}
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
                    Professional Telecalling
                  </span>
                  <h4 className="text-xl font-bold">Trained & Certified Specialists</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Delivering empathetic, conversion-focused customer dialogues.
                  </p>
                </div>

                {/* Floating Live Telecalling Status Beacon */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-emerald-500/40 shadow-lg flex items-center gap-2 animate-float">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold text-emerald-300">Live Support</span>
                </div>
              </div>
            </div>

            {/* Service Items Grid with Spotlight Card Cursor Light & Interactive Hover Lift */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <SpotlightCard
                    key={idx}
                    spotlightColor="rgba(2, 132, 199, 0.2)"
                    spotlightSize={320}
                    className={`p-6 rounded-3xl bg-gradient-to-b ${srv.accent} border border-slate-200/80 ${srv.borderColor} card-interactive shadow-xs group text-center flex flex-col items-center justify-between relative`}
                  >
                    {/* Subtle top sheen highlight on hover */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="space-y-3 flex flex-col items-center">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                          <Icon className={`w-7 h-7 ${srv.iconColor} group-hover:text-white transition-colors`} />
                        </div>
                        {/* Glow halo */}
                        <div className="absolute -inset-1 bg-sky-400/20 rounded-2xl blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {srv.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>

                    <Link
                      href={srv.href}
                      className="mt-4 pt-3 border-t border-slate-200/60 w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-sky-600 group-hover:text-sky-700 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. We Are Saya Section with Light Radiant Colors & Floating 10+ Years Experience Badge */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 border-t border-slate-200/80 relative overflow-hidden" id="about">
        {/* Soft Ambient Light Glows */}
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-sky-200/60">
              <Headphones className="w-3.5 h-3.5 text-sky-600" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              We Are Saya
            </h2>
            <p className="text-slate-600 text-sm sm:text-base text-justify sm:text-center leading-relaxed">
              Delivering exceptional inbound and outbound Telecalling solutions across India to boost your customer engagement, drive sales, and elevate brand loyalty.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image with Floating Experience Badge */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white p-3.5 border border-slate-200/80 group">
              <Image
                src="/images/about/about-2.png"
                alt="We Are Saya"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-102 transition-transform duration-500"
              />

              {/* Floating Animated Experience Pill (Light Premium Glassmorphism) */}
              <div className="absolute -bottom-2 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md text-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-200/90 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shadow-xs">
                  <Headphones className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-sky-600">
                    Trusted Leadership
                  </p>
                  <p className="text-sm font-extrabold text-slate-900">10+ Years in Telecalling</p>
                </div>
              </div>
            </div>

            {/* Right Checklist with Hover Micro-Interactions */}
            <div className="space-y-6">
              <ul className="space-y-4">
                {checklist.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-400 hover:shadow-md hover:bg-sky-50/40 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-600 group-hover:text-white transition-colors shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <MagneticButton strength={20}>
                  <Link
                    href="/service"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all uppercase tracking-wider transform hover:-translate-y-0.5"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call To Action Section with Animated Waves & Shimmer CTA */}
      <section className="py-20 bg-slate-950 text-white text-center relative overflow-hidden">
        {/* Dynamic Background Light Beam */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 z-10">
          {/* Animated Audio Frequency Equalizer Bars */}
          <div className="flex items-center justify-center gap-1.5 py-1">
            <span className="w-1.5 h-4 bg-sky-400 rounded-full animate-pulse" />
            <span className="w-1.5 h-7 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-10 bg-sky-300 rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
            <span className="w-1.5 h-6 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: "450ms" }} />
            <span className="w-1.5 h-3 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let's Create Something Together
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Every Ring is a New Opportunity. Let’s make each One Count.
          </p>

          <div className="pt-3">
            <MagneticButton strength={25}>
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 hover:from-sky-600 hover:to-blue-700 text-white px-9 py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl shadow-sky-500/40 transition-all uppercase tracking-wider transform hover:-translate-y-0.5 overflow-hidden group"
              >
                {/* Shimmer Effect */}
                <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none" />
                <span className="relative z-10">Contact Us</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
