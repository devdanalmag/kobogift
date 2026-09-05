import { ARC_TESTNET, getArcExplorerAddressUrl } from "@/utils";

export type LandingStep = {
  num: string;
  icon: string;
  title: string;
  badge: string;
  text: string;
  details: string[];
};

export const LANDING_STEPS: LandingStep[] = [
  {
    num: "01",
    icon: "gem",
    badge: "Lock On-Chain",
    title: "Choose Amount & Lock USDC",
    text: "Set any USDC amount and customize an optional message. One confirmation locks funds in the verified Arc smart contract.",
    details: [
      "Supported on Arc L1 with native USDC",
      "Set custom expiry (1h to 7 days)",
      "Zero wallet installation needed for sender",
    ],
  },
  {
    num: "02",
    icon: "link",
    badge: "Share Anywhere",
    title: "Generate Secure Claim Link",
    text: "A unique URL is created instantly. Drop it into WhatsApp, Telegram, Discord, iMessage, email, or show as a QR code.",
    details: [
      "Claim secret stored client-side in #fragment",
      "Never hits our servers — impossible to intercept",
      "Share across any messenger or social app",
    ],
  },
  {
    num: "03",
    icon: "zap",
    badge: "Instant Payout",
    title: "Recipient Unwraps in 1 Tap",
    text: "The recipient clicks the link, signs in with Google or email in 3 seconds, and the cash lands in their non-custodial wallet instantly.",
    details: [
      "Gasless relayer pays transaction fee ($0.00)",
      "Circle embedded wallet created in background",
      "Settlement in under 60 seconds",
    ],
  },
];

export const LANDING_COMPARISON = {
  oldWay: {
    title: "The Old Broken Way",
    subtitle: "15 minutes of crypto friction and lost users",
    points: [
      { text: "Ask recipient for complex 42-character 0x address", bad: true },
      { text: "Force them to download browser extension or mobile wallet", bad: true },
      { text: "Make them write down 12-word seed phrases on paper", bad: true },
      { text: "Require them to buy gas tokens (ETH/SOL/MATIC) first", bad: true },
      { text: "Wrong network selection leads to permanently lost funds", bad: true },
    ],
  },
  newWay: {
    title: "The KoboGift Way",
    subtitle: "Under 60 seconds from link click to real cash",
    points: [
      { text: "Zero crypto knowledge or wallet needed beforehand", bad: false },
      { text: "Sign in with 1-tap Google or Email OTP", bad: false },
      { text: "Non-custodial Circle wallet provisioned silently", bad: false },
      { text: "100% gasless for recipient — relayer covers fees", bad: false },
      { text: "Unclaimed funds automatically return to sender after expiry", bad: false },
    ],
  },
};

export const LANDING_USE_CASES = [
  {
    icon: "gift",
    title: "Gifts & Celebrations",
    subtitle: "Birthdays, holidays, congratulations",
    text: "Send digital cash to friends or family anywhere in the world. They tap the link, sign in with Google, and the money is theirs in seconds.",
    tag: "Social",
    amount: "$25.00 USDC",
  },
  {
    icon: "briefcase",
    title: "Freelancer Payouts",
    subtitle: "Global contractor & gig payments",
    text: "Pay international freelancers, designers, and developers instantly without bank wire delays, cross-border fees, or crypto setup.",
    tag: "Business",
    amount: "$350.00 USDC",
  },
  {
    icon: "coffee",
    title: "Micro-Tips & Bounties",
    subtitle: "Content creators & community rewards",
    text: "Reward contributors on Discord, Twitter/X, or GitHub with instant claim links. Perfect for hackathons, bounties, and creator tips.",
    tag: "Creators",
    amount: "$15.00 USDC",
  },
  {
    icon: "rocket",
    title: "Viral Community Giveaways",
    subtitle: "Marketing campaigns & bulk drops",
    text: "Generate batch claim links (up to 50 links in a single transaction) or host a public airdrop campaign for your community.",
    tag: "Growth",
    amount: "$100.00 USDC",
  },
  {
    icon: "smartphone",
    title: "One-Tap Payment Requests",
    subtitle: "Bill splitting & pay-me links",
    text: "Need to get paid? Generate a request link with your custom note. Payer opens it and approves USDC with one click.",
    tag: "Payments",
    amount: "$50.00 USDC",
  },
  {
    icon: "shield",
    title: "Zero-Risk Expiry Protection",
    subtitle: "Never lose unclaimed funds",
    text: "If the recipient doesn't claim before your chosen deadline, 100% of the funds return directly to your wallet with one click.",
    tag: "Security",
    amount: "100% Refundable",
  },
] as const;

export const LANDING_PILLARS = [
  {
    icon: "lock",
    title: "Client-Side Cryptography",
    desc: "The claim secret lives only in the URL hash fragment (#secret). It never touches our servers. The contract stores only keccak256(secret).",
  },
  {
    icon: "zap",
    title: "Sub-Second Arc L1 Finality",
    desc: "Built natively on the Arc Layer-1 blockchain for instant transaction confirmation and predictable, micro-cent network costs.",
  },
  {
    icon: "fuel",
    title: "Gasless Recipient Relayer",
    desc: "Recipients don't need a single cent of gas. Our backend relayer pays transaction fees on Arc so onboarding is frictionless.",
  },
  {
    icon: "wallet",
    title: "Circle Non-Custodial Wallets",
    desc: "User-controlled smart contract accounts (SCA) secured by Google OAuth and passkeys. No seed phrases to lose.",
  },
] as const;

export const LANDING_ROADMAP = [
  {
    phase: "Phase 1",
    title: "Core Protocol & Arc L1",
    status: "done" as const,
    date: "Live on Arc Testnet",
    items: [
      "Non-custodial gift smart contract (VibeLinkGift.sol)",
      "Circle Programmable Wallets with Google & Email OTP",
      "Gasless claim relayer architecture",
      "Dynamic link generation with client-side secret fragment",
      "Payment request links (one-tap USDC checkout)",
    ],
  },
  {
    phase: "Phase 2",
    title: "Batch & Growth Engine",
    status: "active" as const,
    date: "Current Phase",
    items: [
      { text: "Multi-recipient batch creation (up to 50 links per tx)", done: true },
      { text: "Community airdrop campaigns with claim limits", done: true },
      "Mobile PWA with offline-first caching & push alerts",
      "Public Developer API & Webhooks",
    ],
  },
  {
    phase: "Phase 3",
    title: "Mainnet & Global Scale",
    status: "planned" as const,
    date: "Mainnet Horizon",
    items: [
      "Arc Mainnet deployment with real USDC",
      "CCTP cross-chain bridge integration",
      "Direct fiat on/off-ramps via Circle",
      "Embeddable checkout SDK for web & mobile apps",
    ],
  },
] as const;

export const LANDING_FAQ = [
  {
    q: "How does KoboGift work without requiring the recipient to have a crypto wallet?",
    a: "When a recipient opens a gift link and signs in with Google or email, Circle's Web3 Services creates a non-custodial User-Controlled Smart Contract Wallet silently in the background. The recipient never has to write down a seed phrase or install a browser extension.",
  },
  {
    q: "Is it safe? Can KoboGift or anyone else steal my funds?",
    a: "No. Your USDC is locked directly in a verified open-source smart contract on Arc — not held in our custody. The decryption secret lives exclusively after the `#` in the link URL, which browsers never send to web servers. Only the person holding the full link can trigger a claim.",
    links: [
      {
        label: "Verified contract on ArcScan",
        href: `${getArcExplorerAddressUrl(ARC_TESTNET.giftContractAddress)}?tab=contract`,
      },
      {
        label: "Source code on GitHub",
        href: "https://github.com/DevDanAlmag/kobogift",
      },
    ],
  },
  {
    q: "What if the person I send the gift to never opens or claims it?",
    a: "You have complete peace of mind. When creating a gift, you set an expiration time (e.g. 24 hours, 3 days, or 7 days). Once expired, you can reclaim 100% of your USDC back into your wallet with a single tap from your dashboard.",
  },
  {
    q: "Who pays for the blockchain gas fee when claiming?",
    a: "KoboGift operates an automated gasless relayer on Arc L1. The relayer sponsors the gas fee on behalf of the recipient. The recipient receives 100% of the gifted USDC without spending a single cent.",
  },
  {
    q: "What is Arc Testnet and how can I try it right now?",
    a: "Arc is a high-performance Layer-1 blockchain with native USDC gas fees. KoboGift is currently running on the Arc Testnet. You can get free testnet USDC in seconds from faucet.circle.com and start sending gift links immediately.",
  },
  {
    q: "Can I use KoboGift to request payments from clients or friends?",
    a: "Yes! Navigate to `/request` to generate a personalized payment request link. Share it with your payer, who can connect and send the requested USDC with one confirmation.",
  },
] as const;
