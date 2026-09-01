"use client";

import { useId } from "react";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

/**
 * KoboGift Brand Mark — Geometric glowing 3D gift-token with emerald, cyan, and gold gradient facets.
 */
export default function LogoMark({ size = 28, className }: LogoMarkProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const gBase = `kg-base-${uid}`;
  const gBorder = `kg-border-${uid}`;
  const gEmerald = `kg-em-${uid}`;
  const gCyan = `kg-cy-${uid}`;
  const gGold = `kg-gd-${uid}`;
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
        filter: "drop-shadow(0 3px 12px rgba(16, 185, 129, 0.45))",
      }}
    >
      <defs>
        {/* Background gradient */}
        <linearGradient id={gBase} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#081414" />
          <stop offset="50%" stopColor="#0a1d1c" />
          <stop offset="100%" stopColor="#06121a" />
        </linearGradient>

        {/* Outer border gradient */}
        <linearGradient id={gBorder} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
        </linearGradient>

        {/* Facet gradients */}
        <linearGradient id={gEmerald} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        <linearGradient id={gCyan} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        <linearGradient id={gGold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        {/* Radial sheen */}
        <radialGradient id={gGlow} cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
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
        stroke={`url(#${gBorder})`}
        strokeWidth="2.5"
      />
      <rect x="4" y="4" width="92" height="92" rx="24" fill={`url(#${gGlow})`} />

      {/* 3D Gift-Token Geometry */}
      <g transform="translate(50, 50)">
        {/* Isometric Cube Faces */}
        {/* Top Face (Emerald Sheen) */}
        <polygon
          points="0,-26 25,-12 0,2 -25,-12"
          fill={`url(#${gEmerald})`}
        />
        {/* Left Face (Cyan Sheen) */}
        <polygon
          points="-25,-12 0,2 0,28 -25,14"
          fill={`url(#${gCyan})`}
        />
        {/* Right Face (Gold Sheen) */}
        <polygon
          points="0,2 25,-12 25,14 0,28"
          fill={`url(#${gGold})`}
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
          fill="#34d399"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        <path
          d="M0,-26 C10,-38 20,-24 6,-24 C2,-24 0,-26 0,-26 Z"
          fill="#fbbf24"
          stroke="#ffffff"
          strokeWidth="1.2"
        />

        {/* Center Sparkle Glint */}
        <circle cx="0" cy="-26" r="3.2" fill="#ffffff" />
        <circle cx="0" cy="-26" r="5" fill="#10b981" opacity="0.5" />
      </g>
    </svg>
  );
}
