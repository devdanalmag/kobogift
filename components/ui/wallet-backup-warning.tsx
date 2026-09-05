"use client";

import { LuKey } from "react-icons/lu";

type WalletBackupWarningProps = {
  className?: string;
  variant?: "withWalletLink" | "inlineExportHint";
};

export function WalletBackupWarning({ className, variant = "withWalletLink" }: WalletBackupWarningProps) {
  void variant;
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-left text-sm text-white/70 ${className ?? ""}`}
    >
      <p className="font-medium text-white/90 flex items-center gap-1.5">
        <LuKey className="w-4 h-4 text-orange-400 shrink-0" /> Secured by your account
      </p>
      <p className="mt-1 text-xs leading-relaxed text-white/55">
        No seed phrase. If you lose access — just sign in again with the same method.
        Circle never stores your private key.
      </p>
    </div>
  );
}
