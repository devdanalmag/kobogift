"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dismissToast, subscribeToasts } from "@/lib/client/toast";
import { LuCheck, LuCircleAlert, LuInfo, LuX } from "react-icons/lu";

type ToastItem = { id: number; message: string; type: "success" | "error" | "info" };

const TYPE_CLASS: Record<ToastItem["type"], string> = {
  success: "border-orange-500/40 bg-orange-950/80 text-orange-200",
  error: "border-rose-500/40 bg-rose-950/80 text-rose-200",
  info: "border-white/15 bg-black/80 text-white/85",
};

function ToastIcon({ type }: { type: ToastItem["type"] }) {
  if (type === "success") return <LuCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />;
  if (type === "error") return <LuCircleAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />;
  return <LuInfo className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />;
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => subscribeToasts(setToasts), []);

  return (
    <div
      aria-live="polite"
      className="fixed bottom-5 right-4 z-[200] flex flex-col items-end gap-2 sm:right-6"
    >
      <AnimatePresence initial={false}>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            layout
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.15 } }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`flex max-w-[340px] items-start gap-2.5 rounded-xl border px-4 py-3 text-sm shadow-2xl backdrop-blur-md ${TYPE_CLASS[t.type]}`}
          >
            <ToastIcon type={t.type} />
            <span className="leading-snug">{t.message}</span>
            <button
              type="button"
              onClick={() => dismissToast(t.id)}
              aria-label="Dismiss"
              className="ml-1 shrink-0 p-0.5 opacity-50 transition hover:opacity-100"
            >
              <LuX className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
