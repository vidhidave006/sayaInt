"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Headphones,
  PhoneCall,
  MessageSquare,
  Smartphone,
  ShieldCheck,
  Lightbulb,
  BarChart3,
  Users,
  Sparkles,
  Zap,
  Activity,
  Layers
} from "lucide-react";

export default function HeroOrbitAnimation() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const nodes = [
    {
      id: "inbound",
      label: "Customer Care",
      icon: Users,
      ring: "outer",
      angle: 140, // degrees on outer ring
      desc: "24/7 Inbound Helpdesk & Query Resolution",
      color: "text-emerald-700",
    },
    {
      id: "outbound",
      label: "Outbound Sales",
      icon: PhoneCall,
      ring: "outer",
      angle: 45, // degrees on outer ring
      desc: "Targeted Telecalling & Lead Generation",
      color: "text-emerald-700",
    },
    {
      id: "research",
      label: "Real-Time CRM",
      icon: BarChart3,
      ring: "outer",
      angle: 340, // degrees on outer ring
      desc: "Live Call Analytics & Performance Metrics",
      color: "text-emerald-700",
    },
    {
      id: "innovation",
      label: "Innovation",
      icon: Lightbulb,
      ring: "outer",
      angle: 270, // degrees on outer ring (bottom)
      desc: "AI Multi-Level IVR & Voice Routing",
      color: "text-emerald-700",
    },
    {
      id: "quality",
      label: "Quality & Compliance",
      icon: ShieldCheck,
      ring: "outer",
      angle: 200, // degrees on outer ring (left)
      desc: "100% DNC & TRAI Regulatory Adherence",
      color: "text-emerald-700",
    },
    {
      id: "whatsapp",
      label: "WhatsApp & SMS",
      icon: MessageSquare,
      ring: "middle",
      angle: 90, // degrees on middle ring
      desc: "High-Deliverability Messaging Automation",
      color: "text-emerald-700",
    },
  ];

  return (
    <div
      className="relative w-full max-w-[620px] aspect-square mx-auto flex items-center justify-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Mint Radial Glow (Matching Screenshot) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-100/60 via-teal-50/50 to-emerald-100/40 blur-2xl -z-10" />
      <div className="absolute w-[440px] h-[440px] rounded-full bg-emerald-200/30 blur-3xl -z-10" />

      {/* SVG Concentric Orbit Rings & Satellite Dots */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 600 600"
      >
        {/* Ring 1 (Inner Ring) */}
        <circle
          cx="300"
          cy="300"
          r="110"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeOpacity="0.4"
        />

        {/* Ring 2 (Middle Ring) */}
        <circle
          cx="300"
          cy="300"
          r="185"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          strokeOpacity="0.45"
        />

        {/* Ring 3 (Outer Ring) */}
        <circle
          cx="300"
          cy="300"
          r="260"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.2"
          strokeDasharray="8 10"
          strokeOpacity="0.4"
        />

        {/* Neural Connection Beams to Nodes */}
        <g opacity="0.35">
          <line x1="300" y1="300" x2="160" y2="180" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="300" y1="300" x2="440" y2="180" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="300" y1="300" x2="520" y2="340" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="300" y1="300" x2="300" y2="520" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="300" y1="300" x2="120" y2="380" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
        </g>
      </svg>

      {/* Rotating Outer Orbit Track Container */}
      <div
        className={`absolute inset-0 w-full h-full flex items-center justify-center ${
          isPaused ? "" : "animate-orbit-slow"
        }`}
      >
        {/* Revolving Green Satellite Particle Dots on Outer Orbit */}
        <div className="absolute w-[520px] h-[520px] rounded-full pointer-events-none">
          <div className="absolute top-[18%] left-[8%] w-3 h-3 rounded-full bg-emerald-600 border-2 border-white shadow-md shadow-emerald-500/50" />
          <div className="absolute bottom-[22%] left-[28%] w-3 h-3 rounded-full bg-emerald-600 border-2 border-white shadow-md shadow-emerald-500/50" />
          <div className="absolute bottom-[18%] right-[16%] w-3.5 h-3.5 rounded-full bg-emerald-700 border-2 border-white shadow-md shadow-emerald-500/50" />
          <div className="absolute top-[35%] right-[2%] w-2.5 h-2.5 rounded-full bg-emerald-600 border-2 border-white shadow-md shadow-emerald-500/50" />
        </div>

        {/* Orbit Node 1: Customer Care (Top Left) */}
        <div
          className="absolute"
          style={{ transform: "rotate(130deg) translate(245px) rotate(-130deg)" }}
        >
          <div className={isPaused ? "" : "animate-counter-spin-slow"}>
            <div
              onMouseEnter={() => setHoveredNode("inbound")}
              onMouseLeave={() => setHoveredNode(null)}
              className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-emerald-200 shadow-lg shadow-emerald-900/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Users className="w-6 h-6" />
              </div>
              <div className="mt-1.5 px-3 py-1 rounded-full bg-white/95 border border-emerald-100 shadow-md text-xs font-bold text-slate-800 whitespace-nowrap">
                Customer Care
              </div>
            </div>
          </div>
        </div>

        {/* Orbit Node 2: Outbound Sales (Top Right) */}
        <div
          className="absolute"
          style={{ transform: "rotate(40deg) translate(245px) rotate(-40deg)" }}
        >
          <div className={isPaused ? "" : "animate-counter-spin-slow"}>
            <div
              onMouseEnter={() => setHoveredNode("outbound")}
              onMouseLeave={() => setHoveredNode(null)}
              className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-emerald-200 shadow-lg shadow-emerald-900/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="mt-1.5 px-3 py-1 rounded-full bg-white/95 border border-emerald-100 shadow-md text-xs font-bold text-slate-800 whitespace-nowrap">
                Outbound Sales
              </div>
            </div>
          </div>
        </div>

        {/* Orbit Node 3: Real-Time CRM (Right) */}
        <div
          className="absolute"
          style={{ transform: "rotate(345deg) translate(250px) rotate(-345deg)" }}
        >
          <div className={isPaused ? "" : "animate-counter-spin-slow"}>
            <div
              onMouseEnter={() => setHoveredNode("research")}
              onMouseLeave={() => setHoveredNode(null)}
              className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-emerald-200 shadow-lg shadow-emerald-900/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="mt-1.5 px-3 py-1 rounded-full bg-white/95 border border-emerald-100 shadow-md text-xs font-bold text-slate-800 whitespace-nowrap">
                Research & CRM
              </div>
            </div>
          </div>
        </div>

        {/* Orbit Node 4: Innovation (Bottom) */}
        <div
          className="absolute"
          style={{ transform: "rotate(270deg) translate(245px) rotate(-270deg)" }}
        >
          <div className={isPaused ? "" : "animate-counter-spin-slow"}>
            <div
              onMouseEnter={() => setHoveredNode("innovation")}
              onMouseLeave={() => setHoveredNode(null)}
              className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-emerald-200 shadow-lg shadow-emerald-900/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="mt-1.5 px-3 py-1 rounded-full bg-white/95 border border-emerald-100 shadow-md text-xs font-bold text-slate-800 whitespace-nowrap">
                Innovation
              </div>
            </div>
          </div>
        </div>

        {/* Orbit Node 5: Quality (Left) */}
        <div
          className="absolute"
          style={{ transform: "rotate(200deg) translate(245px) rotate(-200deg)" }}
        >
          <div className={isPaused ? "" : "animate-counter-spin-slow"}>
            <div
              onMouseEnter={() => setHoveredNode("quality")}
              onMouseLeave={() => setHoveredNode(null)}
              className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-emerald-200 shadow-lg shadow-emerald-900/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="mt-1.5 px-3 py-1 rounded-full bg-white/95 border border-emerald-100 shadow-md text-xs font-bold text-slate-800 whitespace-nowrap">
                Quality
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Orbit Track (Rotating in Counter Direction for multi-speed visual depth) */}
      <div
        className={`absolute inset-0 w-full h-full flex items-center justify-center ${
          isPaused ? "" : "animate-orbit-reverse"
        }`}
      >
        {/* Orbit Node 6: WhatsApp & SMS (Middle Ring Node) */}
        <div
          className="absolute"
          style={{ transform: "rotate(85deg) translate(175px) rotate(-85deg)" }}
        >
          <div className={isPaused ? "" : "animate-counter-spin-reverse"}>
            <div
              onMouseEnter={() => setHoveredNode("whatsapp")}
              onMouseLeave={() => setHoveredNode(null)}
              className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-emerald-200 shadow-lg shadow-emerald-900/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="mt-1 px-2.5 py-0.5 rounded-full bg-white/95 border border-emerald-100 shadow-md text-[11px] font-bold text-slate-800 whitespace-nowrap">
                WhatsApp & SMS
              </div>
            </div>
          </div>
        </div>

        {/* Orbit Node 7: Multi Level IVR (Opposite side on middle ring) */}
        <div
          className="absolute"
          style={{ transform: "rotate(265deg) translate(175px) rotate(-265deg)" }}
        >
          <div className={isPaused ? "" : "animate-counter-spin-reverse"}>
            <div
              onMouseEnter={() => setHoveredNode("ivr")}
              onMouseLeave={() => setHoveredNode(null)}
              className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-110"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-emerald-200 shadow-lg shadow-emerald-900/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Layers className="w-5 h-5" />
              </div>
              <div className="mt-1 px-2.5 py-0.5 rounded-full bg-white/95 border border-emerald-100 shadow-md text-[11px] font-bold text-slate-800 whitespace-nowrap">
                Multi Level IVR
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* Central Core Element (The High-Tech Hub with Neural Wave & Beam) */}
      {/* ========================================================= */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Animated Synaptic / Laser Plasma Beam Line (Matching Screenshot Lightning/Electric Effect) */}
        <div className="absolute w-72 sm:w-80 h-16 pointer-events-none flex items-center justify-between -z-10 animate-laser">
          {/* Left Brain / Neural Node */}
          <div className="w-10 h-10 rounded-full bg-sky-400/20 border border-sky-400/50 blur-[1px] flex items-center justify-center">
            <Activity className="w-5 h-5 text-sky-500 animate-pulse" />
          </div>

          {/* Electric Laser Lightning Beam */}
          <div className="flex-1 h-[2px] bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-400 shadow-[0_0_12px_#38bdf8]" />

          {/* Right Brain / Neural Node */}
          <div className="w-10 h-10 rounded-full bg-emerald-400/20 border border-emerald-400/50 blur-[1px] flex items-center justify-center">
            <Zap className="w-5 h-5 text-emerald-500 animate-pulse" />
          </div>
        </div>

        {/* Central Core Pill Bottle / Communication Hub Container */}
        <div className="relative w-36 h-48 sm:w-40 sm:h-52 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 p-3 shadow-2xl border-2 border-emerald-500/30 flex flex-col items-center justify-between text-white overflow-hidden group">
          {/* Glass Gloss Shine Reflection */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

          {/* Top Cap / Badge */}
          <div className="w-16 h-3.5 bg-slate-700 rounded-full border border-slate-600 shadow-inner flex items-center justify-center">
            <div className="w-8 h-1 bg-emerald-400 rounded-full animate-pulse" />
          </div>

          {/* Center Brand Identity */}
          <div className="my-auto text-center space-y-1.5 z-10">
            <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-bold block">
              SAYA INTELLICALL
            </span>
            <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
              <Headphones className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="text-xs font-black tracking-tight text-white uppercase">
              Telecalling Hub
            </h4>

            {/* Audio Waveform Equalizer Animation */}
            <div className="flex items-center justify-center gap-1 pt-1 h-5">
              <span className="w-1 bg-emerald-400 rounded-full animate-pulse h-3" />
              <span className="w-1 bg-sky-400 rounded-full animate-pulse h-5" />
              <span className="w-1 bg-emerald-300 rounded-full animate-pulse h-2" />
              <span className="w-1 bg-emerald-400 rounded-full animate-pulse h-4" />
              <span className="w-1 bg-sky-400 rounded-full animate-pulse h-3" />
            </div>
          </div>

          {/* Bottom Seal */}
          <div className="text-[8px] tracking-wider text-slate-400 uppercase font-semibold bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
            24/7 Connectivity
          </div>
        </div>

        {/* Hover Tooltip Card */}
        {hoveredNode && (
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-xs px-4 py-2 rounded-xl shadow-2xl border border-emerald-500/40 whitespace-nowrap z-50 animate-fade-in flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {nodes.find((n) => n.id === hoveredNode)?.desc ||
                "Saya Intelligent Ecosystem"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
