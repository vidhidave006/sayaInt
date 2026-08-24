"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroOrbitalAnimation from "@/components/HeroOrbitalAnimation";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Headphones,
  CheckCircle2
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

  return (
    <section
      className="relative min-h-[640px] lg:min-h-[760px] bg-slate-950 flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Dark Gradient for Maximum Contrast */}
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
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
            </div>

            {/* Slide Content Grid */}
            <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-16 lg:py-24">
                
                {/* Left Text Column (7 cols) */}
                <div className="lg:col-span-6 space-y-6 text-white text-left z-20">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all duration-700 delay-100 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <Headphones className="w-3.5 h-3.5 text-sky-400" />
                    <span>Saya IntelliCall Telecalling Ecosystem</span>
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
                    className={`text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                  >
                    {slide.subtitle}
                  </p>

                  {/* Action Buttons */}
                  <div
                    className={`flex flex-wrap items-center gap-4 pt-4 transition-all duration-700 delay-400 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                  >
                    <Link
                      href={slide.btnHref}
                      className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3.5 rounded-md font-semibold text-sm sm:text-base shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all uppercase tracking-wider"
                    >
                      <span>{slide.btnText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 px-6 py-3.5 rounded-md font-semibold text-sm sm:text-base backdrop-blur-xs transition-all uppercase tracking-wider"
                    >
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>

                {/* Right Orbital Animation Column (6 cols) */}
                <div
                  className={`lg:col-span-6 flex items-center justify-center transition-all duration-1000 delay-300 ${
                    isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
                >
                  <HeroOrbitalAnimation />
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-xs flex items-center justify-center transition-all hover:scale-110 focus:outline-hidden"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-xs flex items-center justify-center transition-all hover:scale-110 focus:outline-hidden"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
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
