import type { JSX } from "react";
import {
  LuGem,
  LuLink,
  LuZap,
  LuGift,
  LuBriefcase,
  LuCoffee,
  LuRocket,
  LuSmartphone,
  LuShieldCheck,
  LuLock,
  LuFuel,
  LuWallet,
  LuSearch,
  LuBell,
  LuKey,
  LuBanknote,
  LuPartyPopper,
  LuUtensils,
  LuCheck,
  LuX,
  LuInbox,
  LuRotateCcw,
  LuTriangleAlert,
  LuCircleAlert,
  LuClock,
  LuSparkles,
} from "react-icons/lu";

type ContentIconProps = {
  name: string;
  className?: string;
};

export function ContentIcon({ name, className }: ContentIconProps): JSX.Element | null {
  const cn = className ?? "w-5 h-5";
  switch (name) {
    case "gem":
      return <LuGem className={cn} />;
    case "link":
      return <LuLink className={cn} />;
    case "zap":
      return <LuZap className={cn} />;
    case "gift":
      return <LuGift className={cn} />;
    case "briefcase":
      return <LuBriefcase className={cn} />;
    case "coffee":
      return <LuCoffee className={cn} />;
    case "rocket":
      return <LuRocket className={cn} />;
    case "smartphone":
      return <LuSmartphone className={cn} />;
    case "shield":
      return <LuShieldCheck className={cn} />;
    case "lock":
      return <LuLock className={cn} />;
    case "fuel":
      return <LuFuel className={cn} />;
    case "wallet":
      return <LuWallet className={cn} />;
    case "search":
      return <LuSearch className={cn} />;
    case "bell":
      return <LuBell className={cn} />;
    case "key":
      return <LuKey className={cn} />;
    case "banknote":
      return <LuBanknote className={cn} />;
    case "party":
      return <LuPartyPopper className={cn} />;
    case "utensils":
      return <LuUtensils className={cn} />;
    case "check":
      return <LuCheck className={cn} />;
    case "x":
      return <LuX className={cn} />;
    case "inbox":
      return <LuInbox className={cn} />;
    case "rotate-ccw":
      return <LuRotateCcw className={cn} />;
    case "alert":
      return <LuTriangleAlert className={cn} />;
    case "info":
      return <LuCircleAlert className={cn} />;
    case "clock":
      return <LuClock className={cn} />;
    case "sparkles":
      return <LuSparkles className={cn} />;
    default:
      return null;
  }
}
