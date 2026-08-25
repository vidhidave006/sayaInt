"use client";

import React from "react";
import Link from "next/link";
import FluidHeroBlob from "@/components/FluidHeroBlob";
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export default function FuturisticHero() {
  return (
    <section className="relative min-h-[620px] lg:h-[calc(100vh-4.5rem)] max-h-[920px] bg-[#030d1d] text-white flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
      {/* 1. Background 3D Organic Fluid Mesh Canvas */}
      <FluidHeroBlob />

      {/* Subtle Background Radial Glow Overlays (Brand Sapphire & Ocean Sky) */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#030d1d]/40 to-[#030d1d] pointer-events-none z-1" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-72 h-72 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* 2. Centered Main Hero Content (Proportionally Scaled to Fit in Screen) */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto pt-2 pb-4 sm:py-2">
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-500/15 text-sky-300 border border-sky-400/30 text-xs font-semibold backdrop-blur-md mb-4 sm:mb-5 animate-fade-in shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: "10s" }} />
          <span>Introducing Saya IntelliCall • Telecalling Solutions</span>
        </div>

        {/* Monumental Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-3 sm:mb-4 drop-shadow-2xl">
          The Future of Intelligence: <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
            Human & Telecalling
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-6 sm:mb-7 font-normal">
          Explore how AI-powered telecalling and dedicated inbound & outbound customer support are revolutionizing engagement, sales, and brand loyalty across India.
        </p>

        {/* Action Pill Buttons (Royal Sky & Ocean Blue Gradient Theme) */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/service"
            className="group inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-sky-300 hover:text-white border border-sky-500/30 hover:border-sky-400 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm backdrop-blur-md shadow-md hover:shadow-sky-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Learn more</span>
          </Link>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-7 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider cursor-pointer overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none" />
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* 3. Bottom Feature Split Row (Compact & Clean) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-3 pb-1 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="md:col-span-6 space-y-1.5 text-left">
            <span className="text-[11px] uppercase tracking-widest text-sky-400 font-bold">
              Unlocking Telecalling Insights
            </span>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug">
              Explore Customer Engagement with Next-Gen Telephony
            </h3>
            <div className="pt-0.5">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 hover:text-white border border-sky-400/30 hover:border-sky-400 px-3.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md transition-all group"
              >
                <span>Learn more</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-6 text-left">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Leverage advanced telecalling processes, multi-level IVR routing, and omni-channel WhatsApp & SMS workflows to connect with high-intent prospects and drive exponential ROI.
            </p>
            <div className="flex flex-wrap gap-3 mt-2.5">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-sky-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>24/7 Pan-India Reach</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-sky-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Real-Time CRM Sync</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-sky-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>DNC & Compliance Audited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
