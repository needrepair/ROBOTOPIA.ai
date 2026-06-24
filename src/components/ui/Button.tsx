"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

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
      "bg-white text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5",
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
    <a
      href="#"
      className="text-sm font-medium tracking-[0.2em] text-white transition-opacity hover:opacity-70"
    >
      {siteConfig.name}
    </a>
  );
}
