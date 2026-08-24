"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Award, ThumbsUp, Coffee, CheckCircle2, TrendingUp, BarChart3, Clock } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function CounterItem({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            // Ease out quad
            const currentVal = Math.floor(percentage * (2 - percentage) * end);
            setCount(currentVal);
            if (percentage < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={elementRef} className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
      {count}
      <span className="text-sky-400 font-bold">{suffix}</span>
    </div>
  );
}

export default function CounterSection({ showHeader = true }: { showHeader?: boolean }) {
  const stats = [
    {
      icon: Users,
      value: 150,
      suffix: "+",
      label: "Happy Clients",
      desc: "Trusted by top enterprises & startups across India",
      color: "from-sky-500 to-blue-600",
      iconColor: "text-sky-400"
    },
    {
      icon: Award,
      value: 130,
      suffix: "+",
      label: "Projects Completed",
      desc: "High conversion telecalling & BPO campaigns",
      color: "from-indigo-500 to-purple-600",
      iconColor: "text-indigo-400"
    },
    {
      icon: ThumbsUp,
      value: 99,
      suffix: "%",
      label: "Positive Feedback",
      desc: "Industry-leading customer satisfaction rate",
      color: "from-emerald-500 to-teal-600",
      iconColor: "text-emerald-400"
    },
    {
      icon: Coffee,
      value: 250,
      suffix: "+",
      label: "Campaigns Executed",
      desc: "Delivered with precision, transparency & speed",
      color: "from-amber-500 to-orange-600",
      iconColor: "text-amber-400"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Clients Choose Saya Intellicall
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We leverage cost-effective operations, scalable teams, real-time advanced analytics, and dedicated account management to maximize your customer outreach and ROI.
            </p>
          </div>
        )}

        {/* Counter Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-sky-500/40 p-8 rounded-2xl backdrop-blur-xs transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl group text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-900/80 border border-slate-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                </div>
                <CounterItem end={stat.value} suffix={stat.suffix} />
                <h3 className="text-lg font-bold text-slate-100 mt-2">{stat.label}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-normal">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
