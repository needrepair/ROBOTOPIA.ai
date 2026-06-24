import Image from "next/image";

const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 48;

interface LogoImageProps {
  className?: string;
  priority?: boolean;
}

export function LogoImage({ className = "h-8 w-auto", priority = false }: LogoImageProps) {
  return (
    <Image
      src="/robotopia-logo.png"
      alt="ROBOTOPIA"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={`object-contain object-left ${className}`}
      priority={priority}
      style={{ width: "auto", maxWidth: "220px" }}
    />
  );
}
