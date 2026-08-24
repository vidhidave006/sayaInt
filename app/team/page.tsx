import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import GallerySection from "@/components/GallerySection";
import CallToAction from "@/components/CallToAction";
import {
  Users,
  Award,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Target,
  Smile
} from "lucide-react";

export const metadata = {
  title: "Our Team | Saya Intellicall - Dedicated Professionals",
  description:
    "Meet the passionate telecalling specialists, supervisors, and BPO operations team driving excellence at Saya Intellicall.",
};

export default function TeamPage() {
  const philosophyItems = [
    {
      title: "Recognition",
      desc: "Celebrating every milestone, quality achievement, and high-conversion campaign with peer appreciation.",
      icon: Award,
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      title: "Involvement",
      desc: "Empowering every agent and team lead to take true ownership of client satisfaction and process innovation.",
      icon: Users,
      color: "bg-sky-50 text-sky-600 border-sky-100",
    },
    {
      title: "Development",
      desc: "Continuous training in voice modulation, script mastery, emotional intelligence, and modern CRM systems.",
      icon: TrendingUp,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  const cultureTenets = [
    {
      title: "Objectivity",
      desc: "Making operational decisions grounded in empirical call metrics, QA audits, and objective fairness.",
    },
    {
      title: "Integrity",
      desc: "Upholding the highest ethical benchmarks in data handling, confidentiality, and truth in every call.",
    },
    {
      title: "Openness",
      desc: "Fostering transparent communication between front-line telecallers, team managers, and enterprise clients.",
    },
    {
      title: "Trust",
      desc: "Supporting one another to achieve shared goals and create high-trust long-term client relationships.",
    },
  ];

  return (
    <div>
      {/* 1. Header */}
      <PageHeader
        title="Meet Our Team"
        subtitle="Behind every successful campaign is a dedicated group of voice specialists, campaign managers, and tech leaders committed to your brand's growth."
        badge="Our People & Culture"
        breadcrumb={[{ name: "Our Team" }]}
      />

      {/* 2. Philosophy & Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image from original site */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border-4 border-white group">
                <Image
                  src="/images/about-us.jpg"
                  alt="Saya Intellicall Team in Action"
                  width={700}
                  height={500}
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
                    People-First Culture
                  </span>
                  <h4 className="text-2xl font-bold">Empowered Agents. Real Results.</h4>
                </div>
              </div>
            </div>

            {/* Right Philosophy & Culture */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-sky-600" />
                <span>Our Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our People Are Our Greatest Strength
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                We believe that the most valuable resource in any organization is its people. That’s why we cultivate an empowering workspace where talent thrives and customer interactions are executed with genuine passion.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {philosophyItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center space-y-2 hover:bg-white hover:shadow-md transition-all"
                    >
                      <div className={`w-10 h-10 rounded-xl ${item.color} border flex items-center justify-center mx-auto`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Culture & People in Action */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Tenets */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
                <span>Working Principles</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Workplace Culture
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Collaboration and trust lie at the heart of everything we do. We foster an inclusive, team-oriented environment built on four fundamental tenets:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {cultureTenets.map((tenet, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                      <h4 className="font-bold text-slate-900 text-base">{tenet.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{tenet.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: People in Action Details */}
            <div className="lg:col-span-6 bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-800 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-sky-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Daily Commitment</span>
              </div>

              <h3 className="text-2xl font-bold text-white">Our People in Action</h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Every single day, our team brings deep domain knowledge, empathetic communication, and rigorous discipline to challenging campaigns:
              </p>

              <div className="space-y-3">
                {[
                  "Pushing boundaries to achieve ambitious conversion & engagement targets",
                  "Managing complex outbound lists and multilingual customer bases",
                  "Solving intricate customer grievances with calm, helpful approaches",
                  "Building strong, trustworthy relationships with every enterprise client"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-sky-600/30 transition-all"
                >
                  <span>Connect With Our Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gallery */}
      <GallerySection />

      {/* 5. Call to Action */}
      <CallToAction
        title="Ready to Partner with Our Experts?"
        subtitle="Let our seasoned telecalling specialists and operations team become a seamless extension of your brand."
        primaryBtnText="Contact Our Team"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
