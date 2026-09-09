"use client";

import Reveal from "./reveal";
import { FaXTwitter } from "react-icons/fa6";
import { LuUsers, LuSparkles, LuExternalLink, LuShieldCheck } from "react-icons/lu";

export type TeamMember = {
  name: string;
  handle: string;
  role: string;
  bio: string;
  avatarInitials: string;
  xUrl: string;
};

const OFFICIAL_ACCOUNT = {
  name: "KoboGift",
  handle: "@kobogift",
  role: "Official Protocol Account",
  bio: "Instant digital cash links on Arc L1. Zero gas fees, zero seed phrases, powered by Circle Programmable Wallets.",
  xUrl: "https://x.com/kobogift",
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Musa Akoke",
    handle: "@MusaAkoke",
    role: "Founder",
    bio: "Web3 creator, DeFi Risk & Security researcher, protocol builder.",
    avatarInitials: "MA",
    xUrl: "https://x.com/MusaAkoke",
  },
  {
    name: "ArewA",
    handle: "@ArewA_96",
    role: "Co-Founder",
    bio: "Web3 creator & community builder.",
    avatarInitials: "AR",
    xUrl: "https://x.com/ArewA_96",
  },
  {
    name: "NunuMar",
    handle: "@nunu_mar",
    role: "Co-Founder",
    bio: "Crypto Enthusiast & Protocol Contributor.",
    avatarInitials: "NM",
    xUrl: "https://x.com/nunu_mar",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="landing-section" style={{ position: "relative" }}>
      <div className="landing-container">
        <Reveal>
          <div className="landing-section-label flex items-center justify-center gap-1.5 mx-auto">
            <LuUsers className="w-3.5 h-3.5 text-orange-400" />
            <span>Team & Contributors</span>
          </div>
          <h2>
            The Minds Behind <span className="gradient-text">KoboGift.</span>
          </h2>
          <p className="landing-section-sub">
            Passionate builders reimagining how value travels across the internet with native USDC on Arc.
          </p>
        </Reveal>

        {/* Official Project Account Spotlight Card */}
        <Reveal delay={0.05} className="mb-8">
          <div className="relative overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-r from-orange-950/30 via-black/40 to-amber-950/20 p-6 sm:p-8 backdrop-blur-md shadow-2xl transition hover:border-orange-500/50">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-black text-2xl shadow-lg shadow-orange-500/20">
                  🎁
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-orange-400 border border-orange-500/40">
                    <LuShieldCheck className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">{OFFICIAL_ACCOUNT.name}</h3>
                    <span className="rounded-full bg-orange-500/20 border border-orange-500/40 px-2.5 py-0.5 text-[11px] font-medium text-orange-300">
                      Official X
                    </span>
                  </div>
                  <p className="font-mono text-sm text-orange-400/90 font-medium">
                    {OFFICIAL_ACCOUNT.handle}
                  </p>
                  <p className="text-xs text-white/60 max-w-xl leading-relaxed">
                    {OFFICIAL_ACCOUNT.bio}
                  </p>
                </div>
              </div>

              <a
                href={OFFICIAL_ACCOUNT.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="landing-btn-primary shrink-0 flex items-center gap-2 !px-5 !py-2.5 text-sm"
              >
                <FaXTwitter className="w-4 h-4" />
                <span>Follow @kobogift</span>
                <LuExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <Reveal
              key={member.handle}
              delay={0.1 + index * 0.08}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-orange-500/5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 text-white font-bold text-base tracking-wider transition group-hover:scale-105 group-hover:border-orange-500/40 group-hover:from-orange-500/20 group-hover:to-orange-600/10">
                    {member.avatarInitials}
                  </div>
                  <a
                    href={member.xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow ${member.name} on X`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-orange-400/50 hover:bg-orange-500/20 hover:text-white"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-1 text-left">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-orange-200 transition">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-orange-400 font-medium">
                    {member.handle}
                  </p>
                  <span className="inline-block rounded bg-white/8 px-2 py-0.5 text-[11px] font-medium text-white/70">
                    {member.role}
                  </span>
                </div>

                <p className="text-xs text-white/60 leading-relaxed text-left">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/8 text-left">
                <a
                  href={member.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/75 transition hover:text-orange-400"
                >
                  <span>Connect on X</span>
                  <LuExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
