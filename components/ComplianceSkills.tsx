"use client";

import Link from "next/link";
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, FileText, BellRing } from "lucide-react";

export default function ComplianceSkills() {
  const skills = [
    { name: "Inbound Call Center Solutions", percentage: 97, color: "bg-sky-500" },
    { name: "Outbound Telecalling Campaigns", percentage: 95, color: "bg-blue-600" },
    { name: "Consultancy & BPO Management", percentage: 95, color: "bg-indigo-600" },
    { name: "SMS Marketing Automation", percentage: 80, color: "bg-emerald-500" },
    { name: "WhatsApp Business API & Outreach", percentage: 75, color: "bg-teal-500" },
    { name: "Multi Level IVR Routing & Tech", percentage: 70, color: "bg-amber-500" },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Compliance Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Rigorous Standards</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Commitment to Compliance & Data Security
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We adhere strictly to all applicable regulatory frameworks, including data privacy laws, TRAI regulations, and Do Not Call (DNC) list filtering. Your customer trust is non-negotiable, and every telecalling campaign undergoes continuous quality audits.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>100% TRAI & DNC registry scrubbed calling lists</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Enterprise-grade encrypted call recording & data storage</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Customized script approval with client compliance alignment</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-7 py-3 rounded-full font-semibold text-sm shadow-lg shadow-sky-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>Schedule Compliance Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Proficiency Progress Bars */}
          <div className="lg:col-span-7 bg-slate-800/80 p-8 sm:p-10 rounded-3xl border border-slate-700 backdrop-blur-xs shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-between">
              <span>Operational Proficiency Metrics</span>
              <span className="text-xs text-sky-400 font-medium">Audited Q1 2025</span>
            </h3>

            <div className="space-y-5">
              {skills.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-medium text-slate-200">
                    <span>{skill.name}</span>
                    <span className="font-bold text-white">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden p-0.5">
                    <div
                      className={`h-full rounded-full ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
