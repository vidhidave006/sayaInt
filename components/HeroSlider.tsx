"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroOrbitAnimation from "@/components/HeroOrbitAnimation";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Play,
  RotateCw
} from "lucide-react";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  btnText: string;
  btnHref: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Crafting Digital Experience",
    subtitle: "Powerful Conversations. Meaningful Results.",
    image: "/images/slider/slider-bg-1.jpg",
    btnText: "Explore Us",
    btnHref: "/service",
  },
  {
    id: 2,
    title: "We Combine Design and Creativity",
    subtitle: "From first touch to final follow-up, we deliver seamless inbound and outbound support that builds trust and drives growth.",
    image: "/images/slider/slider-bg-2.jpg",
    btnText: "Explore Us",
    btnHref: "/service",
  },
  {
    id: 3,
    title: "CTA (Call to Action)",
    subtitle: "Delivering exceptional inbound and outbound Telecalling solutions across India to boost your customer engagement, drive sales, and elevate brand loyalty.",
    image: "/images/slider/slider-bg-3.jpg",
    btnText: "Explore Us",
    btnHref: "/service",
  },
  {
    id: 4,
    title: "Call Center & Telecalling Services",
    subtitle: "Transform first impressions into lasting partnerships with our inbound and outbound telecalling expertise.",
    image: "/images/slider/slider-bg-4.jpg",
    btnText: "Explore Us",
    btnHref: "/service",
  },
  {
    id: 5,
    title: "Call Center & Telecalling Services",
    subtitle: "Lets Create Something Together",
    image: "/images/slider/slider-bg-5.jpg",
    btnText: "Explore Us",
    btnHref: "/service",
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeSlide = slides[current];

  return (
    <section
      className="relative min-h-[640px] lg:min-h-[720px] bg-slate-950 text-white flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Graphic & Light Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src={activeSlide.image}
          alt={activeSlide.title}
          fill
          priority
          className="object-cover opacity-15 filter blur-xs transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Slide Content from Reference Site */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start z-10">
            {/* Live Ecosystem Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Interactive Telecalling Ecosystem</span>
            </div>

            {/* Slide Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight min-h-[90px] sm:min-h-[110px] flex items-center">
              {activeSlide.title}
            </h1>

            {/* Slide Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl min-h-[60px]">
              {activeSlide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={activeSlide.btnHref}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-md font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all uppercase tracking-wider transform hover:-translate-y-0.5"
              >
                <span>{activeSlide.btnText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-md font-semibold text-sm sm:text-base backdrop-blur-xs transition-all uppercase tracking-wider"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Slide Number / Controls */}
            <div className="flex items-center gap-3 pt-6">
              <div className="flex items-center space-x-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`transition-all rounded-full ${
                      i === current
                        ? "w-8 h-2 bg-emerald-400"
                        : "w-2 h-2 bg-slate-700 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-slate-400 font-medium pl-2">
                0{current + 1} / 0{slides.length}
              </span>
            </div>
          </div>

          {/* Right Column: Circular Orbit Video Animation */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <HeroOrbitAnimation />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-slate-700 flex items-center justify-center transition-all hover:scale-110 focus:outline-hidden"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-slate-700 flex items-center justify-center transition-all hover:scale-110 focus:outline-hidden"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}
