import { Users, Award, Shield, Lightbulb, Target } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe win-win partnerships are built on transparency, proactive communication, and teamwork.",
      color: "bg-sky-500/10 text-sky-600 border-sky-200",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Every single call, detailed report, and outreach campaign reflects our relentless commitment to quality.",
      color: "bg-amber-500/10 text-amber-600 border-amber-200",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We handle your client data, customer relationships, and brand reputation with the highest ethical standards.",
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously refine processes, integrate modern CRM tools, and leverage the latest telecalling technologies.",
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
    {
      icon: Target,
      title: "Accountability",
      description: "Clear KPIs, real-time analytics, and transparent insights keep us focused on your measurable business success.",
      color: "bg-rose-500/10 text-rose-600 border-rose-200",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3.5 py-1.5 rounded-full">
            Our Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our Core Values
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            The principles that guide our everyday conversations, customer interactions, and client partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${v.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-600">
                  <span>Principle #0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
