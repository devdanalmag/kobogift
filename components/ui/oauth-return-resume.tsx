"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCircleWallet } from "@/features/circle-wallet/model/circle-wallet-provider";
import {
  clearOAuthReturnTarget,
  getCurrentAppPath,
  getOAuthReturnTarget,
} from "@/lib/client/oauth-return";

/**
 * After Google OAuth the browser lands on site origin (/). Resume the saved gift URL.
 * Uses router.push (soft nav) so React state is preserved — no re-hydration needed.
 */
export default function OAuthReturnResume() {
  const { ready, authenticated, walletSyncing } = useCircleWallet();
  const router = useRouter();

  useEffect(() => {
    if (!ready || !authenticated || walletSyncing) return;
    const target = getOAuthReturnTarget();
    clearOAuthReturnTarget();
    const current = getCurrentAppPath();
    // Default to /wallet when no saved return target (e.g. signed in from landing page)
    const destination = target || "/wallet";
    if (current !== destination) {
      router.push(destination);
    }
  }, [ready, authenticated, walletSyncing, router]);

  return null;
}
