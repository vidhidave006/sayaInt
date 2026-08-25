"use client";

import { useEffect, useRef } from "react";

interface LiquidOrbBackgroundProps {
  className?: string;
  intensity?: "subtle" | "vibrant" | "deep";
  showParticles?: boolean;
}

export default function LiquidOrbBackground({
  className = "",
  intensity = "vibrant",
  showParticles = true,
}: LiquidOrbBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse tracking for fluid interactivity
    let mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
      radius: 220,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Organic Liquid Orbs configuration
    interface Orb {
      x: number;
      y: number;
      baseRadius: number;
      radius: number;
      vx: number;
      vy: number;
      hue: number;
      secondaryHue: number;
      phase: number;
      speed: number;
      morphSpeed: number;
      points: number;
      angles: number[];
      radii: number[];
    }

    const orbsCount = 5;
    const orbs: Orb[] = [];

    const colorPalettes = [
      { primary: [2, 132, 199], secondary: [14, 165, 233] },   // Sky Blue / Azure
      { primary: [59, 130, 246], secondary: [99, 102, 241] },  // Royal Blue / Indigo
      { primary: [16, 185, 129], secondary: [6, 182, 212] },   // Emerald / Cyan
      { primary: [139, 92, 246], secondary: [217, 70, 239] },  // Violet / Fuchsia
      { primary: [14, 116, 144], secondary: [56, 189, 248] },  // Deep Ocean / Neon Sky
    ];

    for (let i = 0; i < orbsCount; i++) {
      const points = 12;
      const angles = [];
      const radii = [];
      for (let p = 0; p < points; p++) {
        angles.push((p * Math.PI * 2) / points);
        radii.push(1);
      }

      const palette = colorPalettes[i % colorPalettes.length];
      const baseR = Math.min(width, height) * (0.2 + (i % 3) * 0.08);

      orbs.push({
        x: width * 0.2 + Math.random() * width * 0.6,
        y: height * 0.2 + Math.random() * height * 0.6,
        baseRadius: baseR,
        radius: baseR,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        hue: i * 60,
        secondaryHue: (i * 60 + 40) % 360,
        phase: Math.random() * Math.PI * 2,
        speed: 0.015 + Math.random() * 0.02,
        morphSpeed: 0.02 + Math.random() * 0.03,
        points,
        angles,
        radii,
      });
    }

    // Micro Luminescent Floating Particles
    interface Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      alpha: number;
      maxAlpha: number;
      pulseSpeed: number;
    }

    const particles: Particle[] = [];
    const particleCount = showParticles ? 35 : 0;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.2 - Math.random() * 0.5,
        alpha: Math.random(),
        maxAlpha: 0.2 + Math.random() * 0.6,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.015;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Organic Morphing Liquid Orbs
      orbs.forEach((orb, index) => {
        orb.phase += orb.morphSpeed;

        // Position drift
        orb.x += orb.vx + Math.sin(time * 0.5 + index) * 0.4;
        orb.y += orb.vy + Math.cos(time * 0.5 + index) * 0.4;

        // Boundary bouncing with soft margins
        if (orb.x < -orb.baseRadius * 0.2) orb.vx = Math.abs(orb.vx);
        if (orb.x > width + orb.baseRadius * 0.2) orb.vx = -Math.abs(orb.vx);
        if (orb.y < -orb.baseRadius * 0.2) orb.vy = Math.abs(orb.vy);
        if (orb.y > height + orb.baseRadius * 0.2) orb.vy = -Math.abs(orb.vy);

        // Mouse displacement interaction (liquid repel & attraction)
        const dx = mouse.x - orb.x;
        const dy = mouse.y - orb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius + orb.baseRadius) {
          const force = (1 - dist / (mouse.radius + orb.baseRadius)) * 0.03;
          orb.x += dx * force;
          orb.y += dy * force;
        }

        // Calculate smooth morphing vertices using sinusoidal harmonic waves
        const vertices: { x: number; y: number }[] = [];
        for (let p = 0; p < orb.points; p++) {
          const angle = orb.angles[p];
          // Harmonic wave distortion
          const wave1 = Math.sin(angle * 3 + orb.phase * 1.2) * 0.18;
          const wave2 = Math.cos(angle * 2 - orb.phase * 0.8) * 0.12;
          const wave3 = Math.sin(angle * 5 + time) * 0.08;
          const currentR = orb.baseRadius * (1 + wave1 + wave2 + wave3);

          vertices.push({
            x: orb.x + Math.cos(angle) * currentR,
            y: orb.y + Math.sin(angle) * currentR,
          });
        }

        // Draw Liquid Spline / Curved Metaball shape
        ctx.save();
        ctx.beginPath();
        if (vertices.length > 0) {
          ctx.moveTo(
            (vertices[0].x + vertices[vertices.length - 1].x) / 2,
            (vertices[0].y + vertices[vertices.length - 1].y) / 2
          );
          for (let p = 0; p < vertices.length; p++) {
            const nextP = (p + 1) % vertices.length;
            const midX = (vertices[p].x + vertices[nextP].x) / 2;
            const midY = (vertices[p].y + vertices[nextP].y) / 2;
            ctx.quadraticCurveTo(vertices[p].x, vertices[p].y, midX, midY);
          }
        }
        ctx.closePath();

        // 3D Liquid Gradient Shading
        const palette = colorPalettes[index % colorPalettes.length];
        const radGrad = ctx.createRadialGradient(
          orb.x - orb.baseRadius * 0.25,
          orb.y - orb.baseRadius * 0.25,
          orb.baseRadius * 0.1,
          orb.x,
          orb.y,
          orb.baseRadius * 1.3
        );

        const alphaMultiplier = intensity === "deep" ? 0.35 : intensity === "subtle" ? 0.2 : 0.45;

        radGrad.addColorStop(0, `rgba(255, 255, 255, ${0.4 * alphaMultiplier})`);
        radGrad.addColorStop(
          0.2,
          `rgba(${palette.secondary[0]}, ${palette.secondary[1]}, ${palette.secondary[2]}, ${
            0.8 * alphaMultiplier
          })`
        );
        radGrad.addColorStop(
          0.6,
          `rgba(${palette.primary[0]}, ${palette.primary[1]}, ${palette.primary[2]}, ${
            0.5 * alphaMultiplier
          })`
        );
        radGrad.addColorStop(
          1,
          `rgba(${palette.primary[0]}, ${palette.primary[1]}, ${palette.primary[2]}, 0)`
        );

        ctx.fillStyle = radGrad;
        ctx.fill();

        // Outer glow
        ctx.shadowColor = `rgba(${palette.secondary[0]}, ${palette.secondary[1]}, ${palette.secondary[2]}, 0.5)`;
        ctx.shadowBlur = 40;
        ctx.fill();
        ctx.restore();
      });

      // 2. Draw Floating Luminescent Micro-Particles
      if (showParticles) {
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.alpha += p.pulseSpeed;

          if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
            p.pulseSpeed = -p.pulseSpeed;
          }

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(186, 230, 253, ${p.alpha * 0.7})`;
          ctx.shadowColor = "rgba(56, 189, 248, 0.8)";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.restore();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, showParticles]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      {/* 1. Deep Midnight Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#070e1e] to-slate-950" />

      {/* 2. Interactive High-Performance Live Liquid Orb Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover filter blur-[24px] sm:blur-[32px] transform scale-105"
      />

      {/* 3. Ultra-Vibrant CSS Liquid Morphing Spheres (Layered on top of canvas for high-gloss depth) */}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-sky-500/30 via-cyan-400/25 to-blue-600/30 blur-3xl animate-float opacity-80" />
      <div className="absolute bottom-[15%] right-[10%] w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-br from-indigo-500/25 via-blue-500/20 to-teal-400/25 blur-3xl animate-float-reverse opacity-75" />
      <div className="absolute top-[40%] right-[35%] w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-sky-400/20 to-emerald-400/20 blur-2xl animate-pulse-subtle opacity-60" />

      {/* 4. Optional HTML5 Video Layer (If liquid-orb.mp4 is available) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none"
      >
        <source src="/videos/liquid-orb.mp4" type="video/mp4" />
        <source src="/videos/liquid-orb.webm" type="video/webm" />
      </video>

      {/* 5. Sleek Digital Grid Matrix Overlay for Tech Aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* 6. Vignette Darkness & Readability Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-slate-950/90" />
    </div>
  );
}
