import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { Users, Award, HeartHandshake, CheckCircle2, Sparkles } from "lucide-react";

export const metadata = {
  title: "Our Team | Saya Intellicall",
  description:
    "Meet Our Team. We believe that the most valuable resource in any organization is its people.",
};

export default function TeamPage() {
  const culturePoints = [
    { title: "Objectivity", desc: "Making decisions based on data and fairness." },
    { title: "Integrity", desc: "Upholding the highest ethical standards." },
    { title: "Openness", desc: "Encouraging transparent communication." },
    { title: "Trust", desc: "Supporting one another to achieve shared goals." },
  ];

  const actions = [
    "Pushing boundaries to meet ambitious targets",
    "Managing complex projects or high-performing teams",
    "Solving intricate problems with innovative approaches",
    "Building strong relationships with clients and stakeholders",
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Header */}
      <PageHeader
        title="Our Team"
        breadcrumb={[{ name: "Our Team" }]}
      />

      {/* 2. Meet Our Team Section with Interactive Cards */}
      <section className="py-20 lg:py-28 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: "8s" }} />
              <span>People-First Organization</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Meet Our Team
            </h2>
            <div className="text-slate-700 text-sm sm:text-base text-justify leading-relaxed space-y-3 bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs">
              <p className="font-bold text-slate-900 text-lg">Our Philosophy :</p>
              <p>We believe that the most valuable resource in any organization is its people. That’s why we focus on:</p>
              <ul className="space-y-1.5 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span><strong>Recognition:</strong> Celebrating achievements and contributions.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span><strong>Involvement:</strong> Empowering team members to take ownership.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span><strong>Development:</strong> Providing opportunities for personal and career growth.</span>
                </li>
              </ul>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Team Image & Culture Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image with Floating Experience Tag */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50 group">
                <Image
                  src="/images/about/team-hero.jpg"
                  alt="Saya Intellicall Dedicated Team"
                  width={700}
                  height={500}
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
                    Passionate Professionals
                  </span>
                  <h4 className="text-2xl font-bold">Continuous Learning & Excellence</h4>
                </div>

                {/* Floating animated tag */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full border border-sky-400/40 shadow-xl flex items-center gap-2 animate-float">
                  <HeartHandshake className="w-4 h-4 text-rose-400" />
                  <span className="font-bold">Team Spirit</span>
                </div>
              </div>
            </div>

            {/* Right Culture & People in Action */}
            <div className="lg:col-span-6 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
              {/* Culture */}
              <div className="space-y-3">
                <p className="font-bold text-slate-900 text-xl">Our Culture :</p>
                <p>Collaboration and trust lie at the heart of everything we do. We foster a team-oriented environment built on:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {culturePoints.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-sky-300 card-interactive shadow-xs"
                    >
                      <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our People in Action */}
              <div className="space-y-3 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800">
                <p className="font-bold text-white text-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Our People in Action</span>
                </p>
                <p className="text-slate-300 text-xs sm:text-sm">Every day, our team brings passion and expertise to a variety of challenging and rewarding roles. Whether it’s:</p>
                <ul className="space-y-2.5 pt-1">
                  {actions.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2 text-xs text-sky-400 font-semibold border-t border-slate-800">
                  our people are committed to excellence and continuous learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
