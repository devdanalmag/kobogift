"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ContentIcon } from "@/components/ui/content-icon";
import { LuClock, LuLink, LuCheck } from "react-icons/lu";

type ThemeOption = {
  id: string;
  label: string;
  iconKey: string;
  gradient: string;
  glowColor: string;
  defaultMsg: string;
};

const THEMES: ThemeOption[] = [
  {
    id: "birthday",
    label: "Birthday",
    iconKey: "party",
    gradient: "bg-[#0e1424]",
    glowColor: "rgba(249, 115, 22, 0.3)",
    defaultMsg: "Happy Birthday! Have a wonderful day on me!",
  },
  {
    id: "coffee",
    label: "Coffee",
    iconKey: "coffee",
    gradient: "bg-[#0e1424]",
    glowColor: "rgba(249, 115, 22, 0.3)",
    defaultMsg: "Coffee & breakfast is on me today!",
  },
  {
    id: "bounty",
    label: "Bounty",
    iconKey: "zap",
    gradient: "bg-[#0e1424]",
    glowColor: "rgba(249, 115, 22, 0.3)",
    defaultMsg: "Great work on that bug fix & feature release!",
  },
  {
    id: "surprise",
    label: "Surprise",
    iconKey: "gift",
    gradient: "bg-[#0e1424]",
    glowColor: "rgba(249, 115, 22, 0.3)",
    defaultMsg: "A little digital dollar surprise for you!",
  },
  {
    id: "pay",
    label: "Split Bill",
    iconKey: "utensils",
    gradient: "bg-[#0e1424]",
    glowColor: "rgba(249, 115, 22, 0.3)",
    defaultMsg: "Here's my share for dinner last night!",
  },
];

const PRESET_AMOUNTS = [10, 25, 50, 100, 250];

export default function HeroComposer() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>(THEMES[0]);
  const [amount, setAmount] = useState<number>(25);
  const [senderName, setSenderName] = useState<string>("Alex K.");
  const [message, setMessage] = useState<string>(THEMES[0].defaultMsg);
  const [copied, setCopied] = useState(false);

  const handleThemeChange = (theme: ThemeOption) => {
    setSelectedTheme(theme);
    setMessage(theme.defaultMsg);
  };

  const simulatedHash = "0x7f4b29";
  const simulatedLink = `kobogift.xyz/gift/${simulatedHash}#s3cr3t_k3y_92a`;

  const copySimulatedLink = async () => {
    try {
      await navigator.clipboard.writeText(`https://${simulatedLink}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="hero-composer-container">
      {/* Glow aura */}
      <div
        className="hero-composer-aura"
        style={{ background: `radial-gradient(circle, ${selectedTheme.glowColor} 0%, transparent 70%)` }}
      />

      <div className="hero-composer-grid">
        {/* Left Side: Interactive Controls */}
        <div className="hero-composer-controls">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-2 w-2 rounded-full bg-orange-400 animate-ping" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-orange-400">
              Interactive Link Simulator
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-4">
            Try Composing a Gift Link
          </h3>

          {/* Theme selector */}
          <div className="space-y-1.5 mb-4">
            <label className="text-xs text-slate-400 font-medium">Select Occasion</label>
            <div className="grid grid-cols-5 gap-1.5">
              {THEMES.map((theme) => {
                const isSelected = selectedTheme.id === theme.id;
                return (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => handleThemeChange(theme)}
                    className={`flex flex-col items-center justify-center p-2 rounded-xl text-xs transition border ${
                      isSelected
                        ? "border-orange-400/80 bg-orange-500/15 text-white font-medium shadow-sm shadow-orange-500/20"
                        : "border-white/8 bg-white/4 text-slate-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <ContentIcon name={theme.iconKey} className="w-4 h-4 mb-1 text-orange-400" />
                    <span className="text-[10px] leading-tight truncate">{theme.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Amount selector */}
          <div className="space-y-1.5 mb-4">
            <div className="flex items-center justify-between">
              <label className="text-xs text-slate-400 font-medium">Gift Amount (USDC)</label>
              <span className="text-xs font-mono font-bold text-orange-400">${amount} USDC</span>
            </div>
            <div className="flex items-center gap-2">
              {PRESET_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setAmount(amt)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition border ${
                    amount === amt
                      ? "border-orange-400 bg-orange-500 text-slate-950 font-bold"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:text-white"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>

          {/* Sender & Note Inputs */}
          <div className="space-y-3 mb-5">
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-1">Your Name</label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                maxLength={24}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-orange-400 transition"
                placeholder="Sender name"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium block mb-1">Personal Note</label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={80}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-orange-400 transition"
                placeholder="Write a message"
              />
            </div>
          </div>

          {/* CTA Link */}
          <Link
            href={`/create?amount=${amount}&note=${encodeURIComponent(message)}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99] transition transform"
          >
            <span>Launch Real Gift with ${amount} USDC</span>
            <span>→</span>
          </Link>
        </div>

        {/* Right Side: 3D Hologram Gift Card Preview */}
        <div className="hero-composer-preview">
          <div className="text-center mb-3">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">
              Live Recipient Preview
            </span>
          </div>

          <motion.div
            key={selectedTheme.id}
            initial={{ opacity: 0.8, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`hero-preview-card ${selectedTheme.gradient} border border-orange-500/30`}
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                <ContentIcon name={selectedTheme.iconKey} className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-[11px] font-medium text-orange-300">KoboGift · Arc L1</span>
              </div>
              <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded-full flex items-center gap-1">
                <LuClock className="w-3 h-3 text-orange-400" /> 24h Expiry
              </span>
            </div>

            {/* Middle: Gift amount */}
            <div className="my-5 text-center">
              <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">
                You received
              </div>
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  ${amount}.00
                </span>
                <span className="text-sm font-bold text-orange-400">USDC</span>
              </div>
              <div className="mt-1 text-[11px] text-orange-400/80 font-mono">
                Gasless claim · Zero fee for you
              </div>
            </div>

            {/* Note & Sender bubble */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-3 mb-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-5 w-5 rounded-full bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-[10px] font-bold text-orange-300">
                  {senderName ? senderName[0].toUpperCase() : "A"}
                </div>
                <span className="text-xs font-semibold text-white">
                  From: {senderName || "A Friend"}
                </span>
              </div>
              <p className="text-xs text-slate-300 italic pl-7 leading-relaxed">
                &ldquo;{message || "Enjoy your gift!"}&rdquo;
              </p>
            </div>

            {/* Claim Action Mockup */}
            <div className="space-y-2">
              <div className="w-full py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-2 shadow-md">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Claim with 1-Tap Google Login</span>
              </div>
              <div className="text-[10px] text-center text-slate-400">
                Non-custodial wallet created instantly in background
              </div>
            </div>
          </motion.div>

          {/* Generated Shareable Link Pill */}
          <div className="mt-3 flex items-center gap-2 bg-black/60 border border-white/10 rounded-xl px-3 py-2">
            <LuLink className="text-orange-400 text-xs shrink-0" />
            <span className="font-mono text-[11px] text-slate-300 truncate flex-1">
              {simulatedLink}
            </span>
            <button
              type="button"
              onClick={copySimulatedLink}
              className="text-[10px] font-semibold text-orange-300 hover:text-orange-200 bg-orange-500/20 px-2 py-1 rounded-md transition flex items-center gap-1"
            >
              {copied ? (
                <>
                  <LuCheck className="w-3 h-3 text-orange-400" /> Copied!
                </>
              ) : (
                "Copy"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
