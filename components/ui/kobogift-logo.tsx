import LogoMark from "@/components/ui/logo-mark";

type KoboGiftLogoProps = {
  className?: string;
  iconOnly?: boolean;
  size?: number;
};

export default function KoboGiftLogo({
  className,
  iconOnly = false,
  size = 28,
}: KoboGiftLogoProps) {
  if (iconOnly) return <LogoMark size={size} />;

  return (
    <span
      className={`kobogift-logo ${className ?? ""}`.trim()}
      style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
    >
      <LogoMark size={size} />
      <span
        style={{
          fontFamily: "var(--font-display), var(--font-body), sans-serif",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          fontSize: "inherit",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <span style={{ color: "var(--text)" }}>Kobo</span>
        <span
          style={{
            color: "#f97316",
            marginLeft: 2,
          }}
        >
          Gift
        </span>
      </span>
    </span>
  );
}
