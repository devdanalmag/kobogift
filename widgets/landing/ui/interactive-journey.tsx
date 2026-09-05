"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./reveal";
import { LANDING_STEPS } from "../model/content";
import { ContentIcon } from "@/components/ui/content-icon";
import { LuCheck, LuGift } from "react-icons/lu";

export default function InteractiveJourney() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const steps = LANDING_STEPS;
  const current = steps[activeTab];

  return (
    <section id="how" className="landing-section interactive-journey-section">
      <div className="landing-container">
        <Reveal>
          <div className="landing-section-label">How It Works</div>
          <h2>
            Three Simple Steps.
            <br />
            <span className="accent-text">Zero Friction Protocol.</span>
          </h2>
          <p className="landing-section-sub">
            Whether you&apos;re sending $5 for a coffee or $5,000 for a freelance milestone,
            KoboGift handles the entire cryptographic lifecycle seamlessly.
          </p>
        </Reveal>

        {/* Tab Buttons */}
        <div className="journey-tabs-bar">
          {steps.map((step, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`journey-tab-btn ${isActive ? "active" : ""}`}
              >
                <span className="journey-tab-num">{step.num}</span>
                <span className="journey-tab-label">{step.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="journey-display-card">
          <div className="journey-grid">
            {/* Left Column: Step Description */}
            <div className="journey-info-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.num}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="journey-step-badge">
                    <ContentIcon name={current.icon} className="w-4 h-4 text-orange-400" />
                    <span>Step {current.num} · {current.badge}</span>
                  </div>

                  <h3 className="journey-step-title">{current.title}</h3>
                  <p className="journey-step-text">{current.text}</p>

                  <div className="journey-details-list">
                    {current.details.map((detail, dIdx) => (
                      <div key={dIdx} className="journey-detail-item">
                        <span className="journey-detail-dot" />
                        <span className="text-sm text-slate-300">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="journey-progress-actions">
                    <button
                      type="button"
                      disabled={activeTab === 0}
                      onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
                      className="journey-nav-btn"
                    >
                      ← Previous
                    </button>
                    <button
                      type="button"
                      disabled={activeTab === steps.length - 1}
                      onClick={() => setActiveTab((prev) => Math.min(steps.length - 1, prev + 1))}
                      className="journey-nav-btn primary"
                    >
                      Next Step →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Visual Mockup for the Step */}
            <div className="journey-mockup-col">
              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mockup-frame"
                  >
                    <div className="mockup-header">
                      <span className="mockup-dot red" />
                      <span className="mockup-dot yellow" />
                      <span className="mockup-dot green" />
                      <span className="mockup-title">kobogift.xyz/create</span>
                    </div>
                    <div className="mockup-body space-y-3">
                      <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/8">
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-bold">Amount to Send</p>
                          <p className="text-xl font-extrabold text-white">$50.00 <span className="text-xs text-orange-400 font-normal">USDC</span></p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">
                          Arc Testnet
                        </span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/8 space-y-1">
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Smart Contract Batch</p>
                        <p className="text-xs text-slate-300">1. Approve USDC · 2. Fund Gift Contract</p>
                        <p className="text-[10px] text-orange-400 flex items-center gap-1">
                          <LuCheck className="w-3 h-3 text-orange-400 shrink-0" /> Completed in 1 user confirmation
                        </p>
                      </div>
                      <div className="w-full py-2.5 rounded-xl bg-orange-500 text-slate-950 font-bold text-xs text-center shadow-md shadow-orange-500/20 flex items-center justify-center gap-1">
                        Locked in KoboGift.sol <LuCheck className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mockup-frame"
                  >
                    <div className="mockup-header">
                      <span className="mockup-dot red" />
                      <span className="mockup-dot yellow" />
                      <span className="mockup-dot green" />
                      <span className="mockup-title">Telegram / WhatsApp / DM</span>
                    </div>
                    <div className="mockup-body space-y-3">
                      {/* Chat message simulation */}
                      <div className="flex flex-col items-end space-y-1">
                        <div className="bg-orange-600/30 border border-orange-500/40 p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-xs text-white space-y-2">
                          <p>Hey! Here is the $50 USDC for dinner last night</p>
                          <div className="bg-black/40 p-2 rounded-xl border border-white/10 flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400">
                              <LuGift className="w-4 h-4" />
                            </span>
                            <div className="min-w-0">
                              <p className="font-bold text-orange-300 text-[11px] truncate">KoboGift Link: $50.00 USDC</p>
                              <p className="font-mono text-[9px] text-slate-400 truncate">kobogift.xyz/gift/0x8e2…#secret</p>
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400">Delivered · 10:42 AM</span>
                      </div>
                      <div className="text-center">
                        <span className="text-[11px] font-mono text-orange-400 bg-orange-950/60 px-2 py-1 rounded-md border border-orange-500/30">
                          Secret key in #fragment never touches the server
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mockup-frame"
                  >
                    <div className="mockup-header">
                      <span className="mockup-dot red" />
                      <span className="mockup-dot yellow" />
                      <span className="mockup-dot green" />
                      <span className="mockup-title">Recipient Claim Settlement</span>
                    </div>
                    <div className="mockup-body space-y-3 text-center">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 text-xl mx-auto">
                        <LuCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Claim Successfully Relayed!</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Circle SCA Non-Custodial Wallet Provisioned</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 flex justify-around text-xs">
                        <div>
                          <p className="text-[10px] text-slate-400">Amount Claimed</p>
                          <p className="font-bold text-orange-300">$50.00 USDC</p>
                        </div>
                        <div className="h-full w-px bg-white/10" />
                        <div>
                          <p className="text-[10px] text-slate-400">Recipient Gas Fee</p>
                          <p className="font-bold text-orange-400">$0.00 (Gasless)</p>
                        </div>
                        <div className="h-full w-px bg-white/10" />
                        <div>
                          <p className="text-[10px] text-slate-400">Finality</p>
                          <p className="font-bold text-white">&lt; 800ms</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
