"use client";

import { useEffect, useState } from "react";
import { LuSmartphone } from "react-icons/lu";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "linkcash_pwa_dismissed";

export default function PwaInstallPrompt() {
  const [platform, setPlatform] = useState<"ios" | "android" | null>(null);
  const [androidPrompt, setAndroidPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    if ((navigator as unknown as { standalone?: boolean }).standalone) return;

    // Check if dismissed recently (7 days)
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed && Date.now() - Number(dismissed) < 7 * 86_400_000) return;

    const ua = navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);

    if (isIos) {
      setPlatform("ios");
      setVisible(true);
    } else if (isAndroid) {
      setPlatform("android");
      const handler = (e: Event) => {
        e.preventDefault();
        setAndroidPrompt(e as BeforeInstallPromptEvent);
        setVisible(true);
      };
      window.addEventListener("beforeinstallprompt", handler);
      return () => window.removeEventListener("beforeinstallprompt", handler);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setVisible(false);
  };

  const installAndroid = () => {
    androidPrompt?.prompt();
    dismiss();
  };

  if (!visible || !platform) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-2xl border border-white/15 bg-[#111118]/95 p-4 shadow-2xl backdrop-blur-md">
      <div className="flex items-start gap-3">
        <LuSmartphone className="mt-0.5 w-6 h-6 text-orange-400 shrink-0" />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold text-white">Add to Home Screen</p>
          {platform === "ios" ? (
            <p className="text-xs text-white/55">
              Tap <span className="text-white/80">Share</span> then{" "}
              <span className="text-white/80">Add to Home Screen</span> for the best experience.
            </p>
          ) : (
            <p className="text-xs text-white/55">
              Install KoboGift for quick access to your wallet and gifts.
            </p>
          )}
          {platform === "android" && (
            <button
              type="button"
              onClick={installAndroid}
              className="mt-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/15"
            >
              Install
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="text-white/30 hover:text-white/60 text-lg leading-none"
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
    </div>
  );
}
