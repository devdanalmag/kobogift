import type { Metadata } from "next";
import Link from "next/link";
import "../landing.css";
import TeamSection from "@/widgets/landing/ui/team-section";
import KoboGiftLogo from "@/components/ui/kobogift-logo";
import CursorGlow from "@/widgets/landing/ui/cursor-glow";

export const metadata: Metadata = {
  title: "Team & Contributors — KoboGift",
  description:
    "Meet the team and core contributors building KoboGift on Arc L1 with Circle Programmable Wallets.",
};

export default function TeamPage() {
  return (
    <div className="landing-page">
      <CursorGlow />

      <nav className="landing-nav">
        <Link href="/" className="landing-nav-logo" aria-label="KoboGift Home">
          <KoboGiftLogo />
        </Link>
        <div className="landing-nav-actions">
          <Link href="/" className="landing-btn-ghost">
            ← Home
          </Link>
          <Link href="/create" className="landing-btn-primary">
            <span>Send USDC</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </nav>

      <main style={{ paddingTop: "100px", paddingBottom: "40px" }}>
        <TeamSection />
      </main>

      <footer className="landing-footer">
        <div className="landing-footer-left">
          <Link href="/" className="landing-footer-logo">
            <KoboGiftLogo />
          </Link>
          <span className="landing-footer-copy">
            Built on Arc L1 · Powered by Circle Programmable Wallets
          </span>
        </div>
        <div className="landing-footer-links">
          <Link href="/" className="landing-footer-link">
            Home
          </Link>
          <a
            href="https://x.com/kobogift"
            className="landing-footer-link"
            target="_blank"
            rel="noreferrer"
          >
            X (@kobogift)
          </a>
          <Link href="/create" className="landing-footer-link">
            Send USDC
          </Link>
          <Link href="/gifts" className="landing-footer-link">
            My Gifts
          </Link>
        </div>
      </footer>
    </div>
  );
}
