"use client";

import { useId } from "react";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

/**
 * KoboGift Brand Mark — Geometric glowing 3D gift-token in cohesive orange theme.
 */
export default function LogoMark({ size = 28, className }: LogoMarkProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const gBase = `kg-base-${uid}`;
  const gGlow = `kg-gl-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
      style={{
        flexShrink: 0,
        filter: "drop-shadow(0 3px 12px rgba(249, 115, 22, 0.45))",
      }}
    >
      <defs>
        {/* Background dark tile */}
        <linearGradient id={gBase} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#140c06" />
          <stop offset="100%" stopColor="#0a0705" />
        </linearGradient>

        {/* Radial sheen */}
        <radialGradient id={gGlow} cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Container Tile */}
      <rect x="4" y="4" width="92" height="92" rx="24" fill={`url(#${gBase})`} />
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="24"
        fill="none"
        stroke="#f97316"
        strokeOpacity="0.8"
        strokeWidth="2"
      />
      <rect x="4" y="4" width="92" height="92" rx="24" fill={`url(#${gGlow})`} />

      {/* 3D Gift-Token Geometry */}
      <g transform="translate(50, 50)">
        {/* Isometric Cube Faces (Solid Orange Shades) */}
        {/* Top Face */}
        <polygon
          points="0,-26 25,-12 0,2 -25,-12"
          fill="#fb923c"
        />
        {/* Left Face */}
        <polygon
          points="-25,-12 0,2 0,28 -25,14"
          fill="#f97316"
        />
        {/* Right Face */}
        <polygon
          points="0,2 25,-12 25,14 0,28"
          fill="#ea580c"
        />

        {/* Ribbon Stripes across isometric faces */}
        {/* Top ribbon vertical */}
        <polygon
          points="-6,-15 0,-18 6,-15 0,-12"
          fill="#ffffff"
          opacity="0.9"
        />
        {/* Top ribbon horizontal */}
        <polygon
          points="-13,-6 0,-13 13,-6 0,1"
          fill="#ffffff"
          opacity="0.3"
        />
        {/* Left vertical ribbon */}
        <polygon
          points="-4,0 0,2 0,28 -4,26"
          fill="#ffffff"
          opacity="0.4"
        />
        {/* Right vertical ribbon */}
        <polygon
          points="0,2 4,0 4,26 0,28"
          fill="#ffffff"
          opacity="0.6"
        />

        {/* Top Gift Bow Ribbon Loops */}
        <path
          d="M0,-26 C-10,-38 -20,-24 -6,-24 C-2,-24 0,-26 0,-26 Z"
          fill="#fb923c"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        <path
          d="M0,-26 C10,-38 20,-24 6,-24 C2,-24 0,-26 0,-26 Z"
          fill="#f97316"
          stroke="#ffffff"
          strokeWidth="1.2"
        />

        {/* Center Sparkle Glint */}
        <circle cx="0" cy="-26" r="3.2" fill="#ffffff" />
        <circle cx="0" cy="-26" r="5" fill="#f97316" opacity="0.5" />
      </g>
    </svg>
  );
}
