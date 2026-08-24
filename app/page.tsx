import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import CounterSection from "@/components/CounterSection";
import IndustryExpertise from "@/components/IndustryExpertise";
import CallToAction from "@/components/CallToAction";
import CoreValues from "@/components/CoreValues";
import {
  PhoneIncoming,
  PhoneOutgoing,
  MessageSquare,
  Smartphone,
  PhoneCall,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Headphones,
  Award,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: PhoneIncoming,
      title: "Inbound Call Center",
      desc: "Expert inbound calling and helpdesk solutions to handle inquiries, technical support, order booking, and customer care with high first-call resolution.",
      color: "bg-sky-500/10 text-sky-600 border-sky-200",
      href: "/service",
    },
    {
      icon: PhoneOutgoing,
      title: "Outbound Services",
      desc: "Targeted outbound telecalling campaigns for lead generation, sales qualification, event invitations, follow-ups, and market research across India.",
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
      href: "/service",
    },
    {
      icon: Smartphone,
      title: "SMS Marketing",
      desc: "High-deliverability transactional and promotional SMS broadcasts with instant delivery, customized sender IDs, and real-time click tracking.",
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
      href: "/service",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Marketing",
      desc: "Automated WhatsApp Business API workflows, interactive chatbots, catalog sharing, and personalized bulk broadcasts to engage prospects directly.",
      color: "bg-teal-500/10 text-teal-600 border-teal-200",
      href: "/service",
    },
    {
      icon: PhoneCall,
      title: "Multi Level IVR",
      desc: "Intelligent Interactive Voice Response systems featuring multi-tier menu routing, multilingual voice prompts, smart queuing, and call analytics.",
      color: "bg-amber-500/10 text-amber-600 border-amber-200",
      href: "/service",
    },
    {
      icon: Briefcase,
      title: "Consultancy & BPO",
      desc: "End-to-end BPO management, process outsourcing, workflow optimization, and dedicated telecalling consulting to boost your operational ROI.",
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
      href: "/service",
    },
  ];

  return (
    <div>
      {/* 1. Interactive Hero Slider */}
      <HeroSlider />

      {/* 2. Quick Highlights Banner */}
      <section className="bg-slate-900 text-white py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-3 space-y-1">
              <span className="text-sky-400 font-bold text-lg">100%</span>
              <p className="text-xs text-slate-400">DNC & TRAI Compliant</p>
            </div>
            <div className="p-3 space-y-1">
              <span className="text-emerald-400 font-bold text-lg">24/7</span>
              <p className="text-xs text-slate-400">Multi-Channel Support</p>
            </div>
            <div className="p-3 space-y-1">
              <span className="text-amber-400 font-bold text-lg">Multi-Lingual</span>
              <p className="text-xs text-slate-400">Pan-India Language Coverage</p>
            </div>
            <div className="p-3 space-y-1">
              <span className="text-purple-400 font-bold text-lg">Real-Time</span>
              <p className="text-xs text-slate-400">Live CRM & Call Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Offer Section */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Full-Spectrum Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What We Offer
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Inbound & Outbound Telecalling solutions engineered to convert first conversations into enduring brand loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Featured Member Image from Original Theme */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <Image
                  src="/images/about/member.jpg"
                  alt="Saya Intellicall Expert Telecaller"
                  width={600}
                  height={800}
                  className="object-cover w-full h-[580px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
                    Professional Agents
                  </span>
                  <h4 className="text-xl font-bold">Trained & Certified Specialists</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Equipped with domain knowledge and objection handling excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 6 Services Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-sky-500/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${srv.color} mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {srv.desc}
                      </p>
                    </div>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors pt-2 border-t border-slate-200/60"
                    >
                      <span>Explore Service</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. We Are Saya (About Highlight Section) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2 border border-slate-200">
                <Image
                  src="/images/about/about-2.png"
                  alt="We Are Saya Intellicall"
                  width={700}
                  height={500}
                  className="rounded-2xl object-cover w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-sky-600 text-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                  <Headphones className="w-8 h-8 text-sky-200" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-200">
                      Experience
                    </p>
                    <p className="text-lg font-black">10+ Years in BPO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                We Are Saya IntelliCall
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Delivering exceptional inbound and outbound Telecalling solutions across India to boost your customer engagement, drive sales, and elevate brand loyalty.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "Industry expertise in events, real estate, and customer engagement.",
                  "Multilingual support and region-specific telecalling across India.",
                  "Customized scripts, objection handling protocols & CRM integration.",
                  "Performance metrics tracked in real time for full transparency."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-lg shadow-sky-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 px-6 py-3.5 rounded-full font-semibold text-sm transition-all"
                >
                  <span>Get Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Animated Metrics & Counters */}
      <CounterSection showHeader={true} />

      {/* 6. Core Values */}
      <CoreValues />

      {/* 7. Industry Expertise */}
      <IndustryExpertise />

      {/* 8. Call to Action */}
      <CallToAction
        title="Let's Create Something Together"
        subtitle="Every Ring is a New Opportunity. Let’s make each One Count. Contact us today to discover how our Telecalling and BPO services accelerate your business."
        primaryBtnText="Contact Us Today"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
