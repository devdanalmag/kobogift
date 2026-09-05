import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KoboGift — Send & Request USDC with a Link",
    short_name: "KoboGift",
    description: "Send USDC with a link. No wallet needed.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090e",
    theme_color: "#f97316",
    orientation: "portrait",
    categories: ["finance", "utilities"],
    icons: [
      {
        src: "/kobogift-icon-512.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/kobogift-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Send a gift",
        short_name: "Gift",
        description: "Create a new USDC gift link",
        url: "/create",
        icons: [{ src: "/kobogift-icon-512.png", sizes: "512x512" }],
      },
      {
        name: "My wallet",
        short_name: "Wallet",
        description: "View your USDC balance",
        url: "/wallet",
        icons: [{ src: "/kobogift-icon-512.png", sizes: "512x512" }],
      },
    ],
  };
}
