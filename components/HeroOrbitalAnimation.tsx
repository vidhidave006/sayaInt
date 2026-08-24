"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneIncoming,
  PhoneOutgoing,
  Smartphone,
  MessageSquare,
  PhoneCall,
  Briefcase,
  Headphones,
  ShieldCheck,
  Zap,
  Activity
} from "lucide-react";

interface ServiceNode {
  id: string;
  name: string;
  shortDesc: string;
  icon: any;
  angle: number; // in degrees
  radius: number; // in percentage of container
  accentColor: string;
}

const serviceNodes: ServiceNode[] = [
  {
    id: "inbound",
    name: "Inbound Support",
    shortDesc: "24/7 Call Center & Customer Care",
    icon: PhoneIncoming,
    angle: 270, // Top
    radius: 46,
    accentColor: "text-sky-600",
  },
  {
    id: "outbound",
    name: "Outbound Calling",
    shortDesc: "Proactive Lead Gen & Sales",
    icon: PhoneOutgoing,
    angle: 330, // Top-Right
    radius: 46,
    accentColor: "text-blue-600",
  },
  {
    id: "sms",
    name: "SMS Marketing",
    shortDesc: "High Deliverability Bulk Messaging",
    icon: Smartphone,
    angle: 30, // Bottom-Right
    radius: 46,
    accentColor: "text-emerald-600",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Marketing",
    shortDesc: "Official Verified Business API",
    icon: MessageSquare,
    angle: 90, // Bottom
    radius: 46,
    accentColor: "text-teal-600",
  },
  {
    id: "ivr",
    name: "Multi Level IVR",
    shortDesc: "Layered Smart Voice Routing",
    icon: PhoneCall,
    angle: 150, // Bottom-Left
    radius: 46,
    accentColor: "text-amber-600",
  },
  {
    id: "consultancy",
    name: "BPO Consultancy",
    shortDesc: "Business Process Optimization",
    icon: Briefcase,
    angle: 210, // Top-Left
    radius: 46,
    accentColor: "text-indigo-600",
  },
];

export default function HeroOrbitalAnimation() {
  const [activeNode, setActiveNode] = useState<ServiceNode | null>(null);

  return (
    <div className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none pause-on-hover">
      {/* Background Soft Radial Glow */}
      <div className="absolute inset-0 bg-radial-at-c from-sky-400/10 via-emerald-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* 1. Outermost Orbital Ring (480px) */}
      <div className="absolute w-[94%] h-[94%] rounded-full border border-emerald-500/25 dark:border-sky-400/20" />

      {/* 2. Middle Dashed Orbital Ring (380px) with Slow Orbit */}
      <div className="absolute w-[74%] h-[74%] rounded-full border border-dashed border-emerald-400/30 dark:border-sky-400/25 animate-orbit-reverse">
        {/* Orbital Track Dots */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/50" />
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400/50" />
        <div className="absolute -bottom-1.5 left-1/3 w-3 h-3 rounded-full bg-emerald-600 shadow-md" />
      </div>

      {/* 3. Inner Pulsing Ring (240px) */}
      <div className="absolute w-[52%] h-[52%] rounded-full border border-sky-400/30 animate-pulse-ring" />
      <div className="absolute w-[44%] h-[44%] rounded-full border border-emerald-400/20" />

      {/* 4. Neural / Waveform Light Beams across Center */}
      <div className="absolute w-[80%] h-12 flex items-center justify-center pointer-events-none opacity-70">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent animate-signal-beam" />
        <div className="absolute w-3/4 h-8 bg-sky-400/10 blur-md rounded-full" />
      </div>

      {/* 5. Center Core Hub (Saya Intellicall 3D Center) */}
      <div className="relative z-20 flex flex-col items-center justify-center animate-float">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-sky-400/40 shadow-2xl shadow-sky-500/20 p-3 flex flex-col items-center justify-center text-center group cursor-pointer">
          {/* Subtle glowing ring behind */}
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-emerald-400 to-blue-600 rounded-3xl blur-xs opacity-40 group-hover:opacity-80 transition duration-500" />

          {/* Central Logo & Visual */}
          <div className="relative z-10 flex flex-col items-center space-y-1.5">
            <div className="relative w-16 h-8">
              <Image
                src="/images/logo-white.png"
                alt="Saya Intellicall"
                fill
                className="object-contain"
              />
            </div>

            {/* Audio Wave / Dynamic Telecalling Pulse */}
            <div className="flex items-center gap-1 py-0.5">
              <span className="w-1 h-3 bg-sky-400 rounded-full animate-pulse" />
              <span className="w-1 h-5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
              <span className="w-1 h-4 bg-sky-300 rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
              <span className="w-1 h-6 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: "450ms" }} />
              <span className="w-1 h-3 bg-sky-400 rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
            </div>

            <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[9px] font-bold text-emerald-300 uppercase tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Live Telecalling</span>
            </div>
          </div>
        </div>

        {/* Center Sub-badge */}
        <div className="mt-2.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-slate-900 dark:text-white shadow-md border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
          <Headphones className="w-3.5 h-3.5 text-sky-500" />
          <span>Saya IntelliCall Hub</span>
        </div>
      </div>

      {/* 6. Rotating Orbital Wrapper containing the 6 Nodes */}
      <div className="absolute inset-0 w-full h-full animate-orbit pointer-events-none">
        {serviceNodes.map((node) => {
          const Icon = node.icon;
          // Calculate X & Y offsets using polar coordinates
          const rad = (node.angle * Math.PI) / 180;
          const leftPercent = 50 + node.radius * Math.cos(rad);
          const topPercent = 50 + node.radius * Math.sin(rad);

          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
              }}
              onMouseEnter={() => setActiveNode(node)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Counter-rotating container so icons and text remain upright! */}
              <Link
                href="/service"
                className="animate-counter-orbit flex flex-col items-center group cursor-pointer"
              >
                {/* Outer Circular Icon Button */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 shadow-xl flex items-center justify-center text-slate-700 dark:text-slate-200 group-hover:scale-115 group-hover:border-sky-500 group-hover:shadow-sky-500/30 group-hover:bg-sky-50 transition-all duration-300">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${node.accentColor} group-hover:scale-110 transition-transform`} />
                  
                  {/* Subtle Ping effect on hover */}
                  <span className="absolute inset-0 rounded-full border border-sky-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
                </div>

                {/* Floating Pill Label underneath (matching the user's reference image!) */}
                <div className="mt-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 shadow-md border border-slate-100 dark:border-slate-800 whitespace-nowrap group-hover:text-sky-600 group-hover:border-sky-300 transition-colors">
                  {node.name}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* 7. Hover Node Details Tooltip Overlay (when hovering a node) */}
      {activeNode && (
        <div className="absolute -bottom-6 z-30 bg-slate-950/90 text-white text-xs px-4 py-2 rounded-xl backdrop-blur-md border border-sky-500/40 shadow-xl animate-fade-in text-center max-w-xs pointer-events-none">
          <p className="font-bold text-sky-400">{activeNode.name}</p>
          <p className="text-slate-300 text-[11px]">{activeNode.shortDesc}</p>
        </div>
      )}
    </div>
  );
}
