"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  PhoneCall,
  Sparkles
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
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative min-h-[540px] md:min-h-[640px] lg:min-h-[700px] bg-slate-950 flex items-center justify-center overflow-hidden"
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
            {/* Background Image */}
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
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
            </div>

            {/* Slide Content */}
            <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
              <div className="max-w-3xl py-20 text-white space-y-6 flex flex-col items-center">
                {/* Main Heading */}
                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight transition-all duration-700 delay-100 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p
                  className={`text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>

                {/* Explore Us Action Button */}
                <div
                  className={`flex items-center gap-4 pt-4 transition-all duration-700 delay-300 ${
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
