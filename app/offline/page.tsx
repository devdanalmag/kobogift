"use client";

import { LuWifiOff } from "react-icons/lu";

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a10] px-4">
      <div className="text-center space-y-4">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-2">
          <LuWifiOff className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-white">You're offline</h1>
        <p className="text-white/50 text-sm">
          Check your connection and try again.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-2 rounded-xl border border-white/15 bg-white/8 px-5 py-2.5 text-sm text-white/70 transition hover:bg-white/15"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
