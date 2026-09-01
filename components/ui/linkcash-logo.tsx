import KoboGiftLogo from "@/components/ui/kobogift-logo";

export type LinkCashLogoProps = {
  className?: string;
  iconOnly?: boolean;
  size?: number;
};

export default function LinkCashLogo(props: LinkCashLogoProps) {
  return <KoboGiftLogo {...props} />;
}

