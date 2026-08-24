"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on devices with a fine pointer (mouse/trackpad, not touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    const updatePosition = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", updatePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden">
      {/* Global Ambient Glow Follower */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full bg-sky-500/8 blur-[100px] pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x - 225}px, ${mousePosition.y - 225}px, 0)`,
        }}
      />
    </div>
  );
}
