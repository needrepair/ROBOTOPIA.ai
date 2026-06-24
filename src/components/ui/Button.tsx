"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ href, variant = "primary", children }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300";
  const variants = {
    primary:
      "bg-orange text-black hover:bg-orange-light hover:shadow-orange-glow active:scale-[0.98]",
    secondary:
      "border border-white/10 bg-transparent text-silver-light hover:border-orange/40 hover:text-silver-light hover:bg-white/[0.03]",
  };

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </motion.a>
  );
}

export function Logo() {
  return (
    <a href="#" className="group flex items-center gap-3 transition-opacity hover:opacity-80">
      <Image
        src="/robotopia-logo.jpg"
        alt="ROBOTOPIA"
        width={120}
        height={32}
        className="h-7 w-auto md:h-8"
        priority
      />
    </a>
  );
}
