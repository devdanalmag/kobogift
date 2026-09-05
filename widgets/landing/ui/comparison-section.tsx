"use client";

import { LANDING_COMPARISON } from "../model/content";
import Reveal from "./reveal";
import { LuX, LuCheck, LuClock, LuZap, LuSparkles } from "react-icons/lu";

export default function ComparisonSection() {
  const { oldWay, newWay } = LANDING_COMPARISON;

  return (
    <section className="landing-section comparison-section">
      <div className="landing-container">
        <Reveal>
          <div className="landing-section-label">Why KoboGift?</div>
          <h2>
            Crypto Transfers Are Broken.
            <br />
            <span className="accent-text">We Fixed Them.</span>
          </h2>
          <p className="landing-section-sub">
            Stop losing users at the seed phrase and gas barrier. KoboGift turns
            the entire crypto onboarding flow into a simple, friction-free link.
          </p>
        </Reveal>

        <div className="comparison-grid">
          {/* Old Way Card */}
          <Reveal className="comparison-card comparison-card--old" delay={0.05}>
            <div className="comparison-header">
              <div className="flex items-center gap-2">
                <span className="comparison-badge comparison-badge--old">The Old Way</span>
              </div>
              <h3 className="comparison-title">{oldWay.title}</h3>
              <p className="comparison-subtitle">{oldWay.subtitle}</p>
            </div>

            <ul className="comparison-list">
              {oldWay.points.map((pt, i) => (
                <li key={i} className="comparison-item comparison-item--bad">
                  <span className="comparison-icon comparison-icon--bad flex items-center justify-center">
                    <LuX className="w-3.5 h-3.5" />
                  </span>
                  <span>{pt.text}</span>
                </li>
              ))}
            </ul>

            <div className="comparison-footer comparison-footer--bad">
              <span className="font-mono text-xs text-rose-300 flex items-center gap-1.5">
                <LuClock className="w-3.5 h-3.5 shrink-0" /> Result: 15–20 min + high abandonment
              </span>
            </div>
          </Reveal>

          {/* New Way Card (KoboGift) */}
          <Reveal className="comparison-card comparison-card--new" delay={0.15}>
            <div className="comparison-glow" />
            <div className="comparison-header">
              <div className="flex items-center justify-between">
                <span className="comparison-badge comparison-badge--new">The KoboGift Protocol</span>
                <span className="text-[11px] font-mono font-bold text-orange-400 bg-orange-950/60 border border-orange-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <LuZap className="w-3 h-3 text-orange-400 shrink-0" /> &lt; 60 Seconds
                </span>
              </div>
              <h3 className="comparison-title text-white">{newWay.title}</h3>
              <p className="comparison-subtitle text-orange-300/80">{newWay.subtitle}</p>
            </div>

            <ul className="comparison-list">
              {newWay.points.map((pt, i) => (
                <li key={i} className="comparison-item comparison-item--good">
                  <span className="comparison-icon comparison-icon--good flex items-center justify-center">
                    <LuCheck className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-100 font-medium">{pt.text}</span>
                </li>
              ))}
            </ul>

            <div className="comparison-footer comparison-footer--good">
              <span className="font-mono text-xs text-orange-300 font-semibold flex items-center gap-1.5">
                <LuSparkles className="w-3.5 h-3.5 text-orange-400 shrink-0" /> Result: Instant cash in wallet · 0 gas · 100% success rate
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
