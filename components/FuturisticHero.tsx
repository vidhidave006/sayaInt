"use client";

import React from "react";
import Link from "next/link";
import FluidHeroBlob from "@/components/FluidHeroBlob";
import MagneticButton from "@/components/MagneticButton";
import { ArrowRight, Sparkles, PhoneCall, Headphones, CheckCircle2, ChevronRight } from "lucide-react";

export default function FuturisticHero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#030d1d] text-white flex flex-col justify-between overflow-hidden pt-12 pb-16">
      {/* 1. Background 3D Organic Fluid Mesh Canvas */}
      <FluidHeroBlob />

      {/* Subtle Background Radial Glow Overlays (Brand Sapphire & Ocean Sky) */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#030d1d]/40 to-[#030d1d] pointer-events-none z-1" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. Centered Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto pt-10 sm:pt-16 pb-12">
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-400/30 text-xs sm:text-sm font-medium backdrop-blur-md mb-8 animate-fade-in shadow-lg">
          <Sparkles className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: "10s" }} />
          <span>Introducing Saya IntelliCall • Telecalling Solutions</span>
        </div>

        {/* Monumental Headline (Matching image layout) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-2xl">
          The Future of Intelligence: <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
            Human & Telecalling
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Explore how AI-powered telecalling and dedicated inbound & outbound customer support are revolutionizing engagement, sales, and brand loyalty across India.
        </p>

        {/* Action Pill Buttons (Matching image: Frosted Learn More & Solid Cyan Get Started) */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton strength={18}>
            <Link
              href="/service"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base backdrop-blur-md shadow-lg transition-all"
            >
              <span>Learn more</span>
            </Link>
          </MagneticButton>

          <MagneticButton strength={22}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold px-8 py-3.5 rounded-full text-sm sm:text-base shadow-xl shadow-sky-400/30 hover:shadow-sky-400/50 transition-all uppercase tracking-wider"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* 3. Bottom Feature Split Row (Matching lower half of the reference image) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
              Unlocking Telecalling Insights
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Explore Customer Engagement with Next-Gen Telephony
            </h3>
            <div className="pt-1">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/15 px-5 py-2 rounded-full text-xs font-semibold backdrop-blur-md transition-all group"
              >
                <span>Learn more</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 text-left lg:text-left">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Leverage advanced telecalling processes, multi-level IVR routing, and omni-channel WhatsApp & SMS workflows to connect with high-intent prospects, decode caller sentiment, and drive exponential ROI.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-sky-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24/7 Pan-India Reach</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-sky-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Real-Time CRM Sync</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-sky-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>DNC & Compliance Audited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
