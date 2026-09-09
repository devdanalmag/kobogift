export type SenderGiftStatus = "active" | "expired" | "claimed" | "reclaimed";

export type StoredSenderGiftItem = {
  paymentIdHash: string;
  status: SenderGiftStatus;
  amountUsdc: string;
  refundAddress: string;
  expiresAt: number;
  createdAt: string;
  fundedTxHash: string;
  reclaimTxHash?: string;
  senderDisplayName?: string;
  giftMessage?: string;
};

export type StoredReceivedGiftItem = {
  paymentIdHash: string;
  amountUsdc: string;
  txHash: string;
  senderDisplayName?: string | null;
  giftMessage?: string | null;
  claimedAt?: string | null;
};

const SENT_STORAGE_PREFIX = "kobogift:sent_gifts:";
const RECEIVED_STORAGE_PREFIX = "kobogift:received_gifts:";

function normalizeAddr(addr: string): string {
  return addr.trim().toLowerCase();
}

export function saveLocalSentGift(
  walletAddress: string,
  gift: StoredSenderGiftItem
): void {
  if (typeof window === "undefined" || !walletAddress) return;
  try {
    const key = `${SENT_STORAGE_PREFIX}${normalizeAddr(walletAddress)}`;
    const existing = getLocalSentGifts(walletAddress);
    // Deduplicate by paymentIdHash
    const filtered = existing.filter(
      (item) => item.paymentIdHash.toLowerCase() !== gift.paymentIdHash.toLowerCase()
    );
    const updated = [gift, ...filtered].slice(0, 200);
    window.localStorage.setItem(key, JSON.stringify(updated));
  } catch {
    // Storage quota or disabled
  }
}

export function getLocalSentGifts(walletAddress: string): StoredSenderGiftItem[] {
  if (typeof window === "undefined" || !walletAddress) return [];
  try {
    const key = `${SENT_STORAGE_PREFIX}${normalizeAddr(walletAddress)}`;
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredSenderGiftItem[]) : [];
  } catch {
    return [];
  }
}

export function updateLocalSentGift(
  walletAddress: string,
  paymentIdHash: string,
  updates: Partial<StoredSenderGiftItem>
): void {
  if (typeof window === "undefined" || !walletAddress) return;
  try {
    const key = `${SENT_STORAGE_PREFIX}${normalizeAddr(walletAddress)}`;
    const existing = getLocalSentGifts(walletAddress);
    const updated = existing.map((item) =>
      item.paymentIdHash.toLowerCase() === paymentIdHash.toLowerCase()
        ? { ...item, ...updates }
        : item
    );
    window.localStorage.setItem(key, JSON.stringify(updated));
  } catch {
    // Ignore
  }
}

export function saveLocalReceivedGift(
  walletAddress: string,
  gift: StoredReceivedGiftItem
): void {
  if (typeof window === "undefined" || !walletAddress) return;
  try {
    const key = `${RECEIVED_STORAGE_PREFIX}${normalizeAddr(walletAddress)}`;
    const existing = getLocalReceivedGifts(walletAddress);
    const filtered = existing.filter(
      (item) => item.paymentIdHash.toLowerCase() !== gift.paymentIdHash.toLowerCase()
    );
    const updated = [gift, ...filtered].slice(0, 200);
    window.localStorage.setItem(key, JSON.stringify(updated));
  } catch {
    // Storage quota or disabled
  }
}

export function getLocalReceivedGifts(walletAddress: string): StoredReceivedGiftItem[] {
  if (typeof window === "undefined" || !walletAddress) return [];
  try {
    const key = `${RECEIVED_STORAGE_PREFIX}${normalizeAddr(walletAddress)}`;
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredReceivedGiftItem[]) : [];
  } catch {
    return [];
  }
}
