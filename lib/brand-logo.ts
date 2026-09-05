// Static (non-React) copy of components/ui/logo-mark.tsx — KoboGift brand mark SVG
// for contexts that can't render React components: favicon and OG images
// generated via next/og's ImageResponse (Satori), which accepts <img> data URIs.

const LOGO_MARK_SVG = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="kg-base" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#140c06" />
      <stop offset="100%" stop-color="#0a0705" />
    </linearGradient>
    <radialGradient id="kg-gl" cx="35%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect x="4" y="4" width="92" height="92" rx="24" fill="url(#kg-base)" />
  <rect x="4" y="4" width="92" height="92" rx="24" fill="none" stroke="#f97316" stroke-opacity="0.8" stroke-width="2" />
  <rect x="4" y="4" width="92" height="92" rx="24" fill="url(#kg-gl)" />
  <g transform="translate(50, 50)">
    <polygon points="0,-26 25,-12 0,2 -25,-12" fill="#fb923c" />
    <polygon points="-25,-12 0,2 0,28 -25,14" fill="#f97316" />
    <polygon points="0,2 25,-12 25,14 0,28" fill="#ea580c" />
    <polygon points="-6,-15 0,-18 6,-15 0,-12" fill="#ffffff" opacity="0.9" />
    <polygon points="-13,-6 0,-13 13,-6 0,1" fill="#ffffff" opacity="0.3" />
    <polygon points="-4,0 0,2 0,28 -4,26" fill="#ffffff" opacity="0.4" />
    <polygon points="0,2 4,0 4,26 0,28" fill="#ffffff" opacity="0.6" />
    <path d="M0,-26 C-10,-38 -20,-24 -6,-24 C-2,-24 0,-26 0,-26 Z" fill="#fb923c" stroke="#ffffff" stroke-width="1.2" />
    <path d="M0,-26 C10,-38 20,-24 6,-24 C2,-24 0,-26 0,-26 Z" fill="#f97316" stroke="#ffffff" stroke-width="1.2" />
    <circle cx="0" cy="-26" r="3.2" fill="#ffffff" />
    <circle cx="0" cy="-26" r="5" fill="#f97316" opacity="0.5" />
  </g>
</svg>`;

export const LOGO_MARK_DATA_URI = `data:image/svg+xml;base64,${Buffer.from(LOGO_MARK_SVG).toString("base64")}`;
