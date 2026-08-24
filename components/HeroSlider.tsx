"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Award
} from "lucide-react";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    tagline: "India's Trusted Telecalling Partner",
    title: "Crafting Digital Experience",
    subtitle: "Powerful Conversations. Meaningful Results. Delivering exceptional customer engagement that converts leads into lasting partnerships.",
    image: "/images/slider/slider-bg-1.jpg",
    primaryBtnText: "Explore Our Services",
    primaryBtnHref: "/service",
    secondaryBtnText: "Get In Touch",
    secondaryBtnHref: "/contact"
  },
  {
    id: 2,
    tagline: "End-to-End Customer Solutions",
    title: "We Combine Strategy and Technology",
    subtitle: "From first touch to final follow-up, we deliver seamless inbound and outbound support that builds trust and drives sustainable growth.",
    image: "/images/slider/slider-bg-2.jpg",
    primaryBtnText: "Explore Solutions",
    primaryBtnHref: "/service",
    secondaryBtnText: "About Saya",
    secondaryBtnHref: "/about"
  },
  {
    id: 3,
    tagline: "Scale Your Sales & Support",
    title: "Result-Driven Telecalling Services",
    subtitle: "Delivering exceptional inbound and outbound telecalling solutions across India to boost your customer engagement, drive sales, and elevate brand loyalty.",
    image: "/images/slider/slider-bg-3.jpg",
    primaryBtnText: "Discover Services",
    primaryBtnHref: "/service",
    secondaryBtnText: "Call Us Today",
    secondaryBtnHref: "tel:+918983689836"
  },
  {
    id: 4,
    tagline: "Industry-Specific BPO Expertise",
    title: "Call Center & Telecalling Excellence",
    subtitle: "Transform first impressions into lasting partnerships with our specialized inbound and outbound telecalling expertise for events, real estate, and retail.",
    image: "/images/slider/slider-bg-4.jpg",
    primaryBtnText: "View Case Studies",
    primaryBtnHref: "/about",
    secondaryBtnText: "Contact Us",
    secondaryBtnHref: "/contact"
  },
  {
    id: 5,
    tagline: "24/7 Dedicated Support",
    title: "Let's Create Something Together",
    subtitle: "Every ring is a new opportunity. Let's make each one count with intelligent multichannel support (IVR, WhatsApp, SMS & Voice).",
    image: "/images/slider/slider-bg-5.jpg",
    primaryBtnText: "Get Started Now",
    primaryBtnHref: "/contact",
    secondaryBtnText: "Meet Our Team",
    secondaryBtnHref: "/team"
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

  return (
    <section
      className="relative min-h-[580px] lg:min-h-[720px] bg-slate-950 flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Parallax feeling */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className={`object-cover object-center transition-transform duration-7000 ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
              {/* Dark Gradient Overlay for Maximum Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
              <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/90" />
            </div>

            {/* Slide Content */}
            <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl py-20 lg:py-28 text-white space-y-6">
                {/* Pill Tagline */}
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md transform transition-all duration-700 delay-100 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>{slide.tagline}</span>
                </div>

                {/* Main Heading */}
                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight transition-all duration-700 delay-200 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p
                  className={`text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>

                {/* Badges preview */}
                <div
                  className={`flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1 transition-all duration-700 delay-350 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Multilingual Agents</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <span>DNC & GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>99% Client Satisfaction</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-400 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <Link
                    href={slide.primaryBtnHref}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{slide.primaryBtnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={slide.secondaryBtnHref}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base backdrop-blur-md transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-sky-400" />
                    <span>{slide.secondaryBtnText}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/10 backdrop-blur-xs flex items-center justify-center transition-all hover:scale-110 focus:outline-hidden"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/10 backdrop-blur-xs flex items-center justify-center transition-all hover:scale-110 focus:outline-hidden"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all rounded-full ${
              i === current
                ? "w-8 h-2.5 bg-sky-400"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
