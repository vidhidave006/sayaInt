"use client";

import React, { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  as?: React.ElementType;
  href?: string;
  [key: string]: any;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 25,
  onClick,
  as: Component = "div",
  href,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center (-1 to 1)
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Scale movement by strength
    setPosition({
      x: (middleX / (width / 2)) * strength,
      y: (middleY / (height / 2)) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" : "transform 0.1s ease-out",
      }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={className}
        {...rest}
      >
        {children}
      </Component>
    </div>
  );
}
