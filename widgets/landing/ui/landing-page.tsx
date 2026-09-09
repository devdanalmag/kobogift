import Link from "next/link";
import {
  LANDING_PILLARS,
  LANDING_ROADMAP,
  LANDING_USE_CASES,
} from "../model/content";
import type { LandingTxExample } from "@/lib/server/load-live-tx-examples";
import type { OnChainStats } from "@/lib/server/on-chain-stats";
import KoboGiftLogo from "@/components/ui/kobogift-logo";
import { HelpTrigger } from "@/components/ui/help-manual";
import { ContentIcon } from "@/components/ui/content-icon";
import { LuCheck, LuZap } from "react-icons/lu";
// import LandingFaq from "./landing-faq";
import HeroComposer from "./hero-composer";
import ComparisonSection from "./comparison-section";
import InteractiveJourney from "./interactive-journey";
import LiveStats from "./live-stats";
import LiveTicker from "./live-ticker";
import CursorGlow from "./cursor-glow";
import FloatingCoins from "./floating-coins";
import MagneticLink from "./magnetic-link";
import Reveal from "./reveal";
import TeamSection from "./team-section";

export type { LandingTxExample };

type LandingPageProps = {
  txExamples: LandingTxExample[];
  stats: OnChainStats;
};

export default function LandingPage({ txExamples, stats }: LandingPageProps) {
  return (
    <div className="landing-page">
      <CursorGlow />

      {/* Floating Glass Capsule Navigation Bar */}
      <nav className="landing-nav">
        <Link href="/" className="landing-nav-logo" aria-label="KoboGift Home">
          <KoboGiftLogo />
        </Link>

        <div className="landing-nav-badge-wrap">
          <span className="landing-nav-badge">
            <span className="landing-nav-pulse-dot" />
            Arc L1 Testnet
          </span>
        </div>

        <div className="landing-nav-actions">
          <a href="#how" className="landing-btn-ghost">
            How It Works
          </a>
          <a href="#comparison" className="landing-btn-ghost">
            Why Us
          </a>
          <a href="#use-cases" className="landing-btn-ghost">
            Use Cases
          </a>
          <a href="#roadmap" className="landing-btn-ghost">
            Roadmap
          </a>
          <a href="#team" className="landing-btn-ghost">
            Team
          </a>
          <Link href="/request" className="landing-btn-ghost request-link">
            Request →
          </Link>
          <Link href="/create" className="landing-btn-primary">
            <span>Send USDC</span>
            <span className="arrow">→</span>
          </Link>
          <HelpTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/70 transition hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-white" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="landing-hero-glow" aria-hidden />
        <div className="landing-hero-glow2" aria-hidden />
        <FloatingCoins />

        {/* Protocol Hero Badge */}
        <div className="landing-hero-label">
          <span className="landing-hero-label-dot" aria-hidden />
          <span>The Instant Digital Cash Link Protocol · Powered by Arc L1</span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="hero-main-title">
          Send Real Digital Cash.
          <br />
          <span className="gradient-text">In a Single Link.</span>
          <br />
          <span className="sub-gradient-text">Zero Gas. Zero Seed Phrases.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="landing-hero-sub">
          Turn USDC into magic claim links. Share money via <strong>WhatsApp, Telegram, iMessage, or X</strong>.
          Recipients tap, log in with <strong>Google in 3 seconds</strong>, and the cash is theirs in a non-custodial
          wallet — <strong>under 60 seconds</strong>, zero gas fees, zero crypto setup.
        </p>

        {/* Primary CTAs */}
        <div className="landing-hero-cta">
          <MagneticLink href="/create" className="landing-btn-primary landing-btn-large">
            <span>Create a Gift Link</span>
            <span>→</span>
          </MagneticLink>
          <MagneticLink href="/request" className="landing-btn-outline landing-btn-large">
            <span>Request Payment</span>
            <span>→</span>
          </MagneticLink>
        </div>

        <div className="mt-3 text-center">
          <a href="#how" className="text-xs text-slate-400 hover:text-orange-400 transition flex items-center justify-center gap-1">
            <span>Explore protocol lifecycle</span>
            <span>↓</span>
          </a>
        </div>

        {/* Interactive Live Link Simulator Widget */}
        <div className="mt-12 flex justify-center w-full">
          <HeroComposer />
        </div>

        {/* Live On-Chain KPI Counter */}
        <div className="landing-stats">
          <div>
            <span className="landing-stat-num">&lt; 60s</span>
            <span className="landing-stat-label">Time to first claim</span>
          </div>
          <div className="landing-stat-divider" aria-hidden />
          <div>
            <span className="landing-stat-num">$0.00</span>
            <span className="landing-stat-label">Gas for recipient</span>
          </div>
          <div className="landing-stat-divider" aria-hidden />
          <LiveStats initial={stats} />
        </div>
      </section>

      {/* Tech Stack Trust Bar */}
      <div className="landing-tech">
        <div className="landing-tech-inner">
          <span className="landing-tech-label">Built with state-of-the-art Web3 infra</span>
          <div className="landing-tech-divider" aria-hidden />
          <div className="landing-tech-badges">
            <span className="landing-tech-badge">
              <span className="landing-tech-dot arc" aria-hidden />
              Arc L1 (Chain ID 5042002)
            </span>
            <span className="landing-tech-badge">
              <span className="landing-tech-dot usdc" aria-hidden />
              Native USDC
            </span>
            <span className="landing-tech-badge">
              <span className="landing-tech-dot circle" aria-hidden />
              Circle Smart Accounts (SCA)
            </span>
            <span className="landing-tech-badge">
              <span className="landing-tech-dot gas" aria-hidden />
              Automated Gasless Relayer
            </span>
          </div>
        </div>
      </div>

      {/* Comparison Section (Old Way vs KoboGift Way) */}
      <div id="comparison">
        <ComparisonSection />
      </div>

      {/* 3-Step Interactive Protocol Workflow */}
      <InteractiveJourney />

      {/* Use Cases Section */}
      <section id="use-cases" className="landing-section">
        <div className="landing-container">
          <Reveal>
            <div className="landing-section-label">Real World Use Cases</div>
            <h2>
              Designed for Everyday
              <br />
              <span className="accent-text">Money in Motion.</span>
            </h2>
            <p className="landing-section-sub">
              From personal celebrations to global gig payments — any USDC transfer that starts with a link.
            </p>
          </Reveal>

          <div className="landing-use-cases">
            {LANDING_USE_CASES.map((card, index) => (
              <Reveal key={card.title} className="landing-use-card" delay={Math.min(index, 5) * 0.06}>
                <div className="flex items-start justify-between mb-3">
                  <span className="landing-use-card-icon flex items-center justify-center text-orange-400" aria-hidden>
                    <ContentIcon name={card.icon} className="w-6 h-6" />
                  </span>
                  <span className="landing-use-tag">{card.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                <p className="text-xs text-orange-400/90 font-mono mb-2">{card.subtitle}</p>
                <p className="text-sm text-slate-300 mb-4">{card.text}</p>
                <div className="mt-auto pt-3 border-t border-white/8 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Example flow:</span>
                  <span className="font-mono font-bold text-white bg-white/5 px-2 py-0.5 rounded-md">
                    {card.amount}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Architecture & Security Pillars */}
      <section className="landing-section landing-pillars-section">
        <div className="landing-container">
          <Reveal>
            <div className="landing-section-label">Cryptographic Architecture</div>
            <h2>
              Non-Custodial Security.
              <br />
              <span className="accent-text">Zero Trust Required.</span>
            </h2>
            <p className="landing-section-sub">
              How KoboGift achieves instant frictionless UX without compromising decentralization or fund security.
            </p>
          </Reveal>

          <div className="landing-pillars-grid">
            {LANDING_PILLARS.map((pillar, index) => (
              <Reveal key={pillar.title} className="landing-pillar-card" delay={index * 0.08}>
                <div className="pillar-icon-wrap flex items-center justify-center text-orange-400">
                  <ContentIcon name={pillar.icon} className="w-6 h-6" />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="landing-section landing-roadmap-section">
        <div className="landing-container">
          <Reveal>
            <div className="landing-section-label">Protocol Roadmap</div>
            <h2>Where We Are Going.</h2>
            <p className="landing-section-sub">
              From testnet proof-of-concept to global digital cash infrastructure on Arc.
            </p>
          </Reveal>

          <div className="landing-roadmap">
            {LANDING_ROADMAP.map((phase, index) => (
              <Reveal
                key={phase.phase}
                className={`landing-roadmap-phase landing-roadmap-phase--${phase.status}`}
                delay={Math.min(index, 5) * 0.07}
              >
                <div className="landing-roadmap-phase-header">
                  <span className="landing-roadmap-phase-tag">{phase.phase}</span>
                  {phase.status === "done" && (
                    <span className="landing-roadmap-badge landing-roadmap-badge--done flex items-center gap-1">
                      <LuCheck className="w-3 h-3" /> Live
                    </span>
                  )}
                  {phase.status === "active" && (
                    <span className="landing-roadmap-badge landing-roadmap-badge--active">
                      <span className="landing-roadmap-badge-dot" aria-hidden />
                      In Progress
                    </span>
                  )}
                  {phase.status === "planned" && (
                    <span className="landing-roadmap-badge landing-roadmap-badge--planned">Planned</span>
                  )}
                </div>
                <h3 className="landing-roadmap-phase-title">{phase.title}</h3>
                <div className="landing-roadmap-date">{phase.date}</div>
                <ul className="landing-roadmap-items">
                  {phase.items.map((item) => {
                    const text = typeof item === "string" ? item : item.text;
                    const done = typeof item !== "string" && item.done;
                    return (
                      <li key={text} className={`landing-roadmap-item${done ? " done" : ""}`}>
                        <span className="landing-roadmap-item-dot" aria-hidden />
                        {text}
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Live Arc Transactions Ticker */}
      {txExamples.length > 0 && (
        <section className="landing-section" style={{ paddingTop: 0 }}>
          <div className="landing-container">
            <Reveal>
              <div className="landing-section-label">Live Activity</div>
              <h2>Recent Protocol Events on Arc.</h2>
              <p className="landing-section-sub" style={{ marginBottom: 0 }}>
                Every gift creation and claim is recorded on-chain and verifiable in real time.
              </p>
            </Reveal>
          </div>

          <LiveTicker items={txExamples} />
        </section>
      )}

      {/* Interactive FAQ Accordion */}
      {/* <LandingFaq /> */}

      {/* Team & Contributors Section */}
      <TeamSection />

      {/* High-Impact Magnetic Bottom CTA Banner */}
      <section className="landing-section landing-cta-section">
        <div className="landing-container">
          <div className="landing-cta-banner">
            <div className="landing-cta-glow" />
            <Reveal>
              <span className="landing-cta-tag flex items-center gap-1.5 justify-center">
                <LuZap className="w-3.5 h-3.5 text-orange-400 shrink-0" /> Ready in 30 Seconds
              </span>
              <h2 className="landing-cta-heading">
                Ready to Send Your First
                <br />
                <span className="gradient-text">KoboGift Link?</span>
              </h2>
              <p className="landing-cta-sub">
                No complex wallet downloads. No seed phrases. Claim links settle on Arc L1 with native USDC.
              </p>
              <div className="landing-cta-buttons">
                <MagneticLink href="/create" className="landing-btn-primary landing-btn-large">
                  <span>Send a Gift Now</span>
                  <span>→</span>
                </MagneticLink>
                <MagneticLink href="/request" className="landing-btn-outline landing-btn-large">
                  <span>Request Payment</span>
                  <span>→</span>
                </MagneticLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Redesigned Footer */}
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
          <a href="#team" className="landing-footer-link">
            Team
          </a>
          <a
            href="https://x.com/kobogift"
            className="landing-footer-link"
            target="_blank"
            rel="noreferrer"
          >
            X (@kobogift)
          </a>
          <Link href="/gifts" className="landing-footer-link">
            My Gifts
          </Link>
          <Link href="/request" className="landing-footer-link">
            Request Link
          </Link>
          <Link href="/stats" className="landing-footer-link">
            Analytics
          </Link>
          <a
            href="https://docs.arc.network"
            className="landing-footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Arc Docs
          </a>
          <a
            href="https://faucet.circle.com"
            className="landing-footer-link"
            target="_blank"
            rel="noreferrer"
          >
            USDC Faucet
          </a>
          <a
            href="https://github.com/DevDanAlmag/kobogift"
            className="landing-footer-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
